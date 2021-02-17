# Working with a linked cozy-ui

Since `cozy-ui` is transpiled, when linking you must first

`yarn release`

Then you can have the transpiler watch the files :

`yarn transpile --watch`

If you change the icons, or the palette, you must run `yarn release` again.

On the app side, instead of using `yarn link` which can cause problems
with imports, you can use [`rlink`](https://gist.github.com/ptbrowne/add609bdcf4396d32072acc4674fff23).

# Transform markdown examples

:information_source: [`remark`][remark] is a processor for markdown: it parses markdown source into an AST,
transforms the tree and stringifies it afterwards. It can be used along with
jscodeshift to automatically migrate and transform examples.

When an API has changed and we need to update example, it can be useful to do it via a codemod. Here
is an example, running a jscodeshift codemod through the remark-jscodeshift plugin:

```
remark -o --use remark-jscodeshift=allowNoLang:true,transform:\"codemods/transform-dialog-imports.js\" .
```

[remark]: https://github.com/remarkjs/remark

# Screenshot testing locally

* You can screenshot old components into old_screenshots directory
* Screenshot the new one inside screenshots
* Run pixelmatch-server, which shows screenshots side by side like on Argos (you need the `pixelmatch` binary to be available)

```
# Screenshot all the components
yarn build:doc:react
yarn screenshots --styleguide-url 'http://localhost:6161'
cp -r screenshots old_screenshots
# yarn watch:doc:react
# Make changes to BarButton...
# Screenshot BarButton
export COMPONENT=BarButton
yarn screenshots --styleguide-url 'http://localhost:6161' --component $COMPONENT
# Run pixel diff on a single component
pixelmatch old_screenshots/$COMPONENT.png screenshots/$COMPONENT.png diff/$COMPONENT.png 0.1
# Regenerate screenshots.html when screenshot is taken
nodemon -w screenshots -x "node tpl-screenshots.js" -e png
# Open pixelmatch server to check diffs
$ yarn screenshots:server
# Enable hot reload
$ livereload screenshots,old_screenshots,diffs -w 1000
```
