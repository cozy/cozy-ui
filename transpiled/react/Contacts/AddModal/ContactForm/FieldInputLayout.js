import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["layout", "icon", "isSecondary"],
    _excluded2 = ["name", "label"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import FieldInput from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/FieldInput";
import FieldInputAccordion from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/FieldInputAccordion";
import FieldInputArray from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/FieldInputArray";
import { fieldsRequired } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/helpers";
import { locales } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/locales";
import Icon from "cozy-ui/transpiled/react/Icon";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var FieldInputLayout = function FieldInputLayout(_ref) {
  var _ref$attributes = _ref.attributes,
      layout = _ref$attributes.layout,
      icon = _ref$attributes.icon,
      isSecondary = _ref$attributes.isSecondary,
      attributes = _objectWithoutProperties(_ref$attributes, _excluded),
      contacts = _ref.contacts,
      showSecondaryFields = _ref.showSecondaryFields,
      formProps = _ref.formProps;

  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var valid = formProps.valid,
      submitFailed = formProps.submitFailed,
      errors = formProps.errors;

  var name = attributes.name,
      label = attributes.label,
      restAttributes = _objectWithoutProperties(attributes, _excluded2);

  var isError = fieldsRequired.includes(name) && !valid && submitFailed;
  return /*#__PURE__*/React.createElement("div", {
    className: cx('u-mt-1', {
      'u-flex-items-center': !layout,
      'u-flex-items-baseline': !!layout,
      'u-flex': !isSecondary || showSecondaryFields,
      'u-dn': isSecondary && !showSecondaryFields
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "u-w-2-half"
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    color: "var(--iconTextColor)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "u-w-100"
  }, layout === 'array' ? /*#__PURE__*/React.createElement(FieldInputArray, {
    attributes: attributes,
    contacts: contacts,
    formProps: formProps
  }) : layout === 'accordion' ? /*#__PURE__*/React.createElement(FieldInputAccordion, {
    attributes: attributes,
    contacts: contacts,
    error: isError,
    helperText: isError ? errors[name] : null
  }) : /*#__PURE__*/React.createElement(FieldInput, {
    attributes: restAttributes,
    contacts: contacts,
    error: isError,
    helperText: isError ? errors[name] : null,
    name: name,
    label: t("Contacts.AddModal.ContactForm.fields.".concat(name)),
    labelProps: label
  })));
};

FieldInputLayout.propTypes = {
  attributes: PropTypes.object,
  contacts: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object)
  }),
  formProps: PropTypes.object
};
export default FieldInputLayout;