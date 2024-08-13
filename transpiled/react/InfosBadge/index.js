import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["classes"],
    _excluded2 = ["qualifier"];
import React from 'react';
import cx from 'classnames';
import Badge from "cozy-ui/transpiled/react/Badge";
import { withStyles } from "cozy-ui/transpiled/react/styles";

var customStyles = function customStyles() {
  return {
    qualifier: {
      height: '1.125rem',
      // compensation of the specific border size
      minWidth: '1.125rem',
      backgroundColor: 'var(--paperBackgroundColor)',
      color: 'var(--iconTextColor)',
      border: '1px solid var(--borderMainColor)'
    }
  };
};

var InfosBadge = withStyles(customStyles)(function (_ref) {
  var classes = _ref.classes,
      props = _objectWithoutProperties(_ref, _excluded);

  var qualifier = classes.qualifier,
      customClasses = _objectWithoutProperties(classes, _excluded2);

  return /*#__PURE__*/React.createElement(Badge, _extends({
    classes: {
      badge: cx(qualifier, customClasses)
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    }
  }, props));
});
export default InfosBadge;