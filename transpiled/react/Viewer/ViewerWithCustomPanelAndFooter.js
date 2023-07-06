import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["footerProps", "panelInfoProps", "className"];
import React, { createRef } from 'react';
import cx from 'classnames';
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";
import InformationPanel from "cozy-ui/transpiled/react/Viewer/components/InformationPanel";
import Footer from "cozy-ui/transpiled/react/Viewer/components/Footer";
import Viewer from "cozy-ui/transpiled/react/Viewer/Viewer";
var styles = {
  "viewer-wrapper": "styles__viewer-wrapper___2GIXH",
  "flagship-app": "styles__flagship-app___KFqbm"
};

var ViewerWithCustomPanelAndFooter = function ViewerWithCustomPanelAndFooter(props) {
  console.warn('Warning: Please do not use the "ViewerWithCustomPanelAndFooter" Component, replace it with the default export component');

  var footerProps = props.footerProps,
      panelInfoProps = props.panelInfoProps,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  var files = props.files,
      currentIndex = props.currentIndex;
  var fileCount = files.length;
  var hasPrevious = currentIndex > 0;
  var hasNext = currentIndex < fileCount - 1;

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  var toolbarRef = /*#__PURE__*/createRef();
  var currentFile = files[currentIndex];
  var showInfoPanel = isDesktop && panelInfoProps && panelInfoProps.showPanel({
    file: currentFile
  });
  return /*#__PURE__*/React.createElement("div", {
    id: "viewer-wrapper",
    className: cx(styles['viewer-wrapper'], className)
  }, /*#__PURE__*/React.createElement(Viewer, _extends({}, rest, {
    disablePanel: true,
    disableFooter: true,
    currentFile: currentFile,
    hasPrevious: hasPrevious,
    hasNext: hasNext,
    validForPanel: showInfoPanel,
    toolbarRef: toolbarRef
  })), /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement(footerProps.FooterContent, {
    file: currentFile,
    toolbarRef: toolbarRef
  })), showInfoPanel && /*#__PURE__*/React.createElement(InformationPanel, null, /*#__PURE__*/React.createElement(panelInfoProps.PanelContent, {
    file: currentFile
  })));
};

export default ViewerWithCustomPanelAndFooter;