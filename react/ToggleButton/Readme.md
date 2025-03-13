```jsx
import { useState } from 'react'
import ToggleButton from 'cozy-ui/transpiled/react/ToggleButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import HeartIcon from 'cozy-ui/transpiled/react/Icons/Heart'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'

initialVariants = [{ small: false, large: false }]
const cols = ['default', 'default-disabled', 'primary', 'primary-disabled']
const rows = ['square', 'rounded']

const makeSize = variant => Object.keys(variant).filter(key => variant[key])[0]

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
                <Typography gutterBottom>{row}</Typography>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <ToggleButton
                    value="list"
                    aria-label="list"
                    rounded={row.includes('rounded')}
                    color={col.replace('-disabled','')}
                    size={makeSize(variant)}
                    disabled={col.includes('disabled')}
                  >
                    <Icon icon={HeartIcon} />
                  </ToggleButton>
                  <ToggleButton
                    value="list"
                    aria-label="list"
                    rounded={row.includes('rounded')}
                    color={col.replace('-disabled','')}
                    selected
                    size={makeSize(variant)}
                    disabled={col.includes('disabled')}
                  >
                    <Icon icon={HeartIcon} />
                  </ToggleButton>
                </div>
              </div>
            )}
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```
