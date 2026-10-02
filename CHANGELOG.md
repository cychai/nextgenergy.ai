# 上线记录

按日期倒序（多伦多日期），每次发布在最上方追加；每条一句，带 commit hash。dist/ 随源码一起提交，push main 即由 Cloudflare Workers Builds 上线。

## 2026-10-02

- `073ad72` 按 Jim 10-02 决定：页脚不点名任何法律主体，改为「NextGenergy · North America. The contracting entity for your region is named on each quotation.」，版权行只写 NextGenergy，液冷学院改「operated by NextGenergy」，首页、Track record、News 详情页去掉 Technology Inc.（JSON-LD legalName、llms.txt 与隐私页保留「NextGenergy (NextGenergy Technology Inc.)」，全站无美国公司）；GA 改为同意后才加载：未选择或「Decline」时不加载 gtag、不发任何请求，「Accept analytics」后动态加载，撤回同意即停发并删除 _ga 类 Cookie、以后访问不再加载，页面源码不再静态引用 googletagmanager，隐私页与横幅按新行为重写（CSP 仍放行 GA 域名）；水产案例改回「Measured pond temperature about 25 °C (project operating record, not published)」，第六栏改为「System diagrams and acceptance records: Not published; explained under a non-disclosure agreement」，删「ask us and we will set up the NDA」类暗示，claims.ts 新增 case-aquaculture-25c；六边界统一为设施→芯片 B1–B6（记录样例页、热通路页 B 编号、geo.ts 定义），删除编号对照说明，记录模板 PDF 重新生成。
- `8826013` 按 ChatGPT 2026-10-02 审核（E01、E03–E05、跨站）：CDU 与撬块页加「Specification and interfaces」框架表（撬块含运输分段、现场接口数量、FAT 清单、安装条件、供应边界），数值一律「Configured per project; data sheet on request」，加「Request the data sheet」→ 联系页预选产品主题并带上产品名；Track record 四个案例改为统一六栏，未公开项写「Provided under a non-disclosure agreement」，水产案例改为控制目标；Standards 页改为版本表（全名、编号/版本、状态、原文入口、关注主题），缺口一句限定「本页所列文件及版本范围内」，最后复核 2026-10-02；联系表单按主题显示选填项目信息，成功给回执编号与「两个工作日内回复」，失败明确「Not delivered」并给邮箱、复制与可选草稿，不再自动打开邮件客户端；GDCC 预约加 10/20、10/21 与上午/下午，注明需邮件确认才算锁定；隐私页与横幅写明点「Decline」后不设 Cookie 但 Google 标签仍发送无 Cookie 的页面浏览信号（2026-10-02 线上实测 gcs=G100）；页脚写明 NextGenergy Technology Inc. 与 NextGenergy USA, LLC 在北美运营、主体在报价单注明，加相关网站（仿真台、液冷学院由 NextGenergy USA, LLC 运营）；热通路页与记录样例页加与仿真台 B1–B6 的编号对照。

## 2026-10-01

- `57f59b2` Standards 页标题改为「Standards we follow」，页脚、Evidence 总览、Resources、geo 核心页与 llms.txt 的链接文字同步，网址不变。
- `54107fc` 补记：新增本 CHANGELOG 的 10-01 条目，并重建 dist（News 栏目各页进入 dist、样式文件更新）。
- `617d9d9` 首页 GDCC Canada 2026 展位 A20 横幅从首屏末尾移到页眉之上，改为全宽海军蓝通栏（右侧「Book a time」→ 联系页 topic=gdcc），只在首页显示，手机端精简为一行短文案，10-22 起自动隐藏。
- `0d67b02` 新增 News 栏目：/company/news 列表和四条带日期的详情页（GDCC 展位、液冷学院开放报名、液冷仿真台上线、加拿大数据中心原则测量页），每条带 NewsArticle JSON-LD，并从 About、Resources、页脚 Company 栏和 llms.txt 加入口。
- `c15f7e7` Standards 页、Evidence 总览与 FAQ 改为「我们跟踪 OCP 公开草案与已发布规范」，删除参与评审、提交意见、提供条文等说法。
- `50821b2` 审校修正：Deschutes 规范日期、温差单位改 K、展会条目加浏览器端过期隐藏（event-expiry.js）、条件声明可折叠、文案整理。
- `de18907` OCP 亚太峰会证据入站：CDU 逼近温度 3–4 K 与 25 µm 全流量过滤、快接互换性缺口与 3 m/s 设计流速、线缆护套耐液研究、热路径第四至六边界的下一步、寒冷气候干冷器 WUE 与冬季过冷；产品与方案页带条件展示声明；首页横幅与联系页卡片上线 GDCC Canada 2026 展位 A20（topic=gdcc，10-22 后的构建自动去掉）。
