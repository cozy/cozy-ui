```jsx
import { useState } from 'react'
import MobileStepper from 'cozy-ui/transpiled/react/MobileStepper'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import LeftIcon from 'cozy-ui/transpiled/react/Icons/Left'
import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'

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
        <Icon icon={RightIcon} />
      </IconButton>
    }
    backButton={
      <IconButton onClick={handleBack} disabled={activeStep === 0}>
        <Icon icon={LeftIcon} />
      </IconButton>
    }
  />
</div>
```
