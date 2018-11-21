Provides an easy way to use SVG icons included in Cozy-UI as well
as your custom icons.

⚠️ When using `Icon`, the icons are supposed to be already loaded via an 
SVG sprite loaded in your DOM. `cozy-ui` ships with built-in icons that you can include via `Sprite`. See the example below for how to include
`Sprite`. `Sprite` can for example be included in the main `Layout` of
your applicaiton.

### Available icons

```
const Sprite = require('./Sprite').default;
const colors = ['dodgerBlue', '#08b442', 'barney', '#F52D2D', '#FF962F', 'paleGrey']
let i = 0
const availableIcons = ['album-add', 'album-remove', 'album', 'arrow', 'back', 'bottom-select', 'bottom', 'calendar', 'check 2', 'check-circleless', 'check', 'clock', 'connector', 'cozy-negative', 'cozy', 'cross-white', 'cross', 'cube', 'dash', 'delete-grey08', 'delete', 'destroy', 'device-laptop', 'dots-white', 'dots', 'download', 'exchange', 'file-none', 'file', 'folder', 'forward', 'gear', 'help', 'hourglass', 'image', 'moveto', 'openwith', 'paperplane', 'people', 'phone-download', 'plus', 'rename', 'restore', 'share-grey08', 'share', 'small-arrow', 'spinner-blue', 'spinner-grey', 'spinner-red', 'spinner-white', 'spinner', 'top-select', 'top', 'trash', 'upload-grey08', 'upload', 'warn', 'warning'];

<div style={{ fontSize: '2rem', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
  <Sprite />
  {
  availableIcons.map(icon => <div key={icon} style={{ textAlign: 'center'}}>
      <Icon icon={ icon } color={ colors[i++ % colors.length] }/>
      <p style={{ fontSize: '1rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{ icon }</p>
    </div>
  )}
</div>
```

### Transform properties

Use `spin` and `rotate` if you want you to turn your icons upside down 🙃.

```
<div>
  <Icon icon='spinner' color='#0bda51' spin/>{'\u00A0'}
  <Icon icon='forward' color='#c30017' rotate={45}/>
</div>
```

### Custom icons

You can also directly import an SVG to use it. You MUST use svg-sprite-loader
to load your SVG (either explicitly or, better, implicitly in your `webpack.config.js`).

⚠️ Do not put a `fill` property on your icon

```jsx static

import myIcon from 'my-icon.svg'

<Icon icon={ myIcon } width={32} height={32} color='purple' />
```

### Props forwarding

Icon forwards unknown props to the underlying `<svg />` element.

```
<div>
  <Icon icon='warning' onClick={() => alert('Be careful !')} width={32} height={32} color='purple' /><span>← Click it</span>
</div>
```
