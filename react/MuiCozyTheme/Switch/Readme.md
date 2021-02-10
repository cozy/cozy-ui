Used to present a binary choice to the user.

Uses [Material UI's Switch](https://material-ui.com/components/switches/).

```
import { Media, Img } from '../../Media'
import Switch from '.'
import Typography from "cozy-ui/transpiled/react/Typography";
import Stack from "cozy-ui/transpiled/react/Stack";
import Box from '@material-ui/core/Box'

initialState = {
  switch1: true,
  switch2: true,
  switch3: false
}

const handleClick1 = ev => setState({ switch1: ev.target.checked })
const handleClick2 = ev => setState({ switch2: ev.target.checked })
const handleClick3 = ev => setState({ switch3: ev.target.checked });

const Switches = () => {
  return <Stack spacing='xs'>
    {['primary', 'secondary', 'default'].map(color => {
      return (
        <Box display='flex' alignItems='center'>
          <Typography variant='body1' inline>
            { color }
          </Typography>
          <Switch color={color} checked  />
        </Box>
      )
    })}
  </Stack>;
};

<Switches />
```
