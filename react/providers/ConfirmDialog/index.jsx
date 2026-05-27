import React, { createContext, useState, useContext, useMemo } from 'react'

import Button from '../../Buttons'
import { ConfirmDialog } from '../../CozyDialogs'

export const ConfirmDialogContext = createContext()

export const useConfirmDialog = () => {
  const context = useContext(ConfirmDialogContext)

  if (!context) {
    throw new Error(
      'useConfirmDialog must be used within a ConfirmDialogProvider'
    )
  }
  return context
}

const defaultState = {
  title: '',
  content: '',
  actions: null,
  open: false
}

const handleClose = (state, setState) => () => {
  return setState({ ...state, open: false })
}

// OR maybe we can just expose this component like a DefaultConfirmActions ?
const AsyncConfirmActions = ({
  onConfirm: confirmCallback,
  onCancel,
  onError,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  confirmColor = 'primary',
  cancelVariant = 'text',
  cancelColor = 'inherit'
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirm = async () => {
    setIsLoading(true)
    try {
      await confirmCallback()
      onCancel()
    } catch (error) {
      if (onError) {
        await onError(error)
      }
      onCancel()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Button
        label={cancelLabel}
        variant={cancelVariant}
        color={cancelColor}
        onClick={onCancel}
        disabled={isLoading}
      />
      <Button
        label={confirmLabel}
        color={confirmColor}
        onClick={handleConfirm}
        busy={isLoading}
      />
    </>
  )
}

const ConfirmDialogProvider = ({ children }) => {
  const [state, setState] = useState(defaultState)
  const { open, title, content, actions, ...confirmDialogProps } = state

  const value = useMemo(
    () => ({
      showConfirmDialog: args => {
        // If onConfirm is provided, use managed async actions
        if (args.onConfirm) {
          const closeDialog = handleClose(state, setState)

          setState({
            open: true,
            title: args.title,
            content: args.content,
            actions: (
              <AsyncConfirmActions
                onConfirm={args.onConfirm}
                onCancel={closeDialog}
                onError={args.onError}
                confirmLabel={args.confirmLabel || 'Confirm'}
                cancelLabel={args.cancelLabel || 'Cancel'}
                confirmColor={args.confirmColor || 'primary'}
                cancelVariant={args.cancelVariant || 'text'}
                cancelColor={args.cancelColor || 'inherit'}
              />
            ),
            onClose: closeDialog,
            ...args
          })
        } else {
          // Fall back to custom actions
          setState({ open: true, ...args })
        }
      },
      closeConfirmDialog: handleClose(state, setState)
    }),
    [state]
  )

  return (
    <ConfirmDialogContext.Provider value={value}>
      {children}
      {open && (
        <ConfirmDialog
          open
          title={title}
          content={content}
          actions={actions}
          onClose={handleClose(state, setState)}
          {...confirmDialogProps}
        />
      )}
    </ConfirmDialogContext.Provider>
  )
}

export default React.memo(ConfirmDialogProvider)
