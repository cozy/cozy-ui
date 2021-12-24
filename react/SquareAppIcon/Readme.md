Component used to show an app status, can be used in a list of apps and connectors in the Home
application.

```jsx
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import SquareAppIcon from 'cozy-ui/transpiled/react/SquareAppIcon'
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { useCozyTheme } from 'cozy-ui/transpiled/react/CozyTheme'
import cloudWallpaper from 'cozy-ui/transpiled/react/../docs/cloud-wallpaper.jpg'

const theme = useCozyTheme()
const app = { name: "Test App", slug: "testapp", type: "app" }

;


<Grid container spacing={1} style={{ background: `center / cover no-repeat url(${cloudWallpaper})` }}
>
  <Grid item>
    <SquareAppIcon app={app} name="Normal" />
  </Grid>
  <Grid item>
    <SquareAppIcon app={app} name="Maintenance" variant="maintenance" />
  </Grid>
  <Grid item>
    <SquareAppIcon app={app} name="Error" variant="error" />
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
  <Grid item>
    <SquareAppIcon name="Custom Icon" IconContent={<Icon icon={CozyIcon} size="48" />} />
  </Grid>
  <Grid item>
    <SquareAppIcon name="Icon Grid" IconContent={(
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Icon icon={CozyIcon} />
        </Grid>
        <Grid item xs={6}>
          <Icon icon={CozyIcon} />
        </Grid>
          <Grid item xs={6}>
            <Icon icon={CozyIcon} />
          </Grid>
          <Grid item xs={6}>
            <Icon icon={CozyIcon} />
          </Grid>
        </Grid>
    )} />
  </Grid>
</Grid>
```
