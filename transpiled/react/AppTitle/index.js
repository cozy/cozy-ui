import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "tag", "className"];
import Typography from '@material-ui/core/Typography';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "c-apptitle": "styles__c-apptitle___eqV9l"
};
export var AppTitle = function AppTitle(_ref) {
  var children = _ref.children,
      tag = _ref.tag,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Typography, _extends({
    component: tag,
    variant: "h4",
    className: cx(styles['c-apptitle'], className)
  }, restProps), children);
};
AppTitle.propTypes = {
  className: PropTypes.string
};
AppTitle.defaultProps = {
  tag: 'h1'
};
export default AppTitle;