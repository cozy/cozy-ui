import PropTypes from 'prop-types';
import React from 'react';
import { isExpired, isExpiringSoon } from 'cozy-client/dist/models/paper';
import ExpirationAnnotation from "cozy-ui/transpiled/react/ListItem/ListItemFile/ExpirationAnnotation";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";

var SecondaryText = function SecondaryText(_ref) {
  var _file$metadata, _file$metadata2;

  var secondary = _ref.secondary,
      file = _ref.file;

  var _useI18n = useI18n(),
      f = _useI18n.f;

  if (secondary) return secondary;
  var date = file !== null && file !== void 0 && (_file$metadata = file.metadata) !== null && _file$metadata !== void 0 && _file$metadata.datetime ? f(file === null || file === void 0 ? void 0 : (_file$metadata2 = file.metadata) === null || _file$metadata2 === void 0 ? void 0 : _file$metadata2.datetime, 'DD/MM/YYYY') : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, date ? date : '', (isExpired(file) || isExpiringSoon(file)) && /*#__PURE__*/React.createElement(React.Fragment, null, date ? ' · ' : '', /*#__PURE__*/React.createElement(ExpirationAnnotation, {
    file: file
  })));
};

SecondaryText.propTypes = {
  secondary: PropTypes.node,
  file: PropTypes.object
};
export default SecondaryText;