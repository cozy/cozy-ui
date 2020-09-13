# Working with a linked cozy-ui

Since `cozy-ui` is transpiled, when linking you must first

`yarn release`

Then you can have the transpiler watch the files :

`yarn transpile --watch`

If you change the icons, or the palette, you must run `yarn release` again.

# Transform markdown examples

remark is a processor for markdown, it parses the markdown, transforms the
tree and stringifies it afterwards. It can be used along with jscodeshift
to automatically migrate and transform examples.

Here is an example, running a jscodeshift codemod through the remark-jscodeshift
plugin:

```
remark -o --use remark-jscodeshift=allowNoLang:true,transform:\"codemods/transform-dialog-imports.js\" .
```
