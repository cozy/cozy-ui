import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["className"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
var styles = {
  "c-inline-card": "styles__c-inline-card___1a8Og"
};
/**
 * @deprecated Please use a `<Paper elevation={1} className='u-dib' />` instead
 */

export var InlineCard = /*#__PURE__*/function (_PureComponent) {
  _inherits(InlineCard, _PureComponent);

  var _super = _createSuper(InlineCard);

  function InlineCard() {
    _classCallCheck(this, InlineCard);

    return _super.apply(this, arguments);
  }

  _createClass(InlineCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement("span", _extends({
        className: cx(styles['c-inline-card'], className)
      }, rest));
    }
  }]);

  return InlineCard;
}(PureComponent);
InlineCard.propTypes = {
  className: PropTypes.string
};
export default InlineCard;