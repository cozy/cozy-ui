import { act, render } from '@testing-library/react'
import React from 'react'

import { BreakpointsProvider } from './index'

it('sends parent breakpoints to the requesting iframe', () => {
  const iframeWindow = { postMessage: jest.fn() }
  const message = new MessageEvent('message', {
    data: 'UI-breakpoints-needParentBreakpoints'
  })
  Object.defineProperty(message, 'source', { value: iframeWindow })

  render(
    <BreakpointsProvider>
      <div />
    </BreakpointsProvider>
  )

  act(() => {
    window.dispatchEvent(message)
  })

  expect(iframeWindow.postMessage).toHaveBeenCalledWith(
    `UI-breakpoints-value:${window.innerWidth}`,
    '*'
  )
})
