```jsx
import {
  Wizard,
  WizardWrapper,
  WizardHeader,
  WizardPreviousButton,
  WizardNextButton,
  WizardTitle,
  WizardMain,
  WizardFooter,
  WizardErrors
} from 'cozy-ui/transpiled/react/Wizard'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Field from 'cozy-ui/transpiled/react/Field'
import Button from 'cozy-ui/transpiled/react/deprecated/Button'
import PreviousIcon from 'cozy-ui/transpiled/react/Icons/Previous'
import NextIcon from 'cozy-ui/transpiled/react/Icons/Next'

const t = x => x
const isTiny = false
const fetching = false

const WizardExample = ({ onNext, onRegister }) => {
  return (
    <Wizard>
      <WizardWrapper>
        <WizardHeader>
          <WizardPreviousButton
            subtle
            icon={PreviousIcon}
            iconOnly
            extension="narrow"
            onClick={() => setState({ showExample: false })}
            type="button"
            label="Previous"
          />
          <WizardTitle>
            Connect to your Cozy
          </WizardTitle>
        </WizardHeader>
        <WizardMain>
          <Field label='Login' type='text' placeholder='dalailama@cozycloud.cc' />
          <Field label='Password' type='text' />
          <WizardErrors tag='p'>
            There is an error
          </WizardErrors>
        </WizardMain>
        <WizardFooter className={isTiny ? 'u-mt-auto' : 'u-pb-2'}>
          <WizardNextButton
            disabled={false}
            busy={false}
            label="Next step"
            size={isTiny ? 'normal' : 'large'}
            onClick={onNext}
          >
            {!fetching && <Icon icon={NextIcon} color="white" />}
          </WizardNextButton>
          <Button
            label="Register an account"
            size={isTiny ? 'normal' : 'large'}
            subtle={true}
            type={'button'}
            theme="text"
            onClick={onRegister}
          />
        </WizardFooter>
      </WizardWrapper>
    </Wizard>
  )
}

initialState = { showExample: isTesting() }

;

<>
  <button onClick={() => setState({ showExample: true })}>Show wizard</button><br />
  { state.lastButton ? <>You clicked the "{state.lastButton}" button</> : null}
  { state.showExample &&
    <WizardExample
      onRegister={() => setState({ showExample: false, lastButton: 'register' })}
      onNext={() => setState({ showExample: false, lastButton: 'next' })}
    />
  }
</>
```
