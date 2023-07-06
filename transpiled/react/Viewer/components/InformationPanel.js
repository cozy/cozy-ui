import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from "cozy-ui/transpiled/react/styles";
export var infoWidth = '22rem';

var customStyles = function customStyles() {
  return {
    drawer: {
      width: infoWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: infoWidth,
      backgroundColor: 'var(--defaultBackgroundColor)'
    }
  };
};

var InformationPanel = function InformationPanel(_ref) {
  var classes = _ref.classes,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Drawer, {
    className: classes.drawer,
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    anchor: "right"
  }, children);
};

InformationPanel.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element
};
export default withStyles(customStyles)(InformationPanel);