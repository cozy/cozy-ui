#!/usr/bin/env bash

set -euo pipefail

createSvgr()
{
  svgFileFullPath=$1
  svgFilename=`basename $svgFileFullPath`
  jsFilename=`echo $svgFilename | gsed -E 's/^([a-z])/\U\1/g; s/-([a-z])/\U\1/g; s/svg$/jsx/g'`
  jsFileFullPath="react/Icons/${jsFilename}"

  echo $svgFileFullPath

  node_modules/.bin/svgr $svgFileFullPath \
    --no-dimensions \
    --template scripts/svgr-template.js > $jsFileFullPath
  node_modules/.bin/eslint --fix $jsFileFullPath
}

if [ -d "$1" ]; then
  for i in "$1"/*.svg
  do
    createSvgr $i
  done
else
  createSvgr $1
fi
