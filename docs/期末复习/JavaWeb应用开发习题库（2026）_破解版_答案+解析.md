# Java Web 应用开发习题库（2026）

> 📝 <a href="/exercises/javaweb-quiz-2026.html" target="_blank">👉 点击进入做题版习题库</a>

---

## 一、选择题

**1.** 在 Java Web 应用开发中，用于开发移动设备上 Java 应用程序的 JDK 版本是？

- A. J2SE
- B. J2EE
- C. J2ME
- D. J2NE

> **答案：C**

> **解析：** C正确。J2ME（Java 2 Platform, Micro Edition）是专门为移动设备和嵌入式设备开发的Java平台版本。A选项J2SE是标准版，用于桌面应用开发；B选项J2EE是企业版，用于Web和企业级应用开发；D选项J2NE不存在，是干扰项。

**2.** 下列哪个是 Tomcat 的主要功能？

- A. 编译 Java 程序
- B. 运行 Servlet 和 JSP 容器
- C. 开发 Java 桌面应用
- D. 管理数据库

> **答案：B**

> **解析：** B正确。Tomcat是Apache开发的Servlet/JSP容器，其核心功能是运行Servlet和JSP。A错误，编译Java程序是JDK的工作；C错误，开发桌面应用不是Tomcat的职责；D错误，Tomcat不直接管理数据库，虽提供连接池但非主要功能。

**3.** 在 Eclipse 中开发 Java Web 应用，需要安装哪个版本的 Eclipse？

- A. J2SE 版
- B. 普通版
- C. 移动版
- D. J2EE 版

> **答案：D**

> **解析：** D正确。Java Web开发需要使用Eclipse IDE for Enterprise Java Developers（即J2EE版），内置对Servlet、JSP等企业级技术的支持。A选项J2SE版只支持标准Java开发；B选项普通版和C选项移动版均不支持Web开发。

**4.** JSP 的全称是？

- A. Java Servlet Pages
- B. Java Server Pages
- C. Java Script Pages
- D. Java Standard Pages

> **答案：B**

> **解析：** B正确。JSP全称是Java Server Pages（Java服务器页面），是一种动态网页开发技术。A选项Java Servlet Pages是常见干扰项；C选项Java Script Pages混淆了JSP与JavaScript；D选项Java Standard Pages不存在。

**5.** 以下哪项不是 JSP 的特点？

- A. 跨平台
- B. 业务代码分离
- C. 预编译
- D. 需要手动编译每次请求

> **答案：D**

> **解析：** D正确，这是JSP"不"具备的特点。A跨平台、B业务代码分离、C预编译都是JSP的核心特点。JSP由Web容器自动编译和管理，首次访问时编译，后续请求直接执行，不需要每次手动编译。

**6.** 下列哪个 JSP 指令用于引入 JSTL 标签库？

- A. page 指令
- B. include 指令
- C. taglib 指令
- D. forward 指令

> **答案：C**

> **解析：** C正确。taglib指令用于在JSP页面中引入标签库，如JSTL核心标签库。A选项page指令用于设置页面属性（如编码、导包）；B选项include指令用于静态包含其他文件；D选项forward不是JSP指令，而是动作标签&lt;jsp:forward>。

**7.** 在 JSP 中，哪个隐式对象用于向客户端输出内容？

- A. out
- B. request
- C. response
- D. session

> **答案：A**

> **解析：** A正确。out隐式对象是JspWriter类型，用于向客户端输出内容，等价于Servlet中的PrintWriter。B选项request用于获取请求信息；C选项response用于设置响应信息；D选项session用于保存会话数据。

**8.** 下列哪个 JSP 隐式对象主要用于处理请求参数？

- A. out
- B. request
- C. response
- D. session

> **答案：B**

> **解析：** B正确。request（HttpServletRequest）对象主要用于获取客户端请求信息，包括请求参数、请求头等。A选项out用于输出内容；C选项response用于响应处理；D选项session用于保存会话数据。

**9.** 使用 request 对象的哪个方法可以获取客户端传递的参数值？

- A. getParameter()
- B. getAttribute()
- C. setAttribute()
- D. getSession()

> **答案：A**

> **解析：** A正确。getParameter()方法用于获取客户端通过URL或表单传递的参数值。B选项getAttribute()用于获取服务器端作用域中设置的属性；C选项setAttribute()用于向作用域中设置属性；D选项getSession()用于获取Session对象。

**10.** 在 Servlet 生命周期中，用于处理客户端请求的核心方法是？

- A. init()
- B. service()
- C. destroy()
- D. doGet()

> **答案：B**

> **解析：** B正确。service()方法是Servlet处理请求的核心方法，它根据请求类型（GET/POST等）分派到对应的doGet/doPost方法。A选项init()用于初始化；C选项destroy()用于销毁；D选项doGet()是service()分派的具体方法之一，不是核心分派方法。

**11.** Servlet 生命周期中，只执行一次且用于初始化的方法是？

- A. init()
- B. service()
- C. destroy()
- D. doPost()

> **答案：A**

> **解析：** A正确。Servlet生命周期中，init()方法只在第一次请求时执行一次，用于初始化Servlet实例。B选项service()每次请求都会调用；C选项destroy()在Servlet销毁时调用；D选项doPost()每次收到POST请求都会调用。

**12.** 在会话跟踪技术中，将会话数据存储在服务器端的是？

- A. Cookie
- B. URL 重写
- C. 隐藏表单域
- D. Session

> **答案：D**

> **解析：** D正确。Session将会话数据存储在服务器端，每个客户端对应一个独立的Session对象。A选项Cookie存储在客户端浏览器；B选项URL重写和C选项隐藏表单域都是客户端存储技术，数据随请求发送到服务器。

**13.** 获取 HttpSession 对象的正确方法是？

- A. request.getSession()
- B. response.getSession()
- C. application.getSession()
- D. pageContext.getSession()

> **答案：A**

> **解析：** A正确。通过request.getSession()获取HttpSession对象，这是HttpServletRequest接口提供的方法。B选项response没有getSession()方法；C选项application（ServletContext）没有getSession()方法；D选项pageContext虽然有getSession()但不是获取Session的常用方式。

**14.** 用于强制使 Session 失效的方法是？

- A. close()
- B. invalidate()
- C. destroy()
- D. remove()

> **答案：B**

> **解析：** B正确。HttpSession.invalidate()方法用于强制使当前Session失效，清除所有会话数据。A选项close()不是Session的方法；C选项destroy()是Servlet生命周期方法；D选项remove()用于移除Session中的某个属性，不是使Session失效。

**15.** Web 服务器采用什么机制来判断客户端是否继续访问？

- A. 心跳检测
- B. 长连接
- C. 超时限制
- D. 主动通知

> **答案：C**

> **解析：** C正确。Web服务器通过超时限制机制（session timeout）来判断客户端是否继续访问，超时后自动销毁Session。A选项心跳检测用于网络连接监测；B选项长连接是HTTP连接方式；D选项主动通知不是Session管理机制。

**16.** 在 EL 表达式中，用于判断变量是否为空的运算符是？

- A. == null
- B. !=
- C. ? :
- D. empty

> **答案：D**

> **解析：** D正确。EL表达式中，empty运算符用于判断变量是否为null、空字符串、空集合或空数组。A选项== null不是EL运算符；B选项!=是比较运算符；C选项? :是条件运算符，都不具备判断"空"的功能。

**17.** EL 表达式的正确语法格式是？

- A. ￥{表达式}
- B. ${表达式}
- C. %{表达式}
- D. &{表达式}

> **答案：B**

> **解析：** B正确。EL表达式的标准语法格式为${表达式}，使用美元符号加大括号。A选项￥是人民币符号；C选项%{表达式}是Struts2的OGNL表达式语法；D选项&{表达式}不存在。

**18.** 在 EL 表达式中，访问对象属性时，如果属性名包含特殊字符“-”，应使用哪个运算符？

- A. . 点运算符
- B. + 加号
- C. * 乘号
- D. [] 方括号运算符

> **答案：D**

> **解析：** D正确。当属性名包含特殊字符（如-）时，点运算符无法使用，必须用方括号运算符，如${user["my-name"]}。A选项点运算符只能用于合法的Java标识符属性名；B选项加号和C选项乘号都是算术运算符，不用于属性访问。

**19.** 下列哪个是 EL 表达式中的作用域隐式对象，用于访问 page 作用域中的属性？

- A. pageScope
- B. requestScope
- C. sessionScope
- D. applicationScope

> **答案：A**

> **解析：** A正确。pageScope用于访问page作用域中的属性。B选项requestScope用于request作用域；C选项sessionScope用于session作用域；D选项applicationScope用于application（全局）作用域。四个隐式对象分别对应四个作用域。

**20.** JDBC 的全称是？

- A. Java DataBase Connector
- B. Java Database Connectivity
- C. Java Data Binding Connection
- D. Java Direct Bridge Connection

> **答案：B**

> **解析：** B正确。JDBC全称是Java Database Connectivity，是Java访问数据库的标准API规范。A选项Java DataBase Connector是常见干扰项；C选项Java Data Binding Connection和D选项Java Direct Bridge Connection都不存在。

**21.** 下列哪个类用于加载 JDBC 驱动并创建数据库连接？

- A. java.sql.Connection
- B. java.sql.Statement
- C. java.sql.DriverManager
- D. java.sql.ResultSet

> **答案：C**

> **解析：** C正确。DriverManager类负责加载数据库驱动并通过getConnection()方法创建数据库连接。A选项Connection是连接接口；B选项Statement是执行SQL的接口；D选项ResultSet是结果集接口。

**22.** 在 JDBC 中，用于执行 SQL 语句并返回结果集的接口是？

- A. Connection
- B. PreparedStatement
- C. Driver
- D. DriverManager

> **答案：B**

> **解析：** B正确。PreparedStatement接口用于执行预编译SQL语句并返回结果集，支持参数化查询。A选项Connection是连接接口，不直接执行SQL；C选项Driver是驱动接口；D选项DriverManager是驱动管理类。

**23.** PreparedStatement 相对于 Statement 的优势是？

- A. 只能执行查询
- B. 不支持参数
- C. 预编译 SQL，提高效率
- D. 不需要释放资源

> **答案：C**

> **解析：** C正确。PreparedStatement对SQL进行预编译，数据库只需编译一次，多次执行效率更高，且能防止SQL注入。A选项错误，它也能执行更新操作；B选项错误，它支持?占位符参数；D选项错误，任何JDBC操作都需要释放资源。

**24.** 在 JDBC 操作中，用于获取数据库连接对象的方法是？

- A. DriverManager.loadDriver()
- B. DriverManager.getConnection()
- C. DriverManager.getDriver()
- D. DriverManager.registerDriver()

> **答案：B**

> **解析：** B正确。DriverManager.getConnection(url, user, password)是获取数据库连接的标准方法。A选项loadDriver()不存在；C选项getDriver()用于获取已注册的驱动；D选项registerDriver()用于注册驱动，不是获取连接。

**25.** 下列哪个不是 JDBC 开发流程中的步骤？

- A. 加载数据库驱动
- B. 建立数据库连接
- C. 处理执行结果
- D. 启动 Web 服务器

> **答案：D**

> **解析：** D正确。JDBC开发流程包括：加载驱动、建立连接、创建语句、执行SQL、处理结果、释放资源，不包括启动Web服务器。A、B、C都是JDBC开发的标准步骤。

**26.** 在 Servlet 中，重定向可以使用哪个方法？

- A. request.getRequestDispatcher().forward()
- B. response.getOutputStream()
- C. request.getSession()
- D. response.sendRedirect()

> **答案：D**

> **解析：** D正确。response.sendRedirect()实现重定向（客户端跳转）。A选项getRequestDispatcher().forward()是请求转发，不是重定向；B选项getOutputStream()用于获取输出流；C选项getSession()用于获取Session。

**27.** 请求转发与重定向的区别，下列说法正确的是？

- A. 转发是服务器内部跳转，重定向是客户端跳转
- B. 转发会改变浏览器地址栏
- C. 重定向不需要第二次请求
- D. 转发可以跨域

> **答案：A**

> **解析：** A正确。转发是服务器内部跳转，浏览器地址栏不变；重定向是客户端跳转，浏览器地址栏会改变。B错误，转发不会改变地址栏；C错误，重定向需要两次请求；D错误，转发只能在应用内部跳转，不能跨域。

**28.** 在 EL 表达式中，${sessionScope.user.name} 的作用是？

- A. 获取 application 作用域中的 user 对象的 name 属性
- B. 获取 request 作用域中的 user 对象的 name 属性
- C. 获取 session 作用域中的 user 对象的 name 属性
- D. 获取 page 作用域中的 user 对象的 name 属性

> **答案：C**

> **解析：** C正确。${sessionScope.user.name}表示从session作用域中获取user对象的name属性。A选项applicationScope用于application作用域；B选项requestScope用于request作用域；D选项pageScope用于page作用域。

**29.** 下列哪个 EL 表达式运算结果为 false？

- A. ${empty ""}
- B. ${empty null}
- C. ${empty "hello"}
- D. ${empty []}

> **答案：C**

> **解析：** C正确。${empty "hello"}结果为false，因为"hello"是非空字符串。A选项${empty ""}结果为true（空字符串）；B选项${empty null}结果为true（null）；D选项${empty []}结果为true（空数组）。

**30.** 在 JDBC 中，使用哪个接口执行预编译 SQL 语句？

- A. Statement
- B. PreparedStatement
- C. CallableStatement
- D. ResultSet

> **答案：B**

> **解析：** B正确。PreparedStatement接口用于执行预编译SQL语句，通过?占位符设置参数。A选项Statement执行静态SQL，不支持预编译；C选项CallableStatement用于调用存储过程；D选项ResultSet是查询结果集。

**31.** 释放 JDBC 资源时，正确的顺序是？

- A. 先关闭 ResultSet，再关闭 Statement，最后关闭 Connection
- B. 先关闭 Connection，再关闭 Statement，最后关闭 ResultSet
- C. 任意顺序
- D. 先关闭 Statement，再关闭 ResultSet，最后关闭 Connection

> **答案：A**

> **解析：** A正确。JDBC资源释放顺序：先关闭ResultSet，再关闭Statement，最后关闭Connection，遵循由内到外的原则。B选项顺序完全反了；C选项任意顺序可能导致资源泄漏；D选项先关Statement会导致ResultSet无法正常关闭。

**32.** 在 Tomcat 中，默认的端口号是？

- A. 8081
- B. 8080
- C. 80
- D. 8005

> **答案：B**

> **解析：** B正确。Tomcat默认HTTP端口号为8080。A选项8081不是默认端口；C选项80是HTTP协议的默认端口，不是Tomcat默认；D选项8005是Tomcat的关闭端口（shutdown port）。

**33.** 在 Eclipse 中配置 Tomcat 服务器时，需要指定 Tomcat 的哪个目录？

- A. bin 目录
- B. lib 目录
- C. 安装根目录
- D. webapps 目录

> **答案：C**

> **解析：** C正确。在Eclipse中配置Tomcat时需要指定Tomcat的安装根目录，Eclipse会自动识别bin、lib、webapps等子目录。A选项bin目录只包含启动脚本；B选项lib目录只包含jar包；D选项webapps目录只包含Web应用。

**34.** 在 Servlet 中，doGet 和 doPost 方法的参数是？

- A. (HttpRequest req, HttpResponse res)
- B. (HttpServletRequest req, HttpServletResponse res)
- C. (ServletRequest req, ServletResponse res)
- D. (Request req, Response res)

> **答案：B**

> **解析：** B正确。doGet/doPost方法签名为(HttpServletRequest req, HttpServletResponse res)，使用HTTP版本的请求/响应对象。A选项使用的是HttpRequest/HttpResponse，不是正确的类名；C选项使用的是通用的ServletRequest/ServletResponse；D选项Request/Response过于简略。

**35.** 在 JDBC 中，ResultSet 的 next()方法的作用是？

- A. 关闭结果集
- B. 获取当前行的列值
- C. 将游标移动到下一行
- D. 获取结果集的行数

> **答案：C**

> **解析：** C正确。ResultSet.next()方法将游标从当前位置移动到下一行，返回true表示有数据，false表示已到末尾。A选项结果集为空时next()直接返回false；B选项关闭后调用next()会抛异常；D选项不是next()的语义。

**36.** 在 Java Web 应用中，B/S 架构指的是？

- A. 客户端/服务器架构
- B. 浏览器/服务器架构
- C. 客户端/客户端架构
- D. 服务器/服务器架构

> **答案：B**

> **解析：** B正确。B/S（Browser/Server）架构即浏览器/服务器架构，用户通过浏览器访问服务器上的Web应用。A选项客户端/服务器是C/S架构；C和D选项客户端/客户端、服务器/服务器不是标准架构模式。

**37.** JDK 1.8 的稳定版属于？

- A. J2SE 1.8
- B. J2EE 1.8
- C. Java SE 8
- D. Java ME 8

> **答案：C**

> **解析：** C正确。JDK 1.8的正式版本号是Java SE 8，Oracle从Java 9开始采用新的版本命名规则。A选项J2SE 1.8是旧命名方式，不规范；B选项J2EE 1.8是企业版，不是标准版；D选项Java ME 8是移动版。

**38.** Tomcat 是哪个组织的项目？

- A. Sun 公司
- B. Apache 组织
- C. Oracle 公司
- D. Eclipse 基金会

> **答案：B**

> **解析：** B正确。Tomcat是Apache软件基金会的开源项目。A选项Sun公司开发了Java和Servlet规范；C选项Oracle公司收购了Java；D选项Eclipse基金会维护Eclipse IDE。

**39.** 下列哪个不是 Tomcat 的功能？

- A. 运行 Servlet
- B. 运行 JSP
- C. 提供数据库连接池
- D. 编译 Java 源代码

> **答案：D**

> **解析：** D正确。Tomcat可以运行Servlet、JSP并提供连接池等组件，但不负责编译Java源代码（那是JDK的工作）。A选项运行Servlet是Tomcat的功能；B选项运行JSP是Tomcat的功能；C选项提供数据库连接池Tomcat也支持。

**40.** Eclipse 平台本身不提供大量功能，而是通过什么来实现程序开发？

- A. 内置编译器
- B. 内置服务器
- C. 插件
- D. 脚本语言

> **答案：C**

> **解析：** C正确。Eclipse平台采用插件体系架构，通过安装不同的插件（如WTP、Maven插件等）来扩展功能。A选项内置编译器只提供基本Java编译；B选项内置服务器需要额外配置；D选项脚本语言不是Eclipse的扩展方式。

**41.** 使用 Servlet 实现动态网页时，主要缺点是？

- A. 需要大量输出语句，页面难以维护
- B. 运行速度慢
- C. 不能访问数据库
- D. 不支持会话

> **答案：A**

> **解析：** A正确。Servlet生成动态页面需要大量out.println()语句逐行输出HTML标签，代码冗长、可读性差、难以维护，这是Servlet最突出的缺点。B选项运行速度慢错误，Servlet基于线程处理请求，性能较高；C选项Servlet可以通过JDBC访问数据库；D选项Servlet支持HttpSession进行会话管理。

**42.** JSP 运行原理与 Servlet 一样，都是什么模式？

- A. 请求/请求模式
- B. 请求/响应模式
- C. 响应/请求模式
- D. 响应/响应模式

> **答案：B**

> **解析：** B正确。JSP在运行时会被Web容器翻译为Servlet，因此其运行原理与Servlet一样，都是请求/响应（Request/Response）模式——客户端发送请求，服务器处理后返回响应。A选项"请求/请求"不存在这种模式；C选项顺序颠倒，服务器不会主动响应未经请求的内容；D选项"响应/响应"同样不存在这种模式。

**43.** JSP 中用于编写 Java 代码片段的脚本元素是？

- A. 声明
- B. 表达式
- C. Scriptlet
- D. 指令

> **答案：C**

> **解析：** C正确。Scriptlet（脚本片段）用<% %>标记，专门用于在JSP页面中嵌入Java代码片段。A选项声明（Declaration）用<%! %>标记，用于声明成员变量和方法，而非编写代码片段；B选项表达式（Expression）用<%= %>标记，用于输出表达式的值；D选项指令（Directive）用<%@ %>标记，用于设置页面属性和引入资源，不用于编写Java代码。

**44.** JSP 隐式对象中，代表当前 JSP 页面的实例是？

- A. out
- B. pageContext
- C. page
- D. exception

> **答案：C**

> **解析：** C正确。page对象是JSP隐式对象，它代表当前JSP页面本身的一个实例，实际上是this的引用，指向被翻译后的Servlet对象。A选项out对象是JspWriter类型，用于向客户端输出内容；B选项pageContext是PageContext类型，用于访问页面的各种属性和作用域；D选项exception是Throwable类型，用于处理异常信息。

**45.** JSP 隐式对象中，用于处理异常的对象是？

- A. out
- B. pageContext
- C. page
- D. exception

> **答案：D**

> **解析：** D正确。exception对象是JSP的隐式对象，类型为Throwable，专门用于在错误页面中处理异常信息，只有在isErrorPage="true"的页面中才可用。A选项out用于输出内容；B选项pageContext用于访问各种作用域和页面属性；C选项page代表当前JSP页面实例。

**46.** response 对象中，用于重定向的方法是？

- A. setCharacterEncoding()
- B. sendRedirect()
- C. forward()
- D. include()

> **答案：B**

> **解析：** B正确。response.sendRedirect()方法用于将客户端重定向到另一个URL，浏览器地址栏会发生变化，属于客户端重定向。A选项setCharacterEncoding()用于设置响应的字符编码；C选项forward()是RequestDispatcher的方法，不是response的方法，它实现的是服务器端转发；D选项include()同样是RequestDispatcher的方法，用于包含其他资源的输出。

**47.** 请求转发时，使用的 RequestDispatcher 方法是？

- A. go()
- B. forward()
- C. 两者都是
- D. 两者都不是

> **答案：B**

> **解析：** B正确。RequestDispatcher接口定义了forward()方法用于请求转发，以及include()方法用于请求包含。请求转发使用的就是forward()方法。A选项go()不是RequestDispatcher接口中的方法；C选项两者都是错误，因为题目问的是请求转发，转发专用forward()，include是包含而非转发；D选项两者都不是明显错误。

**48.** Servlet 的特点不包括下列哪一项？

- A. 跨平台
- B. 性能高效
- C. 安全性高
- D. 必须手动编译

> **答案：D**

> **解析：** D正确。Servlet由Web容器（如Tomcat）自动管理编译和部署，开发者只需编写Java源代码，不需要手动编译。A选项Servlet基于Java语言，具有跨平台特性；B选项Servlet采用多线程机制处理请求，性能高效；C选项Servlet运行在服务器端，具有较高的安全性。

**49.** Servlet 生命周期中，用于销毁实例时执行的方法是？

- A. init()
- B. service()
- C. destroy()
- D. finalize()

> **答案：C**

> **解析：** C正确。destroy()方法是Servlet生命周期中在实例被销毁之前调用的方法，用于释放资源。A选项init()方法在Servlet实例创建后调用，用于初始化；B选项service()方法用于处理客户端请求；D选项finalize()是Object类的垃圾回收方法，不属于Servlet生命周期的方法。

**50.** 会话技术中，将会话数据存储在客户端的技术是？

- A. Cookie
- B. Session
- C. Application
- D. PageContext

> **答案：A**

> **解析：** A正确。Cookie技术将会话数据以文本形式存储在客户端浏览器中，每次请求时浏览器自动将Cookie发送给服务器。B选项Session将数据存储在服务器端；C选项Application（ServletContext）存储在服务器端，所有用户共享；D选项PageContext存储在服务器端，仅限当前页面有效。

**51.** Cookie 存储的数据类型是？

- A. 任意对象
- B. 字符串
- C. 数值
- D. 布尔值

> **答案：B**

> **解析：** B正确。Cookie是以键值对（Key-Value）形式存储的，且值只能是字符串（String）类型。A选项任意对象错误，Cookie不能直接存储对象；C选项数值不能直接存储，需转为字符串；D选项布尔值不能直接存储，需转为字符串。

**52.** HttpServletRequest 中，获取 Session 对象的方法是？

- A. getSession(boolean)
- B. getSession()
- C. 两者都是
- D. setSession()

> **答案：C**

> **解析：** C正确。HttpServletRequest提供了两个获取Session对象的方法：getSession()无参版本和getSession(boolean create)有参版本，两者都可以获取Session。D选项setSession()不是HttpServletRequest中的方法。

**53.** 如果客户端长时间没有请求，Web 服务器将如何处理对应的 HttpSession 对象？

- A. 变成垃圾对象等待回收
- B. 持久化到硬盘
- C. 转移到另一个服务器
- D. 通知客户端

> **答案：A**

> **解析：** A正确。当客户端长时间没有请求（超过session的超时时间），Web服务器会将对应的HttpSession对象标记为无效，使其成为垃圾对象等待JVM回收。B选项不会持久化到硬盘；C选项不会转移到其他服务器；D选项服务器不会主动通知客户端，因为HTTP是无状态协议。

**54.** JavaBean 技术的优点不包括？

- A. 封装数据和功能
- B. 一次编写，到处运行
- C. 增强代码重用
- D. 直接生成 HTML

> **答案：D**

> **解析：** D正确。JavaBean技术并不直接生成HTML，它的作用是封装数据和业务逻辑，HTML的生成由JSP或Servlet负责。A选项JavaBean可以封装数据和功能；B选项继承了"一次编写，到处运行"的跨平台特性；C选项通过封装提高了代码的重用性。

**55.** EL 表达式中，以下哪个是非法变量名？

- A. _name
- B. 123name
- C. name123
- D. name_123

> **答案：B**

> **解析：** B正确。"123name"以数字开头，在EL表达式中作为变量名是非法的，变量名必须以字母或下划线开头。A选项"_name"以下划线开头，合法；C选项"name123"以字母开头，合法；D选项"name_123"以字母开头，合法。

**56.** 执行${empty null}的结果是？

- A. Y
- B. N
- C. 空字符串
- D. 抛出异常

> **答案：A**

> **解析：** A正确。${empty null}结果为true，null被视为"空"。A选项Y代表true/Yes。B选项N表示false，不符合；C选项空字符串不是empty运算符的返回值；D选项不会抛出异常，EL表达式对null做了安全处理。

**57.** 使用点运算符访问对象的属性，如${user.name}，其中 user 是什么？

- A. 对象实例
- B. 作用域中的属性名
- C. 类名
- D. 包名

> **答案：B**

> **解析：** B正确。在${user.name}中，user是存储在某个作用域中的属性名，EL表达式通过该属性名在作用域中查找对应的对象，然后访问其name属性。A选项user不是直接的对象实例引用；C选项user不是类名；D选项user不是包名。

**58.** EL 表达式中，${list[0].title}的作用是？

- A. 访问 list 对象的 0 属性
- B. 访问 list 集合的第 1 个元素
- C. 访问 title 对象的 list 属性
- D. 访问 list 集合中第一个元素的 title 属性

> **答案：D**

> **解析：** D正确。${list[0].title}的含义是：先通过list获取作用域中的list集合，然后通过[0]索引访问第一个元素，最后通过.title访问该元素的title属性。A选项[0]是索引而非属性；B选项不完整，还应访问title属性；C选项语义完全颠倒。

**59.** 在 JSP 页面中，使用 EL 表达式访问 request 作用域中的属性，应使用哪个隐式对象？

- A. pageScope
- B. requestScope
- C. sessionScope
- D. applicationScope

> **答案：B**

> **解析：** B正确。requestScope是EL的隐式对象，专门用于访问request作用域中的属性。A选项pageScope用于page作用域；C选项sessionScope用于session作用域；D选项applicationScope用于application作用域。EL默认按pageScope->requestScope->sessionScope->applicationScope顺序查找。

**60.** JSTL 的全称是？

- A. JavaServer Pages Standard Tag Library
- B. Java Standard Tag Library
- C. JSP Standard Tag Library
- D. JavaServer Tag Library

> **答案：A**

> **解析：** A正确。JSTL的全称是JavaServer Pages Standard Tag Library，即Java服务器页面标准标签库。B选项缺少Pages一词；C选项将JavaServer写成了JSP，虽意思相近但不是官方全称；D选项缺少Pages Standard中的关键部分。

**61.** 以下哪个是 MySQL 数据库管理工具？

- A. SQL Server Management Studio
- B. Navicat
- C. Oracle SQL Developer
- D. DBVisualizer

> **答案：B**

> **解析：** B正确。Navicat是一款流行的数据库管理工具，支持MySQL、MariaDB、MongoDB等多种数据库，是MySQL开发中最常用的GUI管理工具之一。A选项SQL Server Management Studio是微软为SQL Server提供的管理工具；C选项Oracle SQL Developer是Oracle数据库的管理工具；D选项DBVisualizer虽也支持MySQL，但Navicat是最典型的选择。

**62.** JDBC API 中，所有驱动程序需要实现的接口是？

- A. java.sql.Connection
- B. java.sql.Statement
- C. java.sql.Driver
- D. java.sql.ResultSet

> **答案：C**

> **解析：** C正确。java.sql.Driver是JDBC API中所有数据库驱动程序必须实现的接口，用于建立与数据库的连接。A选项Connection接口用于表示连接，不是驱动需要实现的；B选项Statement接口用于执行SQL语句；D选项ResultSet接口用于封装查询结果。

**63.** 使用 Class.forName("com.mysql.jdbc.Driver")的作用是？

- A. 创建数据库连接
- B. 执行 SQL 语句
- C. 关闭连接
- D. 加载数据库驱动

> **答案：D**

> **解析：** D正确。Class.forName()的作用是通过反射机制加载MySQL的JDBC驱动类，使DriverManager能够识别并使用该驱动。A选项创建数据库连接使用DriverManager.getConnection()；B选项执行SQL语句使用Statement；C选项关闭连接使用Connection.close()。

**64.** 在 JDBC 中，Connection 对象的哪个方法用于创建 Statement？

- A. prepareStatement()
- B. createStatement()
- C. executeQuery()
- D. close()

> **答案：B**

> **解析：** B正确。Connection接口的createStatement()方法用于创建Statement对象，用于执行静态SQL语句。A选项prepareStatement()创建的是PreparedStatement（预编译语句）；C选项executeQuery()是Statement的方法，不是Connection的；D选项close()用于关闭连接。

**65.** JDBC 中，执行 SELECT 查询应使用哪个方法？

- A. executeUpdate()
- B. execute()
- C. executeQuery()
- D. executeLargeUpdate()

> **答案：C**

> **解析：** C正确。Statement的executeQuery()方法专门用于执行SELECT查询，返回ResultSet结果集。A选项executeUpdate()用于INSERT/UPDATE/DELETE等DML语句，返回受影响行数；B选项execute()可执行任意SQL，返回boolean；D选项executeLargeUpdate()用于大批量更新操作。

**66.** 使用 PreparedStatement 时，设置参数的方法是？

- A. setXxx()
- B. setParameter()
- C. put()
- D. add()

> **答案：A**

> **解析：** A正确。PreparedStatement使用setXxx()系列方法设置参数，其中Xxx代表数据类型，如setString()、setInt()、setDate()等，第一个参数是索引位置（从1开始）。B选项setParameter()不是JDBC中的方法；C选项put()不是PreparedStatement的方法；D选项add()不是PreparedStatement的方法。

**67.** JDBC 操作完成后，释放资源的正确做法是？

- A. 无需释放
- B. 只关闭 Connection
- C. 只关闭 Statement
- D. 依次关闭 ResultSet、Statement、Connection

> **答案：D**

> **解析：** D正确。JDBC操作完成后，应按由内到外的顺序依次关闭ResultSet、Statement、Connection，即先开后关原则。同时应将关闭操作放在finally块中，确保异常时也能释放资源。A选项不释放资源会导致连接泄漏；B选项只关闭Connection不够；C选项只关闭Statement不够。

**68.** 在 Web 应用中，用于保存全局信息的 ServletContext 对象对应 JSP 中的哪个隐式对象？

- A. session
- B. request
- C. application
- D. pageContext

> **答案：C**

> **解析：** C正确。application是JSP的隐式对象，对应Servlet中的ServletContext对象，代表整个Web应用的上下文，所有用户共享同一个application对象。A选项session是单个用户的会话；B选项request是一次请求；D选项pageContext是单个页面的上下文。

**69.** 在 Eclipse 中配置 JRE 时，需要指定 JRE 的？

- A. 安装主目录
- B. bin 目录
- C. lib 目录
- D. include 目录

> **答案：A**

> **解析：** A正确。在Eclipse中配置JRE时需要指定JRE的安装主目录（即JAVA_HOME指向的目录），Eclipse会根据主目录自动识别bin、lib等子目录。B选项bin目录是子目录，不是配置入口；C选项lib目录存放类库文件；D选项include目录存放C头文件，与JRE配置无关。

**70.** JSP 中，用于指定错误处理页面的 page 指令属性是？

- A. errorPage
- B. errorPage 和 isErrorPage 配合
- C. isErrorPage
- D. exceptionPage

> **答案：B**

> **解析：** B正确。在JSP中指定错误处理页面需要两个page指令配合：在可能出错的页面设置errorPage，在错误处理页面设置isErrorPage=true以启用exception隐式对象，两者缺一不可。A选项只说errorPage，不完整；C选项只说isErrorPage，不完整；D选项exceptionPage不是JSP的合法属性。

**71.** 以下哪个 JSP 隐式对象属于输入输出对象？

- A. session
- B. application
- C. pageContext
- D. response

> **答案：D**

> **解析：** D正确。JSP隐式对象中，输入输出对象包括request、response和out。response对象用于向客户端发送响应，属于输入输出对象。A选项session属于会话对象；B选项application属于应用对象；C选项pageContext属于上下文对象。

**72.** JSP 隐式对象中，用于获取请求头信息的对象是？

- A. out
- B. request
- C. response
- D. config

> **答案：B**

> **解析：** B正确。request对象（HttpServletRequest）封装了客户端的请求信息，可以通过getHeader()、getHeaderNames()等方法获取请求头信息。A选项out对象用于输出内容，不能获取请求头；C选项response用于设置响应信息；D选项config用于获取Servlet初始化参数。

**73.** 以下哪个 JSP 隐式对象的作用域是页面级别，且通常用于页面间数据共享？

- A. request
- B. session
- C. pageContext
- D. application

> **答案：C**

> **解析：** C正确。pageContext对象的作用域是页面级别，可通过setAttribute()和getAttribute()在页面级别共享数据，还可以跨域查找属性。A选项request的作用域是一次请求；B选项session的作用域是一次会话；D选项application的作用域是整个Web应用。

**74.** 使用 response 对象的 setContentType("text/html;charset=UTF-8")方法的作用是？

- A. 设置响应内容类型和字符编码
- B. 设置请求内容类型
- C. 设置会话超时时间
- D. 设置重定向地址

> **答案：A**

> **解析：** A正确。response.setContentType("text/html;charset=UTF-8")用于设置HTTP响应的内容类型和字符编码，确保浏览器正确解析。B选项设置请求内容类型应使用request对象；C选项设置会话超时时间应使用session.setMaxInactiveInterval()；D选项设置重定向应使用response.sendRedirect()。

**75.** 使用注解配置 Servlet 时，常用的注解是？

- A. @WebServlet
- B. @Servlet
- C. @WebMapping
- D. @RequestMapping

> **答案：A**

> **解析：** A正确。从Servlet 3.0开始，使用@WebServlet注解可以在类上直接配置Servlet的URL映射，替代web.xml配置。B选项@Servlet不是标准注解；C选项@WebMapping不是标准注解；D选项@RequestMapping是Spring MVC的注解，不属于Servlet规范。

**76.** JSTL 中，核心标签库的常用前缀是？

- A. jstl
- B. core
- C. c
- D. jsp

> **答案：C**

> **解析：** C正确。JSTL核心标签库的URI是http://java.sun.com/jsp/jstl/core，通常使用前缀c来引用，如c:out、c:if、c:forEach。A选项jstl不是标准前缀；B选项core是标签库名称而非前缀；D选项jsp用于JSP标准动作标签，不是JSTL的前缀。

**77.** JSTL 中，用于格式化日期和数字的标签库是？

- A. fmt
- B. sql
- C. xml
- D. fn

> **答案：A**

> **解析：** A正确。JSTL的fmt标签库专门用于格式化日期、数字、货币等数据，常用标签包括formatDate和formatNumber。B选项sql标签库用于数据库操作；C选项xml标签库用于XML文档处理；D选项fn标签库用于字符串处理函数。

**78.** JDBC 中，使用 DriverManager.getConnection(url, user, password)时，如果连接失败，会抛出什么异常？

- A. SQLWarning
- B. DataTruncation
- C. SQLException
- D. ClassNotFoundException

> **答案：C**

> **解析：** C正确。DriverManager.getConnection()在连接失败时会抛出SQLException，这是JDBC中最通用的异常类型。A选项SQLWarning是警告信息，不是异常；B选项DataTruncation表示数据截断警告；D选项ClassNotFoundException通常在驱动类加载时抛出，而非getConnection时。

**79.** 以下哪个是 MySQL JDBC 驱动程序的正确类名？

- A. com.mysql.jdbc.Driver
- B. com.mysql.cj.jdbc.Driver（新版本）或 com.mysql.jdbc.Driver（旧版本）
- C. org.mysql.Driver
- D. com.mysql.Driver

> **答案：B**

> **解析：** B正确。MySQL Connector/J 8.x版本中驱动类名为com.mysql.cj.jdbc.Driver，旧版本（5.x及之前）使用com.mysql.jdbc.Driver。A选项只提到旧版本类名，不够全面；C选项org.mysql.Driver不是合法的驱动类名；D选项com.mysql.Driver也不是正确的驱动类名。

**80.** JDBC 连接 MySQL 的 URL 格式一般为？

- A. jdbc:mysql://host:port/database
- B. mysql://host:port/database
- C. jdbc:mysql:host:port/database
- D. jdbc:mysql:///database

> **答案：A**

> **解析：** A正确。JDBC连接MySQL的标准URL格式为jdbc:mysql://host:port/database，jdbc是固定协议前缀，mysql是子协议名。B选项缺少jdbc前缀；C选项在mysql和host之间缺少双斜杠//；D选项jdbc:mysql:///database是连接本地默认端口的简写形式。

**81.** 在 JDBC 中，执行 executeUpdate("DELETE FROM users WHERE id=1")返回的是什么？

- A. ResultSet 对象
- B. 受影响的行数（int）
- C. 布尔值
- D. 无返回值

> **答案：B**

> **解析：** B正确。executeUpdate()方法用于执行INSERT、UPDATE、DELETE等DML语句，返回int类型表示受影响的行数。A选项ResultSet对象是executeQuery()的返回值；C选项布尔值是execute()的返回值；D选项无返回值说法错误，executeUpdate有明确的int返回值。

**82.** 使用 PreparedStatement 预编译 SQL 语句时，变量的占位符是？

- A. !（叹号）
- B. ?（问号）
- C. :param
- D. @param

> **答案：B**

> **解析：** B正确。PreparedStatement使用问号(?)作为参数占位符，然后通过setInt()、setString()等方法设置值。A选项叹号不是SQL预编译的占位符；C选项:param是Oracle绑定变量或其他ORM框架的语法；D选项@param通常用于存储过程或注释中。

**83.** 以下关于 PreparedStatement 的说法，正确的是？

- A. 只能执行查询操作
- B. 不能使用占位符
- C. 性能一定比 Statement 差
- D. 可以防止 SQL 注入攻击

> **答案：D**

> **解析：** D正确。PreparedStatement可以有效防止SQL注入攻击，因为它将SQL语句和参数分开处理，参数值会被自动转义。A选项PreparedStatement既能执行查询也能执行更新；B选项核心特性就是支持占位符；C选项由于预编译机制，性能通常优于Statement。

**84.** JDBC 中，ResultSet 对象的 next()方法返回 false 表示？

- A. 结果集为空
- B. 结果集已经关闭
- C. 已经到达结果集最后一行之后
- D. 当前行无数据

> **答案：C**

> **解析：** C正确。ResultSet的next()方法将游标向前移动一行，返回false时表示游标已到达最后一行之后，没有更多数据。A选项结果集为空时首次调用就返回false，但不限于此情况；B选项结果集关闭后调用会抛异常而非返回false；D选项当前行无数据的说法不准确。

**85.** 使用 ResultSet 的 getString("column_name")和 getString(1)的区别是？

- A. 前者性能更好
- B. 前者通过列名获取，后者通过列索引获取
- C. 后者更安全
- D. 没有区别

> **答案：B**

> **解析：** B正确。getString("column_name")通过列名获取数据，可读性好；getString(1)通过列索引获取，性能略好但可读性差。A选项按列名获取性能实际上稍差，需额外列名查找；C选项按索引获取在列顺序变化时更不安全；D选项两者有明确区别。

**86.** 在 Java Web 项目中，数据库连接池的作用是？

- A. 提高数据库连接重用性，减少创建开销
- B. 加密数据库连接
- C. 自动生成 SQL 语句
- D. 缓存查询结果

> **答案：A**

> **解析：** A正确。数据库连接池的核心作用是预先创建连接并放入池中，用完后归还而非关闭，提高连接重用性，减少创建销毁开销。B选项加密数据库连接不是连接池功能；C选项自动生成SQL语句属于ORM框架功能；D选项缓存查询结果属于查询缓存功能。

**87.** Tomcat 内置的连接池组件通常叫什么？

- A. DBCP
- B. JDBC Pool（Tomcat JDBC Pool）
- C. C3P0
- D. HikariCP

> **答案：B**

> **解析：** B正确。Tomcat内置的连接池组件是Tomcat JDBC Pool，从Tomcat 7开始作为默认连接池实现。A选项DBCP是Tomcat早期版本使用的连接池，已被替代；C选项C3P0是独立的开源连接池，非Tomcat内置；D选项HikariCP是高性能连接池，也是独立组件。

**88.** 在 Servlet 中，通过 HttpServletRequest 的 getRequestDispatcher()方法获得的RequestDispatcher，其 forward()方法不能跳转到？

- A. 同一 Web 应用内的 Servlet
- B. 同一 Web 应用内的 JSP
- C. 外部网站
- D. 同一 Web 应用内的 HTML

> **答案：C**

> **解析：** C正确。RequestDispatcher的forward()方法只能在同一个Web应用内部进行请求转发，不能跳转到外部网站。如需跳转外部网站，应使用response.sendRedirect()。A、B、D选项同一Web应用内的Servlet、JSP、HTML都可以通过forward()跳转。

**89.** 在 Java Web 应用中，WEB-INF 目录下的文件可以被客户端直接访问吗？

- A. 可以
- B. 不可以
- C. 只能访问 web.xml
- D. 只能访问静态资源

> **答案：B**

> **解析：** B正确。WEB-INF是Java Web应用中的受保护目录，客户端无法直接通过URL访问其下的任何文件，包括web.xml、classes、lib等。这些资源只能通过服务器端程序（如Servlet、JSP的forward）来访问。A选项直接访问被容器禁止；C选项web.xml也不能直接访问；D选项WEB-INF下的静态资源同样不能直接访问。

**90.** 在 JSP 中，用于声明变量或方法的语法是？

- A. 〈%! %〉
- B. 〈% %〉
- C. 〈%= %〉
- D. 〈%@ %〉

> **答案：A**

> **解析：** A正确。<%! %>是JSP的声明（Declaration）语法，用于声明成员变量和方法，翻译到Servlet类的成员位置。B选项<% %>是脚本片段（Scriptlet），翻译到_jspService()方法中；C选项<%= %>是表达式，用于输出值；D选项<%@ %>是指令语法，用于页面配置。

**91.** 在 JSP 中，用于将值输出到页面的语法是？

- A. 〈%! %〉
- B. 〈% %〉
- C. 〈%= %〉
- D. 〈%@ %〉

> **答案：C**

> **解析：** C正确。<%= %>是JSP的表达式（Expression）语法，用于将Java表达式的值直接输出到页面，等价于out.print()。A选项<%! %>是声明语法；B选项<% %>是脚本片段，不直接输出；D选项<%@ %>是指令语法。

**92.** 用于在 JSP 页面中包含另一个页面的动作标签是？

- A. 〈jsp:forward〉
- B. 〈jsp:include〉
- C. 〈jsp:param〉
- D. 〈jsp:useBean〉

> **答案：B**

> **解析：** B正确。&lt;jsp:include>动作用于在当前页面运行时包含另一个页面的内容，支持动态包含。A选项&lt;jsp:forward>是请求转发，会将请求转交给另一个页面；C选项&lt;jsp:param>是传递参数的辅助标签；D选项&lt;jsp:useBean>用于创建或查找JavaBean实例。

**93.** JSTL 的核心标签库中，用于输出内容的标签是？

- A. 〈c:out〉
- B. 〈c:set〉
- C. 〈c:remove〉
- D. 〈c:if〉

> **答案：A**

> **解析：** A正确。&lt;c:out>标签用于在JSP页面中输出内容，会自动对特殊字符进行HTML转义，能有效防止XSS攻击。B选项&lt;c:set>用于设置变量值；C选项&lt;c:remove>用于移除变量；D选项&lt;c:if>用于条件判断。

**94.** JSTL 中用于条件判断的标签是？

- A. 〈c:forEach〉
- B. 〈c:out〉
- C. 〈c:if〉
- D. 〈c:set〉

> **答案：C**

> **解析：** C正确。&lt;c:if>是JSTL核心标签库中的条件判断标签，根据条件决定是否渲染标签体内容。A选项&lt;c:forEach>用于循环遍历；B选项&lt;c:out>用于输出内容；D选项&lt;c:set>用于设置变量值。

**95.** 在 JSTL 中，用于遍历集合的标签是？

- A. 〈c:forEach〉
- B. 〈c:forTokens〉
- C. 〈c:choose〉
- D. 〈c:when〉

> **答案：A**

> **解析：** A正确。&lt;c:forEach>是JSTL核心标签库中的循环遍历标签，可以遍历集合（List、Set、Map等）和数组，支持begin、end、step等属性。B选项&lt;c:forTokens>用于按分隔符分割字符串后遍历；C选项&lt;c:choose>是条件选择标签；D选项&lt;c:when>配合&lt;c:choose>使用。

**96.** 在 JSP 中，使用哪个指令可以设置页面内容类型和字符编码？

- A. 〈%@ page contentType="text/html;charset=UTF-8" %〉
- B. 〈%@ include %〉
- C. 〈%@ taglib %〉
- D. 〈%@ page import %〉

> **答案：A**

> **解析：** A正确。<%@ page contentType="text/html;charset=UTF-8" %>是JSP的page指令，用于设置响应的内容类型和字符编码，确保页面以正确的编码输出。B选项<%@ include %>用于静态包含其他文件；C选项<%@ taglib %>用于声明标签库；D选项<%@ page import %>用于导入Java类。

**97.** 以下哪个是 JSP 中 forward 动作的正确用法？

- A. 〈jsp:forward page="目标页面" param="值"/〉
- B. 〈jsp:forward page="目标页面"/〉
- C. 〈jsp:forward to="目标页面"/〉
- D. 〈jsp:forward url="目标页面"/〉

> **答案：B**

> **解析：** B正确。JSP中forward动作的正确语法是&lt;jsp:forward page="目标页面"/>，page属性指定转发目标URL。A选项param属性不是forward标签的属性，传递参数应使用&lt;jsp:param>嵌套标签；C选项应使用page属性而非to属性；D选项应使用page属性而非url属性。

**98.** JSTL 中用于循环遍历字符串分割后的数组的标签是？

- A. 〈c:forEach〉
- B. 〈c:forTokens〉
- C. 〈c:split〉
- D. 〈c:loop〉

> **答案：B**

> **解析：** B正确。&lt;c:forTokens>标签专门用于遍历按指定分隔符分割字符串后得到的数组，通过delims属性指定分隔符。A选项&lt;c:forEach>用于遍历集合和数组，不是专门用于字符串分割的；C选项&lt;c:split>不是JSTL中的标签；D选项&lt;c:loop>不是JSTL中的标签。

**99.** 在 JSP 中，用于声明自定义标签库的指令是？

- A. 〈%@ page %〉
- B. 〈%@ include %〉
- C. 〈%@ taglib %〉
- D. 〈%@ tag %〉

> **答案：C**

> **解析：** C正确。<%@ taglib %>指令用于在JSP页面中声明引用的标签库，指定URI和前缀。A选项<%@ page %>用于设置页面属性；B选项<%@ include %>用于静态包含其他文件；D选项<%@ tag %>不是JSP的标准指令。

**100.** 在 JSP 脚本中，Scriptlet 对应的语法是？

- A. 〈%! %〉
- B. 〈% %〉
- C. 〈%= %〉
- D. 〈%@ %〉

> **答案：B**

> **解析：** B正确。<% %>是JSP中的Scriptlet（脚本片段）语法，可以在其中编写多行Java代码，翻译到Servlet的_jspService()方法中执行。A选项<%! %>是声明，用于声明成员变量和方法；C选项<%= %>是表达式，用于输出值到页面；D选项<%@ %>是指令，用于页面配置。

**101.** JSP 中，用户可见的注释是？

- A. 〈%-- --%〉
- B. //
- C. /* */
- D. 〈!-- --〉

> **答案：D**

> **解析：** D正确。HTML注释<!-- -->会被发送到客户端浏览器，用户可通过查看源代码看到。A选项<%-- --%>是JSP注释，内容不会被编译进Servlet，也不会发送到客户端；B选项//是Java单行注释，存在于脚本片段中；C选项/* */是Java多行注释，同样不会输出到客户端。

**102.** JSP 中，用于包含其他资源的编译时指令是？

- A. 〈%@ page %〉
- B. 〈%@ include %〉
- C. 〈%@ taglib %〉
- D. 〈%@ import %〉

> **答案：B**

> **解析：** B正确。<%@ include %>是在编译阶段将目标文件的源代码合并到当前JSP页面中，然后一起编译成一个Servlet，因此称为编译时包含或静态包含。A选项<%@ page %>用于定义页面属性；C选项<%@ taglib %>用于声明标签库；D选项<%@ import %>不是合法的JSP指令。

**103.** EL 表达式中，比较运算符 lt 对应的符号是？

- A. 〉
- B. 〉=
- C. 〈
- D. 〈=

> **答案：C**

> **解析：** C正确。EL表达式中lt是less than的缩写，对应的符号是<（小于）。A选项>对应的关键字是gt（greater than）；B选项>=对应ge（greater than or equal）；D选项<=对应le（less than or equal）。EL中使用字母关键字是为了避免与HTML/XML标签中的<、>产生冲突。

**104.** JSTL 核心标签库中，用于删除作用域中变量的标签是？

- A. 〈c:out〉
- B. 〈c:set〉
- C. 〈c:remove〉
- D. 〈c:if〉

> **答案：C**

> **解析：** C正确。&lt;c:remove>标签专门用于从指定作用域中移除一个属性变量。A选项&lt;c:out>用于向页面输出内容；B选项&lt;c:set>用于在作用域中设置变量值，与题目要求相反；D选项&lt;c:if>用于条件判断。若不指定scope则从所有作用域中删除该变量。

**105.** JSTL 中，类似于 Java 中 switch 语句的标签组合是？

- A. 〈c:if〉
- B. 〈c:forEach〉
- C. 〈c:out〉
- D. 〈c:choose〉

> **答案：D**

> **解析：** D正确。&lt;c:choose>标签实现了类似Java中switch语句的多分支选择功能。A选项&lt;c:if>类似单个if语句，只能进行单一条件判断；B选项&lt;c:forEach>是循环标签；C选项&lt;c:out>是输出标签。&lt;c:when>相当于case，&lt;c:otherwise>相当于default。

**106.** 执行${ (5〉3) ? "A" : "B" }的结果是？

- A. 5
- B. 3
- C. A
- D. B

> **答案：C**

> **解析：** C正确。该表达式使用了EL中的条件运算符（三元运算符）。首先判断条件5>3结果为true，因此取冒号前的值A作为整个表达式的结果。A选项5是条件中的左操作数；B选项3是右操作数；D选项B是条件为false时的返回值。

**107.** JSTL 中，〈c:when〉标签必须放在哪个标签内部？

- A. 〈c:if〉
- B. 〈c:choose〉
- C. 〈c:otherwise〉
- D. 〈c:forEach〉

> **答案：B**

> **解析：** B正确。&lt;c:when>标签不能独立使用，必须作为&lt;c:choose>标签的直接子标签存在。A选项&lt;c:if>是独立的条件判断标签，不接受&lt;c:when>作为子标签；C选项&lt;c:otherwise>与&lt;c:when>是同级关系；D选项&lt;c:forEach>不允许包含&lt;c:when>。违反此规则会导致JSP编译错误。

**108.** JSP 中，〈%@ page import="java.util.List" %〉的作用是？

- A. 引入标签库
- B. 导入 Java 类
- C. 设置内容类型
- D. 包含其他文件

> **答案：B**

> **解析：** B正确。<%@ page import="..." %>属性的作用是在当前JSP页面中导入Java类，等价于Java源文件中的import语句。A选项引入标签库应使用<%@ taglib %>指令；C选项设置内容类型应使用contentType属性；D选项包含其他文件应使用<%@ include %>指令。

**109.** 在 JSP 中，〈%@ page session="false" %〉的作用是？

- A. 禁用当前页面的 out 对象
- B. 禁用当前页面的 application 对象
- C. 禁用当前页面的 session 对象
- D. 禁用当前页面的 request 对象

> **答案：C**

> **解析：** C正确。session属性设置为false表示当前JSP页面不参与HTTP会话，无法使用session隐式对象。A选项out对象不受session属性影响，始终可用；B选项application对象不受session属性控制；D选项request对象不受session属性影响。此设置常用于不需要跟踪用户状态的页面。

**110.** 在 JSP 页面中，〈%@ page import="java.util.*, java.text.*" %〉 导入了两个包，这种写法是否正确？

- A. 正确
- B. 错误，只能导入一个包
- C. 错误，需要用分号分隔
- D. 错误，需要用逗号分隔

> **答案：A**

> **解析：** A正确。在JSP的page指令中，import属性支持同时导入多个包或类，各包名之间用英文逗号分隔。B选项错误，完全可以同时导入多个包；C选项错误，应使用逗号而非分号；D选项虽描述了使用逗号，但选项本身是错误的描述。

**111.** 在 JSTL 中，〈c:set var="age" value="18" scope="session"/〉 的作用是？

- A. 在 request 作用域设置 age=18
- B. 在 session 作用域设置 age=18
- C. 在 page 作用域设置 age=18
- D. 在 application 作用域设置 age=18

> **答案：B**

> **解析：** B正确。&lt;c:set>标签用于在指定作用域中设置属性变量的值。var=age指定变量名，value=18指定值，scope=session明确指定存储在session作用域中。A选项request作用域需设置scope=request；C选项page作用域需设置scope=page或不写scope（默认为page）；D选项application作用域需设置scope=application。

**112.** 〈c:forEach var="i" begin="1" end="10" step="2"〉 循环的次数是？

- A. 10 次
- B. 9 次
- C. 5 次
- D. 4 次

> **答案：C**

> **解析：** C正确。该循环从begin=1开始，到end=10结束，步长step=2。循环变量i依次取值：1、3、5、7、9，共5次迭代。通用公式：循环次数=(end-begin)/step+1=(10-1)/2+1=5。A选项10次是步长为1时的结果；B选项9次无依据；D选项4次不正确。

**113.** 〈c:forTokens items="apple,banana,orange" delims="," var="fruit"〉 循环中 fruit的值依次是？

- A. apple, banana, orange
- B. a, b, o
- C. apple banana orange
- D. apple,banana,orange 作为一个整体

> **答案：A**

> **解析：** A正确。&lt;c:forTokens>标签用于按指定分隔符拆分字符串并逐一遍历。items值为"apple,banana,orange"，delims指定逗号为分隔符，因此被拆分为三个子串。B选项错误，不会只取首字母；C选项错误，三个值是独立遍历；D选项错误，字符串已被拆分为独立项。

**114.** EL 表达式中，整型常量 100 的写法正确的是？

- A. 100
- B. "100"
- C. '100'
- D. $100

> **答案：A**

> **解析：** A正确。在EL表达式中，整型常量直接使用数字字面量书写，EL引擎会自动将其识别为Long类型。B选项"100"用双引号包裹是字符串常量；C选项'100'中单引号和双引号等价，也表示字符串；D选项$100中的$是EL表达式起始符号，会被解析为查找名为100的变量。

---

## 二、判断题

**1.** Java Web 应用开发中，B/S 结构指的是浏览器/服务器结构。

> **答案：正确**

> **解析：** B/S（Browser/Server）结构即浏览器/服务器结构，是Java Web应用开发中最常见的架构模式。在这种结构下，用户通过浏览器发送HTTP请求，服务器端接收请求并处理业务逻辑，然后将结果以HTML等格式返回给浏览器。与C/S结构相比，B/S结构不需要安装专门的软件，只需有浏览器即可，便于部署和维护。

**2.** JDK 的 J2SE 版本主要用于开发企业级应用程序，如电子商务网站。

> **答案：错误**

> **解析：** J2SE（Java 2 Standard Edition，标准版）主要面向桌面应用程序开发，提供Java语言的核心API。而J2EE（Java 2 Enterprise Edition，企业版）才是专门用于开发企业级应用程序的版本，在J2SE基础上提供了Servlet、JSP、EJB、JDBC等企业级技术。电子商务网站属于企业级应用，应使用J2EE。

**3.** Tomcat 不仅可以运行 Servlet 和 JSP，还提供数据库连接池等通用组件功能。

> **答案：正确**

> **解析：** Apache Tomcat是一个开源的Servlet容器和Web服务器。它不仅能够运行Servlet和JSP页面，还内置了多种通用组件功能，包括数据库连接池（通过Tomcat JDBC连接池实现）。此外Tomcat还提供了安全管理、日志、会话管理等功能。

**4.** Eclipse 本身提供了大量 Java Web 开发功能，不需要插件。

> **答案：错误**

> **解析：** Eclipse是一个开源的IDE，其基础版本主要面向Java SE开发。要进行Java Web开发，通常需要安装额外的插件，最常用的是Eclipse IDE for Enterprise Java Developers版本，或手动安装Web Tools Platform（WTP）插件。因此Eclipse原生并不直接提供完整的Java Web开发功能。

**5.** JSP 运行原理是客户端/浏览器模式，且 JSP 文件需要配置请求路径才能访问。

> **答案：错误**

> **解析：** JSP的工作原理是：当客户端第一次请求JSP页面时，Web容器会将JSP文件翻译成Servlet源文件，然后编译成字节码执行。后续请求如果JSP文件未修改，则直接执行已编译的Servlet。此外，JSP文件不需要像Servlet那样在web.xml中配置请求路径，可以直接通过文件路径访问，如http://localhost:8080/app/index.jsp。

**6.** JSP 隐式对象包括 out、request、response、session、application 等。

> **答案：正确**

> **解析：** JSP隐式对象（也叫内置对象）是JSP容器在翻译JSP为Servlet时自动创建的对象，开发者可直接使用无需声明。JSP共有9个隐式对象：request（HttpServletRequest）、response（HttpServletResponse）、session（HttpSession）、application（ServletContext）、out（JspWriter）、pageContext（PageContext）、config（ServletConfig）、page（当前Servlet实例）和exception（Throwable，仅在错误页面中可用）。

**7.** response 对象的 sendRedirect()方法可以实现请求转发。

> **答案：错误**

> **解析：** response.sendRedirect()方法实现的是重定向（Redirect），而非请求转发（Forward）。重定向是服务器向浏览器返回302状态码和新URL，浏览器重新发送请求，地址栏会变化，产生两次请求。请求转发通过RequestDispatcher.forward()实现，在服务器内部完成，地址栏不变，只有一次请求。两者是Java Web中必须区分的重要页面跳转方式。

**8.** 请求转发时，浏览器的地址栏不会改变。

> **答案：正确**

> **解析：** 请求转发（Forward）通过RequestDispatcher的forward(request, response)方法实现，整个过程都在服务器内部完成，浏览器不知道服务器内部发生了转发。浏览器地址栏中显示的仍然是最初请求的URL地址。因为请求转发只产生一次HTTP请求，服务器内部将请求从一个资源转发到另一个处理，最终将结果返回给浏览器。

**9.** Servlet 的生命周期方法包括 init()、service()和 destroy()。

> **答案：正确**

> **解析：** Servlet的生命周期由Web容器管理，主要包括三个阶段：（1）初始化阶段——init()方法，Servlet第一次被请求时调用，仅执行一次；（2）服务阶段——service()方法，每次客户端请求到达时都会被调用；（3）销毁阶段——destroy()方法，在Servlet被容器卸载前调用，仅执行一次，用于释放资源。

**10.** Cookie 将会话数据存储在服务器端，而 Session 存储在客户端。

> **答案：错误**

> **解析：** 本题将Cookie和Session的存储位置说反了。Cookie将会话数据存储在客户端（浏览器端），浏览器在每次请求时会将Cookie数据通过HTTP请求头发送给服务器。Session将会话数据存储在服务器端，客户端仅通过一个Session ID（通常以Cookie形式保存）来标识自己的会话。

**11.** 调用 HttpSession 的 invalidate()方法可以使会话立即失效。

> **答案：正确**

> **解析：** HttpSession接口提供了invalidate()方法，调用该方法会使当前会话立即失效。会话失效后，所有绑定在该Session上的属性都会被清除，Session对象将被销毁。如果之后再尝试访问该Session，容器会抛出IllegalStateException异常。通常在用户登出（Logout）功能中会调用此方法。

**12.** Web 服务器通过超时限制机制来清除不再使用的 HttpSession 对象。

> **答案：正确**

> **解析：** Web服务器对每个HttpSession对象都设有一个超时时间（默认通常为30分钟）。如果一个Session在指定时间内没有被客户端访问，服务器会认为该Session已过期，自动将其销毁并释放资源。开发者可以通过session.setMaxInactiveInterval()或web.xml中配置&lt;session-timeout>来设置超时时间。这是防止内存泄漏的重要机制。

**13.** EL 表达式语言是在 JSP1.1 规范中提供的。

> **答案：错误**

> **解析：** EL（Expression Language，表达式语言）是在JSP 2.0规范中引入的，而非JSP 1.1。EL表达式提供了一种简洁的语法来访问JavaBean属性、集合元素以及请求参数等数据。最初EL是作为JSTL 1.0规范的一部分定义的，后来在JSP 2.0中被正式纳入JSP规范。

**14.** EL 表达式中，${empty ""}的结果为 true。

> **答案：正确**

> **解析：** 在EL表达式中，empty是一个一元运算符，用于判断一个值是否为"空"。当值为null、空字符串""、空数组、空集合（size为0）、空Map时，empty返回true。题目中的${empty ""}判断的是空字符串，属于"空"的范畴，因此结果为true。这是一个容易混淆的知识点。

**15.** EL 表达式支持算术运算符、比较运算符、逻辑运算符和 empty 运算符。

> **答案：正确**

> **解析：** EL表达式提供了丰富的运算符支持：（1）算术运算符：+、-、*、/（或div）、%（或mod）；（2）关系运算符：==（eq）、!=（ne）、<（lt）、>（gt）、<=（le）、>=（ge）；（3）逻辑运算符：&&（and）、||（or）、!（not）；（4）empty运算符：判断值是否为空；（5）条件运算符：三元运算符。因此题目描述正确。

**16.** 在 EL 表达式中，点运算符.和方括号运算符[]在任何情况下都可以互换使用。

> **答案：错误**

> **解析：** 在EL表达式中，.运算符和[]运算符虽然在某些情况下可互换（如${user.name}等价于${user["name"]}），但并非在所有情况下都能互换。以下场景只能使用[]：（1）属性名包含特殊字符或连字符时；（2）访问数组或列表的索引元素时，如${list[0]}；（3）属性名是动态变量时；（4）访问Map中键名为非标识符的条目时。

**17.** EL 表达式中的 pageScope 隐式对象用于访问 application 作用域中的属性。

> **答案：错误**

> **解析：** EL表达式提供了四个作用域隐式对象：pageScope访问pageContext（页面）作用域；requestScope访问request（请求）作用域；sessionScope访问session（会话）作用域；applicationScope访问application（应用程序）作用域。要访问application作用域中的属性，应使用applicationScope而非pageScope。

**18.** JDBC 是 Java 访问数据库的标准规范，真正操作数据库需要具体的数据库驱动。

> **答案：正确**

> **解析：** JDBC（Java Database Connectivity）是Java提供的一套标准的数据库访问API和规范，定义在java.sql和javax.sql包中。JDBC本身只是一组接口和抽象类，并不包含具体数据库的实现。要真正操作数据库，必须使用对应数据库厂商提供的JDBC驱动（Driver），它是JDBC接口的具体实现。

**19.** 使用 Class.forName("com.mysql.jdbc.Driver")的作用是加载数据库驱动。

> **答案：正确**

> **解析：** Class.forName()是Java反射机制提供的方法，用于动态加载指定的类。执行Class.forName("com.mysql.jdbc.Driver")时，JVM会加载该驱动类，触发其静态代码块执行，将自身注册到DriverManager中。虽然JDBC 4.0（Java 6）之后由于SPI自动加载机制这行代码不再必须，但仍是传统标准做法。

**20.** JDBC 中，Statement 接口用于执行预编译的 SQL 语句，性能更高。

> **答案：错误**

> **解析：** JDBC中的Statement接口用于执行普通的静态SQL语句，每次执行时数据库都需要重新解析和编译。用于执行预编译SQL语句的是PreparedStatement接口，它继承自Statement，会先将SQL发送到数据库预编译，后续执行只需传递参数，无需重复解析编译，性能更高且能防止SQL注入。

**21.** PreparedStatement 可以防止 SQL 注入攻击。

> **答案：正确**

> **解析：** SQL注入攻击是指攻击者通过在输入参数中插入恶意SQL代码来改变原有SQL语义。PreparedStatement之所以能防止SQL注入，是因为它使用参数化查询：SQL语句中用?占位符代替参数值，数据库驱动负责将参数安全绑定，确保参数值始终被视为数据而非SQL代码的一部分。

**22.** JDBC 操作完成后，应该先关闭 Connection，再关闭 Statement 和 ResultSet。

> **答案：错误**

> **解析：** JDBC操作完成后，资源关闭顺序应遵循由内到外的原则：先关闭ResultSet，再关闭Statement，最后关闭Connection。因为ResultSet依赖于Statement，Statement依赖于Connection。如果先关闭Connection，Statement和ResultSet可能无法正确关闭。推荐使用try-with-resources语法自动管理资源关闭。

**23.** Servlet 中，重定向使用 response.sendRedirect()，该方法可以跨域跳转。

> **答案：正确**

> **解析：** response.sendRedirect()方法实现的是重Redirect，它的工作原理是服务器向浏览器返回302状态码和新的Location响应头，浏览器收到后根据该URL重新发送新的HTTP请求。由于重定向是由浏览器发起新请求，因此可以跳转到任意URL，包括不同域名、端口、协议的地址，即可以跨域跳转。

**24.** 请求转发使用 RequestDispatcher 的 forward()方法，该方法可以跨域跳转。

> **答案：错误**

> **解析：** 请求转发（Forward）通过RequestDispatcher.forward()实现，整个转发过程都在服务器内部完成。它只能将请求转发给当前Web应用内部的其他资源，不能转发到外部的其他域名或应用。如果需要跳转到其他域名，应使用重定向（response.sendRedirect()）。

**25.** EL 表达式${param.username}等价于 request.getParameter("username")。

> **答案：正确**

> **解析：** 在EL表达式中，param是一个隐式对象，是Map类型，包含当前请求的所有请求参数。${param.username}从请求参数Map中获取键为username的参数值，与request.getParameter("username")等价。param对象对应HTTP请求中的查询字符串参数或POST请求体中的表单参数。类似地，${paramValues.name}等价于request.getParameterValues("name")。

**26.** JSTL 的 functions 标签库提供了字符串处理函数，如 fn:contains。

> **答案：正确**

> **解析：** JSTL的functions标签库（前缀为fn）提供了一系列实用的字符串处理函数，包括：fn:contains()（判断是否包含子串）、fn:containsIgnoreCase()、fn:startsWith()、fn:endsWith()、fn:length()（获取长度）、fn:substring()（截取子串）、fn:trim()、fn:toUpperCase()/fn:toLowerCase()、fn:replace()、fn:split()、fn:join()等。

**27.** JDBC 中，使用 executeQuery()方法执行 INSERT、UPDATE、DELETE 语句。

> **答案：错误**

> **解析：** 在JDBC中，不同SQL操作应使用不同方法：executeQuery()用于执行查询语句（SELECT），返回ResultSet；executeUpdate()用于执行DML语句（INSERT、UPDATE、DELETE）和DDL语句，返回int表示受影响行数；execute()是通用方法，可执行任意SQL，返回boolean。因此INSERT/UPDATE/DELETE应使用executeUpdate()。

**28.** 使用 PreparedStatement 时，参数占位符是?，索引从 0 开始。

> **答案：错误**

> **解析：** PreparedStatement的参数占位符确实是?（问号），但参数索引是**从1开始**的，不是从0开始。例如：第一个?的索引是1，第二个?的索引是2。设置参数时应写ps.setString(1, "张三")和ps.setInt(2, 25)。这与Java中数组和集合的索引从0开始不同，是一个常见的易错点。

**29.** Tomcat 服务器的默认 HTTP 端口号是 8080。

> **答案：正确**

> **解析：** Apache Tomcat服务器的默认HTTP连接器端口号配置为8080。这个配置在Tomcat安装目录下的conf/server.xml文件中定义。Tomcat选择8080作为默认端口，主要因为80端口通常被系统级Web服务器占用，而8080是常用的备选HTTP端口。

**30.** 在 Eclipse 中配置 Tomcat 服务器时，需要指定 Tomcat 的安装根目录。

> **答案：正确**

> **解析：** 在Eclipse中配置Tomcat的步骤：通过Window -> Preferences -> Server -> Runtime Environments，点击Add选择Apache Tomcat版本，然后需要指定Tomcat的安装根目录（即CATALINA_HOME目录）。Eclipse需要知道Tomcat的安装路径，以便读取配置文件、库文件和Web应用目录。

**31.** JavaBean 是一种符合特定规范的 Java 类，用于封装数据和功能。

> **答案：正确**

> **解析：** JavaBean是一种符合特定编写规范的Java类，主要规范包括：（1）类必须是public的，且提供无参的公共构造方法；（2）属性通常私有化，通过公共的getter和setter方法访问；（3）通常实现Serializable接口。JavaBean在Java Web开发中广泛用于封装数据和业务功能。

**32.** WEB-INF 目录下的文件（如 lib 库）可以被客户端直接通过浏览器访问。

> **答案：错误**

> **解析：** WEB-INF目录是Java Web应用中的特殊受保护目录。Web容器（如Tomcat）会阻止客户端直接访问WEB-INF目录下的任何资源。如果客户端试图通过URL直接访问，服务器会返回404错误。WEB-INF下的资源只能通过服务器端的Servlet或请求转发来间接访问。

**33.** JSP 页面中的 HTML 注释〈!-- --〉在客户端浏览器中可见。

> **答案：正确**

> **解析：** JSP页面中的HTML注释<!-- -->会在JSP编译和执行过程中原样保留在生成的HTML响应中，发送给客户端浏览器。用户在浏览器中右键选择查看页面源代码即可看到。如果需要不发送到客户端的注释，应使用JSP注释<%-- --%>，它会在编译阶段被完全忽略。

**34.** JSP 中，使用〈%@ include %〉指令包含文件是在请求时动态包含。

> **答案：错误**

> **解析：** JSP中有两种包含方式：（1）<%@ include file="xxx" %>——静态包含（编译时包含），在JSP编译阶段将目标文件源代码合并到当前JSP中，然后一起编译。（2）&lt;jsp:include page="xxx" />——动态包含（请求时包含），在每次请求执行到该标签时动态调用目标资源并将结果包含进来。

**35.** JSTL 的核心标签库中，〈c:remove〉标签用于删除作用域中的变量。

> **答案：正确**

> **解析：** JSTL核心标签库中的&lt;c:remove>标签用于从指定作用域中删除一个变量。语法为&lt;c:remove var="变量名" scope="作用域"/>，scope可指定为page、request、session、application。如果不指定scope，则会从所有四个作用域中删除该变量。

**36.** JSTL 中，〈c:forEach〉标签只能用于遍历集合，不能用于数值循环。

> **答案：错误**

> **解析：** JSTL核心标签库中的&lt;c:forEach>标签不仅支持遍历集合（如List、Map、数组等），还支持数值循环。当使用begin、end和可选的step属性时，可以按照指定的起始值、结束值和步长进行循环。例如&lt;c:forEach var="i" begin="1" end="10">会从1循环到10。

**37.** JSP 页面中，〈%@ page contentType="text/html;charset=UTF-8" %〉用于设置响应内容类型和字符编码。

> **答案：正确**

> **解析：** <%@ page contentType="text/html;charset=UTF-8" %>是JSP的page指令，其中contentType属性用于设置响应的MIME类型和字符编码。text/html指定了响应内容为HTML格式，charset=UTF-8指定了字符编码为UTF-8。正确设置字符编码对于正确显示中文等非ASCII字符至关重要。

**38.** 〈c:forEach var="i" begin="1" end="10" step="2"〉将循环 10 次。

> **答案：错误**

> **解析：** 循环变量i的取值依次为：1、3、5、7、9，共5次迭代。循环次数计算公式：(end - begin) / step + 1 = (10-1)/2+1 = 5。当i从9增加2变为11时，已超过end值10，循环结束。因此该循环实际执行5次，而非10次。

**39.** 〈%@ page import="java.util.List" %〉可以导入多个包，用分号分隔。

> **答案：错误**

> **解析：** <%@ page import="..." %>指令确实支持导入多个包或类，但多个导入之间使用的是**逗号**分隔，而不是分号。例如：import="java.util.List, java.util.ArrayList, java.text.SimpleDateFormat"。也可以使用多个page指令分别导入。这与Java源文件中用分号结尾import语句有所不同。

---

## 三、名词解释

**1.** JSP

> **答案： Java 服务器页面（Java Server Pages），建立在 Servlet 基础上的一种动态网页开发技术。**

**2.** Servlet

> **答案： Java Web 开发中的一种服务器端 Java 程序，用于处理客户端请求并生成动态响应，具有生命周期方法（init、service、destroy）。**

**3.** Tomcat

> **答案： Apache 组织开发的开放源代码的 Servlet 和 JSP 容器，具有 Web 服务器基本功能。**

**4.** JDK

> **答案： Java 开发工具包（Java Development Kit），由 Sun 公司提供，为 Java 程序开发提供编译和运行环境。**

**5.** B/S 结构

> **答案： 浏览器/服务器结构（Brower/Server），客户端通过浏览器访问服务器，是 Web 应用常见架构。**

**6.** EL 表达式

> **答案： Expression Language 的缩写，是 JSP2.0 规范中提供的一种简单数据访问语言，语法为${表达式}，用于获取作用域中的属性数据。**

**7.** JSTL

> **答案： JSP 标准标签库（JavaServer Pages Standard Tag Library），提供一组通用标签，简化 JSP 页面开发，增强代码重用性。**

**8.** JDBC

> **答案： Java 数据库连接（Java Database Connectivity），Java 访问数据库的标准规范，位于java.sql 包中，为多种关系型数据库提供统一访问接口。**

**9.** Session

> **答案： 将会话数据存储在服务器端的技术，为每个用户浏览器创建一个独享的 Session 对象，用于保存用户相关数据。**

**10.** JSP 隐式对象

> **答案： JSP 容器为每个页面提供的 Java 对象，开发者可以直接使用而不用显式声明，如out、request、response、session 等。**

---

## 四、简答题

**1.** 比较C/S架构与B/S架构的优劣。

> **C/S架构（客户端/服务器）：**
- 优点：客户端可处理复杂逻辑，响应速度快，用户体验好，支持离线操作
- 缺点：需要安装客户端软件，部署和维护成本高，跨平台兼容性差，升级困难

**B/S架构（浏览器/服务器）：**
- 优点：无需安装客户端，维护方便，跨平台性好，只需浏览器即可访问
- 缺点：受浏览器限制，复杂交互体验较差，对网络依赖性强，安全性相对较低

**2.** 比较以GET方式与POST方式提交请求的优劣。

> **GET方式：**
- 优点：参数在URL中可见，可被缓存、收藏，支持书签，传输速度快
- 缺点：参数长度有限制（约2KB），安全性差（参数暴露在URL中），不适合传输敏感数据

**POST方式：**
- 优点：参数在请求体中，无长度限制，安全性较高，适合传输大量数据和敏感信息
- 缺点：不能被缓存和收藏，不支持书签，每次都需要重新发送请求

**3.** 比较以Cookie和Session技术进行会话跟踪的优劣。

> **Cookie技术：**
- 优点：数据存储在客户端，减轻服务器压力，可设置较长的过期时间，支持跨请求持久化
- 缺点：安全性较低（客户端可查看和篡改），数据大小有限制（约4KB），只能存储字符串

**Session技术：**
- 优点：数据存储在服务器端，安全性高，可存储任意类型数据，无大小限制
- 缺点：占用服务器内存资源，用户量大时影响服务器性能，依赖Cookie或URL重写传递SessionID

**4.** 比较以Statement接口和PreparedStatement接口执行SQL语句的优劣。

> **Statement接口：**
- 优点：使用简单，适合执行一次性SQL语句
- 缺点：每次执行都需要编译SQL，效率较低；存在SQL注入风险（字符串拼接）

**PreparedStatement接口：**
- 优点：预编译SQL，多次执行效率高；使用参数化查询，有效防止SQL注入攻击
- 缺点：使用相对复杂，需要设置参数占位符

**5.** 比较以JSP内置标签和JSTL+EL方式开发Web项目的优劣。

> **JSP内置标签（如jsp:include、jsp:forward）：**
- 优点：JSP规范内置，无需额外引入库
- 缺点：功能有限，不能实现复杂逻辑（如循环、条件判断），页面中仍需嵌入Java代码

**JSTL + EL方式：**
- 优点：标签功能丰富（条件、循环、格式化等），EL简化数据访问，真正实现业务代码分离，提高可维护性
- 缺点：需要引入JSTL依赖库，学习成本稍高

---

## 五、编程题

### 第1题：前端表单与Servlet补全

**题干：**

现有如下前端表单页面代码：

```html
<form action="RegServlet" method="post">
    用户名: <input type="text" name="username"><br>
    密码: <input type="password" name="password"><br>
    性别: <input type="radio" name="sex" value="男">男<input type="radio" name="sex" value="女">女<br>
    邮箱: <input type="email" name="email"><br>
    你最喜欢的颜色: <input type="text" name="color"><br>
    语言:
        <input type="checkbox" name="language" value="java">Java
        <input type="checkbox" name="language" value="php">PHP
        <input type="checkbox" name="language" value="python">Python<br>
    专业: <select name="class">
            <option value="23网络工程技术">23网络工程技术</option>
            <option value="23软件工程技术">23软件工程技术</option>
            <option value="23大数据工程技术">23大数据工程技术</option>
            <option value="23物联网工程技术">23物联网工程技术</option>
          </select><br>
    备注: <textarea name="memo"></textarea><br>
    <input type="submit" value="注册">
</form>
<a href="QueryAllUserServlet" target="_blank">用户管理</a>
```

请根据前端代码，填写Servlet中需要补全的位置：

**需补全的代码（10处）：**

```java
@WebServlet("__________①__________")
public class RegServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("__________②__________");// 处理中文乱码
        String username = request.getParameter("__________③__________");
        String password = request.getParameter("__________④__________");
        String sex = request.getParameter("__________⑤__________");
        String email = request.getParameter("__________⑥__________");
        String color = request.getParameter("__________⑦__________");
        String myclass = request.getParameter("__________⑧__________");
        String memo = request.getParameter("__________⑨__________");
        String[] pl = request.getParameterValues("__________⑩__________");
        String pls = "";
        if (pl != null) {
            for(String lan : pl) {
                pls += (lan + ";");
            }
        }
        // ... 后续代码省略
    }
}
```

**补全答案：**

| 编号 | 填写内容 | 说明 |
|------|----------|------|
| ① | `/RegServlet` | Servlet映射路径，需与表单action对应 |
| ② | `utf-8` | 设置请求编码，解决中文乱码 |
| ③ | `username` | 对应表单 `name="username"` |
| ④ | `password` | 对应表单 `name="password"` |
| ⑤ | `sex` | 对应表单 `name="sex"` |
| ⑥ | `email` | 对应表单 `name="email"` |
| ⑦ | `color` | 对应表单 `name="color"` |
| ⑧ | `class` | 对应表单 `name="class"` |
| ⑨ | `memo` | 对应表单 `name="memo"` |
| ⑩ | `language` | 对应多选框 `name="language"` |

**完整参考代码：**

```java
@WebServlet("/RegServlet")
public class RegServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // 处理POST请求中文乱码
        request.setCharacterEncoding("utf-8");

        // 从前台获取表单参数，name属性必须和前端表单的name一致
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String sex = request.getParameter("sex");
        String email = request.getParameter("email");
        String color = request.getParameter("color");
        String myclass = request.getParameter("class");
        String memo = request.getParameter("memo");

        // 获取多选框的所有选中值
        String[] pl = request.getParameterValues("language");
        String pls = "";
        if (pl != null) { // 避免用户未选择任何语言时出现空指针异常
            for(String lan : pl) {
                pls += (lan + ";");
            }
        }

        boolean flag = false;
        String msg = "";
        UserService us = new UserService();
        flag = us.addUser(username, password, sex, email, color, pls, myclass, memo);
        if (flag) {
            msg = "恭喜你，注册成功！";
        } else {
            msg = "注册失败，请重试";
        }

        HttpSession session = request.getSession();
        session.setAttribute("msg", msg);
        response.sendRedirect("reg.jsp");
    }

    // 如果需要支持GET请求，可加上doGet方法
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }
}
```

---

### 第2题：数据库连接工具类补全

**题干：**

补全以下项目代码（数据库操作公共类）：

```java
/**
 * 数据库操作公共类
 */
public class DatabaseService {
    private final String DRIVER = "com.mysql.jdbc.Driver";       // 驱动字符串
    private final String URL = "jdbc:mysql://127.0.0.1:3306/hbcit?useUnicode=true&characterEncoding=utf-8";  // 数据库URL
    private final String DB_USERNAME = "root";                     // 数据库用户名
    private final String DB_PASSWORD = "123456";                    // 数据库密码
    Connection conn;

    public Connection getConnection() {
        try {
            // 第一步：加载驱动
            Class.forName(__________①__________);

            // 第二步：创建数据库连接
            conn = DriverManager.getConnection(__________②__________, __________③__________, __________④__________);

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }
}
```

**补全答案：**

| 编号 | 填写内容 | 说明 |
|------|----------|------|
| ① | `DRIVER` 或 `"com.mysql.jdbc.Driver"` | 数据库驱动类名 |
| ② | `URL` 或完整的JDBC URL字符串 | 数据库连接地址 |
| ③ | `DB_USERNAME` 或 `"root"` | 数据库用户名 |
| ④ | `DB_PASSWORD` 或 `"123456"` | 数据库密码 |

**完整参考代码：**

```java
/**
 * 数据库操作公共类
 */
public class DatabaseService {
    // MySQL 5.x 驱动类
    private final String DRIVER = "com.mysql.jdbc.Driver";
    // 注意：如果是 MySQL 8.x，驱动类应改为 com.mysql.cj.jdbc.Driver
    // URL 中需添加时区参数 &serverTimezone=UTC

    private final String URL = "jdbc:mysql://127.0.0.1:3306/hbcit?useUnicode=true&characterEncoding=utf-8";
    private final String DB_USERNAME = "root";
    private final String DB_PASSWORD = "123456";
    Connection conn;

    public Connection getConnection() {
        try {
            // 第一步：加载数据库驱动
            Class.forName(DRIVER);

            // 第二步：通过DriverManager获取数据库连接
            conn = DriverManager.getConnection(URL, DB_USERNAME, DB_PASSWORD);

        } catch (ClassNotFoundException e) {
            // 驱动类未找到异常
            e.printStackTrace();
        } catch (SQLException e) {
            // 数据库连接异常
            e.printStackTrace();
        }
        return conn;
    }
}
```

**要点解析：**
- `Class.forName(DRIVER)` 加载数据库驱动，将驱动注册到 DriverManager
- `DriverManager.getConnection(URL, username, password)` 获取数据库连接
- MySQL 8.x 版本驱动类改为 `com.mysql.cj.jdbc.Driver`，URL 需要加 `&serverTimezone=UTC`
