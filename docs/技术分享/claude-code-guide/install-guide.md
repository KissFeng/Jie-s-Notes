# Claude Code 安装与使用

在正式安装之前，先了解一下 Claude Code 有哪几种使用方式，选择最适合自己的方式入手。

| 方式 | 适合人群 | 优点 | 缺点 |
|------|---------|------|------|
| Web 端 | 完全新手 | 无需安装，打开浏览器即可使用 | 功能相对有限，无法深度集成本地代码 |
| CLI（命令行） | 有一定基础的开发者 | 功能完整，集成度高，最接近设计初衷 | 需要熟悉命令行操作 |
| 编辑器集成（VS Code / Cursor 等） | 日常开发者 | 无缝融入已有工作流，不需要切换窗口 | 依赖插件和环境配置 |

**选择建议：**

- 如果你是完全新手，先访问 https://claude.ai/ 用 Web 端试试手感，熟悉 Claude 的对话方式
- 如果你想真正用于开发，直接学习 CLI（命令行），功能最完整
- 等 CLI 用熟之后，再根据需要考虑编辑器集成

目前 Claude Code 也提供了桌面版，可在以下地址下载：https://claude.com/download

---

**本教程以 CLI 方式为主，因为它最稳定、最通用，也最接近 Claude Code 的设计初衷。**

## 安装 Claude Code CLI

### 1、前置准备

在安装之前，你需要准备好以下两项：

**① Claude 账号**

- 访问 claude.ai 注册一个账号
- 如果你已经在使用 Claude 网页版聊天，说明账号已经有了，可以跳过这步
- 如果你打算使用国内大模型（如 DeepSeek、Minimax、GLM 等），可以暂时跳过账号注册，后文会介绍如何切换

**② 命令行工具**

- **Mac / Linux**：打开系统自带的 Terminal（终端）即可
- **Windows**：打开 PowerShell，或者安装并使用 WSL（Windows Subsystem for Linux）

### 2、使用官方脚本安装（推荐）

官方提供了一键安装脚本，根据你的系统选择对应的命令执行：

**macOS、Linux、WSL：**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell：**

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Windows CMD：**

```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

**Homebrew:**

```bash
brew install --cask claude-code
```

**WinGet:**

```powershell
winget install Anthropic.ClaudeCode
```

安装完成后，验证是否安装成功：

```bash
claude --version
```

如果终端输出了版本号（如 1.x.x），说明安装成功:

```
2.1.81 (Claude Code)
```

### 3、使用 npm 安装（不推荐）

官方目前已不再推荐使用 npm 安装方式，建议优先使用上方的官方脚本。如果确实需要通过 npm 安装，请先确认已安装 Node.js：

```bash
node --version
```

如果输出了版本号（如 v18.17.0），说明已安装。如果提示命令不存在，请前往 nodejs.org 下载并安装。

确认 Node.js 可用后，执行以下命令安装 Claude Code：

```bash
npm install -g @anthropic-ai/claude-code
```

等待安装完成（可能需要几分钟），然后验证：

```bash
claude --version
```

### 4、更新 Claude Code

可以直接用以下命令更新：

```bash
claude install
```

或者：

```bash
claude update
```

Claude Code 在启动和运行时会自动检查更新，后台下载完成后，下次启动即生效。自动更新相关配置写在 settings.json 中：

```json
{
  "autoUpdatesChannel": "stable"
}
```

也可以在 Claude Code 内部通过 `/config` 命令进行配置。

如果你不需要自动更新，可以在 settings.json 的 env 中禁用：

```json
{
  "env": {
    "DISABLE_AUTOUPDATER": "1"
  }
}
```

通过 Homebrew 或 WinGet 安装的 Claude Code 不支持自动更新，需要手动执行以下命令更新：

```bash
# macOS Homebrew
brew upgrade claude-code

# Windows WinGet
winget upgrade Anthropic.ClaudeCode
```

### 5、常见安装问题排查

**问题一：提示 npm command not found**

- **原因**：电脑上没有安装 Node.js
- **解决**：前往 nodejs.org 下载安装 Node.js，安装完成后重新执行安装命令

**问题二：提示 permission denied**

- **原因**：当前用户没有全局安装权限
- **解决（Mac / Linux）**：在命令前加 sudo 提升权限：
  ```bash
  sudo npm install -g @anthropic-ai/claude-code
  ```
- **解决（Windows）**：右键 PowerShell，选择"以管理员身份运行"，然后重新执行安装命令

**问题三：安装速度很慢或卡住**

- **原因**：网络访问境外源速度慢
- **解决**：添加 --registry 参数切换到国内镜像源：
  ```bash
  npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com
  ```

**终端推荐**：如果你觉得系统默认终端体验一般，以下这些终端在使用 Claude Code 时体验更佳：

- [WezTerm](https://wezterm.org/)（跨平台）
- [Alacritty](https://alacritty.org/)（跨平台）
- [Ghostty](https://ghostty.org/)（Linux / macOS）
- [Kitty](https://github.com/kovidgoyal/kitty)（Linux / macOS）

## 卸载 Claude Code

根据你当初的安装方式选择对应的卸载命令。

### 1、官方脚本安装（原生安装）

删除 Claude Code 的可执行文件和版本文件：

**macOS、Linux、WSL：**

```bash
rm -f ~/.local/bin/claude
rm -rf ~/.local/share/claude
```

**Windows PowerShell：**

```powershell
Remove-Item -Path "$env:USERPROFILE\.local\bin\claude.exe" -Force
Remove-Item -Path "$env:USERPROFILE\.local\share\claude" -Recurse -Force
```

### 2、Homebrew 安装

```bash
brew uninstall --cask claude-code
```

### 3、WinGet 安装

```powershell
winget uninstall Anthropic.ClaudeCode
```

### 4、npm 安装

```bash
npm uninstall -g @anthropic-ai/claude-code
```

### 5、删除配置文件（可选）

以上命令只卸载了可执行程序，配置文件和历史记录不会自动删除。如果你希望完全清除所有数据（包括设置、授权工具、MCP 服务器配置和会话历史），需要额外执行以下命令：

> ⚠️ 删除配置文件是不可恢复的操作，所有本地设置和历史记录将永久丢失，执行前请确认。

**macOS、Linux、WSL：**

```bash
# 删除全局用户设置和状态
rm -rf ~/.claude
rm ~/.claude.json

# 删除当前项目的本地设置（在项目目录中执行）
rm -rf .claude
rm -f .mcp.json
```

**Windows PowerShell：**

```powershell
# 删除全局用户设置和状态
Remove-Item -Path "$env:USERPROFILE\.claude" -Recurse -Force
Remove-Item -Path "$env:USERPROFILE\.claude.json" -Force

# 删除当前项目的本地设置（在项目目录中执行）
Remove-Item -Path ".claude" -Recurse -Force
Remove-Item -Path ".mcp.json" -Force
```
