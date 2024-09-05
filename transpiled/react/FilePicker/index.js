import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { useState, memo } from 'react';
import FilePickerBody from "cozy-ui/transpiled/react/FilePicker/FilePickerBody";
import FilePickerFooter from "cozy-ui/transpiled/react/FilePicker/FilePickerFooter";
import FilePickerHeader from "cozy-ui/transpiled/react/FilePicker/FilePickerHeader";
import { FixedDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import { getCompliantTypes } from "cozy-ui/transpiled/react/helpers/acceptedTypes";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles(function () {
  return {
    paper: {
      height: '100%'
    }
  };
});
export var ROOT_DIR_ID = 'io.cozy.files.root-dir';

var FilePicker = function FilePicker(_ref) {
  var onClose = _ref.onClose,
      onChange = _ref.onChange,
      accept = _ref.accept,
      multiple = _ref.multiple;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var classes = useStyles();

  var _useState = useState(ROOT_DIR_ID),
      _useState2 = _slicedToArray(_useState, 2),
      folderId = _useState2[0],
      setFolderId = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      itemsIdsSelected = _useState4[0],
      setItemsIdsSelected = _useState4[1];

  var onSelectItemId = function onSelectItemId(fileId) {
    if (!multiple) {
      handleConfirm(null, fileId);
    } else {
      setItemsIdsSelected(fileId);
    }
  };

  var navigateTo = function navigateTo(folder) {
    return setFolderId(folder.id);
  };

  var handleConfirm = function handleConfirm(_, fileId) {
    onChange(fileId ? fileId : itemsIdsSelected);
    onClose();
  };

  var itemTypesAccepted = getCompliantTypes(accept);
  return /*#__PURE__*/React.createElement(FixedDialog, {
    open: true,
    disableGutters: true,
    onClose: isMobile ? undefined : onClose,
    size: "large",
    classes: {
      paper: classes.paper
    },
    title: /*#__PURE__*/React.createElement(FilePickerHeader, {
      navigateTo: navigateTo,
      folderId: folderId,
      onClose: onClose
    }),
    content: /*#__PURE__*/React.createElement(FilePickerBody, {
      navigateTo: navigateTo,
      onSelectItemId: onSelectItemId,
      itemsIdsSelected: itemsIdsSelected,
      folderId: folderId,
      itemTypesAccepted: itemTypesAccepted,
      multiple: multiple
    }),
    actions: multiple ? /*#__PURE__*/React.createElement(FilePickerFooter, {
      onClose: onClose,
      onConfirm: handleConfirm,
      disabledConfirm: itemsIdsSelected.length === 0
    }) : null
  });
};

FilePicker.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool
};
FilePicker.defaultProps = {
  accept: '',
  multiple: false
};
export default /*#__PURE__*/memo(FilePicker);