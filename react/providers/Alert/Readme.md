```jsx
import Variants from 'cozy-ui/docs/components/Variants'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import AlertProvider, { useAlert } from 'cozy-ui/transpiled/react/providers/Alert'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Icon from 'cozy-ui/transpiled/react/Icon'
import DeviceLaptopIcon from 'cozy-ui/transpiled/react/Icons/DeviceLaptop'

const initialVariants = [{
  title: false,
  block: false,
  color: false,
  largeIcon: false,
  noIcon: false,
  square: false,
  standard: false,
  outlined: false,
  close: true
}]

const Component = ({ variant }) => {
  const { showAlert } = useAlert()

  return (
    <Button
      label="show alert"
      onClick={() =>
        showAlert({
          title: variant.title ? 'Alert title' : undefined,
          severity: 'success',
          message: 'Alert message',
          color: variant.color ? "#EFA82D" : undefined,
          variant: variant.standard
            ? 'standard'
            : variant.outlined
            ? 'outlined'
            : 'filled',
          block: variant.block,
          square: variant.square,
          icon: variant.noIcon
            ? false
            : variant.largeIcon
            ? <Icon icon={DeviceLaptopIcon} size={32} />
            : undefined,
          onClose: variant.close ? () => {} : undefined
        })
      }
    />
  )
}

;

<BreakpointsProvider>
  <AlertProvider>
    <Variants initialVariants={initialVariants}>
      {variant => (
        <>
          <Component variant={variant} />
        </>
      )}
    </Variants>
  </AlertProvider>
</BreakpointsProvider>
```
