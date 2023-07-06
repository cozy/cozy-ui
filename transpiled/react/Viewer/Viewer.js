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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import ViewerControls from "cozy-ui/transpiled/react/Viewer/components/ViewerControls";
import ViewerByFile from "cozy-ui/transpiled/react/Viewer/components/ViewerByFile";
import { toolbarPropsPropType } from "cozy-ui/transpiled/react/Viewer";
var KEY_CODE_LEFT = 37;
var KEY_CODE_RIGHT = 39;
var KEY_CODE_ESCAPE = 27;

var Viewer = /*#__PURE__*/function (_Component) {
  _inherits(Viewer, _Component);

  var _super = _createSuper(Viewer);

  function Viewer() {
    var _this;

    _classCallCheck(this, Viewer);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (e) {
      if (e.keyCode === KEY_CODE_LEFT) _this.onPrevious();else if (e.keyCode === KEY_CODE_RIGHT) _this.onNext();else if (e.keyCode === KEY_CODE_ESCAPE) _this.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "onNext", function () {
      var _this$props = _this.props,
          files = _this$props.files,
          currentIndex = _this$props.currentIndex;

      if (currentIndex === files.length - 1) {
        return;
      }

      var nextIndex = currentIndex + 1;
      var nextFile = files[nextIndex];

      _this.onChange(nextFile, nextIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevious", function () {
      var _this$props2 = _this.props,
          files = _this$props2.files,
          currentIndex = _this$props2.currentIndex;

      if (currentIndex === 0) {
        return;
      }

      var prevIndex = currentIndex - 1;
      var prevFile = files[prevIndex];

      _this.onChange(prevFile, prevIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      if (_this.props.onCloseRequest) {
        _this.props.onCloseRequest();
      }
    });

    return _this;
  }

  _createClass(Viewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keyup', this.onKeyUp, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keyup', this.onKeyUp, false);
    }
  }, {
    key: "onChange",
    value: function onChange(nextFile, nextIndex) {
      if (this.props.onChangeRequest) {
        this.props.onChangeRequest(nextFile, nextIndex);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          currentFile = _this$props3.currentFile,
          hasPrevious = _this$props3.hasPrevious,
          hasNext = _this$props3.hasNext,
          toolbarProps = _this$props3.toolbarProps,
          toolbarRef = _this$props3.toolbarRef,
          showNavigation = _this$props3.showNavigation,
          renderFallbackExtraContent = _this$props3.renderFallbackExtraContent,
          validForPanel = _this$props3.validForPanel,
          onlyOfficeProps = _this$props3.onlyOfficeProps,
          componentsProps = _this$props3.componentsProps; // this `expanded` property makes the next/previous controls cover the displayed image

      var expanded = currentFile && currentFile.class === 'image';
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewerControls, {
        file: currentFile,
        onClose: this.onClose,
        hasPrevious: hasPrevious,
        hasNext: hasNext,
        onPrevious: this.onPrevious,
        onNext: this.onNext,
        expanded: expanded,
        toolbarProps: _objectSpread(_objectSpread({}, toolbarProps), {}, {
          toolbarRef: toolbarRef
        }),
        showNavigation: showNavigation,
        showInfoPanel: validForPanel
      }, /*#__PURE__*/React.createElement(ViewerByFile, {
        file: currentFile,
        onClose: this.onClose,
        renderFallbackExtraContent: renderFallbackExtraContent,
        onlyOfficeProps: onlyOfficeProps,
        componentsProps: componentsProps
      })));
    }
  }]);

  return Viewer;
}(Component);

Viewer.propTypes = {
  /** One `io.cozy.files` to display */
  currentFile: FileDoctype.isRequired,
  hasNext: PropTypes.bool,
  hasPrevious: PropTypes.bool,

  /** Called when the user wants to leave the Viewer */
  onCloseRequest: PropTypes.func,

  /** Called with (nextFile, nextIndex) when the user requests to navigate to another file */
  onChangeRequest: PropTypes.func,
  toolbarProps: PropTypes.shape(toolbarPropsPropType),
  toolbarRef: PropTypes.object,

  /** Whether to show left and right arrows to navigate between files */
  showNavigation: PropTypes.bool,

  /** A render prop that is called when a file can't be displayed */
  renderFallbackExtraContent: PropTypes.func,

  /** Used to open an Only Office file */
  onlyOfficeProps: PropTypes.shape({
    /** Whether Only Office is enabled on the server */
    isEnabled: PropTypes.bool,

    /** To open the Only Office file */
    opener: PropTypes.func
  }),
  validForPanel: PropTypes.bool,

  /* Props passed to components with the same name */
  componentsProps: PropTypes.shape({
    /** Used to open an Only Office file */
    OnlyOfficeViewer: PropTypes.shape({
      /** Whether Only Office is enabled on the server */
      isEnabled: PropTypes.bool,

      /** To open the Only Office file */
      opener: PropTypes.func
    })
  })
};
export default Viewer;