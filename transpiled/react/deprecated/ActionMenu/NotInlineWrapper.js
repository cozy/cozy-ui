import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { getCssVariableValue } from "cozy-ui/transpiled/react/utils/color";

var NotInlineWrapper = function NotInlineWrapper(_ref) {
  var anchorElRef = _ref.anchorElRef,
      popperOptions = _ref.popperOptions,
      placement = _ref.placement,
      preventOverflow = _ref.preventOverflow,
      onClose = _ref.onClose,
      children = _ref.children;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      popperElement = _useState2[0],
      setPopperElement = _useState2[1];

  var referenceElement = anchorElRef ? anchorElRef.current : null;
  var normalOverflowModifiers = [{
    name: 'preventOverflow',
    enabled: false
  }, {
    name: 'hide',
    enabled: false
  }];
  var options = popperOptions || {
    placement: placement,
    modifiers: preventOverflow ? undefined : normalOverflowModifiers
  };

  var _usePopper = usePopper(referenceElement, popperElement, options),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  var handleClose = function handleClose(e) {
    if (referenceElement.contains(e.target)) return;
    onClose(e);
  };

  return /*#__PURE__*/React.createElement("div", _extends({
    ref: setPopperElement,
    style: _objectSpread(_objectSpread({}, styles.popper), {}, {
      zIndex: getCssVariableValue('zIndex-popover')
    })
  }, attributes.popper), /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleClose
  }, children));
};

export default NotInlineWrapper;