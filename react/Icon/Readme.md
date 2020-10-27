Provides an easy way to use SVG icons included in Cozy-UI as well
as your custom icons.

⚠️ When using `Icon`, you can either give a React component or use the identifier
of an already loaded one. `cozy-ui` ships with built-in icons that you can
include via `Sprite`. See the example below for how to include `Sprite`.
`Sprite` can for example be included in the main `Layout` of your applicaiton.

### Available illustrations

```
import Icon from 'cozy-ui/transpiled/react/Icon';
import Sprite from 'cozy-ui/transpiled/react/Icon/Sprite';
const availableIcons = ['cozy', 'cloud-broken', 'cozy-logo', 'device-laptop', 'device-phone', 'device-tablet', 'device-browser', 'file-type-audio', 'file-type-bin', 'file-type-code', 'file-type-files', 'file-type-folder', 'file-type-image', 'file-type-pdf', 'file-type-sheet', 'file-type-slide', 'file-type-text', 'file-type-video', 'file-type-zip', 'google', 'logout-large', 'top-select', 'bottom-select', 'check-white', 'dash-white', 'keychain'];

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
import Icon from 'cozy-ui/transpiled/react/Icon';
import Sprite from 'cozy-ui/transpiled/react/Icon/Sprite';
const colors = ['#297EF2', '#08b442', '#B449E7', '#F52D2D', '#FF962F']
let i = 0
const availableIcons = ['album','album-add','album-remove','answer','apple','archive','attachment','attention','bank','bell','bottom','browser-brave','browser-chrome','browser-duckduckgo','browser-edge','browser-firefox','browser-ie','browser-opera','browser-safari','burger','calendar','camera','car','certified','check','check-circle','check-list','check-square','circle-filled','clock','cloud','cloud-happy','collect','comment','company','compass','connector','contract','contrast','cozy-text','credit-card','credit-card-add','crop','cross','cross-circle','cross-small','cube','dash','dashboard','data-control','devices','dots','down','download','drawing-arrow-up','dropdown','dropdown-close','dropdown-open','dropup','email','email-notification','eu','euro','exchange','eye','eye-closed','file','file-add','file-duotone','file-none','file-outline','filter','fingerprint','flag','flag-outlined','flash-auto','flashlight','folder','folder-add','forbidden','from-user','gear','globe','grid','group-list','groups','heart','help','history','home','hourglass','image','info','info-outlined','key','laptop','left','lightbulb','link','link-out','list','location','lock','logout','magic-trick','magnet','magnifier','merge','movement-in','movement-out','moveto','multi-files','music','new','next','note','offline','online','openwith','palette','paperplane','password','pen','people','percent-circle','personal-data','phone','phone-download','pie-chart','pin','plus','plus-small','previous','printer','qualify','rename','repare','restore','right','rise','rotate-left','rotate-right','sad-cozy','select-all','setting','share','share-circle','sound','spinner','stack','star','stats','sync','sync-cozy','target','team','telephone','to-the-cloud','top','trash','trophy','unlink','unlock','up','upload','videos','wallet','wallet-add','warn','warning','warning-circle','wrench-circle'];
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
import Icon from 'cozy-ui/transpiled/react/Icon';
<div>
  <Icon icon='spinner' color='#0bda51' spin/>{'\u00A0'}
  <Icon icon='right' color='#c30017' rotate={45}/>
</div>
```

### Custom icons

The `icon` attribute can take a arbitrary React component. It is expected that
this component print an `<svg>` tag and forwards any props to it.

```jsx static
const MyIcon = (props) => <svg {...props}>…</svg>;
<Icon icon={myIcon} width={32} height={32} color="purple" />
```

You can also directly import an SVG to use it. You MUST use svg-sprite-loader
to load your SVG (either explicitly or, better, implicitly in your `webpack.config.js`).

⚠️ Do not put a `fill` property on your icon

```jsx static
import myIcon from 'my-icon.svg'

;<Icon icon={myIcon} width={32} height={32} color="purple" />
```

### Props forwarding

Icon forwards unknown props to the underlying `<svg />` element.

```
import Icon from 'cozy-ui/transpiled/react/Icon';
<div>
  <Icon icon='warning' onClick={() => alert('Be careful !')} width={32} height={32} color='purple' /><span>← Click it</span>
</div>
```
