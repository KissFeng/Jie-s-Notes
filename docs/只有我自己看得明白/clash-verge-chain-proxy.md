# Clash Verge Rev 链式代理完整配置手册

> 最后更新：2026-09-20
> 适用环境：macOS / Clash Verge Rev 2.5.x / mihomo 内核

> [!IMPORTANT]
> 本页所有订阅地址、Token、服务器 IP、账号、密码、订阅商名称、配置 UID 均已脱敏。`<...>` 是必须替换的占位符，`example.invalid` 和 `203.0.113.0/24` 也只用于文档示例，无法真实连接。

## 一、需求与原理

### 目标

将机场节点作为“入口”，将海外静态住宅代理作为“出口”，组成两跳链路：

```text
你的设备 → 机场节点（自动优选）→ 静态住宅代理 → 目标网站
```

这样做的原因：

- 国内直连海外静态代理通常不稳定，甚至无法建立连接。
- 机场节点负责稳定完成第一跳，静态代理负责提供固定出口 IP。
- 对外服务看到的是第二跳的出口 IP，而不是机场节点 IP。

### 关键技术点

#### 1. 使用 `dialer-proxy` 而不是 `relay`

新版 mihomo 已移除 `relay` 类型策略组。旧配置可能报错：

```text
unsupported type: The group [xxx] with relay type was removed, please using dialer-proxy instead
```

正确方式是在第二跳节点上添加 `dialer-proxy`，并让它指向入口策略组：

```yaml
- name: "🇺🇸 Static-IP-US"
  type: socks5
  server: "<YOUR_STATIC_PROXY_IP>"
  port: 443
  username: "<YOUR_PROXY_USERNAME>"
  password: "<YOUR_PROXY_PASSWORD>"
  dialer-proxy: "⚡️ Auto-Select (Entry)"
```

#### 2. 订阅配置不要直接改

远程订阅更新时会覆盖原始 YAML。自定义节点、策略组和规则应通过 Clash Verge 的 Script Override 注入。

#### 3. 修改配置索引前先退出应用

Clash Verge Rev 运行时会在内存中维护 `profiles.yaml`，并定期写回磁盘。

- 修改 Script Override 的 `.js` 文件后，在 Clash Verge 中刷新订阅即可。
- 需要直接修改 `profiles.yaml` 时，先完全退出 Clash Verge，否则手工修改可能被覆盖。

## 二、环境与文件结构

### 配置根目录

macOS 下的默认目录为：

```text
~/Library/Application Support/io.github.clash-verge-rev.clash-verge-rev/
├── config.yaml                 # 全局配置：端口、TUN、DNS 等
├── clash-verge.yaml            # 合并后的运行时配置，自动生成
├── clash-verge-check.yaml      # 配置校验临时文件，自动生成
├── profiles.yaml               # 订阅和 Override 的索引
├── profiles/
│   ├── <SUBSCRIPTION_UID>.yaml  # 远程订阅内容
│   ├── <SCRIPT_UID>.js         # Script Override
│   └── <MERGE_UID>.yaml        # Merge Override
└── logs/
    └── latest.log              # 最新日志
```

`clash-verge.yaml` 和 `clash-verge-check.yaml` 是自动生成文件，不应手工编辑。

### `profiles.yaml` 示例

下面仅展示关键关系，UID 应使用 Clash Verge 已经生成的真实值，不要直接复制占位符：

```yaml
current: "<SUBSCRIPTION_UID_A>"

items:
  - uid: "<SUBSCRIPTION_UID_A>"
    type: remote
    name: "机场订阅 A"
    file: "<SUBSCRIPTION_UID_A>.yaml"
    url: "https://example.invalid/subscribe?token=<SUBSCRIPTION_TOKEN_A>"
    option:
      merge: "<MERGE_UID_A>"
      script: "<SCRIPT_UID_A>"
      update_interval: 1440
      allow_auto_update: true

  - uid: "<SCRIPT_UID_A>"
    type: script
    file: "<SCRIPT_UID_A>.js"

  - uid: "<MERGE_UID_A>"
    type: merge
    file: "<MERGE_UID_A>.yaml"
```

### 配置加载顺序

```text
下载远程订阅
    ↓
合并 Merge Override
    ↓
执行 Script Override 的 main(config) 函数
    ↓
使用 mihomo 校验生成的配置
    ↓
校验通过后生成 clash-verge.yaml
```

需要遍历订阅节点、动态创建策略组时，Script Override 比纯 YAML Merge 更合适。

## 三、最终策略结构

### 流量路径

```text
设备
  ↓
🤖 AI 专属（静态住宅）
  ↓
🇺🇸 Static-IP-US
  ↓ dialer-proxy
⚡️ Auto-Select (Entry)
  ↓
当前延迟较低的机场节点
  ↓
目标网站
```

### 入口自动测速组

```yaml
name: "⚡️ Auto-Select (Entry)"
type: url-test
proxies:
  - "🇭🇰 HK-01"
  - "🇯🇵 JP-01"
  - "🇸🇬 SG-01"
url: "http://www.gstatic.com/generate_204"
interval: 300
tolerance: 20
```

`tolerance: 20` 表示候选节点延迟差小于 20 ms 时不频繁切换，减少连接抖动。

### 静态出口节点

```yaml
name: "🇺🇸 Static-IP-US"
type: socks5
server: "203.0.113.10"
port: 443
username: "<YOUR_PROXY_USERNAME>"
password: "<YOUR_PROXY_PASSWORD>"
dialer-proxy: "⚡️ Auto-Select (Entry)"
```

`203.0.113.10` 是专用文档示例地址，必须替换为实际服务器 IP。

### AI 专属策略组

```yaml
name: "🤖 AI 专属（静态住宅）"
type: select
proxies:
  - "🇺🇸 Static-IP-US"
  - "⚡️ Auto-Select (Entry)"
  - "DIRECT"
```

日常使用时将该组保持在静态出口节点。入口机场节点可以自动切换，但对外出口 IP 仍保持不变。

## 四、Script Override 完整示例

> [!WARNING]
> 先替换脚本中的 `<YOUR_STATIC_PROXY_IP>`、`<YOUR_PROXY_USERNAME>` 和 `<YOUR_PROXY_PASSWORD>`，再在 Clash Verge 中刷新配置。不要将含真实凭据的脚本提交到 Git 仓库。

```javascript
// Chain proxy using dialer-proxy (relay was removed from mihomo)
function main(config, profileName) {
  config.proxies = config.proxies || [];
  config["proxy-groups"] = config["proxy-groups"] || [];
  config.rules = config.rules || [];

  var entryGroupName = "⚡️ Auto-Select (Entry)";
  var staticProxyName = "🇺🇸 Static-IP-US";
  var aiGroupName = "🤖 AI 专属（静态住宅）";

  // 1. 收集真实机场节点，排除订阅商插入的信息展示节点。
  var airportNodes = [];
  for (var i = 0; i < config.proxies.length; i++) {
    var proxy = config.proxies[i];
    if (!proxy || !proxy.name) continue;
    if (proxy.name.indexOf("剩余流量") >= 0) continue;
    if (proxy.name.indexOf("距离下次重置") >= 0) continue;
    if (proxy.name.indexOf("套餐到期") >= 0) continue;
    if (proxy.name.indexOf("官网") >= 0) continue;
    airportNodes.push(proxy.name);
  }

  // 2. 添加静态出口，并通过 dialer-proxy 绑定入口组。
  config.proxies.push({
    name: staticProxyName,
    type: "socks5",
    server: "<YOUR_STATIC_PROXY_IP>",
    port: 443,
    username: "<YOUR_PROXY_USERNAME>",
    password: "<YOUR_PROXY_PASSWORD>",
    "dialer-proxy": entryGroupName
  });

  // 3. 使用 url-test 自动选择第一跳。
  var entryGroup = {
    name: entryGroupName,
    type: "url-test",
    proxies: airportNodes,
    url: "http://www.gstatic.com/generate_204",
    interval: 300,
    tolerance: 20
  };

  // 4. 创建 AI 专属策略组。
  var aiGroup = {
    name: aiGroupName,
    type: "select",
    proxies: [staticProxyName, entryGroupName, "DIRECT"]
  };

  config["proxy-groups"].unshift(entryGroup);
  config["proxy-groups"].unshift(aiGroup);

  // 5. 将静态出口注入其他选择组的首位。
  for (var j = 0; j < config["proxy-groups"].length; j++) {
    var group = config["proxy-groups"][j];
    if (group.name === entryGroupName || group.name === aiGroupName) continue;
    if (group.proxies && Array.isArray(group.proxies)) {
      group.proxies.unshift(staticProxyName);
    }
  }

  // 6. 需要固定出口的服务规则。
  var aiRules = [
    "DOMAIN-SUFFIX,openai.com," + aiGroupName,
    "DOMAIN-SUFFIX,chatgpt.com," + aiGroupName,
    "DOMAIN-SUFFIX,oaistatic.com," + aiGroupName,
    "DOMAIN-SUFFIX,oaiusercontent.com," + aiGroupName,
    "DOMAIN-SUFFIX,anthropic.com," + aiGroupName,
    "DOMAIN-SUFFIX,claude.ai," + aiGroupName,
    "DOMAIN-SUFFIX,claudeusercontent.com," + aiGroupName,
    "DOMAIN-SUFFIX,x.ai," + aiGroupName,
    "DOMAIN-SUFFIX,grok.com," + aiGroupName,
    "DOMAIN-SUFFIX,gemini.google.com," + aiGroupName,
    "DOMAIN-SUFFIX,generativelanguage.googleapis.com," + aiGroupName,
    "DOMAIN-SUFFIX,aistudio.google.com," + aiGroupName,
    "DOMAIN-SUFFIX,perplexity.ai," + aiGroupName,
    "DOMAIN-SUFFIX,poe.com," + aiGroupName,
    "DOMAIN-SUFFIX,mistral.ai," + aiGroupName
  ];

  // 7. 可选：将国内常用服务保持直连。
  var directRules = [
    "DOMAIN-SUFFIX,gitee.com,DIRECT",
    "DOMAIN-SUFFIX,aliyun.com,DIRECT",
    "DOMAIN-SUFFIX,qq.com,DIRECT",
    "DOMAIN-SUFFIX,baidu.com,DIRECT",
    "DOMAIN-SUFFIX,jd.com,DIRECT",
    "DOMAIN-SUFFIX,163.com,DIRECT",
    "DOMAIN-SUFFIX,bilibili.com,DIRECT",
    "DOMAIN-SUFFIX,zhihu.com,DIRECT"
  ];

  // AI 规则在最前，直连规则其次，原订阅规则保持在后。
  config.rules = aiRules.concat(directRules, config.rules);

  return config;
}
```

### 脚本执行流程

1. 从 `config.proxies` 中收集机场节点，排除流量、到期时间等信息节点。
2. 创建带 `dialer-proxy` 的静态出口节点。
3. 创建 `url-test` 入口自动测速组。
4. 创建 AI 专属策略组，默认首选静态出口。
5. 将静态出口注入其他可选策略组。
6. 将固定出口规则和直连规则放在原订阅规则之前。

### 编写注意事项

- 使用 `var` 和普通函数，避免对脚本执行环境提出不必要的 ES6+ 要求。
- `dialer-proxy` 含连字符，在 JavaScript 对象中必须用引号包裹键名。
- 入口组中只能放第一跳机场节点，不能把静态出口放进去，否则会形成自环。
- 如果订阅商使用了其他信息节点命名，需同步补充过滤条件。

## 五、Clash Verge 操作步骤

1. 打开 **Profiles（配置）** 页面。
2. 为目标订阅新建或编辑 Script Override。
3. 将完整脚本粘贴进去，替换三个敏感占位符并保存。
4. 确认该 Script Override 已绑定到订阅。
5. 刷新订阅，确认页面没有配置校验错误。
6. 打开 **Proxies（代理）** 页面，在 AI 专属组或主选择组中选择 `🇺🇸 Static-IP-US`。
7. 发起代理请求，核对出口 IP 是否与购买的静态代理一致。

如果曾在 Clash Verge 的 Proxy Chain 图形界面配置过同一条链路，先删除或禁用它，避免与 `dialer-proxy` 配置叠加。

## 六、验证与故障排查

### 检查出口 IP

```bash
curl -s -x http://127.0.0.1:7890 https://ipinfo.io/json
```

返回的 IP 应与静态代理服务商提供的出口一致。如果返回的是机场节点 IP，说明当前只选中了入口组，没有选中静态出口。

### 检查配置合法性

```bash
"/Applications/Clash Verge.app/Contents/MacOS/verge-mihomo" -t \
  -d "$HOME/Library/Application Support/io.github.clash-verge-rev.clash-verge-rev" \
  -f "$HOME/Library/Application Support/io.github.clash-verge-rev.clash-verge-rev/clash-verge.yaml"
```

### 日志位置

```text
~/Library/Application Support/io.github.clash-verge-rev.clash-verge-rev/logs/latest.log
```

### 常见错误

| 现象或日志 | 常见原因 | 处理方式 |
|---|---|---|
| `relay type was removed` | 仍在使用旧的 `relay` 策略组 | 改用节点级 `dialer-proxy` |
| `JavaScript Override Script Error` | Override 语法错误或对象字段错误 | 查看 `latest.log` 定位行号 |
| 刷新后只剩少量默认节点 | 新配置校验失败，Clash Verge 回退 | 先撤销最近的 Script 改动，再检查日志 |
| 换多个入口仍无法连接 | 静态代理宕机、凭据错误或白名单限制 | 在服务商后台核对状态、端口、凭据和白名单 |
| 本地代理无法连接 | Clash Verge 监听端口与命令不一致 | 以 `config.yaml` 里的实际端口为准 |
| 配置后反复超时 | 入口组含静态出口，形成自环 | 确认 `airportNodes` 中没有静态出口节点 |

### 本地端口示例

```yaml
mixed-port: 7890
socks-port: 7898
port: 7899
redir-port: 7895
external-controller: 127.0.0.1:9097
```

以上只是常见值，排查时要以自己的 `config.yaml` 为准。

## 七、添加多个静态出口

将单个静态节点改为数组，再逐个注入：

```javascript
var staticProxies = [
  {
    name: "🇺🇸 Static-IP-US",
    type: "socks5",
    server: "<YOUR_US_PROXY_IP>",
    port: 443,
    username: "<YOUR_US_PROXY_USERNAME>",
    password: "<YOUR_US_PROXY_PASSWORD>",
    "dialer-proxy": "⚡️ Auto-Select (Entry)"
  },
  {
    name: "🇬🇧 Static-IP-UK",
    type: "socks5",
    server: "<YOUR_UK_PROXY_IP>",
    port: 443,
    username: "<YOUR_UK_PROXY_USERNAME>",
    password: "<YOUR_UK_PROXY_PASSWORD>",
    "dialer-proxy": "⚡️ Auto-Select (Entry)"
  }
];

for (var i = 0; i < staticProxies.length; i++) {
  config.proxies.push(staticProxies[i]);
}
```

还需要将新节点名称加入对应的 `select` 策略组，否则无法在 Clash Verge 界面中选择。

## 八、备份与安全建议

### 本地备份

```bash
# 备份整个 profiles 目录，请保存在非公开位置
cp -R \
  "$HOME/Library/Application Support/io.github.clash-verge-rev.clash-verge-rev/profiles" \
  "$HOME/Desktop/clash-profiles-backup"
```

### 安全检查清单

- 不要公开订阅 URL，其中的 Token 通常等同于订阅访问凭据。
- 不要提交静态代理的真实 IP、用户名和密码。
- 截图前检查 Profiles 页面、编辑器、终端历史和日志中是否有凭据。
- 若真实订阅 Token 或代理密码曾被公开，仅删除文档不够，还应在服务商后台立即重置凭据。
- 独立浏览器 Profile 可减少 Cookie 与账号环境串联，但固定 IP 不能代替账号本身的安全措施。

## 九、参考链接

- [Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev)
- [mihomo](https://github.com/MetaCubeX/mihomo)
- [mihomo dialer-proxy 配置](https://wiki.metacubex.one/config/proxies/dialer-proxy/)
- [IPInfo 出口检测](https://ipinfo.io/)
