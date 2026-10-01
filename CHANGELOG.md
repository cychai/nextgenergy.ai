# 上线记录

按日期倒序（多伦多日期），每次发布在最上方追加；每条一句，带 commit hash。dist/ 随源码一起提交，push main 即由 Cloudflare Workers Builds 上线。

## 2026-10-01

- `57f59b2` Standards 页标题改为「Standards we follow」，页脚、Evidence 总览、Resources、geo 核心页与 llms.txt 的链接文字同步，网址不变。
- `54107fc` 补记：新增本 CHANGELOG 的 10-01 条目，并重建 dist（News 栏目各页进入 dist、样式文件更新）。
- `617d9d9` 首页 GDCC Canada 2026 展位 A20 横幅从首屏末尾移到页眉之上，改为全宽海军蓝通栏（右侧「Book a time」→ 联系页 topic=gdcc），只在首页显示，手机端精简为一行短文案，10-22 起自动隐藏。
- `0d67b02` 新增 News 栏目：/company/news 列表和四条带日期的详情页（GDCC 展位、液冷学院开放报名、液冷仿真台上线、加拿大数据中心原则测量页），每条带 NewsArticle JSON-LD，并从 About、Resources、页脚 Company 栏和 llms.txt 加入口。
- `c15f7e7` Standards 页、Evidence 总览与 FAQ 改为「我们跟踪 OCP 公开草案与已发布规范」，删除参与评审、提交意见、提供条文等说法。
- `50821b2` 审校修正：Deschutes 规范日期、温差单位改 K、展会条目加浏览器端过期隐藏（event-expiry.js）、条件声明可折叠、文案整理。
- `de18907` OCP 亚太峰会证据入站：CDU 逼近温度 3–4 K 与 25 µm 全流量过滤、快接互换性缺口与 3 m/s 设计流速、线缆护套耐液研究、热路径第四至六边界的下一步、寒冷气候干冷器 WUE 与冬季过冷；产品与方案页带条件展示声明；首页横幅与联系页卡片上线 GDCC Canada 2026 展位 A20（topic=gdcc，10-22 后的构建自动去掉）。
