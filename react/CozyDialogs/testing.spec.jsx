import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Dialog from './Dialog'

import {
  getDialog,
  getCloseButton,
  getBackButton,
  getBackCloseButton
} from './testing'
import useBreakpoints from '../providers/Breakpoints'
import DemoProvider from '../providers/DemoProvider'

jest.mock('../providers/Breakpoints', () => ({
  ...jest.requireActual('../providers/Breakpoints'),
  __esModule: true,
  default: jest.fn(),
  useBreakpoints: jest.fn()
}))

describe('testing utils for dialog', () => {
  const setup = ({ isMobile = false, onClose, onBack } = {}) => {
    useBreakpoints.mockReturnValue({ isMobile })
    const root = render(
      <DemoProvider>
        <Dialog
          open
          title="Title"
          content="Content"
          onClose={onClose}
          onBack={onBack}
        />
      </DemoProvider>
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

  it('should call onBack', () => {
    const onBack = jest.fn()
    const { root } = setup({ onBack })
    const dialog = getDialog(root)
    const backBtn = getBackButton(dialog)
    fireEvent.click(backBtn)
    expect(onBack).toHaveBeenCalled()
  })

  it('should call onBack when back and close are defined on mobile', () => {
    const onClose = jest.fn()
    const onBack = jest.fn()
    const { root } = setup({ onBack, onClose, isMobile: true })
    const dialog = getDialog(root)

    const backCloseBtn = getBackCloseButton(dialog)
    const backBtn = getBackButton(dialog)
    const closeBtn = getCloseButton(dialog)

    expect(backCloseBtn).toBeDefined()
    expect(backBtn).toBeUndefined()
    expect(closeBtn).toBeUndefined()

    fireEvent.click(backCloseBtn)
    expect(onBack).toHaveBeenCalled()
  })

  it('should call onClose when only close is defined on mobile', () => {
    const onClose = jest.fn()
    const { root } = setup({ onClose, isMobile: true })
    const dialog = getDialog(root)

    const backCloseBtn = getBackCloseButton(dialog)
    const backBtn = getBackButton(dialog)
    const closeBtn = getCloseButton(dialog)

    expect(backCloseBtn).toBeDefined()
    expect(backBtn).toBeUndefined()
    expect(closeBtn).toBeUndefined()

    fireEvent.click(backCloseBtn)
    expect(onClose).toHaveBeenCalled()
  })

  it('should be able to call onBack or onClose when back and close are defined on desktop', () => {
    const onClose = jest.fn()
    const onBack = jest.fn()
    const { root } = setup({ onBack, onClose })
    const dialog = getDialog(root)

    const backCloseBtn = getBackCloseButton(dialog)
    const backBtn = getBackButton(dialog)
    const closeBtn = getCloseButton(dialog)

    expect(backCloseBtn).toBeUndefined()
    expect(backBtn).toBeDefined()
    expect(closeBtn).toBeDefined()

    fireEvent.click(backBtn)
    expect(onBack).toHaveBeenCalled()

    fireEvent.click(closeBtn)
    expect(onClose).toHaveBeenCalled()
  })
})
