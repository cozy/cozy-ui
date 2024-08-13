### Banner

```jsx
import Variants from 'cozy-ui/docs/components/Variants'
import palette from 'cozy-ui/transpiled/react/palette'

import Banner from 'cozy-ui/transpiled/react/Banner'
import Button from 'cozy-ui/transpiled/react/deprecated/Button'
import Icon from 'cozy-ui/transpiled/react/Icon'
import DeviceLaptopIcon from 'cozy-ui/transpiled/react/Icons/DeviceLaptop'
import DownloadIcon from 'cozy-ui/transpiled/react/Icons/Download'

const shortText = 'Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.'
const longText = 'You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text. You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text. You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text. You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text.'
const buttonOne = <Button theme="text" icon={DownloadIcon} label="Download" onClick={() => alert('Clicked!')} />
const buttonTwo = <Button theme="text" label="No, thanks!" />
const icon = <Icon icon={DeviceLaptopIcon} size={16} />

const initialVariants = [{
  icon: true,
  longText: false,
  buttonOne: true,
  buttonTwo: true,
  inline: true,
  backgroundColor: true,
  disableIconStyles: false
}]

;

<Variants initialVariants={initialVariants}>
  {variant => (
    <Banner
      bgcolor={
        variant.backgroundColor ? 'var(--contrastBackgroundColor)' : 'transparent'
      }
      icon={variant.icon && icon}
      text={variant.longText ? longText : shortText}
      buttonOne={variant.buttonOne && buttonOne}
      buttonTwo={variant.buttonTwo && buttonTwo}
      inline={variant.inline}
      disableIconStyles={variant.disableIconStyles}
    />
  )}
</Variants>
```
