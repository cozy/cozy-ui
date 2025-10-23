import cx from 'classnames';
import React from 'react';
import { numberOfReferencesForPluralForm } from "cozy-ui/transpiled/react/UploadQueue/helpers";
import { formatRemainingTime } from "cozy-ui/transpiled/react/UploadQueue/index";
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
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";

var RemainingTime = function RemainingTime(_ref) {
  var durationInSec = _ref.durationInSec;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement(Typography, {
    variant: "caption",
    className: cx(styles['upload-queue__progress-caption'], 'u-ellipsis')
  }, t('item.remainingTime', {
    time: formatRemainingTime(durationInSec),
    smart_count: numberOfReferencesForPluralForm(durationInSec)
  }));
};

export default RemainingTime;