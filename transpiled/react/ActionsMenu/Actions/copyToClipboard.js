import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _extends from "@babel/runtime/helpers/extends";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { forwardRef } from 'react';
import { getActionsI18n } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import Icon from "cozy-ui/transpiled/react/Icon";
import CopyIcon from "cozy-ui/transpiled/react/Icons/Copy";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";

var makeComponent = function makeComponent(label, icon) {
  var Component = /*#__PURE__*/forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
      ref: ref
    }), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
      icon: icon
    })), /*#__PURE__*/React.createElement(ListItemText, {
      primary: label
    }));
  });
  Component.displayName = 'copyToClipboard';
  return Component;
};

export var copyToClipboard = function copyToClipboard() {
  var _getActionsI18n = getActionsI18n(),
      t = _getActionsI18n.t;

  var icon = CopyIcon;
  var label = t('copyToClipboard.copy');
  return {
    name: 'copyToClipboard',
    icon: icon,
    label: label,
    Component: makeComponent(label, icon),
    action: function () {
      var _action = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_, _ref) {
        var showAlert, copyValue;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                showAlert = _ref.showAlert, copyValue = _ref.copyValue;

                if (copyValue) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", false);

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return navigator.clipboard.writeText(copyValue);

              case 6:
                showAlert({
                  message: t('copyToClipboard.success'),
                  severity: 'success',
                  variant: 'filled'
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                showAlert({
                  message: t('copyToClipboard.error'),
                  severity: 'error',
                  variant: 'filled'
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 9]]);
      }));

      function action(_x, _x2) {
        return _action.apply(this, arguments);
      }

      return action;
    }()
  };
};