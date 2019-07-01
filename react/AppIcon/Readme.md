`<AppIcon />` renders an app icon.

AppIcon takes all the space available, it needs to be in a container that specifies its width/height.

It contains business logic related to apps documents.

Apps documents provided by the stack are containing a `links.icon` property which is public and can be directly used as `src` value for an `<img />` tag.

`<AppIcon />` is also able to retrieve an icon for a registry app. If no attribute `links.icon` is present on the app document, `<AppIcon />` tries to fetch the icon with a registry link, computed thanks to the app attributes `slug` and `latest_version.version`.

The given app can be:

* An object representing an app fetched from the registry
* An app's slug string

### Example

```jsx static
  <div>
    <AppIcon app={app} />
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
const fetchIcon1 = () => 'https://placeholder.pics/svg/100/7DC4FF/Test%20Icon'
const fetchIcon2 = () => 'https://placeholder.pics/svg/100/FF0202/Test%20Icon'

const handleSwitch = () => {
  const newFetchIcon = state.fetchIcon.name === 'fetchIcon1' ? fetchIcon2 : fetchIcon1
  setState({ fetchIcon: newFetchIcon  })
}

initialState = { fetchIcon: fetchIcon1 };

<div>
  <button onClick={handleSwitch}>Switch</button>{' '}
  fetchIcon: {state.fetchIcon.name}<br/>
  <div style={{ width: '100px' }}>
    <AppIcon app={'test'} fetchIcon={state.fetchIcon} />
  </div>
</div>
```

## `domain` and `secure` props
If the `fetchIcon` is missing, the `<AppIcon />` component needs the `domain` prop (litteraly the cozy domain) and the secure prop, to know which protocol use between `http` or `https`.
