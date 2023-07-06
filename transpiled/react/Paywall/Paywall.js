import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { isMobileApp, isFlagshipApp } from 'cozy-device-helper';
import { useClient } from 'cozy-client';
import { buildPremiumLink } from 'cozy-client/dist/models/instance';
import useInstance from "cozy-ui/transpiled/react/helpers/useInstance";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import { IllustrationDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import Icon from "cozy-ui/transpiled/react/Icon";
import CozyUpgradeIcon from "cozy-ui/transpiled/react/Icons/CozyUpgrade";
import Button from "cozy-ui/transpiled/react/Buttons";
import Typography from "cozy-ui/transpiled/react/Typography";
import { makeType } from "cozy-ui/transpiled/react/Paywall/helpers";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import withPaywallLocales from "cozy-ui/transpiled/react/Paywall/locales/withPaywallLocales";
/**
 * Component with the core logic of the paywall, which is then declined in several variants to adapt to the user case
 */

var Paywall = function Paywall(_ref) {
  var variant = _ref.variant,
      onClose = _ref.onClose,
      isPublic = _ref.isPublic,
      contentInterpolation = _ref.contentInterpolation;
  var client = useClient();
  var instance = useInstance(client);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  if (instance.state === 'loading' && instance.state !== 'loaded') return /*#__PURE__*/React.createElement(IllustrationDialog, {
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
  var isMobileAppVersion = isMobileApp() || isFlagshipApp();
  var link = buildPremiumLink(instance);
  var type = makeType(instance, isPublic, link);

  var onAction = function onAction() {
    return type === 'premium' && !isMobileAppVersion ? window.open(link, 'self') : onClose();
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
      label: isMobileAppVersion ? t("mobileApp.action") : t("".concat(variant, "Paywall.").concat(type, ".action"))
    }),
    content: /*#__PURE__*/React.createElement(ReactMarkdown, {
      source: t("".concat(variant, "Paywall.").concat(type, ".content"), _objectSpread({}, contentInterpolation)),
      renderers: {
        paragraph: function paragraph(_ref2) {
          var children = _ref2.children;
          return /*#__PURE__*/React.createElement("p", {
            className: "u-mt-0"
          }, children);
        }
      }
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