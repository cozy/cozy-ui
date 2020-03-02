`<Badge />` component wraps the element on which you want to apply a badge. In the following examples, it is applied to compact `<ButtonAction />`.

You should use `<Badge />` to provide additional information related to the wrapped content.

This component spreads all other props to its root element.

#### Available types

Default type is `normal`

```
import Badge from 'cozy-ui/transpiled/react/Badge'
import ButtonAction from 'cozy-ui/transpiled/react/ButtonAction';

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


#### Alignment

Only supports `bottom-right` 


```
import Badge from 'cozy-ui/transpiled/react/Badge'
import Icon from 'cozy-ui/transpiled/react/Icon';



<div>
  <p>
    <Badge 
      content={ <Icon icon="link" size={10} />} type="normal" alignment="bottom-right" size='medium'>
      <Icon icon="cloud" size="32" />
    </Badge>
  </p>
  
</div>
```
