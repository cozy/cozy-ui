import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import useEventListener from '../useEventListener'
import withLocales from '../../providers/I18n/withLocales'
import { ConfirmDialog } from '../../CozyDialogs'
import Button from '../../deprecated/Button'

import en from './locales/en.json'
import fr from './locales/fr.json'

/**
 * Confirmation modal
 * @private
 * @param {string} message - Confirmation message
 * @param {string} title - Title of the modal
 * @param {function} onConfirm - will be executed on confirmation
 * @param {function} onCancel - will be executed on cancelation
 */
function ConfirmModal({
  t,
  title,
  message,
  onConfirm,
  onCancel,
  cancelLabel,
  confirmLabel
}) {
  return (
    <ConfirmDialog
      open
      actions={
        <>
          <Button
            label={confirmLabel || t('useConfirmExit.leave')}
            onClick={onConfirm}
            theme="danger"
          />
          <Button
            label={cancelLabel || t('useConfirmExit.back')}
            onClick={onCancel}
            theme="secondary"
          />
        </>
      }
      content={message || t('useConfirmExit.message')}
      title={title || t('useConfirmExit.title')}
    />
  )
}

ConfirmModal.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string
}

const dictRequire = { en, fr }
const LocalizedConfirmModal = withLocales(dictRequire)(ConfirmModal)

/**
 * Go to the requested destination (URL or function)
 *
 * @param {string|function} destination
 */
function go(destination) {
  if (typeof destination === 'function') {
    destination()
  } else if (typeof destination === 'string') {
    document.location = destination
  } else {
    throw new Error(`Unknown location where to jump to`)
  }
}

function isActivated(activate) {
  return typeof activate === 'function' ? activate() : activate
}

/**
 * @typedef useConfirmExitResponse
 * @property {function} requestToLeave - gets an URL or function,
 * triggers a confirmation modal and redirect the browser to this URL
 * or call this function if the user confirms.
 * @property {function} exitConfirmationModal - React component
 * that will show a confirmation modal when requested by requestToLeave
 * and nothing otherwise
 */

/**
 * When provided a message, will warn the user before exiting the page
 *
 * When the browser detects a page unload (go to another website or
 * leave the window/tab), it will show a native popup asking for
 * confirmation. This popup may show the `message` but will usually
 * use a native message from the browser.
 *
 * If the user confirm he wants to leave, `onLeave` will be executed.
 * This function may not be able to execute async code.
 *
 * @param {bool|function} activate - (return) falsy to deactivate the behaviour
 * @param {string} message - Confirmation message
 * @param {string} title - Title of the modal
 * @param {function} onLeave - will be executed before returning
 * @returns {useConfirmExitResponse}
 */
export default function useConfirmExit({
  activate = true,
  onLeave,
  message,
  title,
  leaveLabel,
  cancelLabel
} = {}) {
  // `onbeforeunload` event on the browser:
  // Using a ref in order to have an event listener that does not
  // need to be deregistered, recreated and registered again at each
  // message or callback change. If not, the lag introduced by the
  // useEffect inside useEventListener may create wrong behaviours
  // for fast changing calls to useConfirmExit.
  const state = useRef()
  state.current = { message, onLeave, activate }
  const beforeunload = useCallback(event => {
    const activated = isActivated(state.current.activate)
    activated && state.current.onLeave && state.current.onLeave()
    const returnValue = activated ? state.current.message : null
    if (returnValue) event.returnValue = returnValue
    return returnValue
  }, [])
  useEventListener(window, 'beforeunload', beforeunload)

  // contains an URL of function given to `requestToLeave`
  // any truthy value will trigger the ExitConfirmationModal
  const [modalDest, setModalDest] = useState(false)
  const onCloseModalRequest = useCallback(() => {
    setModalDest(false)
  }, [setModalDest])

  // call this with an URL or a function to trigger the ExitConfirmationModal
  const requestToLeave = useCallback(
    where => {
      if (isActivated(state.current.activate)) {
        setModalDest(() => where)
      } else {
        go(where)
      }
    },
    [state, setModalDest]
  )

  // null when the modal is closed, a Modal otherwise
  const onConfirm = useCallback(() => {
    onLeave && onLeave()
    go(modalDest)
  }, [modalDest, onLeave])

  // return the modal if opened
  const modal = modalDest && (
    <LocalizedConfirmModal
      message={message}
      title={title}
      onCancel={onCloseModalRequest}
      onConfirm={onConfirm}
      confirmLabel={leaveLabel}
      cancelLabel={cancelLabel}
    />
  )
  return {
    requestToLeave,
    exitConfirmationModal: modal
  }
}
