import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import PropTypes from 'prop-types';
import { useClient } from 'cozy-client';
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import DownloadIcon from "cozy-ui/transpiled/react/Icons/Download";
import Button from "cozy-ui/transpiled/react/Buttons";
import Alerter from "cozy-ui/transpiled/react/deprecated/Alerter";

var DownloadButton = function DownloadButton(_ref) {
  var file = _ref.file,
      variant = _ref.variant;
  var client = useClient();

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var icon = /*#__PURE__*/React.createElement(Icon, {
    icon: DownloadIcon
  });
  var label = t('Viewer.download');

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return client.collection('io.cozy.files').download(file);

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              Alerter.info('Viewer.error.generic');

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function handleClick() {
      return _ref2.apply(this, arguments);
    };
  }();

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
    label: label,
    onClick: handleClick
  });
};

DownloadButton.propTypes = {
  file: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'iconButton', 'buttonIcon'])
};
DownloadButton.defaultProptypes = {
  variant: 'default'
};
export default DownloadButton;