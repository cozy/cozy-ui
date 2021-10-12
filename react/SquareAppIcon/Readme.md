Component used to show an app status, can be used in a list of apps and connectors in the Home
application.

```
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import SquareAppIcon from '.'
import { useCozyTheme } from '../CozyTheme'
import palette from '../../theme/palette.json'

const theme = useCozyTheme()

;


<Grid container spacing={1} style={{backgroundColor: theme === 'normal' ? palette.Grey[500] : null}}>
  <Grid item>
    <SquareAppIcon app="testapp" name="Normal"  />
  </Grid>
  <Grid item>
    <SquareAppIcon app="testapp" name="NoAccount" variant="ghost"  />
  </Grid>
  <Grid item>
    <SquareAppIcon app="testapp" name="Maintenance" variant="maintenance" />
  </Grid>
  <Grid item>
    <SquareAppIcon app="testapp" name="Error" variant="error" />
  </Grid>
  <Grid item>
    <SquareAppIcon name="Add" variant="add" />
  </Grid>
  <Grid item>
    <SquareAppIcon name="Shortcut" variant="shortcut" />
  </Grid>
</Grid>
```
