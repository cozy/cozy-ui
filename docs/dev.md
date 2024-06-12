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

* You can screenshot old components into pristine_screenshots directory
* Screenshot the new one inside screenshots
* Run pixelmatch-server, which shows screenshots side by side like on Argos (you need the `pixelmatch` binary to be available)

```bash
# Screenshot all the components
yarn build:all
mkdir ./screenshots
yarn screenshots
cp -r screenshots pristine_screenshots

# yarn watch:doc:react
# Make changes to BarButton...

# Screenshot BarButton
export COMPONENT=BarButton
yarn screenshots --component $COMPONENT

# Run pixel diff on a single component
pixelmatch pristine_screenshots/$COMPONENT.png screenshots/$COMPONENT.png diff/$COMPONENT.png 0.1

# Open pixelmatch server to check diffs
$ yarn screenshots:server

# Enable hot reload
$ livereload screenshots,pristine_screenshots,diffs -w 1000
```
