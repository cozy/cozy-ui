import React from 'react';
import { withContactsListLocales } from "cozy-ui/transpiled/react/ContactsListModal/withContactsListLocales";

var AddContactTitle = function AddContactTitle(_ref) {
  var t = _ref.t;
  return /*#__PURE__*/React.createElement(React.Fragment, null, t('newContact'));
};

export default withContactsListLocales(AddContactTitle);