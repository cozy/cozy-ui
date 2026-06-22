```jsx
import Variants from 'cozy-ui/docs/components/Variants'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import AlertProvider, { useAlert } from 'cozy-ui/transpiled/react/providers/Alert'
import Button from 'cozy-ui/transpiled/react/Buttons'
import { DeviceLaptop, Icon } from '@linagora/twake-icons'

const initialVariants = [{
  title: false,
  block: false,
  color: false,
  largeIcon: false,
  noIcon: false,
  square: false,
  standard: false,
  outlined: false,
  noClickAway: false,
  noTimeOut: false,
  persistent: false,
  close: true
}]

const Component = ({ variant }) => {
  const { showAlert } = useAlert()

  return (
    <Button
      label="Show alert"
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
            ? <Icon icon={DeviceLaptop} size={32} />
            : undefined,
          noClickAway: variant.noClickAway,
          noTimeOut: variant.noTimeOut,
          duration: variant.persistent ? null : undefined,
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
