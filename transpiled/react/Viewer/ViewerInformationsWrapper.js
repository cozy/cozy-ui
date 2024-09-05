import { useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FooterContent from "cozy-ui/transpiled/react/Viewer/Footer/FooterContent";
import PanelContent from "cozy-ui/transpiled/react/Viewer/Panel/PanelContent";
import Footer from "cozy-ui/transpiled/react/Viewer/components/Footer";
import InformationPanel from "cozy-ui/transpiled/react/Viewer/components/InformationPanel";
import { useSetFlagshipUI } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/useSetFlagshipUI";
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import { useCozyTheme } from "cozy-ui/transpiled/react/providers/CozyTheme";

var ViewerInformationsWrapper = function ViewerInformationsWrapper(_ref) {
  var currentFile = _ref.currentFile,
      disableFooter = _ref.disableFooter,
      validForPanel = _ref.validForPanel,
      toolbarRef = _ref.toolbarRef,
      isPublic = _ref.isPublic,
      children = _ref.children;
  var theme = useTheme();

  var _useCozyTheme = useCozyTheme(),
      isLight = _useCozyTheme.isLight;

  var sidebar = document.querySelector('[class*="sidebar"]');
  useSetFlagshipUI({
    bottomBackground: theme.palette.background.paper,
    bottomTheme: isLight ? 'dark' : 'light'
  }, {
    bottomBackground: theme.palette.background[sidebar ? 'default' : 'paper']
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, !disableFooter && /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement(FooterContent, {
    file: currentFile,
    toolbarRef: toolbarRef,
    isPublic: isPublic
  }, children)), validForPanel && /*#__PURE__*/React.createElement(InformationPanel, null, /*#__PURE__*/React.createElement(PanelContent, {
    file: currentFile,
    isPublic: isPublic
  })));
};

ViewerInformationsWrapper.propTypes = {
  currentFile: FileDoctype.isRequired,
  disableFooter: PropTypes.bool,
  validForPanel: PropTypes.bool,
  toolbarRef: PropTypes.object,
  isPublic: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
export default ViewerInformationsWrapper;