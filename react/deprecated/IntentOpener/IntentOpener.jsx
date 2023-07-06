import React, { useState } from 'react'
import PropTypes from 'prop-types'

import IntentModal from '../IntentModal'
import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logIntentOpenerDepecrated = createDepreciationLogger()

/**
 * Wrapper that adds an `onClick` handler to its children that opens a modal
 * for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 *
 * @deprecated Please use IntentDialogOpener instead
 */
const IntentOpener = props => {
  logIntentOpenerDepecrated(
    'The IntentOpener component has been deprecated and should be replaced by IntentDialogOpener.'
  )
  const {
    options,
    action,
    doctype,
    children,
    closable,
    create,
    tag,
    into,
    onComplete,
    onDismiss,
    ...modalProps
  } = props
  const [modalOpened, setModalOpened] = useState(false)

  const openModal = () => setModalOpened(true)
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
      <IntentModal
        key="intent-modal"
        closable={closable}
        overflowHidden
        dismissAction={handleDismiss}
        action={action}
        doctype={doctype}
        options={options}
        onComplete={handleComplete}
        create={create}
        into={into}
        {...modalProps}
      />
    )
  }

  return <Tag>{elements}</Tag>
}

IntentOpener.propTypes = {
  /** Element on which the onClick handler will be added */
  children: PropTypes.element.isRequired,
  /** What should happen when the intent has completed */
  onComplete: PropTypes.func,
  /** What should happen when the modal is dimissed */
  onDismiss: PropTypes.func,
  /** Action you want to execute */
  action: PropTypes.string.isRequired,
  /** Doctype on which you want to execute the action */
  doctype: PropTypes.string.isRequired,
  /** Where the modal should be rendered in the DOM */
  into: PropTypes.string
}

IntentOpener.defaultProps = {
  tag: 'span',
  closable: true
}

export default IntentOpener
