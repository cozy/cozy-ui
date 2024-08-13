import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ViewerSpinner from "cozy-ui/transpiled/react/Viewer/components/ViewerSpinner";
import NoNetworkViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/NoNetworkViewer";
import { isFileEncrypted } from "cozy-ui/transpiled/react/Viewer/helpers";
var TTL = 6000;
var LOADING = 'LOADING';
var LOADED = 'LOADED';
var FAILED = 'FAILED';

var withFileUrl = function withFileUrl(BaseComponent) {
  var _class;

  return _class = /*#__PURE__*/function (_Component) {
    _inherits(withFileUrlClass, _Component);

    var _super = _createSuper(withFileUrlClass);

    function withFileUrlClass() {
      var _this;

      _classCallCheck(this, withFileUrlClass);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        status: LOADING,
        downloadUrl: null
      });

      _defineProperty(_assertThisInitialized(_this), "reset", function () {
        _this.clearTimeout();

        _this.setState({
          status: LOADING,
          downloadUrl: null
        });
      });

      return _this;
    }

    _createClass(withFileUrlClass, [{
      key: "UNSAFE_componentWillMount",
      value: function UNSAFE_componentWillMount() {
        this.loadDownloadUrl();
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.file.id !== this.props.file.id || nextProps.url !== this.props.url) {
          this.reset();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.state.status === LOADING && !this.timeout) {
          this.loadDownloadUrl();
        }
      }
    }, {
      key: "loadDownloadUrl",
      value: function () {
        var _loadDownloadUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
          var _this2 = this;

          var _this$props, file, url, downloadUrl;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$props = this.props, file = _this$props.file, url = _this$props.url;
                  this.timeout = setTimeout(function () {
                    return _this2.setState(function (state) {
                      return _objectSpread(_objectSpread({}, state), {}, {
                        status: FAILED
                      });
                    });
                  }, TTL);
                  _context.prev = 2;

                  if (!isFileEncrypted(file)) {
                    _context.next = 6;
                    break;
                  }

                  // The download link cannot be provided by the stack if the file is encrypted
                  if (url) {
                    this.clearTimeout();
                    this.setState({
                      downloadUrl: url,
                      status: LOADED
                    });
                  }

                  return _context.abrupt("return");

                case 6:
                  _context.next = 8;
                  return this.getDownloadLink(file);

                case 8:
                  downloadUrl = _context.sent;
                  this.clearTimeout();
                  this.setState({
                    downloadUrl: downloadUrl,
                    status: LOADED
                  });
                  _context.next = 17;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](2);
                  this.clearTimeout();
                  this.setState(function (state) {
                    return _objectSpread(_objectSpread({}, state), {}, {
                      status: FAILED
                    });
                  });

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[2, 13]]);
        }));

        function loadDownloadUrl() {
          return _loadDownloadUrl.apply(this, arguments);
        }

        return loadDownloadUrl;
      }()
    }, {
      key: "getDownloadLink",
      value: function getDownloadLink(file) {
        return this.context.client.collection('io.cozy.files').getDownloadLinkById(file._id, file.name);
      }
    }, {
      key: "clearTimeout",
      value: function (_clearTimeout) {
        function clearTimeout() {
          return _clearTimeout.apply(this, arguments);
        }

        clearTimeout.toString = function () {
          return _clearTimeout.toString();
        };

        return clearTimeout;
      }(function () {
        clearTimeout(this.timeout);
        this.timeout = null;
      })
    }, {
      key: "render",
      value: function render() {
        if (this.state.status === LOADING) {
          return /*#__PURE__*/React.createElement(ViewerSpinner, null);
        }

        if (this.state.status === FAILED) {
          return /*#__PURE__*/React.createElement(NoNetworkViewer, {
            onReload: this.reset
          });
        }

        return /*#__PURE__*/React.createElement(BaseComponent, _extends({}, this.props, {
          url: this.state.downloadUrl
        }));
      }
    }]);

    return withFileUrlClass;
  }(Component), _defineProperty(_class, "contextTypes", {
    client: PropTypes.object.isRequired
  }), _class;
};

export default withFileUrl;