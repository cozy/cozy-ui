import { within } from '@testing-library/react'

export const getAllDialogs = root => {
  return root.getAllByRole('dialog')
}

export const getDialog = root => {
  const dialogs = getAllDialogs(root)
  if (dialogs.length === 0) {
    root.debug()
    throw new Error('No dialog found')
  } else if (dialogs.length > 1) {
    root.debug()
    throw new Error('Several dialogs found, please use getAllDialogs')
  } else {
    return dialogs[0]
  }
}

export const getCloseButton = dialogRoot => {
  const buttons = within(dialogRoot).getAllByRole('button')
  return buttons.find(
    x => x.dataset.testid && x.dataset.testid.includes('modal-close-button')
  )
}

export const getBackButton = dialogRoot => {
  const buttons = within(dialogRoot).getAllByRole('button')
  return buttons.find(
    x => x.dataset.testid && x.dataset.testid.includes('modal-back-button')
  )
}

export const getBackCloseButton = dialogRoot => {
  const buttons = within(dialogRoot).getAllByRole('button')
  return buttons.find(
    x => x.dataset.testid && x.dataset.testid.includes('modal-backclose-button')
  )
}
