Render-props component that provides onClick/href handler to
apply to an anchor that needs to open an app.

If the app is known to Cozy (for example Drive or Banks), and
the user has installed it on its device, the native app will
be opened.

Handles several cases:

* On mobile app and other mobile app available
* On web (not mobile)
* On web mobile

As it uses the render props pattern, it is flexible and can be used to build components that are more complex than a simple
anchor.

```jsx
import AppLinker from 'cozy-ui/transpiled/react/AppLinker';
<AppLinker slug='banks' href='http://dalailama-banks.mycozy.cloud'>{
  ({ onClick, href, name }) => (
    <a href={href} onClick={onClick}>
      Open { name }
    </a>
  )
}</AppLinker>
```
