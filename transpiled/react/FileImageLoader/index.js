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

import { Component } from 'react';
import PropTypes from 'prop-types';
import { withClient } from 'cozy-client';
import logger from 'cozy-logger';
var PENDING = 'PENDING';
var LOADING_LINK = 'LOADING_LINK';
var LOADING_FALLBACK = 'LOADING_FALLBACK';
var LOADED = 'LOADED';
var FAILED = 'FAILED';
var GET_LINK = 'GET_LINK';
import { checkImageSource } from "cozy-ui/transpiled/react/FileImageLoader/checkImageSource";
import { isFileEncrypted } from "cozy-ui/transpiled/react/Viewer/helpers";
import { EncryptedContext } from "cozy-ui/transpiled/react/Viewer/providers/EncryptedProvider";
export var FileImageLoader = /*#__PURE__*/function (_Component) {
  _inherits(FileImageLoader, _Component);

  var _super = _createSuper(FileImageLoader);

  function FileImageLoader() {
    var _this;

    _classCallCheck(this, FileImageLoader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      src: null
    });

    _defineProperty(_assertThisInitialized(_this), "_mounted", false);

    _defineProperty(_assertThisInitialized(_this), "handleCreate", function (doc) {
      var _this$props = _this.props,
          file = _this$props.file,
          linkType = _this$props.linkType;

      if (file._id === doc._id && doc.format === linkType) {
        _this.loadLink();
      }
    });

    return _this;
  }

  _createClass(FileImageLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var client = this.props.client;
      this._mounted = true;
      this.status = PENDING;
      this.loadNextSrc();
      this.realtime = client.plugins.realtime;
      this.type = 'io.cozy.files.thumbnails';
      this.realtime.subscribe('created', this.type, this.handleCreate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;

      if (this.img) {
        this.img.onload = this.img.onerror = null;
        this.img.src = '';
      }

      this.realtime && this.realtime.unsubscribe('created', this.type, this.handleCreate);
    }
    /**
     * Reload the link when realtime tell us that the
     * thumbnail is created. By default linkType === small
     */

  }, {
    key: "getFileId",
    value: function getFileId(file) {
      return file.id || file._id;
    }
  }, {
    key: "loadNextSrc",
    value: function loadNextSrc() {
      var lastError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var file = this.props.file;

      if (isFileEncrypted(file)) {
        // No link available for encrypted files
        return;
      }

      if (this.status === PENDING) this.getLink();else if (this.status === GET_LINK) this.loadLink();else if (this.status === LOADING_LINK) this.loadFallback();else if (this.status === LOADING_FALLBACK) {
        logger.warn('failed loading thumbnail', lastError);
        this.setState({
          status: FAILED
        });
        this.props.onError(lastError);
      }
    }
  }, {
    key: "fetchFileLinks",
    value: function () {
      var _fetchFileLinks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file) {
        var response;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.client.collection('io.cozy.files').get(this.getFileId(file));

              case 2:
                response = _context.sent;

                if (response.data.links) {
                  _context.next = 5;
                  break;
                }

                throw new Error('Could not fetch file links');

              case 5:
                return _context.abrupt("return", response.data.links);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchFileLinks(_x) {
        return _fetchFileLinks.apply(this, arguments);
      }

      return fetchFileLinks;
    }()
  }, {
    key: "getLink",
    value: function () {
      var _getLink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var _this$props2, file, linkType, client, link, src;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.status = GET_LINK;
                _this$props2 = this.props, file = _this$props2.file, linkType = _this$props2.linkType, client = _this$props2.client;
                _context2.prev = 2;
                link = file.links ? file.links[linkType] : false;

                if (link) {
                  _context2.next = 6;
                  break;
                }

                throw new Error("".concat(linkType, " link is not available"));

              case 6:
                src = client.getStackClient().uri + link;
                _context2.next = 9;
                return checkImageSource(src);

              case 9:
                if (this._mounted) {
                  this.status = LOADED;
                  this.setState({
                    src: src
                  });
                }

                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](2);
                this.loadNextSrc(_context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 12]]);
      }));

      function getLink() {
        return _getLink.apply(this, arguments);
      }

      return getLink;
    }()
  }, {
    key: "loadLink",
    value: function () {
      var _loadLink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var _this$props3, file, linkType, client, links, link, src;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.status = LOADING_LINK;
                _this$props3 = this.props, file = _this$props3.file, linkType = _this$props3.linkType, client = _this$props3.client;
                _context3.prev = 2;
                _context3.next = 5;
                return this.fetchFileLinks(file);

              case 5:
                links = _context3.sent;
                link = links[linkType];

                if (link) {
                  _context3.next = 9;
                  break;
                }

                throw new Error("".concat(linkType, " link is not available"));

              case 9:
                src = client.getStackClient().uri + link;
                _context3.next = 12;
                return checkImageSource(src);

              case 12:
                if (this._mounted) {
                  this.status = LOADED;
                  this.setState({
                    src: src
                  });
                }

                _context3.next = 19;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](2);
                logger.error(_context3.t0);
                this.loadNextSrc(_context3.t0);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 15]]);
      }));

      function loadLink() {
        return _loadLink.apply(this, arguments);
      }

      return loadLink;
    }()
  }, {
    key: "loadFallback",
    value: function () {
      var _loadFallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        var _this$props4, file, client, src;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.status = LOADING_FALLBACK;
                _this$props4 = this.props, file = _this$props4.file, client = _this$props4.client;
                _context4.prev = 2;

                if (!(file.class === 'pdf')) {
                  _context4.next = 5;
                  break;
                }

                throw new Error('No pdf files fallback');

              case 5:
                _context4.next = 7;
                return client.collection('io.cozy.files').getDownloadLinkById(this.getFileId(file), file.name);

              case 7:
                src = _context4.sent;
                _context4.next = 10;
                return checkImageSource(src);

              case 10:
                if (this._mounted) {
                  this.status = LOADED;
                  this.setState({
                    src: src
                  });
                }

                _context4.next = 16;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](2);
                this.loadNextSrc(_context4.t0);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 13]]);
      }));

      function loadFallback() {
        return _loadFallback.apply(this, arguments);
      }

      return loadFallback;
    }()
  }, {
    key: "render",
    value: function render() {
      var src = this.state.src;
      var _this$props5 = this.props,
          render = _this$props5.render,
          renderFallback = _this$props5.renderFallback;

      if (this.context && this.context.url) {
        return render(this.context.url);
      }

      if (src) return render(src);else if (renderFallback) return renderFallback();else return null;
    }
  }]);

  return FileImageLoader;
}(Component);

_defineProperty(FileImageLoader, "contextType", EncryptedContext);

FileImageLoader.propTypes = {
  file: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
  linkType: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'icon']),
  onError: PropTypes.func,
  renderFallback: PropTypes.func
};
FileImageLoader.defaultProps = {
  linkType: 'small',
  onError: function onError() {}
};
export default withClient(FileImageLoader);