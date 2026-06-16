# Claude Code 代理配置与防封指南

## 风控触发机制

Anthropic 的风控体系主要从三个维度识别异常账号：

| 维度 | 触发条件 | 后果 |
|------|----------|------|
| **设备关联** | 同一浏览器指纹登录多个账号 | 连带封号 |
| **IP 风险** | 使用公共机房 IP（数万人共用） | 触发验证码或直接封号 |
| **行为异常** | 零延迟粘贴大段代码、24小时无停歇自动化调用 | 行为审计标记 |
| **内容违规** | 触发 Safety Policy | 无论网络多干净均封号 |

> 代理方案只解决"环境干净"问题，不保护"行为违规"封号。

---

## 工具推荐

### 指纹浏览器

<a href="https://www.adspower.net/share/KOy4m3" target="_blank"><img src="https://activity.adspower.com/ap/dist/fast/img/logo.df992b8c.svg" width="160" /></a>

注册时填写邀请码 **`KOy4m3`** 可享优惠。

### 静态 ISP

<a href="https://api.1024proxy.com/share/7sw66c5pr" target="_blank"><img src="https://dashboard.1024proxy.com/assets/1024proxy_logo-BngANJx1.svg" width="160" /></a>

注册时填写邀请码 **`7sw66c5pr`** 可享优惠。

---

## 推荐技术架构

### 黄金组合：指纹浏览器 + 静态 ISP + 机场链式代理

```
本地终端 / 指纹浏览器
        ↓
Clash Verge（Tun 模式 + 规则分流）
        ↓
机场节点（高速出境，如香港/美国专线）
        ↓
静态 ISP（住宅落地 IP，如美国 AT&T/Verizon）
        ↓
Claude / OpenAI 服务器
```

**各层职责：**
- **指纹浏览器**：隔离设备指纹，每个环境等于一台独立新电脑
- **静态 ISP**：提供固定住宅 IP，在目标网站眼中你是真实家庭用户
- **机场节点**：解决国内直连静态 ISP 速度慢/不稳定的问题（GFW 干扰）

---

## Clash Verge 链式代理配置

### 1. 添加静态 ISP 节点并绑定前置机场

在 Clash 配置文件（YAML）的 `proxies:` 节点下添加：

```yaml
proxies:
  - name: "美国住宅-落地"
    type: socks5          # 或 http，按服务商提供的类型填写
    server: 142.xx.xx.xx  # 静态 ISP 的 IP
    port: 10001
    username: user123
    password: pass123
    dialer-proxy: "机场-美国固定节点"  # 强绑定前置，不要用自动选择
```

`dialer-proxy` 是关键：一旦前置机场节点断线，整个落地节点在 Clash 内显示为 `Unavailable`，流量直接锁死，不会自动切换到普通机场 IP 泄漏。

### 2. 分流规则

将控制 AI 流量的策略组（通常叫 `OpenAI` 或 `AI`）手动指定为 `美国住宅-落地`，**不要**将普通机场节点放进同一个策略组当备胎。

### 3. 开启 Tun 模式安全设置

| 设置项 | 推荐值 | 作用 |
|--------|--------|------|
| Tun Mode | 开启 | 从系统底层接管所有流量，终端无需配置环境变量 |
| DNS 模式 | Fake-IP | 域名解析在 Clash 内部闭环，防 DNS 泄漏 |
| Strict Route | 开启 | Wi-Fi 断线重连瞬间，阻止任何流量绕过 Clash 裸连 |

---

## Claude Code 终端代理配置

### 方案 A：依赖 Tun 模式（最省心）

只要 Clash Verge 开启了 Tun 模式，终端所有网络请求自动被接管，无需任何额外配置。

验证是否生效：

```bash
curl ipinfo.io
# 返回的 IP 应该是你的静态 ISP IP，而非国内 IP
```

**注意**：Claude Code 原生不支持 SOCKS5 代理，Tun 模式会在内部帮你完成协议转换。如果直接运行 `claude` 出现 `Connecting...` 卡死，说明 Tun 模式的协议转换存在问题，切换到方案 B。

### 方案 B：显式注入 HTTP 代理（最可控）

```bash
# macOS / Linux
export HTTPS_PROXY=http://127.0.0.1:7897
export HTTP_PROXY=http://127.0.0.1:7897

# Windows (PowerShell)
$env:HTTPS_PROXY="http://127.0.0.1:7897"
$env:HTTP_PROXY="http://127.0.0.1:7897"
```

端口 `7897` 是 Clash Verge 默认 HTTP 代理端口，可在 Clash 设置中查看实际值。

流量路径：`Claude Code` → `Clash 本地端口（HTTP）` → `机场节点` → `静态 ISP` → `Anthropic 服务器`

> 注意：`export` 命令只对当前终端窗口生效，关闭后失效。

### 推荐：自定义 `claude+` 命令（一劳永逸）

在 `~/.zshrc` 末尾添加：

```bash
# 方式一：简单别名（不需要传参时使用）
alias claude+='HTTPS_PROXY=http://127.0.0.1:7897 HTTP_PROXY=http://127.0.0.1:7897 claude'

# 方式二：Shell 函数（支持传参，推荐）
claude+() {
    HTTPS_PROXY=http://127.0.0.1:7897 HTTP_PROXY=http://127.0.0.1:7897 claude "$@"
}
```

生效：

```bash
source ~/.zshrc
```

之后直接使用：

```bash
claude+                          # 启动交互式会话
claude+ -c                       # 恢复上次对话
claude+ "帮我看看这个报错"        # 带初始提问启动
```

变量只注入给 `claude` 进程本身，不影响同一终端下的其他命令。

---

## 完整操作流程（从注册到日常使用）

### 第一阶段：注册养号（在指纹浏览器中）

1. **第 1 天 - 环境预热**：不要急于注册，先在指纹浏览器里逛 Google/YouTube，让新环境积累真实的 Cookie 和历史轨迹
2. **第 2-3 天 - 注册账号**：
   - 使用有质量保证的独享海外虚拟号接码（避免公开廉价接码平台，IP 已被拉黑）
   - 每天模拟正常使用，发 3-5 个简单问题
3. **第 4 天 - 升级 Pro**：
   - 使用海外虚拟信用卡
   - **账单地址（Billing Address）必须与静态 ISP 所在州一致**，否则触发 Stripe 的距离欺诈算法

### 第二阶段：本地电脑接入

Claude Code 首次登录时会打开系统默认浏览器进行 OAuth 授权：

```
❌ 错误做法：直接点终端弹出的链接，在 Chrome/Safari 里登录
✅ 正确做法：右键复制授权 URL → 粘贴到指纹浏览器中完成授权
```

授权完成后，终端自动同步登录状态，后续使用 `claude+` 命令即可。

### 第三阶段：日常使用

每次开始工作前确认代理正常：

```bash
curl ipinfo.io  # 确认 IP 是静态 ISP 的住宅 IP，不是国内 IP
claude+         # 启动
```

---

## Wi-Fi 断线重连时的处理

Tun 模式下断线重连**不会泄漏真实 IP**，流量只会被憋死（表现为断网），绝不会绕过 Tun 裸连 Anthropic。

但可能出现以下情况：

| 现象 | 原因 | 处理 |
|------|------|------|
| 终端卡死不响应 | 旧 TCP 长连接在断线时已死，工具不知道 | `Ctrl+C` 终止，重新运行 `claude+` |
| 整台电脑断网，节点超时 | 机场节点重连时路由形成死循环（老版 Bug） | 在托盘重启 Tun 模式，或重启 Clash Verge |

---

## 静态 ISP IP 不会泄漏机场 IP 的原因

网站只能看到最后一跳的出口 IP，即静态 ISP 的住宅 IP。机场节点在将流量交给静态 ISP 时，加密握手已在内部消化，目标网站无从溯源。

**防泄漏关键配置清单：**

- [x] 策略组只放静态 ISP 节点，不放普通机场节点当备胎
- [x] 使用 `dialer-proxy` 强绑定前置机场节点，不用自动选速
- [x] 开启 Strict Route + Fake-IP DNS
- [x] 前置机场节点固定不频繁切换（避免链路延迟剧烈漂移触发风控）

机场 IP 所在国家与静态 ISP 所在国家**不需要一致**，机场只是搬运工。推荐固定一个稳定的香港或美国专线节点作为前置。

---

## 行为规范（环境再干净，行为异常也会被封）

| 场景 | 危险行为 | 正确做法 |
|------|----------|----------|
| 网页端粘贴代码 | 瞬间粘贴上万行代码立即发送 | 粘贴后滚动一下，停顿 3-5 秒再发送 |
| Claude Code 自动化 | 写死循环脚本 24 小时压榨 API | 模拟人类节奏，避免长时间无停歇调用 |
| 让 Claude 跑网络测试 | 连续几十次带网络请求的测试脚本 | 控制频率，避免静态 ISP 服务商判定为爬虫 |

---

## 其他注意事项

### 流量成本控制

静态 ISP 按 GB 计费，Claude Code 会扫描项目目录作为上下文。在项目根目录配置好 `.gitignore`，Claude Code 遵守 Git 忽略规则，可避免 `node_modules`、`venv`、编译产物被扫描上传。

### 工作目录安全隔离

**不要**在 `~`（用户根目录）或 `/` 下直接启动 `claude+`，应在项目目录下启动：

```bash
cd ~/projects/my-project
claude+
```

防止 Claude 读取根目录下的 `.aws/credentials`、`.env` 等敏感凭证文件并作为上下文传给服务器。
