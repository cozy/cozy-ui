import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayName } from 'cozy-client/dist/models/contact';
import Filename from "cozy-ui/transpiled/react/Filename";
import Icon from "cozy-ui/transpiled/react/Icon";
import ContactsIcon from "cozy-ui/transpiled/react/Icons/Contacts";
import ListItemBase from "cozy-ui/transpiled/react/ListItem/ListItemBase";
import useActions from "cozy-ui/transpiled/react/ListItem/ListItemContact/useActions";

var ListItemContact = function ListItemContact(_ref) {
  var _contact$email, _contact$email$;

  var contact = _ref.contact,
      primary = _ref.primary,
      secondary = _ref.secondary,
      icon = _ref.icon,
      actions = _ref.actions,
      selectProps = _ref.selectProps,
      expandedAttributesProps = _ref.expandedAttributesProps,
      onClick = _ref.onClick;
  var defaultActions = useActions(contact);
  var primaryText = primary || getDisplayName(contact);
  var secondaryText = secondary || ((_contact$email = contact.email) === null || _contact$email === void 0 ? void 0 : (_contact$email$ = _contact$email[0]) === null || _contact$email$ === void 0 ? void 0 : _contact$email$.address);
  var itemIcon = icon || /*#__PURE__*/React.createElement(Icon, {
    icon: ContactsIcon,
    width: "32",
    height: "32"
  });
  var itemActions = defaultActions.concat(actions);
  return /*#__PURE__*/React.createElement(ListItemBase, {
    doc: contact,
    primary: primaryText,
    secondary: secondaryText,
    icon: itemIcon,
    actions: itemActions,
    actionMenuComp: {
      Header: /*#__PURE__*/React.createElement(Filename, {
        icon: ContactsIcon,
        filename: primaryText
      })
    },
    selectProps: selectProps,
    expandedAttributesProps: expandedAttributesProps,
    onClick: onClick
  });
};

ListItemContact.defaultProps = {
  actions: []
};
ListItemContact.propTypes = {
  contact: PropTypes.object,
  primary: PropTypes.node,
  secondary: PropTypes.node,
  icon: PropTypes.node,
  actions: PropTypes.array,
  selectProps: PropTypes.shape({
    isSelectActive: PropTypes.bool,
    isSelected: PropTypes.bool,
    isChecked: PropTypes.bool
  }),
  expandedAttributesProps: PropTypes.shape({
    isExpandedAttributesActive: PropTypes.bool,
    expandedAttributes: PropTypes.array
  }),
  onClick: PropTypes.func
};
export default ListItemContact;