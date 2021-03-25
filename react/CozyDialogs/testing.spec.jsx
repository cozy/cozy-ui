import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Dialog from './Dialog'

import { getDialog, getCloseButton } from './testing'
import { BreakpointsProvider } from '../hooks/useBreakpoints'

describe('testing utils for dialog', () => {
  const setup = ({ onClose } = {}) => {
    const root = render(
      <BreakpointsProvider>
        <Dialog open title="Title" content="Content" onClose={onClose} />
      </BreakpointsProvider>
    )
    return { root }
  }

  it('should find open dialog', () => {
    const { root } = setup()
    const dialog = getDialog(root)
    expect(dialog).toBeTruthy()
  })

  it('should close dialog', () => {
    const onClose = jest.fn()
    const { root } = setup({ onClose })
    const dialog = getDialog(root)
    const closeBtn = getCloseButton(dialog)
    fireEvent.click(closeBtn)
    expect(onClose).toHaveBeenCalled()
  })
})
