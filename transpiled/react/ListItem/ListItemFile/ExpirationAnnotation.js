import PropTypes from 'prop-types';
import React from 'react';
import { computeExpirationDate, isExpired, makeExpiredMessage, makeExpiresInMessage } from 'cozy-client/dist/models/paper';
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import withListItemLocales from "cozy-ui/transpiled/react/ListItem/hoc/withListItemLocales";

var ExpirationAnnotation = function ExpirationAnnotation(_ref) {
  var file = _ref.file;

  var _useI18n = useI18n(),
      lang = _useI18n.lang;

  if (isExpired(file)) {
    return /*#__PURE__*/React.createElement(Typography, {
      component: "span",
      variant: "inherit",
      color: "error"
    }, makeExpiredMessage({
      lang: lang
    }));
  }

  var expirationDate = computeExpirationDate(file);
  return /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    variant: "inherit",
    className: "u-warning"
  }, makeExpiresInMessage(expirationDate, {
    lang: lang
  }));
};

ExpirationAnnotation.propTypes = {
  file: PropTypes.object.isRequired
};
export default withListItemLocales(ExpirationAnnotation);