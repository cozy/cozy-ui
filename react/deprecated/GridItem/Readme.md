## Grid Item

GridItem is currently experimental since its behavior is
not well defined yet.

```jsx
import Grid from 'cozy-ui/transpiled/react/Grid'
import GridItem from 'cozy-ui/transpiled/react/deprecated/GridItem'
import Box from 'cozy-ui/transpiled/react/Box'

;

<Grid container spacing={3}>
    <GridItem>
        <Box display="block" border={1} borderColor="var(--dividerColor)" borderRadius={8} padding={2} className="u-ellipsis">Homer Simpson</Box>
    </GridItem>
    <GridItem>
         <Box display="block" border={1} borderColor="var(--dividerColor)" borderRadius={8} padding={2} className="u-ellipsis">Homer Simpson</Box>
    </GridItem>
    <GridItem>
         <Box display="block" border={1} borderColor="var(--dividerColor)" borderRadius={8} padding={2} className="u-ellipsis">Homer Simpson</Box>
    </GridItem>
    <GridItem>
         <Box display="block" border={1} borderColor="var(--dividerColor)" borderRadius={8} padding={2} className="u-ellipsis">Homer Simpson</Box>
    </GridItem>
</Grid>
```
