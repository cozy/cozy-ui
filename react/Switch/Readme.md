Used to present a binary choice to the user.

```jsx
import { useState, useCallback } from 'react'
import Switch from 'cozy-ui/transpiled/react/Switch'
import Typography from "cozy-ui/transpiled/react/Typography"
import Stack from "cozy-ui/transpiled/react/Stack"
import Box from 'cozy-ui/transpiled/react/Box'
import CheckIcon from 'cozy-ui/transpiled/react/Icons/Check'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'

initialState = {
  switch0: true,
  switch1: true,
  switch2: false
}

const StateSwitch = ({ id, color }) => {
  const [checked, setChecked] = useState(initialState[`switch${id}`])
  const handleClick = useCallback((ev) => setChecked(ev.target.checked), [setChecked])
  return <Switch
    color={color}
    checked={checked}
    {...(isTwakeTheme() && { icon: CheckIcon })}
    onChange={handleClick}
  />
}

;

<Stack spacing='xs'>
  {['primary', 'secondary', 'default'].map((color, i) => {
    return (
      <Box display='flex' alignItems='center' key={i}>
        <Typography variant='body1' display="inline">{ color }</Typography>
        <StateSwitch id={i} color={color} />
      </Box>
    )
  })}
  <FormControlLabel control={<Switch color="primary" />} label="With label" />
  <FormControlLabel control={<Switch color="primary" checked />} label="With label" />
  <br />
  <FormControlLabel control={<Switch color="primary" disabled />} label="Primary, disabled with label" />
  <FormControlLabel control={<Switch color="primary" checked disabled />} label="Primary, checked - disabled with label" />
  <br />
  <FormControlLabel
    label="Primary, disabled with label"
    control={
      <Switch
        color="primary"
        {...(isTwakeTheme() && { icon: CheckIcon })}
        disabled
      />
    }
  />
  <FormControlLabel
    label="Primary, checked - disabled with label"
    control={
      <Switch
        color="primary"
        {...(isTwakeTheme() && { icon: CheckIcon })}
        checked
        disabled
      />
    }
  />
  <br />
  <FormControlLabel control={<Switch color="secondary" disabled />} label="Secondary, checked with label" />
  <FormControlLabel control={<Switch color="secondary" checked disabled />} label="Secondary, checked - disabled with label" />
  <br />
  <FormControlLabel control={<Switch disabled />} label="Default, checked with label" />
  <FormControlLabel control={<Switch checked disabled />} label="Default, checked - disabled with label" />
</Stack>
```
