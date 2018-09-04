`<AppIcon />` uses a `fetchIcon` prop to load asynchronously an app icon.

## Example with a fake instance of cozyClient
```
  <div>
    <p>
      <AppIcon app={app} fetchIcon={() => client.fetch(...)} />
    </p>
  </div>
```
