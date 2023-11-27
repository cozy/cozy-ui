A component suitable to be used when an Icon should be used as a button.
Provides hover, active styles + accessible size.

```jsx
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Icon from 'cozy-ui/transpiled/react/Icon'

// <-- only useful for the documentation
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'
import TrashIcon from 'cozy-ui/transpiled/react/Icons/Trash'
import RestoreIcon from 'cozy-ui/transpiled/react/Icons/Restore'
import CrossIcon from 'cozy-ui/transpiled/react/Icons/Cross'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'

const columns = [{ title: 'default', disabled: false }, { title: 'disabled', disabled: true }]
const initialVariants = [{ small: false, medium: true, large: false }]
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
                <Icon icon={PeopleIcon}/>
              </IconButton>
              <IconButton
                color="primary"
                disabled={Object.values(column)[1]}
                size={Object.keys(variant).find(key => variant[key])}
              >
                <Icon icon={RestoreIcon} />
              </IconButton>
              <IconButton
                color="secondary"
                disabled={Object.values(column)[1]}
                size={Object.keys(variant).find(key => variant[key])}
              >
                <Icon icon={CrossIcon}/>
              </IconButton>
              <IconButton
                color="error"
                disabled={Object.values(column)[1]}
                size={Object.keys(variant).find(key => variant[key])}
              >
                <Icon icon={TrashIcon}/>
              </IconButton>
            </p>
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```
