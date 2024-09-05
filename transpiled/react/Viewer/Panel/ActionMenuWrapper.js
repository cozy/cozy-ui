import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { useAppLinkWithStoreFallback, useClient } from 'cozy-client';
import ActionMenuDesktop from "cozy-ui/transpiled/react/Viewer/Panel/ActionMenuDesktop";
import ActionMenuMobile from "cozy-ui/transpiled/react/Viewer/Panel/ActionMenuMobile";
import { useAlert } from "cozy-ui/transpiled/react/providers/Alert";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { buildEditAttributePath, isEditableAttribute, getCurrentModel } from "cozy-ui/transpiled/react/Viewer/helpers";
import useActionMenuContext from "cozy-ui/transpiled/react/Viewer/providers/ActionMenuProvider";
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

  var _useAlert = useAlert(),
      showAlert = _useAlert.showAlert;

  var client = useClient();
  var currentModel = getCurrentModel(name);
  var editPath = buildEditAttributePath(editPathByModelProps, currentModel, optionFile.name);

  var _useAppLinkWithStoreF = useAppLinkWithStoreFallback(mespapiersAppSlug, client, editPath),
      fetchStatus = _useAppLinkWithStoreF.fetchStatus,
      url = _useAppLinkWithStoreF.url;

  var isAppLinkLoaded = fetchStatus === 'loaded';
  var isEditable = Boolean(editPath) && isEditableAttribute(name, file);

  var handleCopy = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return navigator.clipboard.writeText(value);

            case 3:
              showAlert({
                message: t("Viewer.snackbar.copiedToClipboard.success"),
                severity: 'success',
                variant: 'filled',
                icon: false
              });
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              showAlert({
                message: t("Viewer.snackbar.copiedToClipboard.error"),
                severity: 'error',
                variant: 'filled',
                icon: false
              });

            case 9:
              onClose();

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function handleCopy() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleEdit = function handleEdit(cb) {
    if (isAppLinkLoaded) {
      onClose();
      cb && cb();
    }
  };

  if (isMobile) {
    return /*#__PURE__*/React.createElement(ActionMenuMobile, {
      onClose: onClose,
      isEditable: isEditable,
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
    isEditable: isEditable,
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