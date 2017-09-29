Provides an easy way to use SVG icons included in Cozy-UI as well
as your custom icons.

### Cozy Icons

The icons should be colorable but for that, they need to have no fill
property. Work is in progress to remove the fill attribute on our icons.

```
const icons = require('../../src/icons');
const colors = ['red', 'blue', 'yellow', 'green']
let i = 0;

<div style={{ background: '#ccc'}}>{
  Object.keys(icons).map(icon => <span>
    { icon } : <Icon icon={ icon } color={ colors[i++ % colors.length] } /><br/>
  </span>) }
</div>
```

### Custom icons

You can also directly import an SVG to use it. You MUST use svg-sprite-loader
to load your SVG (either explicitly or, better, implicitly in your `webpack.config.js`).

⚠️ Do not put a `fill` property on your icon

```jsx static

import myIcon from 'my-icon.svg' 

<Icon icon={ myIcon } width='2rem' height='2rem' color='purple' />
```
