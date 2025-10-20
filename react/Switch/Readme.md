Used to present a binary choice to the user.

```jsx
import { useState, useCallback } from 'react'
import Switch from 'cozy-ui/transpiled/react/Switch'
import Typography from "cozy-ui/transpiled/react/Typography"
import Stack from "cozy-ui/transpiled/react/Stack"
import Box from 'cozy-ui/transpiled/react/Box'
import Divider from 'cozy-ui/transpiled/react/Divider'
import CheckIcon from 'cozy-ui/transpiled/react/Icons/Check'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'
import FormGroup from 'cozy-ui/transpiled/react/FormGroup'
import Variants from 'cozy-ui/docs/components/Variants'

initialState = { switch0: true, switch1: true, switch2: false }
const initialVariants = [{ before: false }]

const StateSwitch = ({ id, color }) => {
  const [checked, setChecked] = useState(initialState[`switch${id}`])
  const handleClick = useCallback((ev) => setChecked(ev.target.checked), [setChecked])
  return <Switch
    color={color}
    checked={checked}
    icon={CheckIcon}
    onChange={handleClick}
  />
}

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <Stack spacing='xs'>
      {['primary', 'secondary', 'default'].map((color, i) => {
        return (
          <Box display='flex' alignItems='center' key={i}>
            <Typography display="inline">{`${color}:`}</Typography>
            <StateSwitch id={i} color={color} />
          </Box>
        )
      })}
      <Divider className="u-mv-1" />
      <Typography variant="h4">With labels</Typography>
      <FormGroup row>
        <FormControlLabel
          control={<Switch color="primary" />}
          label="With label"
          labelPlacement={variant.before ? "start" : "end"}
        />
        <FormControlLabel
          control={<Switch color="primary" checked />}
          label="With label - checked"
          labelPlacement={variant.before ? "start" : "end"}
        />
      </FormGroup>
      <Typography className="u-mv-1" variant="h5">With disable</Typography>
      <FormGroup row>
      <FormControlLabel
        control={<Switch color="primary" disabled />}
        label="Primary"
        labelPlacement={variant.before ? "start" : "end"}
      />
      <FormControlLabel
        control={<Switch color="primary" checked disabled />}
        label="Primary - checked"
        labelPlacement={variant.before ? "start" : "end"}
      />
      </FormGroup>
      <FormGroup row>
        <FormControlLabel
          label="Primary"
          labelPlacement={variant.before ? "start" : "end"}
          control={
            <Switch
              color="primary"
              icon={CheckIcon}
              disabled
            />
          }
        />
        <FormControlLabel
          label="Primary - checked"
          labelPlacement={variant.before ? "start" : "end"}
          control={
            <Switch
              color="primary"
              icon={CheckIcon}
              checked
              disabled
            />
          }
        />
      </FormGroup>
      <FormGroup row>
        <FormControlLabel
          control={<Switch color="secondary" disabled />}
          label="Secondary"
          labelPlacement={variant.before ? "start" : "end"}
        />
        <FormControlLabel
          control={<Switch color="secondary" checked disabled />}
          label="Secondary - checked"
          labelPlacement={variant.before ? "start" : "end"}
        />
      </FormGroup>
      <FormGroup row>
        <FormControlLabel
          control={<Switch disabled />}
          label="Default"
          labelPlacement={variant.before ? "start" : "end"}
        />
        <FormControlLabel
          control={<Switch checked disabled />}
          label="Default - checked"
          labelPlacement={variant.before ? "start" : "end"}
        />
      </FormGroup>
    </Stack>
  )}
</Variants>
```
