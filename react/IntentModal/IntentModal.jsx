import React, { Component } from 'react'
import styles from './styles.styl'
import PropTypes from 'prop-types'

import once from 'lodash/once'

import IntentIframe from '../IntentIframe'
import Modal from '../Modal'
import createDepreciationLogger from '../helpers/createDepreciationLogger'

const logIntentModalDepecrated = createDepreciationLogger()

/**
 * Render a modal for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 *
 * @deprecated Please use IntentIframe with Dialog instead
 */
class IntentModal extends Component {
  constructor(props, context) {
    super(props, context)

    logIntentModalDepecrated(
      'The IntentModal component has been deprecated and should be replaced by IntentIframe wrapped in Dialog'
    )
  }

  // As dismissAction is passed twice to the modal, both for closing and for
  // intent cancellation, we need to ensure that it is only actually
  // called once.
  // FIXME: this should be fixed by diferenciating dismissAction (for closing
  // modal) and onCancel (for intent cancellation), but it implies deprecating
  // dismissAction first, ensure legacy, prevent regressions, etc.
  dismiss = once(() => {
    const { dismissAction } = this.props
    dismissAction && dismissAction()
  })

  render() {
    const { action, doctype, options, onComplete, onError, create } = this.props
    const modalProps = Object.keys(Modal.propTypes).reduce((props, key) => {
      return { ...props, [key]: this.props[key] }
    }, {})
    return (
      <Modal
        {...modalProps}
        key="modal"
        className={styles.intentModal}
        closeBtnClassName={styles.intentModal__cross}
        dismissAction={this.dismiss}
        overflowHidden
      >
        <IntentIframe
          action={action}
          create={create}
          data={options}
          onCancel={this.dismiss}
          onError={onError}
          onTerminate={onComplete}
          type={doctype}
        />
      </Modal>
    )
  }
}

IntentModal.propTypes = {
  ...Modal.propTypes,
  /** What should happen when the intent has completed */
  onComplete: PropTypes.func.isRequired,
  /** What should happen if an intent error occurs */
  onError: PropTypes.func,
  /** Action you want to execute */
  action: PropTypes.string.isRequired,
  /** Doctype on which you want to execute the action */
  doctype: PropTypes.string.isRequired
}

IntentModal.defaultProps = { ...Modal.defaultProps }

export default IntentModal
