import PropTypes from 'prop-types';
import React from 'react';
import { Field, useForm } from 'react-final-form';
import { makeFormattedAddressWithSubFields } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactAddressDialog/helpers";
import { locales } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactAddressDialog/locales";
import Button from "cozy-ui/transpiled/react/Buttons";
import { FixedDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
import FieldInputWrapper from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/FieldInputWrapper";
import { fieldInputAttributesTypes } from "cozy-ui/transpiled/react/Contacts/AddModal/types";

var ContactAddressModal = function ContactAddressModal(_ref) {
  var onClose = _ref.onClose,
      name = _ref.name,
      subFields = _ref.subFields;
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useForm = useForm(),
      getFieldState = _useForm.getFieldState,
      change = _useForm.change;

  var subFieldsState = subFields.map(function (subField) {
    return getFieldState("".concat(name).concat(subField.name));
  });

  var onConfirm = function onConfirm() {
    var hasBeenModified = subFieldsState.some(function (state) {
      return !state.pristine;
    });

    if (!hasBeenModified) {
      return onClose();
    }

    var formattedAddress = makeFormattedAddressWithSubFields(subFieldsState, t);
    change(name, formattedAddress);
    onClose();
  };

  var onCancel = function onCancel() {
    subFieldsState.forEach(function (_ref2) {
      var name = _ref2.name,
          initial = _ref2.initial;
      return change(name, initial);
    });
    onClose();
  };

  return /*#__PURE__*/React.createElement(FixedDialog, {
    open: true,
    onClose: onClose,
    size: "small",
    title: t('Contacts.AddModal.ContactAddressDialog.fields.address'),
    content: subFields.map(function (subField) {
      return /*#__PURE__*/React.createElement("div", {
        key: subField.name,
        className: "u-mt-1"
      }, /*#__PURE__*/React.createElement(Field, {
        label: t("Contacts.AddModal.ContactAddressDialog.fields.".concat(subField.name)),
        attributes: {
          type: subField.type
        },
        name: "".concat(name).concat(subField.name),
        component: FieldInputWrapper
      }));
    }),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      label: t('Contacts.AddModal.ContactAddressDialog.cancel'),
      onClick: onCancel
    }), /*#__PURE__*/React.createElement(Button, {
      className: "u-ml-half",
      label: t('Contacts.AddModal.ContactAddressDialog.ok'),
      onClick: onConfirm
    }))
  });
};

ContactAddressModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  subFields: PropTypes.arrayOf(fieldInputAttributesTypes).isRequired
};
export default ContactAddressModal;