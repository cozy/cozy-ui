[![Styleguidist](https://img.shields.io/badge/react-Styleguidist-green.svg?style=flat)](https://cozy.github.io/cozy-ui/react/)
[![Styleguide](https://img.shields.io/badge/KSS-Styleguide-green.svg?style=flat)](https://cozy.github.io/cozy-ui/styleguide/)
[![Travis build status shield](https://img.shields.io/travis/cozy/cozy-ui.svg?branch=master)](https://travis-ci.org/cozy/cozy-ui)
[![NPM release version shield](https://img.shields.io/npm/v/cozy-ui.svg)](https://www.npmjs.com/package/cozy-ui)
[![Github Release version shield](https://img.shields.io/github/tag/cozy/cozy-ui.svg)](https://github.com/cozy/cozy-ui/releases)
[![NPM Licence shield](https://img.shields.io/npm/l/cozy-ui.svg)](https://github.com/cozy/cozy-ui/blob/master/LICENSE)

# Cozy UI

CSS classes and React components designed to build [Cozy](https://cozy.io/) apps.

If you plan to build a webapp to run on Cozy, you'll probably want to use a simple and elegant solution to build your interfaces without the mess of dealing with complex markup and CSS. Then Cozy UI is here for you!

## CSS Styleguide

Check the [styleguide](https://docs.cozy.io/cozy-ui/styleguide) to see all the variables, mixins, classes, utilities and how to use them with only CSS classes.

## React components

Check out [UI components](https://docs.cozy.io/cozy-ui/react/) to see how to use ready made React components.

## Usage

### As a Components library

Add Cozy UI to a dependency to your project.

```
npm install cozy-ui
```

If you use the transpiled components (from `cozy-ui/transpiled/react`), you need to import the stylesheet (once):

```
import Button from 'cozy-ui/transpiled/react/Button'
import 'cozy-ui/transpiled/react/stylesheet.css'

<Button />
```

You're now ready to use [Cozy UI's React components](https://docs.cozy.io/cozy-ui/react/)

### Utility classes

React components only come with the needed style, nothing more, but you may need some more utility classes to build your apps.

To do so you have at your disposal a special CSS build `cozy-ui.utils.min.css` that you can add like this:

```
import 'cozy-ui/dist/cozy-ui.utils.min.css'
```

### As a vanilla CSS library

The entire library is also available as a good ol’ CSS library. You can simply add it to your app by linking the distributed minified file.

```html
<link media="all" rel="stylesheet" href=“cozy-ui/dist/cozy-ui.min.css" />
```

## Develop on Cozy UI

If you want to develop inside cozy-ui, you need a local version cozy-ui.

```bash
git clone git@github.com:cozy/cozy-ui.git
```

### Develop inside the styleguidist

It is convenient when modifying a component to use the styleguide site.

```bash
yarn watch:doc # Run the styleguide in watch mode
```

### Add an Icon

If you want to add a new icon to cozy-ui, you must follow these steps:

* Add the SVG in the `assets/icons` folder
* Generate the react component, simply by running `scripts/generate-svgr-icon.sh`
* Update this README by adding your icon in the list
* Update the tests by running `yarn test --updateSnapshot`

### Develop inside an app

Sometimes, you want to develop on a component, from the context of an app.
Then you need to link cozy-ui with `yarn link`.

```bash
cd cozy-ui
yarn link
yarn watch # Launch transpilation
```

Then in your application folder, you can link to your local Cozy UI.
You can use [rlink](https://gist.github.com/ptbrowne/add609bdcf4396d32072acc4674fff23)
instead of `yarn link`. It will prevent common build problems due
to module resolution inside symlinked folders.

```bash
cd my-app
rlink cozy-ui # Prefer rlink to yarn link
yarn watch
```

All your modifications in your local Cozy UI will now be visible in your application!

When sending a PR, if your changes have graphic impacts, it is useful for the reviewers if
you have deployed a version of the styleguidist containing your changes to your repository.

```bash
yarn build:doc:react
yarn deploy:doc --repo git@github.com:USERNAME/cozy-ui.git
```

## Guidelines for component development

* Use material UI whenever possible
* Override material UI components inside theme.js when necessary
* Avoid stylus to style new components
* Prefer withStyles / useStyles from material UI
* Use semantic variables for colors

```patch
withStyles(theme => ({
    root: {
-        backgroundColor: 'var(--paleGrey)',
+        backgroundColor: theme.palette.background.default
    }
}))
```

## Unit testing

Be aware that snapshots in unit tests use the transpiled version of cozy-ui. Therefore if you make changes and need to update the snapshots, you need to transpile first.

```bash
yarn transpile && yarn test -u
```

## UI regression testing

Components in `cozy-ui` are showcased with [React Styleguidist][]. To prevent UI regressions,
for each PR, each component is screenshotted and compared to the master version to find any
regression (thanks [Argos][] !).

If your app uses [React Styleguidist][], `cozy-ui` provides `rsg-screenshots`, a CLI tool to take
screenshots of your components (uses Puppeteer under the hood).

```bash
yarn add cozy-ui
# The rsg-screenshots binary is now installed
yarn build:doc:react # Build our styleguide, the output directory is docs/react
rsg-screenshots --screenshot-dir screenshots/ --styleguide-dir docs/react
# Each component in the styleguide will be screenshotted and saved inside the
screenshots/ directory
```

See our [travis configuration](./travis.yml) for more information.

## License

Cozy UI is developed by Cozy Cloud and distributed under the MIT license.

## What is Cozy?

![Cozy Logo](https://cdn.rawgit.com/cozy/cozy-guidelines/master/templates/cozy_logo_small.svg)

[Cozy](https://cozy.io) is a platform that brings all your web services in the
same private space. With it, your web apps and your devices can share data
easily, providing you with a new experience. You can install Cozy on your own
hardware where no one profiles you.

## Community

You can reach the Cozy Community by:

* Chatting with us on IRC [#cozycloud](http://webchat.freenode.net/?channels=%23cozycloud) on irc.freenode.net
* Posting on our [Forum](https://forum.cozy.io)
* Posting issues on the [Github repos](https://github.com/cozy/)
* Mentioning us on [Twitter](https://twitter.com/cozycloud)

[React Styleguidist]: https://react-styleguidist.js.org/

[Argos]: https://github.com/argos-ci/argos
