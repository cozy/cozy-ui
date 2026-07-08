```jsx
import { useState } from 'react'
import MobileStepper from 'cozy-ui/transpiled/react/MobileStepper'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import { Icon, Left, Right } from '@linagora/twake-icons'

const maxSteps = 5
const [activeStep, setActiveStep] = useState(0)

const handleNext = () => {
  setActiveStep(activeStep + 1)
}

const handleBack = () => {
  setActiveStep(activeStep - 1)
}

;

<div class="u-flex">
  <MobileStepper
    className="u-mh-auto"
    steps={maxSteps}
    position="static"
    activeStep={activeStep}
    nextButton={
      <IconButton
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        <Icon icon={Right} />
      </IconButton>
    }
    backButton={
      <IconButton onClick={handleBack} disabled={activeStep === 0}>
        <Icon icon={Left} />
      </IconButton>
    }
  />
</div>

```
