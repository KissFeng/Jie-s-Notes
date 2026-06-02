# Gitee 双账号使用指南

## 账号对应关系

| 账号 | SSH Host | 密钥文件 |
|------|----------|----------|
| 个人账号 | `gitee.com` | `~/.ssh/id_ed25519` |
| 工作账号 (your-email@example.com) | `gitee-work` | `~/.ssh/id_ed25519_gitee_work` |

---

## 多账号 SSH 配置全流程

### Step 1：生成两对 SSH 密钥

```bash
# 公司账号（已有可跳过）
ssh-keygen -t ed25519 -C "your-email@example.com" -f ~/.ssh/id_ed25519_gitee_work

# 个人账号（已有可跳过）
ssh-keygen -t ed25519 -C "your-personal@email.com" -f ~/.ssh/id_ed25519
```

### Step 2：把公钥添加到对应 Gitee 账号

分别登录两个 Gitee 账号 → 设置 → SSH 公钥 → 粘贴对应的 `.pub` 文件内容。

### Step 3：编辑 `~/.ssh/config`

```ssh-config
# 个人账号（默认）
Host gitee.com
    HostName gitee.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

# 工作账号
Host gitee-work
    HostName gitee.com
    User git
    IdentityFile ~/.ssh/id_ed25519_gitee_work
    IdentitiesOnly yes
```

> ⚠️ `Host` 名字是别名，不是真实域名，两个别名必须不同。`IdentitiesOnly yes` 强制只用指定密钥，防止 SSH 自动使用其他默认密钥导致串号。

### Step 4：验证连接

```bash
ssh -T gitee.com     # 应返回 Welcome to Gitee, @个人账号名!
ssh -T gitee-work    # 应返回 Welcome to Gitee, @工作账号名!
```

返回的用户名不同就说明配置正确。

---

## 新项目如何操作

新建仓库后 clone 时，**直接用对应别名替代 `gitee.com`**：

```bash
# 用个人账号 clone（别名就是 gitee.com，和普通用法一致）
git clone git@gitee.com:your-personal/repo-name.git

# 用公司账号 clone
git clone git@gitee-work:org-name/repo-name.git
```

clone 下来后 `remote.origin.url` 已经是别名格式，后续 `git push/pull` 自动走对应账号，无需额外配置。

---

## 已有项目如何切换

原来用 `git@gitee.com:...` 的仓库，需要手动改成别名格式：

```bash
# 1. 查看当前 remote
git remote -v

# 2. 改成对应别名（以公司账号为例）
git remote set-url origin git@gitee-work:org-name/repo-name.git

# 3. 验证
git remote -v
```

> ⚠️ 必须把 `gitee.com` 换成别名（`gitee-work`），否则 SSH 读不到对应密钥，会走默认密钥或直接拒绝。

---

## 使用注意事项

| 场景 | 注意点 |
|---|---|
| **clone 新项目** | URL 里直接写别名 `git@gitee-work:...`，不要写 `gitee.com` |
| **已有项目** | 记得 `git remote set-url origin git@别名:...` 改过来 |
| **SSH config 修改后** | 不需要重启，立即生效 |
| **私钥权限** | `chmod 600 ~/.ssh/id_ed25519*`，权限不对 SSH 会拒绝使用 |
| **默认密钥冲突** | `~/.ssh/` 下有多个密钥时，`IdentitiesOnly yes` 是必须的，否则 SSH 会优先用默认密钥导致串号 |
| **HTTPS 仓库** | 这套方案不适用于 HTTPS，需先改成 SSH：`git remote set-url origin git@别名:...` |
| **确认账号再操作** | push 前不确定走哪个账号？运行 `ssh -T gitee.com` 或 `ssh -T gitee-work` 确认 |

---

## 克隆仓库

**个人账号**（正常使用，无需改动）：
```bash
git clone git@gitee.com:your-name/repo.git
```

**工作账号**（将 `gitee.com` 替换为 `gitee-work`）：
```bash
git clone git@gitee-work:work-org/repo.git
```

---

## 已有仓库切换到工作账号

```bash
git remote set-url origin git@gitee-work:work-org/repo.git
```

查看当前 remote 确认：
```bash
git remote -v
```

---

## 设置仓库的提交者信息

工作仓库进入目录后单独设置（不要用 `--global`）：
```bash
git config user.name "你的工作姓名"
git config user.email "your-email@example.com"
```

个人仓库使用全局配置即可，无需额外设置。

---

## 测试连接

```bash
# 测试个人账号
ssh -T git@gitee.com

# 测试工作账号
ssh -T git@gitee-work
```

成功时会显示：`Hi xxx! You've successfully authenticated...`

---

## 常见问题

**Q: push 时提示权限拒绝？**
检查仓库的 remote URL 是否用了正确的 Host：
```bash
git remote -v
```
如果工作仓库显示的是 `git@gitee.com` 而不是 `git@gitee-work`，执行：
```bash
git remote set-url origin git@gitee-work:work-org/repo.git
```

**Q: 如何确认当前用的是哪个账号？**
```bash
ssh -T git@gitee-work   # 会显示工作账号用户名
ssh -T git@gitee.com    # 会显示个人账号用户名
```
