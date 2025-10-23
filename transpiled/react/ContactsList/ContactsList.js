import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["contacts", "onItemClick"];
import PropTypes from 'prop-types';
import React from 'react';
import ContactRow from "cozy-ui/transpiled/react/ContactsList/ContactRow";
import { sortContacts, categorizeContacts, sortHeaders } from "cozy-ui/transpiled/react/ContactsList/helpers";
import withContactsListLocales from "cozy-ui/transpiled/react/ContactsList/locales/withContactsListLocales";
import List from "cozy-ui/transpiled/react/List";
import ListSubheader from "cozy-ui/transpiled/react/ListSubheader";
import { Table } from "cozy-ui/transpiled/react/deprecated/Table";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";

var ContactsList = function ContactsList(_ref) {
  var contacts = _ref.contacts,
      onItemClick = _ref.onItemClick,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var sortedContacts = sortContacts(contacts);
  var categorizedContacts = categorizeContacts(sortedContacts, t);
  var sortedHeaders = sortHeaders(categorizedContacts, t);

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  return /*#__PURE__*/React.createElement(Table, rest, sortedHeaders.map(function (header) {
    return /*#__PURE__*/React.createElement(List, {
      key: header,
      subheader: /*#__PURE__*/React.createElement(ListSubheader, {
        gutters: isDesktop ? 'double' : 'default'
      }, header)
    }, categorizedContacts[header].map(function (contact, index) {
      return /*#__PURE__*/React.createElement(ContactRow, {
        key: contact._id,
        id: contact._id,
        contact: contact,
        divider: index !== categorizedContacts[header].length - 1,
        onClick: onItemClick
      });
    }));
  }));
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onItemClick: PropTypes.func
};
export default withContactsListLocales(ContactsList);