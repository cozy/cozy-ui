# Grid

Displays a Grid of items

### Default usage

```
const MuiCozyTheme = require('..').default;
const Grid = require('.').default;
const Card = require('../../Card').default;

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
const MuiCozyTheme = require('..').default;
const Grid = require('.').default;
const Card = require('../../Card').default;

<MuiCozyTheme>
    <Grid container spacing={24}>
        <Grid item xs={12}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={12} sm={6}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={12} sm={6}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={6} sm={3}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={6} sm={3}>
           <Card>Homer Simpson</Card>
        </Grid>
       <Grid item xs={6} sm={3}>
           <Card>Homer Simpson</Card>
        </Grid>
        <Grid item xs={6} sm={3}>
           <Card>Homer Simpson</Card>
        </Grid>
      </Grid>
</MuiCozyTheme>
```
