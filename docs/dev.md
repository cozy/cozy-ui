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

You can run the screenshots on a local styleguide server.

```
# Screenshot all the components
yarn screenshots --styleguide-url 'http://localhost:6161'
cp -r screenshots old_screenshots
# Make changes to BarButton...
# Screenshot BarButton
export COMPONENT=BarButton
yarn screenshots --styleguide-url 'http://localhost:6161' --component $COMPONENT
# Run pixel diff on a single component
pixelmatch old_screenshots/$COMPONENT-800x600.png screenshots/$COMPONENT-800x600.png $COMPONENT-diff.png 0.1
```
