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

import PropTypes from 'prop-types';
import React from 'react';
import { withClient } from 'cozy-client';
import { isFlagshipApp } from 'cozy-device-helper';
import { WebviewContext } from 'cozy-intent';
import logger from 'cozy-logger';
import { generateUniversalLink, generateWebLink, getUniversalLinkDomain } from "cozy-ui/transpiled/react/AppLinker/native";
export var AppLinker = /*#__PURE__*/function (_React$Component) {
  _inherits(AppLinker, _React$Component);

  var _super = _createSuper(AppLinker);

  function AppLinker(props) {
    var _this;

    _classCallCheck(this, AppLinker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      imgRef: null
    });

    _defineProperty(_assertThisInitialized(_this), "setImgRef", function (img) {
      _this.imgRef = img;

      _this.setState({
        imgRef: _this.imgRef
      });
    });

    return _this;
  }

  _createClass(AppLinker, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      var _AppLinker$getOnClick = AppLinker.getOnClickHref(this.props, this.context, this.state.imgRef),
          href = _AppLinker$getOnClick.href,
          onClick = _AppLinker$getOnClick.onClick;

      return children({
        iconRef: this.setImgRef,
        onClick: onClick,
        href: href
      });
    }
  }], [{
    key: "getSlug",
    value: function getSlug(props) {
      return props.app.slug;
    }
  }, {
    key: "getOnClickHref",
    value: function getOnClickHref(props, context, imgRef) {
      var app = props.app,
          client = props.client,
          onAppSwitch = props.onAppSwitch;
      var href = props.href;
      var onClick = null;

      if (isFlagshipApp()) {
        var _ref = client ? client.getInstanceOptions() : undefined,
            currentApp = _ref.app;

        if (currentApp === undefined || app.slug !== currentApp.slug) {
          var imgPayload = imgRef && JSON.stringify(_objectSpread({}, imgRef.getBoundingClientRect().toJSON()));
          return {
            onClick: function onClick(event) {
              event.preventDefault();
              onAppSwitch === null || onAppSwitch === void 0 ? void 0 : onAppSwitch();
              context ? context.call('openApp', href, app, imgPayload) : logger.error("Failed to \"openApp(".concat(app, ")\". WebviewService has the following falsy value \"").concat(context, "\" in AppLinker's context."));
            },
            href: '#'
          };
        }
      }

      return {
        href: href,
        onClick: onClick
      };
    }
  }]);

  return AppLinker;
}(React.Component);

_defineProperty(AppLinker, "contextType", WebviewContext);

AppLinker.propTypes = {
  /*
  Full web url : Used by default on desktop browser
  Used as a fallback_uri on mobile web
  */
  href: PropTypes.string,
  onAppSwitch: PropTypes.func,
  app: PropTypes.shape({
    // Slug of the app : drive / banks ...
    slug: PropTypes.string.isRequired
  }).isRequired
};
export default withClient(AppLinker);
export { getUniversalLinkDomain, generateWebLink, generateUniversalLink };