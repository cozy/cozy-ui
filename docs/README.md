[![Travis build status shield](https://img.shields.io/travis/cozy/cozy-ui.svg?branch=master)](https://travis-ci.org/cozy/cozy-ui)
[![NPM release version shield](https://img.shields.io/npm/v/cozy-ui.svg)](https://www.npmjs.com/package/cozy-ui)
[![Github Release version shield](https://img.shields.io/github/tag/cozy/cozy-ui.svg)](https://github.com/cozy/cozy-ui/releases)
[![NPM Licence shield](https://img.shields.io/npm/l/cozy-ui.svg)](https://github.com/cozy/cozy-ui/blob/master/LICENSE)
[![Styleguidist](https://img.shields.io/badge/react-Styleguidist-green.svg?style=flat)](https://cozy.github.io/cozy-ui/react/)
[![Styleguide](https://img.shields.io/badge/KSS-Styleguide-green.svg?style=flat)](https://cozy.github.io/cozy-ui/styleguide/)

# Cozy UI

CSS classes and React components designed to build [Cozy](https://cozy.io/) apps. 

If you plan to build a webapp to run on Cozy, you'll probably want to use a simple and elegant solution to build your interfaces without the mess of dealing with complex markup and CSS. Then Cozy UI is here for you!

## CSS Styleguide

Check the [styleguide](https://cozy.github.io/cozy-ui/styleguide) to see all the variables, mixins, classes, utilities and how to use them with only CSS classes.

## React components

Check out [UI components](https://cozy.github.io/cozy-ui/react/) to see how to use ready made (p)React components.

## Usage

### As a Stylus plugin
[Stylus][stylus] is used as a preprocessor. You can add it as a library in your project to use it out-of-the-box.

Cozy UI can be distributed as a plugin.

```sh
$ yarn add -D cozy-ui
```

Then simply add it to your plugins stack:

```js
var stylus  = require('stylus')
  , cozyui = require('cozy-ui/stylus');


function compile(str, path) {
return stylus(str)
  .set('filename', path)
  .set('compress', true)
  .use(cozyui());
}
```

Then, you just need to add a `@import 'cozy-ui'` statement at top of your main stylus file.

### As a vanilla CSS library

The entire library is also available as a good ol’ CSS library. You can simply add it to your app by linking the distributed minified file.
```html
<link media="all" rel="stylesheet" href=“cozy-ui/dist/cozy-ui.min.css" />
```


## License

Cozy UI is developed by Cozy Cloud and distributed under the AGPL-3.0 license.


## What is Cozy?

![Cozy Logo](https://raw.github.com/cozy/cozy-setup/gh-pages/assets/images/happycloud.png)

[Cozy](https://cozy.io) is a platform that brings all your web services in the
same private space. With it, your web apps and your devices can share data
easily, providing you with a new experience. You can install Cozy on your own
hardware where no one profiles you.


## Community

You can reach the Cozy Community by:

* Chatting with us on IRC [#cozycloud](http://webchat.freenode.net/?channels=%23cozycloud) on irc.freenode.net
* Posting on our [Forum](https://forum.cozy.io)
* Posting issues on the [Github repos](https://github.com/cozy/)
* Mentioning us on [Twitter](https://twitter.com/mycozycloud)

[stylus]: http://stylus-lang.com/
