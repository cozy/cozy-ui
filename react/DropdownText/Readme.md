This component can be used as a trigger to open menus, for example an ActionMenu component. There is also `DropdownButton` which offers the same possibilities, but with the added button wrapper.

```jsx
import DropdownText from 'cozy-ui/transpiled/react/DropdownText'
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
  <div style={{ border: '1px dashed var(--borderMainColor)', marginBottom: '1rem' }}>
    <DropdownText>
      This is a long text without ellipsis without restrictive container
    </DropdownText>
  </div>
  <div style={{ border: '1px dashed var(--borderMainColor)', width: '150px', marginBottom: '1rem' }}>
    <DropdownText>
      This is a long text without ellipsis inside a restrictive container
    </DropdownText>
  </div>
  <div style={{ border: '1px dashed var(--borderMainColor)', width: '150px', marginBottom: '1rem' }}>
    <DropdownText noWrap>
      This is a long text with ellipsis inside a container
    </DropdownText>
  </div>
  <div style={{ border: '1px dashed var(--borderMainColor)', width: '100%', marginBottom: '1rem' }}>
    <DropdownText>
      Text with<br />breaking spaces<br />inside content
    </DropdownText>
  </div>
  <div style={{ border: '1px dashed var(--borderMainColor)', width: '100%' }}>
    <DropdownText spaceBetween>
      Space between text and icon
    </DropdownText>
  </div>
</>
```
