import _defineProperty from "@babel/runtime/helpers/defineProperty";
import cx from 'classnames';
import React from 'react';
import { splitFilename } from 'cozy-client/dist/models/file';
import FileUploadProgress from "cozy-ui/transpiled/react/UploadQueue/FileUploadProgress";
import Pending from "cozy-ui/transpiled/react/UploadQueue/Pending";
import { uploadStatus } from "cozy-ui/transpiled/react/UploadQueue/index";
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
import { useStatusIcon } from "cozy-ui/transpiled/react/UploadQueue/useStatusIcon";
import Icon from "cozy-ui/transpiled/react/Icon";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import Typography from "cozy-ui/transpiled/react/Typography";
import { Img } from "cozy-ui/transpiled/react/deprecated/Media";
import { translate } from "cozy-ui/transpiled/react/providers/I18n";

var Item = function Item(_ref) {
  var _cx;

  var file = _ref.file,
      status = _ref.status,
      isDirectory = _ref.isDirectory,
      progress = _ref.progress,
      getMimeTypeIcon = _ref.getMimeTypeIcon;
  var CANCEL = uploadStatus.CANCEL,
      LOADING = uploadStatus.LOADING,
      DONE_STATUSES = uploadStatus.DONE_STATUSES,
      ERROR_STATUSES = uploadStatus.ERROR_STATUSES,
      PENDING = uploadStatus.PENDING;

  var _splitFilename = splitFilename(file),
      filename = _splitFilename.filename,
      extension = _splitFilename.extension;

  var done = false;
  var error = false;
  /**
   * Status came from the Upload Queue, but sometimes we're using
   * manual upload without using the Upload Queue system but we're still
   * using the UI component. When this is the case, the file handles on
   * his own its status.
   */

  var statusToUse = file.status ? file.status : status;

  if (statusToUse !== LOADING && statusToUse !== CANCEL) {
    if (ERROR_STATUSES.includes(statusToUse)) {
      error = true;
    } else if (DONE_STATUSES.includes(statusToUse)) {
      done = true;
    }
  }

  var statusIcon = useStatusIcon(statusToUse, progress);
  var isPending = statusToUse !== LOADING && statusToUse !== CANCEL && !ERROR_STATUSES.includes(statusToUse) && !DONE_STATUSES.includes(statusToUse) && statusToUse === PENDING;
  return /*#__PURE__*/React.createElement(ListItem, {
    divider: true,
    "data-testid": "upload-queue-item",
    className: cx((_cx = {}, _defineProperty(_cx, styles['upload-queue-item--done'], done), _defineProperty(_cx, styles['upload-queue-item--error'], error), _cx))
  }, getMimeTypeIcon ? /*#__PURE__*/React.createElement(ListItemIcon, {
    className: "u-ta-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: getMimeTypeIcon(isDirectory, file.name, file.type),
    size: 32,
    className: "u-mr-1"
  })) : null, /*#__PURE__*/React.createElement(ListItemText, {
    disableTypography: true,
    primary: /*#__PURE__*/React.createElement("div", {
      "data-testid": "upload-queue-item-name",
      className: "u-ellipsis"
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "body1",
      className: "u-ellipsis"
    }, filename, extension && /*#__PURE__*/React.createElement(Typography, {
      component: "span",
      variant: "body1",
      color: "textSecondary",
      className: "u-dib"
    }, extension))),
    secondary: progress ? /*#__PURE__*/React.createElement(FileUploadProgress, {
      progress: progress
    }) : null
  }), statusIcon && /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Img, null, statusIcon)), isPending && /*#__PURE__*/React.createElement(Pending, null));
};

export default translate()(Item);