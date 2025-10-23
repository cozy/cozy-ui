```jsx
import { useState } from 'react'
import ToggleButton from 'cozy-ui/transpiled/react/ToggleButton'
import ToggleButtonGroup from 'cozy-ui/transpiled/react/ToggleButtonGroup'
import Icon from 'cozy-ui/transpiled/react/Icon'
import ListIcon from 'cozy-ui/transpiled/react/Icons/List'
import MosaicIcon from 'cozy-ui/transpiled/react/Icons/MosaicMin'
import GroupListIcon from 'cozy-ui/transpiled/react/Icons/GroupList'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'

initialVariants = [{ small: false, large: false, third: false }]
const cols = ['default', 'default-disabled', 'primary', 'primary-disabled']
const rows = ['square', 'rounded']

const ToggleGroup = ({ row, col, variant }) => {
  const [value, setValue] = useState('list')
  const handleChange = (ev, newValue) => {
    if (newValue !== null) {
      setValue(newValue)
    }
  }

  const size = Object.keys(variant).filter(key => variant[key])[0]

  return (
    <ToggleButtonGroup
      variant={row}
      value={value}
      aria-label="list display"
      exclusive
      size={size}
      onChange={handleChange}
    >
      <ToggleButton
        value="list"
        aria-label="list"
        rounded={row.includes('rounded')}
        color={col.replace('-disabled','')}
        disabled={col.includes('disabled')}
      >
        <Icon icon={ListIcon} />
      </ToggleButton>
      <ToggleButton
        value="mosaic"
        aria-label="mosaic"
        rounded={row.includes('rounded')}
        color={col.replace('-disabled','')}
        disabled={col.includes('disabled')}
      >
        <Icon icon={MosaicIcon} />
      </ToggleButton>
      {variant.third && (
        <ToggleButton
          value="grouplist"
          aria-label="grouplist"
          rounded={row.includes('rounded')}
          color={col.replace('-disabled','')}
          disabled={col.includes('disabled')}
        >
          <Icon icon={GroupListIcon} />
        </ToggleButton>
      )}
    </ToggleButtonGroup>
  )
}

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <Grid container>
      {cols.map(col =>
        <Grid item xs={12} sm={12 / cols.length} className="u-mb-1" key={JSON.stringify(col)}>
          <Stack spacing="s">
            <Typography variant="h5">{col}</Typography>
            {rows.map(row =>
              <div key={row + JSON.stringify(col)}>
                <ToggleGroup row={row} col={col} variant={variant} />
              </div>
            )}
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```
