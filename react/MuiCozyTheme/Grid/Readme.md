# Grid

Displays a Grid of items

### Default usage

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid';
import Card from 'cozy-ui/transpiled/react/Card';

<MuiCozyTheme>
    <Grid container spacing={24}>
        <Grid item xs={12}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={6}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={6}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={3}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={3}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={3}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={3}>
           <Card>Homer Simpson</Card>
        </Grid>
      </Grid>
</MuiCozyTheme>
```

### Responsive usage

```
import MuiCozyTheme from '..';
import Grid from '.';
import Card from '../../Card';

<MuiCozyTheme>
    <Grid container spacing={8}>
        <Grid item xs={12}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={12} sm={6}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={12} sm={6}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={3} sm={2}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={3} sm={2}>
           <Card>Homer Simpson</Card>
        </Grid>
       <Grid item xs={3} sm={2}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={3} sm={2}>
           <Card>Homer Simpson</Card>
        </Grid>
      </Grid>
</MuiCozyTheme>
```
