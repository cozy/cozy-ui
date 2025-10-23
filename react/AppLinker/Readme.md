Render-props component that provides onClick/href handler to
apply to an anchor that needs to open an app.

The app's manifest can be set in the `app` prop. Then, in a
ReactNative environment, the AppLinker will be able to send
`openApp` message to the native environment with this `app`
data.

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
  ({ onClick, href }) => (
    <a href={href} onClick={onClick}>
      Open
    </a>
  )
}</AppLinker>
```
