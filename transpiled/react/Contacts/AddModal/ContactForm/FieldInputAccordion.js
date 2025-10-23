import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["name", "label", "subFields"],
    _excluded2 = ["name"];
import React, { useState } from 'react';
import FieldInput from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/FieldInput";
import { locales } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/locales";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import DropdownIcon from "cozy-ui/transpiled/react/Icons/Dropdown";
import DropupIcon from "cozy-ui/transpiled/react/Icons/Dropup";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var FieldInputAccordion = function FieldInputAccordion(_ref) {
  var _ref$attributes = _ref.attributes,
      name = _ref$attributes.name,
      label = _ref$attributes.label,
      subFields = _ref$attributes.subFields,
      restAttributes = _objectWithoutProperties(_ref$attributes, _excluded),
      contacts = _ref.contacts,
      error = _ref.error,
      helperText = _ref.helperText;

  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showExtended = _useState2[0],
      setShowExtended = _useState2[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "u-flex u-flex-items-baseline"
  }, /*#__PURE__*/React.createElement(FieldInput, {
    attributes: restAttributes,
    contacts: contacts,
    error: error,
    helperText: helperText,
    name: name,
    label: t("Contacts.AddModal.ContactForm.fields.".concat(name)),
    labelProps: label
  }), /*#__PURE__*/React.createElement(IconButton, {
    className: "u-ml-half",
    size: "medium",
    onClick: function onClick() {
      return setShowExtended(function (v) {
        return !v;
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: showExtended ? DropupIcon : DropdownIcon
  }))), subFields.map(function (_ref2, index) {
    var name = _ref2.name,
        attributes = _objectWithoutProperties(_ref2, _excluded2);

    return /*#__PURE__*/React.createElement(FieldInput, {
      key: index,
      className: "u-mt-1",
      attributes: attributes,
      name: name,
      isInvisible: !showExtended,
      label: t("Contacts.AddModal.ContactForm.fields.".concat(name))
    });
  }));
};

export default FieldInputAccordion;