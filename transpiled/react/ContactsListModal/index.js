import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["contacts"];
import React from 'react';
import PropTypes from 'prop-types';
import { withContactsListLocales } from "cozy-ui/transpiled/react/ContactsListModal/withContactsListLocales";
import ContactsListModal from "cozy-ui/transpiled/react/ContactsListModal/ContactsListModal";
import ContactsListModalWithQuery from "cozy-ui/transpiled/react/ContactsListModal/ContactsListModalWithQuery";

var ContactsListModalWrapper = function ContactsListModalWrapper(_ref) {
  var contacts = _ref.contacts,
      props = _objectWithoutProperties(_ref, _excluded);

  if (contacts) {
    return /*#__PURE__*/React.createElement(ContactsListModal, _extends({
      contacts: contacts
    }, props));
  }

  return /*#__PURE__*/React.createElement(ContactsListModalWithQuery, props);
};

ContactsListModalWrapper.propTypes = {
  onItemClick: PropTypes.func,

  /** Label to show in the search input */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Label to show on the button to add a contact */
  addContactLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Message to show when no result */
  emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  dismissAction: PropTypes.func,

  /** Query state of contacts */
  contacts: PropTypes.object
};
export default withContactsListLocales(ContactsListModalWrapper);