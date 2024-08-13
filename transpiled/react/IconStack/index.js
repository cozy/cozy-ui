import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import migrateProps from "cozy-ui/transpiled/react/helpers/migrateProps";
var styles = {
  "IconStack-wrapper": "styles__IconStack-wrapper___10dhG",
  "IconStack-foregroundIcon": "styles__IconStack-foregroundIcon___ZvY-t"
};

var IconStack = function IconStack(_ref) {
  var backgroundClassName = _ref.backgroundClassName,
      foregroundClassName = _ref.foregroundClassName,
      backgroundIcon = _ref.backgroundIcon,
      foregroundIcon = _ref.foregroundIcon,
      offset = _ref.offset;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(styles['IconStack-wrapper'], backgroundClassName)
  }, backgroundIcon, foregroundIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: offset === null || offset === void 0 ? void 0 : offset.vertical,
      marginLeft: offset === null || offset === void 0 ? void 0 : offset.horizontal
    },
    className: classNames(styles['IconStack-foregroundIcon'], foregroundClassName)
  }, foregroundIcon));
};

IconStack.propTypes = {
  backgroundClassName: PropTypes.string,
  foregroundClassName: PropTypes.string,
  backgroundIcon: PropTypes.node,
  foregroundIcon: PropTypes.node,
  offset: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string
  })
};
export default migrateProps([{
  src: 'className',
  dest: 'backgroundClassName'
}, {
  src: 'background',
  dest: 'backgroundIcon'
}, {
  src: 'foreground',
  dest: 'foregroundIcon'
}])(IconStack);