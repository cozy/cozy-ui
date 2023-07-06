import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "disableFooter", "disablePanel", "editPathByModelProps", "children"];
import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import { toolbarPropsPropType } from "cozy-ui/transpiled/react/Viewer/proptypes";
import { isValidForPanel } from "cozy-ui/transpiled/react/Viewer/helpers";
import Viewer from "cozy-ui/transpiled/react/Viewer/Viewer";
import ViewerInformationsWrapper from "cozy-ui/transpiled/react/Viewer/ViewerInformationsWrapper";
import EncryptedProvider from "cozy-ui/transpiled/react/Viewer/providers/EncryptedProvider";
import { ViewerSnackbarProvider } from "cozy-ui/transpiled/react/Viewer/providers/ViewerSnackbarProvider";
import ViewerSnackbar from "cozy-ui/transpiled/react/Viewer/snackbar/ViewerSnackbar";
import { ActionMenuProvider } from "cozy-ui/transpiled/react/Viewer/providers/ActionMenuProvider";
var styles = {
  "viewer-wrapper": "styles__viewer-wrapper___2GIXH",
  "flagship-app": "styles__flagship-app___KFqbm"
};

var ViewerContainer = function ViewerContainer(props) {
  var className = props.className,
      disableFooter = props.disableFooter,
      disablePanel = props.disablePanel,
      editPathByModelProps = props.editPathByModelProps,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var currentIndex = props.currentIndex,
      files = props.files,
      currentURL = props.currentURL;
  var toolbarRef = /*#__PURE__*/createRef();

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  var currentFile = files[currentIndex];
  var fileCount = files.length;
  var hasPrevious = currentIndex > 0;
  var hasNext = currentIndex < fileCount - 1;
  var validForPanel = isValidForPanel({
    file: currentFile
  }) && isDesktop && !disablePanel;
  return /*#__PURE__*/React.createElement(ViewerSnackbarProvider, null, /*#__PURE__*/React.createElement(ActionMenuProvider, {
    editPathByModelProps: editPathByModelProps
  }, /*#__PURE__*/React.createElement("div", {
    id: "viewer-wrapper",
    className: cx(styles['viewer-wrapper'], className)
  }, /*#__PURE__*/React.createElement(EncryptedProvider, {
    url: currentURL
  }, /*#__PURE__*/React.createElement(Viewer, _extends({}, rest, {
    currentFile: currentFile,
    hasPrevious: hasPrevious,
    hasNext: hasNext,
    validForPanel: validForPanel,
    toolbarRef: toolbarRef
  }))), /*#__PURE__*/React.createElement(ViewerInformationsWrapper, {
    disableFooter: disableFooter,
    validForPanel: validForPanel,
    currentFile: currentFile,
    toolbarRef: toolbarRef
  }, children)), /*#__PURE__*/React.createElement(ViewerSnackbar, null)));
};

ViewerContainer.propTypes = {
  /** One or more `io.cozy.files` to display */
  files: PropTypes.arrayOf(FileDoctype).isRequired,

  /** Index of the file to show */
  currentIndex: PropTypes.number,

  /** Optionnal URL of the file */
  currentURL: PropTypes.string,
  className: PropTypes.string,

  /** Called when the user wants to leave the Viewer */
  onCloseRequest: PropTypes.func,

  /** Called with (nextFile, nextIndex) when the user requests to navigate to another file */
  onChangeRequest: PropTypes.func,

  /** Toolbar properties */
  toolbarProps: PropTypes.shape(toolbarPropsPropType),

  /** Whether to show left and right arrows to navigate between files */
  showNavigation: PropTypes.bool,

  /** A render prop that is called when a file can't be displayed */
  renderFallbackExtraContent: PropTypes.func,

  /** Used to open an Only Office file */
  onlyOfficeProps: PropTypes.shape({
    /** Whether Only Office is enabled on the server */
    isEnabled: PropTypes.bool,

    /** To open the Only Office file */
    opener: PropTypes.func
  }),

  /** Edit path by model properties */
  editPathByModelProps: PropTypes.shape({
    /** URL used to edit the file when editing a `information` type metadata (text, date) */
    information: PropTypes.string,

    /** URL used to edit the file when editing a `page` type metadata (side of the document) */
    page: PropTypes.string
  }),

  /** Show/Hide the panel containing more information about the file only on Desktop */
  disablePanel: PropTypes.bool,

  /** Show/Hide the panel containing more information about the file only on Phone & Tablet devices */
  disableFooter: PropTypes.bool,

  /* Props passed to components with the same name */
  componentsProps: PropTypes.shape({
    /** Used to open an Only Office file */
    OnlyOfficeViewer: PropTypes.shape({
      /** Whether Only Office is enabled on the server */
      isEnabled: PropTypes.bool,

      /** To open the Only Office file */
      opener: PropTypes.func
    })
  })
};
ViewerContainer.defaultProps = {
  currentIndex: 0,
  toolbarProps: {
    showToolbar: true,
    showClose: true
  },
  showNavigation: true
};
export default ViewerContainer;