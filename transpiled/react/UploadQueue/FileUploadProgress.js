import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { useState } from 'react';
import { useIntervalWhen } from 'rooks';
import RemainingTime from "cozy-ui/transpiled/react/UploadQueue/RemainingTime";
var styles = {
  "upload-queue": "styles__upload-queue___1VtNK",
  "upload-queue__threshold-bar": "styles__upload-queue__threshold-bar___tTYal",
  "upload-queue__progress-caption": "styles__upload-queue__progress-caption___1-vXY",
  "upload-queue__upload-progress": "styles__upload-queue__upload-progress___1q-uS",
  "upload-queue--popover": "styles__upload-queue--popover___2z1a4",
  "upload-queue--visible": "styles__upload-queue--visible___DjVRs",
  "upload-queue-header": "styles__upload-queue-header___c9Vf2",
  "upload-queue-header-inner": "styles__upload-queue-header-inner___26wpB",
  "upload-queue-progress": "styles__upload-queue-progress___1CmN-",
  "upload-queue-content": "styles__upload-queue-content___3MPHo",
  "upload-queue--collapsed": "styles__upload-queue--collapsed___3cchD",
  "upload-queue-list": "styles__upload-queue-list___OVvJm",
  "upload-queue-item--error": "styles__upload-queue-item--error___2sSeV",
  "upload-queue-item--done": "styles__upload-queue-item--done___2PSJI",
  "item-file": "styles__item-file___1kfDn",
  "item-status": "styles__item-status___3FNcY",
  "spin": "styles__spin___3GZIp",
  "shake": "styles__shake___u1Pks"
};
import { withStyles } from "cozy-ui/transpiled/react/styles";
var FileLinearProgress = withStyles(function (theme) {
  return {
    root: {
      borderRadius: theme.shape.borderRadius
    },
    colorPrimary: {
      backgroundColor: theme.palette.background.default
    },
    barColorPrimary: {
      backgroundColor: 'var(--emerald)'
    }
  };
})(LinearProgress);

var FileUploadProgress = function FileUploadProgress(_ref) {
  var progressProps = _ref.progress;

  var _useState = useState(progressProps),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  useIntervalWhen(function () {
    setProgress(progressProps);
  }, 1000, true, true);
  return /*#__PURE__*/React.createElement("div", {
    className: styles['upload-queue__upload-progress']
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-flex-grow-1 u-pr-1"
  }, /*#__PURE__*/React.createElement(FileLinearProgress, {
    variant: "determinate",
    value: progress.loaded / progress.total * 100
  })), /*#__PURE__*/React.createElement("div", {
    className: "u-flex-shrink"
  }, progress.remainingTime ? /*#__PURE__*/React.createElement(RemainingTime, {
    durationInSec: progress.remainingTime
  }) : null));
};

export default FileUploadProgress;