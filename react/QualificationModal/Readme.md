```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import QualificationModal from 'cozy-ui/transpiled/react/QualificationModal'
import Typography from 'cozy-ui/transpiled/react/Typography'
import CloudIcon from 'cozy-ui/transpiled/react/Icons/Cloud'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'
import RadioGroup from 'cozy-ui/transpiled/react/RadioGroup'
import Radio from 'cozy-ui/transpiled/react/Radios'
import FormControl from 'cozy-ui/transpiled/react/FormControl'
import Button from 'cozy-ui/transpiled/react/Buttons'

initialState = { show: isTesting() ? true : false }

const show = () => setState({show: true})
const hide = () => setState({show: false})

;

<DemoProvider client={{ collection: () => ({ updateMetadataAttribute: () => {}}) }}>
  <Button label={state.show ? "Close modal" : "Open modal"} variant="ghost" onClick={show} />
  {state.show &&
    <QualificationModal
      file={{ name: "toto.txt", metadata: { qualification: { label: 'isp_invoice' } } }}
      onClose={hide}
    />
  }
</DemoProvider>
```
