#!/bin/sh

set -eu

# Palette needs to be accessible from stylus and from JS
JS_PALETTE='react/palette.ts'
echo "// GENERATED AUTOMATICALLY FROM stylus/settings/palette.json" > $JS_PALETTE
echo "export default `cat stylus/settings/palette.json`" >> $JS_PALETTE
node_modules/.bin/eslint --fix $JS_PALETTE
