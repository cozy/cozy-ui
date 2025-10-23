import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["classes"];
import cx from 'classnames';
import React from 'react';
import Badge from "cozy-ui/transpiled/react/Badge";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  qualifier: {
    height: '24px',
    // compensation of the specific border size
    minWidth: '24px',
    backgroundColor: 'var(--paperBackgroundColor)',
    color: 'var(--iconTextColor)',
    boxShadow: 'var(--shadow3)'
  }
});

var InfosBadge = function InfosBadge(_ref) {
  var classes = _ref.classes,
      props = _objectWithoutProperties(_ref, _excluded);

  var _classes = useStyles();

  return /*#__PURE__*/React.createElement(Badge, _extends({
    classes: {
      badge: cx(_classes.qualifier, classes)
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    }
  }, props));
};

export default InfosBadge;