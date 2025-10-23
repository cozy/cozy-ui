A divider can be used when you want to separate the content. See [Mui documentation](https://v4.mui.com/api/divider/).

Vertical division

```jsx
import Card from 'cozy-ui/transpiled/react/Card'
import Typography from "cozy-ui/transpiled/react/Typography"
import Divider from 'cozy-ui/transpiled/react/Divider';

<Card>
  <Typography variant="body1" className="u-mb-1">Here is some content in a card.</Typography>
  <Divider />
  <Typography variant="body1" className="u-mt-1">Other content in a card, that is unrelated to the first paragraph.</Typography>
</Card>
```

Horizontal division

```jsx
import Divider from 'cozy-ui/transpiled/react/Divider'
import Typography from "cozy-ui/transpiled/react/Typography"
import Grid from 'cozy-ui/transpiled/react/Grid';

<Grid container alignItems="center">
  <Typography variant="body1" className="u-mr-1">Left block</Typography>
  <Divider orientation="vertical" flexItem />
  <Typography variant="body1" className="u-ml-1">Right block</Typography>
</Grid>
```

Divider with default textAlign (left)

```jsx
import Divider from 'cozy-ui/transpiled/react/Divider';

<Divider>Text Left</Divider>
```

Divider with textAlign (center)

```jsx
import Divider from 'cozy-ui/transpiled/react/Divider';

<Divider textAlign="center">Text Center</Divider>
```
