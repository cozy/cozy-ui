import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// This component is inspired by https://material-ui.com/demos/menus/#menulist-composition
// Since the MuiMenu component doesn't allow another Popover positioning,
// we have to recompose the Menu component ourselves with basic Mui component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from "cozy-ui/transpiled/react/styles";
import MenuButton from "cozy-ui/transpiled/react/deprecated/Button";
var styles = {
  root: {
    position: 'relative'
  },
  paper: {
    '& hr': {
      margin: '8px 0',
      border: 0,
      borderTop: '1px solid var(--silver)'
    }
  }
};

var MuiMenu = /*#__PURE__*/function (_Component) {
  _inherits(MuiMenu, _Component);

  var _super = _createSuper(MuiMenu);

  function MuiMenu() {
    var _this;

    _classCallCheck(this, MuiMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: false,
      anchorEl: null
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (event) {
      var currentTarget = event.currentTarget;

      _this.setState(function (state) {
        return {
          anchorEl: currentTarget,
          open: !state.open
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.setState({
        open: false
      });
    });

    return _this;
  }

  _createClass(MuiMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          disabled = _this$props.disabled,
          buttonClassName = _this$props.buttonClassName,
          component = _this$props.component,
          children = _this$props.children,
          placement = _this$props.placement,
          classes = _this$props.classes;
      var _this$state = this.state,
          open = _this$state.open,
          anchorEl = _this$state.anchorEl;
      var offset = {
        offset: {
          offset: '0, 4'
        }
      };
      return /*#__PURE__*/React.createElement(ClickAwayListener, {
        onClickAway: this.close
      }, /*#__PURE__*/React.createElement("div", {
        className: classes.root
      }, !component ? /*#__PURE__*/React.createElement(MenuButton, {
        disabled: disabled,
        onClick: this.toggle,
        label: label,
        buttonClassName: buttonClassName
      }) : /*#__PURE__*/React.cloneElement(component, {
        disabled: disabled,
        onClick: this.toggle
      }), /*#__PURE__*/React.createElement(Popper, {
        open: open,
        anchorEl: anchorEl,
        transition: true,
        disablePortal: true,
        placement: placement,
        modifiers: offset
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
            placement = _ref.placement;
        return /*#__PURE__*/React.createElement(Grow, _extends({}, TransitionProps, {
          style: {
            transformOrigin: placement === 'bottom-end' ? 'center top' : 'center bottom'
          }
        }), /*#__PURE__*/React.createElement(Paper, {
          className: classes.paper
        }, /*#__PURE__*/React.createElement(MenuList, null, children)));
      })));
    }
  }]);

  return MuiMenu;
}(Component);

MuiMenu.defaultProps = {
  disabled: false,
  component: null,
  placement: 'bottom-end'
};
MuiMenu.propTypes = {
  /** Disables the menu */
  disabled: PropTypes.bool,

  /** Specifies a custom component for the opener */
  component: PropTypes.element,

  /** placement for the popover */
  placement: PropTypes.oneOf(['bottom-start', 'bottom-end'])
};
MuiMenu.MenuButton = MenuButton;
export default withStyles(styles, {
  name: 'MuiMenu'
})(MuiMenu);
export { MenuButton };