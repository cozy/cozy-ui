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
import React, { Component } from 'react';
import AnimatedContentHeader from "cozy-ui/transpiled/react/deprecated/Modal/AnimatedContentHeader";
var styles = {
  "c-modal": "styles__c-modal___dljYk",
  "c-modal-content": "styles__c-modal-content___22N4k",
  "c-modal-header": "styles__c-modal-header___38uqi",
  "c-modal-header--branded": "styles__c-modal-header--branded___17z1P",
  "c-modal-footer": "styles__c-modal-footer___3JCxm",
  "c-modal-container": "styles__c-modal-container___1AAl5",
  "c-modal-wrapper": "styles__c-modal-wrapper___y79-C",
  "c-modal--xsmall": "styles__c-modal--xsmall___VxVzh",
  "c-modal--small": "styles__c-modal--small___3xSfG",
  "c-modal--medium": "styles__c-modal--medium___2Pu0O",
  "c-modal--large": "styles__c-modal--large___2k5qx",
  "c-modal--xlarge": "styles__c-modal--xlarge___ZLRMN",
  "c-modal--xxlarge": "styles__c-modal--xxlarge___18Had",
  "c-modal-wrapper--fullscreen": "styles__c-modal-wrapper--fullscreen___3oSPW",
  "c-modal--fullscreen": "styles__c-modal--fullscreen___4RcnS",
  "c-modal-illu-header": "styles__c-modal-illu-header___2UbH8",
  "c-modal-illu-header--ghost": "styles__c-modal-illu-header--ghost___1gH1t",
  "is-active": "styles__is-active___JlHre",
  "c-modal--small-spacing": "styles__c-modal--small-spacing___1Qal6",
  "c-modal--large-spacing": "styles__c-modal--large-spacing___2ktm1",
  "c-modal-app": "styles__c-modal-app___2FX9h",
  "c-app-editor": "styles__c-app-editor___3FI4Z",
  "c-modal-app-icon": "styles__c-modal-app-icon___3iNz6",
  "c-modal-content-fixed": "styles__c-modal-content-fixed___1F97i",
  "c-modal-footer--button": "styles__c-modal-footer--button___3AdGX",
  "c-modal-section": "styles__c-modal-section___2LJKl",
  "c-modal-close": "styles__c-modal-close___1M8Jn",
  "c-modal--closable": "styles__c-modal--closable___3Wo68",
  "c-modal-close--notitle": "styles__c-modal-close--notitle___3dCIQ",
  "c-modal--overflowHidden": "styles__c-modal--overflowHidden___1QDY9",
  "c-modal-back-button": "styles__c-modal-back-button___AjaZO",
  "spin": "styles__spin___1fJIg",
  "shake": "styles__shake___gVu0K"
};

function _getChildrenToRender(children) {
  return React.Children.map(children, function (child) {
    return child && child.nodeName !== AnimatedContentHeader ? child : null;
  });
}

function _getAnimatedHeader(children) {
  return React.Children.toArray(children).find(function (child) {
    return child && child.nodeName === AnimatedContentHeader;
  });
}

var ModalContent = /*#__PURE__*/function (_Component) {
  _inherits(ModalContent, _Component);

  var _super = _createSuper(ModalContent);

  function ModalContent(props) {
    var _this;

    _classCallCheck(this, ModalContent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillUpdate", function (nextProps) {
      var children = nextProps.children;

      _this.refreshComputedParts(children);
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      if (!_this.contentHeader) return;

      var _assertThisInitialize = _assertThisInitialized(_this),
          headerHeight = _assertThisInitialize.headerHeight;

      if (!headerHeight && _this.contentHeader.clientHeight) {
        _this.headerHeight = _this.contentHeader.clientHeight;
        return;
      }

      if (!_this.state.displayGhostHeader && _this.scrollingContent.scrollTop > headerHeight - 20) {
        _this.setState(function () {
          return {
            displayGhostHeader: true
          };
        });
      } else if (_this.state.displayGhostHeader && _this.scrollingContent.scrollTop < headerHeight - 20) {
        _this.setState(function () {
          return {
            displayGhostHeader: false
          };
        });
      }
    });

    var _children = _this.props.children;

    _this.refreshComputedParts(_children);

    _this.state = {
      displayGhostHeader: false
    };
    return _this;
  } // for preact
  // eslint-disable-next-line react/no-deprecated


  _createClass(ModalContent, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      this.UNSAFE_componentWillUpdate(nextProps, nextState);
    }
  }, {
    key: "refreshComputedParts",
    value: function refreshComputedParts(children) {
      var animatedHeader = _getAnimatedHeader(children);

      this.animatedHeader = animatedHeader;
      this.childrenToRender = animatedHeader ? _getChildrenToRender(children) : children;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollingContent.addEventListener('scroll', this.handleScroll, {
        passive: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.scrollingContent.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          fixed = _this$props.fixed;
      var displayGhostHeader = this.state.displayGhostHeader;
      var animatedHeader = this.animatedHeader,
          childrenToRender = this.childrenToRender;
      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles["c-modal-content".concat(fixed ? '-fixed' : '')], className),
        ref: function ref(div) {
          _this2.scrollingContent = div;
        }
      }, animatedHeader && /*#__PURE__*/React.createElement("div", {
        className: animatedHeader.attributes.className,
        ref: function ref(div) {
          _this2.contentHeader = div;
        }
      }, /*#__PURE__*/React.createElement("h2", {
        className: styles['c-modal-illu-header']
      }, animatedHeader.children), /*#__PURE__*/React.createElement("div", {
        className: cx(styles['c-modal-illu-header--ghost'], animatedHeader.attributes.activeClassName, _defineProperty({}, styles['is-active'], displayGhostHeader))
      }, animatedHeader.children)), childrenToRender);
    }
  }]);

  return ModalContent;
}(Component);

export default ModalContent;