`<AppIcon />` loads asynchronously an app's icon directly from the stack. The stack returns the icon as a blob.

This component needs to be encapsulated into a `<CozyProvider />` component, see [Cozy Client documentation](https://github.com/cozy/cozy-client/blob/master/README.md#creating-a-provider).

It uses the `client` object provided by the `context`.

```
<CozyProvider client={cozyClient} />
  <div>
    <p>
      <AppIcon app={app} />
    </p>
  </div>
</CozyProvider>
```
