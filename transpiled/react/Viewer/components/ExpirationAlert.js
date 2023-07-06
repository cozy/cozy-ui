import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useClient, models } from 'cozy-client';
import Alert from "cozy-ui/transpiled/react/Alert";
import Button from "cozy-ui/transpiled/react/Buttons";
import Link from "cozy-ui/transpiled/react/Link";
import Typography from "cozy-ui/transpiled/react/Typography";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import { formatLocallyDistanceToNowStrict } from "cozy-ui/transpiled/react/I18n/format";
var FILES_DOCTYPE = 'io.cozy.files';
var _models$paper = models.paper,
    computeExpirationDate = _models$paper.computeExpirationDate,
    computeExpirationNoticeLink = _models$paper.computeExpirationNoticeLink;

var ExpirationAlert = function ExpirationAlert(_ref) {
  var file = _ref.file;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var client = useClient();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isBusy = _useState2[0],
      setIsBusy = _useState2[1];

  var handleClose = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsBusy(true);
              _context.next = 3;
              return client.collection(FILES_DOCTYPE).updateMetadataAttribute(file.id, _objectSpread(_objectSpread({}, file.metadata), {}, {
                hideExpirationAlert: true
              }));

            case 3:
              setIsBusy(false);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClose() {
      return _ref2.apply(this, arguments);
    };
  }();

  var expirationDate = computeExpirationDate(file);
  var expirationNoticeLink = computeExpirationNoticeLink(file);
  return /*#__PURE__*/React.createElement(Alert, {
    severity: "warning",
    block: true,
    action: /*#__PURE__*/React.createElement(Button, {
      color: "warning",
      variant: "text",
      size: "small",
      busy: isBusy,
      label: t('Viewer.panel.expiration.dismiss'),
      onClick: handleClose
    }),
    className: "u-mt-1 u-mh-1"
  }, /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    variant: "inherit"
  }, /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    variant: "inherit"
  }, t('Viewer.panel.expiration.description', {
    duration: formatLocallyDistanceToNowStrict(expirationDate)
  })), expirationNoticeLink && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    variant: "inherit"
  }, ' : '), /*#__PURE__*/React.createElement(Link, {
    href: expirationNoticeLink,
    rel: "noreferrer",
    target: "_blank",
    className: "u-warning"
  }, new URL(expirationNoticeLink).hostname))));
};

ExpirationAlert.propTypes = {
  file: PropTypes.object.isRequired
};
export default withViewerLocales(ExpirationAlert);