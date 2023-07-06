import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import InformationPanel from "cozy-ui/transpiled/react/Viewer/components/InformationPanel";
import Footer from "cozy-ui/transpiled/react/Viewer/components/Footer";
import PanelContent from "cozy-ui/transpiled/react/Viewer/Panel/PanelContent";
import FooterContent from "cozy-ui/transpiled/react/Viewer/Footer/FooterContent";
import { useSetFlagshipUI } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/useSetFlagshipUI";

var ViewerInformationsWrapper = function ViewerInformationsWrapper(_ref) {
  var currentFile = _ref.currentFile,
      disableFooter = _ref.disableFooter,
      validForPanel = _ref.validForPanel,
      toolbarRef = _ref.toolbarRef,
      children = _ref.children;
  var theme = useTheme();
  var sidebar = document.querySelector('[class*="sidebar"]');
  useSetFlagshipUI({
    bottomBackground: theme.palette.background.paper,
    bottomTheme: 'dark'
  }, {
    bottomBackground: theme.palette.background[sidebar ? 'default' : 'paper']
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, !disableFooter && /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement(FooterContent, {
    file: currentFile,
    toolbarRef: toolbarRef
  }, children)), validForPanel && /*#__PURE__*/React.createElement(InformationPanel, null, /*#__PURE__*/React.createElement(PanelContent, {
    file: currentFile
  })));
};

ViewerInformationsWrapper.propTypes = {
  currentFile: FileDoctype.isRequired,
  disableFooter: PropTypes.bool,
  validForPanel: PropTypes.bool,
  toolbarRef: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
export default ViewerInformationsWrapper;