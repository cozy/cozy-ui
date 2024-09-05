import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "contact", "onClick", "divider"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { models } from 'cozy-client';
import ContactCozy from "cozy-ui/transpiled/react/ContactsList/Contacts/ContactCozy";
import ContactEmail from "cozy-ui/transpiled/react/ContactsList/Contacts/ContactEmail";
import ContactIdentity from "cozy-ui/transpiled/react/ContactsList/Contacts/ContactIdentity";
import ContactPhone from "cozy-ui/transpiled/react/ContactsList/Contacts/ContactPhone";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
var _models$contact = models.contact,
    getPrimaryCozy = _models$contact.getPrimaryCozy,
    getPrimaryPhone = _models$contact.getPrimaryPhone,
    getPrimaryEmail = _models$contact.getPrimaryEmail;

var ContactRow = function ContactRow(_ref) {
  var className = _ref.className,
      contact = _ref.contact,
      _onClick = _ref.onClick,
      divider = _ref.divider,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var phone = getPrimaryPhone(contact) || undefined;
  var email = getPrimaryEmail(contact) || undefined;
  var cozyUrl = getPrimaryCozy(contact) || undefined;

  var _useBreakpoints2 = useBreakpoints(),
      isDesktop = _useBreakpoints2.isDesktop;

  return /*#__PURE__*/React.createElement(ListItem, _extends({
    "data-testid": "contact-listItem",
    className: cx({
      'u-c-pointer': _onClick
    }, className),
    divider: divider,
    gutters: isDesktop ? 'double' : 'default',
    onClick: function onClick() {
      return _onClick(contact);
    }
  }, rest), /*#__PURE__*/React.createElement(ContactIdentity, {
    contact: contact
  }), !isMobile && /*#__PURE__*/React.createElement(ContactEmail, {
    email: email
  }), !isMobile && /*#__PURE__*/React.createElement(ContactPhone, {
    phone: phone
  }), !isMobile && /*#__PURE__*/React.createElement(ContactCozy, {
    cozyUrl: cozyUrl
  }));
};

ContactRow.propTypes = {
  contact: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  divider: PropTypes.bool
};
export default ContactRow;