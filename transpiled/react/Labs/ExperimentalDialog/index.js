import React from 'react';
import Dialog from "cozy-ui/transpiled/react/Dialog";
import DialogTitle from "cozy-ui/transpiled/react/Dialog/DialogTitle";
import DialogActions from "cozy-ui/transpiled/react/Dialog/DialogActions";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDepecratedExperimentalDialog = createDepreciationLogger();
export var ExperimentalDialog = function ExperimentalDialog(props) {
  logDepecratedExperimentalDialog('ExperimentalDialog is no longer Experimental. Please change the import path to "cozy-ui/transpiled/react/Dialog"');
  return /*#__PURE__*/React.createElement(Dialog, props);
};
export var ExperimentalDialogTitle = function ExperimentalDialogTitle(props) {
  logDepecratedExperimentalDialog('ExperimentalDialogTitle is no longer Experimental. Please change the import path to "cozy-ui/transpiled/react/Dialog/DialogTitle"');
  return /*#__PURE__*/React.createElement(DialogTitle, props);
};
export var ExperimentalDialogActions = function ExperimentalDialogActions(props) {
  logDepecratedExperimentalDialog('ExperimentalDialogActions is no longer Experimental. Please change the import path to "cozy-ui/transpiled/react/Dialog/DialogActions"');
  return /*#__PURE__*/React.createElement(DialogActions, props);
};
export default ExperimentalDialog;