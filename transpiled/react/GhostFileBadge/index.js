import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["classes"],
    _excluded2 = ["ghost"];
import cx from 'classnames';
import React from 'react';
import Badge from "cozy-ui/transpiled/react/Badge";
import { withStyles } from "cozy-ui/transpiled/react/styles";

var customStyles = function customStyles() {
  return {
    ghost: {
      backgroundColor: 'white',
      color: 'var(--coolGrey)',
      border: '1px solid var(--silver)',
      borderRadius: '6px',
      height: 'auto',
      minWidth: 'auto',
      padding: '3px'
    }
  };
};

var GhostFileBadge = withStyles(customStyles)(function (_ref) {
  var classes = _ref.classes,
      props = _objectWithoutProperties(_ref, _excluded);

  var ghost = classes.ghost,
      customClasses = _objectWithoutProperties(classes, _excluded2);

  return /*#__PURE__*/React.createElement(Badge, _extends({
    classes: {
      badge: cx(ghost, customClasses)
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    }
  }, props));
});
export default GhostFileBadge;