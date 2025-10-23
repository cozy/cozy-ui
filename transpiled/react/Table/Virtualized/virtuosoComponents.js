import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["context"],
    _excluded2 = ["context"],
    _excluded3 = ["context", "className"],
    _excluded4 = ["context"],
    _excluded5 = ["context"];

/* eslint-disable no-unused-vars */
import cx from 'classnames';
import React, { forwardRef } from 'react';
import _TableRow from "cozy-ui/transpiled/react/Table/Virtualized/TableRow";
import Table from "cozy-ui/transpiled/react/Table";
import TableBody from "cozy-ui/transpiled/react/TableBody";
import TableContainer from "cozy-ui/transpiled/react/TableContainer";
import TableFooter from "cozy-ui/transpiled/react/TableFooter";
import TableHead from "cozy-ui/transpiled/react/TableHead";
/**
 Be aware that context is spread to every components but should not be spread to Table components
 so we desctrure it from props, but don't spread to child to avoid its presence in DOM
*/

var virtuosoComponents = {
  Scroller: /*#__PURE__*/forwardRef(function (_ref, ref) {
    var context = _ref.context,
        props = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/React.createElement(TableContainer, _extends({}, props, {
      ref: ref
    }));
  }),
  Table: /*#__PURE__*/forwardRef(function (_ref2, ref) {
    var context = _ref2.context,
        props = _objectWithoutProperties(_ref2, _excluded2);

    return /*#__PURE__*/React.createElement(Table, _extends({}, props, {
      ref: ref
    }));
  }),
  TableHead: /*#__PURE__*/forwardRef(function (_ref3, ref) {
    var context = _ref3.context,
        className = _ref3.className,
        props = _objectWithoutProperties(_ref3, _excluded3);

    return /*#__PURE__*/React.createElement(TableHead, _extends({}, props, {
      className: cx(className, 'virtualized'),
      ref: ref
    }));
  }),
  TableBody: /*#__PURE__*/forwardRef(function (_ref4, ref) {
    var context = _ref4.context,
        props = _objectWithoutProperties(_ref4, _excluded4);

    return /*#__PURE__*/React.createElement(TableBody, _extends({}, props, {
      ref: ref
    }));
  }),
  TableFooter: /*#__PURE__*/forwardRef(function (_ref5, ref) {
    var context = _ref5.context,
        props = _objectWithoutProperties(_ref5, _excluded5);

    return /*#__PURE__*/React.createElement(TableFooter, _extends({}, props, {
      ref: ref
    }));
  }),
  TableRow: function TableRow(props) {
    return /*#__PURE__*/React.createElement(_TableRow, props);
  }
};
export default virtuosoComponents;