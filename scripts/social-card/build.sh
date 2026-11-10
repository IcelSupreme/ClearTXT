#!/bin/sh
# Renders card.html to site/social-card.png (1200x900) with headless Chrome.
# Run from the repository root: sh scripts/social-card/build.sh
# Set CHROME to the browser's path when it isn't on the PATH as chrome.
set -e
chrome=${CHROME:-chrome}
here=$(cd "$(dirname "$0")" && pwd)
root=$(cd "$here/../.." && pwd)
out="$root/site/social-card.png"
page="$here/card.html"
# On Windows (Git Bash), Chrome needs Windows paths.
if command -v cygpath >/dev/null 2>&1; then
	out=$(cygpath -w "$out")
	page=$(cygpath -m "$page")
fi
"$chrome" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
	--window-size=1200,900 --screenshot="$out" "file:///${page#/}" 2>/dev/null
[ -s "$out" ] || { echo "build.sh: no image was written" >&2; exit 1; }
echo "wrote site/social-card.png"
