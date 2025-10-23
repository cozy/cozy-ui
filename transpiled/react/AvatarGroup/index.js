import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["size"];
import AvatarGroupMui from '@material-ui/lab/AvatarGroup';
import React from 'react';
import { sizeToNb, sizeToFontSize } from "cozy-ui/transpiled/react/Avatar/helpers";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
export var spacingByAvatarSize = {
  xs: 4,
  s: 6,
  m: 6,
  l: 10,
  xl: 16
};
var useStyles = makeStyles({
  avatar: {
    width: function width(_ref) {
      var size = _ref.size;
      return sizeToNb[size];
    },
    height: function height(_ref2) {
      var size = _ref2.size;
      return sizeToNb[size];
    },
    fontSize: function fontSize(_ref3) {
      var size = _ref3.size;
      return sizeToFontSize[size];
    }
  }
});

var AvatarGroup = function AvatarGroup(_ref4) {
  var size = _ref4.size,
      props = _objectWithoutProperties(_ref4, _excluded);

  var classes = useStyles({
    size: size
  });
  return /*#__PURE__*/React.createElement(AvatarGroupMui, _extends({
    spacing: spacingByAvatarSize[size],
    classes: classes
  }, props));
};

AvatarGroup.defaultProps = {
  size: 'm'
};
export default AvatarGroup;