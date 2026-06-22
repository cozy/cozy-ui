### Banner

We should now use Alert instead. See this example:

```jsx
import Alert from 'cozy-ui/transpiled/react/Alert'
import { DeviceLaptop, Download, Icon } from '@linagora/twake-icons'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Variants from 'cozy-ui/docs/components/Variants'
import { useBreakpoints, BreakpointsProvider} from 'cozy-ui/transpiled/react/providers/Breakpoints'

const shortText = 'Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.'
const longText = 'You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text. You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text. You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text. You have lost connection to the internet. This app is offline. And this is a long text to show how it reacts, with, well, a long text.'
const initialVariants = [{
  icon: true,
  longText: false,
  buttonOne: true,
  buttonTwo: true,
  inline: true,
  backgroundColor: true
}]


const Comp = ({ variant }) => {
  const { isMobile } = useBreakpoints()

  return (
    <Alert
      icon={variant.icon
        ? <Icon icon={DeviceLaptop} size={32} color="var(--primaryTextColor)" />
        : false
      }
      color={variant.backgroundColor ? "var(--contrastBackgroundColor)" : undefined}
      square
      block={!variant.inline || isMobile}
      action={
        <>
        {variant.buttonOne && (
            <Button
              variant="text"
              size="small"
              label="DOWNLOAD"
              startIcon={<Icon icon={Download} />}
              onClick={() => alert('Clicked!')}
            />
          )}
          {variant.buttonTwo && (
            <Button
              variant="text"
              size="small"
              label="NO, THANKS!"
            />
          )}
        </>
      }
    >
      {variant.longText ? longText : shortText}
    </Alert>
  )
}

;

<BreakpointsProvider>
  <Variants initialVariants={initialVariants}>
    {variant => (
      <Comp variant={variant} />
    )}
  </Variants>
</BreakpointsProvider>
```
