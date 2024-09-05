import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withClient } from 'cozy-client';
var styles = {
  "c-loading-placeholder": "styles__c-loading-placeholder___3L6Gz",
  "placeHolderShimmer": "styles__placeHolderShimmer___3Rei_",
  "c-app-icon": "styles__c-app-icon___2_O40",
  "c-app-icon-default": "styles__c-app-icon-default___3CEmt"
};
import { isShortcutFile } from "cozy-ui/transpiled/react/AppSections/helpers";
import Icon, { iconPropType } from "cozy-ui/transpiled/react/Icon";
import CubeIcon from "cozy-ui/transpiled/react/Icons/Cube";
import { ShortcutTile } from "cozy-ui/transpiled/react/ShortcutTile";
import palette from "cozy-ui/transpiled/react/palette";
import { AppDoctype } from "cozy-ui/transpiled/react/proptypes";
var DONE = 'done';
var ERRORED = 'errored';
var FETCHING = 'fetching';
export var AppIcon = /*#__PURE__*/function (_Component) {
  _inherits(AppIcon, _Component);

  var _super = _createSuper(AppIcon);

  function AppIcon(props, context) {
    var _this;

    _classCallCheck(this, AppIcon);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "state", {
      error: null,
      icon: null,
      status: _this.props.client ? FETCHING : ERRORED
    });

    _this.isUnmounting = false;
    _this.handleError = _this.handleError.bind(_assertThisInitialized(_this));
    _this.fetchIcon = _this.fetchIcon.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AppIcon, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isUnmounting = true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isUnmounting = false;
      this.load();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.fetchIcon !== prevProps.fetchIcon) {
        this.load();
      }
    }
  }, {
    key: "fetchIcon",
    value: function fetchIcon() {
      var _this$props = this.props,
          app = _this$props.app,
          type = _this$props.type,
          priority = _this$props.priority,
          client = _this$props.client; // Shortcut files used in cozy-store have their own icon in their doctype metadata

      if (isShortcutFile(app)) return;
      return client.getStackClient().getIconURL({
        type: type,
        slug: app.slug || app,
        appData: app,
        priority: priority
      });
    }
  }, {
    key: "handleError",
    value: function handleError() {
      this.setState({
        status: ERRORED
      });
    }
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _this$props2, app, fetchIcon, onReady, client, loadFn, loadedUrl, loadError, domain, secure, cozyURL;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props2 = this.props, app = _this$props2.app, fetchIcon = _this$props2.fetchIcon, onReady = _this$props2.onReady, client = _this$props2.client;
                loadFn = fetchIcon || this.fetchIcon;
                _context.prev = 2;

                if (client) {
                  cozyURL = new URL(client.getStackClient().uri);
                  domain = cozyURL.host;
                  secure = cozyURL.protocol === 'https:';
                }

                _context.next = 6;
                return loadFn(app, domain, secure);

              case 6:
                loadedUrl = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                loadError = _context.t0;

              case 12:
                if (!this.isUnmounting) {
                  this.setState({
                    error: loadError,
                    icon: loadedUrl,
                    status: loadError ? ERRORED : DONE
                  });

                  if (typeof onReady === 'function') {
                    onReady();
                  }
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          alt = _this$props3.alt,
          className = _this$props3.className,
          fallbackIcon = _this$props3.fallbackIcon;
      var _this$state = this.state,
          icon = _this$state.icon,
          status = _this$state.status;

      if (isShortcutFile(this.props.app)) {
        return /*#__PURE__*/React.createElement(ShortcutTile, {
          file: this.props.app
        });
      }

      switch (status) {
        case FETCHING:
          return /*#__PURE__*/React.createElement("div", {
            role: "progressbar",
            className: cx(styles['c-loading-placeholder'], styles['c-app-icon'], className)
          });

        case DONE:
          return /*#__PURE__*/React.createElement("img", {
            alt: alt,
            className: cx(styles['c-app-icon'], className),
            onError: this.handleError,
            ref: this.props.iconRef,
            src: icon
          });

        case ERRORED:
        default:
          return /*#__PURE__*/React.createElement(Icon, {
            className: cx(styles['c-app-icon'], styles['c-app-icon-default'], className),
            height: "100%",
            icon: fallbackIcon || CubeIcon,
            width: "100%",
            color: palette['coolGrey'],
            iconRef: this.props.iconRef
          });
      }
    }
  }]);

  return AppIcon;
}(Component);
AppIcon.propTypes = {
  alt: PropTypes.string,

  /** Required if fetchIcon is not provided */
  app: PropTypes.oneOfType([AppDoctype, PropTypes.string]),

  /** Icon to fallback on error (optional), default cube icon */
  fallbackIcon: iconPropType,

  /** Custom implementation of how to fetch icon */
  fetchIcon: PropTypes.func,
  client: PropTypes.object.isRequired,
  className: PropTypes.string,
  onReady: PropTypes.func,

  /** Type of application */
  type: PropTypes.oneOf(['app', 'konnector']),

  /** First source to fetch the icon. If nothing is found, there is a second try with the other source */
  priority: PropTypes.oneOf(['stack', 'registry'])
};
AppIcon.defaultProps = {
  type: 'app',
  priority: 'stack'
};
export default withClient(AppIcon);