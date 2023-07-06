import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PermissionDialog from "cozy-ui/transpiled/react/CozyDialogs/PermissionDialog";
import Buttons from "cozy-ui/transpiled/react/Buttons";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import Typography from "cozy-ui/transpiled/react/Typography";
import { useClient } from 'cozy-client';
import CozyAuthentificationIcon from "cozy-ui/transpiled/react/Icons/CozyAuthentification";
import PasswordField from "cozy-ui/transpiled/react/PasswordField";
import withSpecificDialogsLocales from "cozy-ui/transpiled/react/CozyDialogs/SpecificDialogs/withSpecificDialogsLocales";
/**
 * Dialog used to authenticate a user in the cozy system.
 * The authentication logic is implemented in the applications.
 */

var AuthentificationDialog = function AuthentificationDialog(_ref) {
  var onClose = _ref.onClose,
      onSubmit = _ref.onSubmit,
      isLoading = _ref.isLoading,
      isOIDC = _ref.isOIDC,
      error = _ref.error;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var client = useClient();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      password = _useState2[0],
      setPassword = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSubmit(password);
  };

  var onPasswordChange = function onPasswordChange(e) {
    setPassword(e.currentTarget.value);
  };

  var passphraseResetUrl = useMemo(function () {
    var url = new URL('/auth/passphrase_reset', client.getStackClient().uri);
    return url.href;
  }, [client]);
  return /*#__PURE__*/React.createElement(PermissionDialog, {
    open: true,
    onClose: onClose,
    title: t("authentification-dialog.".concat(isOIDC ? 'title-oidc' : 'title')),
    icon: CozyAuthentificationIcon,
    content: /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "body1",
      className: "u-ta-center"
    }, t('authentification-dialog.subtitle')), /*#__PURE__*/React.createElement(PasswordField, {
      autoFocus: true,
      disabled: isLoading,
      value: password,
      onChange: onPasswordChange,
      className: "u-mv-1",
      label: t("authentification-dialog.".concat(isOIDC ? 'label-oidc' : 'label')),
      error: Boolean(error),
      helperText: error && t("authentification-dialog.errors.".concat(error)),
      fullWidth: true,
      required: true
    }), /*#__PURE__*/React.createElement(Typography, {
      variant: "body1",
      component: "a",
      color: "primary",
      href: passphraseResetUrl,
      className: "u-link"
    }, t('authentification-dialog.forgotten-password'))),
    actions: /*#__PURE__*/React.createElement(Buttons, {
      busy: isLoading,
      disabled: isLoading || password.length === 0,
      onClick: handleSubmit,
      label: t('authentification-dialog.unlock'),
      fullWidth: true
    })
  });
};

AuthentificationDialog.defaultProps = {
  isOIDC: false
};
AuthentificationDialog.propTypes = {
  /** A function call on clicking the close button */
  onClose: PropTypes.func,

  /** A function call on submitting the form with the password entered */
  onSubmit: PropTypes.func,

  /** Waiting status, e.g. processing of form submission */
  isLoading: PropTypes.bool,

  /** Show specific wording for OIDC */
  isOIDC: PropTypes.bool,

  /** Error key to display a message */
  error: PropTypes.string
};
export default withSpecificDialogsLocales(AuthentificationDialog);