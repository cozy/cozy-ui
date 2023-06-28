This component can be used as a trigger to open menus, for example an ActionMenu component. It uses `DropdownText` so you can use all its props.

```jsx
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Grid from 'cozy-ui/transpiled/react/Grid'

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
          <DropdownButton textVariant={variant}>
            {variant}
          </DropdownButton>
        </div>
      ))}
    </Grid>
    <Grid item xs={6}>
      Disabled
      {variants.map((variant, index) => (
        <div key={index} className='u-mb-1'>
          <DropdownButton textVariant={variant} disabled>
            {variant}
          </DropdownButton>
        </div>
      ))}
    </Grid>
  </Grid>
  <div style={{ border: '1px dashed var(--borderMainColor)', marginBottom: '1rem' }}>
    <DropdownButton>
      This is a long text without ellipsis without restrictive container
    </DropdownButton>
  </div>
  <div style={{ border: '1px dashed var(--borderMainColor)', width: '150px', marginBottom: '1rem' }}>
    <DropdownButton>
      This is a long text without ellipsis inside a restrictive container
    </DropdownButton>
  </div>
  <div style={{ border: '1px dashed var(--borderMainColor)', width: '150px', marginBottom: '1rem' }}>
    <DropdownButton noWrap>
      This is a long text with ellipsis inside a container
    </DropdownButton>
  </div>
  <div style={{ border: '1px dashed var(--borderMainColor)', width: '100%', marginBottom: '1rem' }}>
    <DropdownButton>
      Text with<br />breaking spaces<br />inside content
    </DropdownButton>
  </div>
  <div style={{ border: '1px dashed var(--borderMainColor)', width: '100%', marginBottom: '1rem' }}>
    <DropdownButton fullWidth spaceBetween>
      Space between text and icon (fullWidth needed)
    </DropdownButton>
  </div>
  <div style={{ border: '1px dashed var(--borderMainColor)', width: '100%' }}>
    <DropdownButton fullWidth>
      Full width but no space between text and icon
    </DropdownButton>
  </div>
</>
```
