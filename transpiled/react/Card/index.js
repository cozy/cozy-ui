import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["className", "inset", "tag"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
var styles = {
  "c-card": "styles__c-card___YgP7B",
  "c-card--inset": "styles__c-card--inset___2pofc"
};
export var Card = /*#__PURE__*/function (_PureComponent) {
  _inherits(Card, _PureComponent);

  var _super = _createSuper(Card);

  function Card() {
    _classCallCheck(this, Card);

    return _super.apply(this, arguments);
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          inset = _this$props.inset,
          Tag = _this$props.tag,
          rest = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Tag, _extends({
        className: cx(styles['c-card'], _defineProperty({}, styles['c-card--inset'], inset), className)
      }, rest));
    }
  }]);

  return Card;
}(PureComponent);
Card.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
  tag: PropTypes.node
};
Card.defaultProps = {
  tag: 'div'
};
export default Card;