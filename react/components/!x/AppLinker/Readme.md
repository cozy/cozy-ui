Render-props component that provides onClick/href handler to
apply to an anchor that needs to open an app.

If the app is known to Cozy (for example Drive or Banks), and
the user has installed it on its device, the native app will
be opened.

The app's manifest can be set in the `app` prop. Then, in a
ReactNative environment, the AppLinker will be able to send
`openApp` message to the native environment with this `app`
data. Ideally the `mobile` member should be set with all data
needed to open the native app ([more info](https://github.com/cozy/cozy-stack/blob/master/docs/apps.md#mobile))

Handles several cases:

* On mobile app and other mobile app available
* On web (not mobile)
* On web mobile

As it uses the render props pattern, it is flexible and can be used to build components that are more complex than a simple
anchor.

```jsx
import AppLinker from 'cozy-ui/transpiled/react/AppLinker';

const app = {
  slug: 'banks'
};

<AppLinker app={app} href='http://dalailama-banks.mycozy.cloud'>{
  ({ onClick, href, name }) => (
    <a href={href} onClick={onClick}>
      Open { name }
    </a>
  )
}</AppLinker>
```

### Exemple with mobile data

```jsx
import AppLinker from 'cozy-ui/transpiled/react/AppLinker';

const app = {
  slug: 'passwords',
  mobile: {
    schema: 'cozypass://',
    id_playstore: 'io.cozy.pass',
    id_appstore: 'cozy-pass/id1502262449'
  }
};

<AppLinker app={app} href='http://dalailama-passwords.mycozy.cloud'>{
  ({ onClick, href, name }) => (
    <a href={href} onClick={onClick}>
      Open { name }
    </a>
  )
}</AppLinker>
```
