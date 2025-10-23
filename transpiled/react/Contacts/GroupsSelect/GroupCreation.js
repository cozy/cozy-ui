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

import classNames from 'classnames';
import React, { Component } from 'react';
var styles = {
  "container": "styles__container___1ById",
  "contact-group-creation-divider": "styles__contact-group-creation-divider___3txmu",
  "contact-group-create-div-icon": "styles__contact-group-create-div-icon___aUC-_"
};
import Icon from "cozy-ui/transpiled/react/Icon";
import PlusIcon from "cozy-ui/transpiled/react/Icons/Plus";
import Input from "cozy-ui/transpiled/react/legacy/Input";
import { translate } from "cozy-ui/transpiled/react/providers/I18n";

var normalizeGroupData = function normalizeGroupData(name) {
  return {
    name: name,
    metadata: {
      version: 1
    }
  };
};

var GroupCreation = /*#__PURE__*/function (_Component) {
  _inherits(GroupCreation, _Component);

  var _super = _createSuper(GroupCreation);

  function GroupCreation(props) {
    var _this;

    _classCallCheck(this, GroupCreation);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isInputDisplayed: false,
      groupName: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState({
        isInputDisplayed: !_this.state.isInputDisplayed
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      e.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "keyPress", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.keyCode == 13) {
                  _this.props.createGroup(normalizeGroupData(e.target.value));

                  _this.textInput.current.value = '';
                }

                e.stopPropagation();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      e.stopPropagation();
    });

    _this.textInput = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(GroupCreation, [{
    key: "render",
    value: function render() {
      var isInputDisplayed = this.state.isInputDisplayed;
      var t = this.props.t;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: styles['contact-group-creation-divider']
      }), /*#__PURE__*/React.createElement("div", {
        className: classNames('u-ml-half', 'u-mr-half', 'u-c-pointer', styles['container'])
      }, !isInputDisplayed && /*#__PURE__*/React.createElement("div", {
        onClick: this.handleClick,
        className: styles['contact-group-create-div-icon']
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: PlusIcon
      }), /*#__PURE__*/React.createElement("span", {
        className: "u-pl-half"
      }, t('Contacts.GroupsSelect.create'))), isInputDisplayed && /*#__PURE__*/React.createElement(Input, {
        id: "createGroupInput",
        ref: this.textInput,
        type: "text",
        placeholder: t('Contacts.GroupsSelect.name'),
        onClick: this.onClick,
        onFocus: this.onFocus,
        onKeyDown: this.keyPress,
        size: "tiny",
        autoComplete: "off",
        autoFocus: true,
        onMouseDown: this.onMouseDown
      })));
    }
  }]);

  return GroupCreation;
}(Component);

export default translate()(GroupCreation);