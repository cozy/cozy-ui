import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var _excluded = ["open", "message", "title", "duration", "noTimeOut", "noClickAway"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { createContext, useState, useContext, useMemo } from 'react';
import { handleClose } from "cozy-ui/transpiled/react/providers/Alert/helpers";
import Alert from "cozy-ui/transpiled/react/Alert";
import AlertTitle from "cozy-ui/transpiled/react/AlertTitle";
import Snackbar from "cozy-ui/transpiled/react/Snackbar";
/**
 * @typedef {import('../../Alert').AlertProps & { message: string, title: string }} ShowAlertArgs
 */

/**
 * @typedef {object} UseAlertReturn
 * @property {(args: ShowAlertArgs) => void} showAlert
 */

export var AlertContext = /*#__PURE__*/createContext();
/**
 * @returns {UseAlertReturn}
 */

export var useAlert = function useAlert() {
  var context = useContext(AlertContext);

  if (!context) {
    throw new Error('useAlert must be used within a AlertProvider');
  }

  return context;
};
var defaultState = {
  title: '',
  message: '',
  duration: null,
  open: false
};

var AlertProvider = function AlertProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(defaultState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // noTimeOut and noClickAway are destructured to not being passed to the DOM through ...alertProps


  var open = state.open,
      message = state.message,
      title = state.title,
      duration = state.duration,
      noTimeOut = state.noTimeOut,
      noClickAway = state.noClickAway,
      alertProps = _objectWithoutProperties(state, _excluded);

  var value = useMemo(function () {
    return {
      /**
       * @param {ShowAlertArgs} args
       */
      showAlert: function showAlert(args) {
        setState(_objectSpread({
          open: true
        }, args));
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement(AlertContext.Provider, {
    value: value
  }, children, /*#__PURE__*/React.createElement(Snackbar, {
    open: open,
    autoHideDuration: duration,
    onClose: handleClose(state, setState)
  }, /*#__PURE__*/React.createElement(Alert, _extends({
    variant: "filled",
    elevation: 6,
    onClose: function onClose(ev) {
      return handleClose(state, setState)(ev, 'click');
    }
  }, alertProps), title && /*#__PURE__*/React.createElement(AlertTitle, null, title), message)));
};

export default /*#__PURE__*/React.memo(AlertProvider);