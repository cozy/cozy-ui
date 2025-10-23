import PropTypes from 'prop-types';
import React from 'react';
import { TableCell } from "cozy-ui/transpiled/react/deprecated/Table";
var styles = {
  "contact": "styles__contact___169nD",
  "contact--clickable": "styles__contact--clickable___1GLTM",
  "contact-phone": "styles__contact-phone___1sA_m",
  "contact-cozyurl": "styles__contact-cozyurl___3kBp5",
  "contact-email": "styles__contact-email___3n3q2",
  "contact-myself": "styles__contact-myself___1aOdx",
  "contact-identity": "styles__contact-identity___mL3IJ",
  "contact-firstname": "styles__contact-firstname___2GPEr",
  "contact-avatar": "styles__contact-avatar___3lZPs"
};

var ContactEmail = function ContactEmail(_ref) {
  var email = _ref.email;
  return /*#__PURE__*/React.createElement(TableCell, {
    "data-testid": "ContactEmail" // used by a test in cozy-contacts
    ,
    className: "".concat(styles['contact-email'], " u-ellipsis u-p-0")
  }, email);
};

ContactEmail.propTypes = {
  email: PropTypes.string
};
ContactEmail.defaultProps = {
  email: '—'
};
export default ContactEmail;