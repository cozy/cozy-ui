import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["context"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { forwardRef } from 'react';
import TableRowDnD from "cozy-ui/transpiled/react/Table/Virtualized/Dnd/TableRow";
import TableContainer from "cozy-ui/transpiled/react/TableContainer";
import DnDConfigWrapper from "cozy-ui/transpiled/react/utils/Dnd/DnDConfigWrapper";
import virtuosoComponents from "cozy-ui/transpiled/react/Table/Virtualized/virtuosoComponents";
/**
 Be aware that context is spread to every components but should not be spread to Table components
 so we desctrure it from props, but don't spread to child to avoid its presence in DOM
*/

var virtuosoComponentsDnd = _objectSpread(_objectSpread({}, virtuosoComponents), {}, {
  // eslint-disable-next-line no-unused-vars
  Scroller: /*#__PURE__*/forwardRef(function (_ref, ref) {
    var context = _ref.context,
        props = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/React.createElement(DnDConfigWrapper, {
      ref: ref
    }, /*#__PURE__*/React.createElement(TableContainer, _extends({}, props, {
      ref: ref
    })));
  }),
  TableRow: function TableRow(props) {
    return /*#__PURE__*/React.createElement(TableRowDnD, props);
  }
});

export default virtuosoComponentsDnd;