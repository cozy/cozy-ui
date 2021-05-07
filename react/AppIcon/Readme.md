`<AppIcon />` renders an app icon.

AppIcon takes all the space available, it needs to be in a container that specifies its width/height.

It contains business logic related to apps documents.

Apps documents provided by the stack are containing a `links.icon` property which is public and can be directly used as `src` value for an `<img />` tag.

`<AppIcon />` is also able to retrieve an icon for a registry app. If no attribute `links.icon` is present on the app document, `<AppIcon />` tries to fetch the icon with a registry link, computed thanks to the app attributes `slug` and `latest_version.version`.

The given app can be:

* An object representing an app fetched from the registry
* An app's slug string

### Example

if no application was found, we fallback on a default `CubeIcon`

```jsx static
  <div>
    <AppIcon app={app} />
  </div>
```

```jsx
import AppIcon from 'cozy-ui/transpiled/react/AppIcon'

;
<div>
  <div style={{ width: '100px' }}>
    <AppIcon app="test" />
  </div>
</div>
```

## Using fetchIcon

Is it also possible to provide a custom asynchronous `fetchIcon` which takes an app document as argument and resolves with an icon URL (see [`URL.createObjectURL`](https://developer.mozilla.org/en/docs/Web/API/URL/createObjectURL)). `fetchIcon` may also throw errors.

### Example with fetchIcon

```jsx static
  <div>
    <AppIcon app={app} fetchIcon={icon => client.fetch(...)} />
  </div>
```

```jsx
import AppIcon from 'cozy-ui/transpiled/react/AppIcon'
import { placeholder100, placeholder100Red } from 'docs/placeholders/img'

const fetchIcon1 = () => placeholder100
const fetchIcon2 = () => placeholder100Red

const handleSwitch = () => {
  const newFetchIcon = state.fetchIcon.name === 'fetchIcon1' ? fetchIcon2 : fetchIcon1
  setState({ fetchIcon: newFetchIcon  })
}

initialState = { fetchIcon: fetchIcon1 }

;
<div>
  <button onClick={handleSwitch}>Switch</button>{' '}
  fetchIcon: {state.fetchIcon.name}<br/>
  <div style={{ width: '100px' }}>
    <AppIcon app={'test'} fetchIcon={state.fetchIcon} />
  </div>
</div>
```

### Provide `fallbackIcon`

You can provide an `<Icon />` `icon` props to fallback when the AppIcon fetched is broken or the `fetchIcon` function errored.

```jsx
import AppIcon from 'cozy-ui/transpiled/react/AppIcon'
import WarningIcon from 'cozy-ui/transpiled/react/Icons/Warning'
import { placeholder100Red } from 'docs/placeholders/img'

const fetchIcon = () => placeholder100Red
const fetchIconBroken = () => 'blahblahblah'

const brokeFetchIcon = () => setState({ fetchIcon: fetchIconBroken  })

initialState = { fetchIcon }

;
<div>
  <button onClick={brokeFetchIcon}>Break it</button>
  <div style={{ width: '100px' }}>
    <AppIcon fetchIcon={state.fetchIcon} fallbackIcon={WarningIcon} />
  </div>
</div>
```
