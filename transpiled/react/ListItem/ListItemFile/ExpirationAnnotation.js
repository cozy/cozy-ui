import React from 'react';
import PropTypes from 'prop-types';
import { computeExpirationDate, isExpired } from 'cozy-client/dist/models/paper';
import Typography from "cozy-ui/transpiled/react/Typography";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import { formatLocallyDistanceToNowStrict } from "cozy-ui/transpiled/react/I18n/format";
import withListItemLocales from "cozy-ui/transpiled/react/ListItem/hoc/withListItemLocales";

var ExpirationAnnotation = function ExpirationAnnotation(_ref) {
  var file = _ref.file;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  if (isExpired(file)) {
    return /*#__PURE__*/React.createElement(Typography, {
      component: "span",
      variant: "inherit",
      color: "error"
    }, t('ListItem.file.expired'));
  }

  var expirationDate = computeExpirationDate(file);
  return /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    variant: "inherit",
    className: "u-warning"
  }, t('ListItem.file.expiresIn', {
    duration: formatLocallyDistanceToNowStrict(expirationDate)
  }));
};

ExpirationAnnotation.propTypes = {
  file: PropTypes.object.isRequired
};
export default withListItemLocales(ExpirationAnnotation);