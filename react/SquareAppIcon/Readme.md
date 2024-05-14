Component used to show an app status, can be used in a list of apps and connectors in the Home
application.

```jsx
import Grid from 'cozy-ui/transpiled/react/Grid'
import SquareAppIcon from 'cozy-ui/transpiled/react/SquareAppIcon'
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { useCozyTheme } from 'cozy-ui/transpiled/react/providers/CozyTheme'
import cloudWallpaper from '../../docs/cloud-wallpaper.jpg'
import Button from 'cozy-ui/transpiled/react/Buttons'

const { variant } = useCozyTheme()
const app = { name: "Test App", slug: "testapp", type: "app" }
const [isLoading, setLoading] = React.useState(false)
const [isError, setIsError] = React.useState(false)

;

<>
  <Button className="u-mb-1 u-mr-1" label="Toggle Loading" onClick={() => setLoading(!isLoading)} />
  <Button className="u-mb-1" label="Toggle Loading Error" onClick={() => setIsError(!isError)} />

  <Grid container spacing={1} style={{ background: variant === 'inverted' ? `center / cover no-repeat url(${cloudWallpaper})` : 'white' }}
  >
    <Grid item>
      <SquareAppIcon app={app} description="This description will be ignored as default display mode is compact" name="Normal" />
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
      <SquareAppIcon IconContent={<Icon icon={CozyIcon} size="48" />} name="Loading" variant={isLoading ? 'loading' : 'default'} />
    </Grid>
    <Grid item>
      <SquareAppIcon IconContent={<Icon icon={CozyIcon} size="48" />} name="Loading" variant={isError ? 'error' : 'loading'} />
    </Grid>
    <Grid item>
      <SquareAppIcon name="Shortcut" variant="shortcut" IconContent={<img
              src={`data:image/svg+xml;base64,${window.btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <g fill="none" fill-rule="evenodd" transform="translate(0 2)">
      <rect width="32" height="26" y="2" fill="#B2D3FF" rx="2"/>
      <path fill="#197BFF" d="M0,0.990777969 C0,0.443586406 0.449948758,0 1.00684547,0 L12.9931545,0 C13.5492199,0 14.3125,0.3125 14.7107565,0.71075654 L15.2892435,1.28924346 C15.6817835,1.68178346 16.4446309,2 17.0008717,2 L30.0059397,2 C31.1072288,2 32,2.89470506 32,4 L32,4 L17.0008717,4 C16.4481055,4 15.6875,4.3125 15.2892435,4.71075654 L14.7107565,5.28924346 C14.3182165,5.68178346 13.5500512,6 12.9931545,6 L1.00684547,6 C0.450780073,6 0,5.54902482 0,5.00922203 L0,0.990777969 Z"/>
    </g>
  </svg>`)}`}
              width={32}
              height={32}
              alt={"Shortcut"}
            />}/>
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
</>
```

### Using the "detailed" display mode

Set the `display` prop to `detailed` to show the app `description` below the app `name`, provided the `description` prop is set.
Otherwise, the app `name` will be centered vertically.

```jsx
import Grid from 'cozy-ui/transpiled/react/Grid'
import SquareAppIcon from 'cozy-ui/transpiled/react/SquareAppIcon'
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import Icon from 'cozy-ui/transpiled/react/Icon'
import { useCozyTheme } from 'cozy-ui/transpiled/react/providers/CozyTheme'
import cloudWallpaper from '../../docs/cloud-wallpaper.jpg'
import Button from 'cozy-ui/transpiled/react/Buttons'

const { variant } = useCozyTheme()
const app = { name: "Test App", slug: "testapp", type: "app" }
const [isLoading, setLoading] = React.useState(false)
const [isError, setIsError] = React.useState(false)

;

<>
  <Button className="u-mb-1 u-mr-1" label="Toggle Loading" onClick={() => setLoading(!isLoading)} />
  <Button className="u-mb-1" label="Toggle Loading Error" onClick={() => setIsError(!isError)} />

  <Grid container spacing={4}>
    <Grid item xs={4}>
      <SquareAppIcon display="detailed" name="Weather Wiz" description="Get real-time weather updates and forecasts" />
    </Grid>
    <Grid item xs={4}>
      <SquareAppIcon display="detailed" name="Meal Planner" description="Plan your meals with nutrition tracking" variant="maintenance" />
    </Grid>
    <Grid item xs={4}>
      <SquareAppIcon display="detailed" name="Travel Tracker" description="Explore and document your travel adventures" variant="error" />
    </Grid>
    <Grid item xs={4}>
      <SquareAppIcon display="detailed" name="Fitness Friend" variant="add" />
    </Grid>
    <Grid item xs={4}>
      <SquareAppIcon display="detailed" name="Mindful Moments" description="Guided meditations for daily mindfulness" variant="ghost" />
    </Grid>
    <Grid item xs={4}>
      <SquareAppIcon display="detailed" name="Study Space" description="Organize your study schedule and resources" variant="shortcut" />
    </Grid>
    <Grid item xs={4}>
      <SquareAppIcon display="detailed" name="Quick Notes" IconContent={<Icon icon={CozyIcon} size="48" />} variant={isLoading ? 'loading' : 'default'} />
    </Grid>
    <Grid item xs={4}>
      <SquareAppIcon display="detailed" name="Daily Budget" description="Manage your daily expenses and budgets" IconContent={<Icon icon={CozyIcon} size="48" />} variant={isError ? 'error' : 'loading'} />
    </Grid>
    <Grid item xs={4}>
      <SquareAppIcon display="detailed" name="Event Planner" description="Plan and schedule your events effectively" IconContent={<Icon icon={CozyIcon} size="48" />} />
    </Grid>
  </Grid>
</>
```
