import PropTypes from 'prop-types';
import React from 'react';
export var infoWidth = '22rem';
var styles = {
  panel: {
    width: infoWidth,
    backgroundColor: 'var(--defaultBackgroundColor)'
  }
};

var InformationPanel = function InformationPanel(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    style: styles.panel,
    className: "u-h-100 u-ov-auto"
  }, children);
};

InformationPanel.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element
};
export default InformationPanel;