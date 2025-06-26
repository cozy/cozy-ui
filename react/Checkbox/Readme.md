### Standard Checkbox

```jsx
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'
import Grid from 'cozy-ui/transpiled/react/Grid'

;

<>
  <Grid container>
    <Grid item xs={6} sm={3}>
      <div><Checkbox label="Checkbox" /></div>
      <div><Checkbox label="Small Checked" size="small" /></div>
      <div><Checkbox label="Checked checkbox" checked /></div>
      <div><Checkbox label="Mixed checkbox" mixed /></div>
      <div><Checkbox label="Mixed checked checkbox" checked mixed /></div>
      <div><Checkbox label="No effect" disableEffect /></div>
      <div><Checkbox label="Small no effect" size="small" disableEffect /></div>
    </Grid>
    <Grid item xs={6} sm={3}>
      <div><Checkbox label="Disabled checkbox" disabled /></div>
      <div><Checkbox label="Small disabled checkbox" size="small" disabled /></div>
      <div><Checkbox label="Disabled checked checkbox" checked disabled /></div>
      <div><Checkbox label="Disabled mixed checkbox" mixed disabled /></div>
      <div><Checkbox label="Disabled mixed checked checkbox" checked mixed disabled /></div>
      <div><Checkbox label="Disabled no effect" disableEffect disabled /></div>
      <div><Checkbox label="Small disabled no effect" size="small" disableEffect disabled /></div>
    </Grid>
    <Grid item xs={6} sm={3}>
      <div><Checkbox label="Error checkbox" error /></div>
      <div><Checkbox label="Small error checkbox" size="small" error /></div>
      <div><Checkbox label="Error checked checkbox" error checked /></div>
      <div><Checkbox label="Error mixed checkbox" error mixed /></div>
      <div><Checkbox label="Error mixed checked checkbox" error checked mixed /></div>
      <div><Checkbox label="Error no effect" error disableEffect /></div>
      <div><Checkbox label="Small error no effect" size="small" error disableEffect /></div>
    </Grid>
    <Grid item xs={6} sm={3}>
      <div><Checkbox label="Error disabled checkbox" error disabled /></div>
      <div><Checkbox label="Small error disabled checkbox" size="small" error disabled /></div>
      <div><Checkbox label="Error disabled checked checkbox" error checked disabled /></div>
      <div><Checkbox label="Error disabled mixed checkbox" error mixed disabled /></div>
      <div><Checkbox label="Error disabled mixed checked checkbox" error checked mixed disabled /></div>
      <div><Checkbox label="Error disabled no effect" error disableEffect disabled /></div>
      <div><Checkbox label="Small error disabled no effect" size="small" error disableEffect disabled /></div>
    </Grid>
  </Grid>
</>
```

### Checkbox with complex children

```jsx
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'

;

<div>
  <Checkbox label={(<>This is a <strong>complex</strong> text</>)} />
</div>
```
