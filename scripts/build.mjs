// Build wrapper. Locally (Node >= 22) it runs `astro build`. On a build image whose Node is
// too old for Astro 7, it falls back to the committed dist/ (which is rebuilt before every push)
// instead of failing the deploy.
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
const major = Number(process.versions.node.split('.')[0]);
if (major >= 22) {
  execSync('astro build', { stdio: 'inherit' });
} else if (existsSync('dist/index.html')) {
  console.log(`[build] Node ${process.versions.node} is older than Astro 7 requires; using the committed dist/ as-is.`);
} else {
  console.error(`[build] Node ${process.versions.node} is too old for Astro 7 and no committed dist/ was found.`);
  process.exit(1);
}
