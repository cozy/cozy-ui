import React from 'react';
import ContactIdentity from "cozy-ui/transpiled/react/ContactsList/Contacts/ContactIdentity";
import ActionsMenuButton from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuButton";

var Cell = function Cell(_ref) {
  var row = _ref.row,
      column = _ref.column,
      cell = _ref.cell,
      actions = _ref.actions;

  if (column.id === 'fullname') {
    return /*#__PURE__*/React.createElement(ContactIdentity, {
      contact: row,
      noWrapper: true
    });
  }

  if (column.id === 'actions') {
    if (!actions) {
      return null;
    }

    return /*#__PURE__*/React.createElement(ActionsMenuButton, {
      docs: [row],
      actions: actions
    });
  }

  return cell;
};

export default /*#__PURE__*/React.memo(Cell);