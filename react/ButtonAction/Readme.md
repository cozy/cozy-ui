The Action Button has different types whether it's `normal`, just `new` or not configured, `error` in case of error, or you can make it `disabled` if some action is pending.

#### Available types
Default type is `normal`

```
<div>
  <p>
    <ButtonAction label='Normal' rightIcon='openwith' />
    <ButtonAction label='Normal' rightIcon='openwith' disabled />
  </p>
  <p>
    <ButtonAction type='new' leftIcon="plus" label='New' />
    <ButtonAction type='new' leftIcon="plus" label='New' disabled />
  </p>
  <p>
    <ButtonAction type='error' label='Error' rightIcon='file-none' />
    <ButtonAction type='error' label='Error' rightIcon='file-none' disabled />
  </p>
</div>
```

#### Long labels are troncated by default

```
<div>
  <p><ButtonAction label='Very long long long label' type='normal' rightIcon='hourglass' /></p>
</div>
```

#### Compact version (on mobile mostly)

```
<div>
  <p><ButtonAction compact label='Normal' rightIcon='openwith' /></p>
  <p><ButtonAction compact disabled label='Disabled' rightIcon='hourglass' /></p>
  <p><ButtonAction compact type='new' leftIcon="plus" label='New' /></p>
  <p><ButtonAction compact type='error' label='Error' rightIcon='file-none' /></p>
</div>
```
