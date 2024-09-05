import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["docs", "actions", "anchorOrigin", "children", "componentsProps", "onClose"];
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import ActionsItems from "cozy-ui/transpiled/react/ActionsMenu/ActionsItems";
import ActionsMenuWrapper from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuWrapper";

var useTransformOrigin = function useTransformOrigin(_ref) {
  var vertical = _ref.vertical,
      horizontal = _ref.horizontal;
  var v = vertical === 'bottom' ? 'top' : vertical === 'top' ? 'bottom' : vertical;
  return {
    vertical: v,
    horizontal: horizontal
  };
};

var ActionsMenu = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var docs = _ref2.docs,
      actions = _ref2.actions,
      anchorOrigin = _ref2.anchorOrigin,
      children = _ref2.children,
      componentsProps = _ref2.componentsProps,
      onClose = _ref2.onClose,
      props = _objectWithoutProperties(_ref2, _excluded);

  var transformOrigin = useTransformOrigin(anchorOrigin);
  return /*#__PURE__*/React.createElement(ActionsMenuWrapper, _extends({}, props, {
    anchorEl: ref.current,
    getContentAnchorEl: null,
    anchorOrigin: anchorOrigin,
    transformOrigin: transformOrigin,
    keepMounted: true,
    onClose: onClose
  }), children, /*#__PURE__*/React.createElement(ActionsItems, _extends({}, componentsProps.actionsItems, {
    docs: docs,
    actions: actions
  })));
});
ActionsMenu.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  autoClose: true,
  componentsProps: {}
};
ActionsMenu.propTypes = {
  /** Whether the menu is open */
  open: PropTypes.bool,

  /** Reference documents for the actions */
  docs: PropTypes.array,

  /** List of actions */
  actions: PropTypes.array,

  /** Allows you to position the menu in relation to the anchor element */
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['bottom', 'center', 'top']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right'])
  }),

  /** Whether the menu should automatically close itself when an item is clicked */
  autoClose: PropTypes.bool,

  /* Props passed to components with the same name */
  componentsProps: PropTypes.shape({
    /** Props spread to ActionsItems component */
    actionsItems: PropTypes.shape({
      /** Props spread to action method of Actions component */
      actionOptions: PropTypes.object,

      /** onClick method spread to action method of Actions component */
      onClick: PropTypes.func
    })
  }),

  /** Function triggered when closing the menu */
  onClose: PropTypes.func
};
export default ActionsMenu;