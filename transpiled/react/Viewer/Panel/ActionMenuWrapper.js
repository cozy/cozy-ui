import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useAppLinkWithStoreFallback, useClient } from 'cozy-client';
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import useViewerSnackbar from "cozy-ui/transpiled/react/Viewer/providers/ViewerSnackbarProvider";
import { buildEditAttributePath, isEditableAttribute, getCurrentModel } from "cozy-ui/transpiled/react/Viewer/helpers";
import useActionMenuContext from "cozy-ui/transpiled/react/Viewer/providers/ActionMenuProvider";
import ActionMenuMobile from "cozy-ui/transpiled/react/Viewer/Panel/ActionMenuMobile";
import ActionMenuDesktop from "cozy-ui/transpiled/react/Viewer/Panel/ActionMenuDesktop";
var mespapiersAppSlug = 'mespapiers';
var ActionMenuWrapper = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var onClose = _ref.onClose,
      file = _ref.file,
      optionFile = _ref.optionFile;
  var name = optionFile.name,
      value = optionFile.value;
  var editPathByModelProps = useActionMenuContext();

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useViewerSnackbar = useViewerSnackbar(),
      showViewerSnackbar = _useViewerSnackbar.showViewerSnackbar;

  var client = useClient();
  var currentModel = getCurrentModel(name);
  var editPath = buildEditAttributePath(editPathByModelProps, currentModel, optionFile.name);

  var _useAppLinkWithStoreF = useAppLinkWithStoreFallback(mespapiersAppSlug, client, editPath),
      fetchStatus = _useAppLinkWithStoreF.fetchStatus,
      url = _useAppLinkWithStoreF.url;

  var isAppLinkLoaded = fetchStatus === 'loaded';

  var handleCopy = function handleCopy() {
    var _navigator;

    if ((_navigator = navigator) !== null && _navigator !== void 0 && _navigator.clipboard) {
      navigator.clipboard.writeText(value);
      showViewerSnackbar('secondary', t("Viewer.snackbar.copiedToClipboard.success"));
    } else {
      showViewerSnackbar('error', t("Viewer.snackbar.copiedToClipboard.error"));
    }

    onClose();
  };

  var handleEdit = function handleEdit(cb) {
    if (isAppLinkLoaded) {
      onClose();
      cb && cb();
    }
  };

  if (isMobile) {
    return /*#__PURE__*/React.createElement(ActionMenuMobile, {
      onClose: onClose,
      isEditable: Boolean(editPath) && isEditableAttribute(name, file),
      actions: {
        handleCopy: handleCopy,
        handleEdit: handleEdit
      },
      appLink: url,
      appSlug: mespapiersAppSlug
    });
  }

  return /*#__PURE__*/React.createElement(ActionMenuDesktop, {
    ref: ref,
    onClose: onClose,
    isEditable: Boolean(editPath) && isEditableAttribute(name, file),
    actions: {
      handleCopy: handleCopy,
      handleEdit: handleEdit
    },
    appLink: url,
    appSlug: mespapiersAppSlug
  });
});
ActionMenuWrapper.displayName = 'ActionMenuWrapper';
ActionMenuWrapper.propTypes = {
  onClose: PropTypes.func,
  file: PropTypes.object,
  optionFile: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })
};
export default ActionMenuWrapper;