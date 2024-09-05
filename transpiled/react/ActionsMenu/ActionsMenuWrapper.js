import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "autoClose", "open", "onClose"];
import PropTypes from 'prop-types';
import React from 'react';
import BottomSheet from "cozy-ui/transpiled/react/BottomSheet";
import Menu from "cozy-ui/transpiled/react/Menu";
import Paper from "cozy-ui/transpiled/react/Paper";
import { useActionMenuEffects } from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuEffects";
import isTesting from "cozy-ui/transpiled/react/helpers/isTesting";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";

var ActionsMenuWrapper = function ActionsMenuWrapper(_ref) {
  var children = _ref.children,
      autoClose = _ref.autoClose,
      open = _ref.open,
      onClose = _ref.onClose,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  useActionMenuEffects();

  var overrideClick = function overrideClick(props) {
    return function (ev) {
      var _props$onClick;

      (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, ev); // this is ActionsItems onClick prop

      autoClose && (onClose === null || onClose === void 0 ? void 0 : onClose());
    };
  };

  if (isMobile && open) {
    return /*#__PURE__*/React.createElement(BottomSheet, {
      skipAnimation: isTesting(),
      backdrop: true,
      onClose: onClose
    }, /*#__PURE__*/React.createElement(Paper, {
      square: true
    }, React.Children.map(children, function (child) {
      return /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
        isListItem: true,
        size: 'small',
        onClick: overrideClick(child.props)
      }) : null;
    })));
  }

  return /*#__PURE__*/React.createElement(Menu, _extends({}, props, {
    open: open,
    onClose: onClose
  }), React.Children.map(children, function (child, idx) {
    var _firstChild$type, _firstChild$type2;

    // To keep accessibility, we spread the autofocus on the second child
    // if the first one is ActionsMenuMobileHeader
    var firstChild = React.Children.toArray(children)[0];
    var firstChildComponentName = (firstChild === null || firstChild === void 0 ? void 0 : (_firstChild$type = firstChild.type) === null || _firstChild$type === void 0 ? void 0 : _firstChild$type.name) || (firstChild === null || firstChild === void 0 ? void 0 : (_firstChild$type2 = firstChild.type) === null || _firstChild$type2 === void 0 ? void 0 : _firstChild$type2.displayName);
    var isFirstChildActionsMenuMobileHeader = firstChildComponentName === 'ActionsMenuMobileHeader';
    var autoFocus = isFirstChildActionsMenuMobileHeader && idx === 1 ? true : undefined;
    return /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
      autoFocus: autoFocus,
      onClick: overrideClick(child.props)
    }) : null;
  }));
};

ActionsMenuWrapper.propTypes = {
  /** Whether the menu should automatically close itself when an item is clicked */
  autoClose: PropTypes.bool,

  /** Function triggered when closing the Menu of BottomSheet */
  onClose: PropTypes.func
};
export default ActionsMenuWrapper;