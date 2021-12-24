Steppers convey progress through numbered steps. They provide a wizard-like workflows.

See <https://material-ui.com/components/steppers/> for more information.

```jsx
import React, { useState } from 'react'
import { Stepper, Step, StepButton, StepLabel } from './index'

const steps = [
  "Install",
  "Configure",
  "Profit!"
];

const getStepContent = index => {
  return <>
    <h2>Content for { steps[index] }</h2>


    { content.ada.short}
  </>
}

const Example = () => {
  const [activeStep, setActiveStep] = useState(0)

  return <><Stepper alternativeLabel nonLinear activeStep={activeStep}>
      {steps.map((label, index) => {
        const stepProps = {
          onClick: () => {
            setActiveStep(index)
          }
        }
        const labelProps = {
          error: index === 1
        }
        return (
          <Step key={label} {...stepProps}>
            <StepButton>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </StepButton>
          </Step>
        )
      })}
    </Stepper>{getStepContent(activeStep, setActiveStep)}</>;
};

<Example />

```
