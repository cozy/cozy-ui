## Grid Item

GridItem is currently experimental since its behavior is
not well defined yet.

```jsx
import Grid from 'cozy-ui/transpiled/react/Grid';
import GridItem from 'cozy-ui/transpiled/react/deprecated/GridItem';
import Card from 'cozy-ui/transpiled/react/Card';

<Grid container spacing={3}>
    <GridItem>
        <Card className="u-ellipsis">Homer Simpson</Card>
    </GridItem>
    <GridItem>
         <Card className="u-ellipsis">Homer Simpson</Card>
    </GridItem>
    <GridItem>
         <Card className="u-ellipsis">Homer Simpson</Card>
    </GridItem>
    <GridItem>
         <Card className="u-ellipsis">Homer Simpson</Card>
    </GridItem>
</Grid>
```
