Buttons are a wrapper arround [MuiButton](https://mui.com/material-ui/react-button/) integrated with Cozy's design system

The `Button` component will produce an HTML `<button>`. The React component accepts classic HTML attributes (i.e. `type`) through React props.

By default the HTML `<button>` is rendered with `type="button"` attribute, so its click effect must be controlled by React (i.e. by using `onClick` event).

If the button is located inside of a form, you can set the props `type="submit"` to the React component, so clicking on it would trigger the form's `onSubmit` event.

### Default

```jsx
import Button from 'cozy-ui/transpiled/react/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import Icon from 'cozy-ui/transpiled/react/Icon'
import PlusIcon from 'cozy-ui/transpiled/react/Icons/Plus'

const variants = ['primary', 'secondary', 'ghost', 'text']
const propsArr = [{}, { disabled: true }, { busy: true }]

;

<Grid container>
  {propsArr.map(props =>
    <Grid item xs={12} sm={4} className="u-mb-1" key={JSON.stringify(props)}>
      <Stack spacing="s">
        <div>{Object.keys(props)[0] || 'default'}</div>
        {variants.map(variant =>
          <div key={variant + JSON.stringify(props)}>
            <Button label={variant} variant={variant} {...props} />
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```

### Sizes

```jsx
import Button from 'cozy-ui/transpiled/react/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'

const variants = ['primary', 'secondary', 'ghost', 'text']
const sizes = ['small', 'medium', 'large']

;

<Grid container>
  {sizes.map(size =>
    <Grid item xs={12} sm={4} className="u-mb-1" key={size}>
      <Stack spacing="s">
        <div>{size}</div>
        {variants.map(variant =>
          <div key={variant + size}>
            <Button label={variant} variant={variant} size={size} />
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```

### Icons

```jsx
import Button from 'cozy-ui/transpiled/react/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import PlusIcon from 'cozy-ui/transpiled/react/Icons/Plus'
import Icon from 'cozy-ui/transpiled/react/Icon'

const variants = ['primary', 'secondary', 'ghost', 'text']
const iconPositions = ['startIcon', 'endIcon']

;

<Grid container>
  {iconPositions.map(iconPosition =>
    <Grid item xs={12} sm={4} className="u-mb-1" key={iconPosition}>
      <Stack spacing="s">
        <div>{iconPosition}</div>
        {variants.map(variant =>
          <div key={variant + iconPosition}>
            <Button
              label={variant}
              variant={variant}
              {...({[`${iconPosition}`]: <Icon icon={PlusIcon}/>})}
            />
          </div>
        )}
      </Stack>
    </Grid>
  )}
  <Grid item xs={12} sm={4} className="u-mb-1">
    <Stack spacing="s">
      <div>label is only icon</div>
        {variants.map(variant =>
          <div key={variant}>
            <Button
              className="u-miw-auto"
              label={<Icon icon={PlusIcon}/>}
              variant={variant}
            />
          </div>
        )}
    </Stack>
  </Grid>
</Grid>
```

### Icons with sizes

```jsx
import Button from 'cozy-ui/transpiled/react/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import PlusIcon from 'cozy-ui/transpiled/react/Icons/Plus'
import Icon from 'cozy-ui/transpiled/react/Icon'

const variants = ['primary', 'secondary', 'ghost', 'text']
const iconPositions = ['startIcon', 'endIcon']
const sizes = ['small', 'medium', 'large']

;

<Grid container>
{iconPositions.map(iconPosition =>
  sizes.map(size =>
  <Grid item xs={12} sm={4} className="u-mb-1" key={size}>
      <Stack spacing="s">
        <div>{`${iconPosition} - ${size}`}</div>
        {variants.map(variant =>
          <div key={variant + size}>
            <Button
              label={variant}
              variant={variant}
              size={size}
              {...({[`${iconPosition}`]: <Icon icon={PlusIcon}/>})}
            />
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
import Button from 'cozy-ui/transpiled/react/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'

const variants = ['primary', 'secondary', 'ghost', 'text']
const colors = ['success', 'error', 'warning', 'info']

;

<Grid container>
  {colors.map(color =>
    <Grid item xs={12} sm={6} md={3} className="u-mb-1" key={color}>
      <Stack spacing="s">
        <div>{color}</div>
        {variants.map(variant =>
          <div key={variant + color}>
            <Button label={variant} variant={variant} color={color} />
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```

### Disabled colors

```jsx
import Button from 'cozy-ui/transpiled/react/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'

const variants = ['primary', 'secondary', 'ghost', 'text']
const colors = ['success', 'error', 'warning', 'info']

;

<Grid container>
  {colors.map(color =>
    <Grid item xs={12} sm={6} md={3} className="u-mb-1" key={color}>
      <Stack spacing="s">
        <div>{color}</div>
        {variants.map(variant =>
          <div key={variant + color}>
            <Button label={variant} variant={variant} color={color} disabled={true} />
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```

### Busy colors

```jsx
import Button from 'cozy-ui/transpiled/react/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'

const variants = ['primary', 'secondary', 'ghost', 'text']
const colors = ['success', 'error', 'warning', 'info']

;

<Grid container>
  {colors.map(color =>
    <Grid item xs={12} sm={6} md={3} className="u-mb-1" key={color}>
      <Stack spacing="s">
        <div>{color}</div>
        {variants.map(variant =>
          <div key={variant + color}>
            <Button label={variant} variant={variant} color={color} busy={true} />
          </div>
        )}
      </Stack>
    </Grid>
  )}
</Grid>
```
