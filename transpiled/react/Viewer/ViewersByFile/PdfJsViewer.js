import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Document, Page } from 'react-pdf';
import cx from 'classnames';
import throttle from 'lodash/throttle';
import flow from 'lodash/flow';
import ViewerSpinner from "cozy-ui/transpiled/react/Viewer/components/ViewerSpinner";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";
import withFileUrl from "cozy-ui/transpiled/react/Viewer/hoc/withFileUrl";
import ToolbarButton from "cozy-ui/transpiled/react/Viewer/components/PdfToolbarButton";
import NoViewer from "cozy-ui/transpiled/react/Viewer/NoViewer";
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
export var MIN_SCALE = 0.25;
export var MAX_SCALE = 3;
export var MAX_PAGES = 3;
var KEY_CODE_UP = 38;
var KEY_CODE_DOWN = 40;
export var PdfJsViewer = /*#__PURE__*/function (_Component) {
  _inherits(PdfJsViewer, _Component);

  var _super = _createSuper(PdfJsViewer);

  function PdfJsViewer() {
    var _this;

    _classCallCheck(this, PdfJsViewer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      totalPages: 1,
      scale: 1,
      currentPage: 1,
      loaded: false,
      errored: false,
      width: null,
      renderAllPages: false
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (e) {
      if (e.keyCode === KEY_CODE_UP) _this.previousPage();else if (e.keyCode === KEY_CODE_DOWN) _this.nextPage();
    });

    _defineProperty(_assertThisInitialized(_this), "setWrapperSize", function () {
      var width = _this.wrapper ? _this.wrapper.getBoundingClientRect().width : null;

      _this.setState({
        width: width
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLoadSuccess", function (_ref) {
      var numPages = _ref.numPages;

      _this.setState({
        totalPages: numPages,
        renderAllPages: numPages <= MAX_PAGES,
        loaded: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLoadError", function (error) {
      // eslint-disable-next-line no-console
      console.warn(error);

      _this.setState({
        errored: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextPage", function () {
      _this.setState(function (state) {
        return {
          currentPage: Math.min(state.currentPage + 1, state.totalPages)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "previousPage", function () {
      _this.setState(function (state) {
        return {
          currentPage: Math.max(state.currentPage - 1, 1)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "scaleUp", function () {
      _this.setState(function (state) {
        var previousScale = state.scale;
        var scale = Math.min(previousScale + 0.25, MAX_SCALE);
        if (scale > 1 && previousScale <= 1) _this.toggleGestures(false);
        return {
          scale: scale
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "scaleDown", function () {
      _this.setState(function (state) {
        var previousScale = state.scale;
        var scale = Math.max(previousScale - 0.25, MIN_SCALE);
        if (scale <= 1 && previousScale > 1) _this.toggleGestures(true);
        return {
          scale: scale
        };
      });
    });

    return _this;
  }

  _createClass(PdfJsViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setWrapperSize();
      this.resizeListener = throttle(this.setWrapperSize, 500);
      window.addEventListener('resize', this.resizeListener);
      document.addEventListener('keyup', this.onKeyUp, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeListener);
      document.removeEventListener('keyup', this.onKeyUp, false);
    }
  }, {
    key: "toggleGestures",
    value: function toggleGestures(enable) {
      if (!this.props.gestures) return;
      this.props.gestures.get('swipe').set({
        enable: enable
      });
      this.props.gestures.get('pan').set({
        enable: enable
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          url = _this$props.url,
          file = _this$props.file,
          renderFallbackExtraContent = _this$props.renderFallbackExtraContent,
          t = _this$props.t;
      var _this$state = this.state,
          loaded = _this$state.loaded,
          errored = _this$state.errored,
          totalPages = _this$state.totalPages,
          currentPage = _this$state.currentPage,
          scale = _this$state.scale,
          width = _this$state.width,
          renderAllPages = _this$state.renderAllPages;
      if (errored) return /*#__PURE__*/React.createElement(NoViewer, {
        file: file,
        renderFallbackExtraContent: renderFallbackExtraContent
      });
      var pageWidth = width ? width * scale : null; // newer versions of react-pdf do that automatically

      return /*#__PURE__*/React.createElement("div", {
        className: styles['viewer-pdfviewer'],
        ref: function ref(_ref2) {
          return _this2.wrapper = _ref2;
        }
      }, /*#__PURE__*/React.createElement(Document, {
        file: url,
        onLoadSuccess: this.onLoadSuccess,
        onLoadError: this.onLoadError,
        className: styles['viewer-pdfviewer-pdf'],
        loading: /*#__PURE__*/React.createElement(ViewerSpinner, null)
      }, renderAllPages ? _toConsumableArray(Array(totalPages)).map(function (_, page) {
        return /*#__PURE__*/React.createElement(Page, {
          key: page,
          pageNumber: page + 1,
          width: pageWidth,
          renderAnnotations: false,
          className: cx('u-mv-1', styles['viewer-pdfviewer-page'])
        });
      }) : /*#__PURE__*/React.createElement(Page, {
        pageNumber: currentPage,
        width: pageWidth,
        renderAnnotations: false,
        className: styles['viewer-pdfviewer-page']
      })), loaded && /*#__PURE__*/React.createElement("div", {
        className: cx(styles['viewer-pdfviewer-toolbar'], 'u-p-half')
      }, !renderAllPages && /*#__PURE__*/React.createElement("span", {
        className: "u-mh-half"
      }, /*#__PURE__*/React.createElement(ToolbarButton, {
        icon: "top",
        onClick: this.previousPage,
        disabled: currentPage === 1,
        label: t('Viewer.previous')
      }), currentPage, "/", totalPages, /*#__PURE__*/React.createElement(ToolbarButton, {
        icon: "bottom",
        onClick: this.nextPage,
        disabled: currentPage === totalPages,
        label: t('Viewer.next')
      })), /*#__PURE__*/React.createElement("span", {
        className: "u-mh-half"
      }, /*#__PURE__*/React.createElement(ToolbarButton, {
        icon: "dash",
        onClick: this.scaleDown,
        disabled: scale === MIN_SCALE,
        label: t('Viewer.scaledown')
      }), /*#__PURE__*/React.createElement(ToolbarButton, {
        icon: "plus",
        onClick: this.scaleUp,
        disabled: scale === MAX_SCALE,
        label: t('Viewer.scaleup')
      }))));
    }
  }]);

  return PdfJsViewer;
}(Component);
PdfJsViewer.propTypes = {
  url: PropTypes.string.isRequired,
  gestures: PropTypes.object,
  renderFallbackExtraContent: PropTypes.func
};
export default flow(withFileUrl, withViewerLocales)(PdfJsViewer);