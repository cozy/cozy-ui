import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import _regeneratorRuntime from "@babel/runtime/regenerator";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useInstanceInfo } from 'cozy-client';
import { buildPremiumLink } from 'cozy-client/dist/models/instance';
import { isFlagshipApp } from 'cozy-device-helper';
import flag from 'cozy-flags';
import { useWebviewIntent } from 'cozy-intent';
import { makeType } from "cozy-ui/transpiled/react/Paywall/helpers";
import withPaywallLocales from "cozy-ui/transpiled/react/Paywall/locales/withPaywallLocales";
import Button from "cozy-ui/transpiled/react/Buttons";
import { IllustrationDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import Icon from "cozy-ui/transpiled/react/Icon";
import CozyUpgradeIcon from "cozy-ui/transpiled/react/Icons/CozyUpgrade";
import Markdown from "cozy-ui/transpiled/react/Markdown";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
/**
 * Component with the core logic of the paywall, which is then declined in several variants to adapt to the user case
 */

var Paywall = function Paywall(_ref) {
  var variant = _ref.variant,
      onClose = _ref.onClose,
      isPublic = _ref.isPublic,
      contentInterpolation = _ref.contentInterpolation;
  var instanceInfo = useInstanceInfo();

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var webviewIntent = useWebviewIntent();

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      isFlagshipAppIapAvailable = _useState2[0],
      setFlagshipAppIapAvailable = _useState2[1];

  useEffect(function () {
    var fetchIapAvailability = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _yield$webviewIntent$;

        var isAvailable;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return webviewIntent === null || webviewIntent === void 0 ? void 0 : webviewIntent.call('isAvailable', 'iap');

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
                _context.t2 = false;

              case 11:
                isAvailable = _context.t2;
                setFlagshipAppIapAvailable(isAvailable);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchIapAvailability() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchIapAvailability();
  }, [webviewIntent]);
  if (!instanceInfo.isLoaded) return /*#__PURE__*/React.createElement(IllustrationDialog, {
    open: true,
    size: "small",
    content: /*#__PURE__*/React.createElement("div", {
      className: "u-h-5"
    }, /*#__PURE__*/React.createElement(Spinner, {
      size: "xxlarge",
      noMargin: true,
      middle: true
    })),
    onClose: onClose
  });
  var canOpenPremiumLink = !isFlagshipApp() || isFlagshipApp() && !!flag('flagship.iap.enabled') && isFlagshipAppIapAvailable;
  var link = buildPremiumLink(instanceInfo);
  var type = makeType(instanceInfo, isPublic, link);

  var onAction = function onAction() {
    return type === 'premium' && canOpenPremiumLink ? window.open(link, '_self') : onClose();
  };

  return /*#__PURE__*/React.createElement(IllustrationDialog, {
    open: true,
    size: "small",
    actionsLayout: "column",
    title: /*#__PURE__*/React.createElement("div", {
      className: "u-flex u-flex-column u-flex-items-center"
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: CozyUpgradeIcon,
      width: 128,
      height: 128
    }), /*#__PURE__*/React.createElement(Typography, {
      variant: "h3",
      className: "u-mt-1"
    }, t("".concat(variant, "Paywall.").concat(type, ".title")))),
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: onAction,
      label: isFlagshipAppIapAvailable === null ? t("action.loading") : canOpenPremiumLink ? t("".concat(variant, "Paywall.").concat(type, ".action")) : t("action.withoutIAP"),
      busy: isFlagshipAppIapAvailable === null
    }),
    content: /*#__PURE__*/React.createElement(Markdown, {
      content: t("".concat(variant, "Paywall.").concat(type, ".content"), _objectSpread({}, contentInterpolation))
    }),
    onClose: onClose
  });
};

Paywall.propTypes = {
  /** Type of paywall */
  variant: PropTypes.string.isRequired,

  /** Callback used when the user close the paywall */
  onClose: PropTypes.func.isRequired,

  /** Whether paywall is display in a public context */
  isPublic: PropTypes.bool,

  /** Translation interpolation for the content of the paywall */
  contentInterpolation: PropTypes.object
};
Paywall.defaultProps = {
  isPublic: false,
  contentInterpolation: {}
};
export default withPaywallLocales(Paywall);