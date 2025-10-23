import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import LinearProgress from '@material-ui/core/LinearProgress';
import cx from 'classnames';
import React, { Component } from 'react';
import Item from "cozy-ui/transpiled/react/UploadQueue/Item";
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
  header: "Import de %{smart_count} fichier dans votre %{app} |||| Import de %{smart_count} fichiers dans votre %{app}",
  header_mobile: "Import de %{done} sur %{smart_count}",
  header_done: "%{done} sur %{smart_count} \xE9l\xE9ment import\xE9 |||| %{done} sur %{smart_count} \xE9l\xE9ments import\xE9s",
  close: "Fermer",
  item: {
    pending: "En attente",
    remainingTime: "%{time} restante |||| %{time} restantes"
  }
};
var localeRu = {
  header: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 %{smart_count} \u0444\u043E\u0442\u043E \u0432 %{app} |||| \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 %{smart_count} \u0444\u043E\u0442\u043E \u0432 %{app}",
  header_mobile: "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E %{done} \u0438\u0437 %{smart_count}",
  header_done: "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E %{done} \u0438\u0437 %{smart_count}",
  close: "\u0437\u0430\u043A\u0440\u044B\u0442\u044C",
  item: {
    pending: "\u0412 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438",
    remainingTime: "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C %{time}"
  }
};
var localeVi = {
  header: "\u0110ang t\u1EA3i l\xEAn %{smart_count} \u1EA3nh v\xE0o %{app} |||| \u0110ang t\u1EA3i l\xEAn %{smart_count} \u1EA3nh v\xE0o %{app}",
  header_mobile: "\u0110\xE3 t\u1EA3i l\xEAn %{done} trong s\u1ED1 %{smart_count}",
  header_done: "\u0110\xE3 t\u1EA3i l\xEAn th\xE0nh c\xF4ng %{done} trong s\u1ED1 %{smart_count}",
  close: "\u0111\xF3ng",
  item: {
    pending: "\u0110ang ch\u1EDD",
    remainingTime: "C\xF2n l\u1EA1i %{time}"
  }
};
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
import List from "cozy-ui/transpiled/react/List";
import Typography from "cozy-ui/transpiled/react/Typography";
import Button from "cozy-ui/transpiled/react/deprecated/Button";
import { formatLocallyDistanceToNow } from "cozy-ui/transpiled/react/providers/I18n/format";
import withLocales from "cozy-ui/transpiled/react/providers/I18n/withLocales";
import { withStyles } from "cozy-ui/transpiled/react/styles";
var locales = {
  en: localeEn,
  es: localeEs,
  fr: localeFr,
  ru: localeRu,
  vi: localeVi
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
export var formatRemainingTime = function formatRemainingTime(durationInSec) {
  var later = Date.now() + durationInSec * 1000;
  return formatLocallyDistanceToNow(later);
};
var QueueLinearProgress = withStyles({
  root: {
    height: '2px'
  }
})(LinearProgress);
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
      var _cx;

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
        className: cx(styles['upload-queue'], (_cx = {}, _defineProperty(_cx, styles['upload-queue--visible'], queue.length !== 0), _defineProperty(_cx, styles['upload-queue--collapsed'], collapsed), _defineProperty(_cx, styles['upload-queue--popover'], popover), _cx))
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