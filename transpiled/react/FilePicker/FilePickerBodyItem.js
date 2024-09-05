import cx from 'classnames';
import filesize from 'filesize';
import PropTypes from 'prop-types';
import React from 'react';
import { models } from 'cozy-client';
var styles = {
  "filePickerBreadcrumb-previousPath": "styles__filePickerBreadcrumb-previousPath___3LKJH",
  "filePickerBreadcrumb-icon": "styles__filePickerBreadcrumb-icon___3aFyd",
  "filePickerBreadcrumb-wrapper": "styles__filePickerBreadcrumb-wrapper___3pu1w"
};
import Checkbox from "cozy-ui/transpiled/react/Checkbox";
import Divider from "cozy-ui/transpiled/react/Divider";
import Icon from "cozy-ui/transpiled/react/Icon";
import FileTypeFolder from "cozy-ui/transpiled/react/Icons/FileTypeFolder";
import FileTypeText from "cozy-ui/transpiled/react/Icons/FileTypeText";
import ListItem from "cozy-ui/transpiled/react/ListItem";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import Radio from "cozy-ui/transpiled/react/Radios";
import { isValidFile, isValidFolder } from "cozy-ui/transpiled/react/helpers/acceptedTypes";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var _models$file = models.file,
    isDirectory = _models$file.isDirectory,
    isFile = _models$file.isFile;
var useStyles = makeStyles(function () {
  return {
    verticalDivider: {
      height: '2rem',
      display: 'flex',
      alignSelf: 'auto',
      alignItems: 'center',
      marginLeft: '0.5rem'
    }
  };
});

var FilePickerBodyItem = function FilePickerBodyItem(_ref) {
  var item = _ref.item,
      itemTypesAccepted = _ref.itemTypesAccepted,
      multiple = _ref.multiple,
      handleChoiceClick = _ref.handleChoiceClick,
      handleListItemClick = _ref.handleListItemClick,
      itemsIdsSelected = _ref.itemsIdsSelected,
      hasDivider = _ref.hasDivider;
  var classes = useStyles();

  var _useI18n = useI18n(),
      f = _useI18n.f;

  var hasChoice = isValidFile(item, itemTypesAccepted) || isValidFolder(item, itemTypesAccepted);
  var Input = multiple ? Checkbox : Radio;
  var listItemSecondaryContent = isFile(item) ? "".concat(f(item.updated_at, 'DD MMM YYYY'), " - ").concat(filesize(item.size, {
    base: 10
  })) : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ListItem, {
    disabled: !hasChoice && isFile(item),
    size: "small",
    button: true,
    "data-testid": "list-item"
  }, /*#__PURE__*/React.createElement("div", {
    "data-testid": "listitem-onclick",
    className: styles['filePickerBreadcrumb-wrapper'],
    onClick: handleListItemClick(item)
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
    icon: isDirectory(item) ? FileTypeFolder : FileTypeText,
    width: "32",
    height: "32"
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: item.name,
    secondary: listItemSecondaryContent
  })), isDirectory(item) && hasChoice && /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical",
    flexItem: true,
    className: classes.verticalDivider
  }), /*#__PURE__*/React.createElement("div", {
    "data-testid": "choice-onclick",
    className: "u-pv-half u-h-2 u-flex u-flex-items-center",
    onClick: hasChoice ? handleChoiceClick(item) : undefined
  }, /*#__PURE__*/React.createElement(Input, {
    "data-testid": multiple ? 'checkbox-btn' : 'radio-btn',
    onChange: function onChange() {// handled by onClick on the container
    },
    checked: itemsIdsSelected.includes(item._id),
    value: item._id,
    className: cx('u-p-0', {
      'u-o-100': hasChoice,
      'u-o-0': !hasChoice
    }),
    disabled: !hasChoice
  }))), hasDivider && /*#__PURE__*/React.createElement(Divider, {
    component: "li"
  }));
};

FilePickerBodyItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemTypesAccepted: PropTypes.arrayOf(PropTypes.string).isRequired,
  multiple: PropTypes.bool,
  handleChoiceClick: PropTypes.func.isRequired,
  handleListItemClick: PropTypes.func.isRequired,
  itemsIdsSelected: PropTypes.arrayOf(PropTypes.string).isRequired,
  hasDivider: PropTypes.bool.isRequired
};
export default FilePickerBodyItem;