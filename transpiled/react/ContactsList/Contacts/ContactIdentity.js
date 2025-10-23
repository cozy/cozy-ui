import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["noWrapper"];
import PropTypes from 'prop-types';
import React from 'react';
import { getInitials } from 'cozy-client/dist/models/contact';
import ContactName from "cozy-ui/transpiled/react/ContactsList/Contacts/ContactName";
import Avatar from "cozy-ui/transpiled/react/Avatar";
import { TableCell } from "cozy-ui/transpiled/react/deprecated/Table";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { locales } from "cozy-ui/transpiled/react/ContactsList/locales/withContactsListLocales";
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

var MyselfMarker = function MyselfMarker() {
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement("span", {
    className: "".concat(styles['contact-myself'])
  }, "(", t('me'), ")");
};

var ContactIdentity = function ContactIdentity(_ref) {
  var contact = _ref.contact;
  var isMyself = !!contact.me;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Avatar, {
    display: "inline",
    size: "s"
  }, getInitials(contact)), /*#__PURE__*/React.createElement(ContactName, {
    contact: contact
  }), isMyself && /*#__PURE__*/React.createElement(MyselfMarker, null));
};

ContactIdentity.propTypes = {
  contact: PropTypes.object.isRequired
};

var ContactIdentityWrapper = function ContactIdentityWrapper(_ref2) {
  var noWrapper = _ref2.noWrapper,
      props = _objectWithoutProperties(_ref2, _excluded);

  if (noWrapper) {
    return /*#__PURE__*/React.createElement(ContactIdentity, props);
  }

  return /*#__PURE__*/React.createElement(TableCell, {
    "data-testid": "ContactIdentity" // used by a test in cozy-contacts
    ,
    className: "".concat(styles['contact-identity'], " u-flex u-flex-items-center u-ellipsis u-p-0")
  }, /*#__PURE__*/React.createElement(ContactIdentity, props));
};

ContactIdentityWrapper.defaultProps = {
  noWrapper: false
};
export default ContactIdentityWrapper;