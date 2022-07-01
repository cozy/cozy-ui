```jsx
import Snackbar from 'cozy-ui/transpiled/react/Snackbar'
import Alert from 'cozy-ui/transpiled/react/Alert'
import Button from 'cozy-ui/transpiled/react/Buttons'
import CrossIcon from 'cozy-ui/transpiled/react/Icons/Cross'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Icon from 'cozy-ui/transpiled/react/Icon'
import InfoIcon from 'cozy-ui/transpiled/react/Icons/Info'

initialState = { open: false }

const handleToggle = () => {setState(state => ({ open: !state.open }))}

;

<>
  <Button
    variant="ghost"
    size="small"
    label="Open snackbar"
    onClick={handleToggle}
  />
  <Snackbar
    open={state.open}
    message="This is a simple snackbar."
    action={
      <>
        <Button variant="text" color="error" size="small" label="UNDO" onClick={handleToggle} />
        <IconButton aria-label="close" color="inherit" onClick={handleToggle}>
          <Icon icon={CrossIcon} size={14} />
        </IconButton>
      </>
    }
    onClose={handleToggle}
  />
</>
```

### With `Alert` inside the `Snackbar`

```jsx
import Snackbar from 'cozy-ui/transpiled/react/Snackbar'
import Alert from 'cozy-ui/transpiled/react/Alert'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Variants from 'cozy-ui/docs/components/Variants'

initialState = { open: isTesting() }

const handleToggle = () => {setState(state => ({ open: !state.open }))}

const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info']
const initialVariants = [{ primary: true, secondary: true, success: false, error: false, warning: false, info: false }]

;

<>
  <Variants initialVariants={initialVariants} radio>
    {variant => (
      <>
        <Snackbar open={state.open} onClose={handleToggle}>
          <Alert
            variant="filled"
            elevation={6}
            severity={Object.keys(variant).find(key => variant[key])}
            onClose={handleToggle}
          >
            This is a {Object.keys(variant).find(key => variant[key])} message!
          </Alert>
        </Snackbar>
      </>
    )}
  </Variants>
  <Button
    variant="ghost"
    size="small"
    label="Open snackbar"
    onClick={handleToggle}
  />
</>
```