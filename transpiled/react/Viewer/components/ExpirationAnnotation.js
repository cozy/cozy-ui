import React from 'react';
import PropTypes from 'prop-types';
import { models } from 'cozy-client';
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
var _models$paper = models.paper,
    computeExpirationDate = _models$paper.computeExpirationDate,
    isExpired = _models$paper.isExpired,
    makeExpiredMessage = _models$paper.makeExpiredMessage,
    makeExpiresInMessage = _models$paper.makeExpiresInMessage;

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
export default ExpirationAnnotation;