#!/bin/bash
# 双击即可启动本地预览：http://localhost:4321
cd "$(dirname "$0")"
export PATH="$HOME/.local/node/bin:$PATH"
open "http://localhost:4321" &
exec node node_modules/astro/bin/astro.mjs dev --port 4321 --host 127.0.0.1
