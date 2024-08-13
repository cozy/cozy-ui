import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useWebviewIntent } from 'cozy-intent';
import Button from "cozy-ui/transpiled/react/Buttons";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import ActionsItems, { actionsItemsComponentPropTypes } from "cozy-ui/transpiled/react/ActionsMenu/ActionsItems";
import { print } from "cozy-ui/transpiled/react/ActionsMenu/Actions/print";
import { makeActions } from "cozy-ui/transpiled/react/ActionsMenu/Actions/helpers";
var ActionComponent = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var action = _ref.action,
      variant = _ref.variant,
      onClick = _ref.onClick;
  var label = action.label,
      icon = action.icon;

  if (variant === 'button') {
    return /*#__PURE__*/React.createElement(Button, {
      ref: ref,
      variant: "secondary",
      "aria-label": label,
      label: /*#__PURE__*/React.createElement(Icon, {
        icon: icon
      }),
      onClick: onClick
    });
  }

  return /*#__PURE__*/React.createElement(IconButton, {
    ref: ref,
    className: "u-white",
    "aria-label": label,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon
  }));
});
ActionComponent.displayName = 'ActionComponent';
ActionComponent.propTypes = _objectSpread(_objectSpread({}, actionsItemsComponentPropTypes), {}, {
  variant: PropTypes.oneOf(['default', 'button'])
});

var PrintButton = function PrintButton(_ref2) {
  var file = _ref2.file,
      variant = _ref2.variant;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPrintAvailable = _useState2[0],
      setIsPrintAvailable = _useState2[1];

  var webviewIntent = useWebviewIntent();
  var isPDFDoc = file.mime === 'application/pdf';
  var showPrintButton = isPDFDoc && isPrintAvailable;
  useEffect(function () {
    var init = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _yield$webviewIntent$;

        var isAvailable;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return webviewIntent === null || webviewIntent === void 0 ? void 0 : webviewIntent.call('isAvailable', 'print');

              case 2:
                _context.t1 = _yield$webviewIntent$ = _context.sent;
                _context.t0 = _context.t1 !== null;

                if (!_context.t0) {
                  _context.next = 6;
                  break;
                }

                _context.t0 = _yield$webviewIntent$ !== void 0;

              case 6:
                if (!_context.t0) {
                  _context.next = 10;
                  break;
                }

                _context.t2 = _yield$webviewIntent$;
                _context.next = 11;
                break;

              case 10:
                _context.t2 = true;

              case 11:
                isAvailable = _context.t2;
                setIsPrintAvailable(isAvailable);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function init() {
        return _ref3.apply(this, arguments);
      };
    }();

    init();
  }, [webviewIntent]);
  if (!showPrintButton) return null;
  var actions = makeActions([print]);
  return /*#__PURE__*/React.createElement(ActionsItems, {
    docs: [file],
    actions: actions,
    component: ActionComponent,
    variant: variant
  });
};

PrintButton.propTypes = {
  file: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['default', 'button'])
};
PrintButton.defaultProps = {
  variant: 'default'
};
export default PrintButton;