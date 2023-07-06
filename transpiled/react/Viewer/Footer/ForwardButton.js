import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import PropTypes from 'prop-types';
import { useClient, useCapabilities, models } from 'cozy-client';
import { isIOS, isMobileApp } from 'cozy-device-helper';
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import Icon from "cozy-ui/transpiled/react/Icon";
import ReplyIcon from "cozy-ui/transpiled/react/Icons/Reply";
import ShareIosIcon from "cozy-ui/transpiled/react/Icons/ShareIos";
import Button from "cozy-ui/transpiled/react/Buttons";
import Alerter from "cozy-ui/transpiled/react/deprecated/Alerter";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";
import { exportFilesNative } from "cozy-ui/transpiled/react/Viewer/Footer/helpers";
var getSharingLink = models.sharing.getSharingLink;
var ForwardIcon = isIOS() ? ShareIosIcon : ReplyIcon;

var ForwardButton = function ForwardButton(_ref) {
  var file = _ref.file;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var client = useClient();

  var _useCapabilities = useCapabilities(client),
      capabilities = _useCapabilities.capabilities;

  var onFileOpen = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file) {
      var isFlatDomain, url, shareData;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!isMobileApp()) {
                _context.next = 11;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return exportFilesNative(client, [file]);

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              Alerter.info("Viewer.error.".concat(_context.t0), {
                fileMime: file.mime
              });

            case 9:
              _context.next = 23;
              break;

            case 11:
              _context.prev = 11;
              isFlatDomain = capabilities === null || capabilities === void 0 ? void 0 : capabilities.flat_subdomains;
              _context.next = 15;
              return getSharingLink(client, [file.id], isFlatDomain);

            case 15:
              url = _context.sent;
              shareData = {
                title: t('Viewer.share.title', {
                  name: file.name
                }),
                text: t('Viewer.share.text', {
                  name: file.name
                }),
                url: url
              };
              navigator.share(shareData);
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t1 = _context["catch"](11);
              Alerter.error('Viewer.share.error', {
                error: _context.t1
              });

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 6], [11, 20]]);
    }));

    return function onFileOpen(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      icon: ForwardIcon
    }),
    "data-testid": "openFileButton",
    label: t('Viewer.actions.forward'),
    onClick: function onClick() {
      return onFileOpen(file);
    }
  });
};

ForwardButton.propTypes = {
  file: PropTypes.object.isRequired
};
export { exportFilesNative };
export default withViewerLocales(ForwardButton);