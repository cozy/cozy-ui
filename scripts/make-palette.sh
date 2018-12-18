#!/bin/sh

set -eu

# Palette needs to be accessible from stylus and from JS
DIR_PREFIX='transpiled'
SOURCE_DIR='stylus/settings'
SOURCE_FILE='theme.json'
mkdir -p $DIR_PREFIX/$SOURCE_DIR
cp $SOURCE_DIR/$SOURCE_FILE $DIR_PREFIX/$SOURCE_DIR
