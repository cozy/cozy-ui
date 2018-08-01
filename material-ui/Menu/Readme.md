Un test simple

```js
const Simple = require('./Simple');

<Simple />
```

Un composant de material-ui

```js
const CssBaseline = require('@material-ui/core/CssBaseline');
const { MuiThemeProvider } = require('@material-ui/core/styles');
const SimpleMenu = require('./SimpleMenu');
const { theme } = require('../cozy-theme');

<MuiThemeProvider theme={theme}>
  <CssBaseline />
  <SimpleMenu />
</MuiThemeProvider>
```
