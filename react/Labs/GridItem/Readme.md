## Grid Item

GridItem is currently experimental since its behavior is
not well defined yet.

```
import MuiCozyTheme from '../../MuiCozyTheme';
import Grid from '../../MuiCozyTheme/Grid';
import GridItem from './index';
import Card from '../../Card';

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
