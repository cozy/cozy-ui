import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import CozyLocation from "cozy-ui/transpiled/react/CozyDialogs/SpecificDialogs/icons/CozyLocation";
import withSpecificDialogsLocales from "cozy-ui/transpiled/react/CozyDialogs/SpecificDialogs/withSpecificDialogsLocales";
import { IllustrationDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import Button from "cozy-ui/transpiled/react/Buttons";
import Icon from "cozy-ui/transpiled/react/Icon";
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";

var createStyles = function createStyles() {
  return {
    typography: {
      whiteSpace: 'pre-line'
    }
  };
};

var AllowLocationDialog = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var onClose = _ref.onClose,
      onAllow = _ref.onAllow,
      description = _ref.description;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var styles = createStyles();
  return /*#__PURE__*/React.createElement(IllustrationDialog, {
    open: true,
    ref: ref,
    size: "small",
    onClose: onClose,
    title: /*#__PURE__*/React.createElement("div", {
      className: "u-flex u-flex-column u-flex-items-center"
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: CozyLocation,
      width: 128,
      height: 128
    }), /*#__PURE__*/React.createElement(Typography, {
      variant: "h3",
      className: "u-ta-center"
    }, t('allow-location-dialog.title'))),
    content: /*#__PURE__*/React.createElement("div", {
      className: "u-ta-center"
    }, /*#__PURE__*/React.createElement(Typography, {
      gutterBottom: true,
      variant: "body1",
      color: "textPrimary",
      style: styles.typography
    }, description || t('allow-location-dialog.description'))),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      label: t('cancel'),
      onClick: onClose
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      label: t('allow'),
      onClick: onAllow
    }))
  });
});
AllowLocationDialog.propTypes = {
  /** A function called when clicking the close button */
  onClose: PropTypes.func,

  /** A function called when clicking the allow button */
  onAllow: PropTypes.func,

  /** A custom description */
  description: PropTypes.string
};
AllowLocationDialog.displayName = 'AllowLocationDialog';
export default withSpecificDialogsLocales(AllowLocationDialog);