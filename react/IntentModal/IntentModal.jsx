import React from 'react'
import Modal from '../Modal'
import IntentIframe from './IntentIframe'
import styles from './styles.styl'
import PropTypes from 'prop-types'

/**
 * Render a modal for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 */
const IntentModal = ({
  closable,
  overflowHidden,
  dismissAction,
  action,
  doctype,
  options,
  onComplete,
  create
}) => (
  <Modal
    key='modal'
    closable={closable}
    overflowHidden
    className={styles.intentModal}
    crossClassName={styles.intentModal__cross}
    dismissAction={dismissAction}
  >
    <IntentIframe
      action={action}
      doctype={doctype}
      options={options}
      onComplete={onComplete}
      create={create}
    />
  </Modal>
)

IntentModal.propTypes = {
  /** What should happen when the intent has completed */
  onComplete: PropTypes.func.isRequired,
  /** What to do to dismiss the modal */
  dismissAction: PropTypes.func.isRequired,
  /** Action you want to execute */
  action: PropTypes.string.isRequired,
  /** Doctype on which you want to execute the action */
  doctype: PropTypes.string.isRequired,
  /** Display the cross and enable click outside and escape key to close */
  closable: PropTypes.bool
}

IntentModal.defaultProps = {
  closable: true
}

export default IntentModal
