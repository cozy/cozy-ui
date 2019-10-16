## Grid Item

GridItem is currently experimental since its behavior is
not well defined yet.

```
const MuiCozyTheme = require('../../MuiCozyTheme').default;
const Grid = require('../../MuiCozyTheme/Grid').default;
const GridItem = require('.').default;
const Card = require('../../Card').default;

<MuiCozyTheme>
    <Grid container spacing={24}>
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
</MuiCozyTheme>
```
