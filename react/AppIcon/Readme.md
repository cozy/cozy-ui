`<AppIcon />` renders an app icon.

It contains business logic related to apps documents.

Apps documents provided by the stack are containing a `links.icon` property which is public and can be directly used as `src` value for an `<img />` tag.

### Example
```
  <div>
    <p>
      <AppIcon app={app} />
    </p>
  </div>
```

## Using fetchIcon
Is it also possible to provide a custom asynchronous `fetchIcon` which takes an app document as argument and resolves with an icon URL (see [`URL.createObjectURL`](https://developer.mozilla.org/en/docs/Web/API/URL/createObjectURL)). `fetchIcon` may also throw errors.

### Example with fetchIcon
```
  <div>
    <p>
      <AppIcon app={app} fetchIcon={icon => client.fetch(...)} />
    </p>
  </div>
```

## `domain` and `secure` props
If the `fetchIcon` is missing, the `<AppIcon />` component needs the `domain` prop (litteraly the cozy domain) and the secure prop, to know which protocol use between `http` or `https`.
