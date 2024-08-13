import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IllustrationDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import Link from "cozy-ui/transpiled/react/Link";
import Typography from "cozy-ui/transpiled/react/Typography";
import DefaultQRCode from "cozy-ui/transpiled/react/CozyDialogs/SpecificDialogs/icons/QRCodeInstallFlagshipAppDialog.png";
import appStoreIcon from "cozy-ui/transpiled/react/CozyDialogs/SpecificDialogs/icons/appstore.png";
import playStoreIcon from "cozy-ui/transpiled/react/CozyDialogs/SpecificDialogs/icons/playstore.png";
import withSpecificDialogsLocales from "cozy-ui/transpiled/react/CozyDialogs/SpecificDialogs/withSpecificDialogsLocales";
var InstallFlagshipAppDialog = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var onClose = _ref.onClose,
      playStoreUrl = _ref.playStoreUrl,
      appStoreUrl = _ref.appStoreUrl,
      QRCode = _ref.QRCode;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement(IllustrationDialog, {
    open: true,
    ref: ref,
    size: "small",
    onClose: onClose,
    componentsProps: {
      dialogTitle: {
        className: 'u-pt-2-half'
      }
    },
    title: /*#__PURE__*/React.createElement(Link, {
      href: "https://cozy.io/download",
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/React.createElement("img", {
      src: QRCode,
      width: "100%",
      alt: "",
      "aria-hidden": true
    }), /*#__PURE__*/React.createElement("span", {
      className: "u-visuallyhidden"
    }, t('install-flagship-app-dialog.a11n'))),
    content: /*#__PURE__*/React.createElement("div", {
      className: "u-ta-center"
    }, /*#__PURE__*/React.createElement(Typography, {
      gutterBottom: true,
      variant: "h3",
      color: "textPrimary"
    }, t('install-flagship-app-dialog.title')), /*#__PURE__*/React.createElement(Typography, {
      color: "textSecondary",
      className: "u-ta-center",
      dangerouslySetInnerHTML: {
        __html: t('install-flagship-app-dialog.text', {
          androidUrl: playStoreUrl,
          androidIconSrc: playStoreIcon,
          iosUrl: appStoreUrl,
          iosIconSrc: appStoreIcon
        })
      }
    }))
  });
});
InstallFlagshipAppDialog.propTypes = {
  onClose: PropTypes.func,

  /** Url to the Play Store link in the dialog description */
  playStoreUrl: PropTypes.string,

  /** Url to the App Store link in the dialog description */
  appStoreUrl: PropTypes.string,

  /** An image representing a QR code to a link where you can download the flagship app */
  QRCode: PropTypes.any
};
InstallFlagshipAppDialog.defaultProps = {
  playStoreUrl: 'https://play.google.com/store/apps/details?id=io.cozy.flagship.mobile',
  appStoreUrl: 'https://apps.apple.com/app/my-cozy/id1600636174',
  QRCode: DefaultQRCode
};
InstallFlagshipAppDialog.displayName = 'InstallFlagshipAppDialog';
export default withSpecificDialogsLocales(InstallFlagshipAppDialog);