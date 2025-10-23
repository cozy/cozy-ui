import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["name", "label"];
import cx from 'classnames';
import React from 'react';
import { FieldArray } from 'react-final-form-arrays';
import FieldInput from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/FieldInput";
import { fieldsRequired, addField, removeField } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/helpers";
import { locales } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/locales";
import Button from "cozy-ui/transpiled/react/Buttons";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import CrossCircleIcon from "cozy-ui/transpiled/react/Icons/CrossCircle";
import PlusIcon from "cozy-ui/transpiled/react/Icons/Plus";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var FieldInputArray = function FieldInputArray(_ref) {
  var _ref$attributes = _ref.attributes,
      name = _ref$attributes.name,
      label = _ref$attributes.label,
      restAttributes = _objectWithoutProperties(_ref$attributes, _excluded),
      contacts = _ref.contacts,
      _ref$formProps = _ref.formProps,
      valid = _ref$formProps.valid,
      submitFailed = _ref$formProps.submitFailed,
      errors = _ref$formProps.errors;

  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  return /*#__PURE__*/React.createElement(FieldArray, {
    name: name
  }, function (_ref2) {
    var fields = _ref2.fields;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (nameWithIndex, index) {
      var _fields$value$index, _fields$value$index2;

      var key = ((_fields$value$index = fields.value[index]) === null || _fields$value$index === void 0 ? void 0 : _fields$value$index.fieldId) || nameWithIndex;
      var showRemove = (_fields$value$index2 = fields.value[index]) === null || _fields$value$index2 === void 0 ? void 0 : _fields$value$index2[name];
      var inputName = "".concat(nameWithIndex, ".").concat(name);
      var isError = fieldsRequired.includes(inputName) && !valid && submitFailed;
      return /*#__PURE__*/React.createElement("div", {
        key: key,
        className: cx('u-flex u-flex-items-baseline', {
          'u-mt-1': index !== 0
        })
      }, /*#__PURE__*/React.createElement(FieldInput, {
        attributes: restAttributes,
        contacts: contacts,
        error: isError,
        helperText: isError ? errors[inputName] : null,
        name: inputName,
        label: t("Contacts.AddModal.ContactForm.fields.".concat(name)),
        labelProps: label
      }), showRemove && /*#__PURE__*/React.createElement(ListItemIcon, {
        className: "u-ml-half"
      }, /*#__PURE__*/React.createElement(IconButton, {
        "aria-label": "delete",
        color: "error",
        size: "medium",
        onClick: function onClick() {
          return removeField(fields, index);
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: CrossCircleIcon
      }))));
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      startIcon: /*#__PURE__*/React.createElement(Icon, {
        icon: PlusIcon
      }),
      onClick: function onClick() {
        return addField(fields);
      },
      label: t("Contacts.AddModal.ContactForm.addLabel.".concat(name))
    }));
  });
};

export default FieldInputArray;