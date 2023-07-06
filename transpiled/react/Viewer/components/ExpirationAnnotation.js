import React from 'react';
import PropTypes from 'prop-types';
import { models } from 'cozy-client';
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import { formatLocallyDistanceToNowStrict } from "cozy-ui/transpiled/react/I18n/format";
var _models$paper = models.paper,
    computeExpirationDate = _models$paper.computeExpirationDate,
    isExpired = _models$paper.isExpired;

var ExpirationAnnotation = function ExpirationAnnotation(_ref) {
  var file = _ref.file;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  if (isExpired(file)) {
    return /*#__PURE__*/React.createElement(Typography, {
      component: "span",
      variant: "inherit",
      color: "error"
    }, t('Viewer.panel.qualification.expired'));
  }

  var expirationDate = computeExpirationDate(file);
  return /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    variant: "inherit",
    className: "u-warning"
  }, t('Viewer.panel.qualification.expiresIn', {
    duration: formatLocallyDistanceToNowStrict(expirationDate)
  }));
};

ExpirationAnnotation.propTypes = {
  file: PropTypes.object.isRequired
};
export default ExpirationAnnotation;