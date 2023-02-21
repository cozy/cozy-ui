#!/bin/sh

set -eu

# Palette needs to be accessible from stylus and from JS
JS_PALETTE='react/palette.js'
echo "// GENERATED AUTOMATICALLY FROM stylus/settings/palette.json" > $JS_PALETTE
echo "module.exports = `cat stylus/settings/palette.json`" >> $JS_PALETTE
node_modules/.bin/eslint --fix $JS_PALETTE
