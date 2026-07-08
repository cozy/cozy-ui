A component suitable to be used when an Icon should be used as a button.
Provides hover, active styles + accessible size.

```jsx
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import { Cross, Icon, People, Restore, Trash } from '@linagora/twake-icons'

// <-- only useful for the documentation
import Grid from 'cozy-ui/transpiled/react/Grid'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'

const columns = [{ title: 'default', disabled: false }, { title: 'disabled', disabled: true }]
const initialVariants = [{ small: false, medium: true, large: false, xlarge: false }]
// -->

;

<Variants initialVariants={initialVariants} radio screenshotAllVariants>
  {variant => (
    <Grid container>
      {columns.map(column =>
        <Grid item xs={12} sm={6} className="u-mb-1" key={JSON.stringify(column)}>
          <Stack spacing="s">
            <Typography>{Object.values(column)[0]}</Typography>
            <p>
              <IconButton
                disabled={Object.values(column)[1]}
                size={Object.keys(variant).find(key => variant[key])}
              >
                <Icon icon={People}/>
              </IconButton>
              <IconButton
                color="primary"
                disabled={Object.values(column)[1]}
                size={Object.keys(variant).find(key => variant[key])}
              >
                <Icon icon={Restore} />
              </IconButton>
              <IconButton
                color="secondary"
                disabled={Object.values(column)[1]}
                size={Object.keys(variant).find(key => variant[key])}
              >
                <Icon icon={Cross}/>
              </IconButton>
              <IconButton
                color="error"
                disabled={Object.values(column)[1]}
                size={Object.keys(variant).find(key => variant[key])}
              >
                <Icon icon={Trash}/>
              </IconButton>
            </p>
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```

### Example with embedded button

```jsx
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import { Icon, Stop } from '@linagora/twake-icons'
import Button from 'cozy-ui/transpiled/react/Buttons'

;

<IconButton className="u-p-half">
  <Button
    component="div"
    className="u-miw-auto u-w-2 u-h-2 u-bdrs-circle"
    classes={{ label: "u-flex u-w-auto" }}
    label={<Icon icon={Stop} size={12} />}
    size="small"
  />
</IconButton>

```
