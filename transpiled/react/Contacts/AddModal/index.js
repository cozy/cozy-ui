import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { useState } from 'react';
import ContactForm, { getSubmitContactForm } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm";
import { locales } from "cozy-ui/transpiled/react/Contacts/AddModal/locales";
import Button from "cozy-ui/transpiled/react/Buttons";
import { FixedDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import { useAlert } from "cozy-ui/transpiled/react/providers/Alert";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var AddModal = function AddModal(_ref) {
  var contacts = _ref.contacts,
      contact = _ref.contact,
      customFieldsProps = _ref.customFieldsProps,
      onSubmit = _ref.onSubmit,
      onClose = _ref.onClose;
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useAlert = useAlert(),
      showAlert = _useAlert.showAlert;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isBusy = _useState2[0],
      setIsBusy = _useState2[1]; // Tip to prevent fields from being filled with old information for a short period of time during form submission.


  var _useState3 = useState(contact),
      _useState4 = _slicedToArray(_useState3, 2),
      selfContact = _useState4[0],
      setSelfContact = _useState4[1];

  var handleClick = function handleClick(event) {
    var submitContactForm = getSubmitContactForm();
    submitContactForm(event);
  };
  /**
   * @param {import('cozy-client/types/types').IOCozyContact} formData - Contact document (except _id, _rev & _type attrs to create a new contact)
   */


  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(formData) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSelfContact(formData);
              setIsBusy(true);
              _context.prev = 2;
              _context.next = 5;
              return onSubmit(formData);

            case 5:
              onClose();
              _context.next = 13;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              setIsBusy(false);
              console.warn(_context.t0); // eslint-disable-line no-console

              showAlert({
                severity: 'error',
                message: t('Contacts.AddModal.error.save')
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8]]);
    }));

    return function handleFormSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(FixedDialog, {
    open: true,
    onClose: onClose,
    title: contact ? t('Contacts.AddModal.edit-contact') : t('Contacts.AddModal.create_contact'),
    content: /*#__PURE__*/React.createElement(ContactForm, {
      contacts: contacts,
      contact: selfContact,
      customFieldsProps: customFieldsProps,
      onSubmit: handleFormSubmit
    }),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      label: t('Contacts.AddModal.cancel'),
      onClick: onClose
    }), /*#__PURE__*/React.createElement(Button, {
      className: "u-ml-half",
      type: "submit",
      label: t('Contacts.AddModal.save'),
      busy: isBusy,
      onClick: handleClick
    }))
  });
};

export default AddModal;