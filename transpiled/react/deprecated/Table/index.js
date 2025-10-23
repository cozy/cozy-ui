import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className"],
    _excluded2 = ["className"],
    _excluded3 = ["className"],
    _excluded4 = ["className"],
    _excluded5 = ["className"],
    _excluded6 = ["className"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "Table": "styles__Table___39nEw",
  "TableHead": "styles__TableHead___3ZqIs",
  "TableBody": "styles__TableBody___4ThMV",
  "TableRow": "styles__TableRow___UyGEc",
  "TableCell": "styles__TableCell___3vgVE",
  "TableHeader": "styles__TableHeader___ERsVK"
};
export var Table = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.Table, className)
  }, props, {
    ref: ref
  }));
});
export var TableHead = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.TableHead, className)
  }, props, {
    ref: ref
  }));
});
export var TableBody = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
      props = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.TableBody, className)
  }, props, {
    ref: ref
  }));
});
export var TableRow = /*#__PURE__*/React.forwardRef(function (_ref4, ref) {
  var className = _ref4.className,
      props = _objectWithoutProperties(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.TableRow, className)
  }, props, {
    ref: ref
  }));
});
export var TableCell = /*#__PURE__*/React.forwardRef(function (_ref5, ref) {
  var className = _ref5.className,
      props = _objectWithoutProperties(_ref5, _excluded5);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.TableCell, className)
  }, props, {
    ref: ref
  }));
});
export var TableHeader = /*#__PURE__*/React.forwardRef(function (_ref6, ref) {
  var className = _ref6.className,
      props = _objectWithoutProperties(_ref6, _excluded6);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.TableHeader, className)
  }, props, {
    ref: ref
  }));
});
Table.propTypes = {
  className: PropTypes.string
};
TableHead.propTypes = {
  className: PropTypes.string
};
TableBody.propTypes = {
  className: PropTypes.string
};
TableRow.propTypes = {
  className: PropTypes.string
};
TableCell.propTypes = {
  className: PropTypes.string
};
TableHeader.propTypes = {
  className: PropTypes.string
};