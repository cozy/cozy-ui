import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "selectProps", "className"],
    _excluded2 = ["createGroup"];
import cx from 'classnames';
import React from 'react';
var styles = {
  "menu": "styles__menu___120ui"
};
import { components } from "cozy-ui/transpiled/react/SelectBox";
import Typography from "cozy-ui/transpiled/react/Typography";
import GroupCreation from "cozy-ui/transpiled/react/Contacts/GroupsSelect/GroupCreation";

var Menu = function Menu(_ref) {
  var children = _ref.children,
      selectProps = _ref.selectProps,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var createGroup = selectProps.createGroup,
      restSelectProps = _objectWithoutProperties(selectProps, _excluded2);

  return /*#__PURE__*/React.createElement(components.Menu, _extends({}, props, {
    className: cx(className, styles['menu']),
    selectProps: restSelectProps
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "body1",
    component: "div"
  }, children, /*#__PURE__*/React.createElement(GroupCreation, {
    createGroup: createGroup
  })));
};

export default Menu;