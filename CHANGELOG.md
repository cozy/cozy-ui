# [73.2.0](https://github.com/cozy/cozy-ui/compare/v73.1.0...v73.2.0) (2022-08-26)


### Features

* Add genNavLinkForV6() in Nav component ([b5df157](https://github.com/cozy/cozy-ui/commit/b5df157))

# [73.1.0](https://github.com/cozy/cozy-ui/compare/v73.0.1...v73.1.0) (2022-08-26)


### Bug Fixes

* **Typography:** Modify subtitle1 and subtitle2 properties ([39f4ba4](https://github.com/cozy/cozy-ui/commit/39f4ba4))


### Features

* **palette:** Add background.contrast value and --contrastBackgroundColor ([a09c7fc](https://github.com/cozy/cozy-ui/commit/a09c7fc))
* **Tabs/Tab:** Add react/Tabs and react/Tab component ([123e3e1](https://github.com/cozy/cozy-ui/commit/123e3e1))

## [73.0.1](https://github.com/cozy/cozy-ui/compare/v73.0.0...v73.0.1) (2022-08-25)


### Bug Fixes

* Remove useless exports already processed ([1c7d283](https://github.com/cozy/cozy-ui/commit/1c7d283))

# [73.0.0](https://github.com/cozy/cozy-ui/compare/v72.1.0...v73.0.0) (2022-08-25)


### Features

* Upgrade cozy-client to 33.0.0 ([e449adc](https://github.com/cozy/cozy-ui/commit/e449adc)), closes [cozy/cozy-client#1227](https://github.com/cozy/cozy-client/issues/1227)


### BREAKING CHANGES

* You need to update `cozy-client` to `>33.0.0`.

# [72.1.0](https://github.com/cozy/cozy-ui/compare/v72.0.0...v72.1.0) (2022-08-25)


### Features

* Let the user able to select content ([7efff3d](https://github.com/cozy/cozy-ui/commit/7efff3d))

# [72.0.0](https://github.com/cozy/cozy-ui/compare/v71.0.0...v72.0.0) (2022-08-24)


### Bug Fixes

* Do not display Viewer's Download button on iOS Flagship app ([db2303d](https://github.com/cozy/cozy-ui/commit/db2303d))


### Code Refactoring

* Handle footer items' gap in `FooterContent` container ([22776e2](https://github.com/cozy/cozy-ui/commit/22776e2))


### BREAKING CHANGES

* Items inside of `FooterActionButtons` should not have
specified margins anymore as those are now handled by its container.
Remove them to avoid duplicate margins

# [71.0.0](https://github.com/cozy/cozy-ui/compare/v70.7.0...v71.0.0) (2022-08-24)


### Features

* Exports all MUI styles functions ([8e9228c](https://github.com/cozy/cozy-ui/commit/8e9228c))


### BREAKING CHANGES

* Imports of `makeStyles`, `useTheme` and `withStyles`
are no longer done like this
`import ... from cozy-ui/transpiled/react/helpers/[makeStyles|useTheme|withStyles]`
but instead
`import { ... } from cozy-ui/transpiled/react/styles`

You can use a codemods `transform-mui-styles-imports.js`
to automatically handle this breaking change.
[See the codemods documentation](https://github.com/cozy/cozy-libs/tree/master/packages/cozy-codemods).
Using linter js auto-correction can be a good idea after that.
Here a common example (don't forget to change `src` value):
```
jscodeshift -t $(yarn global dir)/node_modules/@cozy/codemods/src/transforms/transform-mui-styles-imports.js src --parser babel --extensions js,jsx && yarn lint:js --fix
```

# [70.7.0](https://github.com/cozy/cozy-ui/compare/v70.6.2...v70.7.0) (2022-08-23)


### Bug Fixes

* LoadMore component effect ([b196201](https://github.com/cozy/cozy-ui/commit/b196201))


### Features

* add openapp icon ([545883b](https://github.com/cozy/cozy-ui/commit/545883b))

## [70.6.2](https://github.com/cozy/cozy-ui/compare/v70.6.1...v70.6.2) (2022-08-16)


### Bug Fixes

* **Permissions:** Display correct Icon names in readme ([3e38d4c](https://github.com/cozy/cozy-ui/commit/3e38d4c))

## [70.6.1](https://github.com/cozy/cozy-ui/compare/v70.6.0...v70.6.1) (2022-08-12)


### Bug Fixes

* To refresh the BottomSheet when the height of the content changes ([d5d66bf](https://github.com/cozy/cozy-ui/commit/d5d66bf))

# [70.6.0](https://github.com/cozy/cozy-ui/compare/v70.5.1...v70.6.0) (2022-08-09)


### Bug Fixes

* Prevent `AppLinker` to call openApp when target link has same slug ([3c87b96](https://github.com/cozy/cozy-ui/commit/3c87b96))


### Features

* Add `@testing-library/user-event` to devDependencies ([a5beaf0](https://github.com/cozy/cozy-ui/commit/a5beaf0))

## [70.5.1](https://github.com/cozy/cozy-ui/compare/v70.5.0...v70.5.1) (2022-08-08)


### Bug Fixes

* Add missing document date label in the viewer ([ace3449](https://github.com/cozy/cozy-ui/commit/ace3449))

# [70.5.0](https://github.com/cozy/cozy-ui/compare/v70.4.2...v70.5.0) (2022-08-04)


### Features

* **Permissions:** add permissions icons ([d8ffdd3](https://github.com/cozy/cozy-ui/commit/d8ffdd3))

## [70.4.2](https://github.com/cozy/cozy-ui/compare/v70.4.1...v70.4.2) (2022-07-29)


### Bug Fixes

* Apply top/bottom spacing on dialog fullscreen ([1a3aebb](https://github.com/cozy/cozy-ui/commit/1a3aebb))

## [70.4.1](https://github.com/cozy/cozy-ui/compare/v70.4.0...v70.4.1) (2022-07-28)


### Bug Fixes

* Improve double dialog onUnmount ([996be83](https://github.com/cozy/cozy-ui/commit/996be83))
* Temporary fix ESLint version ([2d7a8c2](https://github.com/cozy/cozy-ui/commit/2d7a8c2))

# [70.4.0](https://github.com/cozy/cozy-ui/compare/v70.3.0...v70.4.0) (2022-07-27)


### Features

* **ButtomSheet:** Add `skipAnimation` prop ([36651ed](https://github.com/cozy/cozy-ui/commit/36651ed))
* **ButtomSheet:** Upgrade mui-bottom-sheet to 1.0.8 ([876c751](https://github.com/cozy/cozy-ui/commit/876c751))

# [70.3.0](https://github.com/cozy/cozy-ui/compare/v70.2.4...v70.3.0) (2022-07-27)


### Features

* **Alert:** Add new Alert and AlertTitle components ([0e23359](https://github.com/cozy/cozy-ui/commit/0e23359))
* **MUI:** Add material-ui/lab dep ([8fb878b](https://github.com/cozy/cozy-ui/commit/8fb878b))
* **Snackbar:** Modify default behavior of Snackbar and add Alert expl ([20b89e4](https://github.com/cozy/cozy-ui/commit/20b89e4))

## [70.2.4](https://github.com/cozy/cozy-ui/compare/v70.2.3...v70.2.4) (2022-07-26)


### Bug Fixes

* **BottomSheet:** Backdrop click behavior ([7fdb297](https://github.com/cozy/cozy-ui/commit/7fdb297))

## [70.2.3](https://github.com/cozy/cozy-ui/compare/v70.2.2...v70.2.3) (2022-07-26)


### Bug Fixes

* **BottomSheet:** Remove bouncerSafer when clicking in backdrop ([93233dd](https://github.com/cozy/cozy-ui/commit/93233dd))
* **CozyDialogs:** Close and Back button z-index ([a943399](https://github.com/cozy/cozy-ui/commit/a943399))

## [70.2.2](https://github.com/cozy/cozy-ui/compare/v70.2.1...v70.2.2) (2022-07-26)


### Bug Fixes

* Shortcut with IconContent ([a83c320](https://github.com/cozy/cozy-ui/commit/a83c320))

## [70.2.1](https://github.com/cozy/cozy-ui/compare/v70.2.0...v70.2.1) (2022-07-25)


### Bug Fixes

* Improve double dialog onUnmount ([bd1d4ea](https://github.com/cozy/cozy-ui/commit/bd1d4ea))

# [70.2.0](https://github.com/cozy/cozy-ui/compare/v70.1.0...v70.2.0) (2022-07-25)


### Features

* Add withStyles and useTheme helpers from MUI ([578db69](https://github.com/cozy/cozy-ui/commit/578db69))

# [70.1.0](https://github.com/cozy/cozy-ui/compare/v70.0.0...v70.1.0) (2022-07-25)


### Features

* **BottomSheet:** Add backdrop and onClose props ([097e4e4](https://github.com/cozy/cozy-ui/commit/097e4e4))

# [70.0.0](https://github.com/cozy/cozy-ui/compare/v69.4.1...v70.0.0) (2022-07-22)


### Features

* **deps:** Material UI is dependency of CozyUI ([1e2d1e8](https://github.com/cozy/cozy-ui/commit/1e2d1e8)), closes [#1865](https://github.com/cozy/cozy-ui/issues/1865)


### BREAKING CHANGES

* **deps:** Material UI is not needed any more as a peer
dependency of Cozy-UI.

For application that uses CozyUI only for Icon, it is possible to
mock Material UI to {} in order not to increase the bundle size of
the app (if there is no deep import in the codebase)

## [69.4.1](https://github.com/cozy/cozy-ui/compare/v69.4.0...v69.4.1) (2022-07-22)


### Bug Fixes

* **Icon:** Remove fill on Tag icon ([f678665](https://github.com/cozy/cozy-ui/commit/f678665))

# [69.4.0](https://github.com/cozy/cozy-ui/compare/v69.3.0...v69.4.0) (2022-07-12)


### Features

* **Input:** Ref must be passed by forwardRef ([da7c553](https://github.com/cozy/cozy-ui/commit/da7c553))

# [69.3.0](https://github.com/cozy/cozy-ui/compare/v69.2.0...v69.3.0) (2022-07-07)


### Bug Fixes

* **Chips:** Using classname doesn't break style anymore ([3272df1](https://github.com/cozy/cozy-ui/commit/3272df1))


### Features

* **Chips:** Add ref forwarding ([8d7513e](https://github.com/cozy/cozy-ui/commit/8d7513e))

# [69.2.0](https://github.com/cozy/cozy-ui/compare/v69.1.0...v69.2.0) (2022-07-07)


### Features

* **BottomDrawer:** Add possibility to use it with long content ([59296f0](https://github.com/cozy/cozy-ui/commit/59296f0))
* **Overlay:** Add ref propagation ([6a0b3f0](https://github.com/cozy/cozy-ui/commit/6a0b3f0))

# [69.1.0](https://github.com/cozy/cozy-ui/compare/v69.0.0...v69.1.0) (2022-07-05)


### Features

* **Icon:** Add new tag icon ([514402f](https://github.com/cozy/cozy-ui/commit/514402f))

# [69.0.0](https://github.com/cozy/cozy-ui/compare/v68.9.1...v69.0.0) (2022-07-01)


### Bug Fixes

* **Typography:** Removed forced color ([1880d93](https://github.com/cozy/cozy-ui/commit/1880d93))


### BREAKING CHANGES

* **Typography:** Old deprecated texts components are removed : `Text`, `Title`, `MainTitle`, `SubTitle`, `Bold`, `Uppercase`, `Caption`, `ErrorMessage`, `NewSubTitle` from `/react/Text`. You now have to rely on `Typography` component. You can use a codemod for that :
```
$ yarn global add @cozy/codemods
$ jscodeshift -t $(yarn global dir)/node_modules/@cozy/codemods/src/transforms/transform-typography.js src --parser babel --ignore-pattern=src/targets/ --extensions js,jsx
```

## [68.9.1](https://github.com/cozy/cozy-ui/compare/v68.9.0...v68.9.1) (2022-06-30)


### Bug Fixes

* **ListSubheader:** Only 1rem of text indent on mobile ([af38d1d](https://github.com/cozy/cozy-ui/commit/af38d1d))

# [68.9.0](https://github.com/cozy/cozy-ui/compare/v68.8.0...v68.9.0) (2022-06-30)


### Features

* **Icon:** Change `setting` icon ([32f4d5a](https://github.com/cozy/cozy-ui/commit/32f4d5a))

# [68.8.0](https://github.com/cozy/cozy-ui/compare/v68.7.0...v68.8.0) (2022-06-28)


### Features

* **Icon:** Add paper icon ([c17df6f](https://github.com/cozy/cozy-ui/commit/c17df6f))

# [68.7.0](https://github.com/cozy/cozy-ui/compare/v68.6.0...v68.7.0) (2022-06-27)


### Features

* **IconStack:** Add offset prop ([2e22160](https://github.com/cozy/cozy-ui/commit/2e22160))

# [68.6.0](https://github.com/cozy/cozy-ui/compare/v68.5.1...v68.6.0) (2022-06-23)


### Features

* **Icon:** Add hand icon ([c7c814f](https://github.com/cozy/cozy-ui/commit/c7c814f))

## [68.5.1](https://github.com/cozy/cozy-ui/compare/v68.5.0...v68.5.1) (2022-06-17)


### Bug Fixes

* Reduce console spam by AppLinker ([27d9064](https://github.com/cozy/cozy-ui/commit/27d9064))

# [68.5.0](https://github.com/cozy/cozy-ui/compare/v68.4.0...v68.5.0) (2022-06-08)


### Features

* **DropdownText:** Add possibility to ellipsis text and pass more props ([8971e52](https://github.com/cozy/cozy-ui/commit/8971e52))

# [68.4.0](https://github.com/cozy/cozy-ui/compare/v68.3.1...v68.4.0) (2022-06-08)


### Bug Fixes

* **UploadQueue:** The progress bar changes correctly every second ([e57a609](https://github.com/cozy/cozy-ui/commit/e57a609))


### Features

* **Chore:** Add rooks lib to use useIntervalWhen hook ([256e86d](https://github.com/cozy/cozy-ui/commit/256e86d))

## [68.3.1](https://github.com/cozy/cozy-ui/compare/v68.3.0...v68.3.1) (2022-06-08)


### Bug Fixes

* **CozyDialogs:** Remove margin on action buttons for column layout ([6afd50f](https://github.com/cozy/cozy-ui/commit/6afd50f))

# [68.3.0](https://github.com/cozy/cozy-ui/compare/v68.2.0...v68.3.0) (2022-06-03)


### Features

* **ListItem:** Active ripple effect ([cd7e169](https://github.com/cozy/cozy-ui/commit/cd7e169))

# [68.2.0](https://github.com/cozy/cozy-ui/compare/v68.1.1...v68.2.0) (2022-05-30)


### Bug Fixes

* Improve react-native calls ([bca2877](https://github.com/cozy/cozy-ui/commit/bca2877))


### Features

* Improve callername logging ([c2f0471](https://github.com/cozy/cozy-ui/commit/c2f0471))

## [68.1.1](https://github.com/cozy/cozy-ui/compare/v68.1.0...v68.1.1) (2022-05-25)


### Bug Fixes

* Do not crash if the component does not find the child ([57f296b](https://github.com/cozy/cozy-ui/commit/57f296b))
* The name "FooterActionButtons" does not exist in the build version ([2d13777](https://github.com/cozy/cozy-ui/commit/2d13777))

# [68.1.0](https://github.com/cozy/cozy-ui/compare/v68.0.1...v68.1.0) (2022-05-24)


### Features

* Update the Viewer buttons to use the new cozy-ui Buttons ([5fa2868](https://github.com/cozy/cozy-ui/commit/5fa2868))
* **Banner:** Add disableIconStyles props ([fb6d274](https://github.com/cozy/cozy-ui/commit/fb6d274))

## [68.0.1](https://github.com/cozy/cozy-ui/compare/v68.0.0...v68.0.1) (2022-05-24)


### Bug Fixes

* Style of Viewer ([d6cfb28](https://github.com/cozy/cozy-ui/commit/d6cfb28))

# [68.0.0](https://github.com/cozy/cozy-ui/compare/v67.0.4...v68.0.0) (2022-05-24)


### Bug Fixes

* Warning of proptypes ([7b2c464](https://github.com/cozy/cozy-ui/commit/7b2c464))


### Features

* Add FooterActionButtons component ([1c3efc1](https://github.com/cozy/cozy-ui/commit/1c3efc1))
* Refactor the viewer to let the app handle the action buttons ([60084d6](https://github.com/cozy/cozy-ui/commit/60084d6))


### BREAKING CHANGES

* The management of action buttons
should now be handled on the application side
via the `FooterActionButtons` component.
The `disableSharing` prop has also been removed, as it is no longer needed.

Example:
```
<Viewer {...props}>
   <FooterActionButtons>
      <SharingButton />
      <ForwardOrDownloadButton />
   </FooterActionButtons>
</Viewer>
```
You can use a codemods `transform-viewer.js` to automatically handle this breaking change.
[See the codemods documentation](https://github.com/cozy/cozy-libs/tree/master/packages/cozy-codemods).
Using linter js auto-correction can be a good idea after that.
Here a common example (don't forget to change `src` value):
```
jscodeshift -t $(yarn global dir)/node_modules/@cozy/codemods/src/transforms/transform-viewer.js src --parser babel --extensions js,jsx && yarn lint:js --fix
```

## [67.0.4](https://github.com/cozy/cozy-ui/compare/v67.0.3...v67.0.4) (2022-05-20)


### Bug Fixes

* **Buttons:** Classname when using ghost variant ([c070c0c](https://github.com/cozy/cozy-ui/commit/c070c0c))

## [67.0.3](https://github.com/cozy/cozy-ui/compare/v67.0.2...v67.0.3) (2022-05-20)


### Bug Fixes

* Action buttons at the bottom of Dialog/IllustrationDialog on mobile ([b924001](https://github.com/cozy/cozy-ui/commit/b924001))

## [67.0.2](https://github.com/cozy/cozy-ui/compare/v67.0.1...v67.0.2) (2022-05-12)


### Bug Fixes

* Matomo tracking ([2156cde](https://github.com/cozy/cozy-ui/commit/2156cde))

## [67.0.1](https://github.com/cozy/cozy-ui/compare/v67.0.0...v67.0.1) (2022-05-11)


### Bug Fixes

* **viewer:** Amiral displays PDF without enouggh margin-top ([875ebba](https://github.com/cozy/cozy-ui/commit/875ebba))

# [67.0.0](https://github.com/cozy/cozy-ui/compare/v66.2.4...v67.0.0) (2022-05-10)


### Bug Fixes

* Set size of IconButton to `medium` because of previous BC ([56fc346](https://github.com/cozy/cozy-ui/commit/56fc346))


### Features

* Set default size of IconButton to `large` ([c7d405a](https://github.com/cozy/cozy-ui/commit/c7d405a))


### BREAKING CHANGES

* `IconButton`'s default props has been changed from `medium` to `large`. To keep the old behavior, you can use a codemods `transform-iconButton.js` to automatically handle this breaking change by setting `IconButton` size to `medium`. [See the codemods documentation](https://github.com/cozy/cozy-libs/tree/master/packages/cozy-codemods). Using linter js auto-correction can be a good idea after that. Here a common example (don't forget to change `src` value): `jscodeshift -t $(yarn global dir)/node_modules/@cozy/codemods/src/transforms/transform-iconButton.js src --parser babel --extensions js,jsx && yarn lint:js --fix`

## [66.2.4](https://github.com/cozy/cozy-ui/compare/v66.2.3...v66.2.4) (2022-05-10)


### Bug Fixes

* Buttons hover on mobile ([9407c76](https://github.com/cozy/cozy-ui/commit/9407c76))
* CircleButton hover on mobile ([ab9fa0e](https://github.com/cozy/cozy-ui/commit/ab9fa0e))

## [66.2.3](https://github.com/cozy/cozy-ui/compare/v66.2.2...v66.2.3) (2022-05-09)


### Bug Fixes

* LowerCase the app name ([558da08](https://github.com/cozy/cozy-ui/commit/558da08))

## [66.2.2](https://github.com/cozy/cozy-ui/compare/v66.2.1...v66.2.2) (2022-05-09)


### Bug Fixes

* **IconButton:** Implementation of forwardRef ([a6405ba](https://github.com/cozy/cozy-ui/commit/a6405ba))

## [66.2.1](https://github.com/cozy/cozy-ui/compare/v66.2.0...v66.2.1) (2022-05-05)


### Bug Fixes

* IconButton propagates ref ([0aba625](https://github.com/cozy/cozy-ui/commit/0aba625))

# [66.2.0](https://github.com/cozy/cozy-ui/compare/v66.1.0...v66.2.0) (2022-05-03)


### Bug Fixes

* Small size for IconButton ([63b6f70](https://github.com/cozy/cozy-ui/commit/63b6f70))


### Features

* Add CircleButton ([bd2692a](https://github.com/cozy/cozy-ui/commit/bd2692a))

# [66.1.0](https://github.com/cozy/cozy-ui/compare/v66.0.0...v66.1.0) (2022-05-03)


### Features

* Add large size on IconButton ([2a58a7a](https://github.com/cozy/cozy-ui/commit/2a58a7a))

# [66.0.0](https://github.com/cozy/cozy-ui/compare/v65.1.3...v66.0.0) (2022-05-02)


### Bug Fixes

* Upgrade cozy-device-helper API ([45b22fa](https://github.com/cozy/cozy-ui/commit/45b22fa))


### BREAKING CHANGES

* This will use a more robust CDH API.
In order to support the update, it is need to upgrade CDH to >=2.0.0

## [65.1.3](https://github.com/cozy/cozy-ui/compare/v65.1.2...v65.1.3) (2022-04-29)


### Bug Fixes

* Export toolbarPropsPropType correctly ([ccf994f](https://github.com/cozy/cozy-ui/commit/ccf994f))

## [65.1.2](https://github.com/cozy/cozy-ui/compare/v65.1.1...v65.1.2) (2022-04-29)


### Bug Fixes

* Use `circular | rectangular` on Badge overlap ([ae374ff](https://github.com/cozy/cozy-ui/commit/ae374ff))

## [65.1.1](https://github.com/cozy/cozy-ui/compare/v65.1.0...v65.1.1) (2022-04-29)


### Bug Fixes

* `--iconColor` value for inverted theme ([4263ff7](https://github.com/cozy/cozy-ui/commit/4263ff7))
* ActionMenu colors ([39dd4b7](https://github.com/cozy/cozy-ui/commit/39dd4b7))
* Colors on Infos and InfosCarrousel ([3feaf2d](https://github.com/cozy/cozy-ui/commit/3feaf2d))
* DateMonthPicker colors ([c37d1e7](https://github.com/cozy/cozy-ui/commit/c37d1e7))
* DropdownButton colors ([d6d0a25](https://github.com/cozy/cozy-ui/commit/d6d0a25))
* Menu colors ([13bc805](https://github.com/cozy/cozy-ui/commit/13bc805))

# [65.1.0](https://github.com/cozy/cozy-ui/compare/v65.0.1...v65.1.0) (2022-04-28)


### Features

* Display client-side encrypted files ([06425c3](https://github.com/cozy/cozy-ui/commit/06425c3))
* Download file through URL ([923eb49](https://github.com/cozy/cozy-ui/commit/923eb49))
* Upgrade cozy-client ([618bed1](https://github.com/cozy/cozy-ui/commit/618bed1))

## [65.0.1](https://github.com/cozy/cozy-ui/compare/v65.0.0...v65.0.1) (2022-04-27)


### Bug Fixes

* **Viewer:** Forward button on web mobile ([eb1c65a](https://github.com/cozy/cozy-ui/commit/eb1c65a))

# [65.0.0](https://github.com/cozy/cozy-ui/compare/v64.0.0...v65.0.0) (2022-04-27)


### Bug Fixes

* Upgrade cozy-device-helper in peerDeps ([9d926bb](https://github.com/cozy/cozy-ui/commit/9d926bb))


### BREAKING CHANGES

* cozy-ui needs this updated version
The Flagship App API changed in cozy-device-helper.
Some components will break if the parent app does not have
cozy-device-helper at ^1.18.0
All components importing flagshipMetadata are impacted
Resolve with yarn upgrade cozy-device-helper@^1.8.0

# [64.0.0](https://github.com/cozy/cozy-ui/compare/v63.0.0...v64.0.0) (2022-04-26)


### Features

* Add AddContactDialog to add a contact from the contact list ([7333bf9](https://github.com/cozy/cozy-ui/commit/7333bf9))
* Add ContactsList locales and HOC to get them ([e315f40](https://github.com/cozy/cozy-ui/commit/e315f40))


### BREAKING CHANGES

* the app must now have `POST` permission on `io.cozy.contacts` doctype to use `ContactsListModal`

# [63.0.0](https://github.com/cozy/cozy-ui/compare/v62.12.0...v63.0.0) (2022-04-26)


### Features

* **Viewer:** Improve ForwardButton ([2195cb4](https://github.com/cozy/cozy-ui/commit/2195cb4))
* Update cozy-client ([45a4a48](https://github.com/cozy/cozy-ui/commit/45a4a48))


### BREAKING CHANGES

* You need to update `cozy-client` to `>28.1.0`.

# [62.12.0](https://github.com/cozy/cozy-ui/compare/v62.11.0...v62.12.0) (2022-04-26)


### Bug Fixes

* Hide bottom of screen in immersive mode ([65fcc5f](https://github.com/cozy/cozy-ui/commit/65fcc5f))
* Revert icons to white in immersive mode ([43bc925](https://github.com/cozy/cozy-ui/commit/43bc925))
* Upgrade cozy-intent and cozy-device-helper ([44904b4](https://github.com/cozy/cozy-ui/commit/44904b4))


### Features

* Use new caller API in components ([10742b0](https://github.com/cozy/cozy-ui/commit/10742b0))

# [62.11.0](https://github.com/cozy/cozy-ui/compare/v62.10.0...v62.11.0) (2022-04-22)


### Features

* Add dropdown ([ee214f8](https://github.com/cozy/cozy-ui/commit/ee214f8))

# [62.10.0](https://github.com/cozy/cozy-ui/compare/v62.9.1...v62.10.0) (2022-04-21)


### Features

* Add chart.js and react-chartjs-2 packages ([16df033](https://github.com/cozy/cozy-ui/commit/16df033))
* Add PieChart component ([b7ce49f](https://github.com/cozy/cozy-ui/commit/b7ce49f))

## [62.9.1](https://github.com/cozy/cozy-ui/compare/v62.9.0...v62.9.1) (2022-04-21)


### Bug Fixes

* bump convict from 6.0.0 to 6.2.2 ([403c38e](https://github.com/cozy/cozy-ui/commit/403c38e))

# [62.9.0](https://github.com/cozy/cozy-ui/compare/v62.8.0...v62.9.0) (2022-04-20)


### Features

* Add makeStyles helper from Mui ([7962227](https://github.com/cozy/cozy-ui/commit/7962227))

# [62.8.0](https://github.com/cozy/cozy-ui/compare/v62.7.0...v62.8.0) (2022-04-19)


### Bug Fixes

* **deps:** Piwik-react-router should be a dependency ([ba6130b](https://github.com/cozy/cozy-ui/commit/ba6130b))


### Features

* Add mime-types package ([cc96d4a](https://github.com/cozy/cozy-ui/commit/cc96d4a))
* Improve FilePicker component ([d52c45d](https://github.com/cozy/cozy-ui/commit/d52c45d)), closes [#2026](https://github.com/cozy/cozy-ui/issues/2026)
* Update documentation ([dbb6098](https://github.com/cozy/cozy-ui/commit/dbb6098))

# [62.7.0](https://github.com/cozy/cozy-ui/compare/v62.6.0...v62.7.0) (2022-04-14)


### Features

* Add `radio` prop to `Variants` comp ([95f5d6a](https://github.com/cozy/cozy-ui/commit/95f5d6a))
* Add new `Chips` component ([97039de](https://github.com/cozy/cozy-ui/commit/97039de))

# [62.6.0](https://github.com/cozy/cozy-ui/compare/v62.5.3...v62.6.0) (2022-04-11)


### Features

* Add variant prop to Filename component ([eaaa770](https://github.com/cozy/cozy-ui/commit/eaaa770)), closes [#2018](https://github.com/cozy/cozy-ui/issues/2018)

## [62.5.3](https://github.com/cozy/cozy-ui/compare/v62.5.2...v62.5.3) (2022-04-07)


### Bug Fixes

* **deps:** Upgrade caniuse-lite ([8881188](https://github.com/cozy/cozy-ui/commit/8881188))

## [62.5.2](https://github.com/cozy/cozy-ui/compare/v62.5.1...v62.5.2) (2022-04-07)


### Bug Fixes

* Implement flagship top/bottom spacing ([50f2ff9](https://github.com/cozy/cozy-ui/commit/50f2ff9))

## [62.5.1](https://github.com/cozy/cozy-ui/compare/v62.5.0...v62.5.1) (2022-04-06)


### Bug Fixes

* Propagate the ref on the MUIButton ([86f52eb](https://github.com/cozy/cozy-ui/commit/86f52eb))

# [62.5.0](https://github.com/cozy/cozy-ui/compare/v62.4.3...v62.5.0) (2022-04-05)


### Bug Fixes

* Table use theme colors ([7339482](https://github.com/cozy/cozy-ui/commit/7339482))


### Features

* ContactsList behave as Contacts app does ([5a3837c](https://github.com/cozy/cozy-ui/commit/5a3837c))

## [62.4.3](https://github.com/cozy/cozy-ui/compare/v62.4.2...v62.4.3) (2022-04-01)


### Bug Fixes

* **deps:** update babel monorepo ([e0f7159](https://github.com/cozy/cozy-ui/commit/e0f7159))
* **deps:** update dependency kss to v3.0.1 ([31d81b2](https://github.com/cozy/cozy-ui/commit/31d81b2))
* **deps:** update dependency react-redux to v7.2.7 ([0af0356](https://github.com/cozy/cozy-ui/commit/0af0356))

## [62.4.2](https://github.com/cozy/cozy-ui/compare/v62.4.1...v62.4.2) (2022-04-01)


### Bug Fixes

* **deps:** update dependency copyfiles to v2.4.1 ([c73b02b](https://github.com/cozy/cozy-ui/commit/c73b02b))
* **deps:** update dependency normalize.css to v8 ([466af5b](https://github.com/cozy/cozy-ui/commit/466af5b))
* **deps:** update dependency semantic-release to v17.4.7 ([de218b2](https://github.com/cozy/cozy-ui/commit/de218b2))

## [62.4.1](https://github.com/cozy/cozy-ui/compare/v62.4.0...v62.4.1) (2022-03-28)


### Bug Fixes

* bump @semantic-release/npm from 5.3.4 to 9.0.1 ([cfb30eb](https://github.com/cozy/cozy-ui/commit/cfb30eb))

# [62.4.0](https://github.com/cozy/cozy-ui/compare/v62.3.0...v62.4.0) (2022-03-28)


### Features

* Add tiny size for FileImageLoader ([ae6ba29](https://github.com/cozy/cozy-ui/commit/ae6ba29))

# [62.3.0](https://github.com/cozy/cozy-ui/compare/v62.2.0...v62.3.0) (2022-03-25)


### Features

* Implement openApp animation from cozy-ui ([45e9e3b](https://github.com/cozy/cozy-ui/commit/45e9e3b))

# [62.2.0](https://github.com/cozy/cozy-ui/compare/v62.1.4...v62.2.0) (2022-03-22)


### Bug Fixes

* **deps:** Upgrade few packages ([5df4e2b](https://github.com/cozy/cozy-ui/commit/5df4e2b))


### Features

* Add Typescript support ([1ad1a48](https://github.com/cozy/cozy-ui/commit/1ad1a48))
* Handle FlagshipUI for cozy-drive cases ([6fa0228](https://github.com/cozy/cozy-ui/commit/6fa0228))
* Refactor setFlagshipUI feature ([64ca864](https://github.com/cozy/cozy-ui/commit/64ca864))
* Update cozy-intent for flagship-UI ([2b3d026](https://github.com/cozy/cozy-ui/commit/2b3d026))

## [62.1.4](https://github.com/cozy/cozy-ui/compare/v62.1.3...v62.1.4) (2022-03-03)


### Bug Fixes

* Do not stretch small screenshots ([4af1a3f](https://github.com/cozy/cozy-ui/commit/4af1a3f))

## [62.1.3](https://github.com/cozy/cozy-ui/compare/v62.1.2...v62.1.3) (2022-03-02)


### Bug Fixes

* **AppIcon:** Add appData to getIconUrl without using blob ([9e99569](https://github.com/cozy/cozy-ui/commit/9e99569))

## [62.1.2](https://github.com/cozy/cozy-ui/compare/v62.1.1...v62.1.2) (2022-02-24)


### Bug Fixes

* **changelog:** Update changelog with missing release ([b14fb86](https://github.com/cozy/cozy-ui/commit/b14fb86))

# [62.1.1](https://github.com/cozy/cozy-ui/compare/v62.1.0...v62.1.1) (2022-02-24)


### Bug Fixes

* Merge v62.1.0 and v62.0.4


# [62.1.0](https://github.com/cozy/cozy-ui/compare/v62.0.0...v62.1.0) (2022-02-15)


### Bug Fixes

* **upload:** Make progress bar size fixed ([1f58eee](https://github.com/cozy/cozy-ui/commit/1f58eee))


### Features

* **Avatar:** Add ghost property ([d09135c](https://github.com/cozy/cozy-ui/commit/d09135c))


## [62.0.4](https://github.com/cozy/cozy-ui/compare/v62.0.3...v62.0.4) (2022-02-24)


### Bug Fixes

* **Grid:** Use justifyContent props inside Grid component ([9325ec1](https://github.com/cozy/cozy-ui/commit/9325ec1))

## [62.0.3](https://github.com/cozy/cozy-ui/compare/v62.0.2...v62.0.3) (2022-02-22)


### Bug Fixes

* **Grid:** Use justifyContent props inside Grid component ([d5eb807](https://github.com/cozy/cozy-ui/commit/d5eb807))

## [62.0.2](https://github.com/cozy/cozy-ui/compare/v62.0.1...v62.0.2) (2022-02-21)


### Bug Fixes

* Inverted palette opacity values ([c90b554](https://github.com/cozy/cozy-ui/commit/c90b554))

## [62.0.1](https://github.com/cozy/cozy-ui/compare/v62.0.0...v62.0.1) (2022-02-18)


### Bug Fixes

* **deps:** bump url-parse from 1.4.3 to 1.5.7 in /examples/webpack-app ([af9429c](https://github.com/cozy/cozy-ui/commit/af9429c))

# [62.0.0](https://github.com/cozy/cozy-ui/compare/v61.1.1...v62.0.0) (2022-02-11)


### Bug Fixes

* Use correct color for checkbox in inverted theme ([878c8ad](https://github.com/cozy/cozy-ui/commit/878c8ad))
* **UploadQueue:** UploadQueue manage internationalized progress message ([ecb00e1](https://github.com/cozy/cozy-ui/commit/ecb00e1))


### Features

* Remove useless IconButton stylus ([7749774](https://github.com/cozy/cozy-ui/commit/7749774))


### BREAKING CHANGES

* The .IconButton css class is no longer available in the stylesheet

## [61.1.1](https://github.com/cozy/cozy-ui/compare/v61.1.0...v61.1.1) (2022-02-10)


### Bug Fixes

* **deps:** update dependency handlebars to v4.7.7 [security] ([3df65a0](https://github.com/cozy/cozy-ui/commit/3df65a0))

# [61.1.0](https://github.com/cozy/cozy-ui/compare/v61.0.0...v61.1.0) (2022-02-10)


### Features

* **import-cost:** Decrease size of import of date-fns ([9f2dc1f](https://github.com/cozy/cozy-ui/commit/9f2dc1f))

# [61.0.0](https://github.com/cozy/cozy-ui/compare/v60.12.0...v61.0.0) (2022-02-09)


### Features

* Upgrade mui to 4.12.3 ([b1b83d8](https://github.com/cozy/cozy-ui/commit/b1b83d8))


### BREAKING CHANGES

* Use must have `@material-ui/core` version `>= 4.12` in your application

# [60.12.0](https://github.com/cozy/cozy-ui/compare/v60.11.0...v60.12.0) (2022-02-07)


### Features

* Use new Radio button for FilePicker and NestedSelect ([a602dca](https://github.com/cozy/cozy-ui/commit/a602dca))

# [60.11.0](https://github.com/cozy/cozy-ui/compare/v60.10.1...v60.11.0) (2022-02-02)


### Features

* BottomSheet settings accept `mediumHeight` new prop ([0e2b254](https://github.com/cozy/cozy-ui/commit/0e2b254))

## [60.10.1](https://github.com/cozy/cozy-ui/compare/v60.10.0...v60.10.1) (2022-02-02)


### Bug Fixes

* Radios and Checkbox css to use correct primary/secondary colors ([a81e5e3](https://github.com/cozy/cozy-ui/commit/a81e5e3))

# [60.10.0](https://github.com/cozy/cozy-ui/compare/v60.9.1...v60.10.0) (2022-01-31)


### Bug Fixes

* Update cozy-intent and device helper ([87d612c](https://github.com/cozy/cozy-ui/commit/87d612c))


### Features

* Inject webviewService into BarContext ([b6c269f](https://github.com/cozy/cozy-ui/commit/b6c269f))
* Update BarContext testing ([15803f4](https://github.com/cozy/cozy-ui/commit/15803f4))
* Upgrade cozy-intent to latest ([8653ad1](https://github.com/cozy/cozy-ui/commit/8653ad1))

## [60.9.1](https://github.com/cozy/cozy-ui/compare/v60.9.0...v60.9.1) (2022-01-27)


### Bug Fixes

* Error when attributes doesn't exists ([f2d4e41](https://github.com/cozy/cozy-ui/commit/f2d4e41))

# [60.9.0](https://github.com/cozy/cozy-ui/compare/v60.8.2...v60.9.0) (2022-01-27)


### Features

* Add WebviewProvider in BarProvider ([bd2823e](https://github.com/cozy/cozy-ui/commit/bd2823e))

## [60.8.2](https://github.com/cozy/cozy-ui/compare/v60.8.1...v60.8.2) (2022-01-26)


### Bug Fixes

* Auto ref on BottomSheet Header now use displayName too ([0f1e067](https://github.com/cozy/cozy-ui/commit/0f1e067))

## [60.8.1](https://github.com/cozy/cozy-ui/compare/v60.8.0...v60.8.1) (2022-01-26)


### Bug Fixes

* PreventDefault on cozy-intent event ([f0ad95b](https://github.com/cozy/cozy-ui/commit/f0ad95b))

# [60.8.0](https://github.com/cozy/cozy-ui/compare/v60.7.0...v60.8.0) (2022-01-25)


### Features

* Add PhoneUpload icon ([d88c4ba](https://github.com/cozy/cozy-ui/commit/d88c4ba))

# [60.7.0](https://github.com/cozy/cozy-ui/compare/v60.6.1...v60.7.0) (2022-01-25)


### Features

* Add FolderMoveto icon ([7d68e72](https://github.com/cozy/cozy-ui/commit/7d68e72))

## [60.6.1](https://github.com/cozy/cozy-ui/compare/v60.6.0...v60.6.1) (2022-01-24)


### Bug Fixes

* Bump cozy-device-helper ([04463f7](https://github.com/cozy/cozy-ui/commit/04463f7))
* Show breadcrumb on FilePicker documentation ([8f92f09](https://github.com/cozy/cozy-ui/commit/8f92f09))

# [60.6.0](https://github.com/cozy/cozy-ui/compare/v60.5.0...v60.6.0) (2022-01-20)


### Bug Fixes

* Remove `isRequired` on AppLinker's `href` prop ([5c8b799](https://github.com/cozy/cozy-ui/commit/5c8b799))


### Features

* Open apps using their native mobile version when available ([d4bd421](https://github.com/cozy/cozy-ui/commit/d4bd421))
* Replace `slug` prop by `app.slug` in `AppLinker` ([fc9cd87](https://github.com/cozy/cozy-ui/commit/fc9cd87))
* Upgrade cozy-intent to 1.3.0 ([e65af63](https://github.com/cozy/cozy-ui/commit/e65af63))

# [60.5.0](https://github.com/cozy/cozy-ui/compare/v60.4.0...v60.5.0) (2022-01-20)


### Features

* Add FilePicker component ([288d047](https://github.com/cozy/cozy-ui/commit/288d047))
* Add filesize package ([9286dcd](https://github.com/cozy/cozy-ui/commit/9286dcd))

# [60.4.0](https://github.com/cozy/cozy-ui/compare/v60.3.0...v60.4.0) (2022-01-20)


### Features

* Add new BottomSheet component ([7064202](https://github.com/cozy/cozy-ui/commit/7064202))
* Replace the Viewer BottomSheet by the new one ([184b5af](https://github.com/cozy/cozy-ui/commit/184b5af))

# [60.3.0](https://github.com/cozy/cozy-ui/compare/v60.2.0...v60.3.0) (2022-01-19)


### Features

* Add new icons radio-checked and radio-unchecked ([d441d6c](https://github.com/cozy/cozy-ui/commit/d441d6c))
* Add new Radios button ([13cf089](https://github.com/cozy/cozy-ui/commit/13cf089))
* Deprecates old Radio component ([b5785b4](https://github.com/cozy/cozy-ui/commit/b5785b4))

# [60.2.0](https://github.com/cozy/cozy-ui/compare/v60.1.0...v60.2.0) (2022-01-19)


### Features

* Add `titleRef` on CozyDialogs ([9bd885b](https://github.com/cozy/cozy-ui/commit/9bd885b))

# [60.1.0](https://github.com/cozy/cozy-ui/compare/v60.0.0...v60.1.0) (2022-01-19)


### Features

* Add optimized new Icons ([1bae76a](https://github.com/cozy/cozy-ui/commit/1bae76a))
* Add svgo package ([427e409](https://github.com/cozy/cozy-ui/commit/427e409))
* Svgr generator script can now deal with folder ([cb65cb5](https://github.com/cozy/cozy-ui/commit/cb65cb5))

# [60.0.0](https://github.com/cozy/cozy-ui/compare/v59.3.0...v60.0.0) (2022-01-14)


### Features

* Replace `data-test-id` by `data-testid` on some components ([8087cb1](https://github.com/cozy/cozy-ui/commit/8087cb1))


### BREAKING CHANGES

* If you were using `data-test-id` prop to test `NestedSelect` or `UploadQueue` components, you should now use `data-testid`. Besides if something fail on `CozyDialog` components, take a look at our helpers in `react/CozyDialogs` to know how to test these components.

# [59.3.0](https://github.com/cozy/cozy-ui/compare/v59.2.0...v59.3.0) (2022-01-14)


### Bug Fixes

* CozyDialogs doesn't show title block anymore if undefined ([1c7170c](https://github.com/cozy/cozy-ui/commit/1c7170c))


### Features

* Add `disableGutters` prop to CozyDialogs ([a55f5fb](https://github.com/cozy/cozy-ui/commit/a55f5fb))

# [59.2.0](https://github.com/cozy/cozy-ui/compare/v59.1.0...v59.2.0) (2022-01-11)


### Bug Fixes

* **mixins:** Name correctly mixins in styleguide tools ([ce0c7a8](https://github.com/cozy/cozy-ui/commit/ce0c7a8))
* **sorter:** Categories sorted alphabetically + cozy value goes second ([f493f89](https://github.com/cozy/cozy-ui/commit/f493f89))
* **stylus:** Remove warning accessing non existing property error ([b756060](https://github.com/cozy/cozy-ui/commit/b756060)), closes [/github.com/stylus/stylus/issues/2534#issuecomment-659414984](https://github.com//github.com/stylus/stylus/issues/2534/issues/issuecomment-659414984)
* **test:** Resolve each failing tests ([cb09aa8](https://github.com/cozy/cozy-ui/commit/cb09aa8))
* **test:** Use async/await in testFromStyleguidist ([fd6ca37](https://github.com/cozy/cozy-ui/commit/fd6ca37))


### Features

* **node16:** Upgrade to node 16 ([5e647b2](https://github.com/cozy/cozy-ui/commit/5e647b2))

# [59.1.0](https://github.com/cozy/cozy-ui/compare/v59.0.0...v59.1.0) (2022-01-11)


### Features

* Add ListItemAvatar from Mui ([84f9d3c](https://github.com/cozy/cozy-ui/commit/84f9d3c))

# [59.0.0](https://github.com/cozy/cozy-ui/compare/v58.5.1...v59.0.0) (2022-01-10)


### Features

* Change cozy-intent dependency mode ([cec9b4a](https://github.com/cozy/cozy-ui/commit/cec9b4a))


### BREAKING CHANGES

* cozy-intent@1.1.2 or later is now required
otherwise, AppLinker will crash
* Wrap your App in the WebviewIntentProvider (via import { WebviewIntentProvider } from 'cozy-intent)

## [58.5.1](https://github.com/cozy/cozy-ui/compare/v58.5.0...v58.5.1) (2022-01-07)


### Bug Fixes

* Handle context flow without undefined return ([68a33ff](https://github.com/cozy/cozy-ui/commit/68a33ff))

# [58.5.0](https://github.com/cozy/cozy-ui/compare/v58.4.1...v58.5.0) (2022-01-07)


### Bug Fixes

* Update cozy-intent version ([a1640c6](https://github.com/cozy/cozy-ui/commit/a1640c6))


### Features

* Go back to static method ([a1cf102](https://github.com/cozy/cozy-ui/commit/a1cf102))
* Update applinker to work with intents ([72d8dcb](https://github.com/cozy/cozy-ui/commit/72d8dcb))
* Update applinker to work with intents ([ef68367](https://github.com/cozy/cozy-ui/commit/ef68367))

## [58.4.1](https://github.com/cozy/cozy-ui/compare/v58.4.0...v58.4.1) (2022-01-04)


### Bug Fixes

* BottomSheet no longer opens fully ([ddb8715](https://github.com/cozy/cozy-ui/commit/ddb8715))

# [58.4.0](https://github.com/cozy/cozy-ui/compare/v58.3.0...v58.4.0) (2021-12-14)


### Features

* Added Qualification panel block ([9fbaaa6](https://github.com/cozy/cozy-ui/commit/9fbaaa6))
* Upgrade cozy-client ([8820f81](https://github.com/cozy/cozy-ui/commit/8820f81))

# [58.3.0](https://github.com/cozy/cozy-ui/compare/v58.2.0...v58.3.0) (2021-12-13)


### Features

* Disable sharing button on Viewer ([c7303b3](https://github.com/cozy/cozy-ui/commit/c7303b3))

# [58.2.0](https://github.com/cozy/cozy-ui/compare/v58.1.2...v58.2.0) (2021-12-08)


### Features

* Add `noWrap` prop on BarTitle ([74e3742](https://github.com/cozy/cozy-ui/commit/74e3742))

## [58.1.2](https://github.com/cozy/cozy-ui/compare/v58.1.1...v58.1.2) (2021-12-07)


### Bug Fixes

* Correct colors about Alerter buttons ([050c2b9](https://github.com/cozy/cozy-ui/commit/050c2b9))

## [58.1.1](https://github.com/cozy/cozy-ui/compare/v58.1.0...v58.1.1) (2021-12-07)


### Bug Fixes

* Replace jest function in documentation ([cdbc01f](https://github.com/cozy/cozy-ui/commit/cdbc01f))

# [58.1.0](https://github.com/cozy/cozy-ui/compare/v58.0.0...v58.1.0) (2021-12-06)


### Features

* Add realtime to FileImageLoader component ([621fe47](https://github.com/cozy/cozy-ui/commit/621fe47))

# [58.0.0](https://github.com/cozy/cozy-ui/compare/v57.10.0...v58.0.0) (2021-12-03)


### Features

* Renamed ImageLoader & Exposed it directly ([2ca789b](https://github.com/cozy/cozy-ui/commit/2ca789b))


### BREAKING CHANGES

* `ImageLoader` is rename `FileImageLoader`.
If you were previously importing `ImageLoader`
via the `Viewer`like this
`import ImageLoader from 'cozy-ui/transpiled/react/Viewer/ImageLoader'`
this no longer works, there is a more direct path:
`import ImageLoader from 'cozy-ui/transpiled/react/ImageLoader`.
The method `checkImageSource` has been moved also
from `Viewer` folder to `ImageLoader` folder.

Co-authored-by: JF-Cozy

# [57.10.0](https://github.com/cozy/cozy-ui/compare/v57.9.2...v57.10.0) (2021-11-29)


### Features

* Forward remaining props to AppIcon ([ed86adf](https://github.com/cozy/cozy-ui/commit/ed86adf))

## [57.9.2](https://github.com/cozy/cozy-ui/compare/v57.9.1...v57.9.2) (2021-11-23)


### Bug Fixes

* Update LogoutLarge icon properly from the source ([48e3810](https://github.com/cozy/cozy-ui/commit/48e3810)), closes [/github.com/cozy/cozy-ui/pull/1968#discussion_r750010959](https://github.com//github.com/cozy/cozy-ui/pull/1968/issues/discussion_r750010959)

## [57.9.1](https://github.com/cozy/cozy-ui/compare/v57.9.0...v57.9.1) (2021-11-18)


### Bug Fixes

* ProgressionBanner use styled span instead of h6 to show text ([5f32367](https://github.com/cozy/cozy-ui/commit/5f32367))
* Use contact model from cozy-client in ContactsList ([5b0707e](https://github.com/cozy/cozy-ui/commit/5b0707e))

# [57.9.0](https://github.com/cozy/cozy-ui/compare/v57.8.0...v57.9.0) (2021-11-17)


### Bug Fixes

* Allow `Radio` to be part of a `RadioGroup` ([0e3cb6c](https://github.com/cozy/cozy-ui/commit/0e3cb6c)), closes [cozy/cozy-ui#1901](https://github.com/cozy/cozy-ui/issues/1901)


### Features

* Refactor Radio documentation with variants ([fa2efc4](https://github.com/cozy/cozy-ui/commit/fa2efc4))

# [57.8.0](https://github.com/cozy/cozy-ui/compare/v57.7.0...v57.8.0) (2021-11-15)


### Bug Fixes

* Set correct action opacity for Mui theme ([ebb4f45](https://github.com/cozy/cozy-ui/commit/ebb4f45))
* Set correct border opacities in Mui theme ([7b4c6e0](https://github.com/cozy/cozy-ui/commit/7b4c6e0))


### Features

* New Button component conform to the figma specifications ([46e551b](https://github.com/cozy/cozy-ui/commit/46e551b))

# [57.7.0](https://github.com/cozy/cozy-ui/compare/v57.6.0...v57.7.0) (2021-11-12)


### Bug Fixes

* Add viewBox to LogoutLarge icon ([6196caa](https://github.com/cozy/cozy-ui/commit/6196caa))


### Features

* Add IconComponent prop to SquareAppIcon ([22591ff](https://github.com/cozy/cozy-ui/commit/22591ff))
* Add type prop to SquareAppIcon ([d9799c7](https://github.com/cozy/cozy-ui/commit/d9799c7))
* Do not use backdrop-filter on SquareAppIcon anymore ([451d54f](https://github.com/cozy/cozy-ui/commit/451d54f))

# [57.6.0](https://github.com/cozy/cozy-ui/compare/v57.5.5...v57.6.0) (2021-11-08)


### Features

* Add `autoCapitalize` prop in Fields ([54efb34](https://github.com/cozy/cozy-ui/commit/54efb34))

## [57.5.5](https://github.com/cozy/cozy-ui/compare/v57.5.4...v57.5.5) (2021-11-08)


### Bug Fixes

* Do not stretch small screenshots ([4c7f48f](https://github.com/cozy/cozy-ui/commit/4c7f48f))
* Revert "Merge pull request [#1956](https://github.com/cozy/cozy-ui/issues/1956) from cozy/test/waitFor" ([#1962](https://github.com/cozy/cozy-ui/issues/1962)) ([374bda4](https://github.com/cozy/cozy-ui/commit/374bda4))

## [57.5.4](https://github.com/cozy/cozy-ui/compare/v57.5.3...v57.5.4) (2021-11-04)


### Bug Fixes

* AppTile doesn't require name prop ([3a74932](https://github.com/cozy/cozy-ui/commit/3a74932))

## [57.5.3](https://github.com/cozy/cozy-ui/compare/v57.5.2...v57.5.3) (2021-11-04)


### Bug Fixes

* Border color of Accordion ([4628488](https://github.com/cozy/cozy-ui/commit/4628488))

## [57.5.2](https://github.com/cozy/cozy-ui/compare/v57.5.1...v57.5.2) (2021-11-02)


### Bug Fixes

* Use u-spacellipsis instead of u-ellipsis ([3a4a6c3](https://github.com/cozy/cozy-ui/commit/3a4a6c3))

## [57.5.1](https://github.com/cozy/cozy-ui/compare/v57.5.0...v57.5.1) (2021-11-02)


### Bug Fixes

* Set correct argos batchCount ([8a6179d](https://github.com/cozy/cozy-ui/commit/8a6179d)), closes [cozy/cozy-ui#1917](https://github.com/cozy/cozy-ui/issues/1917)

# [57.5.0](https://github.com/cozy/cozy-ui/compare/v57.4.0...v57.5.0) (2021-10-28)


### Bug Fixes

* SquareAppIcon error badge appearance ([b1c0275](https://github.com/cozy/cozy-ui/commit/b1c0275))
* Various style updates after review ([2d6f829](https://github.com/cozy/cozy-ui/commit/2d6f829))


### Features

* Add shadows on SquareAppIcon text and icon background ([5008d63](https://github.com/cozy/cozy-ui/commit/5008d63))
* Allow more width for the name ([12b280c](https://github.com/cozy/cozy-ui/commit/12b280c))
* Allow two lines for the name ([64776ea](https://github.com/cozy/cozy-ui/commit/64776ea))

# [57.4.0](https://github.com/cozy/cozy-ui/compare/v57.3.1...v57.4.0) (2021-10-19)


### Features

* Add piwik-react-router package ([e3bd229](https://github.com/cozy/cozy-ui/commit/e3bd229))

## [57.3.1](https://github.com/cozy/cozy-ui/compare/v57.3.0...v57.3.1) (2021-10-15)


### Bug Fixes

* Display shortcut letter as upper case in SquareAppIcon ([3792d10](https://github.com/cozy/cozy-ui/commit/3792d10))

# [57.3.0](https://github.com/cozy/cozy-ui/compare/v57.2.1...v57.3.0) (2021-10-14)


### Bug Fixes

* SquareAppIcon background on Chrome ([dea5fd6](https://github.com/cozy/cozy-ui/commit/dea5fd6))


### Features

* Expose SquareAppIcon component ([b11a9aa](https://github.com/cozy/cozy-ui/commit/b11a9aa))

## [57.2.1](https://github.com/cozy/cozy-ui/compare/v57.2.0...v57.2.1) (2021-10-13)


### Bug Fixes

* Title is not required ([53976ad](https://github.com/cozy/cozy-ui/commit/53976ad))

# [57.2.0](https://github.com/cozy/cozy-ui/compare/v57.1.0...v57.2.0) (2021-10-12)


### Bug Fixes

* Adapt to new Badge overlap api ([7ea416f](https://github.com/cozy/cozy-ui/commit/7ea416f))
* Handle no app.slug and no name prop with app prop ([21cfc92](https://github.com/cozy/cozy-ui/commit/21cfc92))
* SquareAppIcon wrapper border size ([1e7783e](https://github.com/cozy/cozy-ui/commit/1e7783e))
* Use Grid component in Readme ([f6886ab](https://github.com/cozy/cozy-ui/commit/f6886ab))
* Use Typography instead of h3 in SquareAppIcon ([ee43ec0](https://github.com/cozy/cozy-ui/commit/ee43ec0))


### Features

* Add docs/styleguide.config.js to lint:js ([6c61504](https://github.com/cozy/cozy-ui/commit/6c61504))
* Add shortcut variant ([3ccd351](https://github.com/cozy/cozy-ui/commit/3ccd351))
* Add SquareAppIcon react component ([370d06a](https://github.com/cozy/cozy-ui/commit/370d06a))
* Use Badge Component ([a62f5e6](https://github.com/cozy/cozy-ui/commit/a62f5e6))

# [57.1.0](https://github.com/cozy/cozy-ui/compare/v57.0.0...v57.1.0) (2021-10-07)


### Features

* New sizes for badges according to spec ([b933c96](https://github.com/cozy/cozy-ui/commit/b933c96))

# [57.0.0](https://github.com/cozy/cozy-ui/compare/v56.0.1...v57.0.0) (2021-10-06)


### Bug Fixes

* Adjust some comp color in inverted theme ([057302f](https://github.com/cozy/cozy-ui/commit/057302f))
* Switch inverted default color ([12b92a0](https://github.com/cozy/cozy-ui/commit/12b92a0))
* Use relative theme in makeOverrides() and don't force normalTheme ([d7d1a88](https://github.com/cozy/cozy-ui/commit/d7d1a88))


### Features

* Add getInvertedCssVariableValue() ([8708bf4](https://github.com/cozy/cozy-ui/commit/8708bf4))
* Move inverted stylus theme in global css ([f72082e](https://github.com/cozy/cozy-ui/commit/f72082e))
* Remove defaultValues from Mui theme ([48ccfb3](https://github.com/cozy/cozy-ui/commit/48ccfb3))
* Use correct css value for inverted Mui theme ([69291db](https://github.com/cozy/cozy-ui/commit/69291db))


### BREAKING CHANGES

* You can't use `defaultValues` from `cozy-ui/transpiled/react/MuiCozyTheme` anymore, please use `theme` object instead

## [56.0.1](https://github.com/cozy/cozy-ui/compare/v56.0.0...v56.0.1) (2021-10-04)


### Bug Fixes

* Action prop in mui palette ([d4a0d3a](https://github.com/cozy/cozy-ui/commit/d4a0d3a))

# [56.0.0](https://github.com/cozy/cozy-ui/compare/v55.0.0...v56.0.0) (2021-10-01)


### Features

* Add cozy-harvest-lib package ([68407f7](https://github.com/cozy/cozy-ui/commit/68407f7))
* Add cozy-sharing package ([6f816d8](https://github.com/cozy/cozy-ui/commit/6f816d8))
* Add mui-bottom-sheet package ([1f6d6c3](https://github.com/cozy/cozy-ui/commit/1f6d6c3))
* Upgrade Viewer ([936a537](https://github.com/cozy/cozy-ui/commit/936a537))


### BREAKING CHANGES

* - The `Viewer` will automatically display information panels,
   if the file comes from a Konnector and/or if it is certified

- Removed the `panelInfoProps` & `footerProps` props
   which are now managed by the `Viewer`.

- Adding the `disablePanel` &` disableFooter` props to return
  to a simple `Viewer` (without the informations panels),
  on Desktop and/or on Mobile.

Exemple :
```javascript
// Only on Mobile
<Viewer ... disablePanel = {true} />

 // Only on Desktop
<Viewer ... disableFooter = {true} />
```

# [55.0.0](https://github.com/cozy/cozy-ui/compare/v54.1.1...v55.0.0) (2021-10-01)


### Bug Fixes

* MuiTabs color ([4aba58f](https://github.com/cozy/cozy-ui/commit/4aba58f))
* PercentageBar colors ([c6e65b3](https://github.com/cozy/cozy-ui/commit/c6e65b3))
* Remove useless background utility class ([66f7583](https://github.com/cozy/cozy-ui/commit/66f7583))
* Switch track color ([652632a](https://github.com/cozy/cozy-ui/commit/652632a))


### Features

* Add Info and Common color in Mui json palette ([e0a5f72](https://github.com/cozy/cozy-ui/commit/e0a5f72))
* Add missing colors in Mui palette for normal theme ([528506a](https://github.com/cozy/cozy-ui/commit/528506a))
* Add new semantic variable colors ([e7a6b12](https://github.com/cozy/cozy-ui/commit/e7a6b12))
* Define colors of css variable for inverted theme ([63acc69](https://github.com/cozy/cozy-ui/commit/63acc69))
* Remove some css stylus variables ([d044c6f](https://github.com/cozy/cozy-ui/commit/d044c6f))
* Reorganize palette ([8c4d1d0](https://github.com/cozy/cozy-ui/commit/8c4d1d0))
* Replace palette colors in stylus by Mui palette colors ([3524a71](https://github.com/cozy/cozy-ui/commit/3524a71))
* Use correct css variable for Mui theme ([635eddb](https://github.com/cozy/cozy-ui/commit/635eddb))


### BREAKING CHANGES

* We removed these stylus variables  :
```
- $errorColor
- $errorBackground
- $successColor
- $warningColor
- $infoColor
```
* As we have replaced the colors associated with css variables, after this update the color of some elements may have changed

## [54.1.1](https://github.com/cozy/cozy-ui/compare/v54.1.0...v54.1.1) (2021-09-30)


### Bug Fixes

* Add scripts to remove empty blocks ([8e5b3f5](https://github.com/cozy/cozy-ui/commit/8e5b3f5))

# [54.1.0](https://github.com/cozy/cozy-ui/compare/v54.0.0...v54.1.0) (2021-09-29)


### Bug Fixes

* Allow badge class to be extended ([ec2f6d5](https://github.com/cozy/cozy-ui/commit/ec2f6d5))


### Features

* Add withBorder prop ([87339a2](https://github.com/cozy/cozy-ui/commit/87339a2))

# [54.0.0](https://github.com/cozy/cozy-ui/compare/v53.0.0...v54.0.0) (2021-09-28)


### Bug Fixes

* Add missing config properties to inverted theme ([85c9026](https://github.com/cozy/cozy-ui/commit/85c9026))
* Correctly override DialogTitle's className in `ContactsListModal` ([69e0fa6](https://github.com/cozy/cozy-ui/commit/69e0fa6))


### Features

* Add `isFluidTitle` prop to `useCozyDialog` ([2d4f8b7](https://github.com/cozy/cozy-ui/commit/2d4f8b7))
* Add plain background to dialogs buttons ([82a4b78](https://github.com/cozy/cozy-ui/commit/82a4b78))
* Add tests for Dialog ([ec468db](https://github.com/cozy/cozy-ui/commit/ec468db))
* Handle `onBack` prop on CozyDialogs ([eb86578](https://github.com/cozy/cozy-ui/commit/eb86578))
* Rework CozyDialogs style to fit latest UI specs ([8ff3766](https://github.com/cozy/cozy-ui/commit/8ff3766))
* Set DialogBackButton's position to absolute ([98fe795](https://github.com/cozy/cozy-ui/commit/98fe795))


### BREAKING CHANGES

* `<DialogBackButton>` is now using absolute positioning. To prevent
`<DialogTitle>` to overlap with this button, `useCozyDialog()` handles
its positioning with `dialogTitleProps`.
If you use `cozy-ui/transpiled/react/Dialog` with `useCozyDialog()` but
without `<DialogBackButton>` then you may be impacted as a left margin
will be applied on `<DialogTitle>` on mobile, which would leave a blank
space if no `<DialogBackButton>` is present.
In this case, please add `disableTitleAutoPadding` to
`useCozyDialog()` props. Then title will take all available space and
you will be able to handle its positionning by yourself.
```js
const {
  dialogTitleProps
} = useCozyDialog({ ...props, disableTitleAutoPadding: true })
```

# [53.0.0](https://github.com/cozy/cozy-ui/compare/v52.0.1...v53.0.0) (2021-09-28)


### Features

* Remove layout prop ([e78fe34](https://github.com/cozy/cozy-ui/commit/e78fe34))


### BREAKING CHANGES

* Deleting the layout prop & mobile style associated

    - If you were not using the `layout` prop or if it was set to `true` on the `Empty` component, to get the previous centering, then you will need to add the following style on the `Empty` component:
    ```styl
    @require 'settings/breakpoints'

    +small-screen()
        margin-top: calc(50vh - 6rem);
        transform: translateY(-50%);

    ```

    - If you were using the `layout` prop at `false`, you can simply delete the prop that is no longer needed

## [52.0.1](https://github.com/cozy/cozy-ui/compare/v52.0.0...v52.0.1) (2021-09-24)


### Bug Fixes

* Change import about Sprite ([5f0b88f](https://github.com/cozy/cozy-ui/commit/5f0b88f))
* Lint ([53ef0ce](https://github.com/cozy/cozy-ui/commit/53ef0ce))

# [52.0.0](https://github.com/cozy/cozy-ui/compare/v51.12.0...v52.0.0) (2021-09-22)


### Bug Fixes

* Remove export Sprite from Icon (index.jsx) ([478e9d2](https://github.com/cozy/cozy-ui/commit/478e9d2))
* Remove unused import ([adee11b](https://github.com/cozy/cozy-ui/commit/adee11b))


### BREAKING CHANGES

*  `<Sprite>` is no longer exported by `<Icon>`. However, you can import it directly with `import Sprite from 'cozy-ui/transpiled/react/Icon/Sprite'`. Be carful, it's no longer possible to set an icon with a string like this `<Icon icon="myIcon" />` without importing `<Sprite>`. If don't need the sprite, you can still use svgr icons:
```
import MyIcon from 'cozy-ui/transpiled/react/Icons/MyIcon'
<Icon icon={MyIcon} />
```

# [51.12.0](https://github.com/cozy/cozy-ui/compare/v51.11.0...v51.12.0) (2021-09-15)


### Features

* Add text features to `Divider` component ([e509bb9](https://github.com/cozy/cozy-ui/commit/e509bb9))

# [51.11.0](https://github.com/cozy/cozy-ui/compare/v51.10.0...v51.11.0) (2021-09-10)


### Features

* Add & fix snaps with Variants ([9d6ab89](https://github.com/cozy/cozy-ui/commit/9d6ab89))
* Add prop iconSize ([5398f53](https://github.com/cozy/cozy-ui/commit/5398f53))
* Delete useless spaces ([b5e21a4](https://github.com/cozy/cozy-ui/commit/b5e21a4))
* Refactor Empty Readme with Variants ([ddf999e](https://github.com/cozy/cozy-ui/commit/ddf999e))

# [51.10.0](https://github.com/cozy/cozy-ui/compare/v51.9.1...v51.10.0) (2021-09-08)


### Features

* Add shield icon ([d94e7aa](https://github.com/cozy/cozy-ui/commit/d94e7aa))

## [51.9.1](https://github.com/cozy/cozy-ui/compare/v51.9.0...v51.9.1) (2021-09-08)


### Bug Fixes

* Desactivate MUI transition for inverted theme if is testing ([6c3f32e](https://github.com/cozy/cozy-ui/commit/6c3f32e))

# [51.9.0](https://github.com/cozy/cozy-ui/compare/v51.8.0...v51.9.0) (2021-09-03)


### Features

* Move 2 lines title style to `Tile` component ([a69ab40](https://github.com/cozy/cozy-ui/commit/a69ab40))
* Move installed app's greyed style to `Tile` component ([51efba8](https://github.com/cozy/cozy-ui/commit/51efba8))
* Move updatable app's blue status style to `Tile` component ([9a2ce92](https://github.com/cozy/cozy-ui/commit/9a2ce92))

# [51.8.0](https://github.com/cozy/cozy-ui/compare/v51.7.1...v51.8.0) (2021-08-31)


### Features

* Allow app tiles' names to be displayed on two lines ([f1a4142](https://github.com/cozy/cozy-ui/commit/f1a4142))
* Highlight already installed app tiles ([b86055e](https://github.com/cozy/cozy-ui/commit/b86055e))
* Highlight app tiles that have available update ([8e00950](https://github.com/cozy/cozy-ui/commit/8e00950))

## [51.7.1](https://github.com/cozy/cozy-ui/compare/v51.7.0...v51.7.1) (2021-08-31)


### Bug Fixes

* Remove `height:auto` from `app-2panes-sticky` class ([fc93cef](https://github.com/cozy/cozy-ui/commit/fc93cef))

# [51.7.0](https://github.com/cozy/cozy-ui/compare/v51.6.0...v51.7.0) (2021-08-30)


### Features

* Decouple FilePathLink from stylesheet ([f95d386](https://github.com/cozy/cozy-ui/commit/f95d386))

# [51.6.0](https://github.com/cozy/cozy-ui/compare/v51.5.2...v51.6.0) (2021-08-25)


### Features

* Add file path component ([6a9e745](https://github.com/cozy/cozy-ui/commit/6a9e745))

## [51.5.2](https://github.com/cozy/cozy-ui/compare/v51.5.1...v51.5.2) (2021-08-19)


### Bug Fixes

* Change text orientation in MidEllipsis ([ccb2e6b](https://github.com/cozy/cozy-ui/commit/ccb2e6b))

## [51.5.1](https://github.com/cozy/cozy-ui/compare/v51.5.0...v51.5.1) (2021-08-13)


### Bug Fixes

* Correct border-color on hover for text fields ([b2117a2](https://github.com/cozy/cozy-ui/commit/b2117a2))

# [51.5.0](https://github.com/cozy/cozy-ui/compare/v51.4.0...v51.5.0) (2021-08-09)


### Features

* Do not render `DialogActions` when `actions` prop is undefined ([bbfe215](https://github.com/cozy/cozy-ui/commit/bbfe215)), closes [#1861](https://github.com/cozy/cozy-ui/issues/1861)

# [51.4.0](https://github.com/cozy/cozy-ui/compare/v51.3.1...v51.4.0) (2021-07-28)


### Features

* Add checkbox icon ([001a491](https://github.com/cozy/cozy-ui/commit/001a491))

## [51.3.1](https://github.com/cozy/cozy-ui/compare/v51.3.0...v51.3.1) (2021-07-15)


### Bug Fixes

* Set cozy-client minimum version in peer dependencies ([335d27b](https://github.com/cozy/cozy-ui/commit/335d27b))

# [51.3.0](https://github.com/cozy/cozy-ui/compare/v51.2.1...v51.3.0) (2021-07-13)


### Features

* Improve IconStack ([4edc727](https://github.com/cozy/cozy-ui/commit/4edc727))

## [51.2.1](https://github.com/cozy/cozy-ui/compare/v51.2.0...v51.2.1) (2021-07-13)


### Bug Fixes

* Generates screenshots with `captureBeyondViewport` disabled ([48d1178](https://github.com/cozy/cozy-ui/commit/48d1178))
* Upgrade puppeteer ([a8b8aa0](https://github.com/cozy/cozy-ui/commit/a8b8aa0))

# [51.2.0](https://github.com/cozy/cozy-ui/compare/v51.1.0...v51.2.0) (2021-07-08)


### Features

* Add `toBeInTheDocument()` support with `@testing-library/jest-dom` ([1690b88](https://github.com/cozy/cozy-ui/commit/1690b88))
* Add optional `icon` prop to `PushClientButton` ([23bc4ad](https://github.com/cozy/cozy-ui/commit/23bc4ad))
* Improve `PushClientButton` documentation ([0ddd96b](https://github.com/cozy/cozy-ui/commit/0ddd96b))

# [51.1.0](https://github.com/cozy/cozy-ui/compare/v51.0.2...v51.1.0) (2021-07-08)


### Features

* Add disabled prop on SelectionBar actions ([0f32e9e](https://github.com/cozy/cozy-ui/commit/0f32e9e))

## [51.0.2](https://github.com/cozy/cozy-ui/compare/v51.0.1...v51.0.2) (2021-07-02)


### Bug Fixes

* Add label and data-testid to SelectionBar to improve tests ([e1458f1](https://github.com/cozy/cozy-ui/commit/e1458f1))
* Remove useless actionName condition on SelectionBar ([da54989](https://github.com/cozy/cozy-ui/commit/da54989))
* Remove useless fragment in SelectionBar and fix key missing ([1bc1ae4](https://github.com/cozy/cozy-ui/commit/1bc1ae4))

## [51.0.1](https://github.com/cozy/cozy-ui/compare/v51.0.0...v51.0.1) (2021-07-01)


### Bug Fixes

* SelectionBar use Mui Button and IconButton ([88ae168](https://github.com/cozy/cozy-ui/commit/88ae168))

# [51.0.0](https://github.com/cozy/cozy-ui/compare/v50.9.3...v51.0.0) (2021-06-29)


### Bug Fixes

* InvertedTheme success and action colors ([98ea26d](https://github.com/cozy/cozy-ui/commit/98ea26d))


### Features

* Replace our custom Checkbox by MUI checkbox API ([6724ccf](https://github.com/cozy/cozy-ui/commit/6724ccf))


### BREAKING CHANGES

* Checkbox no longer accept `name` prop

## [50.9.3](https://github.com/cozy/cozy-ui/compare/v50.9.2...v50.9.3) (2021-06-24)


### Bug Fixes

* Remove wide space between count and text in mobile SelectionBar ([783ebe0](https://github.com/cozy/cozy-ui/commit/783ebe0))

## [50.9.2](https://github.com/cozy/cozy-ui/compare/v50.9.1...v50.9.2) (2021-06-18)


### Bug Fixes

* Divider styles ([e03b9c7](https://github.com/cozy/cozy-ui/commit/e03b9c7))

## [50.9.1](https://github.com/cozy/cozy-ui/compare/v50.9.0...v50.9.1) (2021-06-18)


### Bug Fixes

* ReadCozyDataFromDOM can now deal with "boolean string" ([0b429e1](https://github.com/cozy/cozy-ui/commit/0b429e1))

# [50.9.0](https://github.com/cozy/cozy-ui/compare/v50.8.0...v50.9.0) (2021-06-10)


### Features

* Re-export core components from [@material-ui](https://github.com/material-ui) ([a191f58](https://github.com/cozy/cozy-ui/commit/a191f58))

# [50.8.0](https://github.com/cozy/cozy-ui/compare/v50.7.0...v50.8.0) (2021-06-10)


### Features

* Icon is not required for Empty component ([1ea8975](https://github.com/cozy/cozy-ui/commit/1ea8975))

# [50.7.0](https://github.com/cozy/cozy-ui/compare/v50.6.0...v50.7.0) (2021-06-08)


### Features

* Add an info modal to easily copy/paste icon code ([c2f7e4d](https://github.com/cozy/cozy-ui/commit/c2f7e4d))

# [50.6.0](https://github.com/cozy/cozy-ui/compare/v50.5.0...v50.6.0) (2021-06-07)


### Features

* **deps:** update dependency @material-ui/core to v4.11.4 ([#1827](https://github.com/cozy/cozy-ui/issues/1827)) ([a5b464b](https://github.com/cozy/cozy-ui/commit/a5b464b))

# [50.5.0](https://github.com/cozy/cozy-ui/compare/v50.4.0...v50.5.0) (2021-06-07)


### Features

* Add maintenance display ([8c135f7](https://github.com/cozy/cozy-ui/commit/8c135f7))

# [50.4.0](https://github.com/cozy/cozy-ui/compare/v50.3.0...v50.4.0) (2021-06-04)


### Features

* Add Edge-Chromium icon ([8b3b199](https://github.com/cozy/cozy-ui/commit/8b3b199))

# [50.3.0](https://github.com/cozy/cozy-ui/compare/v50.2.0...v50.3.0) (2021-05-31)


### Features

* Put styles as part of theme ([b1c13c5](https://github.com/cozy/cozy-ui/commit/b1c13c5))

# [50.2.0](https://github.com/cozy/cozy-ui/compare/v50.1.2...v50.2.0) (2021-05-24)


### Features

* Add --sidebarHeight to expose the height of the bottom sidebar ([6af3549](https://github.com/cozy/cozy-ui/commit/6af3549))
* Add Fab component ([0fe4744](https://github.com/cozy/cozy-ui/commit/0fe4744))

## [50.1.2](https://github.com/cozy/cozy-ui/compare/v50.1.1...v50.1.2) (2021-05-12)


### Bug Fixes

* TileTitle ([#1821](https://github.com/cozy/cozy-ui/issues/1821)) ([246a196](https://github.com/cozy/cozy-ui/commit/246a196))

## [50.1.1](https://github.com/cozy/cozy-ui/compare/v50.1.0...v50.1.1) (2021-05-11)


### Bug Fixes

* CozyDialogs Title width and close button ([bc434d4](https://github.com/cozy/cozy-ui/commit/bc434d4))

# [50.1.0](https://github.com/cozy/cozy-ui/compare/v50.0.0...v50.1.0) (2021-05-10)


### Features

* Ability to remove a notification programmatically ([70f9644](https://github.com/cozy/cozy-ui/commit/70f9644))
* Support for Infinity as a duration ([fb4279c](https://github.com/cozy/cozy-ui/commit/fb4279c))

# [50.0.0](https://github.com/cozy/cozy-ui/compare/v49.5.0...v50.0.0) (2021-05-07)


### Features

* Remove preloader from AppIcon, use client getIconURL instead ([faca1b1](https://github.com/cozy/cozy-ui/commit/faca1b1))


### BREAKING CHANGES

* AppIcon has now two more props `type` and `priority` to match client.getIconURL() API. By default, and without any fetchIcon fn as prop, AppIcon will fetch icon from apps, so the `type` must be specified as `konnector` if necessary. Note that `type` (`app` by default) and `priority` (`stack` by default) are not required.

# [49.5.0](https://github.com/cozy/cozy-ui/compare/v49.4.0...v49.5.0) (2021-04-23)


### Bug Fixes

* Change order display search checkbox ([4c8b4bf](https://github.com/cozy/cozy-ui/commit/4c8b4bf))
* Split hasSearch (decoupled of displaySearchResultItem) ([66ebde9](https://github.com/cozy/cozy-ui/commit/66ebde9))


### Features

* Add search input ([9a13d93](https://github.com/cozy/cozy-ui/commit/9a13d93))

# [49.4.0](https://github.com/cozy/cozy-ui/compare/v49.3.0...v49.4.0) (2021-04-21)


### Features

* Add file-type-note icon ([3af6319](https://github.com/cozy/cozy-ui/commit/3af6319))

# [49.3.0](https://github.com/cozy/cozy-ui/compare/v49.2.0...v49.3.0) (2021-04-19)


### Features

* Replace Slide icon by vertical one ([0924978](https://github.com/cozy/cozy-ui/commit/0924978))

# [49.2.0](https://github.com/cozy/cozy-ui/compare/v49.1.1...v49.2.0) (2021-04-19)


### Features

* Viewer - add support for only office ([1325b1e](https://github.com/cozy/cozy-ui/commit/1325b1e))

## [49.1.1](https://github.com/cozy/cozy-ui/compare/v49.1.0...v49.1.1) (2021-04-08)


### Bug Fixes

* Prevent default when opening intent dialog ([34f3712](https://github.com/cozy/cozy-ui/commit/34f3712))

# [49.1.0](https://github.com/cozy/cozy-ui/compare/v49.0.4...v49.1.0) (2021-04-08)


### Features

* Show alerts on top of mui dialogs ([9299426](https://github.com/cozy/cozy-ui/commit/9299426))

## [49.0.4](https://github.com/cozy/cozy-ui/compare/v49.0.3...v49.0.4) (2021-04-08)


### Bug Fixes

* UploadQueue header style ([55b0995](https://github.com/cozy/cozy-ui/commit/55b0995))

## [49.0.3](https://github.com/cozy/cozy-ui/compare/v49.0.2...v49.0.3) (2021-04-02)


### Bug Fixes

* Spacing in AppSections ([50a22dd](https://github.com/cozy/cozy-ui/commit/50a22dd))

## [49.0.2](https://github.com/cozy/cozy-ui/compare/v49.0.1...v49.0.2) (2021-04-02)


### Bug Fixes

* Typo in CSS styleguide ([ecc579b](https://github.com/cozy/cozy-ui/commit/ecc579b))

## [49.0.1](https://github.com/cozy/cozy-ui/compare/v49.0.0...v49.0.1) (2021-04-01)


### Bug Fixes

* Fix closing issue with the cross on iOS ([7da01d4](https://github.com/cozy/cozy-ui/commit/7da01d4))

# [49.0.0](https://github.com/cozy/cozy-ui/compare/v48.0.0...v49.0.0) (2021-03-31)


### Bug Fixes

* Use colors from JSON palette for PasswordExample ([523dafa](https://github.com/cozy/cozy-ui/commit/523dafa))
* Use colors from JSON palette in styleguide ([353e2a4](https://github.com/cozy/cozy-ui/commit/353e2a4))
* Use theme colors for Chip ([9126b54](https://github.com/cozy/cozy-ui/commit/9126b54))
* Use theme colors for Chip ([dbc43a5](https://github.com/cozy/cozy-ui/commit/dbc43a5))


### Features

* Remove absolute colors from utility classes ([2964d8f](https://github.com/cozy/cozy-ui/commit/2964d8f))
* Remove css custom properties for absolute colors ([5fd473a](https://github.com/cozy/cozy-ui/commit/5fd473a)), closes [#EEF5](https://github.com/cozy/cozy-ui/issues/EEF5) [#C2](https://github.com/cozy/cozy-ui/issues/C2) [#1FA8F1](https://github.com/cozy/cozy-ui/issues/1FA8F1) [#0](https://github.com/cozy/cozy-ui/issues/0) [#DEF7E7](https://github.com/cozy/cozy-ui/issues/DEF7E7) [#3DA67](https://github.com/cozy/cozy-ui/issues/3DA67) [#FFC644](https://github.com/cozy/cozy-ui/issues/FFC644) [#FFAE5](https://github.com/cozy/cozy-ui/issues/FFAE5) [#FF7F1](https://github.com/cozy/cozy-ui/issues/FF7F1) [#FC6D00](https://github.com/cozy/cozy-ui/issues/FC6D00) [#FD7461](https://github.com/cozy/cozy-ui/issues/FD7461) [#C2ADF4](https://github.com/cozy/cozy-ui/issues/C2ADF4) [#6984](https://github.com/cozy/cozy-ui/issues/6984) [#7F6](https://github.com/cozy/cozy-ui/issues/7F6) [#9169F2](https://github.com/cozy/cozy-ui/issues/9169F2) [#B449E7](https://github.com/cozy/cozy-ui/issues/B449E7) [#922BC2](https://github.com/cozy/cozy-ui/issues/922BC2)
* Use absolute variables in palette.js ([4bdc0a0](https://github.com/cozy/cozy-ui/commit/4bdc0a0))
* Use correct variables ([21b28f3](https://github.com/cozy/cozy-ui/commit/21b28f3))
* Use material ui names for intention colors ([7e809ef](https://github.com/cozy/cozy-ui/commit/7e809ef))
* Use palette for absolute colors ([3634eb4](https://github.com/cozy/cozy-ui/commit/3634eb4))


### BREAKING CHANGES

* 'u-valid' and 'u-warn' intention utility classes have
been renamed to be closer to material ui names.

* `u-valid` -> `u-success`
* `u-warn` -> `u-warning`
* `u-danger` -> `u-error`

You can use the following codemod commands to update your project:

```
codemod --extension js,jsx,styl,md,snap '\bu-danger\b' 'u-error';
codemod --extension js,jsx,styl,md,snap '\bu-warn\b' 'u-warning';
codemod --extension js,jsx,styl,md,snap '\bu-valid\b' 'u-success';
```

See
https://material-ui.com/customization/palette/#palette-colors
* Some utility classes for text/background color have
been removed, please use semantic utility classes instead.

- u-primaryColor
- u-secondaryColor
- u-bg-primaryColor
- u-bg-secondaryColor
- u-warning
- u-error
- u-success
* Some CSS custom variables for colors have been removed,
you are encouraged to import directly the colors from
cozy-ui/stylus/settings/palette if necessary.

Here is the list of colors that have been removed:

# [48.0.0](https://github.com/cozy/cozy-ui/compare/v47.6.0...v48.0.0) (2021-03-25)


### Bug Fixes

* Remove withPrefix function, that no longer seems necessary ([15a6c6f](https://github.com/cozy/cozy-ui/commit/15a6c6f))
* Use SVGr icon for example ([696e9a9](https://github.com/cozy/cozy-ui/commit/696e9a9))


### Features

* Upgrade react-select ([f60569e](https://github.com/cozy/cozy-ui/commit/f60569e)), closes [/github.com/JedWatson/react-select/blob/master/packages/react-select/CHANGELOG.md#400](https://github.com//github.com/JedWatson/react-select/blob/master/packages/react-select/CHANGELOG.md/issues/400) [/github.com/JedWatson/react-select/blob/master/packages/react-select/CHANGELOG.md#300](https://github.com//github.com/JedWatson/react-select/blob/master/packages/react-select/CHANGELOG.md/issues/300)


### BREAKING CHANGES

* react-select is upgraded from v2 to v4. It should
not impact you but you should be extra careful around the areas that
use a select.

Values are now normalized: https://github.com/JedWatson/react-select/pull/4339
The onChange callback receives values that are more coherent now (array
if multi select, value is always an array (can be empty), if a single
select, value can be object/null.

# [47.6.0](https://github.com/cozy/cozy-ui/compare/v47.5.1...v47.6.0) (2021-03-25)


### Features

* Viewer on tablet is now like on mobile ([9d28cf8](https://github.com/cozy/cozy-ui/commit/9d28cf8))

## [47.5.1](https://github.com/cozy/cozy-ui/compare/v47.5.0...v47.5.1) (2021-03-24)


### Bug Fixes

* Add data-testid on Viewer Toolbar ([ce51422](https://github.com/cozy/cozy-ui/commit/ce51422))
* PdfMobileViewer shows thumbnail on mobile and correct error ([ad5840b](https://github.com/cozy/cozy-ui/commit/ad5840b))

# [47.5.0](https://github.com/cozy/cozy-ui/compare/v47.4.0...v47.5.0) (2021-03-23)


### Features

* Ability to remove color on password example ([643cec2](https://github.com/cozy/cozy-ui/commit/643cec2))

# [47.4.0](https://github.com/cozy/cozy-ui/compare/v47.3.0...v47.4.0) (2021-03-22)


### Features

* Add onFocus prop on Field component ([4f11a44](https://github.com/cozy/cozy-ui/commit/4f11a44))

# [47.3.0](https://github.com/cozy/cozy-ui/compare/v47.2.0...v47.3.0) (2021-03-18)


### Features

* Add bp provider in BarContextProvider ([8471f0d](https://github.com/cozy/cozy-ui/commit/8471f0d))

# [47.2.0](https://github.com/cozy/cozy-ui/compare/v47.1.0...v47.2.0) (2021-03-17)


### Features

* Better support for inverted theme in List ([49ba7a1](https://github.com/cozy/cozy-ui/commit/49ba7a1))
* Remove absolute color class and use same variable as IconButton ([a146c8e](https://github.com/cozy/cozy-ui/commit/a146c8e))

# [47.1.0](https://github.com/cozy/cozy-ui/compare/v47.0.1...v47.1.0) (2021-03-17)


### Bug Fixes

* Cancel height increase of modal header from back button ([f6a706d](https://github.com/cozy/cozy-ui/commit/f6a706d))
* Improve BarTitle ([7b6dbb5](https://github.com/cozy/cozy-ui/commit/7b6dbb5))
* NestedSelect would not show back button when navigating deeply ([e8a7d02](https://github.com/cozy/cozy-ui/commit/e8a7d02))


### Features

* Capacity for dialogs to be aligned to the top ([ad01c55](https://github.com/cozy/cozy-ui/commit/ad01c55))
* Relax dep pinning for deps ([029a2cc](https://github.com/cozy/cozy-ui/commit/029a2cc))

## [47.0.1](https://github.com/cozy/cozy-ui/compare/v47.0.0...v47.0.1) (2021-03-17)


### Bug Fixes

* Viewer toolbar back button position ([52864f7](https://github.com/cozy/cozy-ui/commit/52864f7))

# [47.0.0](https://github.com/cozy/cozy-ui/compare/v46.1.0...v47.0.0) (2021-03-16)


### Features

* Replace "role" of Viewer toolbar by "ref" ([32f1139](https://github.com/cozy/cozy-ui/commit/32f1139))


### BREAKING CHANGES

* There is no role anymore on Viewer toolbar
Since this is an invalid role.
Ref is useful to get the height value of this element

# [46.1.0](https://github.com/cozy/cozy-ui/compare/v46.0.0...v46.1.0) (2021-03-12)


### Bug Fixes

* Do not wait when screenshots process is frozen ([d012399](https://github.com/cozy/cozy-ui/commit/d012399))
* Invalid boolean prop passed to className ([f27bfdf](https://github.com/cozy/cozy-ui/commit/f27bfdf))


### Features

* Do not display icon when there is no icon ([5140e1d](https://github.com/cozy/cozy-ui/commit/5140e1d))
* Extract static props object ([f7370b6](https://github.com/cozy/cozy-ui/commit/f7370b6))
* NestedSelect row title text should be in body1 ([0e9e86a](https://github.com/cozy/cozy-ui/commit/0e9e86a))

# [46.0.0](https://github.com/cozy/cozy-ui/compare/v45.5.0...v46.0.0) (2021-03-11)


### Bug Fixes

* Use css --paperBackgroundColor instead of --paperColor ([fe63667](https://github.com/cozy/cozy-ui/commit/fe63667))
* Viewer toolbar have now a higher zIndex than the footer ([003b665](https://github.com/cozy/cozy-ui/commit/003b665))


### Features

* Viewer no longer enforce footer style ([189e894](https://github.com/cozy/cozy-ui/commit/189e894))


### BREAKING CHANGES

* The footer is now only a simple bottom container
The style have to be set in the application

# [45.5.0](https://github.com/cozy/cozy-ui/compare/v45.4.1...v45.5.0) (2021-03-11)


### Features

* Add test file for useCycle ([420a572](https://github.com/cozy/cozy-ui/commit/420a572))
* Add useCycle hook ([9607772](https://github.com/cozy/cozy-ui/commit/9607772))
* Improve useCycle and add doc ([8f76808](https://github.com/cozy/cozy-ui/commit/8f76808))

## [45.4.1](https://github.com/cozy/cozy-ui/compare/v45.4.0...v45.4.1) (2021-03-09)


### Bug Fixes

* Fix a typo in MUI palette ([#1759](https://github.com/cozy/cozy-ui/issues/1759)) ([5ca0a39](https://github.com/cozy/cozy-ui/commit/5ca0a39))

# [45.4.0](https://github.com/cozy/cozy-ui/compare/v45.3.0...v45.4.0) (2021-03-04)


### Features

* Add mobile actions footer on Viewer ([ef728d4](https://github.com/cozy/cozy-ui/commit/ef728d4))
* Add reply and shareIos icons ([9a22acc](https://github.com/cozy/cozy-ui/commit/9a22acc))

# [45.3.0](https://github.com/cozy/cozy-ui/compare/v45.2.0...v45.3.0) (2021-03-03)


### Features

* Mobile contact dialog via inverted/Paper MUI components ([b1e7648](https://github.com/cozy/cozy-ui/commit/b1e7648))
* Use Dialog instead of Modal for contact list ([0a46058](https://github.com/cozy/cozy-ui/commit/0a46058))

# [45.2.0](https://github.com/cozy/cozy-ui/compare/v45.1.0...v45.2.0) (2021-03-03)


### Bug Fixes

* Viewer FileIcon use now svgr icons ([8c26e2c](https://github.com/cozy/cozy-ui/commit/8c26e2c))


### Features

* Add pdf viewer on mobile for Viewer component ([3608587](https://github.com/cozy/cozy-ui/commit/3608587))
* Add tap/doubletap behavior management in Viewer ([edc3f51](https://github.com/cozy/cozy-ui/commit/edc3f51))
* Set Alerter z-index to alert-index even on mobile ([395b543](https://github.com/cozy/cozy-ui/commit/395b543))
* Upgrade cozy-client to 18.1.2 ([b9e033d](https://github.com/cozy/cozy-ui/commit/b9e033d))
* Viewer ImageLoader can now deal with "preview" size ([45c0f37](https://github.com/cozy/cozy-ui/commit/45c0f37))

# [45.1.0](https://github.com/cozy/cozy-ui/compare/v45.0.0...v45.1.0) (2021-03-01)


### Bug Fixes

* CozyDialog Title should have ellipsis with long text ([ed7022f](https://github.com/cozy/cozy-ui/commit/ed7022f))
* Revert travis and deploy modification ([4ca25a7](https://github.com/cozy/cozy-ui/commit/4ca25a7))
* Viewer isMobile based on breakpoint, not device ([b488a69](https://github.com/cozy/cozy-ui/commit/b488a69))
* Viewer spinners should not be white in mobile ([8deb594](https://github.com/cozy/cozy-ui/commit/8deb594))


### Features

* Ability to show maintenance ([29d3c2e](https://github.com/cozy/cozy-ui/commit/29d3c2e))
* Add filter grayscale utility class to styleguide ([043ae4f](https://github.com/cozy/cozy-ui/commit/043ae4f))
* Have the option of not having a layout ([f42d40c](https://github.com/cozy/cozy-ui/commit/f42d40c))
* IntentIframe can receive props to be tweaked ([54be890](https://github.com/cozy/cozy-ui/commit/54be890))
* Use semantic colors for wizard ([2423b5c](https://github.com/cozy/cozy-ui/commit/2423b5c))

# [45.0.0](https://github.com/cozy/cozy-ui/compare/v44.10.1...v45.0.0) (2021-02-17)

### Bug Fixes

* Correct margin for left radio in nested modal ([6a29d34](https://github.com/cozy/cozy-ui/commit/6a29d34))
* Dense should be used instead of textDense ([c2ce5cf](https://github.com/cozy/cozy-ui/commit/c2ce5cf))
* Do not stretch small screenshots ([f6a3d51](https://github.com/cozy/cozy-ui/commit/f6a3d51))
* Forward ref to transition component ([721cde0](https://github.com/cozy/cozy-ui/commit/721cde0))
* Prop has been renamed (caused warnings in the console in harvest) ([4717b00](https://github.com/cozy/cozy-ui/commit/4717b00))
* Remove CSS prop to keep old behavior ([0a09c4f](https://github.com/cozy/cozy-ui/commit/0a09c4f))
* Set text-transform to uppercase to keep old behacvior ([a7161df](https://github.com/cozy/cozy-ui/commit/a7161df))
* Small tweaks to text field to match with previous screenshots ([9f4baf8](https://github.com/cozy/cozy-ui/commit/9f4baf8))
* Switch thumb is white even when disabled ([d5d44ae](https://github.com/cozy/cozy-ui/commit/d5d44ae))
* Tweak example since spacing API has changed for Grid ([118b99a](https://github.com/cozy/cozy-ui/commit/118b99a))
* Tweak example to use variant='inset' instead of inset for Dividers ([4e98c18](https://github.com/cozy/cozy-ui/commit/4e98c18))
* Tweaks to badge for it to work like before ([a0292a6](https://github.com/cozy/cozy-ui/commit/a0292a6))
* Tweaks to Variants to show as before ([0989b32](https://github.com/cozy/cozy-ui/commit/0989b32))


### Features

* Ability for screenshots command to be launched against a server ([2f4f9bf](https://github.com/cozy/cozy-ui/commit/2f4f9bf))
* Add BreakpointsProvider ([badbd38](https://github.com/cozy/cozy-ui/commit/badbd38))
* Add embryo of local Argos ([0c0d304](https://github.com/cozy/cozy-ui/commit/0c0d304))
* Add log ([839ce44](https://github.com/cozy/cozy-ui/commit/839ce44))
* Add pixelmatch server ([20d4331](https://github.com/cozy/cozy-ui/commit/20d4331))
* Allow screenshots of different heights to be compared ([5e8e14c](https://github.com/cozy/cozy-ui/commit/5e8e14c))
* Correct style for inverted switch ([4cf2d31](https://github.com/cozy/cozy-ui/commit/4cf2d31))
* DateMonthPicker uses useI18n instead of translate ([4adc5a6](https://github.com/cozy/cozy-ui/commit/4adc5a6))
* Disable MUI v4 new styles to keep old behavior ([ad4248e](https://github.com/cozy/cozy-ui/commit/ad4248e))
* Double the selector to increase specificity ([cd9c228](https://github.com/cozy/cozy-ui/commit/cd9c228))
* Force caption to display as block ([b581e7a](https://github.com/cozy/cozy-ui/commit/b581e7a))
* Only support url argument for --styleguide-url ([a1f1818](https://github.com/cozy/cozy-ui/commit/a1f1818))
* Pixelmatch server crashes if folders are not set up ([90daa1c](https://github.com/cozy/cozy-ui/commit/90daa1c))
* Remove accordion styles from build ([f1f8c02](https://github.com/cozy/cozy-ui/commit/f1f8c02))
* Remove touch ripples from snapshots ([0930c45](https://github.com/cozy/cozy-ui/commit/0930c45))
* Rename ExpansionPanel into Accordion and add icon in theme ([9640ffa](https://github.com/cozy/cozy-ui/commit/9640ffa))
* Replace CSS vars for colors in overrides by theme colors ([6c5c664](https://github.com/cozy/cozy-ui/commit/6c5c664))
* Small tweaks on Accordion theme ([7937316](https://github.com/cozy/cozy-ui/commit/7937316))
* Tweak ExpansionPanel to match previous screenshots ([8fef825](https://github.com/cozy/cozy-ui/commit/8fef825))
* Tweak Infos close button to match previous screenshot ([432d46c](https://github.com/cozy/cozy-ui/commit/432d46c))
* Tweak Switch after Mui update ([155ce8a](https://github.com/cozy/cozy-ui/commit/155ce8a))
* Tweak Tooltip after mui v4 update ([663de0b](https://github.com/cozy/cozy-ui/commit/663de0b))
* Tweaks NestedSelect to better match previous screenshots ([81d811d](https://github.com/cozy/cozy-ui/commit/81d811d))
* Update snapshots ([3a3c394](https://github.com/cozy/cozy-ui/commit/3a3c394))
* Update to muiv4 ([2b3402f](https://github.com/cozy/cozy-ui/commit/2b3402f))
* Use a Typography inside CozyTheme otherwise text is white ([cabd63b](https://github.com/cozy/cozy-ui/commit/cabd63b))
* Use Dialog instead of Modal for NestedSelectModal ([a032a34](https://github.com/cozy/cozy-ui/commit/a032a34))
* Use Dialog instead of Modal in DateMonthPicker ([c99a90c](https://github.com/cozy/cozy-ui/commit/c99a90c))
* Use Divider from MUI in NestedSelectModal ([948d537](https://github.com/cozy/cozy-ui/commit/948d537))
* Use List/ListItemText/ListItemIcon to implement NestedSelect rows ([d3fe37b](https://github.com/cozy/cozy-ui/commit/d3fe37b))
* Use setTimeout for example to work in jsdom ([04a63a8](https://github.com/cozy/cozy-ui/commit/04a63a8))
* Use useBreakpoints instead of withBreakpoints ([1d94e8f](https://github.com/cozy/cozy-ui/commit/1d94e8f))
* Use useBreakpoints instead of withBreakpoints ([12f92ef](https://github.com/cozy/cozy-ui/commit/12f92ef))


### BREAKING CHANGES

* You need to replace ExpansionPanel by Accordion, the
API has not changed.

ExpansionPanel -> Accordion
ExpansionPanelSummary -> AccordionSummary
ExpansionPanelDetails -> AccordionDetails

The icon is added since this is the default styles in Banks
* @material-ui/core@4 is now necessary

# [44.14.0](https://github.com/cozy/cozy-ui/compare/v44.13.0...v44.14.0) (2021-03-01)

### Features

* Add filter grayscale utility class to styleguide ([043ae4f](https://github.com/cozy/cozy-ui/commit/043ae4f))

# [44.13.0](https://github.com/cozy/cozy-ui/compare/v44.12.0...v44.13.0) (2021-02-25)


### Bug Fixes

* Viewer spinners should not be white in mobile ([8deb594](https://github.com/cozy/cozy-ui/commit/8deb594))


### Features

* Ability to show maintenance ([29d3c2e](https://github.com/cozy/cozy-ui/commit/29d3c2e))

# [44.12.0](https://github.com/cozy/cozy-ui/compare/v44.11.0...v44.12.0) (2021-02-24)


### Features

* Have the option of not having a layout ([f42d40c](https://github.com/cozy/cozy-ui/commit/f42d40c))

# [44.11.0](https://github.com/cozy/cozy-ui/compare/v44.10.1...v44.11.0) (2021-02-22)


### Bug Fixes

* CozyDialog Title should have ellipsis with long text ([ed7022f](https://github.com/cozy/cozy-ui/commit/ed7022f))
* Revert travis and deploy modification ([4ca25a7](https://github.com/cozy/cozy-ui/commit/4ca25a7))
* Viewer isMobile based on breakpoint, not device ([b488a69](https://github.com/cozy/cozy-ui/commit/b488a69))


### Features

* IntentIframe can receive props to be tweaked ([54be890](https://github.com/cozy/cozy-ui/commit/54be890))
* Use semantic colors for wizard ([2423b5c](https://github.com/cozy/cozy-ui/commit/2423b5c))

## [44.10.1](https://github.com/cozy/cozy-ui/compare/v44.10.0...v44.10.1) (2021-02-16)


### Bug Fixes

* Viewer doc example for ImageLoader ([9619ff2](https://github.com/cozy/cozy-ui/commit/9619ff2))

# [44.10.0](https://github.com/cozy/cozy-ui/compare/v44.9.0...v44.10.0) (2021-02-15)


### Features

* Remove Viewer dark prop ([f6f37e8](https://github.com/cozy/cozy-ui/commit/f6f37e8))
* Viewer has now white background on mobile ([5a316ff](https://github.com/cozy/cozy-ui/commit/5a316ff))
* Viewer toolbar is now white with grey back button on mobile ([ea54036](https://github.com/cozy/cozy-ui/commit/ea54036))

# [44.9.0](https://github.com/cozy/cozy-ui/compare/v44.8.0...v44.9.0) (2021-02-12)


### Features

* Add IntentDialogOpener and depreciate IntentOpener ([41af7bc](https://github.com/cozy/cozy-ui/commit/41af7bc))
* Depreciate IntentModal, use Dialog with IntentIframe instead ([ab710a3](https://github.com/cozy/cozy-ui/commit/ab710a3))

# [44.8.0](https://github.com/cozy/cozy-ui/compare/v44.7.0...v44.8.0) (2021-02-08)


### Features

* Publish next-major branch ([43ad834](https://github.com/cozy/cozy-ui/commit/43ad834))
* Update semantic release ([1f4b818](https://github.com/cozy/cozy-ui/commit/1f4b818))

# [44.7.0](https://github.com/cozy/cozy-ui/compare/v44.6.0...v44.7.0) (2021-02-03)


### Bug Fixes

* Use svgr icons in examples ([b9da282](https://github.com/cozy/cozy-ui/commit/b9da282))
* Use svgr icons in examples ([321f7b4](https://github.com/cozy/cozy-ui/commit/321f7b4))


### Features

* Change argos upload commands not to shadow argos CLI ([b010537](https://github.com/cozy/cozy-ui/commit/b010537))
* Update argos CLI ([f96cc48](https://github.com/cozy/cozy-ui/commit/f96cc48))
* Use svgr icons ([47370b9](https://github.com/cozy/cozy-ui/commit/47370b9))
* Use svgr icons in examples ([0b5fa4a](https://github.com/cozy/cozy-ui/commit/0b5fa4a))

# [44.6.0](https://github.com/cozy/cozy-ui/compare/v44.5.0...v44.6.0) (2021-02-01)


### Bug Fixes

* Adjust examples ([fcdcb7a](https://github.com/cozy/cozy-ui/commit/fcdcb7a))


### Features

* Better example for mui buttons ([e534560](https://github.com/cozy/cozy-ui/commit/e534560))

# [44.5.0](https://github.com/cozy/cozy-ui/compare/v44.4.0...v44.5.0) (2021-02-01)


### Bug Fixes

* Wrap close button in div since IconButton doesn't deal with layout ([49a5bf9](https://github.com/cozy/cozy-ui/commit/49a5bf9))


### Features

* Adjust margins for Dialog close button ([4bc03f4](https://github.com/cozy/cozy-ui/commit/4bc03f4))
* Better example for IconButton ([316aa9c](https://github.com/cozy/cozy-ui/commit/316aa9c))
* Props forwarding for Infos/InfosCarrousel children ([0eeebf7](https://github.com/cozy/cozy-ui/commit/0eeebf7))
* Use IconButton for Infos dismissAction button ([1abadf2](https://github.com/cozy/cozy-ui/commit/1abadf2))

# [44.4.0](https://github.com/cozy/cozy-ui/compare/v44.3.0...v44.4.0) (2021-01-29)


### Features

* Add deprecation mentions on Menu and RaisedList ([c48e2f6](https://github.com/cozy/cozy-ui/commit/c48e2f6))
* Breadcrumbs use Typography and IconButton ([69a9563](https://github.com/cozy/cozy-ui/commit/69a9563))
* Deprecate RaisedList as it can be made with List & Paper ([7c10639](https://github.com/cozy/cozy-ui/commit/7c10639))
* Move material ui components to normal navigation ([31b8cc5](https://github.com/cozy/cozy-ui/commit/31b8cc5))
* Reorganize styleguide sections ([dbc4747](https://github.com/cozy/cozy-ui/commit/dbc4747))

# [44.3.0](https://github.com/cozy/cozy-ui/compare/v44.2.0...v44.3.0) (2021-01-28)


### Bug Fixes

* Use icon component for fallback icon in AppIcon ([e61c62b](https://github.com/cozy/cozy-ui/commit/e61c62b))


### Features

* Ability to use lib locales without withLocales ([ab5d70d](https://github.com/cozy/cozy-ui/commit/ab5d70d))

# [44.2.0](https://github.com/cozy/cozy-ui/compare/v44.1.3...v44.2.0) (2021-01-25)


### Features

* Read tracking setting from data-cozy or data-cozy-tracking ([e2298db](https://github.com/cozy/cozy-ui/commit/e2298db))

## [44.1.3](https://github.com/cozy/cozy-ui/compare/v44.1.2...v44.1.3) (2021-01-21)


### Bug Fixes

* Destructure prop to avoid passing it to children ([c39691a](https://github.com/cozy/cozy-ui/commit/c39691a))

## [44.1.2](https://github.com/cozy/cozy-ui/compare/v44.1.1...v44.1.2) (2021-01-19)


### Bug Fixes

* Viewer gives `file` to children rather than `currentFile` ([e4593c0](https://github.com/cozy/cozy-ui/commit/e4593c0))

## [44.1.1](https://github.com/cozy/cozy-ui/compare/v44.1.0...v44.1.1) (2021-01-18)


### Bug Fixes

* Viewer now uses UI locales only for specific component ([664f523](https://github.com/cozy/cozy-ui/commit/664f523))

# [44.1.0](https://github.com/cozy/cozy-ui/compare/v44.0.5...v44.1.0) (2021-01-15)


### Features

* Add bill icon ([3ec5e02](https://github.com/cozy/cozy-ui/commit/3ec5e02))

## [44.0.5](https://github.com/cozy/cozy-ui/compare/v44.0.4...v44.0.5) (2021-01-14)


### Bug Fixes

* Viewer exemple use small stack spacing ([341da41](https://github.com/cozy/cozy-ui/commit/341da41))
* Viewer title use now ellipsis ([9f3c1ca](https://github.com/cozy/cozy-ui/commit/9f3c1ca))
* Viewer toolbar no longer cover content ([a097d36](https://github.com/cozy/cozy-ui/commit/a097d36))

## [44.0.4](https://github.com/cozy/cozy-ui/compare/v44.0.3...v44.0.4) (2021-01-13)


### Bug Fixes

* Viewer panelInfoProps defaultProps ([16312c5](https://github.com/cozy/cozy-ui/commit/16312c5))

## [44.0.3](https://github.com/cozy/cozy-ui/compare/v44.0.2...v44.0.3) (2021-01-13)


### Bug Fixes

* Viewer defaultProps and Toolbar title position ([de74342](https://github.com/cozy/cozy-ui/commit/de74342))

## [44.0.2](https://github.com/cozy/cozy-ui/compare/v44.0.1...v44.0.2) (2021-01-13)


### Bug Fixes

* OnClose is not required for CozyDialogs ([79bef46](https://github.com/cozy/cozy-ui/commit/79bef46))

## [44.0.1](https://github.com/cozy/cozy-ui/compare/v44.0.0...v44.0.1) (2021-01-13)


### Bug Fixes

* CozyDialog back button use now IconButton ([e2a8c72](https://github.com/cozy/cozy-ui/commit/e2a8c72))
* CozyTheme doesn't add markup inside Dialog children ([48428c8](https://github.com/cozy/cozy-ui/commit/48428c8))
* Remove trainling spaces in CozyDialog readme ([311ae74](https://github.com/cozy/cozy-ui/commit/311ae74))

# [44.0.0](https://github.com/cozy/cozy-ui/compare/v43.6.0...v44.0.0) (2021-01-13)


### Bug Fixes

* Fix Color icons ([36c92d5](https://github.com/cozy/cozy-ui/commit/36c92d5))


### Features

* Ability to override alert info color via CSS variable ([18568dd](https://github.com/cozy/cozy-ui/commit/18568dd))
* Error background loses "light" ([ab25f3c](https://github.com/cozy/cozy-ui/commit/ab25f3c))
* Remove fill color ([c5190df](https://github.com/cozy/cozy-ui/commit/c5190df))


### BREAKING CHANGES

* Removing of fill color to can specify it

# [43.6.0](https://github.com/cozy/cozy-ui/compare/v43.5.0...v43.6.0) (2021-01-12)


### Features

* Add arrow on Tooltip and change style ([b3b59a7](https://github.com/cozy/cozy-ui/commit/b3b59a7))

# [43.5.0](https://github.com/cozy/cozy-ui/compare/v43.4.0...v43.5.0) (2021-01-11)


### Bug Fixes

* Border color as a variable ([dc9257a](https://github.com/cozy/cozy-ui/commit/dc9257a))


### Features

* Popover supports inverted theme ([e321e37](https://github.com/cozy/cozy-ui/commit/e321e37))

# [43.4.0](https://github.com/cozy/cozy-ui/compare/v43.3.0...v43.4.0) (2021-01-11)


### Bug Fixes

* Add gutterBottom to ActionMenu ([387162f](https://github.com/cozy/cozy-ui/commit/387162f))


### Features

* Use dividerColor for card border color ([76260a3](https://github.com/cozy/cozy-ui/commit/76260a3))

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
