Component used to show an app status, can be used in a list of apps and connectors in the Home
application.

```jsx
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import SquareAppIcon from 'cozy-ui/transpiled/react/SquareAppIcon'
import { useCozyTheme } from 'cozy-ui/transpiled/react/CozyTheme'
import cloudWallpaper from '../../docs/cloud-wallpaper.jpg'

const theme = useCozyTheme()

;


<Grid container spacing={1} style={{ background: `center / cover no-repeat url(${cloudWallpaper})` }}
>
  <Grid item>
    <SquareAppIcon app="testapp" name="Normal" />
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
    <SquareAppIcon app="testapp" name="No Account long name very very very very long" variant="ghost" />
  </Grid>
  <Grid item>
    <SquareAppIcon name="Shortcut" variant="shortcut" />
  </Grid>
</Grid>
```
