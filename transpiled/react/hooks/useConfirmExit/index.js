import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';
var en = {
  useConfirmExit: {
    back: "Cancel",
    leave: "Leave without saving",
    title: "Abandon your changes?",
    message: "Some changes may not be saved yet. Do you really want to leave and lose these changes?"
  }
};
var fr = {
  useConfirmExit: {
    back: "Retour",
    leave: "Quitter",
    title: "Abandonner les modifications\xA0?",
    message: "Des modifications n'ont pas encore pu \xEAtre enregistr\xE9es. Voulez-vous vraiment quitter et perdre ces modifications\xA0?"
  }
};
var ru = {
  useConfirmExit: {
    back: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
    leave: "\u0423\u0439\u0442\u0438 \u0431\u0435\u0437 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F",
    title: "\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439?",
    message: "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u043B\u0438 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F. \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0439\u0442\u0438 \u0438 \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C \u044D\u0442\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F?"
  }
};
var vi = {
  useConfirmExit: {
    back: "H\u1EE7y",
    leave: "R\u1EDDi kh\u1ECFi m\xE0 kh\xF4ng l\u01B0u",
    title: "B\u1ECF c\xE1c thay \u0111\u1ED5i c\u1EE7a b\u1EA1n?",
    message: "M\u1ED9t s\u1ED1 thay \u0111\u1ED5i c\xF3 th\u1EC3 ch\u01B0a \u0111\u01B0\u1EE3c l\u01B0u. B\u1EA1n c\xF3 th\u1EF1c s\u1EF1 mu\u1ED1n r\u1EDDi kh\u1ECFi v\xE0 m\u1EA5t c\xE1c thay \u0111\u1ED5i n\xE0y kh\xF4ng?"
  }
};
import { ConfirmDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import Button from "cozy-ui/transpiled/react/deprecated/Button";
import withLocales from "cozy-ui/transpiled/react/providers/I18n/withLocales";
import useEventListener from "cozy-ui/transpiled/react/hooks/useEventListener";
/**
 * Confirmation modal
 * @private
 * @param {string} message - Confirmation message
 * @param {string} title - Title of the modal
 * @param {function} onConfirm - will be executed on confirmation
 * @param {function} onCancel - will be executed on cancelation
 */

function ConfirmModal(_ref) {
  var t = _ref.t,
      title = _ref.title,
      message = _ref.message,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      cancelLabel = _ref.cancelLabel,
      confirmLabel = _ref.confirmLabel;
  return /*#__PURE__*/React.createElement(ConfirmDialog, {
    open: true,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      label: confirmLabel || t('useConfirmExit.leave'),
      onClick: onConfirm,
      theme: "danger"
    }), /*#__PURE__*/React.createElement(Button, {
      label: cancelLabel || t('useConfirmExit.back'),
      onClick: onCancel,
      theme: "secondary"
    })),
    content: message || t('useConfirmExit.message'),
    title: title || t('useConfirmExit.title')
  });
}

ConfirmModal.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string
};
var dictRequire = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
};
var LocalizedConfirmModal = withLocales(dictRequire)(ConfirmModal);
/**
 * Go to the requested destination (URL or function)
 *
 * @param {string|function} destination
 */

function go(destination) {
  if (typeof destination === 'function') {
    destination();
  } else if (typeof destination === 'string') {
    document.location = destination;
  } else {
    throw new Error("Unknown location where to jump to");
  }
}

function isActivated(activate) {
  return typeof activate === 'function' ? activate() : activate;
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


export default function useConfirmExit() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$activate = _ref2.activate,
      activate = _ref2$activate === void 0 ? true : _ref2$activate,
      onLeave = _ref2.onLeave,
      message = _ref2.message,
      title = _ref2.title,
      leaveLabel = _ref2.leaveLabel,
      cancelLabel = _ref2.cancelLabel;

  // `onbeforeunload` event on the browser:
  // Using a ref in order to have an event listener that does not
  // need to be deregistered, recreated and registered again at each
  // message or callback change. If not, the lag introduced by the
  // useEffect inside useEventListener may create wrong behaviours
  // for fast changing calls to useConfirmExit.
  var state = useRef();
  state.current = {
    message: message,
    onLeave: onLeave,
    activate: activate
  };
  var beforeunload = useCallback(function (event) {
    var activated = isActivated(state.current.activate);
    activated && state.current.onLeave && state.current.onLeave();
    var returnValue = activated ? state.current.message : null;
    if (returnValue) event.returnValue = returnValue;
    return returnValue;
  }, []);
  useEventListener(window, 'beforeunload', beforeunload); // contains an URL of function given to `requestToLeave`
  // any truthy value will trigger the ExitConfirmationModal

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalDest = _useState2[0],
      setModalDest = _useState2[1];

  var onCloseModalRequest = useCallback(function () {
    setModalDest(false);
  }, [setModalDest]); // call this with an URL or a function to trigger the ExitConfirmationModal

  var requestToLeave = useCallback(function (where) {
    if (isActivated(state.current.activate)) {
      setModalDest(function () {
        return where;
      });
    } else {
      go(where);
    }
  }, [state, setModalDest]); // null when the modal is closed, a Modal otherwise

  var onConfirm = useCallback(function () {
    onLeave && onLeave();
    go(modalDest);
  }, [modalDest, onLeave]); // return the modal if opened

  var modal = modalDest && /*#__PURE__*/React.createElement(LocalizedConfirmModal, {
    message: message,
    title: title,
    onCancel: onCloseModalRequest,
    onConfirm: onConfirm,
    confirmLabel: leaveLabel,
    cancelLabel: cancelLabel
  });
  return {
    requestToLeave: requestToLeave,
    exitConfirmationModal: modal
  };
}