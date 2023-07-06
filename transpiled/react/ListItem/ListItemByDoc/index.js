import React from 'react';
import PropTypes from 'prop-types';
import ListItemFile from "cozy-ui/transpiled/react/ListItem/ListItemFile";
import ListItemContact from "cozy-ui/transpiled/react/ListItem/ListItemContact";
import { makeDefaultExpandedAttributes } from "cozy-ui/transpiled/react/ListItem/ExpandedAttributes/helpers";

var ListItemByDoc = function ListItemByDoc(_ref) {
  var doc = _ref.doc,
      primary = _ref.primary,
      secondary = _ref.secondary,
      icon = _ref.icon,
      actions = _ref.actions,
      selectProps = _ref.selectProps,
      _ref$expandedAttribut = _ref.expandedAttributesProps,
      isExpandedAttributesActive = _ref$expandedAttribut.isExpandedAttributesActive,
      expandedAttributes = _ref$expandedAttribut.expandedAttributes,
      onClick = _ref.onClick;
  var itemExpandedAttributes = makeDefaultExpandedAttributes(doc, expandedAttributes);

  switch (doc._type) {
    case 'io.cozy.contacts':
      return /*#__PURE__*/React.createElement(ListItemContact, {
        contact: doc,
        primary: primary,
        secondary: secondary,
        icon: icon,
        actions: actions,
        selectProps: selectProps,
        expandedAttributesProps: {
          isExpandedAttributesActive: isExpandedAttributesActive,
          expandedAttributes: itemExpandedAttributes
        },
        onClick: onClick
      });

    case 'io.cozy.files':
      return /*#__PURE__*/React.createElement(ListItemFile, {
        file: doc,
        primary: primary,
        secondary: secondary,
        icon: icon,
        actions: actions,
        selectProps: selectProps,
        expandedAttributesProps: {
          isExpandedAttributesActive: isExpandedAttributesActive,
          expandedAttributes: itemExpandedAttributes
        },
        onClick: onClick
      });

    default:
      return /*#__PURE__*/React.createElement(ListItemFile, {
        file: doc,
        primary: primary,
        secondary: secondary,
        icon: icon,
        actions: actions,
        selectProps: selectProps,
        expandedAttributesProps: {
          isExpandedAttributesActive: isExpandedAttributesActive,
          expandedAttributes: itemExpandedAttributes
        },
        onClick: onClick
      });
  }
};

ListItemByDoc.defaultProps = {
  selectProps: {
    isSelectActive: false,
    isSelected: false,
    isChecked: false
  },
  expandedAttributesProps: {
    isExpandedAttributesActive: false
  }
};
ListItemByDoc.propTypes = {
  doc: PropTypes.object,
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
export default ListItemByDoc;