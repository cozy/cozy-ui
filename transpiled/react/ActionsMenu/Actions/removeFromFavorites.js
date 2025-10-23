import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _extends from "@babel/runtime/helpers/extends";
import _regeneratorRuntime from "@babel/runtime/regenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React, { forwardRef } from 'react';
import { splitFilename } from 'cozy-client/dist/models/file';
import { getActionsI18n } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import Icon from "cozy-ui/transpiled/react/Icon";
import StarIcon from "cozy-ui/transpiled/react/Icons/Star";
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
  Component.displayName = 'removeFromFavorites';
  return Component;
};

export var removeFromFavorites = function removeFromFavorites(_ref) {
  var showAlert = _ref.showAlert;

  var _getActionsI18n = getActionsI18n(),
      t = _getActionsI18n.t;

  var icon = StarIcon;
  var label = t('favorites.remove.label');
  return {
    name: 'removeFromFavorites',
    icon: icon,
    label: label,
    displayCondition: function displayCondition(docs) {
      return docs.length > 0 && docs.every(function (doc) {
        var _doc$cozyMetadata;

        return (_doc$cozyMetadata = doc.cozyMetadata) === null || _doc$cozyMetadata === void 0 ? void 0 : _doc$cozyMetadata.favorite;
      });
    },
    Component: makeComponent(label, icon),
    action: function () {
      var _action = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(docs, _ref2) {
        var client, _iterator, _step, doc, _splitFilename, filename;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = _ref2.client;
                _context.prev = 1;
                _iterator = _createForOfIteratorHelper(docs);
                _context.prev = 3;

                _iterator.s();

              case 5:
                if ((_step = _iterator.n()).done) {
                  _context.next = 11;
                  break;
                }

                doc = _step.value;
                _context.next = 9;
                return client.save(_objectSpread(_objectSpread({}, doc), {}, {
                  cozyMetadata: _objectSpread(_objectSpread({}, doc.cozyMetadata), {}, {
                    favorite: false
                  })
                }));

              case 9:
                _context.next = 5;
                break;

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);

                _iterator.e(_context.t0);

              case 16:
                _context.prev = 16;

                _iterator.f();

                return _context.finish(16);

              case 19:
                _splitFilename = splitFilename(docs[0]), filename = _splitFilename.filename;
                showAlert({
                  message: t('favorites.success.remove', {
                    filename: filename,
                    smart_count: docs.length
                  }),
                  severity: 'success'
                });
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t1 = _context["catch"](1);
                showAlert({
                  message: t('favorites.error'),
                  severity: 'error'
                });

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 23], [3, 13, 16, 19]]);
      }));

      function action(_x, _x2) {
        return _action.apply(this, arguments);
      }

      return action;
    }()
  };
};