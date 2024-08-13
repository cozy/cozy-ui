import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Intents } from 'cozy-interapp';
import { withClient } from 'cozy-client';
import Spinner from "cozy-ui/transpiled/react/Spinner";
var styles = {
  "intentContainer": "styles__intentContainer___gZbMl",
  "intentPlaceHolder": "styles__intentPlaceHolder___EWSR1",
  "intentContainer__error": "styles__intentContainer__error___yQ7K8"
};
var DEFAULT_DATA = {
  // TODO remove `closeable` since it is only there for backward compatibility
  // https://mattermost.cozycloud.cc/test-team/pl/t1iagfhqp3n8mqf3nchp6bxsur
  closeable: false,
  exposeIntentFrameRemoval: true
};

var IntentIframe = /*#__PURE__*/function (_React$Component) {
  _inherits(IntentIframe, _React$Component);

  var _super = _createSuper(IntentIframe);

  function IntentIframe() {
    var _this;

    _classCallCheck(this, IntentIframe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "onFrameLoaded", function () {
      var _this$props$iframePro, _this$props$iframePro2;

      _this.setState({
        loading: false
      });

      (_this$props$iframePro = _this.props.iframeProps) === null || _this$props$iframePro === void 0 ? void 0 : (_this$props$iframePro2 = _this$props$iframePro.setIsLoading) === null || _this$props$iframePro2 === void 0 ? void 0 : _this$props$iframePro2.call(_this$props$iframePro, false);
    });

    return _this;
  }

  _createClass(IntentIframe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          action = _this$props.action,
          data = _this$props.data,
          type = _this$props.type,
          onCancel = _this$props.onCancel,
          onError = _this$props.onError,
          onTerminate = _this$props.onTerminate,
          client = _this$props.client;
      console.warn('Be carful to use `withBreakpoints()` and not `useBreakpoints()` in intents. See https://github.com/cozy/cozy-ui/issues/1807');
      var create;

      if (this.props.create) {
        create = this.props.create;
      } else {
        var intents = new Intents({
          client: client
        });
        create = intents.create;
      }

      this.setState({
        loading: true
      });
      create(action, type, _objectSpread(_objectSpread({}, DEFAULT_DATA), data)).start(this.intentViewer, this.onFrameLoaded, this.props.onHideCross, this.props.onShowCross).then(function (result) {
        // eslint-disable-next-line promise/always-return
        result ? onTerminate && onTerminate(result) : onCancel();
      }).catch(function (error) {
        var _this2$props$iframePr, _this2$props$iframePr2;

        onError === null || onError === void 0 ? void 0 : onError(error);

        _this2.setState({
          error: error,
          loading: false
        });

        (_this2$props$iframePr = _this2.props.iframeProps) === null || _this2$props$iframePr === void 0 ? void 0 : (_this2$props$iframePr2 = _this2$props$iframePr.setIsLoading) === null || _this2$props$iframePr2 === void 0 ? void 0 : _this2$props$iframePr2.call(_this2$props$iframePr, false);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var iframeProps = this.props.iframeProps;
      var _this$state = this.state,
          error = _this$state.error,
          loading = _this$state.loading;
      return /*#__PURE__*/React.createElement("div", _extends({
        ref: function ref(intentViewer) {
          return _this3.intentViewer = intentViewer;
        },
        className: styles.intentContainer,
        "aria-busy": loading
      }, get(iframeProps, 'wrapperProps')), loading && /*#__PURE__*/React.createElement(Spinner, _extends({
        size: "xxlarge"
      }, get(iframeProps, 'spinnerProps'))), error && /*#__PURE__*/React.createElement("div", {
        className: styles.intentContainer__error
      }, error.message));
    }
  }]);

  return IntentIframe;
}(React.Component);

export var iframeProps = PropTypes.shape({
  wrapperProps: PropTypes.object,
  spinnerProps: PropTypes.object,
  setIsLoading: PropTypes.func
});
IntentIframe.propTypes = {
  action: PropTypes.string.isRequired,
  create: PropTypes.func,
  type: PropTypes.string.isRequired,
  data: PropTypes.object,
  onCancel: PropTypes.func,
  onError: PropTypes.func,
  onTerminate: PropTypes.func.isRequired,
  iframeProps: iframeProps,
  onHideCross: PropTypes.func,
  onShowCross: PropTypes.func
};
IntentIframe.defaultProps = {
  data: {}
};
export default withClient(IntentIframe);