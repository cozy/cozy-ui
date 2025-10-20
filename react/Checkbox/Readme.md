### Standard Checkbox

```jsx
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Variants from 'cozy-ui/docs/components/Variants'

const initialVariants = [{ before: false }]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <Grid container>
      <Grid item xs={6} sm={3}>
        <div><Checkbox label="Checkbox" labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Small Checked" size="small" labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Checked checkbox" checked labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Mixed checkbox" mixed labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Mixed checked checkbox" checked mixed labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="No effect" disableEffect labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Small no effect" size="small" disableEffect labelPlacement={variant.before ? "start" : "end"} /></div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div><Checkbox label="Disabled checkbox" disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Small disabled checkbox" size="small" disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Disabled checked checkbox" checked disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Disabled mixed checkbox" mixed disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Disabled mixed checked checkbox" checked mixed disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Disabled no effect" disableEffect disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Small disabled no effect" size="small" disableEffect disabled labelPlacement={variant.before ? "start" : "end"} /></div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div><Checkbox label="Error checkbox" error labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Small error checkbox" size="small" error labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Error checked checkbox" error checked labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Error mixed checkbox" error mixed labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Error mixed checked checkbox" error checked mixed labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Error no effect" error disableEffect labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Small error no effect" size="small" error disableEffect labelPlacement={variant.before ? "start" : "end"} /></div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div><Checkbox label="Error disabled checkbox" error disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Small error disabled checkbox" size="small" error disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Error disabled checked checkbox" error checked disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Error disabled mixed checkbox" error mixed disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Error disabled mixed checked checkbox" error checked mixed disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Error disabled no effect" error disableEffect disabled labelPlacement={variant.before ? "start" : "end"} /></div>
        <div><Checkbox label="Small error disabled no effect" size="small" error disableEffect disabled labelPlacement={variant.before ? "start" : "end"} /></div>
      </Grid>
    </Grid>
  )}
</Variants>
```

### Checkbox with complex children

```jsx
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'

;

<div>
  <Checkbox label={(<>This is a <strong>complex</strong> text</>)} />
</div>
```
