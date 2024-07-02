import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import IntentIframe from '../IntentIframe'
import { DialogCloseButton } from '../CozyDialogs'
import Dialog from '../Dialog'
import Backdrop from '../Backdrop'
import { makeStyles } from '../styles'

const useStyles = makeStyles({
  backdrop: {
    zIndex: 'calc(var(--zIndex-modal-toolbar) + 1)' // to be over a modal if used inside it
  }
})

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
    onlyBackdrop,
    ...dialogProps
  } = props
  const [modalOpened, setModalOpened] = useState(false)
  const styles = useStyles()

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

  const Component = onlyBackdrop ? Backdrop : Dialog

  if (modalOpened) {
    elements.push(
      <Component
        key="intent-modal"
        open={modalOpened}
        onClose={closable && handleDismiss}
        className={cx(dialogProps.className, {
          [styles.backdrop]: onlyBackdrop
        })}
        {...dialogProps}
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
  /** Whether the dialog is shown or only its backdrop */
  onlyBackdrop: PropTypes.bool,
  /** Props to be passed to the iframe */
  iframeProps: PropTypes.shape({
    wrapperProps: PropTypes.object,
    spinnerProps: PropTypes.object
  })
}

IntentDialogOpener.defaultProps = {
  tag: 'span',
  closable: true,
  onlyBackdrop: false,
  showCloseButton: true
}

export default IntentDialogOpener
