# Clash Verge 链式代理：用 dialer-proxy 手写两跳链路

> **⚡ 懒人模式**：先看一遍[原理](#原理说明)，了解 `dialer-proxy` 的思路后，直接把本文档和你的落地节点（静态住宅 SOCKS5）信息一起丢给 AI，让它帮你生成完整 YAML，粘贴进 Clash Verge 即可。

> 灵感来源：[Linux.do - 解锁设备用的clash规则](https://linux.do/t/topic/710232)

---

## 问题背景

Clash Verge Rev 自带**链式代理（Proxy Chain）**可视化配置，界面拖一拖就能连，但实际用起来有两个坑：

1. **容易 timeout**：GUI 生成的链路不透明，中间多一层握手，连接不稳定。
2. **不好维护**：拖拽出来的东西看不见摸不着，出了问题不知道从哪查。

**本方案思路**：放弃 GUI 拖拽，改用 mihomo 原生的 **`dialer-proxy` 字段**手写链式代理。一行配置把「入口组」和「落地节点」串成两跳，链路清晰、稳定，也是 mihomo 官方推荐的做法。

---

## 原理说明

链式代理的本质是**两跳**：先经过一个「入口」翻墙出去，再从境外连到「落地」出口。

```
你的设备 (Clash Verge: TUN/系统代理)
        ↓ 第一跳：入口（自动择优翻墙）
⚡️ Auto-Select (Entry)   ← url-test 从一堆机场节点里挑延迟最低的
        ↓ 第二跳：落地（固定出口 IP）
🇺🇸 Static-IP-Washington  ← 固定的美国住宅 SOCKS5
        ↓
     目标网站  ← 对外呈现的是这个固定住宅 IP
```

**命门只有一行** —— 落地节点里的 `dialer-proxy` 字段：

```yaml
- name: 🇺🇸 Static-IP-Washington
  type: socks5
  server: <你的住宅IP>
  port: 443
  username: xxxxxx
  password: xxxxxx
  dialer-proxy: ⚡️ Auto-Select (Entry)   # ← 命门在这
```

`dialer-proxy` 的含义：**在连接这个落地节点之前，先把流量丢给 `⚡️ Auto-Select (Entry)` 走一遍**，从而形成两跳链路。落地节点不再从你本地直连，而是经入口通道再连出去。

**为什么要这么设计**：住宅 IP 的 SOCKS5 在国内往往直连不通、又慢又不稳。所以先用机场节点（入口组）稳定翻墙到境外，再从境外去连这个住宅落地。最终效果：**链路稳（机场保证），出口 IP 干净固定（住宅保证）**，适合养号、跨境电商、需要固定原生 IP 的场景。

| | GUI 拖拽链式代理 | 本方案（dialer-proxy） |
|---|---|---|
| 配置方式 | GUI 拖拽，不透明 | 手写 YAML，一行搞定 |
| 底层机制 | 封装的隧道 | mihomo 原生 dialer-proxy |
| 可维护性 | 差，出问题难查 | 好，链路一目了然 |
| Timeout 概率 | 高 | 低 |

---

## 操作步骤

> **前提**：你已在 Clash Verge 导入订阅（机场节点会自动生成），并且手上有一个落地用的静态住宅 SOCKS5（IP、端口、账号、密码）。

### Step 1：加落地节点，挂上 dialer-proxy

在 `proxies` 区域加一条落地节点，`dialer-proxy` 指向你的入口组：

```yaml
proxies:
  # ← 订阅节点会自动生成在这里，不要动
  # ...

  # 手动添加落地节点 ↓
  - name: 🇺🇸 Static-IP-Washington
    type: socks5              # 落地是 http 就改成 http
    server: <你的住宅IP>       # 替换为你的住宅 IP
    port: 443
    username: xxxxxx
    password: xxxxxx
    dialer-proxy: ⚡️ Auto-Select (Entry)   # ← 指向下面 Step 2 的入口组
```

### Step 2：建入口组，用 url-test 自动择优

在 `proxy-groups` 里建一个 `url-test` 组，把订阅里的机场节点都塞进去，让它自动测速选最快的：

```yaml
proxy-groups:
  - name: ⚡️ Auto-Select (Entry)
    type: url-test
    proxies:
      - 🇭🇰 HK香港-01
      - 🇯🇵 JP日本-01
      - 🇸🇬 SG新加坡-01
      # ... 你的机场节点，越多越好，自动挑延迟最低的 ...
    url: http://www.gstatic.com/generate_204
    interval: 300      # 每 300 秒测一次速
    tolerance: 20      # 延迟差 20ms 以内不切换，防抖动
```

> **避免自环**：入口组里放的是**机场节点**，千万别把落地节点 `Static-IP-Washington` 自己放进去，否则会形成"自己拨自己"的死循环。

### Step 3：把落地节点放进你的选择组

找到主选择组（`节点选择` 或各地区分组），把落地节点加进去，方便手动切换：

```yaml
  - name: 节点选择
    type: select
    proxies:
      - 🇺🇸 Static-IP-Washington   # ← 加上落地节点
      - ⚡️ Auto-Select (Entry)
      # ... 其他节点 ...
```

### Step 4：删掉 GUI 里的链式代理配置

如果你之前在 Clash Verge 的 GUI 里拖过链式代理（Proxy Chain），**删掉或禁用**，否则会和手写的 `dialer-proxy` 冲突。

### Step 5：测试

```bash
# 选中 Static-IP-Washington 后，查出口 IP
curl -x socks5://127.0.0.1:7890 https://api.ipify.org
# 应返回你的美国住宅 IP（你的住宅 IP 同段），说明两跳链路通了

curl -I https://www.google.com
# 返回 200，说明链路可用
```

---

## 常见问题

### `dialer-proxy` 和 GUI 的链式代理有什么区别？

`dialer-proxy` 是 mihomo 内核原生字段，写在节点上，明确指定"连这个节点前先走哪条通道"，链路清晰、稳定。GUI 拖拽出来的链式代理是一层封装，不透明且容易 timeout。本方案就是绕开 GUI，直接用内核能力。

---

### 入口组为什么用 `url-test` 而不是 `select`？

`url-test` 会每隔 `interval` 秒自动测速，挑延迟最低的机场节点当入口，还有 `tolerance` 防止频繁抖动切换。你不用手动选，它自动保证第一跳又快又稳。

---

### 我有一条裸的 SOCKS5 节点（同一台住宅机），和 dialer-proxy 那条什么关系？

如果你的 `proxies` 里还有一条**没带 `dialer-proxy`** 的同 IP 节点，那是**直连版**（本地直接连住宅机，没走链式）；带 `dialer-proxy` 的 `Static-IP-Washington` 才是**链式版**（经入口通道再连）。两者指向同一台服务器，用途不同，别搞混。国内直连住宅机通常不通，所以日常用链式版。

---

### 落地节点是 HTTP 不是 SOCKS5 能用吗？

能。把 `type` 改成 `http`，端口和认证信息对应填就行。`dialer-proxy` 字段对 `socks5` / `http` 落地都适用。

---

### 我点「更新订阅」会覆盖掉手动加的落地节点吗？

**会的。** 更新订阅会重写 `proxies` 和 `proxy-groups`，你手动加的 `Static-IP-Washington` 节点、入口组改动都会被冲掉。解决办法：用 Clash Verge 的**覆写（Override / Merge）**功能，新建一个覆写文件，把落地节点、入口组、选择组的改动写进去，这样每次更新订阅后覆写规则会自动合并回来，不用重新手改。

---

### 选到别的节点会怎样？

- **选 `Static-IP-Washington`**：走完整两跳链式，出口是固定美国住宅 IP。
- **选 `⚡️ Auto-Select (Entry)`**：只走第一跳，出口是当前择优的机场节点 IP（不是住宅 IP）。
- **选 `DIRECT`**：直连，完全不走代理，等于没挂。

按需要选就行，要固定住宅 IP 就选 `Static-IP-Washington`。

---

### 配置好后，流量到底怎么走？

```
浏览器发起请求
    ↓
Clash Verge (TUN/系统代理) 接管流量
    ↓
选中 🇺🇸 Static-IP-Washington（带 dialer-proxy）
    ↓
第一跳：dialer-proxy → ⚡️ Auto-Select (Entry)
        → url-test 自动择优 → 选出延迟最低的机场节点 → 翻墙到境外
    ↓
第二跳：从境外连到住宅 IP（美国住宅 SOCKS5）落地
    ↓
出站到目标网站，对外 IP = 美国住宅 IP
```

简单来说：**第一跳靠机场自动择优保证链路稳，第二跳靠固定住宅节点保证出口 IP 干净固定**，两跳由 `dialer-proxy` 一行串起来。
