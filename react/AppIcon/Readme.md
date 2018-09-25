`<AppIcon />` uses a `fetchIcon` prop to load asynchronously an app icon.

## Example with a fake instance of cozyClient
```
  <div>
    <p>
      <AppIcon app={app} fetchIcon={icon => client.fetch(...)} />
    </p>
  </div>
```

The `fetchIcon` method is given `app.links.icon` as argument and must return an URL. This URL may be created with [`URL.createObjectURL`](https://developer.mozilla.org/en/docs/Web/API/URL/createObjectURL).
`fetchIcon` may also throw errors.
