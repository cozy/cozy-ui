import React from 'react';
import PropTypes from 'prop-types';
import { splitFilename } from 'cozy-client/dist/models/file';
import Filename from "cozy-ui/transpiled/react/Filename";
import FiletypePdfIcon from "cozy-ui/transpiled/react/Icons/FileTypePdf";
import ListItemBase from "cozy-ui/transpiled/react/ListItem/ListItemBase";
import ItemIcon from "cozy-ui/transpiled/react/ListItem/ListItemFile/ItemIcon";
import PrimaryText from "cozy-ui/transpiled/react/ListItem/ListItemFile/PrimaryText";
import SecondaryText from "cozy-ui/transpiled/react/ListItem/ListItemFile/SecondaryText";

var ListItemFile = function ListItemFile(_ref) {
  var file = _ref.file,
      primary = _ref.primary,
      secondary = _ref.secondary,
      icon = _ref.icon,
      actions = _ref.actions,
      selectProps = _ref.selectProps,
      expandedAttributesProps = _ref.expandedAttributesProps,
      onClick = _ref.onClick;

  var _splitFilename = splitFilename({
    name: file.name,
    type: 'file'
  }),
      filename = _splitFilename.filename,
      extension = _splitFilename.extension;

  return /*#__PURE__*/React.createElement(ListItemBase, {
    doc: file,
    primary: /*#__PURE__*/React.createElement(PrimaryText, {
      primary: primary,
      file: file
    }),
    secondary: /*#__PURE__*/React.createElement(SecondaryText, {
      secondary: secondary,
      file: file
    }),
    icon: /*#__PURE__*/React.createElement(ItemIcon, {
      icon: icon,
      file: file
    }),
    actions: actions,
    actionMenuComp: {
      Header: /*#__PURE__*/React.createElement(Filename, {
        icon: FiletypePdfIcon,
        filename: filename,
        extension: extension
      })
    },
    selectProps: selectProps,
    expandedAttributesProps: expandedAttributesProps,
    onClick: onClick
  });
};

ListItemFile.defaultProps = {
  expandedAttributesProps: {
    isExpandedAttributesActive: false
  }
};
ListItemFile.propTypes = {
  file: PropTypes.object,
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
export default ListItemFile;