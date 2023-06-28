An area of a page can have a different CozyTheme and components inside
will be automatically styled.

`MuiCozyTheme` is used under the hood so that MaterialUI components are
also styled.

The inverted theme is not supported for several components but the work
[is in progress](https://github.com/cozy/cozy-ui/issues/1692).

```jsx
import CozyTheme from 'cozy-ui/transpiled/react/CozyTheme'
import Button from 'cozy-ui/transpiled/react/deprecated/Button'
import MuiButton from 'cozy-ui/transpiled/react/MuiCozyTheme/Buttons'
import TextField from 'cozy-ui/transpiled/react/MuiCozyTheme/TextField'
import BarButton from 'cozy-ui/transpiled/react/BarButton'
import Paper from 'cozy-ui/transpiled/react/Paper'
import DotsIcon from 'cozy-ui/transpiled/react/Icons/Dots'
import Typography from 'cozy-ui/transpiled/react/Typography'

const props = [{}, { disabled: true}, { busy: true }]

const themesSupportingContext = [
  'regular',
  'secondary'
]

;

<CozyTheme variant='inverted' className='u-stack-m'>
  <Paper className='u-p-1'>
    <Typography className='u-white u-mb-1' variant="h4">Inverted theme</Typography>
    <Typography className='u-white' variant="h5">Buttons</Typography>
    {themesSupportingContext.map(theme =>
      <p key={theme}>{
        props.map(
          props => <Button key={theme + JSON.stringify(props)} label={theme} theme={theme} {...props} />
        )
      }</p>
    )}
    <Typography className='u-white u-mt-1' variant="h5">BarButton</Typography>
    <BarButton icon={DotsIcon} />
    <Typography className='u-white u-mb-1' variant="h5">MUI Buttons</Typography>
    <MuiButton variant='outlined' color='primary'>
      A MUI button
    </MuiButton>
    <Typography className='u-white u-mt-1' variant="h5">MUI TextField</Typography>
    <TextField
      id="inverted-field"
      label="A field"
      defaultValue="Default value"
      margin="normal"
      variant="outlined"
      placeholder="placeholder"
    />
    <Typography className='u-white u-mt-1' variant="h5">Normal theme inside inverted theme</Typography>
    <CozyTheme variant='normal'>
      <Paper className='u-p-1 u-mv-1'>
          <Typography variant='body1'>
            We can always go back to normal theme if a child must "get out"
          of the theme.
          </Typography>
          <Button className='u-ml-0 u-mt-half' theme='primary' label='Primary button' />
          <p>
            <a href='#' className='u-link'>An u-link span</a>
          </p>
      </Paper>
    </CozyTheme>
  </Paper>
  <Paper className='u-p-1 u-stack-s'>
    <div class='u-error'>
      Error text : "Please enter the right password."
    </div>
    <div class='u-success'>
      Valid text : "Success, you've connected EDF to your Cozy."
    </div>
    <div class='u-warning'>
      Warning text : "Something does not feel right, you may want to reload the page."
    </div>

    <p>
      <a href='#' className='u-link'>An u-link span</a>
    </p>
  </Paper>
</CozyTheme>
```
