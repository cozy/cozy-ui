An area of a page can have a different CozyTheme and components inside
will be automatically styled.

* At the moment only a few components support this (Buttons / Breadcrumbs / Figure).

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
  <div className='u-bg-white u-p-1 u-mb-1'>
    We can always go back to normal theme if a child must "get out"
    of the theme.
    <CozyTheme variant='normal'>
      <Button className='u-ml-0 u-mt-half' theme='primary' label='Primary button' />
    </CozyTheme>
  </div>
  <div class='u-stack-s'>
    <div class='u-error'>
      Error text : "Please enter the right password."
    </div>
    <div class='u-valid'>
      Valid text : "Success, you've connected EDF to your Cozy."
    </div>
    <div class='u-warn'>
      Warning text : "Something does not feel right, you may want to reload the page."
    </div>
  </div>
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

```
