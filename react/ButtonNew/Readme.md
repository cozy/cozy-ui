`ButtonNew` is a high-level wrapper around [MuiButton v4](https://v4.mui.com/api/button/) that exposes the same API as [MuiButton v9](https://mui.com/material-ui/api/button/). It is designed to replace `Buttons` once the migration to MUI v9 happens — at that point the wrapper can be removed and MUI v9 used directly, without breaking changes.

On top of the MUI v9 API, it supports a cozy-ui extension variant `ghost` (outlined with transparent border).

### Default

```jsx
import ButtonNew from 'cozy-ui/transpiled/react/ButtonNew'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'

const variants = [
  { label: 'contained', variant: 'contained' },
  { label: 'outlined', variant: 'outlined' },
  { label: 'ghost', variant: 'ghost' },
  { label: 'text', variant: 'text' }
]
const states = [{}, { disabled: true }, { loading: true }]

;
<Grid container>
  {states.map(state =>
    <Grid item xs={12} sm={4} className="u-mb-1" key={JSON.stringify(state)}>
      <Stack spacing="s">
        <div>{Object.keys(state)[0] || 'default'}</div>
        {variants.map(v =>
          <div key={v.label + JSON.stringify(state)}>
            <ButtonNew variant={v.variant} {...state}>{v.label}</ButtonNew>
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```

### Sizes

```jsx
import ButtonNew from 'cozy-ui/transpiled/react/ButtonNew'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'

const variants = [
  { label: 'contained', variant: 'contained' },
  { label: 'outlined', variant: 'outlined' },
  { label: 'ghost', variant: 'ghost' },
  { label: 'text', variant: 'text' }
]
const sizes = ['small', 'medium', 'large']

;
<Grid container>
  {sizes.map(size =>
    <Grid item xs={12} sm={4} className="u-mb-1" key={size}>
      <Stack spacing="s">
        <div>{size}</div>
        {variants.map(v =>
          <div key={v.label + size}>
            <ButtonNew variant={v.variant} size={size}>{v.label}</ButtonNew>
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```

### Icons

```jsx
import ButtonNew from 'cozy-ui/transpiled/react/ButtonNew'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import { ArrowUp, Icon, Plus, Stop } from '@linagora/twake-icons'

const variants = [
  { label: 'contained', variant: 'contained' },
  { label: 'outlined', variant: 'outlined' },
  { label: 'ghost', variant: 'ghost' },
  { label: 'text', variant: 'text' }
]
const iconPositions = ['startIcon', 'endIcon']

;
<Grid container>
  {iconPositions.map(iconPosition =>
    <Grid item xs={12} sm={3} className="u-mb-1" key={iconPosition}>
      <Stack spacing="s">
        <div>{iconPosition}</div>
        {variants.map(v =>
          <div key={v.label + iconPosition}>
            <ButtonNew
              variant={v.variant}
              {...({ [iconPosition]: <Icon icon={Plus} /> })}
            >{v.label}</ButtonNew>
          </div>
        )}
      </Stack>
    </Grid>
  )}
  <Grid item xs={12} sm={3} className="u-mb-1">
    <Stack spacing="s">
      <div>icon only</div>
        {variants.map(v =>
          <div key={v.label}>
            <ButtonNew
              className="u-miw-auto"
              variant={v.variant}
            ><Icon icon={Plus} /></ButtonNew>
            <ButtonNew
              className="u-ml-1 u-miw-auto"
              variant={v.variant}
              disabled
            ><Icon icon={Plus} /></ButtonNew>
          </div>
        )}
    </Stack>
  </Grid>
  <Grid item xs={12} sm={3} className="u-mb-1">
    <Stack spacing="s">
      <div>round icon button</div>
        {variants.map(v =>
          <div key={v.label}>
            <ButtonNew
              className="u-miw-auto u-mih-auto u-w-2 u-h-2 u-bdrs-circle"
              classes={{ label: "u-flex u-w-auto" }}
              size="small"
              variant={v.variant}
            ><Icon icon={Stop} size={12} /></ButtonNew>
            <ButtonNew
              className="u-ml-1 u-miw-auto u-mih-auto u-w-2 u-h-2 u-bdrs-circle"
              classes={{ label: "u-flex u-w-auto" }}
              size="small"
              variant={v.variant}
              disabled
            ><Icon icon={Stop} size={12} /></ButtonNew>
          </div>
        )}
    </Stack>
  </Grid>
</Grid>
```

### Icons with sizes

```jsx
import ButtonNew from 'cozy-ui/transpiled/react/ButtonNew'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import { Icon, Plus } from '@linagora/twake-icons'

const variants = [
  { label: 'contained', variant: 'contained' },
  { label: 'outlined', variant: 'outlined' },
  { label: 'ghost', variant: 'ghost' },
  { label: 'text', variant: 'text' }
]
const iconPositions = ['startIcon', 'endIcon']
const sizes = ['small', 'medium', 'large']

;
<Grid container>
{iconPositions.map(iconPosition =>
  sizes.map(size =>
  <Grid item xs={12} sm={4} className="u-mb-1" key={size}>
      <Stack spacing="s">
        <div>{`${iconPosition} - ${size}`}</div>
        {variants.map(v =>
          <div key={v.label + size}>
            <ButtonNew
              variant={v.variant}
              size={size}
              {...({ [iconPosition]: <Icon icon={Plus} /> })}
            >{v.label}</ButtonNew>
          </div>
        )}
      </Stack>
    </Grid>
  )
)}
</Grid>
```

### Colors

```jsx
import ButtonNew from 'cozy-ui/transpiled/react/ButtonNew'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'

const variants = [
  { label: 'contained', variant: 'contained' },
  { label: 'outlined', variant: 'outlined' },
  { label: 'ghost', variant: 'ghost' },
  { label: 'text', variant: 'text' }
]
const colors = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']

;
<Grid container>
  {colors.map(color =>
    <Grid item xs={12} sm={6} md={3} className="u-mb-1" key={color}>
      <Stack spacing="s">
        <div>{color}</div>
        {variants.map(v =>
          <div key={v.label + color}>
            <ButtonNew variant={v.variant} color={color}>{v.label}</ButtonNew>
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```

### Disabled colors

```jsx
import ButtonNew from 'cozy-ui/transpiled/react/ButtonNew'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'

const variants = [
  { label: 'contained', variant: 'contained' },
  { label: 'outlined', variant: 'outlined' },
  { label: 'ghost', variant: 'ghost' },
  { label: 'text', variant: 'text' }
]
const colors = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']

;
<Grid container>
  {colors.map(color =>
    <Grid item xs={12} sm={6} md={3} className="u-mb-1" key={color}>
      <Stack spacing="s">
        <div>{color}</div>
        {variants.map(v =>
          <div key={v.label + color}>
            <ButtonNew variant={v.variant} color={color} disabled>{v.label}</ButtonNew>
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```

### Loading colors

```jsx
import ButtonNew from 'cozy-ui/transpiled/react/ButtonNew'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'

const variants = [
  { label: 'contained', variant: 'contained' },
  { label: 'outlined', variant: 'outlined' },
  { label: 'ghost', variant: 'ghost' },
  { label: 'text', variant: 'text' }
]
const colors = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']

;
<Grid container>
  {colors.map(color =>
    <Grid item xs={12} sm={6} md={3} className="u-mb-1" key={color}>
      <Stack spacing="s">
        <div>{color}</div>
        {variants.map(v =>
          <div key={v.label + color}>
            <ButtonNew variant={v.variant} color={color} loading>{v.label}</ButtonNew>
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```

### Long label

By default, `ButtonNew` has no fixed height. The button grows to fit its content. The text wraps without being clipped.

```jsx
import ButtonNew from 'cozy-ui/transpiled/react/ButtonNew'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Variants from 'cozy-ui/docs/components/Variants'

const variants = [
  { label: 'contained', variant: 'contained' },
  { label: 'outlined', variant: 'outlined' },
  { label: 'ghost', variant: 'ghost' },
  { label: 'text', variant: 'text' }
]
const sizes = ['small', 'medium', 'large']
const initialVariants = [{ autoHeight: false }]

;
<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <Grid container>
      {sizes.map(size =>
        <Grid item xs={12} sm={4} className="u-mb-1" key={size}>
          <Stack spacing="s">
            <div>{size}</div>
            {variants.map(v =>
              <div key={v.label + size} className="u-w-4">
                <ButtonNew variant={v.variant} size={size}>{`${v.label} with a long label that wraps`}</ButtonNew>
              </div>
            )}
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```
