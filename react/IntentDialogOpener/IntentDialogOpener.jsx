import React, { useState } from 'react'
import PropTypes from 'prop-types'

import IntentIframe, { iframeProps } from '../IntentIframe'
import { DialogCloseButton } from '../CozyDialogs'
import Dialog from '../Dialog'

/**
 * Wrapper that adds an `onClick` handler to its children that opens a dialog
 * for the specified intent.
 */
const IntentDialogOpener = props => {
  const {
    options,
    action,
    doctype,
    children,
    closable,
    showCloseButton,
    create,
    tag,
    onComplete,
    onDismiss,
    iframeProps,
    Component,
    ...componentProps
  } = props
  const [modalOpened, setModalOpened] = useState(false)

  const openModal = ev => {
    ev.preventDefault()
    ev.stopPropagation()
    setModalOpened(true)
  }
  const closeModal = () => setModalOpened(false)

  const handleComplete = result => {
    closeModal()
    onComplete && onComplete(result)
  }

  const handleDismiss = () => {
    closeModal()
    onDismiss && onDismiss()
  }

  const Tag = tag // React needs uppercase element names
  const elements = [
    React.cloneElement(children, { key: 'opener', onClick: openModal })
  ]

  if (modalOpened) {
    elements.push(
      <Component
        key="intent-modal"
        open={modalOpened}
        onClose={closable && handleDismiss}
        {...componentProps}
      >
        {closable && showCloseButton && (
          <DialogCloseButton onClick={handleDismiss} />
        )}
        <IntentIframe
          action={action}
          type={doctype}
          data={options}
          create={create}
          onCancel={handleDismiss}
          onTerminate={handleComplete}
          iframeProps={iframeProps}
        />
      </Component>
    )
  }

  return <Tag>{elements}</Tag>
}

IntentDialogOpener.propTypes = {
  /** Element on which the onClick handler will be added */
  children: PropTypes.element.isRequired,
  /** What should happen when the intent has completed */
  onComplete: PropTypes.func,
  /** What should happen when the intent has dismissed */
  onDismiss: PropTypes.func,
  /** Action you want to execute */
  action: PropTypes.string.isRequired,
  /** Doctype on which you want to execute the action */
  doctype: PropTypes.string.isRequired,
  /** Whether the dialog is closable by itself (not by the Intent) with a button or by clicking outside of it */
  closable: PropTypes.bool.isRequired,
  /** Whether the dialog close button is shown */
  showCloseButton: PropTypes.bool.isRequired,
  /** Tag used to wrap children */
  tag: PropTypes.string.isRequired,
  /** Component to be used instead of the dialog */
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /** Props to be passed to the iframe */
  iframeProps: iframeProps
}

IntentDialogOpener.defaultProps = {
  tag: 'span',
  closable: true,
  Component: Dialog,
  showCloseButton: true
}

export default IntentDialogOpener
