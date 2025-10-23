import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["name", "value", "options", "customLabelOptions", "onChange"];
import React, { useState } from 'react';
import TextFieldSelect from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/TextFieldSelect";
import { makeCustomLabel, makeInitialCustomValue } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/helpers";
import { locales } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/locales";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
import CustomLabelDialog from "cozy-ui/transpiled/react/Contacts/AddModal/CustomLabelDialog";
import { FieldInputWrapperPropTypes } from "cozy-ui/transpiled/react/Contacts/AddModal/types";

var TextFieldCustomLabelSelect = function TextFieldCustomLabelSelect(_ref) {
  var name = _ref.name,
      value = _ref.value,
      options = _ref.options,
      customLabelOptions = _ref.customLabelOptions,
      _onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var _useState3 = useState(function () {
    return makeInitialCustomValue(name, value);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      customValue = _useState4[0],
      setCustomValue = _useState4[1];

  var customOption = customValue ? [{
    value: customValue,
    label: makeCustomLabel(customValue, t),
    translated: true,
    onClick: function onClick() {
      // trigger modal only if customValue is already selected
      if (value === customValue) {
        return setOpenModal(true);
      }
    }
  }] : [{
    value: 'skip',
    label: 'Contacts.AddModal.ContactForm.label.custom',
    onClick: function onClick() {
      return setOpenModal(true);
    }
  }];

  var _options = options.concat(customOption);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextFieldSelect, _extends({}, props, {
    name: name,
    value: value,
    options: _options,
    onChange: function onChange(ev) {
      if (ev.target.value === 'skip') {
        return;
      }

      _onChange(ev);
    }
  })), openModal && /*#__PURE__*/React.createElement(CustomLabelDialog, {
    customValue: customValue,
    customLabelOptions: customLabelOptions,
    setCustomValue: setCustomValue,
    onSubmit: _onChange,
    onClose: function onClose() {
      return setOpenModal(false);
    }
  }));
};

TextFieldCustomLabelSelect.prototype = FieldInputWrapperPropTypes;
export default TextFieldCustomLabelSelect;