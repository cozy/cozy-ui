import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { createContext, useContext, useState } from 'react';
/**
 * @typedef {('primary'|'secondary'|'success'|'error'|'warning'|'info')} enumSeverity
 */

/**
 * @typedef {object} useViewerSnackbarReturn
 * @property {boolean} isViewerSnackbarOpen
 * @property {string} viewerSnackbarMessage
 * @property {enumSeverity} viewerSnackbarSeverity
 * @property {(severity: enumSeverity, message: string) => void} showViewerSnackbar
 * @property {(message: string) => void} hideViewerSnackbar
 */

var ViewerSnackbarContext = /*#__PURE__*/createContext();

var ViewerSnackbarProvider = function ViewerSnackbarProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isViewerSnackbarOpen = _useState2[0],
      setIsViewerSnackbarOpen = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      viewerSnackbarMessage = _useState4[0],
      setViewerSnackbarMessage = _useState4[1];

  var _useState5 = useState('primary'),
      _useState6 = _slicedToArray(_useState5, 2),
      viewerSnackbarSeverity = _useState6[0],
      setViewerSnackbarSeverity = _useState6[1];

  var showViewerSnackbar = function showViewerSnackbar(severity, message) {
    setIsViewerSnackbarOpen(true);
    setViewerSnackbarMessage(message);
    setViewerSnackbarSeverity(severity);
  };

  var hideViewerSnackbar = function hideViewerSnackbar() {
    setIsViewerSnackbarOpen(false);
  };

  var result = {
    isViewerSnackbarOpen: isViewerSnackbarOpen,
    viewerSnackbarMessage: viewerSnackbarMessage,
    viewerSnackbarSeverity: viewerSnackbarSeverity,
    showViewerSnackbar: showViewerSnackbar,
    hideViewerSnackbar: hideViewerSnackbar
  };
  return /*#__PURE__*/React.createElement(ViewerSnackbarContext.Provider, {
    value: result
  }, children);
};
/**
 * @returns {useViewerSnackbarReturn}
 */


var useViewerSnackbar = function useViewerSnackbar() {
  var viewerSnackbar = useContext(ViewerSnackbarContext);

  if (!viewerSnackbar) {
    throw new Error('ViewerSnackbarContext must be used within a ViewerSnackbarProvider');
  }

  return viewerSnackbar;
};

export default useViewerSnackbar;
export { ViewerSnackbarProvider };