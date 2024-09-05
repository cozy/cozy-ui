import PropTypes from 'prop-types';
import React from 'react';
import { models } from 'cozy-client';
import ContactName from "cozy-ui/transpiled/react/ContactsList/Contacts/ContactName";
import { Avatar } from "cozy-ui/transpiled/react/Avatar";
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
var _models$contact = models.contact,
    getDisplayName = _models$contact.getDisplayName,
    getInitials = _models$contact.getInitials;

var MyselfMarker = function MyselfMarker(props, _ref) {
  var t = _ref.t;
  return /*#__PURE__*/React.createElement("span", {
    className: "".concat(styles['contact-myself'])
  }, "(", t('me'), ")");
};

var ContactIdentity = function ContactIdentity(_ref2) {
  var contact = _ref2.contact;
  var name = contact.name || {};
  var displayName = getDisplayName(contact) || undefined;
  var isMyself = contact.metadata ? !!contact.metadata.me : false;
  return /*#__PURE__*/React.createElement(TableCell, {
    "data-testid": "ContactIdentity" // used by a test in cozy-contacts
    ,
    className: "".concat(styles['contact-identity'], " u-flex u-flex-items-center u-ellipsis u-p-0")
  }, /*#__PURE__*/React.createElement(Avatar, {
    text: getInitials(contact),
    size: "small"
  }), /*#__PURE__*/React.createElement(ContactName, {
    displayName: displayName,
    familyName: name.familyName
  }), isMyself && /*#__PURE__*/React.createElement(MyselfMarker, null));
};

ContactIdentity.propTypes = {
  contact: PropTypes.object.isRequired
};
export default ContactIdentity;