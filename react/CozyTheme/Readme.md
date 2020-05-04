An area of a page can have a different CozyTheme and components inside
will be automatically styled.

- At the moment only some Buttons support this.


```
import CozyTheme from 'cozy-ui/transpiled/react/CozyTheme';
import { Title, SubTitle } from 'cozy-ui/transpiled/react/Text';
import Button from 'cozy-ui/transpiled/react/Button';
import BarButton from 'cozy-ui/transpiled/react/BarButton';

const props = [{}, { disabled: true}, { busy: true }];

const themesSupportingContext = [
  'regular',
  'secondary'
];

<CozyTheme variant='inverted' className='u-p-1'>
  <Title className='u-white'>Inverted theme</Title>
  <SubTitle className='u-white'>Buttons</SubTitle>
  {themesSupportingContext.map(theme =>
    <p key={theme}>{
      props.map(
        props => <Button key={theme + JSON.stringify(props)} label={theme} theme={theme} {...props} />
      )
    }</p>
  )}
  <SubTitle className='u-white'>BarButton</SubTitle>
  <BarButton icon='dots' />
</CozyTheme>
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
