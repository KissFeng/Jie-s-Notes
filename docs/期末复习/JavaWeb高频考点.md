# JavaWeb 应用开发高频考点（期末突击版）

> 📝 <a href="/exercises/javaweb-quiz-2026.html" target="_blank">👉 别忘了结合做题版习题库进行实战演练！</a>

这份考点总结专为期末突击整理，特别是那些**容易混淆、需要死记硬背的小细节**。建议考前多过几遍，选择判断题不丢分！

---

## 考点一：基础概念与架构（最容易被忽略）

1. **J2EE vs J2SE**：
   - **J2SE**（标准版）：用于桌面应用开发。
   - **J2EE**（企业版）：用于 Web 和企业级应用开发。
   - **J2ME**（微型版）：用于移动设备。
2. **Tomcat 的角色**：
   - Tomcat 是 Servlet/JSP 容器，默认 HTTP 端口是 **8080**。
   - 它**不负责编译 Java 源码**（那是 JDK 的工作），只负责运行 Servlet/JSP 和提供数据库连接池等服务。
3. **B/S 架构**：Java Web 属于 B/S（浏览器/服务器）架构。无需安装客户端，维护方便，只需浏览器即可访问。

---

## 考点二：Servlet 与请求跳转（必考核心）

### 1. Servlet 生命周期与配置（死记硬背三步曲）
- **初始化**：调用 `init()` 方法，**只执行一次**。
- **处理请求**：调用 `service()` 方法，每次请求都会调用（内部再分发给 `doGet`/`doPost`）。
- **销毁**：调用 `destroy()` 方法，实例销毁前调用，用于释放资源，**只执行一次**。
- **Servlet 配置**：从 Servlet 3.0 开始，推荐使用 `@WebServlet("url")` 注解直接在类上配置 URL 映射，替代传统的 `web.xml` 配置。

### 2. 转发（Forward） vs 重定向（Redirect）⭐️⭐️⭐️
这是全书最高频考点，必须清楚两者的区别：
- **请求转发（Forward）**：
  - 语法：`request.getRequestDispatcher("url").forward(request, response)`
  - JSP 动作标签：`<jsp:forward page="目标页面"/>`（**注意属性是 page，不是 to 或 url**）
  - 特点：**服务器内部跳转**，浏览器地址栏**不改变**，只能在**同一个 Web 应用内**跳转。整个过程只发送 **1 次**请求。
- **重定向（Redirect）**：
  - 语法：`response.sendRedirect("url")`
  - 特点：**客户端跳转**，浏览器地址栏**会改变**，可以跨域跳转到外部网站。整个过程发送 **2 次**请求。

### 3. 获取表单数据
- 单个值：`request.getParameter("name")`
- 多个值（如复选框）：`request.getParameterValues("name")`（返回字符串数组）
- 处理中文乱码（POST请求）：`request.setCharacterEncoding("utf-8")`

---

## 考点三：JSP 核心要素（三大指令、九大对象）

### 0. JSP 运行原理与访问方式
- **运行原理**：第一次请求时，Web 容器会将 JSP **翻译成 Servlet 源文件**（`.java`），然后编译成字节码（`.class`）执行。
- **访问方式**：与 Servlet 不同，JSP **不需要**配置请求路径映射，可以直接通过文件路径（如 `http://localhost:8080/app/index.jsp`）访问。

### 1. JSP 脚本语法（容易搞混符号）
- `<%! %>`：**声明**。定义全局变量和方法。
- `<%= %>`：**表达式**。直接输出变量或表达式的值（等价于 `out.print()`）。
- `<% %>`：**Scriptlet（脚本片段）**。编写普通的 Java 逻辑代码，不能直接输出。

### 2. JSP 三大指令
- `<%@ page ... %>`：页面指令。
  - 常考：`contentType="text/html;charset=UTF-8"` 用来设置响应内容类型和编码。
  - 常考：导入包 `import="java.util.*"`（**注意：多个包用逗号分隔，不是分号！**）
- `<%@ include file="..." %>`：静态包含。在**编译时**把两个文件合并。
- `<%@ taglib ... %>`：引入标签库（如 JSTL）。

### 3. 九大隐式对象（必须记住对应的类型或作用）
- **输入输出对象**：
  1. `request`：获取客户端请求参数。
  2. `response`：向客户端发送响应（如 `sendRedirect` 重定向）。
  3. `out`：输出对象，向客户端输出内容。
- **作用域/上下文对象**：
  4. `session`：保存用户会话信息。
  5. `application`：全局上下文（对应 Servlet 中的 `ServletContext`），所有用户共享。
  6. `pageContext`：页面上下文，作用域最小，**仅限当前页面级别共享数据**，但能跨作用域查找属性。
- **其他对象**：
  7. `config`：配置对象。
  8. `page`：代表当前页面实例本身（也就是 `this`）。
  9. `exception`：异常对象（**只在 `isErrorPage="true"` 的页面有效**）。

---

## 考点四：Cookie 与 Session（会话跟踪机制）

- **存储位置**：`Cookie` 存在**客户端（浏览器）**；`Session` 存在**服务器端**。
- **数据类型**：`Cookie` 只能存**字符串**；`Session` 可以存**任意对象**。
- **安全性**：`Session` 安全性远高于 `Cookie`。
- **使 Session 失效**：主动调用 `session.invalidate()`。
- **超时机制**：服务器通过“超时限制”（默认通常 30 分钟）来销毁长时间不活动的 Session，将其变成垃圾对象等待 JVM 回收。

---

## 考点五：EL 表达式与 JSTL 标签（细节容易丢分）

### 1. EL 表达式（格式：`${表达式}`）
- **四大作用域查找顺序**：pageScope -> requestScope -> sessionScope -> applicationScope。
  - **避坑**：访问特定的作用域属性时要注意对应关系。例如，访问 application 作用域属性必须用 `applicationScope`，绝不能用 `pageScope`。
- **获取请求参数**：`${param.username}` 完全等价于 `request.getParameter("username")`。
- **比较运算符**：注意英文缩写，如 **`lt` 对应 `<`**（less than），`gt` 对应 `>`（greater than），`eq` 对应 `==`。
- **empty 运算符**：用来判断是否为空。
  - **极易错点：`${empty null}` 和 `${empty ""}` 的结果都是 `true`**。
- **点（.）与方括号（[]）**：一般用点（如 `${user.name}`），但如果属性名含有特殊字符（如连字符 `-`）或访问数组，**必须用方括号**，如 `${user["my-name"]}`。

### 2. JSTL 核心标签库（前缀为 `c`）
- **输出**：`<c:out>`。
- **条件判断**：`<c:if>`（注意：它没有 else 功能）。
- **多分支选择**：`<c:choose>`（相当于 switch 语句），必须配合 `<c:when>` 和 `<c:otherwise>` 使用，且 `<c:when>` 必须放在 `<c:choose>` 内部。
- **循环遍历**：
  - `<c:forEach>`：**不仅可用于遍历集合或数组，还支持数值循环**（通过 `begin`、`end`、`step` 属性）。
    - **极易错点**：`<c:forEach var="i" begin="1" end="10" step="2">` 循环几次？
    - **解析**：i 的取值依次为 1, 3, 5, 7, 9，共 **5** 次。
  - `<c:forTokens>`：专门用于**循环遍历按指定分隔符（delims 属性）分割字符串后得到的数组**。
- **删除变量**：`<c:remove>`。

---

## 考点六：JDBC 数据库操作（步骤与防注入）

- **JDBC 全称**：**Java Database Connectivity**（Java 访问数据库的标准 API 规范）。

### 1. JDBC 标准六步曲
1. **加载驱动**：`Class.forName("com.mysql.jdbc.Driver");`（旧版）
2. **建立连接**：`Connection conn = DriverManager.getConnection(url, user, pass);`
3. **创建语句对象**：`PreparedStatement pstmt = conn.prepareStatement(sql);`
4. **执行SQL**：
   - **执行查询（SELECT）**：用 `executeQuery()`，返回 `ResultSet`（结果集）。
   - **执行增删改（INSERT/UPDATE/DELETE）**：用 `executeUpdate()`，返回 `int`（受影响的行数）。
5. **处理结果集**：`while(rs.next()) { ... }`（`next()` 返回 false 代表到了最后一行之后）。
6. **释放资源**：**由内到外**关闭（顺序：先 `ResultSet`，再 `Statement`，最后 `Connection`）。

### 2. PreparedStatement vs Statement
- **参数占位符**：`PreparedStatement` 使用 `?` 作为参数占位符。
  - **注意：参数索引是从 1 开始的，不是从 0 开始！**（如 `setString(1, "xxx")`）
- **核心优势**：预编译效率高；最重要的是**能防止 SQL 注入攻击**。

---

## 💡 期末终极避坑指南（极易错的几个小点）

1. **导入多个包的分隔符**：`<%@ page import="java.util.List, java.util.Map" %>`，是**逗号**不是分号！
2. **WEB-INF 目录**：它是安全受保护目录，**客户端浏览器绝对不能直接访问**（会报404），只能通过服务器内部转发访问。
3. **ResultSet.next() 返回 false**：代表已经到达结果集**最后一行之后**。
4. **HTML 注释 vs JSP 注释**：
   - HTML 注释 `<!-- -->`：**可以在**客户端浏览器源代码中看到。
   - JSP 注释 `<%-- --%>`：完全属于服务器端，客户端**看不到**。
5. **获取 Session 对象的两种方法**：
   - `request.getSession()` 和 `request.getSession(boolean)` 都可以获取，后者可以控制如果 session 不存在时是否新建。
