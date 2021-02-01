```
import Button from 'cozy-ui/transpiled/react/MuiCozyTheme/Buttons';
import Typography from 'cozy-ui/transpiled/react/Typography';
import Icon from 'cozy-ui/transpiled/react/Icon'
import Stack from 'cozy-ui/transpiled/react/Stack'
import WrenchCircleIcon from 'cozy-ui/transpiled/react/Icons/WrenchCircle'

const ButtonsVariant = ({variant, size }) => {
  return (
    <div>
      <Button variant={variant} size={size}>
        <Icon icon={WrenchCircleIcon} className='u-mr-half' />
        Default
      </Button>
      <Button variant={variant} size={size} color="primary" className='u-ml-half'>
        <Icon icon={WrenchCircleIcon} className='u-mr-half' />
        Primary
      </Button>
      <Button variant={variant} size={size} color="secondary"  className='u-ml-half'>Secondary</Button>
      <Button variant={variant} size={size} disabled  className='u-ml-half'>Disabled</Button>
      <Button variant={variant} size={size} href="#text-buttons"  className='u-ml-half'>Link</Button>
    </div>
  )
}


const StateRadio = ({ name, ...props }) => {
  return <input
    type='radio'
    name={name}
    checked={state[name] == props.value}
    onChange={() => setState({ [name]: props.value })}
    {...props}
  />
}

const Example = ({ size, className }) => {
  return (
    <Stack spacing='s'>
      <div>
        <Typography variant='subtitle1' gutterBottom>Text Buttons</Typography>
        <ButtonsVariant size={size} />
      </div>
      <div>
        <Typography variant='subtitle1' gutterBottom>Outlined Buttons</Typography>
        <ButtonsVariant variant='outlined' size={size}/>
      </div>
      <div>
        <Typography variant='subtitle1'  gutterBottom>Contained buttons</Typography>
        <ButtonsVariant variant='contained' size={size} />
      </div>
    </Stack>
  )
}

initialState = {
  size: 'medium'
};

<>
  {true || isTesting()
  ? 
    <Stack spacing='l'>
      {['small', 'medium', 'large'].map(size => (
        <Stack spacing='xs'>
          <Typography variant='h3'>{ size }</Typography>
          <Example size={size} />
        </Stack>
      ))}
    </Stack> :
    <Stack spacing='m'>
      <div>
        <StateRadio value='small' name='size' /> small{' '}
        <StateRadio value='medium' name='size' /> medium{' '}
        <StateRadio value='large' name='size' /> large
      </div>
      <div>
        <Example size={state.size} />
      </div>
    </Stack>
  }
</>
```
