Provides an easy way to use SVG icons included in Cozy-UI as well
as your custom icons.

⚠️ When using `Icon`, the icons are supposed to be already loaded via an
SVG sprite loaded in your DOM. `cozy-ui` ships with built-in icons that you can include via `Sprite`. See the example below for how to include
`Sprite`. `Sprite` can for example be included in the main `Layout` of
your applicaiton.

### Available illustrations icons (colors fixed)

```
const Sprite = require('./Sprite').default;
const availableIcons = ['bottom-select', 'check-white', 'cloud-broken', 'cozy-logo', 'cozy', 'cross-white', 'dash-white', 'device-laptop', 'device-phone', 'device-tablet', 'dots-white', 'file-type-audio', 'file-type-bin', 'file-type-code', 'file-type-files', 'file-type-folder', 'file-type-image', 'file-type-pdf', 'file-type-sheet', 'file-type-slide', 'file-type-text', 'file-type-video', 'file-type-zip', 'google', 'share-grey08'];

<div style={{ fontSize: '2rem', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
  <Sprite />
  {
  availableIcons.map(icon => <div key={icon} style={{ textAlign: 'center'}}>
      <Icon icon={ icon }/>
      <p style={{ fontSize: '1rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{ icon }</p>
    </div>
  )}
</div>
```

### Available UI icons

```
const Sprite = require('./Sprite').default;
const colors = ['#297EF2', '#08b442', '#B449E7', '#F52D2D', '#FF962F']
let i = 0
const availableIcons = ['album-add', 'album-remove', 'album', 'answer', 'apple', 'archive', 'attachment', 'attention', 'back', 'bank', 'banking-add', 'banking', 'bell', 'bottom', 'browser-brave', 'browser-chrome', 'browser-duckduckgo', 'browser-edge', 'browser-firefox', 'browser-ie', 'browser-opera', 'browser-safari', 'burger', 'calendar', 'camera', 'categories', 'certified', check-circle', 'check-list', 'check', 'circle-filled', 'clock', 'collect', 'comment', 'company', 'compass', 'connector', 'contract', 'contrast', 'cozy-laugh', 'cozy-negative', 'credit', 'crop', 'cross-small', 'cross', 'cube', 'dash', 'dashboard', 'data-control', 'debit', 'devices', 'dots', 'down', 'download', 'dropdown-close', 'dropdown-open', 'dropdown', 'dropup', 'email', 'eu', 'euro', 'exchange', 'eye-closed', 'eye', 'file-new', 'file-none', 'file-outline', 'file', 'filter', 'fingerprint', 'flag-outlined', 'flag', 'flash-auto', 'flashlight', 'folder-add', 'folder', 'forbidden', 'forward', 'from-user', 'gear', 'globe', 'graph-circle', 'grid', 'group-list', 'groups', 'heart', 'help', 'history', 'home', 'hourglass', 'image', 'info-outlined', 'info', 'key', 'laptop', 'lightbulb', 'link', 'list', 'location', 'lock', 'logout', 'magic-trick', 'magnet', 'magnifier', 'mail', 'merge', 'moveto', 'multi-files', 'music', 'new', 'next', 'notification-email', 'offline', 'online', 'openwith', 'palette', 'paperplane', 'pen', 'people', 'percent', 'personal-data', 'phone-download', 'phone', 'pin', 'plus-small', 'plus', 'previous', 'printer', 'rename', 'repare', 'restore', 'rise', 'rotate-left', 'rotate-right', 'select-all', 'setting', 'share-circle', 'share', 'sound', 'spinner', 'star', 'stats', 'sync', 'target', 'team', 'telephone', 'to-the-cloud', 'top', 'trash', 'trophy', 'unlink', 'unlock', 'up', 'upload', 'videos', 'wallet-new', 'wallet', 'warn', 'warning'];

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
import myIcon from "my-icon.svg";

<Icon icon={myIcon} width={32} height={32} color="purple" />;
```

### Props forwarding

Icon forwards unknown props to the underlying `<svg />` element.

```
<div>
  <Icon icon='warning' onClick={() => alert('Be careful !')} width={32} height={32} color='purple' /><span>← Click it</span>
</div>
```
