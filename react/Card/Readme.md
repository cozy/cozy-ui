A card is a small block used to separate some content from the rest of the UI.

```jsx
import Box from 'cozy-ui/transpiled/react/Box'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Typography from "cozy-ui/transpiled/react/Typography"

;

<Box display="block" border={1} borderColor="var(--dividerColor)" borderRadius={8} padding={2}>
  <Typography className="u-mb-1" variant="h6">This is a card</Typography>
  <Typography className="u-mb-1" variant="body1">This is some card content. Content can be small or huge.</Typography>
  <Button className="u-ml-0" label="Demo button" />
</Box>
```

### Props

#### `inset`

Renders the Card with increased margins.

```jsx
import Typography from "cozy-ui/transpiled/react/Typography"
import Box from 'cozy-ui/transpiled/react/Box'

;

<Box display="block" border={1} borderColor="var(--dividerColor)" borderRadius={8} padding={2}className="u-m-half-s u-mv-1 u-mh-2">
  <Typography variant="body1">This is some card content. Content can be small or huge. Also, it has margins.</Typography>
</Box>
```

#### `tag`

Uses the provided tag to render the root element of the Card

```jsx
import Typography from "cozy-ui/transpiled/react/Typography"
import Box from 'cozy-ui/transpiled/react/Box'

;

<Box display="block" component="a" href="https://cozy.io" target="_blank" border={1} borderColor="var(--dividerColor)" borderRadius={8} padding={2} style={{ textDecoration: "none" }}>
  <Typography variant="h6">Visit cozy.io</Typography>
  <Typography variant="body1">To learn more about us</Typography>
</Box>
```
