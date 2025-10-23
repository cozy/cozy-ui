import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import arrayMutators from 'final-form-arrays';
import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { getHasManyItems } from 'cozy-client/dist/associations/HasMany';
import FieldInputLayout from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/FieldInputLayout";
import contactToFormValues from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/contactToFormValues";
import { fields as defaultFields } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/fieldsConfig";
import formValuesToContact from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/formValuesToContact";
import { validateFields, makeFields } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/helpers";
import { locales } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/locales";
import Button from "cozy-ui/transpiled/react/Buttons";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n"; // import { fullContactPropTypes } from '../../ContactPropTypes' // !!
// this variable will be set in the form's render prop
// and used by the submit button in ContactFormModal
// to be able to trigger the submit from outside the form
// See react-final-form examples here: https://www.npmjs.com/package/react-final-form#external-submit

var _submitContactForm;

function setSubmitContactForm(handleSubmit) {
  _submitContactForm = handleSubmit;
}

export function getSubmitContactForm() {
  return _submitContactForm;
}
/**
 *
 * @param {object} params
 * @param {{ data: Array<object> }} params.contacts
 * @param {import('cozy-client/types/types').IOCozyContact} params.contact
 * @param {Object} params.customFieldsProps
 * @param {func} params.onSubmit
 * @returns
 */

var ContactForm = function ContactForm(_ref) {
  var contacts = _ref.contacts,
      contact = _ref.contact,
      customFieldsProps = _ref.customFieldsProps,
      _onSubmit = _ref.onSubmit;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSecondaryFields = _useState2[0],
      setShowSecondaryFields = _useState2[1];

  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var fields = customFieldsProps.fields,
      makeCustomFieldsFormValues = customFieldsProps.makeCustomFieldsFormValues,
      makeCustomContactValues = customFieldsProps.makeCustomContactValues;

  var _fields = makeFields(fields, defaultFields);

  var hasSecondaryFields = _fields.some(function (el) {
    return el.isSecondary;
  });

  return /*#__PURE__*/React.createElement(Form, {
    mutators: _objectSpread({}, arrayMutators),
    initialValues: contactToFormValues({
      contact: contact,
      makeCustomContactValues: makeCustomContactValues,
      t: t
    }),
    validate: function validate(values) {
      return validateFields(values, t);
    },
    onSubmit: function onSubmit(formValues) {
      return _onSubmit(formValuesToContact({
        formValues: formValues,
        oldContact: contact,
        makeCustomFieldsFormValues: makeCustomFieldsFormValues,
        t: t
      }));
    },
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit,
          valid = _ref2.valid,
          submitFailed = _ref2.submitFailed,
          errors = _ref2.errors;
      setSubmitContactForm(handleSubmit);
      return /*#__PURE__*/React.createElement("form", {
        role: "form",
        onSubmit: handleSubmit,
        className: "u-flex u-flex-column"
      }, _fields.map(function (attributes, index) {
        return /*#__PURE__*/React.createElement(FieldInputLayout, {
          key: index,
          attributes: attributes,
          contacts: contacts,
          showSecondaryFields: showSecondaryFields,
          formProps: {
            valid: valid,
            submitFailed: submitFailed,
            errors: errors
          }
        });
      }), hasSecondaryFields && !showSecondaryFields && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        className: "u-db u-ml-2 u-mt-1",
        variant: "text",
        label: t('Contacts.AddModal.ContactForm.other-fields'),
        onClick: function onClick() {
          return setShowSecondaryFields(true);
        }
      })));
    }
  });
};

ContactForm.defaultProps = {
  customFieldsProps: {}
}; // Used to avoid unnecessary multiple rendering of ContactForm when creating a new contact in another way.
// These unnecessary renderings prevented the addition of a newly created linked contact. (Creation of a contact when selecting a linked contact)

export var isSameContactProp = function isSameContactProp(prevProps, nextProps) {
  var _prevProps$contact, _nextProps$contact;

  if (!((_prevProps$contact = prevProps.contact) !== null && _prevProps$contact !== void 0 && _prevProps$contact.relationships) || !((_nextProps$contact = nextProps.contact) !== null && _nextProps$contact !== void 0 && _nextProps$contact.relationships)) {
    return false;
  }

  var prevContactIdsRelated = getHasManyItems(prevProps.contact, 'related').map(function (r) {
    return r._id;
  });
  var nextContactIdsRelated = getHasManyItems(nextProps.contact, 'related').map(function (r) {
    return r._id;
  });

  if (prevContactIdsRelated.length !== nextContactIdsRelated.length || !prevContactIdsRelated.every(function (id) {
    return nextContactIdsRelated.includes(id);
  })) {
    return false;
  }

  return true;
}; // export default ContactForm

export default /*#__PURE__*/React.memo(ContactForm, isSameContactProp);