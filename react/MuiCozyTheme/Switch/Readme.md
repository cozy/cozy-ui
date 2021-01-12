Used to present a binary choice to the user.

Uses [Material UI's Switch](https://material-ui.com/components/switches/).

```
import { Media, Img } from '../../Media'
import Switch from '.'
import Typography from "cozy-ui/transpiled/react/Typography";

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
      <Typography variant="body1">Primary</Typography>
      <Switch color="primary" checked={state.switch3}  onClick={handleClick3} />
    </Aligned>
    <Aligned>
      <Typography variant="body1">Secondary</Typography>
      <Switch color="secondary" checked={state.switch3} onClick={handleClick3} />
    </Aligned>
    <Aligned>
      <Typography variant="body1">Disabled</Typography>
      <Switch color="secondary" checked={state.switch2} disabled onClick={handleClick2} />
    </Aligned>
  </>;
};

<Switches />
```
