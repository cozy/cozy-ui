import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["open", "title", "content", "actions"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { createContext, useState, useContext, useMemo } from 'react';
import { ConfirmDialog } from "cozy-ui/transpiled/react/CozyDialogs";
export var ConfirmDialogContext = /*#__PURE__*/createContext();
export var useConfirmDialog = function useConfirmDialog() {
  var context = useContext(ConfirmDialogContext);

  if (!context) {
    throw new Error('useConfirmDialog must be used within a ConfirmDialogProvider');
  }

  return context;
};
var defaultState = {
  title: '',
  content: '',
  actions: null,
  open: false
};

var handleClose = function handleClose(state, setState) {
  return function () {
    return setState(_objectSpread(_objectSpread({}, state), {}, {
      open: false
    }));
  };
};

var ConfirmDialogProvider = function ConfirmDialogProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(defaultState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var open = state.open,
      title = state.title,
      content = state.content,
      actions = state.actions,
      confirmDialogProps = _objectWithoutProperties(state, _excluded);

  var value = useMemo(function () {
    return {
      showConfirmDialog: function showConfirmDialog(args) {
        setState(_objectSpread({
          open: true
        }, args));
      },
      closeConfirmDialog: handleClose(state, setState)
    };
  }, [state]);
  return /*#__PURE__*/React.createElement(ConfirmDialogContext.Provider, {
    value: value
  }, children, open && /*#__PURE__*/React.createElement(ConfirmDialog, _extends({
    open: true,
    title: title,
    content: content,
    actions: actions,
    onClose: handleClose(state, setState)
  }, confirmDialogProps)));
};

export default /*#__PURE__*/React.memo(ConfirmDialogProvider);