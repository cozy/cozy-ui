```jsx
import CircleButton from 'cozy-ui/transpiled/react/CircleButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import HeartIcon from 'cozy-ui/transpiled/react/Icons/Heart'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'

// <-- only useful for the documentation
import Grid from 'cozy-ui/transpiled/react/Grid'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'

const columns = [{ title: 'default', disabled: false }, { title: 'disabled', disabled: true }]
const initialVariants = [{ default: true, active: false }]
// -->

;

<Variants initialVariants={initialVariants} radio={true} screenshotAllVariants>
  {variant => (
    <Grid container>
      {columns.map(column =>
        <Grid item xs={12} sm={6} className="u-mb-1" key={JSON.stringify(column)}>
          <Stack spacing="s">
            <Typography>{Object.values(column)[0]}</Typography>
            <CircleButton
              label="Button"
              disabled={Object.values(column)[1]}
              variant={Object.keys(variant).find(key => variant[key])}
              aria-label="like"
            >
              <Icon icon={HeartIcon} />
            </CircleButton>
            <CircleButton
              label="Long label button"
              disabled={Object.values(column)[1]}
              variant={Object.keys(variant).find(key => variant[key])}
            >
              <Icon icon={HeartIcon} />
            </CircleButton>
            <CircleButton
              disabled={Object.values(column)[1]}
              variant={Object.keys(variant).find(key => variant[key])}
              aria-label="person"
            >
              <Icon icon={PeopleIcon} />
            </CircleButton>
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```

### Use case

Can be used in a responsive container to distribute the elements.

```jsx
import CircleButton from 'cozy-ui/transpiled/react/CircleButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import HeartIcon from 'cozy-ui/transpiled/react/Icons/Heart'
import PeopleIcon from 'cozy-ui/transpiled/react/Icons/People'

// <-- only useful for the documentation
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'

const initialVariants = [{ fullWidth: false }]
const styles = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
}
// -->

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <div style={styles}>
      <CircleButton
        label="Label"
        fullWidth={variant.fullWidth}
        aria-label="like"
      >
        <Icon icon={HeartIcon} />
      </CircleButton>
      <CircleButton
        label="Very long long label"
        fullWidth={variant.fullWidth}
        aria-label="like"
      >
        <Icon icon={HeartIcon} />
      </CircleButton>
      <CircleButton
        label="Label"
        fullWidth={variant.fullWidth}
        aria-label="like"
      >
        <Icon icon={HeartIcon} />
      </CircleButton>
      <CircleButton
        label="Label"
        fullWidth={variant.fullWidth}
        aria-label="like"
      >
        <Icon icon={HeartIcon} />
      </CircleButton>
      <CircleButton
        label="Very long long label"
        fullWidth={variant.fullWidth}
        aria-label="like"
      >
        <Icon icon={HeartIcon} />
      </CircleButton>
      <CircleButton
        label="Label"
        fullWidth={variant.fullWidth}
        aria-label="like"
      >
        <Icon icon={HeartIcon} />
      </CircleButton>
    </div>
  )}
</Variants>
```
