import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { forwardRef } from 'react';
import logger from 'cozy-logger';
import { fetchBlobFileById, isFile } from 'cozy-client/dist/models/file';
import { makeBase64FromFile, makePdfBlob } from "cozy-ui/transpiled/react/ActionsMenu/Actions/helpers";
import PrinterIcon from "cozy-ui/transpiled/react/Icons/Printer";
import { getActionsI18n } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import Icon from "cozy-ui/transpiled/react/Icon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
export var print = function print() {
  var _getActionsI18n = getActionsI18n(),
      t = _getActionsI18n.t;

  var icon = PrinterIcon;
  var label = t('print');
  return {
    name: 'print',
    icon: icon,
    label: label,
    disabled: function disabled(docs) {
      return docs.length === 0;
    },
    displayCondition: function displayCondition(docs) {
      return docs.every(function (doc) {
        return isFile(doc);
      });
    },
    action: function () {
      var _action = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(docs, _ref) {
        var client, webviewIntent, isSingleDoc, firstDoc, blob, base64, docUrl, _blob;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = _ref.client, webviewIntent = _ref.webviewIntent;
                isSingleDoc = docs.length === 1;
                firstDoc = docs[0];
                _context.prev = 3;

                if (!webviewIntent) {
                  _context.next = 19;
                  break;
                }

                if (!isSingleDoc) {
                  _context.next = 11;
                  break;
                }

                _context.next = 8;
                return fetchBlobFileById(client, firstDoc._id);

              case 8:
                _context.t0 = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.next = 13;
                return makePdfBlob(client, docs);

              case 13:
                _context.t0 = _context.sent;

              case 14:
                blob = _context.t0;
                _context.next = 17;
                return makeBase64FromFile(blob);

              case 17:
                base64 = _context.sent;
                return _context.abrupt("return", webviewIntent.call('print', base64));

              case 19:
                // not in flagship app
                docUrl = '';

                if (!isSingleDoc) {
                  _context.next = 26;
                  break;
                }

                _context.next = 23;
                return client.collection('io.cozy.files').getDownloadLinkById(firstDoc._id, firstDoc.name);

              case 23:
                docUrl = _context.sent;
                _context.next = 30;
                break;

              case 26:
                _context.next = 28;
                return makePdfBlob(client, docs);

              case 28:
                _blob = _context.sent;
                docUrl = URL.createObjectURL(_blob);

              case 30:
                /*
                  We need to write window.open in a setTimeout because
                  Safari does not allow window.open in an async function.
                */
                setTimeout(function () {
                  window.open(docUrl, '_blank');
                });
                _context.next = 36;
                break;

              case 33:
                _context.prev = 33;
                _context.t1 = _context["catch"](3);
                logger.error("Error trying to print document ".concat(webviewIntent ? 'inside flagship appp' : 'outside flagship app', ": ").concat(JSON.stringify(_context.t1)));

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 33]]);
      }));

      function action(_x, _x2) {
        return _action.apply(this, arguments);
      }

      return action;
    }(),
    Component: /*#__PURE__*/forwardRef(function (props, ref) {
      return /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, props, {
        ref: ref
      }), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
        icon: icon
      })), /*#__PURE__*/React.createElement(ListItemText, {
        primary: label
      }));
    })
  };
};