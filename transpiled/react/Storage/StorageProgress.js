import React from 'react';
import { useInstanceInfo } from 'cozy-client';
import { makeDiskInfos } from 'cozy-client/dist/models/instance';
import { locales } from "cozy-ui/transpiled/react/Storage/locales";
import Icon from "cozy-ui/transpiled/react/Icon";
import CloudIcon from "cozy-ui/transpiled/react/Icons/Cloud";
import { LinearProgress } from "cozy-ui/transpiled/react/Progress";
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
/**
 * Show remaining disk space with a progress bar
 */

var StorageProgress = function StorageProgress() {
  var _diskUsage$data, _diskUsage$data2;

  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useInstanceInfo = useInstanceInfo(),
      diskUsage = _useInstanceInfo.diskUsage;

  var _makeDiskInfos = makeDiskInfos((_diskUsage$data = diskUsage.data) === null || _diskUsage$data === void 0 ? void 0 : _diskUsage$data.used, (_diskUsage$data2 = diskUsage.data) === null || _diskUsage$data2 === void 0 ? void 0 : _diskUsage$data2.quota),
      humanDiskQuota = _makeDiskInfos.humanDiskQuota,
      humanDiskUsage = _makeDiskInfos.humanDiskUsage,
      percentUsage = _makeDiskInfos.percentUsage;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "u-flex u-flex-items-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    className: "u-mr-half",
    icon: CloudIcon,
    size: 24,
    color: "var(--iconTextColor)"
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "caption"
  }, t('Storage.title'))), /*#__PURE__*/React.createElement(LinearProgress, {
    className: "u-mv-half",
    variant: "determinate",
    value: parseInt(percentUsage)
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "caption"
  }, t('Storage.availability', {
    smart_count: (humanDiskQuota - humanDiskUsage).toFixed(2)
  })));
};

export default StorageProgress;