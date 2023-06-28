A card is a small block used to separate some content from the rest of the UI.

```jsx
import Card from 'cozy-ui/transpiled/react/Card';
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
import Typography from "cozy-ui/transpiled/react/Typography";

<Card>
  <Typography className="u-mb-1" variant="h6">This is a card</Typography>
  <Typography className="u-mb-1" variant="body1">This is some card content. Content can be small or huge.</Typography>
  <Button className="u-ml-0" label="Demo button" />
</Card>
```

### Props

#### `inset`

Renders the Card with increased margins.

```jsx
import Card from 'cozy-ui/transpiled/react/Card';
import Typography from "cozy-ui/transpiled/react/Typography";

<Card inset>
  <Typography variant="body1">This is some card content. Content can be small or huge. Also, it has margins.</Typography>
</Card>
```

#### `tag`

Uses the provided tag to render the root element of the Card

```jsx
import Card from 'cozy-ui/transpiled/react/Card';
import Typography from "cozy-ui/transpiled/react/Typography";

<Card tag="a" href="https://cozy.io" target="_blank">
  <Typography variant="h6">Visit cozy.io</Typography>
  <Typography variant="body1">To learn more about us</Typography>
</Card>
```
