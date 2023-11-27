Use typographic components to have sensible defaults for text content. The typography variants naming is based on material design.

Read the original [Typography component](https://v4.mui.com/components/typography/) documentation for more information.

```jsx
import Typography from 'cozy-ui/transpiled/react/Typography'
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'button',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
]
const colors = ['initial', 'inherit', 'primary', 'textPrimary', 'textSecondary', 'error']

;

<Grid container>
  {colors.map((color, index) =>
    <Grid item xs={6} sm={3} md={2} className="u-mb-2" key={index}>
      <Stack spacing="s">
        <div>{color}</div>
        {variants.map(variant =>
          <div key={variant + color}>
            <Typography variant={variant} color={color}>{variant}</Typography>
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```
