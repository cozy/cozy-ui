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
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { withClient, models } from 'cozy-client';
var styles = {
  "viewer-imageviewer": "styles__viewer-imageviewer___26k0p",
  "viewer-noviewer": "styles__viewer-noviewer___auG-6",
  "viewer-audioviewer": "styles__viewer-audioviewer___1OQPB",
  "viewer-videoviewer": "styles__viewer-videoviewer___NhFoe",
  "viewer-pdfviewer": "styles__viewer-pdfviewer___1gTP9",
  "viewer-textviewer": "styles__viewer-textviewer___3u5Zw",
  "viewer-canceled": "styles__viewer-canceled___pOA_O",
  "viewer-textviewer-content": "styles__viewer-textviewer-content___PB-c3",
  "viewer-filename": "styles__viewer-filename___3jZCt",
  "viewer-pdfviewer-pdf": "styles__viewer-pdfviewer-pdf___16ID9",
  "viewer-pdfviewer-page": "styles__viewer-pdfviewer-page___2RPuw",
  "viewer-pdfviewer-toolbar": "styles__viewer-pdfviewer-toolbar___3NXOk",
  "viewer-pdfMobile": "styles__viewer-pdfMobile___25FPg",
  "viewer-pdfMobile--image": "styles__viewer-pdfMobile--image___3gpFL"
};
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import NoViewer from "cozy-ui/transpiled/react/Viewer/NoViewer";
import ViewerSpinner from "cozy-ui/transpiled/react/Viewer/components/ViewerSpinner";
import { isFileEncrypted } from "cozy-ui/transpiled/react/Viewer/helpers";
import withFileUrl from "cozy-ui/transpiled/react/Viewer/hoc/withFileUrl";

var MarkdownRenderer = function MarkdownRenderer(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(ReactMarkdown, {
    className: cx(styles['viewer-textviewer-content'], 'u-p-1'),
    source: text
  });
};

var PlainTextRenderer = function PlainTextRenderer(_ref2) {
  var text = _ref2.text;
  return /*#__PURE__*/React.createElement("pre", {
    className: cx(styles['viewer-textviewer-content'], 'u-mh-auto', 'u-mv-2')
  }, text);
};

var Loader = function Loader() {
  return /*#__PURE__*/React.createElement("div", {
    className: styles['viewer-textviewer']
  }, /*#__PURE__*/React.createElement(ViewerSpinner, null));
};

export var isMarkdown = function isMarkdown(file) {
  return file.mime === 'text/markdown' || /.md$/.test(file.name) || models.file.isNote(file);
};
export var TextViewer = /*#__PURE__*/function (_React$Component) {
  _inherits(TextViewer, _React$Component);

  var _super = _createSuper(TextViewer);

  function TextViewer() {
    var _this;

    _classCallCheck(this, TextViewer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      text: '',
      isMarkdown: false,
      loading: true,
      error: null
    });

    _defineProperty(_assertThisInitialized(_this), "_mounted", false);

    return _this;
  }

  _createClass(TextViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mounted = true;
      this.loadFile();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  }, {
    key: "loadFile",
    value: function () {
      var _loadFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _this$props, url, file, response, _URL, pathname, client, text;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, url = _this$props.url, file = _this$props.file;
                _context.prev = 1;

                if (!isFileEncrypted(file)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return fetch(url);

              case 5:
                response = _context.sent;
                _context.next = 13;
                break;

              case 8:
                _URL = new URL(url), pathname = _URL.pathname;
                client = this.props.client.getStackClient();
                _context.next = 12;
                return client.fetch('GET', pathname);

              case 12:
                response = _context.sent;

              case 13:
                _context.next = 15;
                return response.text();

              case 15:
                text = _context.sent;

                if (this._mounted) {
                  this.setState({
                    text: text,
                    isMarkdown: isMarkdown(file),
                    loading: false
                  });
                }

                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](1);
                // eslint-disable-next-line no-console
                console.warn(_context.t0);

                if (this._mounted) {
                  this.setState({
                    loading: false,
                    error: _context.t0
                  });
                }

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 19]]);
      }));

      function loadFile() {
        return _loadFile.apply(this, arguments);
      }

      return loadFile;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          error = _this$state.error,
          text = _this$state.text,
          isMarkdown = _this$state.isMarkdown;
      var _this$props2 = this.props,
          file = _this$props2.file,
          renderFallbackExtraContent = _this$props2.renderFallbackExtraContent;
      if (loading) return /*#__PURE__*/React.createElement(Loader, null);else if (error) return /*#__PURE__*/React.createElement(NoViewer, {
        file: file,
        renderFallbackExtraContent: renderFallbackExtraContent
      });else return /*#__PURE__*/React.createElement("div", {
        className: styles['viewer-textviewer']
      }, /*#__PURE__*/React.createElement("h2", {
        className: cx(styles['viewer-filename'], 'u-mt-3', 'u-mb-1')
      }, file.name), isMarkdown ? /*#__PURE__*/React.createElement(MarkdownRenderer, {
        text: text
      }) : /*#__PURE__*/React.createElement(PlainTextRenderer, {
        text: text
      }));
    }
  }]);

  return TextViewer;
}(React.Component);
TextViewer.propTypes = {
  client: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  file: FileDoctype.isRequired,
  renderFallbackExtraContent: PropTypes.func
};
export default withFileUrl(withClient(TextViewer));