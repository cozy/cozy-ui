Un test simple

```js
const Simple = require('./Simple').default;

<Simple />
```

Un composant de material-ui

```js
const CssBaseline = require('@material-ui/core/CssBaseline').default;
const { MuiThemeProvider } = require('@material-ui/core/styles');

const SimpleMenu = require('.').default;
const { theme } = require('../cozy-theme');

<MuiThemeProvider theme={theme}>
  <CssBaseline />
  <SimpleMenu />
</MuiThemeProvider>
```
