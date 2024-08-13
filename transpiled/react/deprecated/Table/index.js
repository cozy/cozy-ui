import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className"],
    _excluded2 = ["className"],
    _excluded3 = ["className"],
    _excluded4 = ["className"],
    _excluded5 = ["className"],
    _excluded6 = ["className"];
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
var styles = {
  "Table": "styles__Table___39nEw",
  "TableHead": "styles__TableHead___3ZqIs",
  "TableBody": "styles__TableBody___4ThMV",
  "TableRow": "styles__TableRow___UyGEc",
  "TableCell": "styles__TableCell___3vgVE",
  "TableHeader": "styles__TableHeader___ERsVK"
};
export var Table = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.Table, className)
  }, rest, {
    ref: ref
  }));
});
export var TableHead = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded2);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.TableHead, className)
  }, rest, {
    ref: ref
  }));
});
export var TableBody = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.TableBody, className)
  }, rest, {
    ref: ref
  }));
});
export var TableRow = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded4);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.TableRow, className)
  }, rest, {
    ref: ref
  }));
});
export var TableCell = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded5);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.TableCell, className)
  }, rest, {
    ref: ref
  }));
});
export var TableHeader = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded6);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(styles.TableHeader, className)
  }, rest, {
    ref: ref
  }));
});
Table.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
TableHead.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
TableBody.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
TableRow.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
TableCell.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
TableHeader.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};