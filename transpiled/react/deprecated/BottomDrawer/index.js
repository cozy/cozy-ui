import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import Hammer from 'hammerjs';
import once from 'lodash/once';
import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
var styles = {
  "with-transition": "styles__with-transition___3OLmI",
  "BottomDrawer-content": "styles__BottomDrawer-content___IYCrj",
  "spin": "styles__spin___3pHXv",
  "shake": "styles__shake___gYwuE"
};
import Overlay from "cozy-ui/transpiled/react/deprecated/Overlay";
var TRANSITION_DURATION = 100; // need to be kept in sync with css

var BottomDrawer = /*#__PURE__*/function (_Component) {
  _inherits(BottomDrawer, _Component);

  var _super = _createSuper(BottomDrawer);

  function BottomDrawer(props) {
    var _this;

    _classCallCheck(this, BottomDrawer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "animateClose", function () {
      var menuNode = _this.menuRef.current;

      _this.setState({
        closing: true
      }); // we need to transition the menu to the bottom before dismissing it


      var close = function close(menuNode) {
        return once(function () {
          menuNode === null || menuNode === void 0 ? void 0 : menuNode.removeEventListener('transitionend', close(menuNode));

          _this.close();
        });
      };

      menuNode === null || menuNode === void 0 ? void 0 : menuNode.addEventListener('transitionend', close(menuNode), false); // in case transitionend is not called, for example if the element is removed

      setTimeout(close(menuNode), TRANSITION_DURATION);

      _this.applyTransformation(1.1);
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        closing: true
      });

      onClose && onClose();
    });

    _this.state = {
      closing: false
    };
    _this.menuRef = /*#__PURE__*/createRef();
    _this.wrapperRef = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(BottomDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialAppear();
      this.attachEvents();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.gesturesHandler.destroy();
      this.menuRef.current.style = ''; // Drops the node style in case it gets recycled, see https://github.com/cozy/cozy-ui/pull/602
    }
  }, {
    key: "initialAppear",
    value: function initialAppear() {
      var _this2 = this;

      this.turnTransitionsOff();
      this.applyTransformation(1);
      requestAnimationFrame(function () {
        _this2.turnTransitionsOn();

        _this2.applyTransformation(0);
      });
    }
  }, {
    key: "turnTransitionsOn",
    value: function turnTransitionsOn() {
      this.menuRef.current.classList.add(styles['with-transition']);
    }
  }, {
    key: "turnTransitionsOff",
    value: function turnTransitionsOff() {
      this.menuRef.current.classList.remove(styles['with-transition']);
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this3 = this;

      this.gesturesHandler = new Hammer.Manager(this.wrapperRef.current, {
        recognizers: [[Hammer.Pan, {
          direction: Hammer.DIRECTION_VERTICAL
        }]]
      }); // to be completely accurate, `maximumGestureDelta` should be the difference between the top of the menu and the
      // bottom of the page; but using the height is much easier to compute and accurate enough.

      var maximumGestureDistance = this.menuRef.current.getBoundingClientRect().height; // between 0 and 1, how far down the gesture must be to be considered complete upon release

      var minimumCloseDistance = 0.6; // a gesture faster than this will dismiss the menu, regardless of distance traveled

      var minimumCloseVelocity = 0.6;
      var currentGestureProgress = null;
      this.gesturesHandler.on('panstart', function () {
        _this3.turnTransitionsOff();

        currentGestureProgress = 0;
      });
      this.gesturesHandler.on('pan', function (e) {
        currentGestureProgress = e.deltaY / maximumGestureDistance;

        _this3.applyTransformation(currentGestureProgress);
      });
      this.gesturesHandler.on('panend', function (e) {
        // Dismiss the menu if the swipe pan was bigger than the treshold,
        // or if it was a fast, downward gesture
        var shouldDismiss = e.deltaY / maximumGestureDistance >= minimumCloseDistance || e.deltaY > 0 && e.velocity >= minimumCloseVelocity;

        if (shouldDismiss) {
          if (currentGestureProgress >= 1) {
            // Menu is already hidden, close it right away
            _this3.close();
          } else {
            _this3.turnTransitionsOn();

            _this3.animateClose();
          }
        } else {
          _this3.turnTransitionsOn();

          _this3.applyTransformation(0);
        }
      });
    }
    /**
     * Applies a css transform to the element, based on the progress of the gesture
     * @param  {number} progress - Amount of progress between 0 and 1
     */

  }, {
    key: "applyTransformation",
    value: function applyTransformation(progress) {
      // constrain between 0 and 1.1 (go a bit further than 1 to be hidden completely)
      var progressToApply = Math.min(1.1, Math.max(0, progress));
      this.menuRef.current.style.transform = 'translateY(' + progressToApply * 100 + '%)';
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var closing = this.state.closing;
      return /*#__PURE__*/React.createElement(RemoveScroll, null, /*#__PURE__*/React.createElement("div", {
        ref: this.wrapperRef
      }, /*#__PURE__*/React.createElement(Overlay, {
        style: {
          opacity: closing ? 0 : 1
        },
        onClick: this.animateClose,
        onEscape: this.animateClose
      }, /*#__PURE__*/React.createElement("div", {
        ref: this.menuRef,
        className: styles['BottomDrawer-content']
      }, children))));
    }
  }]);

  return BottomDrawer;
}(Component);

BottomDrawer.propTypes = {
  /** What to do on close */
  onClose: PropTypes.func
};
export default BottomDrawer;