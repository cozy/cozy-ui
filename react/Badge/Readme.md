`<Badge />` component wraps the element on which you want to apply a badge. In the following examples, it is applied to compact `<ButtonAction />`.

This component spreads all other props to its root element.

#### Available types

Default type is `normal`

```
<div>
  <p>
    <Badge content="2" type="normal">
      <ButtonAction label='Normal' rightIcon='openwith' compact />
    </Badge>
  </p>
  <p>
    <Badge content="2" type="new">
      <ButtonAction type='new' leftIcon="plus" label='New' compact />
    </Badge>
  </p>
  <p>
    <Badge content="2" type="error">
      <ButtonAction type='error' label='Error' rightIcon='file-none' compact />
    </Badge>
  </p>
</div>
```
