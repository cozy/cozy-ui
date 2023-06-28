Used to present a binary choice to the user.

Uses [Material UI's Switch](https://material-ui.com/components/switches/).

```jsx
import { useState, useCallback } from 'react'
import { Media, Img } from 'cozy-ui/transpiled/react/deprecated/Media'
import Switch from 'cozy-ui/transpiled/react/Switch'
import Typography from "cozy-ui/transpiled/react/Typography"
import Stack from "cozy-ui/transpiled/react/Stack"
import Box from '@material-ui/core/Box'

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
    onChange={handleClick}
  />
}

const Switches = () => {
  return <Stack spacing='xs'>
    {['primary', 'secondary', 'default'].map((color, i) => {
      return (
        <Box display='flex' alignItems='center' key={i}>
          <Typography variant='body1' display="inline">
            { color }
          </Typography>
          <StateSwitch id={i} color={color} />
        </Box>
      )
    })}
  </Stack>
}

;

<Switches />
```
