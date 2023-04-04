See [Material UI documentation](https://material-ui.com/components/floating-action-button/) to learn more about Floating Action Button (Fab).

### Default

```jsx
import Fab from 'cozy-ui/transpiled/react/Fab'
import Icon from 'cozy-ui/transpiled/react/Icon'
import PlusIcon from 'cozy-ui/transpiled/react/Icons/Plus'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Variants from 'cozy-ui/docs/components/Variants'

const props = [{ color: 'primary' }, { color: 'secondary' }, { color: 'inherit', default: true }]
const initialVariants = [{ small: false, medium: false, large: true }]

;
<Variants initialVariants={initialVariants} radio screenshotAllVariants>
  {variant => (
    <Grid container>
      {props.map(prop =>
        <Grid item xs={12} sm={4} className="u-mb-1" key={Object.values(prop)[0]}>
          <Stack spacing="s">
            <div className="u-mb-half u-mt-1">{prop.color} {prop.default && '(default)'}</div>
            <Fab aria-label="add" {...prop} size={Object.keys(variant).find(key => variant[key])}>
              <Icon icon={PlusIcon} />
            </Fab>
          </Stack>
        </Grid>
      )}
      {props.map(prop =>
        <Grid item xs={12} sm={4} className="u-mb-1" key={Object.values(prop)[0]}>
          <Stack spacing="s">
            <Fab aria-label="add" {...prop} variant="extended" size={Object.keys(variant).find(key => variant[key])}>
              <Icon icon={PlusIcon} className='u-mr-half' />
              Extended
            </Fab>
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```

### Disabled colors

```jsx
import Fab from 'cozy-ui/transpiled/react/Fab'
import Icon from 'cozy-ui/transpiled/react/Icon'
import PlusIcon from 'cozy-ui/transpiled/react/Icons/Plus'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import Stack from 'cozy-ui/transpiled/react/Stack'

const props = [{ color: 'primary' }, { color: 'secondary' }, { color: 'inherit', default: true }]

;
<Grid container>
  {props.map(prop =>
    <Grid item xs={12} sm={4} className="u-mb-1" key={Object.values(prop)[0]}>
      <Stack spacing="s">
        <div className="u-mb-half u-mt-1">{prop.color} {prop.default && '(default)'}</div>
        <Fab aria-label="add" {...prop} disabled>
          <Icon icon={PlusIcon} />
        </Fab>
      </Stack>
    </Grid>
  )}
  {props.map(prop =>
    <Grid item xs={12} sm={4} className="u-mb-1" key={Object.values(prop)[0]}>
      <Stack spacing="s">
        <Fab aria-label="add" {...prop} disabled variant="extended">
          <Icon icon={PlusIcon} className='u-mr-half' />
          Extended
        </Fab>
      </Stack>
  </Grid>
  )}
</Grid>
```
