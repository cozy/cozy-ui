## Grid Item

GridItem is currently experimental since its behavior is
not well defined yet.

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid';
import GridItem from 'cozy-ui/transpiled/react/Labs/GridItem';
import Card from 'cozy-ui/transpiled/react/Card';

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
