import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import Hammer from 'hammerjs';
import flow from 'lodash/flow';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { infoWidth } from "cozy-ui/transpiled/react/Viewer/components/InformationPanel";
import Navigation from "cozy-ui/transpiled/react/Viewer/components/Navigation";
import Toolbar from "cozy-ui/transpiled/react/Viewer/components/Toolbar";
var styles = {
  "viewer-nav": "styles__viewer-nav___1MSd7",
  "viewer-nav--visible": "styles__viewer-nav--visible___h_KJD",
  "viewer-nav--previous": "styles__viewer-nav--previous___WOwzv",
  "viewer-nav-arrow": "styles__viewer-nav-arrow___3_d1_",
  "viewer-nav--next": "styles__viewer-nav--next___1ah-4",
  "viewer-controls": "styles__viewer-controls___1BYEX",
  "--expanded": "styles__--expanded___2NoA-",
  "viewer-controls--display-content-top": "styles__viewer-controls--display-content-top___3I1xq",
  "viewer-toolbar": "styles__viewer-toolbar___2zPR7",
  "viewer-toolbar--hidden": "styles__viewer-toolbar--hidden___3r3Sj",
  "viewer-footer": "styles__viewer-footer___2ieQS"
};
import { toolbarPropsPropType } from "cozy-ui/transpiled/react/Viewer";
import withBreakpoints from "cozy-ui/transpiled/react/helpers/withBreakpoints";
import { withStyles } from "cozy-ui/transpiled/react/styles";
import { isValidForPanel } from "cozy-ui/transpiled/react/Viewer/helpers";
var ACTIONS_HIDE_DELAY = 3000;

var customStyles = function customStyles() {
  return {
    viewerControlsWithInfo: {
      width: "calc(100% - ".concat(infoWidth, ") !important")
    }
  };
};

var ViewerControls = /*#__PURE__*/function (_Component) {
  _inherits(ViewerControls, _Component);

  var _super = _createSuper(ViewerControls);

  function ViewerControls() {
    var _this;

    _classCallCheck(this, ViewerControls);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hidden: false,
      gestures: null
    });

    _defineProperty(_assertThisInitialized(_this), "_mounted", false);

    _defineProperty(_assertThisInitialized(_this), "showControls", function () {
      if (_this._mounted) {
        _this.setState({
          hidden: false
        });

        _this.hideAfterDelay();

        document.removeEventListener('mousemove', _this.showControls);
        document.addEventListener('mousemove', _this.hideAfterDelay);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hideControls", function () {
      if (_this._mounted) {
        _this.setState({
          hidden: true
        });

        document.removeEventListener('mousemove', _this.hideAfterDelay);
        document.addEventListener('mousemove', _this.showControls);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hideAfterDelay", function () {
      clearTimeout(_this.hideTimeout);
      _this.hideTimeout = setTimeout(function () {
        _this.hideControls();
      }, ACTIONS_HIDE_DELAY);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipe", function (e) {
      if (e.direction === Hammer.DIRECTION_LEFT) _this.props.onNext();else if (e.direction === Hammer.DIRECTION_RIGHT) _this.props.onPrevious();
    });

    _defineProperty(_assertThisInitialized(_this), "initGestures", function () {
      var gestures = new Hammer(_this.wrapped, _this.props.breakpoints.isDesktop ? {
        cssProps: {
          userSelect: 'auto'
        }
      } : {});
      if (!_this.props.breakpoints.isDesktop) gestures.on('swipe', _this.onSwipe);
      return gestures;
    });

    return _this;
  }

  _createClass(ViewerControls, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mounted = true;
      clearTimeout(this.hideTimeout);
      this.hideAfterDelay();
      var gestures = this.initGestures();
      this.setState({
        gestures: gestures
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
      clearTimeout(this.hideTimeout);
      if (this.state.gestures) this.state.gestures.destroy();
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(children) {
      var _this2 = this;

      if (!children) return null;
      return React.Children.map(children, function (child) {
        var _child$type, _child$type2;

        if ((child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.name) === 'ViewerByFile' || (child === null || child === void 0 ? void 0 : (_child$type2 = child.type) === null || _child$type2 === void 0 ? void 0 : _child$type2.displayName) === 'ViewerByFile') {
          return /*#__PURE__*/React.cloneElement(child, {
            gestures: _this2.state.gestures,
            gesturesRef: _this2.wrapped,
            onSwipe: _this2.onSwipe
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _cx,
          _this3 = this;

      var _this$props = this.props,
          file = _this$props.file,
          onClose = _this$props.onClose,
          hasPrevious = _this$props.hasPrevious,
          hasNext = _this$props.hasNext,
          onPrevious = _this$props.onPrevious,
          onNext = _this$props.onNext,
          expanded = _this$props.expanded,
          toolbarProps = _this$props.toolbarProps,
          showNavigation = _this$props.showNavigation,
          showInfoPanel = _this$props.showInfoPanel,
          children = _this$props.children,
          classes = _this$props.classes,
          isDesktop = _this$props.breakpoints.isDesktop;
      var showToolbar = toolbarProps.showToolbar,
          showClose = toolbarProps.showClose,
          toolbarRef = toolbarProps.toolbarRef,
          showFilePath = toolbarProps.showFilePath;
      var hidden = this.state.hidden;
      var shouldDisplayContentTop = isValidForPanel({
        file: file
      });
      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles['viewer-controls'], (_cx = {}, _defineProperty(_cx, styles['viewer-controls--expanded'], expanded), _defineProperty(_cx, styles['viewer-controls--display-content-top'], shouldDisplayContentTop), _defineProperty(_cx, classes.viewerControlsWithInfo, showInfoPanel), _cx)),
        ref: function ref(wrapped) {
          _this3.wrapped = wrapped;
        }
      }, showToolbar && /*#__PURE__*/React.createElement(Toolbar, {
        toolbarRef: toolbarRef,
        file: file,
        showFilePath: showFilePath,
        onMouseEnter: this.showControls,
        onMouseLeave: this.hideControls,
        onClose: showClose && onClose
      }, children), showNavigation && isDesktop && hasPrevious && /*#__PURE__*/React.createElement(Navigation, {
        className: styles['viewer-nav--previous'],
        hidden: hidden,
        onMouseEnter: this.showControls,
        onMouseLeave: this.hideControls,
        onClick: onPrevious
      }), this.renderChildren(children), showNavigation && isDesktop && hasNext && /*#__PURE__*/React.createElement(Navigation, {
        className: styles['viewer-nav--next'],
        hidden: hidden,
        onMouseEnter: this.showControls,
        onMouseLeave: this.hideControls,
        onClick: onNext
      }));
    }
  }]);

  return ViewerControls;
}(Component);

ViewerControls.propTypes = {
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  toolbarProps: PropTypes.shape(toolbarPropsPropType),
  showNavigation: PropTypes.bool.isRequired,
  showInfoPanel: PropTypes.bool
};
export default flow(withBreakpoints(), withStyles(customStyles))(ViewerControls);