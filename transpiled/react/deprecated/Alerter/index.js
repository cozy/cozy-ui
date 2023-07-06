import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from "cozy-ui/transpiled/react/Portal";
import Alert from "cozy-ui/transpiled/react/deprecated/Alerter/Alert";
var MINIMUM_ALERT_DURATION = 2000;
var currentId = 0;

var createStore = function createStore() {
  var state = [];
  var listeners = [];

  var emit = function emit() {
    listeners.forEach(function (listener) {
      return listener(state);
    });
  };

  var addNotification = function addNotification(notification) {
    notification.id = currentId++;
    state = [].concat(_toConsumableArray(state), [notification]);
    emit();
    return notification;
  };

  var removeNotification = function removeNotification(notification) {
    var id = notification.id;
    var idx = state.findIndex(function (n) {
      return n.id === id;
    });

    if (idx === -1) {
      return;
    }

    var removed = state[idx];
    state = [].concat(_toConsumableArray(state.slice(0, idx)), _toConsumableArray(state.slice(idx + 1)));
    emit();
    return removed;
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);
  };

  var reset = function reset() {
    state = [];
    emit();
  };

  return {
    addNotification: addNotification,
    removeNotification: removeNotification,
    subscribe: subscribe,
    reset: reset
  };
};

var store = createStore();

var Alerter = /*#__PURE__*/function (_Component) {
  _inherits(Alerter, _Component);

  var _super = _createSuper(Alerter);

  function Alerter() {
    var _this;

    _classCallCheck(this, Alerter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      notifications: []
    });

    _defineProperty(_assertThisInitialized(_this), "onStoreEvent", function (newNotifications) {
      _this.setState({
        notifications: newNotifications
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (id) {
      store.removeNotification(id);
    });

    return _this;
  }

  _createClass(Alerter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mounted: true
      });
      store.subscribe(this.onStoreEvent);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          t = _this$props.t,
          into = _this$props.into;
      var notifications = this.state.notifications;
      return /*#__PURE__*/React.createElement(Portal, {
        into: into
      }, notifications.map(function (notif) {
        return /*#__PURE__*/React.createElement(Alert, {
          type: notif.type,
          key: notif.id,
          message: t ? t(notif.msg, notif.options) : notif.msg,
          onClose: function onClose() {
            return _this2.handleClose(notif);
          },
          buttonText: notif.options && notif.options.buttonText,
          buttonAction: notif.options && notif.options.buttonAction,
          duration: notif.options && notif.options.duration,
          minDuration: MINIMUM_ALERT_DURATION
        });
      }));
    }
  }], [{
    key: "reset",
    value: function reset() {
      store.reset();
    }
    /**
     * @param {string} message
     * @param {object} options
     * @public
     * @static
     */

  }, {
    key: "info",
    value: function info(msg, options) {
      return store.addNotification({
        type: 'info',
        msg: msg,
        options: options
      });
    }
    /**
     * @param {string} msg
     * @param {object} options
     * @public
     * @static
     */

  }, {
    key: "success",
    value: function success(msg, options) {
      return store.addNotification({
        type: 'success',
        msg: msg,
        options: options
      });
    }
    /**
     * @param {string} msg
     * @param {object} options
     * @public
     * @static
     */

  }, {
    key: "error",
    value: function error(msg, options) {
      return store.addNotification({
        type: 'error',
        msg: msg,
        options: options
      });
    }
    /**
     * Remove notification by id
     */

  }, {
    key: "removeNotification",
    value: function removeNotification(notification) {
      return store.removeNotification(notification);
    }
  }]);

  return Alerter;
}(Component);

Alerter.propTypes = {
  /** A translation function. If ommited, messages are left intact */
  t: PropTypes.func,

  /** A selector to target a DOM node where alerts will be rendered */
  into: PropTypes.string
};
Alerter.defaultProps = {
  into: 'body'
};
export default Alerter;