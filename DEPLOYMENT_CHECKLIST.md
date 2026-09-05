# NextGenergy Cloudflare 部署检查清单

适用站点：`nextgenergy.ai`  
目标平台：Cloudflare Pages  
主域名：`https://nextgenergy.ai`

## 一、部署前

- [ ] Cloudflare、域名注册商、Google Workspace 管理员账号均已开启两步验证。
- [ ] 确认 Pages 项目名称为 `nextgenergy`。
- [ ] 确认生产分支为 `main`。
- [ ] 确认部署目录为仓库根目录，无需执行构建命令。
- [ ] 确认 `_headers`、`_redirects`、`404.html`、`.well-known/security.txt` 均包含在部署资产中。
- [ ] 确认 `.trae/`、`.wrangler/`、`.git/`、`node_modules/`、`.DS_Store` 不会上传。

推荐使用 Wrangler 部署：

```bash
npx wrangler pages deploy . --project-name nextgenergy
```

## 二、Pages 临时域名验收

- [ ] 打开 `https://nextgenergy.pages.dev`，确认首页正常。
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

在 **Workers & Pages → nextgenergy → Custom domains** 中：

- [ ] 添加 `nextgenergy.ai`。
- [ ] 添加 `www.nextgenergy.ai`。
- [ ] 确认两个域名的证书状态均为 Active。
- [ ] 确认 `nextgenergy.ai` 是对外使用的主域名。

### 配置 www 跳转

Pages 的 `_redirects` 不支持按来源域名匹配，需要在：

**Rules → Redirect Rules → Create rule**

配置：

- [ ] 规则名称：`www to apex`
- [ ] 条件：`Hostname equals www.nextgenergy.ai`
- [ ] 类型：Dynamic redirect
- [ ] 目标表达式：

```text
concat("https://nextgenergy.ai", http.request.uri.path)
```

- [ ] 状态码：`301`
- [ ] Preserve query string：开启

## 四、SSL/TLS

在 **SSL/TLS** 中：

- [ ] Encryption mode 设置为 `Full (strict)`。
- [ ] **Edge Certificates → Always Use HTTPS** 已开启。
- [ ] **Minimum TLS Version** 设置为 `TLS 1.2`。
- [ ] 确认证书自动续期正常。
- [ ] 不启用可能与现有安全头冲突的 Transform Rule。

暂不建议在首次上线时启用 HSTS Preload。确认所有子域均支持 HTTPS 后再单独评估。

## 五、DNS 与邮件安全

### DMARC

- [ ] DNS 中添加 TXT 记录：

```text
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:jim.li@nextgenergy.ai
```

- [ ] 观察至少两周 DMARC 报告。
- [ ] 确认合法邮件均通过 SPF/DKIM 后，将策略升级为 `p=quarantine` 或 `p=reject`。
- [ ] 在 Google Workspace 管理后台确认 DKIM 已启用。
- [ ] 检查现有 SPF 记录，确保只有一条有效 SPF TXT 记录。

### CAA

- [ ] 添加以下四条 CAA 记录：

```text
0 issue "letsencrypt.org"
0 issue "pki.goog"
0 issue "ssl.com"
0 issue "digicert.com"
```

### DNSSEC

- [ ] 在 **DNS → Settings → DNSSEC** 中启用 DNSSEC。
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

- [ ] Google Analytics 属性中的 Measurement ID 为 `G-SQ8WX1BMRW`。
- [ ] 打开站点后出现 Analytics consent 提示。
- [ ] 选择 Decline 后不产生 `_ga` Cookie。
- [ ] 选择 Accept 后在浏览器开发者工具中看到 `_ga` Cookie。
- [ ] Google Analytics Realtime 中能看到测试访问。
- [ ] 页脚的 **Analytics choices** 可以重新打开选择窗口。
- [ ] 隐私页已准确说明 Google Analytics 和 Consent Mode。

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

- [ ] HTTP 自动跳转 HTTPS。
- [ ] `www` 返回 301，并保留路径和查询参数。
- [ ] `/approach` 返回 200。
- [ ] `/approach.html` 返回 308，跳转到 `/approach`。
- [ ] 不存在的地址返回 404。
- [ ] CSP、HSTS、X-Frame-Options 等安全头存在。
- [ ] security.txt、sitemap 和 RSS 均返回 200。

## 九、上线记录

- 部署时间：
- Cloudflare Deployment ID：
- 部署 Commit：
- 操作人：
- pages.dev 验收人：
- 正式域名验收人：
- DNSSEC 生效时间：
- DMARC 策略复查日期：
- 回滚版本：
