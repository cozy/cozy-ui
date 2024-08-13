An area of a page can have a different CozyTheme and components inside
will be automatically styled.

`MuiCozyTheme` is used under the hood so that MaterialUI components are
also styled.

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import CozyTheme from 'cozy-ui/transpiled/react/providers/CozyTheme'
import Buttons from 'cozy-ui/transpiled/react/Buttons'
import TextField from 'cozy-ui/transpiled/react/TextField'
import BarButton from 'cozy-ui/transpiled/react/BarButton'
import Paper from 'cozy-ui/transpiled/react/Paper'
import DotsIcon from 'cozy-ui/transpiled/react/Icons/Dots'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Avatar from 'cozy-ui/transpiled/react/Avatar'
import Figure from 'cozy-ui/transpiled/react/Figure'

const props = [{}, { disabled: true}, { busy: true }]

const themesSupportingContext = [
  'primary',
  'secondary'
]

;

<DemoProvider>
  <CozyTheme variant='inverted' className='u-stack-m'>
    <Paper className='u-p-1'>
      <Typography className='u-mb-1' variant="h4">Forced inverted variant</Typography>
      <Typography variant="h4">➡️ Mui components</Typography>
      <Typography variant="h5">Buttons</Typography>
      {themesSupportingContext.map(theme =>
        <p key={theme}>{
          props.map(
            props => <Buttons key={theme + JSON.stringify(props)} className="u-mr-half" label={theme} variant={theme} {...props} />
          )
        }</p>
      )}
      <Typography className='u-mt-1' variant="h5">TextField</Typography>
      <TextField
        id="inverted-field"
        label="A field"
        defaultValue="Default value"
        margin="normal"
        variant="outlined"
        placeholder="placeholder"
      />
      <Typography className='u-mt-1' variant="h5">Normal variant inside inverted one</Typography>
      <CozyTheme variant='normal'>
        <Paper className='u-p-1 u-mv-1'>
            <Typography variant='body1'>
              We can always go back to normal variant if a child must "get out" of the theme.
            </Typography>
            <Buttons className='u-ml-0 u-mt-half' variant='primary' label='Primary button' />
            <p>
              <a href='#' className='u-link'>An u-link span</a>
            </p>
        </Paper>
      </CozyTheme>

      <Typography variant="h4">➡️ Not Mui components</Typography>
      <Typography className=' u-mb-1' variant="h5">Avatar</Typography>
      <Avatar className="u-mb-1" ghost text="CD" />
      <Typography className='u-mb-1' variant="h5">Figure</Typography>
      <Figure total={1000} symbol='€' coloredPositive coloredNegative signed />
      <Figure total={-1000} symbol='€' coloredPositive coloredNegative signed />
      <Figure total={-1000} symbol='€' signed />
      <Typography className='u-mv-1' variant="h4">➡️ Utility classes only</Typography>
      <div className='u-stack-s'>
        <div className='u-error'>
          Error text : "Please enter the right password."
        </div>
        <div className='u-success'>
          Valid text : "Success, you've connected EDF to your Cozy."
        </div>
        <div className='u-warning'>
          Warning text : "Something does not feel right, you may want to reload the page."
        </div>
        <p>
          <a href='#' className='u-link'>An u-link span</a>
        </p>
      </div>
    </Paper>
  </CozyTheme>
</DemoProvider>
```
