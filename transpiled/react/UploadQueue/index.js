import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, useState } from 'react';
import cx from 'classnames';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useIntervalWhen } from 'rooks';
import { splitFilename } from 'cozy-client/dist/models/file';
import { withStyles } from "cozy-ui/transpiled/react/styles";
import CrossIcon from "cozy-ui/transpiled/react/Icons/Cross";
import WarningIcon from "cozy-ui/transpiled/react/Icons/Warning";
import CheckIcon from "cozy-ui/transpiled/react/Icons/Check";
import { translate, useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import withLocales from "cozy-ui/transpiled/react/providers/I18n/withLocales";
import Icon from "cozy-ui/transpiled/react/Icon";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import Typography from "cozy-ui/transpiled/react/Typography";
import List from "cozy-ui/transpiled/react/List";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import { Img } from "cozy-ui/transpiled/react/deprecated/Media";
import Button from "cozy-ui/transpiled/react/deprecated/Button";
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
var localeEn = {
  header: "Uploading %{smart_count} photo to %{app} |||| Uploading %{smart_count} photos to %{app}",
  header_mobile: "Uploading %{done} of %{smart_count}",
  header_done: "Uploaded %{done} out of %{smart_count} successfully",
  close: "close",
  item: {
    pending: "Pending",
    remainingTime: "%{time} remaining"
  }
};
var localeEs = {
  header: "Subiendo %{smart_count} foto a %{app} |||| Subiendo %{smart_count} fotos a %{app}",
  header_mobile: "Subiendo %{done} de %{smart_count}",
  header_done: "Subidos %{done} de %{smart_count} con \xE9xito",
  close: "cerrar",
  item: {
    pending: "Pendiente",
    remainingTime: "%{time} restante |||| %{time} restantes"
  }
};
var localeFr = {
  header: "Import de %{smart_count} fichier dans votre Cozy |||| Import de %{smart_count} fichiers dans votre Cozy",
  header_mobile: "Import de %{done} sur %{smart_count}",
  header_done: "%{done} sur %{smart_count} \xE9l\xE9ment import\xE9 |||| %{done} sur %{smart_count} \xE9l\xE9ments import\xE9s",
  close: "Fermer",
  item: {
    pending: "En attente",
    remainingTime: "%{time} restante |||| %{time} restantes"
  }
};
import { formatLocallyDistanceToNow } from "cozy-ui/transpiled/react/providers/I18n/format";
var locales = {
  en: localeEn,
  es: localeEs,
  fr: localeFr
};
var CANCEL = 'cancel';
var PENDING = 'pending';
var LOADING = 'loading';
var CREATED = 'created';
var UPDATED = 'updated';
var FAILED = 'failed';
var CONFLICT = 'conflict';
var QUOTA = 'quota';
var NETWORK = 'network';
var DONE_STATUSES = [CREATED, UPDATED];
var ERROR_STATUSES = [CONFLICT, NETWORK, QUOTA, FAILED];
export var uploadStatus = {
  CANCEL: CANCEL,
  PENDING: PENDING,
  LOADING: LOADING,
  CREATED: CREATED,
  UPDATED: UPDATED,
  FAILED: FAILED,
  CONFLICT: CONFLICT,
  QUOTA: QUOTA,
  NETWORK: NETWORK,
  DONE_STATUSES: DONE_STATUSES,
  ERROR_STATUSES: ERROR_STATUSES
};
var Pending = translate()(function (props) {
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "primary"
  }, props.t('item.pending'));
});
export var formatRemainingTime = function formatRemainingTime(durationInSec) {
  var later = Date.now() + durationInSec * 1000;
  return formatLocallyDistanceToNow(later);
}; // https://date-fns.org/v2.28.0/docs/formatDistanceToNow

var numberOfReferencesForPluralForm = function numberOfReferencesForPluralForm(durationInSec) {
  return durationInSec < 90 || durationInSec > 2670 && durationInSec < 5370 ? 1 : 2;
};

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
var QueueLinearProgress = withStyles({
  root: {
    height: '2px'
  }
})(LinearProgress);

var FileUploadProgress = function FileUploadProgress(_ref2) {
  var progressProps = _ref2.progress;

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

var Item = translate()(function (_ref3) {
  var _cx;

  var file = _ref3.file,
      status = _ref3.status,
      isDirectory = _ref3.isDirectory,
      progress = _ref3.progress,
      getMimeTypeIcon = _ref3.getMimeTypeIcon;
  var CANCEL = uploadStatus.CANCEL,
      LOADING = uploadStatus.LOADING,
      DONE_STATUSES = uploadStatus.DONE_STATUSES,
      ERROR_STATUSES = uploadStatus.ERROR_STATUSES;

  var _splitFilename = splitFilename(file),
      filename = _splitFilename.filename,
      extension = _splitFilename.extension;

  var statusIcon;
  var done = false;
  var error = false;
  /**
   * Status came from the Upload Queue, but sometimes we're using
   * manual upload without using the Upload Queue system but we're still
   * using the UI component. When this is the case, the file handles on
   * his own its status.
   */

  var statusToUse = file.status ? file.status : status;

  if (statusToUse === LOADING) {
    statusIcon = !progress ? /*#__PURE__*/React.createElement(Spinner, {
      className: "u-ml-half",
      color: "var(--primaryColor)"
    }) : null;
  } else if (statusToUse === CANCEL) {
    statusIcon = /*#__PURE__*/React.createElement(Icon, {
      className: "u-ml-half",
      icon: CrossIcon,
      color: "var(--errorColor)"
    });
  } else if (ERROR_STATUSES.includes(statusToUse)) {
    error = true;
    statusIcon = /*#__PURE__*/React.createElement(Icon, {
      className: "u-ml-half",
      icon: WarningIcon,
      color: "var(--errorColor)"
    });
  } else if (DONE_STATUSES.includes(statusToUse)) {
    done = true;
    statusIcon = /*#__PURE__*/React.createElement(Icon, {
      className: "u-ml-half",
      icon: CheckIcon,
      color: "var(--successColor)"
    });
  } else if (statusToUse === PENDING) {
    statusIcon = /*#__PURE__*/React.createElement(Pending, null);
  }

  return /*#__PURE__*/React.createElement(ListItem, {
    divider: true,
    "data-testid": "upload-queue-item",
    className: cx('u-ph-1', (_cx = {}, _defineProperty(_cx, styles['upload-queue-item--done'], done), _defineProperty(_cx, styles['upload-queue-item--error'], error), _cx))
  }, getMimeTypeIcon ? /*#__PURE__*/React.createElement(ListItemIcon, {
    className: "u-ta-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: getMimeTypeIcon(isDirectory, file.name, file.type),
    size: 32,
    className: "u-mr-1"
  })) : null, /*#__PURE__*/React.createElement(ListItemText, {
    disableTypography: true
  }, /*#__PURE__*/React.createElement("div", {
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
  }, extension))), progress ? /*#__PURE__*/React.createElement(FileUploadProgress, {
    progress: progress
  }) : null), /*#__PURE__*/React.createElement(Img, {
    className: styles['item-status']
  }, statusIcon));
});
export var UploadQueue = /*#__PURE__*/function (_Component) {
  _inherits(UploadQueue, _Component);

  var _super = _createSuper(UploadQueue);

  function UploadQueue() {
    var _this;

    _classCallCheck(this, UploadQueue);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      collapsed: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCollapsed", function () {
      _this.setState(function (state) {
        return {
          collapsed: !state.collapsed
        };
      });
    });

    return _this;
  }

  _createClass(UploadQueue, [{
    key: "render",
    value: function render() {
      var _cx2;

      var _this$props = this.props,
          t = _this$props.t,
          queue = _this$props.queue,
          doneCount = _this$props.doneCount,
          successCount = _this$props.successCount,
          purgeQueue = _this$props.purgeQueue,
          popover = _this$props.popover,
          getMimeTypeIcon = _this$props.getMimeTypeIcon,
          app = _this$props.app;
      var collapsed = this.state.collapsed;
      return /*#__PURE__*/React.createElement("div", {
        "data-testid": "upload-queue",
        className: cx(styles['upload-queue'], (_cx2 = {}, _defineProperty(_cx2, styles['upload-queue--visible'], queue.length !== 0), _defineProperty(_cx2, styles['upload-queue--collapsed'], collapsed), _defineProperty(_cx2, styles['upload-queue--popover'], popover), _cx2))
      }, /*#__PURE__*/React.createElement("h4", {
        className: styles['upload-queue-header'],
        onDoubleClick: this.toggleCollapsed
      }, doneCount < queue.length && /*#__PURE__*/React.createElement("div", {
        className: styles['upload-queue-header-inner']
      }, /*#__PURE__*/React.createElement(Typography, {
        variant: "h6",
        className: "u-hide--mob"
      }, t('header', {
        smart_count: queue.length,
        app: app
      })), /*#__PURE__*/React.createElement(Typography, {
        color: "primary",
        variant: "h6",
        className: "u-hide--tablet"
      }, t('header_mobile', {
        done: doneCount,
        smart_count: queue.length
      }))), doneCount >= queue.length && /*#__PURE__*/React.createElement("div", {
        "data-testid": "upload-queue-success",
        className: styles['upload-queue-header-inner']
      }, /*#__PURE__*/React.createElement(Typography, {
        variant: "h6"
      }, t('header_done', {
        done: successCount,
        smart_count: queue.length
      })), /*#__PURE__*/React.createElement(Button, {
        subtle: true,
        className: "u-mv-0",
        label: t('close'),
        onClick: purgeQueue
      }))), /*#__PURE__*/React.createElement(QueueLinearProgress, {
        variant: "determinate",
        value: doneCount / queue.length * 100
      }), /*#__PURE__*/React.createElement("div", {
        className: styles['upload-queue-content']
      }, /*#__PURE__*/React.createElement(List, {
        className: "u-pv-0"
      }, queue.map(function (item, index) {
        return /*#__PURE__*/React.createElement(Item, _extends({
          key: index
        }, item, {
          getMimeTypeIcon: getMimeTypeIcon
        }));
      }))));
    }
  }]);

  return UploadQueue;
}(Component);
UploadQueue.defaultProps = {
  /**
   * @type {Boolean}
   * Displays the queue in a popover at the bottom right of the screen
   * Use false to disable
   */
  popover: true
};
export default withLocales(locales)(UploadQueue);