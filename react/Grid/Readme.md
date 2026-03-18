# Grid

Displays a Grid of items

### Default usage

```jsx
import Grid from 'cozy-ui/transpiled/react/Grid'
import Box from 'cozy-ui/transpiled/react/Box'

const Card = props => <Box display="block" border={1} borderColor="var(--dividerColor)" borderRadius={8} padding={2} {...props} />

;

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
import Grid from 'cozy-ui/transpiled/react/Grid'
import Box from 'cozy-ui/transpiled/react/Box'

const Card = props => <Box display="block" border={1} borderColor="var(--dividerColor)" borderRadius={8} padding={2} {...props} />

;

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
