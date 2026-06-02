# PowerShell 无法访问 node / nvm / claude 问题

## 问题描述

在 macOS 上，zsh 中可以正常使用 `node`、`nvm`、`claude` 等命令，但新开的 PowerShell 7 窗口中这些命令均无法识别。

---

## 根本原因

两个独立问题叠加导致：

### 1. PowerShell 不读取 zsh 配置

`node`、`nvm`、`claude` 的 PATH 配置全部写在 `~/.zshrc` 和 `~/.zprofile` 中，这些文件只对 zsh 生效。PowerShell 有自己独立的 profile 文件，启动时不会加载任何 zsh 配置。

### 2. profile 文件路径错误

PowerShell 启动时加载的 profile 是 `$PROFILE`，默认指向：

```
~/.config/powershell/Microsoft.PowerShell_profile.ps1
```

但最初编辑的是：

```
~/.config/powershell/profile.ps1   ← 这是 AllHosts profile，不是默认加载的
```

`Microsoft.PowerShell_profile.ps1` 文件不存在，所以 profile 根本没有执行。

### 3. nvm alias 版本号缺少 `v` 前缀

`~/.nvm/alias/default` 文件内容为 `22.22.2`（无 `v` 前缀），而 nvm 实际的版本目录名为 `v22.22.2`。profile 脚本拼路径时未补 `v`，导致路径不存在，PATH 没有被修改。

---

## 解决步骤

### 第一步：创建正确的 profile 文件

新建 `~/.config/powershell/Microsoft.PowerShell_profile.ps1`，让它 source 共享 profile：

```powershell
# ~/.config/powershell/Microsoft.PowerShell_profile.ps1
. "$HOME/.config/powershell/profile.ps1"
```

### 第二步：在 profile.ps1 中添加 nvm node 路径，并修复 `v` 前缀问题

在 `~/.config/powershell/profile.ps1` 开头添加：

```powershell
$nvmDir = "$HOME/.nvm"
$nvmDefault = if (Test-Path "$nvmDir/alias/default") { (Get-Content "$nvmDir/alias/default").Trim() } else { $null }
if ($nvmDefault) {
    # alias 文件内容可能没有 "v" 前缀，需要补上
    if ($nvmDefault -notmatch '^v') { $nvmDefault = "v$nvmDefault" }
    $nodeBin = "$nvmDir/versions/node/$nvmDefault/bin"
    if (Test-Path $nodeBin) {
        $env:PATH = "${nodeBin}:$env:PATH"
    }
}
```

---

## 验证

重新打开 PowerShell 窗口，或手动执行：

```powershell
. $PROFILE
node -v      # v22.22.2
claude -v    # 2.1.123 (Claude Code)
```

---

## 注意事项

- 切换 nvm 默认版本后（`nvm alias default <version>`），重开 pwsh 窗口会自动使用新版本，无需修改 profile。
- `profile.ps1`（AllHosts）和 `Microsoft.PowerShell_profile.ps1`（CurrentHost）都会被加载，前者适合放跨 host 的通用配置。
