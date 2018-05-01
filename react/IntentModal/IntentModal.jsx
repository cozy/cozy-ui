import React, { Component } from 'react'
import styles from './styles.styl'
import PropTypes from 'prop-types'

import once from 'lodash/once'

import IntentIframe from '../IntentIframe'
import Modal from '../Modal'

/**
 * Render a modal for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 */
class IntentModal extends Component {
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
    const {
      closable,
      overflowHidden,
      action,
      doctype,
      options,
      onComplete,
      onError,
      create,
      into,
      mobileFullscreen
    } = this.props

    return (
      <Modal
        key="modal"
        closable={closable}
        overflowHidden={overflowHidden}
        className={styles.intentModal}
        crossClassName={styles.intentModal__cross}
        dismissAction={this.dismiss}
        into={into}
        mobileFullscreen={mobileFullscreen}
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
  /** What should happen when the intent has completed */
  onComplete: PropTypes.func.isRequired,
  /** What should happen if an intent error occurs */
  onError: PropTypes.func,
  /** What to do to dismiss the modal */
  dismissAction: PropTypes.func.isRequired,
  /** Action you want to execute */
  action: PropTypes.string.isRequired,
  /** Doctype on which you want to execute the action */
  doctype: PropTypes.string.isRequired,
  /** Display the cross and enable click outside and escape key to close */
  closable: PropTypes.bool,
  /** Where the modal should be rendered in the DOM */
  into: PropTypes.string,
  /** If you want your modal taking all the screen on mobile */
  mobileFullscreen: PropTypes.bool
}

IntentModal.defaultProps = {
  closable: true
}

export default IntentModal
