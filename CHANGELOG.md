# [43.3.0](https://github.com/cozy/cozy-ui/compare/v43.2.0...v43.3.0) (2021-01-11)


### Features

* Add blocks in Viewer InformationPanel ([0c6382c](https://github.com/cozy/cozy-ui/commit/0c6382c))

# [43.2.0](https://github.com/cozy/cozy-ui/compare/v43.1.0...v43.2.0) (2021-01-11)


### Features

* Add possibility to hide close button of Viewer ([ed9a304](https://github.com/cozy/cozy-ui/commit/ed9a304))
* Add support of Information panel in Viewer ([9dd9f68](https://github.com/cozy/cozy-ui/commit/9dd9f68))
* Change Viewer Navigation arrow icons ([3135a15](https://github.com/cozy/cozy-ui/commit/3135a15))
* New toolbar for Viewer ([51d0daa](https://github.com/cozy/cozy-ui/commit/51d0daa))

# [43.1.0](https://github.com/cozy/cozy-ui/compare/v43.0.0...v43.1.0) (2021-01-08)


### Bug Fixes

* Correct path for stylus file ([00d23bf](https://github.com/cozy/cozy-ui/commit/00d23bf))


### Features

* Better support for inverted theme for u-links ([bd7f261](https://github.com/cozy/cozy-ui/commit/bd7f261))

# [43.0.0](https://github.com/cozy/cozy-ui/compare/v42.4.1...v43.0.0) (2021-01-08)


### Bug Fixes

* Remove one gutterBottom in HistoryRow ([959033b](https://github.com/cozy/cozy-ui/commit/959033b))


### Features

* Better spacing for Empty text ([5e921fd](https://github.com/cozy/cozy-ui/commit/5e921fd))
* Better support inverted theme for UploadQueue ([eacd8af](https://github.com/cozy/cozy-ui/commit/eacd8af))
* Deprecate Modal and Text ([6e7163d](https://github.com/cozy/cozy-ui/commit/6e7163d))
* Move CompositeRow & InlineCard to deprecated section of styleguide ([1ae301e](https://github.com/cozy/cozy-ui/commit/1ae301e))
* Move tooltip styles to theme and support inverted theme ([27ae826](https://github.com/cozy/cozy-ui/commit/27ae826))
* Remove ContextHeader./ Well / ThresholdBar / PushClientBanner ([c2cf02b](https://github.com/cozy/cozy-ui/commit/c2cf02b))
* Remove old Tabs ([36d02e8](https://github.com/cozy/cozy-ui/commit/36d02e8))
* UploadQueue better supports the theme ([ed0b64c](https://github.com/cozy/cozy-ui/commit/ed0b64c))
* Use MuiButton for Upload header in mobile ([d621ef4](https://github.com/cozy/cozy-ui/commit/d621ef4))


### BREAKING CHANGES

* Old tabs are removed, MUI tabs should be used now
* Modal and Text are no longer importable via
import cozy-ui/transpiled/react, they still are importable from
import cozy-ui/transpiled/react/{Text,Modal} though
* Removed ContextHeader / Well and ThresholdBar

## [42.4.1](https://github.com/cozy/cozy-ui/compare/v42.4.0...v42.4.1) (2021-01-06)


### Bug Fixes

* Can or not show status in AppTile ([67de390](https://github.com/cozy/cozy-ui/commit/67de390))

# [42.4.0](https://github.com/cozy/cozy-ui/compare/v42.3.0...v42.4.0) (2021-01-05)


### Bug Fixes

* Text secondary color for navigation section headers ([7a6d8dc](https://github.com/cozy/cozy-ui/commit/7a6d8dc))


### Features

* Better support inverted theme for AppSections and Tiles ([d4aea4a](https://github.com/cozy/cozy-ui/commit/d4aea4a))
* Update snapshot and test ([ba6472d](https://github.com/cozy/cozy-ui/commit/ba6472d))

# [42.3.0](https://github.com/cozy/cozy-ui/compare/v42.2.0...v42.3.0) (2021-01-05)


### Bug Fixes

* ErrorMessage uses u-error and thus is correctly styled in inverted ([d4f2be4](https://github.com/cozy/cozy-ui/commit/d4f2be4))
* Lighter color for ExpansionPanel border ([f965914](https://github.com/cozy/cozy-ui/commit/f965914))
* No border for ListSubHeader ([8042c75](https://github.com/cozy/cozy-ui/commit/8042c75))
* Switch example ([fbb0766](https://github.com/cozy/cozy-ui/commit/fbb0766))
* Theme inverted switcher was under ListSubHeader ([bc2034d](https://github.com/cozy/cozy-ui/commit/bc2034d))


### Features

* Add deprecation warning to CompositeRow ([8fee6cf](https://github.com/cozy/cozy-ui/commit/8fee6cf))
* Add elevation examples to Paper ([5ddbdd5](https://github.com/cozy/cozy-ui/commit/5ddbdd5))
* Add global theme selector ([1747679](https://github.com/cozy/cozy-ui/commit/1747679))
* Add inverted colors for intents ([001601c](https://github.com/cozy/cozy-ui/commit/001601c))
* Add our custom shadows ([8cafa94](https://github.com/cozy/cozy-ui/commit/8cafa94))
* Add palette that can be imported in sketch ([455eed8](https://github.com/cozy/cozy-ui/commit/455eed8))
* Add shadow generation ([19e4cdd](https://github.com/cozy/cozy-ui/commit/19e4cdd))
* Add way to switch to inverted theme in each example ([78029e7](https://github.com/cozy/cozy-ui/commit/78029e7))
* Banner supports inverted theme ([03b81b5](https://github.com/cozy/cozy-ui/commit/03b81b5))
* Better support for Dialog in inverted theme ([9a9256d](https://github.com/cozy/cozy-ui/commit/9a9256d))
* Better support for inverted theme for List ([d43d5c1](https://github.com/cozy/cozy-ui/commit/d43d5c1))
* Error intent color supports inverted ([813fc31](https://github.com/cozy/cozy-ui/commit/813fc31))
* FigureBlock supports inverted mode ([91b3dcd](https://github.com/cozy/cozy-ui/commit/91b3dcd))
* Filename supports inverted mode ([6f4a3cf](https://github.com/cozy/cozy-ui/commit/6f4a3cf))
* Icon buttons are in text secondary color ([bb234a6](https://github.com/cozy/cozy-ui/commit/bb234a6))
* Put TextField inverted example in CozyTheme example ([33ebdf1](https://github.com/cozy/cozy-ui/commit/33ebdf1))
* Refresh navigation list example ([e351857](https://github.com/cozy/cozy-ui/commit/e351857))
* Spinner works in inverted mode ([4592799](https://github.com/cozy/cozy-ui/commit/4592799))
* U-link is supported by inverted theme ([c9be8fd](https://github.com/cozy/cozy-ui/commit/c9be8fd))
* Update @cozy/codemods and remark-jscodeshift ([f1f0dbc](https://github.com/cozy/cozy-ui/commit/f1f0dbc))
* Use default color instead of adhoc "banner" background color ([56e9ad6](https://github.com/cozy/cozy-ui/commit/56e9ad6))
* Use intent color in UploadQueue ([e57568e](https://github.com/cozy/cozy-ui/commit/e57568e))
* Use Typography for BarTitle ([ef3d4b6](https://github.com/cozy/cozy-ui/commit/ef3d4b6))

# [42.2.0](https://github.com/cozy/cozy-ui/compare/v42.1.1...v42.2.0) (2020-12-23)


### Bug Fixes

* Show app icon under the key icon ([f406668](https://github.com/cozy/cozy-ui/commit/f406668))


### Features

* Add role=progressbar and aria-busy=true to Spinner ([d7aa268](https://github.com/cozy/cozy-ui/commit/d7aa268))
* Do not show close button if onClose is falsy ([e51fd74](https://github.com/cozy/cozy-ui/commit/e51fd74))
* Rename to jsx ([4e98913](https://github.com/cozy/cozy-ui/commit/4e98913))
* Use Dialog for useConfirmExit ([4852f16](https://github.com/cozy/cozy-ui/commit/4852f16))
* Use Typography for AppTitle ([66c87f0](https://github.com/cozy/cozy-ui/commit/66c87f0))

## [42.1.1](https://github.com/cozy/cozy-ui/compare/v42.1.0...v42.1.1) (2020-12-15)


### Bug Fixes

* Safe-Area for fullscreen Dialog's DialogActions ([c2d9194](https://github.com/cozy/cozy-ui/commit/c2d9194))

# [42.1.0](https://github.com/cozy/cozy-ui/compare/v42.0.1...v42.1.0) (2020-12-14)


### Features

* Add carbonCopy and Safe icons ([40f3817](https://github.com/cozy/cozy-ui/commit/40f3817))

## [42.0.1](https://github.com/cozy/cozy-ui/compare/v42.0.0...v42.0.1) (2020-12-14)


### Bug Fixes

* Pass the filename to download() ([#1685](https://github.com/cozy/cozy-ui/issues/1685)) ([bdce2e3](https://github.com/cozy/cozy-ui/commit/bdce2e3))

# [42.0.0](https://github.com/cozy/cozy-ui/compare/v41.4.1...v42.0.0) (2020-12-11)


### Bug Fixes

* Raised list uses ListItems with Dividers ([451d3e2](https://github.com/cozy/cozy-ui/commit/451d3e2))
* Text secondary color is coolGrey ([e554f67](https://github.com/cozy/cozy-ui/commit/e554f67))


### Features

* Add inset dividers on NavigationList example ([ea8b66a](https://github.com/cozy/cozy-ui/commit/ea8b66a))
* Add outline to listitem when hovered to hide list item divider ([9a67e62](https://github.com/cozy/cozy-ui/commit/9a67e62))
* Better behavior for ListItem buttons focus and hover ([66db925](https://github.com/cozy/cozy-ui/commit/66db925))
* Rework Dividers ([deab976](https://github.com/cozy/cozy-ui/commit/deab976))
* Support inset dividers in Dialogs ([34a07c5](https://github.com/cozy/cozy-ui/commit/34a07c5))
* Use typography components for Empty ([5f9ea6c](https://github.com/cozy/cozy-ui/commit/5f9ea6c))


### BREAKING CHANGES

* List, ListItem and Divider do not have the same
behavior: they do not add automatically a divider border; you have to
add a top Divider and use the divider prop on ListItems to achieve the
same behavior as before. This BC was necessary since we had put the
borders in our default theme and we could not achieve the "inset" effect
with default CSS borders, we needed an extra HTML element for that. We
are now closer to the original MUI implementation.

Summary of changes

```
- import { CardDivider } from 'cozy-ui/transpiled/react/Divider'
+ import Divider from 'cozy-ui/transpiled/react/Divider'

- import Divider from 'cozy-ui/transpiled/react/Divider'
+ import { DeprecatedDivider } from 'cozy-ui/transpiled/react/Divider'

- <List>
+ <Divider />
+ <List>

- <ListItem />
+ <ListItem divider />
```

## [41.4.1](https://github.com/cozy/cozy-ui/compare/v41.4.0...v41.4.1) (2020-12-08)


### Bug Fixes

* Missing variable in palette would cause blank page ([f2afb60](https://github.com/cozy/cozy-ui/commit/f2afb60))

# [41.4.0](https://github.com/cozy/cozy-ui/compare/v41.3.1...v41.4.0) (2020-11-30)


### Features

* BlockScroll on mobile screen ([7eddad1](https://github.com/cozy/cozy-ui/commit/7eddad1))

## [41.3.1](https://github.com/cozy/cozy-ui/compare/v41.3.0...v41.3.1) (2020-11-27)


### Bug Fixes

* Only consider opened prop if open is undefined ([15169cb](https://github.com/cozy/cozy-ui/commit/15169cb))
* Remove warning ([98cbe38](https://github.com/cozy/cozy-ui/commit/98cbe38))

# [41.3.0](https://github.com/cozy/cozy-ui/compare/v41.2.0...v41.3.0) (2020-11-27)


### Features

* Better support for secondary color ([f4910be](https://github.com/cozy/cozy-ui/commit/f4910be))

# [41.2.0](https://github.com/cozy/cozy-ui/compare/v41.1.0...v41.2.0) (2020-11-26)


### Features

* Use primaryColorDark CSS variable in MUI theme ([83d9721](https://github.com/cozy/cozy-ui/commit/83d9721))

# [41.1.0](https://github.com/cozy/cozy-ui/compare/v41.0.0...v41.1.0) (2020-11-25)


### Features

* Add ForbiddenSign illustration icon ([b29e1e6](https://github.com/cozy/cozy-ui/commit/b29e1e6))
* Add how to import illustrations directly ([2c186ad](https://github.com/cozy/cozy-ui/commit/2c186ad))

# [41.0.0](https://github.com/cozy/cozy-ui/compare/v40.10.0...v41.0.0) (2020-11-19)


### Features

* Add secondary text color ([69327d5](https://github.com/cozy/cozy-ui/commit/69327d5))
* Better alignment for Radio/Checkbox ([f93db43](https://github.com/cozy/cozy-ui/commit/f93db43))


### BREAKING CHANGES

* A margin-bottom has been removed from checkbox/radio,
you must check in your app that it has not broken anything

# [40.10.0](https://github.com/cozy/cozy-ui/compare/v40.9.1...v40.10.0) (2020-11-17)


### Features

* Add mode to screenshots ([a157bbf](https://github.com/cozy/cozy-ui/commit/a157bbf))
* Screenshot KSS styleguide ([3452e8e](https://github.com/cozy/cozy-ui/commit/3452e8e))

## [40.9.1](https://github.com/cozy/cozy-ui/compare/v40.9.0...v40.9.1) (2020-11-17)


### Bug Fixes

* Banner style and elements positions ([1a8c8c4](https://github.com/cozy/cozy-ui/commit/1a8c8c4))
* Icon isProperIcon can be use with svgr ([8593b96](https://github.com/cozy/cozy-ui/commit/8593b96))

# [40.9.0](https://github.com/cozy/cozy-ui/compare/v40.8.0...v40.9.0) (2020-11-17)


### Features

* Add cloud-sync icon ([2965a1f](https://github.com/cozy/cozy-ui/commit/2965a1f))
* Add MUI Progress ([88bf000](https://github.com/cozy/cozy-ui/commit/88bf000))
* Add ProgressionBanner ([7696267](https://github.com/cozy/cozy-ui/commit/7696267))
* Add useProgression to simulate progression ([287e5c7](https://github.com/cozy/cozy-ui/commit/287e5c7))
* Remove unstable Mui Box from Banner ([c36cd00](https://github.com/cozy/cozy-ui/commit/c36cd00))

# [40.8.0](https://github.com/cozy/cozy-ui/compare/v40.7.2...v40.8.0) (2020-11-17)


### Features

* Use CozyDialog in QuotaAlert ([#1662](https://github.com/cozy/cozy-ui/issues/1662)) ([0c94a8a](https://github.com/cozy/cozy-ui/commit/0c94a8a))

## [40.7.2](https://github.com/cozy/cozy-ui/compare/v40.7.1...v40.7.2) (2020-11-16)


### Bug Fixes

* Add changelog step ([1cfcf65](https://github.com/cozy/cozy-ui/commit/1cfcf65))
* Add npm publication with semantic-release ([0e12489](https://github.com/cozy/cozy-ui/commit/0e12489))

# [40.1.0](https://github.com/cozy/cozy-ui/compare/v40.0.0...v40.1.0) (2020-11-02)


### Features

* Ability to cache the component list, for faster debug ([5fa634e](https://github.com/cozy/cozy-ui/commit/5fa634e))
* Ability to control content via radio ([eb2f32c](https://github.com/cozy/cozy-ui/commit/eb2f32c))
* Add aria-labelledby attributes ([dde97b9](https://github.com/cozy/cozy-ui/commit/dde97b9))
* Add CozyDialogs ([c1e1081](https://github.com/cozy/cozy-ui/commit/c1e1081))
* Add Dialog back and close button, and Transition ([d3f3215](https://github.com/cozy/cozy-ui/commit/d3f3215))
* Buttons grow to take all the space on mobile ([7102e97](https://github.com/cozy/cozy-ui/commit/7102e97))
* DialogTransition is based on fullScreen ([c376d59](https://github.com/cozy/cozy-ui/commit/c376d59))
* Inverse button order when in column layout ([e8385fc](https://github.com/cozy/cozy-ui/commit/e8385fc))
* Move files to have a clearer API ([ac2c5db](https://github.com/cozy/cozy-ui/commit/ac2c5db))
* Screenshot CozyDialogs ([d6101c6](https://github.com/cozy/cozy-ui/commit/d6101c6))
* Use small / medium / large for Dialog::size ([3651ff9](https://github.com/cozy/cozy-ui/commit/3651ff9))
* Use small/medium/large for dialog size property ([433c488](https://github.com/cozy/cozy-ui/commit/433c488))

# [35.23.0](https://github.com/cozy/cozy-ui/compare/v35.22.0...v35.23.0) (2020-07-02)


### Bug Fixes

* Use toSource() on codemod ([88a8c32](https://github.com/cozy/cozy-ui/commit/88a8c32))


### Features

* Status colors go through semantic indirection ([12a69ff](https://github.com/cozy/cozy-ui/commit/12a69ff))
* Use custom css prop for active color ([d76f0e7](https://github.com/cozy/cozy-ui/commit/d76f0e7))
* Use primaryColor for nav ([950ac12](https://github.com/cozy/cozy-ui/commit/950ac12))
* Use primaryTextColor for text classes ([86cb7fa](https://github.com/cozy/cozy-ui/commit/86cb7fa))

# [35.22.0](https://github.com/cozy/cozy-ui/compare/v35.21.0...v35.22.0) (2020-05-19)


### Features

* Add cozy text icon ([dee0f62](https://github.com/cozy/cozy-ui/commit/dee0f62))
* Add sad cozy icon ([ab41bbe](https://github.com/cozy/cozy-ui/commit/ab41bbe))
* Move cozy-text and sad-cozy to icons ([aedecde](https://github.com/cozy/cozy-ui/commit/aedecde))

# [35.21.0](https://github.com/cozy/cozy-ui/compare/v35.20.0...v35.21.0) (2020-05-15)


### Bug Fixes

* Incoherence between bottom drawer display and rounder radius ([f2ddfbd](https://github.com/cozy/cozy-ui/commit/f2ddfbd))


### Features

* Download logo (can cause problems on CI to have it remote) ([286f2d1](https://github.com/cozy/cozy-ui/commit/286f2d1))
* Manage action menu icon color through CSS variables ([32ba963](https://github.com/cozy/cozy-ui/commit/32ba963))
* Rounder style for action menu ([5c80fdc](https://github.com/cozy/cozy-ui/commit/5c80fdc))
* Spacing for ActionMenuItems ([c8a094c](https://github.com/cozy/cozy-ui/commit/c8a094c))
* Tab button mobile layout ([e96ae5b](https://github.com/cozy/cozy-ui/commit/e96ae5b))
* Tabs grow to fill the space ([2af071e](https://github.com/cozy/cozy-ui/commit/2af071e))

<a name="9.13.0"></a>
# [9.13.0](https://github.com/cozy/cozy-ui/compare/v9.12.1...v9.13.0) (2018-06-18)


### Features

* **selectbox:** adds overlay for outside clicks not to trigger anything ([9c9dc0b](https://github.com/cozy/cozy-ui/commit/9c9dc0b))

<a name="9.12.1"></a>
## [9.12.1](https://github.com/cozy/cozy-ui/compare/v9.12.0...v9.12.1) (2018-06-15)


### Bug Fixes

* IntentModal Cross position ([a2763a3](https://github.com/cozy/cozy-ui/commit/a2763a3)), closes [#545](https://github.com/cozy/cozy-ui/issues/545)

<a name="9.12.0"></a>
# [9.12.0](https://github.com/cozy/cozy-ui/compare/v9.11.0...v9.12.0) (2018-06-15)


### Features

* add popup opener :sparkles: ([0a359f3](https://github.com/cozy/cozy-ui/commit/0a359f3))

<a name="9.11.0"></a>
# [9.11.0](https://github.com/cozy/cozy-ui/compare/v9.10.1...v9.11.0) (2018-06-14)


### Features

* **IntentModal:** set height to 90vh ([7de2492](https://github.com/cozy/cozy-ui/commit/7de2492))

<a name="9.10.1"></a>
## [9.10.1](https://github.com/cozy/cozy-ui/compare/v9.10.0...v9.10.1) (2018-06-14)


### Bug Fixes

* cannot have stylus expression in css calc ([60dc2f1](https://github.com/cozy/cozy-ui/commit/60dc2f1))

<a name="9.10.0"></a>
# [9.10.0](https://github.com/cozy/cozy-ui/compare/v9.9.1...v9.10.0) (2018-06-13)


### Features

* Exposed initTranslation() and allowed polyglot prop for I18n ([45f4824](https://github.com/cozy/cozy-ui/commit/45f4824))

<a name="9.9.1"></a>
## [9.9.1](https://github.com/cozy/cozy-ui/compare/v9.9.0...v9.9.1) (2018-06-13)


### Bug Fixes

* border on table divider ([d5840e2](https://github.com/cozy/cozy-ui/commit/d5840e2))

<a name="9.9.0"></a>
# [9.9.0](https://github.com/cozy/cozy-ui/compare/v9.8.1...v9.9.0) (2018-06-13)


### Bug Fixes

* modal width which can exceed the window 🌽 ([5511af1](https://github.com/cozy/cozy-ui/commit/5511af1))


### Features

* add rem() mixin ([ca262a3](https://github.com/cozy/cozy-ui/commit/ca262a3))

<a name="9.8.1"></a>
## [9.8.1](https://github.com/cozy/cozy-ui/compare/v9.8.0...v9.8.1) (2018-06-13)


### Bug Fixes

* select box bottom border on fixed element 🐛 ([5c44e29](https://github.com/cozy/cozy-ui/commit/5c44e29))

<a name="9.8.0"></a>
# [9.8.0](https://github.com/cozy/cozy-ui/compare/v9.7.0...v9.8.0) (2018-06-12)


### Features

* add title classes ([8808a72](https://github.com/cozy/cozy-ui/commit/8808a72))

<a name="9.7.0"></a>
# [9.7.0](https://github.com/cozy/cozy-ui/compare/v9.6.0...v9.7.0) (2018-06-12)


### Features

* bad icon does not throw an error ([9df4f3b](https://github.com/cozy/cozy-ui/commit/9df4f3b))

<a name="9.6.0"></a>
# [9.6.0](https://github.com/cozy/cozy-ui/compare/v9.5.0...v9.6.0) (2018-06-12)


### Features

* add disabled option style ([739087b](https://github.com/cozy/cozy-ui/commit/739087b))

<a name="9.5.0"></a>
# [9.5.0](https://github.com/cozy/cozy-ui/compare/v9.4.0...v9.5.0) (2018-06-08)


### Features

* **SelectBox:** bump react-select version ([539ca4d](https://github.com/cozy/cozy-ui/commit/539ca4d))
* **SelectBox:** export react-select components ([0f4fda7](https://github.com/cozy/cozy-ui/commit/0f4fda7))

<a name="9.4.0"></a>
# [9.4.0](https://github.com/cozy/cozy-ui/compare/v9.3.2...v9.4.0) (2018-06-08)


### Features

* add cursor utility classes ([36caee2](https://github.com/cozy/cozy-ui/commit/36caee2)), closes [#478](https://github.com/cozy/cozy-ui/issues/478)

<a name="9.3.2"></a>
## [9.3.2](https://github.com/cozy/cozy-ui/compare/v9.3.1...v9.3.2) (2018-06-08)


### Bug Fixes

* global styles are compiled only when used with CSS-modules ([71c5c81](https://github.com/cozy/cozy-ui/commit/71c5c81))

<a name="9.3.1"></a>
## [9.3.1](https://github.com/cozy/cozy-ui/compare/v9.3.0...v9.3.1) (2018-06-07)


### Bug Fixes

* **action button:** fix hover/focus colors ([e71115d](https://github.com/cozy/cozy-ui/commit/e71115d))
* **action button:** remove outline ([83eade9](https://github.com/cozy/cozy-ui/commit/83eade9))

<a name="9.3.0"></a>
# [9.3.0](https://github.com/cozy/cozy-ui/compare/v9.2.0...v9.3.0) (2018-06-06)


### Features

* added download icon ([1ef0ade](https://github.com/cozy/cozy-ui/commit/1ef0ade))

<a name="9.2.0"></a>
# [9.2.0](https://github.com/cozy/cozy-ui/compare/v9.1.2...v9.2.0) (2018-06-06)


### Features

* add global utility classes ([47fad03](https://github.com/cozy/cozy-ui/commit/47fad03))

<a name="9.1.2"></a>
## [9.1.2](https://github.com/cozy/cozy-ui/compare/v9.1.1...v9.1.2) (2018-06-06)


### Bug Fixes

* **action button:** fix focus styles ([1b01831](https://github.com/cozy/cozy-ui/commit/1b01831))

<a name="9.1.2"></a>
## [9.1.2](https://github.com/cozy/cozy-ui/compare/v9.1.1...v9.1.2) (2018-06-06)


### Bug Fixes

* **action button:** fix focus styles ([1b01831](https://github.com/cozy/cozy-ui/commit/1b01831))

<a name="9.1.1"></a>
## [9.1.1](https://github.com/cozy/cozy-ui/compare/v9.1.0...v9.1.1) (2018-06-05)


### Bug Fixes

* enables only overflow-y on small screen ([370bb69](https://github.com/cozy/cozy-ui/commit/370bb69))

# Change Log
All notable changes to this project will be documented in this file.
We use lerna-changelog to generate the changelog based on the PRs.
This project adheres to [Semantic Versioning](http://semver.org/).

## v[9.1.0] (2018-05-30)
#### :bug: Bug Fix
* [#516](https://github.com/cozy/cozy-ui/pull/516) Remove default `htmlFor` for `<Label/>`. ([@CPatchane](https://github.com/CPatchane))

#### :rocket: Enhancement
* [#509](https://github.com/cozy/cozy-ui/pull/509) Show deprecation warnings in the styleguide in production. ([@ptbrowne](https://github.com/ptbrowne))
* [#511](https://github.com/cozy/cozy-ui/pull/511) Expose all palette colors as css variables. ([@CPatchane](https://github.com/CPatchane))
* [#512](https://github.com/cozy/cozy-ui/pull/512) Configure modal through IntentOpener. ([@y-lohse](https://github.com/y-lohse))
* [#517](https://github.com/cozy/cozy-ui/pull/517) Add overlayClassName and wrapperClassName props. ([@drazik](https://github.com/drazik))

## v[9.0.1] (2018-05-22)

#### :bug: Bug Fix
* [#506](https://github.com/cozy/cozy-ui/pull/506) Fixes link styles inside forms
* [#507](https://github.com/cozy/cozy-ui/pull/507) Fixes select box indicator in firefox
* [#508](https://github.com/cozy/cozy-ui/pull/508) Hides selection bar labels on mobile

## v[9.0.0] (2018-05-16)

#### :rocket: Enhancement
* [#498](https://github.com/cozy/cozy-ui/pull/498) Set intent modal overflow to 'hidden' to preserve border radius. ([@gregorylegarec](https://github.com/gregorylegarec))
* [#413](https://github.com/cozy/cozy-ui/pull/413) feat: add Empty component. **BREAKING** ([@GoOz](https://github.com/GoOz))

#### :bug: Bug Fix
* [#505](https://github.com/cozy/cozy-ui/pull/505) fix: renamed SelectBoxWithFixedOptions file from js to jsx. ([@GoOz](https://github.com/GoOz))
* [#504](https://github.com/cozy/cozy-ui/pull/504) fix: Mono-Column layout have a padding at the end of page on mobile. ([@GoOz](https://github.com/GoOz))


## v[8.0.0] (2018-05-15)

#### :rocket: Enhancement
* [#501](https://github.com/cozy/cozy-ui/pull/501) feat: add SelectBoxWithFixedOptions. ([@ptbrowne](https://github.com/ptbrowne))
* [#488](https://github.com/cozy/cozy-ui/pull/488) feat: Button can render with a different Tag [breaking]. ([@ptbrowne](https://github.com/ptbrowne))

#### :bug: Bug Fix
* [#499](https://github.com/cozy/cozy-ui/pull/499) Remove IntentModal width CSS property. ([@gregorylegarec](https://github.com/gregorylegarec))
* [#502](https://github.com/cozy/cozy-ui/pull/502) 🐝 fix: use oneOfType. ([@ptbrowne](https://github.com/ptbrowne))
* [#497](https://github.com/cozy/cozy-ui/pull/497) fix: close button in selection bar. ([@y-lohse](https://github.com/y-lohse))

## v7.22.0 (2018-05-09)

#### :rocket: Enhancement
* [#484](https://github.com/cozy/cozy-ui/pull/484) Add <AsButton /> wrapper. ([@gregorylegarec](https://github.com/gregorylegarec))
* [#479](https://github.com/cozy/cozy-ui/pull/479) <IntentHeader /> little improvements. ([@gregorylegarec](https://github.com/gregorylegarec))

#### :bug: Bug Fix
* [#485](https://github.com/cozy/cozy-ui/pull/485) Fix examples jest and snapshots. ([@gregorylegarec](https://github.com/gregorylegarec))

## v7.21.0 (2018-05-09)

#### :rocket: Enhancement
* [#487](https://github.com/cozy/cozy-ui/pull/487) add className prop on Chip.Separator. ([@drazik](https://github.com/drazik))
* [#483](https://github.com/cozy/cozy-ui/pull/483) Pass all <Modal /> props from <IntentModal />. ([@gregorylegarec](https://github.com/gregorylegarec))
* [#477](https://github.com/cozy/cozy-ui/pull/477) ✨ feat: add chip button. ([@ptbrowne](https://github.com/ptbrowne))
* [#476](https://github.com/cozy/cozy-ui/pull/476) feat: add calendar icon. ([@drazik](https://github.com/drazik))

#### :bug: Bug Fix
* [#486](https://github.com/cozy/cozy-ui/pull/486) Fix <ButtonLink /> className prop format. ([@gregorylegarec](https://github.com/gregorylegarec))

## [7.20.0] (2018-05-02)

#### :rocket: Enhancement
* [#470](https://github.com/cozy/cozy-ui/pull/470) Adds `size` prop for <Icon /> component. ([@gregorylegarec](https://github.com/gregorylegarec))
* [#466](https://github.com/cozy/cozy-ui/pull/466) Expose I18n extend() method. ([@gregorylegarec](https://github.com/gregorylegarec))

#### :bug: Bug Fix
* [#467](https://github.com/cozy/cozy-ui/pull/467) Fix visited button overwritting styles. ([@CPatchane](https://github.com/CPatchane))

## [7.19.0] (2018-05-02)

#### :rocket: Enhancement
* [#461](https://github.com/cozy/cozy-ui/pull/461) Add mobileFullscreen on IntentModal. ([@CPatchane](https://github.com/CPatchane))
* [#459](https://github.com/cozy/cozy-ui/pull/459) ✨ feat: pass props down in MenuItem. ([@ptbrowne](https://github.com/ptbrowne))
* [#460](https://github.com/cozy/cozy-ui/pull/460) feat: spin/rotate for icons. ([@ptbrowne](https://github.com/ptbrowne))
* [#455](https://github.com/cozy/cozy-ui/pull/455) Add chip. ([@ptbrowne](https://github.com/ptbrowne))
* [#443](https://github.com/cozy/cozy-ui/pull/443) enhancement: Adds "subtle" <Button /> variant. ([@gregorylegarec](https://github.com/gregorylegarec))
* [#454](https://github.com/cozy/cozy-ui/pull/454) ✨ feat: add small-arrow icon. ([@ptbrowne](https://github.com/ptbrowne))
* [#414](https://github.com/cozy/cozy-ui/pull/414) feat: Elastic alerts + use of Button component. ([@GoOz](https://github.com/GoOz))

#### :bug: Bug Fix
* [#456](https://github.com/cozy/cozy-ui/pull/456) Fix toggle state return from onToggle + add tests. ([@CPatchane](https://github.com/CPatchane))
* [#449](https://github.com/cozy/cozy-ui/pull/449) Fix/minorfixes. ([@GoOz](https://github.com/GoOz))
* [#448](https://github.com/cozy/cozy-ui/pull/448) fix: buttonAction line height. ([@GoOz](https://github.com/GoOz))

## [7.18.0] (2018-04-23)

#### :rocket: Enhancement
* [#446](https://github.com/cozy/cozy-ui/pull/446) feat: add width and height to compact ButtonAction. ([@drazik](https://github.com/drazik))
* [#445](https://github.com/cozy/cozy-ui/pull/445) feat: add 3px margin on caption inside ListItemText. ([@drazik](https://github.com/drazik))

## [7.17.0] (2018-04-19)

#### :rocket: Enhancement
* [#442](https://github.com/cozy/cozy-ui/pull/442) feat: ListItemText forward its props. ([@ptbrowne](https://github.com/ptbrowne))
* [#441](https://github.com/cozy/cozy-ui/pull/441) feat: add ...rest prop to Bd. ([@drazik](https://github.com/drazik))

## [7.16.0] (2018-04-19)

#### :rocket: Enhancement
* [#437](https://github.com/cozy/cozy-ui/pull/437) feat: add Badge component. ([@drazik](https://github.com/drazik))

## [7.15.0] (2018-04-18)

#### :rocket: Enhancement
* [#435](https://github.com/cozy/cozy-ui/pull/435) feat: add top/bottom icon. ([@ptbrowne](https://github.com/ptbrowne))
* [#434](https://github.com/cozy/cozy-ui/pull/434) feat: remove dimensions and border on compact version of ButtonAction. ([@drazik](https://github.com/drazik))
* [#431](https://github.com/cozy/cozy-ui/pull/431) feat: add 'into' prop on IntentOpener and IntentModal. ([@drazik](https://github.com/drazik))

## [7.14.0] (2018-04-18)

### :rocket: Enhancement
* [#429](https://github.com/cozy/cozy-ui/pull/429) enhancement: Better spinner centering during intent loading. ([@gregorylegarec](https://github.com/gregorylegarec))
* [#427](https://github.com/cozy/cozy-ui/pull/427) enhancement: Add `fullwidth` props on `Input` & `Textarea` ([@GoOz](https://github.com/GoOz))
* [#427](https://github.com/cozy/cozy-ui/pull/427) enhancement: Add `fullwidth` styles for select element ([@GoOz](https://github.com/GoOz))

### :bug: Bug Fix
* [#428](https://github.com/cozy/cozy-ui/pull/428) 🚑  fix: avoid IntentModal dismissAction to be called twice. ([@gregorylegarec](https://github.com/gregorylegarec))
* [#427](https://github.com/cozy/cozy-ui/pull/427) fix: Ensure font-family on form elements is respected ([@GoOz](https://github.com/GoOz))
* [#427](https://github.com/cozy/cozy-ui/pull/427) fix: Increase modal fullscreen's selector specificity ([@GoOz](https://github.com/GoOz))

## [7.13.0] (2018-04-17)

### :rocket: Enhancement
* [#426](https://github.com/cozy/cozy-ui/pull/426) Added support for className prop to ActionMenu. ([@goldoraf](https://github.com/goldoraf))

### :bug: Bug Fix
* [#425](https://github.com/cozy/cozy-ui/pull/425) fix: fix IntentModal API and add Jest tests ✨. ([@gregorylegarec](https://github.com/gregorylegarec))

## [7.12.0] - 2018-04-13

### Changed
- `<IntentIframe />` has been extracted from `<IntentModal />` and it is now a standalone component.
- `<Bd />` now hides its overflowing content

### Added
- `disabled` attribute for `<ButtonLink />` component


## [7.11.0] - 2018-04-11
### Fixed
- `:hover` on Buttons are now easily overwritable

### Added
- Input `<Checkbox />` component
- Input `<Radio />` component
- `<ButtonLink />` can be disabled
- `<listItemText />` component
- `<Text />` component
- `<Caption />` component
- `<MidEllipsis />` component

### Changed
- Modal's ModalFooter can have any children now
- `<Alerter />` reworked with a customizable duration


## [7.10.0] - 2018-03-27
### Added
- Added an Alerter component
- Added a Checkbox component


## [7.9.2] - 2018-03-26
### Added
- Utility classes to cancel margin/padding `.u-m-0`, `.u-p-0`, etc

### Fixed
- Scrolling modal on Safari


## [7.9.1] - 2018-03-21
### Added
- focus style on SelectBox's options
- Cozy style for SelectBox


## [7.9.0] - 2018-03-21
### Added
- Different sizes for inputs and textareas

### Fixed
`IntentHeader` styles are not imported with the file extension
- ModalHeaders that are not simple text won't be wrapped in a `<h2>` element and won't inherit styles from it


## [7.8.0] - 2018-03-20
### Added
- Styles for `select` elements
- The `SelectBox` component, based on `react-select`


## [7.7.3] - 2018-03-15
### Added
- New `<IntentModal />` component

### Changed
- `<IntentOpener />` internally uses now the new `<IntentModal />` component

## [7.7.2] - 2018-03-13
### Fixed
- `<Button />` without icons don't break anymore


## [7.7.1] - 2018-03-13
### Changed
- `<Button />`'s `Icon` props can get a string or `<Icon />

### Added
- Added Panel layout for Modals
- Added `style` props to `ModalBrandedHeader` to pass some style
- Added `type` props to `<Button />`

### Fixed
- Support deprecated `ModalTitle` & `ModalButtons`
- Use of children in `<Button />`


## [7.7.0] - 2018-03-02
### Changed
- Refactoring `Modal` component using Elastic layout

### Fixed
- `Button` now use flexbox to deal with vertical centering of its content

### Added
- Elastic layout with fixed header and/or footer and scrollable content
- Modal has now a compressed and a wide rendering with `spacing` props with two available values : `small` & `large`
- Modal has a new Branded header component `ModalBrandedHeader` which allows a background and a logo with `bg` & `logo` props

### Deprecated
- `ModalTitle` is replaced by `ModalHeader`
- `ModalButtons` is replaced by `ModalFooter`


## [7.6.0] - 2018-02-27
### Changed
- Renamed breakpoints sizes variable with prefix to avoid potential conflicts

### Added
- Added disabled prop to Toggle
- Added utility classes for colors
- `<Button />` & `<ButtonLink />` take `label` and/or `icon` instead of `basic children` but `children` is still available to build complex buttons A [codeshift](http://astexplorer.net/#/gist/cc94c9c4cc446d1958729300581bb250/6bf37610671a21717f53623367e0f755f506301b) is available for easier transition.


## [7.5.0] - 2018-02-23
### Changed
- Nav in Sidebar layout changes, <Icon /> are now mandatory in Nav's items
- `<Avatar />` waits for any string now and doesn't process initials anymore

### Fixed
- Modals keep their set size unless there's no room for it anymore
- `<ButtonLink />` on normal size is now vertically centered
- Added `.styl` extensions to import to avoid resolving issues
- `<Icon />`'s SVGs where sometimes blurry on Firefox

### Added
- Forwarding props to `<Icon />`, `<Input />` & `<Textarea />`
- `<Hero />` component


## [7.4.2] - 2018-02-13
### Fixed
- Enforce Button's modifier classes specificity to avoid conflicts when classes are not in order


## [7.4.1] - 2018-02-12
### Fixed
- Cross button in Intent Modal was misplaced
- Empty View on tablet don't block click events anymore


## [7.4.0] - 2018-02-8
### Changed
- ButtonLink's target attribute becomes a string instead of a boolean
- Increase alert size

### Fixed
- Better behaviour for hover effects on some element on mobile
- Made selection bar's close button narrow
- Modal cross button's size
- Vertical alignment of initials

### Added
- Add Modal size option
- Empty avatar view


## [7.3.0] - 2018-02-5
### Added
- Divider style for table
- Sizes for buttons (tiny, small, large)
- Extensions for buttons (full width or narrow)
- `<Avatar />` component
- `<IntentHeader />` component for intent modal

### Changed
- Button now should have their content wrapped inside a span

### Fixed
- Really fixed buttons on Safari 10


## [7.2.1] - 2018-01-30
### Fixed
- Wide buttons on Safari 10 have now their content centered


## [7.2.0] - 2018-01-29
### Fixed
- Nav icon on mobile

### Added
- Add new breakpoint for tablet
- Add Portal for Modal so you can decide where in the DOM it pops

### Deprecated
- Breakpoint functions `no-mobile()` & `no-desktop()` renamed respectively `gt-mobile()` & `lt-desktop()` for more clarity


## [7.1.0] - 2018-01-17
### Changed
- Nav now requires SVG icons, not in CSS background anymore, using `<Icon />` for instance
- `<Nav />` component generate NavLink with a function in order to works better with react-Router's `Link`
- Table styles are not global anmore, you must specifically `@extend` every bit you need, like `$table-head`, `$table-cell`, `$table-row`, etc
- Removed all `em()`

### Added
- One column layout


## [7.0.3] - 2018-01-10
### Changed
- removed duplication of code for `$visuallyhidden` by using a mixin instead

### Added
- `<Textarea />` React component [see](https://cozy.github.io/cozy-ui/react/#textarea)
- `<Field />` React component [see](https://cozy.github.io/cozy-ui/react/#field)

### Fixed
- Alerts rendering on desktop
- React Styleguide was broken


## [7.0.2] - 2018-01-09
### Fixed
- wrong colors by default for modal's buttons
- Fix selectionbar's buttons label on desktop

### Added
- `<Label />` React component [see](https://cozy.github.io/cozy-ui/react/#label)
- `<Input />` React component [see](https://cozy.github.io/cozy-ui/react/#input)


## [7.0.1] - 2018-01-08
### Fixed
- Modal and its buttons were broken
- Selection bar's icons on mobile were hidden


## [7.0.0] - 2018-01-04
### Changed
- Default theme for `<Button />` is now `regular`
- Made default size of <Icon /> 16px instead of 1em to avoid font-size inheritance

### Added
- Added `<ButtonLink />` component, same as `<Button />` but with a `<a>` tag
- Added `disabled` parameter for  `<Button />`
- Icon's color is by default the currentColor of its button parent.

### Removed
- Some icons `fill` attribute
- Removed classes for button w/ icons, to be replaced by the use of SVG instead


## [6.0.3] - 2017-12-15
### Fixed
- Sidebar doesn't scroll with content anymore on desktop


## [6.0.2] - 2017-12-14
### Fixed
- Removed old layout styles that broke Mobile app
- Tablet view (768px to 1024px)


## [6.0.1] - 2017-12-14
### Fixed
- Fixed new layout mobile on Safari iOS 9-10

### Added
- Ability to pass a class to ModalCross


## [6.0.0] - 2017-12-13
### Changed
- Change global layout on mobile to enable browsers' minimal UI

### Fixed
- Nav classes were broken in dist version

### Added
- `<Nav />` component
- `<Sidebar />` component
- `<Menu />` component
- `<IntentOpener />` component
- `<Media />`object


## [5.0.2] - 2017-12-07
### Added
- Add a minified version of cozy-ui styles in `dist/cozy-ui.min.css` (built before publishing on npm)

### Changed
- Modal : `withCross` is now `closable`. Deprecation warning. [#237](https://github.com/cozy/cozy-ui/pull/237)
- Modal : `dismissAction` property has been added and will be called when clicking outside or on the cross. For now, secondaryAction will be copied into it if it is undefined. Deprecation warning. [#237](https://github.com/cozy/cozy-ui/pull/237)
- Colors variable:
    ```
    pale-grey -> paleGrey
    cool-grey -> coolGrey
    slate-grey -> slateGrey
    charcoal-grey -> charcoalGrey
    dodger-blue -> dodgerBlue
    science-blue -> scienceBlue
    puerto-rico -> puertoRico
    texas-rose -> texasRose
    your-pink -> yourPink
    ```


## [5.0.1] - 2017-12-06
## Fixed
- Fix normalize node_modules path


## [5.0.0] - 2017-12-06
## Added
- Standalone compiled CSS
  If you do not want to use the library as Stylus placeholders and prefer using one compiled CSS with every available classes, yoou can do so.
  In your terminal, type the following command (with `yarn` or `npm`):
  ```
  $ yarn build:css:app
  ```
  It will compile the CSS file `app.css` into `build/styleguide/` folder.

## Removed
- Removed deprecated classes `.coz-sidebar`, `coz-error`, `coz-error--warning`, `coz-hidden`, `coz-desktop`, `coz-mobile`
- Removed exported classes like `.o-sidebar` & `.c-nav`
  You can't `@extend` classes as it doesn't exist anymore but you can `@extend` the equivalent placeholder. Just replace by the occurence you need and you're done! :)
  `.o-sidebar` => `$sidebar`
  `.c-nav` => `$nav`
  `.c-nav-item` => `$nav-item`
  `.c-nav-link` => `$nav-link`
- Removed global classes like buttons & utilities
  You have to declare explicitly button & utility classes.
  If you use React, the best way is to use the `<Button />` [component](https://github.com/cozy/cozy-ui/tree/master/react/Button).
  If not, you should manually `@extend` those components like any other CSS components with their `$placeholder`.
  ```
  .c-btn {
    @extend $button
  }
  .u-visuallyhidden {
    @extend $visuallyhidden
  }
  ```


## [4.1.1] - 2017-12-05
## Changed
- Color palette is now a json to ease JS use.
- Lower margins for modals header & footer

## Added
- Default theme for the `<button />` component


## [4.1.0] - 2017-11-28
### Changed
- Use babel-preset-cozy-app in .babelrc
- Modal improvements:
  - Cannot scroll while Modal is opened
  - Modal content is scrollable
  - Buttons are correctly displayed on mobile
  - Exports <ModalDescription/> and <ModalTitle /> for complex usages
  - Modal title can be a node

### Fixed
- Default Spinner color prevented other colors to be used
- Visited links color

### Added
- Add direction parameter to breakpoints
- Add shortcut to access breakpoints helper
- Add back & forward icons
- Add `<ActionMenu />` component: see on [style guide](https://cozy.github.io/cozy-ui/react/#actionmenu)
- Add `<Overlay />` component: see on [style guide](https://cozy.github.io/cozy-ui/react/#overlay)

### Removed
- Remove i18n duplicate file


## [4.0.5] - 2017-11-16
### Fixed
- 🎨 Fixing default html element's background color

### Added
- ✨ Add input[type=url] as default themed input


## [4.0.4] - 2017-11-2
### Fixed
-  🚑 Breakpoint helper should works now 😅


## [4.0.3] - 2017-10-25
### Fixed
-  🚑 Alert's padding are now back in the game, sorry, some commas were well hidden.


## [4.0.2] - 2017-10-19
### Fixed
-  🚒 Reinstated .c-link--upload & .c-link--delete that were actually needed, sorry 😅

### Added
-  🚑 Explicitely import palette.styl & mixins.styl in button.styl so you can use button on its own


## [4.0.1] - 2017-10-17
### Changed
- 📝 Changed some `em` to `rem`
- 🐎 Use `@require` instead of `@import`
- 🔥 React components don't use global classes anymore
- 📝 Renamed `.u-hidden`class to `.u-visuallyhidden`

### Fixed
- 🚑 Fixed active links in main nav
- 🚑 Items on mobile nav weren't using the available space smartly
- 🚑 Fixed some buttons to make sure it goes well in any situation
- 🍎 Fixed the annoying double tap on nav links on iPad

### Added
- 📚 Added Icon, Button & Spinner react component to the React Styleguide


## [4.0.0] - 2017-09-26
### Changed
- Clean up comments & typos ✨

### Fixed
- Fix modal position on desktop 🔧
- Fixed Nav items position on mobile 👷

### Added
- Added buttons global classes (without CSS Modules) 🎉
- Ensure retro-compatibility for previous global classes with CSS Modules ⚙
- Added Nav component 🗞

### Removed
- Removed mixins `padded` and `spaced` ♻
- Removed Lato font from UI & moved to the stack (you'll need to add a `<link>` tag to your app `<link rel="stylesheet" type="text/css" href="//{{.Domain}}/assets/fonts/fonts.css">` 🔀


## [4.0.0-beta] - 2017-09-20
### Fixed
- Toggle component has cursor pointer now 👆
- Font Lota for IE11 by adding woff format 🐒
- btn--extra buttons' hover state 🐦

### Changed
- 🔥 Files architecture completely changed to [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) methodology

### Added
- CSS Styleguide with KSS 🎉
- Breakpoints mixins + HOC 👪
- Added preserveColor property to Icon component ✨
- Spacers utility classes for quick & easy padding/margin 😍

### Removed
- Deprecated greys ☠


## [3.0.0-beta46] - 2017-09-15
### Changed
- Mobile nav has bigger icons
- Modal on Mobile are now vertically centered

### Added
- Woff font for IE11 support
- `.coz-btn--download` class
- use styleguidist to generate react styleguide

### Fixed
- handle new svg-sprite-loader format
- Spinner in buttons was broken


## [3.0.0-beta45] - 2017-09-08
### Changed
- Default button `.coz-btn` now has white text color and blue background on `:hover`


## [3.0.0-beta44] - 2017-09-01
### Added
- Ability to import components directly from `cozy-ui/react`


## [3.0.0-beta43] - 2017-08-30
### Fixed
- layout broken on scroll (iOS)


## [3.0.0-beta42] - 2017-08-24
### Removed
- Modal doesn't have `overflow: hidden` property by default anymore

### Added
- Modal component's new boolean option `overflowHidden`


## [3.0.0-beta41] - 2017-08-21
### Fixed
- Made normalize.css import absolute


## [3.0.0-beta40] - 2017-08-07
### Added
- Styles for textarea element (same styles than other inputs)
- `$button--send` class for button with paperplan icon


## [3.0.0-beta39] - 2017-06-27
### Changed
- Tabs units from `px` to `rem`

### Fixed
- Alert position on mobile
- Modal responsiveness

### Removed
- Content component in Modal Component


## [3.0.0-beta38] - 2017-06-23
### Fixed
- wrong file name when importing i18n in Spinner component prevented apps from buidling


## [3.0.0-beta37] - 2017-06-22
### Changed
- Position of the modal is now relative to the viewport's height
- Modal has now a min-width so it's not too narrow with tiny content
- Refactored form controls such as submit buttons

### Fixed
- Closing cross size in modals
- Select element has now its arrow when on focus

### Added
- `<Spinner />` component with several options like color, size, Box-model…
- `<Icon />` component to use cozy-ui icons easily à la [FontAwesome](http://fontawesome.io/). `Icon`s can be styled with CSS.

```jsx
import Icon from 'cozy-ui/react/Icon'
<Icon icon='warn' width='2rem' height='2rem' color='red' />
```


## [3.0.0-beta36] - 2017-06-13
### Changed
- Stick the modal on top juuuuust a lil' bit hover the cozy-bar
- Aligned modal title with the closing cross button
- Refactored how the modal handle the flow of its content, for the padding mostly
- Disabled buttons have now a `not-allowed` cursor when hovered
- Disabled buttons in selection bar have now `opacity: .5` even on desktop
- Update cross icon
- Greys vars names are now consistent with the other color vars

### Fixed
- Selection bar classes were not consistent
- Height of items in selection bar on mobile were way bigger than it should

### Removed
- removed inputs' grey `background-color`

### Deprecated
- Formers greys from previous identity are deprecated but with a fallback to the nearest grey of the new identity


## [3.0.0-beta35] - 2017-06-09
### Fixed
- Update album icon to fix selectionbar.styl


## [3.0.0-beta34] - 2017-06-09
### Fixed
- Add .jsx extension on i18n import


## [3.0.0-beta33] - 2017-06-09
### Fixed
- Add .jsx extension on i18n component

### Added
- Add SelectionBar component


## [3.0.0-beta32] - 2017-06-08
### Fixed
- The previously added usage-tracking helper had the wrong file format for usage in our project configurations


## [3.0.0-beta31] - 2017-06-08
### Added
- Added usage tracking helpers


## [3.0.0-beta30] - 2017-06-02
### Added
- Add special button App download for both desktop and mobile


## [3.0.0-beta29] - 2017-05-30
### Changed
- Modal now has no padding by default. Padding are added in children or using `ModalContent` or `ModalSection` components.

### Fixed
- Remove hover style on `[disabled]` and `[aria-disabled=true]` attribute for buttons: `$button--danger`, `$button--danger-outline` and `$button--highlight`

### Added
- Add a new icon variable: `$icon-spinner-red`
- Add white spinner on buttons `$button--danger` and `$button--highlight` with `[aria-busy=true]` attribute
- Add red spinner on `$button--danger-outline` with `[aria-busy=true]` attribute

### Deprecated
- The use of `Content` component in modals is deprecated and replaced by `ModalContent`.


## [3.0.0-beta28] - 2017-05-29
### Fixed
- Remove deprecated message when we used Toggle
- Modal sticks to viewport and does not overflow anymore


## [3.0.0-beta27] - 2017-05-23
### Added
- Special button for client downloading

### Removed
- Modal title is no more required

## [3.0.0-beta26] - 2017-05-19
### Changed
- The Toggle component's `name` prop has been renamed to `id` and the appropriated depreciation warnings have been added.

### Added
- Added spinner on react Button component with parameter `busy`.
- Handle closing modal by outside click and escape key


## [3.0.0-beta25] - 2017-05-16
### Changed
- Modal now adapts from content width

### Added
- Sharing button
- Delete button
- Button component
- ModalContent component


## [3.0.0-beta24] - 2017-05-11
### Changed
- Display rename button on responsive page


## [3.0.0-beta23] - 2017-05-11
### Added
- Better handling of long nav items
- Moved layout code from cozy-bar's (should be transparent)


## [3.0.0-beta22] - 2017-05-03
### Changed
- Change more-button's background-color from white to transparent


## [3.0.0-beta21] - 2017-05-02
### Added
- Added a Tabs component
- Added a Toggle component


## [3.0.0-beta20] - 2017-04-21
### Changed
- Center icons in responsive view
- SelectionBar overhead than above for responsive

### Added
- Add a "openWith" icon
- Add a default value to Modal secondaryType

### Removed
- Remove unnecessary deprecated message on Modal component


## [3.0.0-beta19] - 2017-03-24
### Changed
V3 branch merge into master as it is the codebase we're all working on now.
Nothing else has changed.


## [3.0.0-beta18] - 2017-03-22
### Changed
- form classes changed for BEM consistency:
  - `.coz-desc` becomes `.coz-form-desc`
  - `.coz-label` becomes `.coz-form-label`
  - `.coz-error-label` becomes `.coz-form-label--error`
  - `.coz-errors` becomes `.coz-form-errors`

### Added
- New utility classes `.coz-error` and variant `.coz-error--warning` to display error text, without or with a warning sign
- Added table default style


## [3.0.0-beta17] - 2017-03-17
### Fixed
- Overlay should take all the space in the viewport now
- Put back children nodes removed by spread operator usage on props (modal component)


## [3.0.0-beta16] - 2017-03-17 [YANKED]
### Changed
- Change icons placeholders dimensions with rem instead of em so it doesn't grow with the font-size of an element
- Separate extra and extra--white buttons
- Refactoring modal component

### Fixed
- Nav height on mobile is now 48px which is what it was supposed to be in the first place.
- selectionbar's height wasn't right according to the mockups
- Fix sidebar width on Chrome when resizing
- Nav height on mobile was bigger than it was supposed to

### Added
- Empty component style
- add position relative on contentinfo so we can position absolutely the loading spinner
- Add disabled button style in selection bar

### Removed
- remove agressive `!important` on all `[aria-hidden=true]` elements

### Deprecated
- Modal props `cancelType` & `validateType`. See refactoring


## [3.0.0-beta15] - 2017-03-08
### Changed
- Sticky layout management (flexbox-only)

### Fixed
- Lots of minor UI fixes

### Added
- Fixed table header on scroll


## [3.0.0-beta14] - 2017-03-07
### Fixed
- Avoid hover effect on disabled buttons
- Improve sidebar height on mobile, to be equal to selection bottom offset

### Added
- Class .coz-link--upload to use for an upload button in a menu


## [3.0.0-beta13] - 2017-03-03
### Changed
- Rendering on Checkboxes
- Z-indexes all over
- Updated selectionbar component's style

### Fixed
- Alerter height on mobile
- Modal component's mayhem after refactoring
- Layout's height fixed after adding Cozy-bar
- Various micro rendering fix

### Added
- Utils classes .coz-mobile & .coz-desktop to show/hide elements
on desktop or mobile view


## [3.0.0-beta12] - 2017-02-27
### Changed
- Enhance modal header margins
- Modal : do not display the button panel if there is no button
- Modal horizontal padding is now set on children
- Renamed alert buttons
- Spinners are not centered by default anymore
- Moved forms.styl from ui-app folder to ui-components for more consistency
- depthlimit increase to 4 because Stylint treats its depth oddly

### Fixed
- Fix typo blocking modal cancel action

### Added
- Allow modal with no properies except title + allow children
- New placeholders for buttons : $button--secondary, $button--danger, $button--danger-outline, $button--highlight
- z-index manager in ui-base/z-index.styl

### Removed
- Removed buttons classes .primary, .secondary, .danger, .danger-outline, .hightlight
- Removed placeholders $icon-spinner-small-blue, build your own options instead
- Removed Drawer layout that wasn't functional anyway
- Removed dialog, background, foreground, dropdown files


## [3.0.0-beta11] - 2017-02-21
### Changed
- Extracted the 'more' menu styling

### Added
- Add more button with dots only
- Adds support for formatting i18n function
- Added SelectionBar styling


## [3.0.0-beta10] - 2017-02-14
### Added
- Added mobile styles for alerts

### Changed
- Make the alerter slide under the nav menu on mobile
- Reduced alerter delay
- Refactoring on Modal

### Fixed
- import on react components


## [3.0.0-beta9] - 2017-02-09
### Changed
- Updated Modal JSX component


## [3.0.0-beta8] - 2017-02-09
### Added
- test NPM's autopublishing


## [3.0.0-beta7] - 2017-02-08
### Added
- Added a coz-form-group selector for group of elements constituting a single field
- Made autoclose delay configurable
- Added modal close button cursor
- Added optional alerter close callback

### Changed
- Fixed withState react import
- Bumped default notification delay
- Adjusted modal's width for mobile


## [3.0.0-beta6] - 2017-02-07
### Added
- Added alerter component!
- Added css loaders
- Added embedded cross icon
- Added Modals
- Added Linter
- Added babel config for exported components

### Changed
- Moved alert and modal styles to components
- Moved icons

### Fixed
- Fix checkbox on every browser or so except Firefox that did its…

### Removed
- Removed input css outline on focus


## [3.0.0-beta5] - 2017-02-01
- Everything we did before adopting CHANGELOG…

[9.1.0]: https://github.com/cozy/cozy-ui/compare/v9.0.1...v9.1.0
[9.0.1]: https://github.com/cozy/cozy-ui/compare/v9.0.0...v9.0.1
[9.0.0]: https://github.com/cozy/cozy-ui/compare/v8.0.0...v9.0.0
[8.0.0]: https://github.com/cozy/cozy-ui/compare/v7.22.0...v8.0.0
[7.22.0]: https://github.com/cozy/cozy-ui/compare/v7.21.0...v7.22.0
[7.21.0]: https://github.com/cozy/cozy-ui/compare/v7.20.0...v7.21.0
[7.20.0]: https://github.com/cozy/cozy-ui/compare/v7.19.0...v7.20.0
[7.19.0]: https://github.com/cozy/cozy-ui/compare/v7.18.0...v7.19.0
[7.18.0]: https://github.com/cozy/cozy-ui/compare/v7.17.0...v7.18.0
[7.17.0]: https://github.com/cozy/cozy-ui/compare/v7.16.0...v7.17.0
[7.16.0]: https://github.com/cozy/cozy-ui/compare/v7.15.0...v7.16.0
[7.15.0]: https://github.com/cozy/cozy-ui/compare/v7.14.0...v7.15.0
[7.14.0]: https://github.com/cozy/cozy-ui/compare/v7.13.0...v7.14.0
[7.13.0]: https://github.com/cozy/cozy-ui/compare/v7.12.0...v7.13.0
[7.12.0]: https://github.com/cozy/cozy-ui/compare/v7.11.0...v7.12.0
[7.11.0]: https://github.com/cozy/cozy-ui/compare/v7.10.0...v7.11.0
[7.10.0]: https://github.com/cozy/cozy-ui/compare/v7.9.2...v7.10.0
[7.9.2]: https://github.com/cozy/cozy-ui/compare/v7.9.1...v7.9.2
[7.9.1]: https://github.com/cozy/cozy-ui/compare/v7.9.0...v7.9.1
[7.9.0]: https://github.com/cozy/cozy-ui/compare/v7.8.0...v7.9.0
[7.8.0]: https://github.com/cozy/cozy-ui/compare/v7.7.3...v7.8.0
[7.7.3]: https://github.com/cozy/cozy-ui/compare/v7.7.2...v7.7.3
[7.7.2]: https://github.com/cozy/cozy-ui/compare/v7.7.1...v7.7.2
[7.7.1]: https://github.com/cozy/cozy-ui/compare/v7.7.0...v7.7.1
[7.7.0]: https://github.com/cozy/cozy-ui/compare/v7.6.0...v7.7.0
[7.6.0]: https://github.com/cozy/cozy-ui/compare/v7.5.0...v7.6.0
[7.5.0]: https://github.com/cozy/cozy-ui/compare/v7.4.2...v7.5.0
[7.4.2]: https://github.com/cozy/cozy-ui/compare/v7.4.1...v7.4.2
[7.4.1]: https://github.com/cozy/cozy-ui/compare/v7.4.0...v7.4.1
[7.4.0]: https://github.com/cozy/cozy-ui/compare/v7.3.0...v7.4.0
[7.3.0]: https://github.com/cozy/cozy-ui/compare/v7.2.1...v7.3.0
[7.2.1]: https://github.com/cozy/cozy-ui/compare/v7.2.0...v7.2.1
[7.2.0]: https://github.com/cozy/cozy-ui/compare/v7.1.0...v7.2.0
[7.1.0]: https://github.com/cozy/cozy-ui/compare/v7.0.3...v7.1.0
[7.0.3]: https://github.com/cozy/cozy-ui/compare/v7.0.2...v7.0.3
[7.0.2]: https://github.com/cozy/cozy-ui/compare/v7.0.1...v7.0.2
[7.0.1]: https://github.com/cozy/cozy-ui/compare/v7.0.0...v7.0.1
[7.0.0]: https://github.com/cozy/cozy-ui/compare/v6.0.3...v7.0.0
[6.0.3]: https://github.com/cozy/cozy-ui/compare/v6.0.2...v6.0.3
[6.0.2]: https://github.com/cozy/cozy-ui/compare/v6.0.1...v6.0.2
[6.0.1]: https://github.com/cozy/cozy-ui/compare/v6.0.0...v6.0.1
[6.0.0]: https://github.com/cozy/cozy-ui/compare/v5.0.2...v6.0.0
[5.0.2]: https://github.com/cozy/cozy-ui/compare/v5.0.1...v5.0.2
[5.0.1]: https://github.com/cozy/cozy-ui/compare/v5.0.0...v5.0.1
[5.0.0]: https://github.com/cozy/cozy-ui/compare/v4.1.1...v5.0.0
[4.1.1]: https://github.com/cozy/cozy-ui/compare/v4.1.0...v4.1.1
[4.1.0]: https://github.com/cozy/cozy-ui/compare/v4.0.5...v4.1.0
[4.0.5]: https://github.com/cozy/cozy-ui/compare/v4.0.4...v4.0.5
[4.0.4]: https://github.com/cozy/cozy-ui/compare/v4.0.3...v4.0.4
[4.0.3]: https://github.com/cozy/cozy-ui/compare/v4.0.2...v4.0.3
[4.0.2]: https://github.com/cozy/cozy-ui/compare/v4.0.1...v4.0.2
[4.0.1]: https://github.com/cozy/cozy-ui/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/cozy/cozy-ui/compare/v4.0.0-beta...v4.0.0
[4.0.0-beta]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta46...v4.0.0-beta
[3.0.0-beta46]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta45...v3.0.0-beta46
[3.0.0-beta45]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta44...v3.0.0-beta45
[3.0.0-beta44]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta43...v3.0.0-beta44
[3.0.0-beta43]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta42...v3.0.0-beta43
[3.0.0-beta42]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta41...v3.0.0-beta42
[3.0.0-beta41]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta40...v3.0.0-beta41
[3.0.0-beta40]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta39...v3.0.0-beta40
[3.0.0-beta39]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta38...v3.0.0-beta39
[3.0.0-beta38]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta37...v3.0.0-beta38
[3.0.0-beta37]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta36...v3.0.0-beta37
[3.0.0-beta36]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta35...v3.0.0-beta36
[3.0.0-beta35]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta34...v3.0.0-beta35
[3.0.0-beta34]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta33...v3.0.0-beta34
[3.0.0-beta33]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta32...v3.0.0-beta33
[3.0.0-beta32]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta31...v3.0.0-beta32
[3.0.0-beta31]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta30...v3.0.0-beta31
[3.0.0-beta30]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta29...v3.0.0-beta30
[3.0.0-beta29]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta28...v3.0.0-beta29
[3.0.0-beta28]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta27...v3.0.0-beta28
[3.0.0-beta27]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta26...v3.0.0-beta27
[3.0.0-beta26]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta25...v3.0.0-beta26
[3.0.0-beta25]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta24...v3.0.0-beta25
[3.0.0-beta24]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta23...v3.0.0-beta24
[3.0.0-beta23]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta22...v3.0.0-beta23
[3.0.0-beta22]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta21...v3.0.0-beta22
[3.0.0-beta21]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta20...v3.0.0-beta21
[3.0.0-beta20]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta19...v3.0.0-beta20
[3.0.0-beta19]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta18...3.0.0-beta19
[3.0.0-beta18]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta17...3.0.0-beta18
[3.0.0-beta17]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta16...3.0.0-beta17
[3.0.0-beta16]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta15...3.0.0-beta16
[3.0.0-beta15]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta14...3.0.0-beta15
[3.0.0-beta14]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta13...3.0.0-beta14
[3.0.0-beta13]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta12...3.0.0-beta13
[3.0.0-beta12]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta11...3.0.0-beta12
[3.0.0-beta11]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta10...3.0.0-beta11
[3.0.0-beta10]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta9...3.0.0-beta10
[3.0.0-beta9]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta8...3.0.0-beta9
[3.0.0-beta8]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta7...3.0.0-beta8
[3.0.0-beta7]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta6...3.0.0-beta7
[3.0.0-beta6]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta5...3.0.0-beta6
[3.0.0-beta5]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta4...3.0.0-beta5
