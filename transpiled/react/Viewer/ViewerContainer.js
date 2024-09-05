import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "disableFooter", "disablePanel", "editPathByModelProps", "children", "componentsProps", "isPublic"],
    _excluded2 = ["disableModal"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import Viewer from "cozy-ui/transpiled/react/Viewer/Viewer";
import ViewerInformationsWrapper from "cozy-ui/transpiled/react/Viewer/ViewerInformationsWrapper";
import { isValidForPanel } from "cozy-ui/transpiled/react/Viewer/helpers";
import { locales } from "cozy-ui/transpiled/react/Viewer/locales";
import { toolbarPropsPropType } from "cozy-ui/transpiled/react/Viewer/proptypes";
import { ActionMenuProvider } from "cozy-ui/transpiled/react/Viewer/providers/ActionMenuProvider";
import EncryptedProvider from "cozy-ui/transpiled/react/Viewer/providers/EncryptedProvider";
var styles = {
  "viewer-wrapper": "styles__viewer-wrapper___2GIXH",
  "flagship-app": "styles__flagship-app___KFqbm"
};
import Modal from "cozy-ui/transpiled/react/Modal";
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import AlertProvider from "cozy-ui/transpiled/react/providers/Alert";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useCozyTheme } from "cozy-ui/transpiled/react/providers/CozyTheme";
import { useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var ViewerContainer = function ViewerContainer(props) {
  var className = props.className,
      disableFooter = props.disableFooter,
      disablePanel = props.disablePanel,
      editPathByModelProps = props.editPathByModelProps,
      children = props.children,
      componentsProps = props.componentsProps,
      isPublic = props.isPublic,
      rest = _objectWithoutProperties(props, _excluded);

  var currentIndex = props.currentIndex,
      files = props.files,
      currentURL = props.currentURL;
  var toolbarRef = /*#__PURE__*/createRef();

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  useExtendI18n(locales);
  var currentFile = files[currentIndex];
  var fileCount = files.length;
  var hasPrevious = currentIndex > 0;
  var hasNext = currentIndex < fileCount - 1;
  var validForPanel = isValidForPanel({
    file: currentFile
  }) && isDesktop && !disablePanel;

  var componentsPropsWithDefault = _objectSpread(_objectSpread({}, componentsProps), {}, {
    toolbarProps: _objectSpread({
      showToolbar: true,
      showClose: true
    }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.toolbarProps)
  });

  return /*#__PURE__*/React.createElement(AlertProvider, null, /*#__PURE__*/React.createElement(ActionMenuProvider, {
    editPathByModelProps: editPathByModelProps
  }, /*#__PURE__*/React.createElement("div", {
    id: "viewer-wrapper",
    className: cx(styles['viewer-wrapper'], className)
  }, /*#__PURE__*/React.createElement(EncryptedProvider, {
    url: currentURL
  }, /*#__PURE__*/React.createElement(Viewer, _extends({}, rest, {
    componentsProps: componentsPropsWithDefault,
    currentFile: currentFile,
    hasPrevious: hasPrevious,
    hasNext: hasNext,
    validForPanel: validForPanel,
    toolbarRef: toolbarRef
  }), children)), /*#__PURE__*/React.createElement(ViewerInformationsWrapper, {
    isPublic: isPublic,
    disableFooter: disableFooter,
    validForPanel: validForPanel,
    currentFile: currentFile,
    toolbarRef: toolbarRef
  }, children))));
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

  /** Whether to show left and right arrows to navigate between files */
  showNavigation: PropTypes.bool,

  /** A render prop that is called when a file can't be displayed */
  renderFallbackExtraContent: PropTypes.func,

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

  /** If the Viewer is in public view */
  isPublic: PropTypes.bool,

  /* Props passed to components with the same name */
  componentsProps: PropTypes.shape({
    /** Used to open an Only Office file */
    OnlyOfficeViewer: PropTypes.shape({
      /** Whether Only Office is enabled on the server */
      isEnabled: PropTypes.bool,

      /** To open the Only Office file */
      opener: PropTypes.func
    }),

    /** Toolbar properties */
    toolbarProps: PropTypes.shape(toolbarPropsPropType)
  })
};
ViewerContainer.defaultProps = {
  currentIndex: 0,
  showNavigation: true
};

var ViewerContainerWrapper = function ViewerContainerWrapper(_ref) {
  var disableModal = _ref.disableModal,
      props = _objectWithoutProperties(_ref, _excluded2);

  var _useCozyTheme = useCozyTheme(),
      type = _useCozyTheme.type,
      variant = _useCozyTheme.variant;

  var _ref2 = props.componentsProps || {},
      _ref2$modalProps = _ref2.modalProps,
      modalProps = _ref2$modalProps === void 0 ? {
    open: true
  } : _ref2$modalProps;

  if (disableModal) {
    return /*#__PURE__*/React.createElement(ViewerContainer, props);
  }

  return /*#__PURE__*/React.createElement(Modal, _extends({}, modalProps, {
    className: "CozyTheme--".concat(type, "-").concat(variant)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ViewerContainer, props)));
};

ViewerContainerWrapper.defaultProps = {
  componentsProps: {
    modalProps: {
      open: true
    }
  }
};
ViewerContainerWrapper.propTypes = {
  /** To avoid wrapping the Viewer with a Modal component */
  disableModal: PropTypes.bool,

  /** Props passed to Modal component */
  componentsProps: PropTypes.shape({
    modalProps: PropTypes.object
  })
};
export default ViewerContainerWrapper;