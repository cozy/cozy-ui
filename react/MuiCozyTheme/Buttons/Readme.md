```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Button from 'cozy-ui/transpiled/react/MuiCozyTheme/Buttons';

const ButtonsVariant = ({variant}) => {
  return (
    <div>
      <Button variant={variant} className='u-m-1'>Default</Button>
      <Button variant={variant} color="primary" className='u-m-1'>Primary</Button>
      <Button variant={variant} color="secondary" className='u-m-1'>Secondary</Button>
      <Button variant={variant} disabled className='u-m-1'>Disabled</Button>
      <Button variant={variant} href="#text-buttons" className='u-m-1'>Link</Button>
      <input accept="image/*" className='u-hide' id="flat-button-file" multiple type="file" />
      <label htmlFor="flat-button-file">
        <Button variant={variant} component="span" className='u-m-1'>Upload</Button>
      </label>
    </div>
  )
}

<MuiCozyTheme>
  Text Buttons:
  <ButtonsVariant />

  Outlined Buttons:
  <ButtonsVariant variant='outlined' />

  Contained Buttons:
  <ButtonsVariant variant='contained' />
</MuiCozyTheme>
```
