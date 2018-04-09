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
const { Text, TextNote } = require('../Text');

<ListItemText>
  <Text>I'm a primary text</Text>
  <TextNote tag="a" href="http://cozy.io" className="u-reverselink">I'm a clickable secondary text</TextNote>
</ListItemText>
```
