import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
var _excluded = ["className"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AppIcon from "cozy-ui/transpiled/react/AppIcon";
import Icon from "cozy-ui/transpiled/react/Icon";
import { withClient } from 'cozy-client';
import { AppDoctype } from "cozy-ui/transpiled/react/proptypes";
import KeychainIcon from "cozy-ui/transpiled/react/Icons/Keychain";

var CipherIcon = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(CipherIcon, _React$PureComponent);

  var _super = _createSuper(CipherIcon);

  function CipherIcon(props) {
    var _this;

    _classCallCheck(this, CipherIcon);

    _this = _super.call(this, props);
    _this.fetchIcon = _this.fetchIcon.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CipherIcon, [{
    key: "fetchIcon",
    value: function fetchIcon() {
      var _this$props = this.props,
          client = _this$props.client,
          konnector = _this$props.konnector;
      return client.getStackClient().getIconURL({
        type: 'konnector',
        slug: konnector.slug || konnector,
        appData: konnector
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          rest = _objectWithoutProperties(_this$props2, _excluded);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cx('u-dib u-pos-relative', className)
      }, rest), /*#__PURE__*/React.createElement(Icon, {
        icon: KeychainIcon,
        size: 32
      }), /*#__PURE__*/React.createElement("div", {
        className: "u-pos-absolute u-right-0 u-bottom-0"
      }, /*#__PURE__*/React.createElement(AppIcon, {
        fetchIcon: this.fetchIcon,
        className: "u-w-1 u-h-1"
      })));
    }
  }]);

  return CipherIcon;
}(React.PureComponent);

CipherIcon.propTypes = {
  konnector: PropTypes.oneOfType([AppDoctype, PropTypes.string]).isRequired
};
export default withClient(CipherIcon);