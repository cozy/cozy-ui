### Banner

```jsx
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Variants from 'docs/components/Variants';
import palette from 'cozy-ui/transpiled/react/palette';

import Banner from 'cozy-ui/transpiled/react/Banner';
import Button from 'cozy-ui/transpiled/react/Button';
import Icon from '../Icon';
import Circle from 'cozy-ui/transpiled/react/Circle';

const text = "You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text.";
const buttonOne = <Button theme="text" label="Turn on wifi" />;
const buttonTwo = <Button theme="text" label="Close" />;
const icon = <Circle><Icon icon="calendar" /></Circle>;

const initialVariants = [
  { icon: true, buttonOne: true, buttonTwo: true, inline: false }
];

<MuiCozyTheme>
  <Variants initialVariants={initialVariants}>{
    variant => (
      <Banner
        icon={variant.icon && icon}
        text={text}
        buttonOne={variant.buttonOne && buttonOne}
        buttonTwo={variant.buttonTwo && buttonTwo}
        inline={variant.inline}
      />
    )
  }</Variants>
  <hr />
  <Banner
    icon={<Icon icon="device-laptop" size="100%" />}
    text="Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times"
    bgcolor={palette['paleGrey']}
    buttonOne={<Button theme="text" icon='download' label="Download" onClick={() => alert("Clicked!")} />}
    buttonTwo={<Button theme="text" label="Close" />}
    inline
  />
</MuiCozyTheme>
```
