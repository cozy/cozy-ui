#### List item main text

```
<ListItemText primaryText="I'm a list item text"/>
```

#### List item main text with an annotation text

```
<ListItemText primaryText="I'm a primary text" secondaryText="I'm a secondary text"/>
```

#### Custom List item

```
const { Text, Caption } = require('../Text');
const MidEllipsis = require('../MidEllipsis').default;

<ListItemText>
  <Text>I'm a primary text</Text>
  <Caption tag="a" href="http://cozy.io">
    <MidEllipsis text={content.ada.short} />
  </Caption>
</ListItemText>
```
