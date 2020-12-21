Used to present a binary choice to the user.

Uses [Material UI's Switch](https://material-ui.com/components/switches/).

```
import MuiCozyTheme from '..'
import CozyTheme from '../../CozyTheme'
import Button from '@material-ui/core/Button'
import { Title, Text } from '../../Text'
import Stack from '../../Stack'
import { Media, Img } from '../../Media'
import Paper from '../../Paper'
import Switch from '.'

initialState = {
  switch1: false,
  switch2: false,
  switch3: true
}

const handleClick1 = ev => setState({ switch1: ev.target.checked })
const handleClick2 = ev => setState({ switch2: ev.target.checked })
const handleClick3 = ev => setState({ switch3: ev.target.checked });

const Aligned = ({ children }) => {
  return <Media>
    <Img>{ children[0] }</Img>
    <Img>{ children[1] }</Img>
  </Media>
} 

const Switches = () => {
  return <>
    <Aligned>
      <Text>Primary</Text>
      <Switch color="primary" checked={state.switch3}  onClick={handleClick3} />
    </Aligned>
    <Aligned>
      <Text>Secondary</Text>
      <Switch color="secondary" checked={state.switch3} onClick={handleClick3} />
    </Aligned>
    <Aligned>
      <Text>Disabled</Text>
      <Switch color="secondary" checked={state.switch2} disabled onClick={handleClick2} />
    </Aligned>
  </>
}

<MuiCozyTheme>
  <Stack spacing='m'>
    <Title className='u-mt-1'>Normal theme</Title>
    <div>
      <Switches />
    </div>
    <Title className='u-mt-1'>Inverted theme</Title>
    <CozyTheme variant='inverted'>
      <Paper square elevation={0} className='u-p-1'>
        <Switches />
      </Paper>
    </CozyTheme>
  </Stack>
</MuiCozyTheme>
```
