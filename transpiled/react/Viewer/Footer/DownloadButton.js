import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import PropTypes from 'prop-types';
import { useClient } from 'cozy-client';
import Icon from "cozy-ui/transpiled/react/Icon";
import DownloadIcon from "cozy-ui/transpiled/react/Icons/Download";
import Button from "cozy-ui/transpiled/react/Buttons";
import Alerter from "cozy-ui/transpiled/react/deprecated/Alerter";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";

var DownloadButton = function DownloadButton(_ref) {
  var file = _ref.file,
      t = _ref.t;
  var client = useClient();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file) {
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

    return function handleClick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      icon: DownloadIcon
    }),
    label: t('Viewer.download'),
    onClick: function onClick() {
      return handleClick(file);
    }
  });
};

DownloadButton.propTypes = {
  file: PropTypes.object
};
export default withViewerLocales(DownloadButton);