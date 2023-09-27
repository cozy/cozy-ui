```jsx
import Variants from 'cozy-ui/docs/components/Variants'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import AlertProvider, { useAlert } from 'cozy-ui/transpiled/react/providers/Alert'
import Button from 'cozy-ui/transpiled/react/Buttons'

const initialVariants = [{ primary: true, secondary: false, success: false, error: false, warning: false, info: false }]

const Component = ({ variant }) => {
  const { showAlert } = useAlert()

  return <Button label="show alert" onClick={() => showAlert('Alert message', variant)}/>
}

;

<BreakpointsProvider>
  <AlertProvider>
    <Variants initialVariants={initialVariants} radio>
      {variant => (
        <>
          <Component variant={Object.keys(variant).find(key => variant[key])} />
        </>
      )}
    </Variants>
  </AlertProvider>
</BreakpointsProvider>
```
