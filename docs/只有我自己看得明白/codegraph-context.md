# CodeGraph & MCP Execution Guide for Claude Code

你是一个配备了本地代码知识图谱（CodeGraph）的顶级全栈 AI 专家。本文件是该项目的 **CodeGraph 运维与调用规范**。请在后续的开发、重构、审计任务中，严格遵循以下操作指南。

---

## 🛠️ 自动化自检与初始化流 (Self-Check & Init Workflow)

每次用户通过 `@` 提及此文件时，请你（Claude）**主动执行**以下自检流：

1. **检查工具集**：确认你的可用工具列表中包含 `codegraph_search`、`codegraph_get_nodes` 或 `codegraph_get_edges` 等 MCP 工具。
2. **检查图谱状态**：
   - 尝试调用一次 `codegraph_search` 搜索项目中的核心符号（例如 `User` 或 `App`）。
   - 如果发现返回错误、无结果或提示 "Graph is empty"，说明当前项目尚未建立索引。
3. **自动修复/初始化**：
   - 如果图谱为空，请自动在终端（使用本地 shell 工具）执行：
```bash
     codegraph index
     ```
   - 如果项目完全没有初始化（找不到 `.codegraph/` 目录），请先执行 `codegraph init`，再执行 `codegraph index`。

---

## 🚀 核心调用场景与指令映射 (Use Cases & Tool Mapping)

为了节省 Token 并提高响应速度，当用户提出以下类型的需求时，**禁止使用盲目的 `grep` 或连续的 `view_file`**，必须优先调用 `codegraph` 相关的 MCP 工具：

### 1. 追踪跨文件调用链路 (Call Graph Tracing)
* **场景**：用户询问某个接口的业务逻辑、某个 Service 方法被谁调用了、或者某个事件的触发链路。
* **标准动作**：调用 `codegraph` 工具查询该符号的“上游调用者（Incoming Calls）”和“下游依赖（Outgoing Calls）”，直接锁定链路上的核心文件。

### 2. 前后端路由映射 (Framework Route Mapping)
* **场景**：用户给出一个前端 API 路径（如 `/api/v1/member/consume`），要求修改对应的后端逻辑。
* **标准动作**：利用 CodeGraph 的框架感知能力，直接检索对应 URL 路由绑定的后端 Controller/Handler，精准定位文件。

### 3. 全局架构与符号搜索 (Symbol Resolution)
* **场景**：查找特定的类、接口、DTO 或 Vue 组件定义。
* **标准动作**：优先使用 `codegraph_search` 进行精确或模糊检索，严禁对整个 src 目录进行大范围的文本 `grep`。

---

## 🔄 代码变动时的动态同步规范 (Sync Policy)

在长会话写代码的过程中，请遵循以下同步原则：

1. **小范围修改（纯逻辑微调）**：
   - 在执行 `edit_file` 后，通常不需要手动刷新，信任 CodeGraph 的后台增量扫描。
2. **骨架级大变动（满足以下任一条件）**：
   - 进行了大范围的代码重构（如修改了 Package 包名、移动了大量文件）。
   - 大面积删除了某些陈旧的业务模块。
   - 刚刚在终端里执行了 `git checkout` 或 `git pull` 进行了分支切换/同步。
   - **执行动作**：一旦检测到上述行为，请主动在终端运行强刷命令：
```bash
     codegraph index --force
     ```

---

## 🎯 今日任务启动指令

当你读取完本文件并完成【自检流】后，请向用户汇报：
1. CodeGraph MCP 是否正常连接。
2. 本地项目图谱是否处于最新状态（若刚刚自动刷过，请说明）。
3. 简要列出你通过图谱感知到的项目核心技术栈（如：Vue 3 / Spring Boot / Node.js 等）。
4. 询问用户接下来需要开发或调试哪个核心业务模块。