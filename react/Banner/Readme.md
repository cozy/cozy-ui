### Banner

```jsx
import Variants from 'docs/components/Variants'
import palette from 'cozy-ui/transpiled/react/palette'

import Banner from 'cozy-ui/transpiled/react/Banner'
import Button from 'cozy-ui/transpiled/react/Button'
import Icon from 'cozy-ui/transpiled/react/Icon'
import CalendarIcon from 'cozy-ui/transpiled/react/Icons/Calendar'
import DeviceLaptopIcon from 'cozy-ui/transpiled/react/Icons/DeviceLaptop'
import Avatar from 'cozy-ui/transpiled/react/Avatar'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'

import DownloadIcon from "cozy-ui/transpiled/react/Icons/Download";

const shortText = "You have lost connection to the internet."
const longText = "You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text. You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text. You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text. You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text."
const buttonOne = <Button theme="text" label="Turn on wifi" />
const buttonTwo = <Button theme="text" label="No, thanks!" />
const icon = <Avatar icon={CalendarIcon} />

const initialVariants = [
  { icon: true, longText: true, buttonOne: true, buttonTwo: true, inline: false, backgroundColor: false }
];

<><Variants initialVariants={initialVariants}>{
    variant => (
      <Banner
        bgcolor={variant.backgroundColor ? palette['paleGrey'] : 'transparent'}
        icon={variant.icon && icon}
        text={variant.longText ? longText : shortText }
        buttonOne={variant.buttonOne && buttonOne}
        buttonTwo={variant.buttonTwo && buttonTwo}
        inline={variant.inline}
      />
    )
  }</Variants><Divider /><Banner
    icon={<Icon icon={DeviceLaptopIcon} />}
    text="Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times"
    bgcolor={palette['paleGrey']}
    buttonOne={<Button theme="text" icon={DownloadIcon} label="Download" onClick={() => alert("Clicked!")} />}
    buttonTwo={<Button theme="text" label="No, thanks!" />}
    inline
  /></>
```
