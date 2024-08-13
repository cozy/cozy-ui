import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "children"],
    _excluded2 = ["placeholder", "onChange", "value", "listPlaceholder", "listEmptyMessage", "addContactLabel", "initialOpen"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { models } from 'cozy-client';
var getDisplayName = models.contact.getDisplayName;
import ContactsListModal from "cozy-ui/transpiled/react/ContactsListModal";
var styles = {
  "SelectControl": "styles__SelectControl___2OxoO",
  "is-error": "styles__is-error___2s-d5"
};

var SelectControl = function SelectControl(props) {
  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cx(styles.SelectControl, className)
  }, rest), children);
};

var ContactPicker = /*#__PURE__*/function (_React$Component) {
  _inherits(ContactPicker, _React$Component);

  var _super = _createSuper(ContactPicker);

  function ContactPicker(props, context) {
    var _this;

    _classCallCheck(this, ContactPicker);

    _this = _super.call(this, props, context);
    _this.state = {
      opened: _this.props.initialOpen
    };
    _this.open = _this.open.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ContactPicker, [{
    key: "open",
    value: function open() {
      this.setState({
        opened: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        opened: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          onChange = _this$props.onChange,
          value = _this$props.value,
          listPlaceholder = _this$props.listPlaceholder,
          listEmptyMessage = _this$props.listEmptyMessage,
          addContactLabel = _this$props.addContactLabel,
          initialOpen = _this$props.initialOpen,
          rest = _objectWithoutProperties(_this$props, _excluded2);

      var opened = this.state.opened;

      var handleChange = function handleChange(contact) {
        onChange(contact);
      };

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, _extends({}, rest, {
        onClick: this.open
      }), value ? getDisplayName(value) : placeholder), opened && /*#__PURE__*/React.createElement(ContactsListModal, {
        dismissAction: this.close,
        onItemClick: handleChange,
        placeholder: listPlaceholder,
        emptyMessage: listEmptyMessage,
        addContactLabel: addContactLabel
      }));
    }
  }]);

  return ContactPicker;
}(React.Component);

ContactPicker.defaultProps = {
  initialOpen: false
};
ContactPicker.propTypes = {
  initialOpen: PropTypes.bool
};
export default ContactPicker;