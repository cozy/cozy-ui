import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isMobileApp } from 'cozy-device-helper';
/**
 * Customized function to get dimensions and position for a centered
 * popup window
 * @param  {string|number} w
 * @param  {string|number} h
 * @return {{w, h, top, left}}       Popup window
 */
// source https://stackoverflow.com/a/16861050

export function popupCenter(w, h) {
  // eslint-disable-next-line no-redeclare

  /* global screen */
  // Fixes dual-screen position
  //                      Most browsers      Firefox
  var dualScreenLeft = window.screenLeft || screen.left;
  var dualScreenTop = window.screenTop || screen.top;
  var width = window.innerWidth || document.documentElement.clientWidth || screen.width;
  var height = window.innerHeight || document.documentElement.clientHeight || screen.height;
  var left = width / 2 - w / 2 + dualScreenLeft;
  var top = height / 2 - h / 2 + dualScreenTop;
  return {
    w: w,
    h: h,
    top: top,
    left: left
  };
}
/**
 * Renders a popup and listen to popup events
 */

export var Popup = /*#__PURE__*/function (_PureComponent) {
  _inherits(Popup, _PureComponent);

  var _super = _createSuper(Popup);

  function Popup(props, context) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _super.call(this, props, context);
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    _this.handleMessage = _this.handleMessage.bind(_assertThisInitialized(_this));
    _this.handleLoadStart = _this.handleLoadStart.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.showPopup();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.killPopup();
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      // Listen here for message FROM popup
      window.addEventListener('message', this.handleMessage);

      if (isMobileApp()) {
        this.popup.addEventListener('loadstart', this.handleLoadStart);
        this.popup.addEventListener('exit', this.handleClose);
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      window.removeEventListener('message', this.handleMessage); // rest of instructions only if popup is still opened

      if (this.popup.closed) return;

      if (isMobileApp()) {
        this.popup.removeEventListener('loadstart', this.handleLoadStart);
        this.popup.removeEventListener('exit', this.handleClose);
      }
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(messageEvent) {
      var onMessage = this.props.onMessage;
      var isFromPopup = this.popup === messageEvent.source;
      if (isFromPopup && typeof onMessage === 'function') onMessage(messageEvent);
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.killPopup();
      var onClose = this.props.onClose;
      if (typeof onClose === 'function') onClose(this.popup);
    }
  }, {
    key: "showPopup",
    value: function showPopup() {
      var _this$props = this.props,
          initialUrl = _this$props.initialUrl,
          height = _this$props.height,
          width = _this$props.width,
          title = _this$props.title;

      var _popupCenter = popupCenter(width, height),
          w = _popupCenter.w,
          h = _popupCenter.h,
          top = _popupCenter.top,
          left = _popupCenter.left;
      /**
       * ATM we also use window.open on Native App in order to open
       * InAppBrowser. But some provider (Google for instance) will
       * block us. We need to use a SafariViewController or Chrome Custom Tab.
       * So
       */


      this.popup = window.open(initialUrl, title, "scrollbars=yes, width=".concat(w, ", height=").concat(h, ", top=").concat(top, ", left=").concat(left)); // Puts focus on the newWindow

      if (this.popup.focus) {
        this.popup.focus();
      }

      this.addListeners();
      this.startMonitoringClosing();
    }
  }, {
    key: "killPopup",
    value: function killPopup() {
      this.removeListeners();
      this.stopMonitoringClosing();
      if (!this.popup.closed) this.popup.close();
    }
  }, {
    key: "monitorClosing",
    value: function monitorClosing() {
      if (this.popup.closed) {
        this.stopMonitoringClosing();
        return this.handleClose();
      }
    }
    /**
     * Check if window is closing every 500ms
     * @param  {Window} window
     */

  }, {
    key: "startMonitoringClosing",
    value: function startMonitoringClosing() {
      var _this2 = this;

      this.checkClosedInterval = setInterval(function () {
        return _this2.monitorClosing();
      }, 500);
    }
  }, {
    key: "stopMonitoringClosing",
    value: function stopMonitoringClosing() {
      clearInterval(this.checkClosedInterval);
    }
  }, {
    key: "handleLoadStart",
    value: function handleLoadStart(event) {
      var url = event.url;
      var onMobileUrlChange = this.props.onMobileUrlChange;
      if (typeof onMobileUrlChange === 'function') onMobileUrlChange(new URL(url));
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Popup;
}(PureComponent);
Popup.propTypes = {
  // Dimensions
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  initialUrl: PropTypes.string.isRequired,
  // Callbacks

  /**
   * Close handler. Called after popup closing.
   */
  onClose: PropTypes.func,

  /**
   * Handler called when a message is received from `postMessage` interface.
   * @param {MessageEvent} messageEvent Received MessageEvent object.
   */
  onMessage: PropTypes.func,

  /**
   * Handler used on mobile device to detect url changes
   * @param {URL} url URL object.
   */
  onMobileUrlChange: PropTypes.func
};
Popup.defaultProps = {
  title: ''
};
export default Popup;