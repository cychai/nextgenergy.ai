# NextGenergy Cloudflare 部署检查清单

适用站点：`nextgenergy.ai`\
目标平台：Cloudflare Workers Static Assets（GitHub 自动部署）\
主域名：`https://nextgenergy.ai`

## 一、部署前

- [ ] Cloudflare、域名注册商、Google Workspace 管理员账号均已开启两步验证。

- [x] 确认 Cloudflare 项目名称为 `nextgenergy-ai`。

- [x] 确认 GitHub 仓库为 `cychai/nextgenergy.ai`，生产分支为 `main`。

- [ ] 确认本地 `main` 已推送至 `origin/main`，网站代码没有待提交变更。

- [x] 确认根目录为 `/`，构建命令留空。

- [x] 确认部署命令为：

```bash
npx wrangler deploy
```

- [x] `wrangler.jsonc` 中 `name` 为 `nextgenergy-ai`，配置 `assets.directory` 为 `.`，并使用 `not_found_handling: "404-page"`。

- [x] 确认 `_headers`、`_redirects`、`404.html`、`.well-known/security.txt` 均包含在部署资产中。

- [x] 确认 `.trae/`、`.wrangler/`、`.git/`、`node_modules/`、`.DS_Store` 不会上传。

代码推送到 GitHub `main` 后，由 Cloudflare 自动拉取并执行部署命令。不要通过 Dashboard 手工上传本地文件夹。

## 二、GitHub 构建验收

- [x] 在 **Workers 和 Pages → nextgenergy-ai → 部署** 中找到目标 Git Commit。

- [x] 确认初始化、克隆、安装、部署四个阶段全部成功。

- [x] 确认生产流量 100% 指向新版本。

- [ ] 点击 Dashboard 中的 **访问** 链接，确认预览域名首页正常。

- [ ] 检查 Approach、Solutions、Platform、Evidence、Services、Tools、Insights、Company 页面。

- [ ] 检查手机端菜单可以展开和关闭。

- [ ] 检查三个工具页面可以交互：
  - `/tools/return-water`

  - `/tools/approach-temp`

  - `/tools/leak-checklist`

- [ ] 检查 Company 视频可以播放。

- [ ] 检查 Contact 页面可以唤起本地邮件客户端。

- [ ] 访问不存在的地址，确认返回自定义 404 页面和 HTTP 404 状态。

- [ ] 浏览器控制台中没有 CSP、脚本或资源加载错误。

## 三、自定义域名

在 **Workers 和 Pages → nextgenergy-ai → 域** 中：

- [x] 添加 `nextgenergy.ai`。

- [x] 添加 `www.nextgenergy.ai`。

- [x] 确认两个域名的证书状态均为 Active。

- [x] 确认 `nextgenergy.ai` 是对外使用的主域名。

### 配置 www 跳转

静态资源的 `_redirects` 不支持按来源域名匹配，需要在：

**Rules → Redirect Rules → Create rule**

配置：

- [x] 规则名称：`www to apex`

- [x] 条件：`Hostname equals www.nextgenergy.ai`

- [x] 类型：Dynamic redirect

- [x] 目标表达式：

```text
concat("https://nextgenergy.ai", http.request.uri.path)
```

- [x] 状态码：`301`

- [x] Preserve query string：开启

## 四、SSL/TLS

在 **SSL/TLS** 中：

- [x] Encryption mode 设置为 `Full (strict)`。

- [x] **Edge Certificates → Always Use HTTPS** 已开启。

- [x] **Minimum TLS Version** 设置为 `TLS 1.2`。

- [ ] 确认证书自动续期正常。

- [ ] 不启用可能与现有安全头冲突的 Transform Rule。

暂不建议在首次上线时启用 HSTS Preload。确认所有子域均支持 HTTPS 后再单独评估。

## 五、DNS 与邮件安全

### DMARC

- [x] DNS 中添加 TXT 记录：

```text
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:jim.li@nextgenergy.ai
```

- [ ] 观察至少两周 DMARC 报告。

- [ ] 确认合法邮件均通过 SPF/DKIM 后，将策略升级为 `p=quarantine` 或 `p=reject`。

- [ ] 在 Google Workspace 管理后台确认 DKIM 已启用。

- [x] 检查现有 SPF 记录，确保只有一条有效 SPF TXT 记录。

### CAA

- [x] 添加以下四条 CAA 记录：

```text
0 issue "letsencrypt.org"
0 issue "pki.goog"
0 issue "ssl.com"
0 issue "digicert.com"
```

### DNSSEC

- [x] 在 **DNS → Settings → DNSSEC** 中启用 DNSSEC。

- [ ] 将 Cloudflare 提供的 DS 记录填写到域名注册商。

- [ ] 返回 Cloudflare 确认 DNSSEC 状态为 Active。

## 六、Cloudflare 功能开关

- [ ] Rocket Loader：关闭。

- [ ] Auto Minify：关闭。

- [ ] Email Address Obfuscation：关闭。

- [ ] 不启用会向页面注入脚本的第三方 Apps。

- [ ] 若启用 Bot Fight Mode，上线后重新检查浏览器控制台和交互功能。

- [ ] 确认缓存规则不会长期缓存 HTML。

- [ ] 确认 `/brand/*`、`/fonts/*`、`/_astro/*` 使用长期静态缓存。

## 七、Google Analytics

- [x] Google Analytics 属性中的 Measurement ID 为 `G-SQ8WX1BMRW`。

- [ ] 打开站点后出现 Analytics consent 提示。

- [ ] 选择 Decline 后不产生 `_ga` Cookie。

- [ ] 选择 Accept 后在浏览器开发者工具中看到 `_ga` Cookie。

- [ ] Google Analytics Realtime 中能看到测试访问。

- [ ] 页脚的 **Analytics choices** 可以重新打开选择窗口。

- [x] 隐私页已准确说明 Google Analytics 和 Consent Mode。

## 八、上线后命令验收

```bash
# HTTPS 与安全响应头
curl -sI https://nextgenergy.ai/ \
  | grep -iE "HTTP/|content-security|strict-transport|x-frame|x-content-type|referrer|permissions"

# www 永久跳转到主域名
curl -sI https://www.nextgenergy.ai/approach \
  | grep -iE "^HTTP|location"

# 无扩展名路由和 HTML 规范化
curl -sI https://nextgenergy.ai/approach | head -1
curl -sI https://nextgenergy.ai/approach.html | grep -iE "^HTTP|location"

# 自定义 404
curl -sI https://nextgenergy.ai/does-not-exist | head -1

# 安全与索引文件
curl -s https://nextgenergy.ai/.well-known/security.txt
curl -sI https://nextgenergy.ai/sitemap-index.xml | head -1
curl -sI https://nextgenergy.ai/insights/rss.xml | head -1
```

预期结果：

- [x] HTTP 自动跳转 HTTPS。

- [x] `www` 返回 301，并保留路径和查询参数。

- [x] `/approach` 返回 200。

- [x] `/approach.html` 返回 307，跳转到 `/approach`（Workers Static Assets 默认 HTML handling 行为）。

- [x] 不存在的地址返回 HTTP 404。

- [x] CSP、HSTS、X-Frame-Options 等安全头存在。

- [x] security.txt、sitemap 和 RSS 均返回 200。

## 九、上线记录

- 部署时间：

- Cloudflare Deployment ID：`81e667ef`（提交 `57f4482`，自定义 404 修复部署后更新）

- 部署 Commit：`57f4482`（自定义 404 修复部署后更新）

- 操作人：

- Worker 预览域名验收人：

- 正式域名验收人：

- DNSSEC 生效时间：

- DMARC 策略复查日期：

- 回滚版本：
