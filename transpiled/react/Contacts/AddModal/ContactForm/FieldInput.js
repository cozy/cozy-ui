import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["subFields"];
import cx from 'classnames';
import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Field } from 'react-final-form';
import FieldInputWrapper from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/FieldInputWrapper";
import HasValueCondition from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/HasValueCondition";
import { RelatedContactList } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/RelatedContactList";
import { locales } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/locales";
var styles = {
  "contact-form-field__wrapper": "styles__contact-form-field__wrapper___39a5x"
};
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
import ContactAddressDialog from "cozy-ui/transpiled/react/Contacts/AddModal/ContactAddressDialog";
import { fieldInputAttributesTypes, labelPropTypes } from "cozy-ui/transpiled/react/Contacts/AddModal/types";

var FieldInput = function FieldInput(_ref) {
  var name = _ref.name,
      labelProps = _ref.labelProps,
      className = _ref.className,
      _ref$attributes = _ref.attributes,
      subFields = _ref$attributes.subFields,
      restAttributes = _objectWithoutProperties(_ref$attributes, _excluded),
      contacts = _ref.contacts,
      error = _ref.error,
      helperText = _ref.helperText,
      label = _ref.label,
      isInvisible = _ref.isInvisible,
      required = _ref.required;

  var _useState = useState(uniqueId('field_')),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0]; // state only use to generate id once and not at each render


  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasBeenFocused = _useState4[0],
      setHasBeenFocused = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isAddressDialogOpen = _useState6[0],
      setIsAddressDialogOpen = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isRelatedContactDialogOpen = _useState8[0],
      setIsRelatedContactDialogOpen = _useState8[1];

  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var handleClick = function handleClick() {
    if (name.includes('address')) {
      setIsAddressDialogOpen(true);
    }

    if (name.includes('relatedContact')) {
      setIsRelatedContactDialogOpen(true);
    }
  };

  var onFocus = function onFocus() {
    setHasBeenFocused(true);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: cx(className, styles['contact-form-field__wrapper'], 'u-flex-column-s', {
      'u-flex': !isInvisible,
      'u-dn': isInvisible
    })
  }, /*#__PURE__*/React.createElement(Field, {
    required: required,
    error: error,
    helperText: helperText,
    label: label,
    id: id,
    attributes: restAttributes,
    name: name,
    component: FieldInputWrapper,
    onFocus: onFocus,
    onClick: handleClick
  }), isAddressDialogOpen && /*#__PURE__*/React.createElement(ContactAddressDialog, {
    onClose: function onClose() {
      return setIsAddressDialogOpen(false);
    },
    name: name,
    subFields: subFields
  }), isRelatedContactDialogOpen && /*#__PURE__*/React.createElement(RelatedContactList, {
    onClose: function onClose() {
      return setIsRelatedContactDialogOpen(false);
    },
    name: name,
    contacts: contacts
  }), labelProps && /*#__PURE__*/React.createElement(HasValueCondition, {
    name: name,
    otherCondition: hasBeenFocused
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-mt-half-s u-ml-half u-ml-0-s u-flex-shrink-0 u-w-auto u-miw-4"
  }, /*#__PURE__*/React.createElement(Field, {
    attributes: labelProps,
    name: "".concat(name, "Label"),
    label: t('Contacts.AddModal.ContactForm.fields.label'),
    component: FieldInputWrapper,
    onFocus: onFocus
  }))));
};

FieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelProps: labelPropTypes,
  attributes: fieldInputAttributesTypes,

  /** Whether the field is visible by the user or not (still in the DOM anyway) */
  isInvisible: PropTypes.bool,
  contacts: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object)
  }),
  // Destructuring props
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool
};
FieldInput.defaultProps = {
  labelProps: null,
  required: false
};
export default FieldInput;