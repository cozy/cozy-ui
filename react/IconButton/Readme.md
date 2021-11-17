A component suitable to be used when an Icon should be used as a button.
Provides hover, active styles + accessible size (48px).

```jsx
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Typography from 'cozy-ui/transpiled/react/Typography'
import LeftIcon from 'cozy-ui/transpiled/react/Icons/Left'
import RestoreIcon from 'cozy-ui/transpiled/react/Icons/Restore'
import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'

const StateRadio = ({ name, ...props }) => {
  return <input
    type='radio'
    name={name}
    checked={state[name] == props.value}
    onChange={() => setState({ [name]: props.value })}
    {...props}
  />
}

const Example = ({ color }) => {
  return <>
    <IconButton color={color}>
      <Icon icon={LeftIcon} />
    </IconButton>
    <IconButton color={color}>
      <Icon icon={RestoreIcon} />
    </IconButton>
    <IconButton color={color}>
      <Icon icon={RightIcon} />
    </IconButton>
  </>
}

initialState = {
  color: 'default'
}

const colors = ['default', 'primary', 'secondary']

;

<>
  { isTesting ()
    ? <Stack spacing='l'>
        {colors.map((color, index) => (
          <div key={index}>
            <Typography variant='h3' gutterBottom>color: {color}</Typography>
            <Example color={color} key={color} />
          </div>
        ))}
    </Stack>
    : <div>
      <Stack spacing='l'>
        <div>
          <StateRadio value='default' name='color' /> default{' '}
          <StateRadio value='primary' name='color' /> primary{' '}
          <StateRadio value='secondary' name='color' /> secondary
        </div>
        <Example color={state.color} />
      </Stack>
    </div>
  }
</>
```
