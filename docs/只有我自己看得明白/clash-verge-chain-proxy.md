# Clash Verge 链式代理 Timeout 的解决方案

> **⚡ 懒人模式**：先看一遍[原理](#原理说明)，了解思路后，直接把本文档和你的静态 ISP SOCKS5 配置信息一起丢给 AI，让它帮你生成完整的 YAML 配置，粘贴进 Clash Verge 即可。

> 灵感来源：[Linux.do - 解锁设备用的clash规则](https://linux.do/t/topic/710232)

---

## 问题背景

Clash Verge Rev 自带**链式代理（Proxy Chain）**可视化配置，界面操作方便，但实际使用中**非常容易出现 timeout**，连接不稳定，体验很差。

如果你已经导入了订阅、配好了链式代理，但频繁遇到超时，那这篇文章就是为你写的。

**根因**：内置的链式代理走的是 HTTP CONNECT 隧道，中间多了一层握手，DNS 解析时机也不可控，叠加后容易超时。

**本方案思路**：放弃 Clash Verge 的内置链式代理功能，改用**手动配置 mix-policy + HTTP 节点**的方式实现等效链路，实测 **99% 的 timeout 问题都能解决**。

---

## 原理说明

等效链路：

```
Mac (Clash Verge: TUN/系统代理)
        ↓ HTTP 代理节点
远程旁路网关 (mihomo / Clash)
        ↓
     互联网
```

关键区别在于：

| | Clash Verge 内置链式代理 | 本方案 |
|---|---|---|
| 连接方式 | HTTP CONNECT 隧道 | 普通 HTTP 代理节点 |
| DNS 处理 | 不可控，易冲突 | 远程侧统一处理 |
| Timeout 概率 | 高 | 极低（实测 99% 解决） |
| 配置方式 | GUI 拖拽 | 手动改 YAML |

简单来说：Clash Verge 只负责本地接管流量，远程网关负责规则匹配和出站，各司其职，避免了内置链式代理的隧道开销。

---

## 操作步骤

> **前提**：你已经在 Clash Verge 中导入了订阅，且存在链式代理 timeout 的问题。

### Step 1：把远程网关加入 proxies

在你的订阅配置或 Clash Verge 的 `proxies` 区域，**手动添加一条 HTTP 代理节点**，指向你的远程网关：

```yaml
proxies:
  # ← 你的订阅节点会自动生成在这里，不要动它们
  # ...
  
  # 手动添加这一条 ↓
  - name: "Remote Gateway"
    type: http
    server: 192.168.x.x    # 替换为你的远程网关局域网 IP
    port: 2802              # 替换为你的远程网关 HTTP 端口
    ip-version: ipv4
```

> 如果你的远程网关用的是 SOCKS5，`type` 改成 `socks5`，端口对应 SOCKS5 端口。

### Step 2：把这条节点塞进你的策略组

找到你的主策略组（一般是 `proxy-groups` 里的第一个，名字可能是 `节点选择`、`🚀 节点服务` 之类的），把刚加的 `Remote Gateway` 进去：

```yaml
proxy-groups:
  - name: "节点选择"        # 替换成你的实际策略组名
    type: select
    proxies:
      - "Remote Gateway"   # ← 加上这一行，放在最前面
      - DIRECT
      # ... 你的订阅节点 ...
```

**重点**：`Remote Gateway` 要放在 `DIRECT` 前面，这样它才会优先生效。

### Step 3：找到「漏网之鱼」策略组并修改

你的配置里应该有一个兜底策略组（名字通常是 `🐟 漏网之鱼`、`Final`、`Match` 等，`type` 是 `select`，`proxies` 里有 `DIRECT`），把它改成：

```yaml
  - name: "🐟 漏网之鱼"   # 替换成你的实际名字
    type: select
    proxies:
      - "Remote Gateway"  # ← 首选走远程网关
      - "节点选择"          # ← 备选走订阅节点
      - DIRECT
```

这样**所有规则没匹配到的流量**都先走远程网关，由远程侧统一处理规则匹配，你本地的 Clash Verge 只是一个「透明管道」。

### Step 4：删除 Clash Verge 内置的链式代理配置

如果你之前在 Clash Verge 的 GUI 里配过链式代理（Proxy Chain），**把它删掉或禁用**，否则会和我们手动配置的方案冲突，反而又出现 timeout。

### Step 5：测试

```bash
ping google.com
# 应该返回 fake-ip（198.18.x.x），说明 DNS 已接管

curl -I https://www.google.com
# 应该返回 200，说明链路通了
```

---

## DNS 配置（可选但推荐）

如果你的远程网关已经配好了 DNS 分流，本地 Clash Verge 的 DNS 可以简化为：

```yaml
dns:
  enable: true
  listen: :1053
  ipv6: false
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query
  fallback:
    - https://dns.cloudflare.com/dns-query
    - https://dns.google/dns-query
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
```

> `nameserver`（国内 DoH）解析国内域名，`fallback`（Cloudflare/Google DoH）解析代理域名。`fallback-filter` 配合 GeoIP：解析结果是大陆 IP 就直接用国内结果，不走 fallback。

---

## 常见问题

### Clash Verge 不是有内置的链式代理配置吗？为什么还要手动搞？

内置的链式代理走 HTTP CONNECT 隧道，实测非常容易 timeout，尤其是局域网→远程网关这一跳，连接成功率很低。本方案用 HTTP 代理节点手动实现等效链路，绕过了隧道机制，**实测 99% 的 timeout 问题都解决了**。

---

### 我的远程网关不是 mihomo，能用吗？

可以，只要是支持 HTTP/SOCKS5 出站的代理工具都行（Clash、v2ray、sing-box 等），关键是你要知道它的 **IP、端口、协议类型**。

---

### 端口怎么填？

填你远程网关对外暴露的 HTTP 代理端口。mihomo 默认是 `mixed-port`（一般是 `7890` 或 `2802`），看你自己的配置。

---

### fake-ip 会漏 DNS 吗？

不会。fake-ip 模式下所有域名先返回假 IP，真实解析在代理侧完成，不泄露。

---

### 我在 Clash Verge 点「更新订阅」，会覆盖掉手动加的配置吗？

**会的。** 更新订阅会重写 `proxies` 和 `proxy-groups`，你手动加的 `Mihomo (HTTP Inbound)` 节点和策略组改动都会被冲掉。解决办法是用 Clash Verge 的**覆写（Override / Merge）**功能：新建一个覆写文件，把 `Mihomo (HTTP Inbound)` 节点和策略组的改动写在里面，这样每次更新订阅后覆写规则会自动合并回去，不需要重新手动改。

---

### 如果我不小心在 Node-Select 里点到了别的节点，会有什么影响？

Node-Select 是手动选择组（`type: select`），里面有三个选项：`Auto-Select (Entry)`、`DIRECT`、以及各个地区分组。

- **选回 `Auto-Select (Entry)`**（默认）：正常，流量走自动择优的 SOCKS5 入口节点。
- **选了某个地区分组（如 `🇭🇰 香港节点`）**：流量绕过了 Auto-Select 的自动择优，直接走你手动指定的地区分组出站。功能上没问题，只是少了自动择优，可能选到慢节点。
- **选了 `DIRECT`**：流量直连出站，完全绕过了代理和 mihomo，**等于没挂代理**。

所以保持 `Auto-Select (Entry)` 就好，别动它。

---

### 配置好后，流量到底是怎么走的？

**场景一：规则命中的流量（如 `www.google.com`）**

```
浏览器发起请求
    ↓
Clash Verge (TUN/系统代理) 接管流量，DNS 返回 fake-ip
    ↓
规则匹配 → 命中 DOMAIN-SUFFIX,google.com → 进入「Google」策略组
    ↓
「Google」策略组 → 走「🇭🇰 香港节点」分组
    ↓
「🇭🇰 香港节点」→ url-test 自动择优 → 选出延迟最低的 SOCKS5 入口节点
    ↓
流量经该 SOCKS5 节点到达远程 mihomo 网关
    ↓
mihomo 负责实际出站到互联网
```

**场景二：规则未命中的流量（漏网之鱼）**

```
浏览器发起请求
    ↓
Clash Verge 接管，规则未命中 → 进入「Final (Exit)」兜底策略
    ↓
「Final (Exit)」→ 「Node-Select」→ 「Auto-Select (Entry)」
    ↓
url-test 自动择优 → 选出延迟最低的 SOCKS5 入口节点
    ↓
到达远程 mihomo 网关 → 出站
```

简单来说：**规则命中的走对应地区分组（也是自动择优），没命中的走兜底链路（同样是自动择优）**，两条路最终都经过你选好的 SOCKS5 入口节点到达远程网关，全程由远程侧负责规则匹配和出站。
