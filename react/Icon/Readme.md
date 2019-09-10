Provides an easy way to use SVG icons included in Cozy-UI as well
as your custom icons.

⚠️ When using `Icon`, the icons are supposed to be already loaded via an
SVG sprite loaded in your DOM. `cozy-ui` ships with built-in icons that you can include via `Sprite`. See the example below for how to include
`Sprite`. `Sprite` can for example be included in the main `Layout` of
your applicaiton.

### Available illustrations icons (colors fixed)

```
const Sprite = require('./Sprite').default;
const availableIcons = ['cozy', 'cloud-broken', 'cozy-logo', 'device-laptop', 'device-phone', 'device-tablet', 'file-type-audio', 'file-type-bin', 'file-type-code', 'file-type-files', 'file-type-folder', 'file-type-image', 'file-type-pdf', 'file-type-sheet', 'file-type-slide', 'file-type-text', 'file-type-video', 'file-type-zip', 'google', 'top-select', 'bottom-select', 'check-white', 'dash-white', 'keychain'];

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
const availableIcons = ['album', 'album-add', 'album-remove', 'file', 'file-add', 'file-none', 'file-outline', 'folder', 'folder-add', 'wallet', 'wallet-add', 'credit-card', 'credit-card-add', 'top', 'right', 'bottom', 'left', 'up', 'down', 'next', 'previous', 'dropdown', 'dropup', 'dropdown-close', 'dropdown-open', 'rise', 'answer', 'restore', 'rotate-left', 'rotate-right', 'download', 'upload', 'moveto', 'logout', 'exchange', 'movement-in', 'movement-out', 'certified', 'check-circle', 'check', 'info-outlined', 'info', 'flag', 'flag-outlined', 'cloud', 'cloud-happy', 'to-the-cloud', 'grid', 'list', 'group-list', 'groups', 'cube', 'connector', 'share', 'share-circle', 'offline', 'online', 'email', 'email-notification', 'people', 'team', 'from-user', 'cross', 'cross-small', 'plus', 'plus-small', 'attention', 'warn', 'warning', 'devices', 'laptop', 'phone', 'phone-download', 'eye', 'eye-closed', 'link', 'unlink', 'lock', 'unlock', 'pie-chart', 'stats', 'apple', 'browser-brave', 'browser-chrome', 'browser-duckduckgo', 'browser-edge', 'browser-firefox', 'browser-ie', 'browser-opera', 'browser-safari', 'archive', 'attachment', 'bank', 'bell', 'burger', 'calendar', 'camera', 'stack', 'check-list', 'circle-filled', 'clock', 'collect', 'comment', 'company', 'compass', 'contract', 'contrast', 'crop', 'dash', 'dashboard', 'data-control', 'dots', 'eu', 'euro', 'filter', 'fingerprint', 'flash-auto', 'flashlight', 'forbidden', 'gear', 'globe', 'heart', 'help', 'history', 'home', 'hourglass', 'image', 'key', 'lightbulb', 'location', 'magic-trick', 'magnet', 'magnifier', 'merge', 'multi-files', 'music', 'new', 'openwith', 'palette', 'paperplane', 'pen', 'rename', 'percent-circle', 'personal-data', 'pin', 'printer', 'repare', 'select-all', 'setting', 'sound', 'spinner', 'star', 'sync', 'target', 'telephone', 'trash', 'trophy', 'videos'];

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
  <Icon icon='right' color='#c30017' rotate={45}/>
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
