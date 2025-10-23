# Grid

Displays a Grid of items

### Default usage

```jsx
import Grid from 'cozy-ui/transpiled/react/Grid';
import Card from 'cozy-ui/transpiled/react/Card';

<Grid container spacing={3}>
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
```

### Responsive usage

```jsx
import Grid from 'cozy-ui/transpiled/react/Grid';
import Card from 'cozy-ui/transpiled/react/Card';

<Grid container spacing={1}>
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
```
