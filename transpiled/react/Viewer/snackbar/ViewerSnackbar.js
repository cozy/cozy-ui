import React from 'react';
import Snackbar from "cozy-ui/transpiled/react/Snackbar";
import Alert from "cozy-ui/transpiled/react/Alert";
import useViewerSnackbar from "cozy-ui/transpiled/react/Viewer/providers/ViewerSnackbarProvider";

var ViewerSnackbar = function ViewerSnackbar() {
  var _useViewerSnackbar = useViewerSnackbar(),
      isViewerSnackbarOpen = _useViewerSnackbar.isViewerSnackbarOpen,
      viewerSnackbarMessage = _useViewerSnackbar.viewerSnackbarMessage,
      viewerSnackbarSeverity = _useViewerSnackbar.viewerSnackbarSeverity,
      hideViewerSnackbar = _useViewerSnackbar.hideViewerSnackbar;

  return /*#__PURE__*/React.createElement(Snackbar, {
    open: isViewerSnackbarOpen,
    onClose: hideViewerSnackbar
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "filled",
    elevation: 6,
    onClose: hideViewerSnackbar,
    severity: viewerSnackbarSeverity,
    icon: false
  }, viewerSnackbarMessage));
};

export default ViewerSnackbar;