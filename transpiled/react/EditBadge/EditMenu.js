import React, { useRef } from 'react';
import { handleDelete, handleUpload } from "cozy-ui/transpiled/react/EditBadge/helpers";
import { locales } from "cozy-ui/transpiled/react/EditBadge/locales";
import Icon from "cozy-ui/transpiled/react/Icon";
import CameraIcon from "cozy-ui/transpiled/react/Icons/Camera";
import TrashIcon from "cozy-ui/transpiled/react/Icons/Trash";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import Menu from "cozy-ui/transpiled/react/Menu";
import MenuItem from "cozy-ui/transpiled/react/MenuItem";
import { useAlert } from "cozy-ui/transpiled/react/providers/Alert";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var EditMenu = function EditMenu(_ref) {
  var anchorRef = _ref.anchorRef,
      status = _ref.status,
      showMenu = _ref.showMenu,
      setShowMenu = _ref.setShowMenu,
      setStatus = _ref.setStatus,
      setTimestamp = _ref.setTimestamp,
      onUpload = _ref.onUpload,
      onDelete = _ref.onDelete;
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useAlert = useAlert(),
      showAlert = _useAlert.showAlert;

  var fileInputRef = useRef(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    className: "u-dn",
    type: "file",
    ref: fileInputRef,
    accept: "image/*",
    onChange: function onChange(event) {
      return handleUpload({
        event: event,
        t: t,
        fileInputRef: fileInputRef,
        status: status,
        onUpload: onUpload,
        setStatus: setStatus,
        setTimestamp: setTimestamp,
        setShowMenu: setShowMenu,
        showAlert: showAlert
      });
    }
  }), showMenu && /*#__PURE__*/React.createElement(Menu, {
    open: true,
    anchorEl: anchorRef,
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    onClose: function onClose() {
      return setShowMenu(false);
    }
  }, /*#__PURE__*/React.createElement(MenuItem, {
    onClick: function onClick() {
      setShowMenu(false);
      fileInputRef.current.click(); // triggers onChange of the input
    }
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
    icon: CameraIcon
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: t('EditBadge.menu.update')
  })), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: function onClick() {
      return handleDelete({
        t: t,
        status: status,
        onDelete: onDelete,
        setShowMenu: setShowMenu,
        setStatus: setStatus,
        setTimestamp: setTimestamp,
        showAlert: showAlert
      });
    }
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
    icon: TrashIcon
  })), /*#__PURE__*/React.createElement(ListItemText, {
    primary: t('EditBadge.menu.delete')
  }))));
};

export default EditMenu;