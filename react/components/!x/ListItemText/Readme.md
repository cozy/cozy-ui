#### List item primary text

```jsx
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
<ListItemText primary="I'm a list item text"/>
```

#### List item with secondary text

```jsx
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
<ListItemText primary="I'm a primary text" secondary="I'm a secondary text"/>
```

#### Custom List item

```jsx
import ListItemText from 'cozy-ui/transpiled/react/ListItemText';
import MidEllipsis from 'cozy-ui/transpiled/react/MidEllipsis';
import Typography from "cozy-ui/transpiled/react/Typography";

<ListItemText>
  <Typography variant="body1">I'm a primary text</Typography>
  <Typography tag="a" href="http://cozy.io" variant="caption" color="textSecondary">
    <MidEllipsis text={content.ada.short} />
  </Typography>
</ListItemText>
```
