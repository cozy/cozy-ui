import React from 'react'
import { render } from '@testing-library/react'

import { Stepper, Step, StepLabel, StepButton } from '../Stepper'

const renderSVGWarningIcon = () => {
  const { getByRole } = render(
    <Stepper>
      <Step>
        <StepButton>
          <StepLabel error={true}>error</StepLabel>
        </StepButton>
      </Step>
    </Stepper>
  )
  const button = getByRole('button')
  const svg = button.querySelector('svg')
  return svg
}

let warningSvg

const findStepButtonFromLabelNode = node => {
  return node.parentNode.parentNode.parentNode
}

const haveSameClassList = (node1, node2) => {
  const cs1 = node1.classList.toString()
  const cs2 = node2.classList.toString()
  return cs1 === cs2
}

const isWarningStep = stepLabelNode => {
  const stepButtonNode = findStepButtonFromLabelNode(stepLabelNode)
  const icon = stepButtonNode.querySelector('svg')
  return haveSameClassList(warningSvg, icon)
}

beforeEach(() => {
  warningSvg = renderSVGWarningIcon()
})

export { isWarningStep }
