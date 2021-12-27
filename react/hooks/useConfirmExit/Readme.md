```jsx
import { useState } from 'react'
import Button from 'cozy-ui/transpiled/react/Button'
import useConfirmExit from 'cozy-ui/transpiled/react/hooks/useConfirmExit'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints';


const NeedCloseConfirmation = () => {
    const { requestToLeave, exitConfirmationModal } = useConfirmExit({
      activate: () => true,
      message: 'Some changes have not been saved.',
      title: 'Are you sure ?',
    })
    return <div>
      { exitConfirmationModal }
      There is a close confirmation.
      <Button
        theme="secondary"
        label='Leave'
        onClick={() => requestToLeave('https://cozy.io')} />
    </div>
}

const Example = () => {
    const [showing, setShowing] = useState(false)
    return <>
        { showing
        ? <NeedCloseConfirmation />
        : null }
        { <Button label="Show element with close confirmation" onClick={() => setShowing(!showing) }/> }
    </>
};

<BreakpointsProvider>
  <Example />
</BreakpointsProvider>
```
