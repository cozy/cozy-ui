#### List item main text

```
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
<ListItemText primaryText="I'm a list item text"/>
```

#### List item main text with an annotation text

```
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
<ListItemText primaryText="I'm a primary text" secondaryText="I'm a secondary text"/>
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
