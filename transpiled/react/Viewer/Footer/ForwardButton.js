import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import PropTypes from 'prop-types';
import { useClient } from 'cozy-client';
import { isIOS, isMobileApp } from 'cozy-device-helper';
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import ReplyIcon from "cozy-ui/transpiled/react/Icons/Reply";
import ShareIosIcon from "cozy-ui/transpiled/react/Icons/ShareIos";
import Button from "cozy-ui/transpiled/react/Buttons";
import Alerter from "cozy-ui/transpiled/react/deprecated/Alerter";
import { exportFilesNative } from "cozy-ui/transpiled/react/Viewer/Footer/helpers";
import { getSharingLink } from 'cozy-client/dist/models/sharing';
var ForwardIcon = isIOS() ? ShareIosIcon : ReplyIcon;

var ForwardButton = function ForwardButton(_ref) {
  var file = _ref.file,
      variant = _ref.variant,
      onClick = _ref.onClick;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var client = useClient();
  var icon = /*#__PURE__*/React.createElement(Icon, {
    icon: ForwardIcon
  });
  var label = t('Viewer.actions.forward');

  var onFileOpen = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file) {
      var url, shareData;
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
              _context.next = 22;
              break;

            case 11:
              _context.prev = 11;
              _context.next = 14;
              return getSharingLink(client, [file.id]);

            case 14:
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
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t1 = _context["catch"](11);
              Alerter.error('Viewer.share.error', {
                error: _context.t1
              });

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 6], [11, 19]]);
    }));

    return function onFileOpen(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleClick = function handleClick() {
    if (onClick) onClick();else onFileOpen(file);
  };

  if (variant === 'iconButton') {
    return /*#__PURE__*/React.createElement(IconButton, {
      className: "u-white",
      "aria-label": label,
      onClick: handleClick
    }, icon);
  }

  if (variant === 'buttonIcon') {
    return /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      label: icon,
      "aria-label": label,
      onClick: handleClick
    });
  }

  return /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    startIcon: icon,
    "data-testid": "openFileButton",
    label: label,
    onClick: handleClick
  });
};

ForwardButton.propTypes = {
  file: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['default', 'iconButton', 'buttonIcon']),
  onClick: PropTypes.func
};
ForwardButton.defaultProptypes = {
  variant: 'default'
};
export { exportFilesNative };
export default ForwardButton;