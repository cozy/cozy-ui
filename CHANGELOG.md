# Change Log
All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- New placeholders for buttons : $button--secondary, $button--danger, $button--danger-outline, $button--highlight

### Changed
- Renamed alert buttons
- Spinners are not centered by default anymore
- Moved forms.styl from ui-app folder to ui-components for more consistency
- depthlimit increase to 4 because Stylint treats its depth oddly

### Removed
- Removed buttons classes .primary, .secondary, .danger, .danger-outline, .hightlight
- Removed placeholders $icon-spinner-small-blue, build your own options instead
- Removed Drawer layout that wasn't functional anyway

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


[Unreleased]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta6...HEAD
[3.0.0-beta6]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta5...3.0.0-beta6
[3.0.0-beta5]: https://github.com/cozy/cozy-ui/compare/3.0.0-beta4...3.0.0-beta5
