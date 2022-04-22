This component can be used as a trigger to open menus, for example an ActionMenu component. There is also `DropdownButton` which offers the same possibilities, but with the added button wrapper.

```jsx
import DropdownText from 'cozy-ui/transpiled/react/DropdownText'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption'
]

;

<>
  <Grid container>
    <Grid item xs={6}>
      Default
      {variants.map((variant, index) => (
        <div key={index} className='u-mb-1'>
          <DropdownText variant={variant}>
            {variant}
          </DropdownText>
        </div>
      ))}
    </Grid>
    <Grid item xs={6}>
      Disabled
      {variants.map((variant, index) => (
        <div key={index} className='u-mb-1'>
          <DropdownText variant={variant} disabled>
            {variant}
          </DropdownText>
        </div>
      ))}
    </Grid>
  </Grid>
  <DropdownText spaceBetween style={{ border: '1px solid var(--borderMainColor)', width: '100%', marginBottom: '1rem' }}>
    Space between text and icon
  </DropdownText>
  <DropdownText style={{ border: '1px solid var(--borderMainColor)' }}>
    Text with<br />breaking spaces<br />inside content
  </DropdownText>
</>
```
