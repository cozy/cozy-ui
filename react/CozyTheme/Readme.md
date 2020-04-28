An area of a page can have a different CozyTheme and inside components
will be automatically styled.

- At the moment only some Buttons support this.


```
import CozyTheme from 'cozy-ui/transpiled/react/CozyTheme';
import { SubTitle } from 'cozy-ui/transpiled/react/Text';
import Button from 'cozy-ui/transpiled/react/Button';

const props = [{}, { disabled: true}, { busy: true }];

const themesSupportingContext = [
  'regular',
  'secondary'
];

<div className='u-bg-primaryColor u-p-1'>
  <SubTitle className='u-white'>Inverted theme</SubTitle>
  <CozyTheme variant='inverted'>
    {themesSupportingContext.map(theme =>
      <p key={theme}>{
        props.map(
          props => <Button key={theme + JSON.stringify(props)} label={theme} theme={theme} {...props} />
        )
      }</p>
    )}
  </CozyTheme>
</div>
```

`MuiCozyTheme` is used under the hood so that MaterialUI components are
also styled. 

```
import MuiButton from '@material-ui/core/Button';

<div className='u-bg-primaryColor u-p-1'>
  <CozyTheme variant='inverted'>
    <MuiButton>Default button with Cozy theme</MuiButton>
  </CozyTheme>
</div>
