import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import IconButton from '@material-ui/core/IconButton';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "Breadcrumb": "styles__Breadcrumb___2p17B",
  "Breadcrumb__previousButton": "styles__Breadcrumb__previousButton___1FEmP",
  "Breadcrumb__items": "styles__Breadcrumb__items___C99rj",
  "Breadcrumb__previousItems": "styles__Breadcrumb__previousItems___20hGg",
  "BreadcrumbSeparator": "styles__BreadcrumbSeparator___37ZIH"
};
import Icon from "cozy-ui/transpiled/react/Icon";
import LeftIcon from "cozy-ui/transpiled/react/Icons/Left";
import Typography from "cozy-ui/transpiled/react/Typography";

var BreadcrumbSeparator = function BreadcrumbSeparator() {
  return /*#__PURE__*/React.createElement("span", {
    className: styles.BreadcrumbSeparator
  }, "/");
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var name = _ref.name,
      onClick = _ref.onClick,
      _ref$isCurrent = _ref.isCurrent,
      isCurrent = _ref$isCurrent === void 0 ? false : _ref$isCurrent,
      _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'span' : _ref$tag,
      _ref$showSeparator = _ref.showSeparator,
      showSeparator = _ref$showSeparator === void 0 ? false : _ref$showSeparator;
  var Tag = tag;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: isCurrent ? 'h3' : 'body1',
    gutterBottom: isCurrent
  }, /*#__PURE__*/React.createElement(Tag, {
    onClick: onClick,
    className: cx({
      'u-clickable': onClick
    })
  }, name), showSeparator && /*#__PURE__*/React.createElement(BreadcrumbSeparator, null));
};

var itemPropTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  tag: PropTypes.element
};
BreadcrumbItem.propTypes = _objectSpread(_objectSpread({}, itemPropTypes), {}, {
  isCurrent: PropTypes.bool,
  showSeparator: PropTypes.bool
});

var Breadcrumbs = function Breadcrumbs(_ref2) {
  var items = _ref2.items,
      className = _ref2.className,
      style = _ref2.style;
  var previousItems = items.slice(0, -1);

  var _previousItems$slice = previousItems.slice(-1),
      _previousItems$slice2 = _slicedToArray(_previousItems$slice, 1),
      lastPreviousItem = _previousItems$slice2[0];

  var _items$slice = items.slice(-1),
      _items$slice2 = _slicedToArray(_items$slice, 1),
      currentItem = _items$slice2[0];

  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: cx(styles.Breadcrumb, className)
  }, items.length > 1 && /*#__PURE__*/React.createElement(IconButton, {
    onClick: lastPreviousItem.onClick,
    className: styles.Breadcrumb__previousButton,
    size: "medium"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: LeftIcon
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.Breadcrumb__items
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.Breadcrumb__previousItems
  }, previousItems.map(function (_ref3, index) {
    var name = _ref3.name,
        onClick = _ref3.onClick,
        tag = _ref3.tag;
    return /*#__PURE__*/React.createElement(BreadcrumbItem, {
      key: index,
      name: name,
      onClick: onClick,
      tag: tag,
      showSeparator: index < previousItems.length - 1
    });
  })), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    name: currentItem.name,
    tag: currentItem.tag,
    isCurrent: true
  })));
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(itemPropTypes))
};
export default Breadcrumbs;