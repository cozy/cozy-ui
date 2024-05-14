[![Styleguidist](https://img.shields.io/badge/react-Styleguidist-green.svg?style=flat)](https://cozy.github.io/cozy-ui/react/)
[![Styleguide](https://img.shields.io/badge/KSS-Styleguide-green.svg?style=flat)](https://cozy.github.io/cozy-ui/styleguide/)
[![Travis build status shield](https://img.shields.io/travis/cozy/cozy-ui.svg?branch=master)](https://travis-ci.org/cozy/cozy-ui)
[![NPM release version shield](https://img.shields.io/npm/v/cozy-ui.svg)](https://www.npmjs.com/package/cozy-ui)
[![Github Release version shield](https://img.shields.io/github/tag/cozy/cozy-ui.svg)](https://github.com/cozy/cozy-ui/releases)
[![NPM Licence shield](https://img.shields.io/npm/l/cozy-ui.svg)](https://github.com/cozy/cozy-ui/blob/master/LICENSE)

# Cozy UI

CSS classes and React components designed to build [Cozy](https://cozy.io/) apps.

If you plan to build a webapp to run on Cozy, you'll probably want to use a simple and elegant solution to build your interfaces without the mess of dealing with complex markup and CSS. Then Cozy UI is here for you!

Cozy UI relies heavily on [Material UI v4](https://v4.mui.com/) and it can be useful to know how it works.

## React components (styleguidist)

Check out [UI components](https://docs.cozy.io/cozy-ui/react/) to see how to use ready made React components.

## CSS Styleguide

Check the [styleguide](https://docs.cozy.io/cozy-ui/styleguide/) to see all the variables, mixins, classes, utilities and how to use them with only CSS classes.

## Usage

### As a Components library

Add Cozy UI to a dependency to your project.

```
yarn add cozy-ui
```

If you use the transpiled components (from `cozy-ui/transpiled/react`), you need to import the stylesheet (once):

```
import Button from 'cozy-ui/transpiled/react/deprecated/Button'
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

### As a vanilla CSS library (deprecated)

The entire library is also available as a good ol’ CSS library. You can simply add it to your app by linking the distributed minified file.

```html
<link media="all" rel="stylesheet" href=“cozy-ui/dist/cozy-ui.min.css" />
```

## Develop on Cozy UI

If you want to develop inside cozy-ui, you need a local version cozy-ui.

```bash
git clone git@github.com:cozy/cozy-ui.git
```

### Install

First `nvm use` (to set node version as defined in .nvmrc) then `yarn install`

### Develop inside the styleguidist

It is convenient when modifying a component to use the styleguide site.

```bash
yarn makeSpriteAndPalette # Create sprite and palette
yarn start # Transpile the files in watch mode
yarn build:css:all # Build CSS files needed by the documentation
yarn start:doc # Run the styleguide in watch mode
```

### Add a component

If you want to add a new component, you must follow these steps:

* Add the new component in `/react` folder with its `README.md` file
* Expose it in the API by adding it in `react/index.js`
* Add it in the documentation by modifying `docs/styleguide.config.js`
* If necessary you can add snapshots for it by modifying `react/examples.spec.jsx` and updating them `yarn makeSpriteAndPalette && yarn build && yarn test -u`
* Remember to propagate the possible `ref` with `React.forwardRef`. [See forwardRef documentation](https://en.reactjs.org/docs/forwarding-refs.html)
* Try to think of ARIA attributes if you are coding new components

Be careful to respect MUI API when creating a new component. See [our guidelines to create a new component](./guidelines.md#new-component).

### Rename/Move a component

When renaming or moving a Cozy-UI component, it may cause a breaking change. In this case, you should provide a codemod as much as possible to fix it.

### Guidelines for component development

* Use material UI whenever possible
* Override material UI components inside `makeOverrides.js` when necessary
* Avoid stylus to style new components based on MUI and prefer `/helpers/makeStyles`
* Use semantic variables for colors from `stylus/settings/palettes.styl`, or color from `theme` objects in `makeStyles`

### Add an icon

If you want to add a new icon to cozy-ui, you must follow these steps:

* If you SVG file is an icon (not an illustration), verify that the file doesn't have any fill or fill-opacity properties. Remove them if necessary
* Add the SVG in the `assets/icons/[ui || illus]` folder
* Optimize it with `yarn svgo assets/icons/[ui || illus]/[new icon file name]`
* Generate the react component by running `yarn makeSvgr assets/icons/[ui || illus]/[new icon file name]`
* Update the documentation by adding the new file in react/Icon/Readme.md. If it's an icon, add it in SVGr icons and Available UI icons sections, or in SVGr illustrations and Available illustrations sections if it's an illustration
* Don't forget to check the icon's color on different theme (inverted, etc.)
* Update the tests by running `yarn makeSpriteAndPalette && yarn build && yarn test -u`

### Develop inside an app

Sometimes, you want to develop on a component, from the context of an app.
Then you need to link cozy-ui with `yarn link`. Since `cozy-ui` is transpiled, when linking you must first `yarn release`. If you change the icons, or the palette, you must run `yarn release` again.

```bash
cd cozy-ui
yarn makeSpriteAndPalette # if first time
yarn link
yarn start # Launch transpilation
yarn makeSpriteAndPalette # if you change icons or palette
```

Then in your application folder, you can link to your local Cozy UI.
You can use [rlink](https://gist.github.com/ptbrowne/add609bdcf4396d32072acc4674fff23) instead of `yarn link`. It will prevent common build problems due to module resolution inside symlinked folders.
If your application doesn't use cozy-ui directly as dependency but through a library, you have to use `rlink` inside your application folder, not inside the library's one.
`rlink` only copies the build and not the node_modules of cozy-ui, so you have to install a version of cozy-ui before making a `rlink`.

```bash
cd my-app
rlink cozy-ui # Prefer rlink to yarn link
yarn start
```

All your modifications in your local Cozy UI will now be visible in your application!

### Making a demo when creating a pull request

When sending a PR, if your changes have graphic impacts, it is useful for the reviewers if
you have deployed a version of the styleguidist containing your changes to your fork's repository.
Don't forget to change `USERNAME` by yours.

```bash
yarn build:all && yarn deploy:doc --repo git@github.com:USERNAME/cozy-ui.git
```

⚠️ If the `deploy:doc` failed, you need to checkout your dev branch by doing `git checkout -`

### Unit testing

Be aware that snapshots in unit tests use the transpiled version of cozy-ui. Therefore if you make changes and need to update the snapshots, you need to transpile first.

```bash
yarn makeSpriteAndPalette && yarn build && yarn test -u
```

We suggest to use `@testing-library/react` over `enzyme` for tests. We have
historically used `enzyme` but we prefer the philosophy behind `testing-library` since
it pushes to test for what the user sees.

For complex components, we expose testing helpers in the `testing` file in their respective folders.

```jsx
import { getCloseButton, getAllDialogs } from 'cozy-ui/transpiled/react/CozyDialogs/testing'

it('should close dialog', () => {
  const onClose = jest.fn()
  const root = render(<MyApp onCloseDialog={onClose} />)
  const dialog = getDialog(root)
  const closeBtn = getCloseButton(dialog)
  fireEvent.click(closeBtn)
  expect(onClose).toHaveBeenCalled()
})
```

### UI regression testing

Components in `cozy-ui` are showcased with [React Styleguidist][]. To prevent UI regressions,
for each PR, each component is screenshotted and compared to the master version to find any
regression (thanks [Argos][] !).

If your app uses [React Styleguidist][], `cozy-ui` provides `rsg-screenshots`, a CLI tool to take
screenshots of your components (uses Puppeteer under the hood).

```bash
yarn add cozy-ui # The rsg-screenshots binary is now installed
yarn makeSpriteAndPalette
yarn build:doc:react # Build our styleguide, the output directory is docs/react
rsg-screenshots --screenshot-dir screenshots/ --styleguide-dir docs/react # Each component in the styleguide will be screenshotted and saved inside the screenshots/ directory
```

See our [travis configuration](https://github.com/cozy/cozy-ui/blob/master/.travis.yml) for more information.

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
