The Action Button has different types whether it's `normal`, just `new` or not configured, `error` in case of error, or you can make it `disabled` if some action is pending.

#### Available types

```
<div>
  <p><ButtonAction label='Normal' rightIcon='openwith' /></p>
  <p><ButtonAction type='normal' disabled label='Disabled' rightIcon='hourglass' /></p>
  <p><ButtonAction type='new' leftIcon="plus" label='New' /></p>
  <p><ButtonAction type='error' label='Error' rightIcon='file-none' /></p>
</div>
```

#### Long label are troncated

```
<div>
  <p><ButtonAction label='Very long long long label' type='normal' rightIcon='hourglass' /></p>
</div>
```
