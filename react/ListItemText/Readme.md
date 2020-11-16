#### List item primary text

```
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
<ListItemText primary="I'm a list item text"/>
```

#### List item with secondary text

```
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
<ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
```

#### Custom List item

```
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import { Text, Caption } from 'cozy-ui/transpiled/react/Text';
import MidEllipsis from 'cozy-ui/transpiled/react/MidEllipsis';

<ListItemText>
  <Text>I'm a primary text</Text>
  <Caption tag="a" href="http://cozy.io">
    <MidEllipsis text={content.ada.short} />
  </Caption>
</ListItemText>
```
