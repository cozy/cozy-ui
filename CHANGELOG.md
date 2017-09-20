# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Changed
- none yet

### Fixed
- none yet

### Added
- none yet

### Removed
- none yet

### Deprecated
- none yet

### Security
- none yet


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
- Depreciated greys ☠


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
- Formers greys from previous identity are depreciated but with a fallback to the nearest grey of the new identity


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


[Unreleased]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta46...HEAD
[3.0.0-beta45]: https://github.com/cozy/cozy-ui/compare/v3.0.0-beta45...v3.0.0-beta46
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
