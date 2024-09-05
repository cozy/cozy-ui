import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import _regeneratorRuntime from "@babel/runtime/regenerator";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import PropTypes from 'prop-types';
import React from 'react';
import { withClient } from 'cozy-client';
import { checkApp, startApp, isMobileApp, isMobile, openDeeplinkOrRedirect, isAndroid, isFlagshipApp } from 'cozy-device-helper';
import { WebviewContext } from 'cozy-intent';
import logger from 'cozy-logger';
import expiringMemoize from "cozy-ui/transpiled/react/AppLinker/expiringMemoize";
import { generateUniversalLink, generateWebLink, getUniversalLinkDomain } from "cozy-ui/transpiled/react/AppLinker/native";
import { NATIVE_APP_INFOS } from "cozy-ui/transpiled/react/AppLinker/native.config";
var expirationDelay = 10 * 1000;
var memoizedCheckApp = expiringMemoize(function (appInfo) {
  return checkApp(appInfo).catch(function () {
    return false;
  });
}, expirationDelay, function (appInfo) {
  return appInfo.appId;
});
export var AppLinker = /*#__PURE__*/function (_React$Component) {
  _inherits(AppLinker, _React$Component);

  var _super = _createSuper(AppLinker);

  function AppLinker(props) {
    var _this;

    _classCallCheck(this, AppLinker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      nativeAppIsAvailable: null,
      isFetchingAppInfo: false
    });

    _defineProperty(_assertThisInitialized(_this), "setImgRef", function (img) {
      _this.imgRef = img;

      _this.setState({
        imgRef: _this.imgRef
      });
    });

    _this.imgRef = null;
    return _this;
  }

  _createClass(AppLinker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (isMobileApp()) {
        this.checkAppAvailability();
      }
    }
  }, {
    key: "checkAppAvailability",
    value: function () {
      var _checkAppAvailability = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var slug, appInfo, nativeAppIsAvailable;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                slug = AppLinker.getSlug(this.props);
                appInfo = NATIVE_APP_INFOS[slug];

                if (!appInfo) {
                  _context.next = 9;
                  break;
                }

                _context.t0 = Boolean;
                _context.next = 6;
                return memoizedCheckApp(appInfo);

              case 6:
                _context.t1 = _context.sent;
                nativeAppIsAvailable = (0, _context.t0)(_context.t1);
                this.setState({
                  nativeAppIsAvailable: nativeAppIsAvailable
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkAppAvailability() {
        return _checkAppAvailability.apply(this, arguments);
      }

      return checkAppAvailability;
    }()
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      AppLinker.deprecateSlug(this.props);
      var slug = AppLinker.getSlug(this.props);
      var nativeAppIsAvailable = this.state.nativeAppIsAvailable;
      var appInfo = NATIVE_APP_INFOS[slug];

      var _AppLinker$getOnClick = AppLinker.getOnClickHref(this.props, nativeAppIsAvailable, this.context, this.state.imgRef),
          href = _AppLinker$getOnClick.href,
          onClick = _AppLinker$getOnClick.onClick;

      return children(_objectSpread(_objectSpread({}, appInfo), {}, {
        iconRef: this.setImgRef,
        onClick: onClick,
        href: href
      }));
    }
  }], [{
    key: "getSlug",
    value: function getSlug(props) {
      if (props.app && props.app.slug) {
        return props.app.slug;
      }

      return props.slug;
    }
  }, {
    key: "deprecateSlug",
    value: function deprecateSlug(props) {
      if (props.slug) {
        console.warn("AppLinker's 'slug' prop is deprecated, please use 'app.slug' instead");
      }
    }
  }, {
    key: "getOnClickHref",
    value: function getOnClickHref(props, nativeAppIsAvailable, context, imgRef) {
      var app = props.app,
          client = props.client,
          nativePath = props.nativePath;
      var slug = AppLinker.getSlug(props);
      var href = props.href;
      var onClick = null;
      var usingNativeApp = isMobileApp();
      var appInfo = NATIVE_APP_INFOS[slug];

      if (isFlagshipApp()) {
        var _ref = client ? client.getInstanceOptions() : undefined,
            currentApp = _ref.app;

        if (currentApp === undefined || app.slug !== currentApp.slug) {
          var imgPayload = imgRef && JSON.stringify(_objectSpread({}, imgRef.getBoundingClientRect().toJSON()));
          return {
            onClick: function onClick(event) {
              event.preventDefault();
              context ? context.call('openApp', href, app, imgPayload) : logger.error("Failed to \"openApp(".concat(app, ")\". WebviewService has the following falsy value \"").concat(context, "\" in AppLinker's context."));
            },
            href: '#'
          };
        }
      }

      if (usingNativeApp) {
        if (nativeAppIsAvailable) {
          // If we are on the native app and the other native app is available,
          // we open the native app
          onClick = AppLinker.openNativeFromNative.bind(this, props);
          href = '#';
        } else {
          // If we are on a native app, but the other native app is not available
          // we open the web link, this is done by the href prop. We still
          // have to call the prop callback
          onClick = AppLinker.openWeb.bind(this, props);
        }
      } else if (isMobile() && appInfo) {
        // If we are on the "mobile web version", we try to open the native app
        // if it exists with an universal links. If it fails, we redirect to the web
        // version of the requested app
        // Only on iOS ATM
        if (isAndroid()) {
          onClick = AppLinker.openNativeFromWeb.bind(this, props);
        } else {
          // Since generateUniversalLink can rise an error, let's catch it to not crash
          // all the page.
          try {
            href = generateUniversalLink({
              slug: slug,
              nativePath: nativePath,
              fallbackUrl: href
            });
          } catch (err) {
            console.error(err);
            href = '#';
          }
        }
      }

      return {
        href: href,
        onClick: onClick
      };
    }
  }, {
    key: "openNativeFromWeb",
    value: function openNativeFromWeb(props, ev) {
      var href = props.href,
          nativePath = props.nativePath,
          onAppSwitch = props.onAppSwitch;
      var slug = AppLinker.getSlug(props);
      var appInfo = NATIVE_APP_INFOS[slug];

      if (ev) {
        ev.preventDefault();
      }

      AppLinker.onAppSwitch(onAppSwitch);
      openDeeplinkOrRedirect(appInfo.uri + (nativePath === '/' ? '' : nativePath), function () {
        window.location.href = href;
      });
    }
  }, {
    key: "onAppSwitch",
    value: function onAppSwitch(onAppSwitchFn) {
      if (typeof onAppSwitchFn === 'function') {
        onAppSwitchFn();
      }
    }
  }, {
    key: "openNativeFromNative",
    value: function openNativeFromNative(props, ev) {
      var onAppSwitch = props.onAppSwitch;
      var slug = AppLinker.getSlug(props);

      if (ev) {
        ev.preventDefault();
      }

      var appInfo = NATIVE_APP_INFOS[slug];
      AppLinker.onAppSwitch(onAppSwitch);
      startApp(appInfo).catch(function (err) {
        console.error('AppLinker: Could not open native app', err);
      });
    }
  }, {
    key: "openWeb",
    value: function openWeb(props) {
      AppLinker.onAppSwitch(props.onAppSwitch);
    }
  }]);

  return AppLinker;
}(React.Component);

_defineProperty(AppLinker, "contextType", WebviewContext);

AppLinker.defaultProps = {
  nativePath: '/'
};
AppLinker.propTypes = {
  /** DEPRECATED: please use app.slug prop */
  slug: PropTypes.string,

  /*
  Full web url : Used by default on desktop browser
  Used as a fallback_uri on mobile web
  */
  href: PropTypes.string,

  /*
    Path used for "native link"
  */
  nativePath: PropTypes.string,
  onAppSwitch: PropTypes.func,
  app: PropTypes.shape({
    // Slug of the app : drive / banks ...
    slug: PropTypes.string.isRequired,
    // Information about mobile native app
    mobile: PropTypes.shape({
      schema: PropTypes.string,
      id_playstore: PropTypes.string,
      id_appstore: PropTypes.string
    })
  }).isRequired
};
export default withClient(AppLinker);
export { NATIVE_APP_INFOS, getUniversalLinkDomain, generateWebLink, generateUniversalLink };