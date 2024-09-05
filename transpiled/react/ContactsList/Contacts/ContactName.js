import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from "cozy-ui/transpiled/react/Typography";

var ContactName = function ContactName(_ref) {
  var displayName = _ref.displayName,
      familyName = _ref.familyName;
  var namesToDisplay = displayName && displayName.split(' ') || [];
  return /*#__PURE__*/React.createElement(Typography, {
    "data-testid": "ContactName" // used by a test in cozy-contacts
    ,
    className: "u-ml-1",
    variant: "body1",
    noWrap: true,
    gutterBottom: true,
    display: "inline"
  }, namesToDisplay.map(function (name, key) {
    return /*#__PURE__*/React.createElement("span", {
      key: "display-".concat(key),
      className: cx({
        'u-fw-bold': name === familyName
      })
    }, name, "\xA0");
  }));
};

ContactName.propTypes = {
  displayName: PropTypes.string,
  familyName: PropTypes.string
};
ContactName.defaultProps = {
  displayName: ''
};
export default ContactName;