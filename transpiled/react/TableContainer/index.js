import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import MuiTableContainer from '@material-ui/core/TableContainer';
import React, { forwardRef } from 'react';
import Paper from "cozy-ui/transpiled/react/Paper";
var TableContainer = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(MuiTableContainer, _extends({}, props, {
    ref: ref,
    component: Paper,
    style: _objectSpread({
      zIndex: 'var(--zIndex-app)'
    }, props.style),
    elevation: 0,
    square: true
  }));
});
export default TableContainer;