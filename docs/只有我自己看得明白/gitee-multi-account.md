# Gitee 双账号使用指南

## 账号对应关系

| 账号 | SSH Host | 密钥文件 |
|------|----------|----------|
| 个人账号 | `gitee.com` | `~/.ssh/id_ed25519` |
| 工作账号 (your-email@example.com) | `gitee-work` | `~/.ssh/id_ed25519_gitee_work` |

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
