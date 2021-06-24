### Standard Checkbox

```jsx
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import CozyTheme from 'cozy-ui/transpiled/react/CozyTheme';

<>
  <Grid container>
    <Grid item xs={6}>
      <div><Checkbox label="This is a checkbox" /></div>
      <div><Checkbox label="This is a checked checkbox" checked /></div>
      <div><Checkbox label="This is a mixed checkbox" mixed /></div>
      <div><Checkbox label="This is a mixed checked checkbox" checked mixed /></div>
    </Grid>
    <Grid item xs={6}>
      <div><Checkbox label="This is a disabled checkbox" disabled /></div>
      <div><Checkbox label="This is a disabled checked checkbox" checked disabled /></div>
      <div><Checkbox label="This is a disabled mixed checkbox" mixed disabled /></div>
      <div><Checkbox label="This is a disabled mixed checked checkbox" checked mixed disabled /></div>
    </Grid>
  </Grid>

  {isTesting() &&
    <CozyTheme variant='inverted'>
      <Paper className='u-p-1'>
        <Grid container>
          <Grid item xs={6}>
            <div><Checkbox label="This is a checkbox" /></div>
            <div><Checkbox label="This is a checked checkbox" checked /></div>
            <div><Checkbox label="This is a mixed checkbox" mixed /></div>
            <div><Checkbox label="This is a mixed checked checkbox" checked mixed /></div>
          </Grid>
          <Grid item xs={6}>
            <div><Checkbox label="This is a disabled checkbox" disabled /></div>
            <div><Checkbox label="This is a disabled checked checkbox" checked disabled /></div>
            <div><Checkbox label="This is a disabled mixed checkbox" mixed disabled /></div>
            <div><Checkbox label="This is a disabled mixed checked checkbox" checked mixed disabled /></div>
          </Grid>
        </Grid>
      </Paper>
    </CozyTheme>
  }
</>
```

### Error Checkbox

```jsx
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import CozyTheme from 'cozy-ui/transpiled/react/CozyTheme';

<>
  <Grid container>
    <Grid item xs={6}>
      <div><Checkbox label="This is a checkbox with an error" error /></div>
      <div><Checkbox label="This is a checked checkbox with an error" error checked /></div>
      <div><Checkbox label="This is a mixed checkbox with an error" error mixed /></div>
      <div><Checkbox label="This is a mixed checked checkbox with an error" error checked mixed /></div>
    </Grid>
    <Grid item xs={6}>
      <div><Checkbox label="This is a disabled checkbox with an error" error disabled /></div>
      <div><Checkbox label="This is a disabled checked checkbox with an error" error checked disabled /></div>
      <div><Checkbox label="This is a disabled mixed checkbox with an error" error mixed disabled /></div>
      <div><Checkbox label="This is a disabled mixed checked checkbox with an error" error checked mixed disabled /></div>
    </Grid>
  </Grid>

  {isTesting() &&
    <CozyTheme variant='inverted'>
      <Paper className='u-p-1'>
        <Grid container>
          <Grid item xs={6}>
            <div><Checkbox label="This is a checkbox with an error" error /></div>
            <div><Checkbox label="This is a checked checkbox with an error" error checked /></div>
            <div><Checkbox label="This is a mixed checkbox with an error" error mixed /></div>
            <div><Checkbox label="This is a mixed checked checkbox with an error" error checked mixed /></div>
          </Grid>
          <Grid item xs={6}>
            <div><Checkbox label="This is a disabled checkbox with an error" error disabled /></div>
            <div><Checkbox label="This is a disabled checked checkbox with an error" error checked disabled /></div>
            <div><Checkbox label="This is a disabled mixed checkbox with an error" error mixed disabled /></div>
            <div><Checkbox label="This is a disabled mixed checked checkbox with an error" error checked mixed disabled /></div>
          </Grid>
        </Grid>
      </Paper>
    </CozyTheme>
  }
</>
```

### Checkbox with complex children

```jsx
import Checkbox from 'cozy-ui/transpiled/react/Checkbox';
<div>
  <Checkbox label={(<>This is a <strong>complex</strong> text</>)} />
</div>
```
