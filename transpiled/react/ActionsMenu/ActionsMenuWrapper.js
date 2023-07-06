import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "autoClose", "open", "onClose"];
import React from 'react';
import PropTypes from 'prop-types';
import Menu from "cozy-ui/transpiled/react/Menu";
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";
import BottomSheet from "cozy-ui/transpiled/react/BottomSheet";
import isTesting from "cozy-ui/transpiled/react/helpers/isTesting";
import Paper from "cozy-ui/transpiled/react/Paper";
import { useActionMenuEffects } from "cozy-ui/transpiled/react/deprecated/ActionMenu/ActionMenuEffects";

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
    return function () {
      var _props$onClick;

      (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props);
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
  }), React.Children.map(children, function (child) {
    return /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
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