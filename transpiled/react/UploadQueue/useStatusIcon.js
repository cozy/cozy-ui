import React from 'react';
import { uploadStatus } from "cozy-ui/transpiled/react/UploadQueue/index";
import Icon from "cozy-ui/transpiled/react/Icon";
import CheckCircleIcon from "cozy-ui/transpiled/react/Icons/CheckCircle";
import CrossCircleIcon from "cozy-ui/transpiled/react/Icons/CrossCircle";
import WarningIcon from "cozy-ui/transpiled/react/Icons/Warning";
import Spinner from "cozy-ui/transpiled/react/Spinner";
export var useStatusIcon = function useStatusIcon(statusToUse, progress) {
  var CANCEL = uploadStatus.CANCEL,
      LOADING = uploadStatus.LOADING,
      DONE_STATUSES = uploadStatus.DONE_STATUSES,
      ERROR_STATUSES = uploadStatus.ERROR_STATUSES,
      PENDING = uploadStatus.PENDING;
  var SuccessIcon = CheckCircleIcon;
  var ErrorIcon = CrossCircleIcon;
  var statusIcon;

  if (statusToUse === LOADING) {
    statusIcon = !progress ? /*#__PURE__*/React.createElement(Spinner, {
      color: "var(--primaryColor)"
    }) : null;
  } else if (statusToUse === CANCEL) {
    statusIcon = /*#__PURE__*/React.createElement(Icon, {
      icon: ErrorIcon,
      color: "var(--errorColor)"
    });
  } else if (ERROR_STATUSES.includes(statusToUse)) {
    statusIcon = /*#__PURE__*/React.createElement(Icon, {
      icon: WarningIcon,
      color: "var(--errorColor)"
    });
  } else if (DONE_STATUSES.includes(statusToUse)) {
    statusIcon = /*#__PURE__*/React.createElement(Icon, {
      icon: SuccessIcon,
      color: "var(--successColor)"
    });
  } else if (statusToUse === PENDING) {
    statusIcon = null;
  }

  return statusIcon;
};