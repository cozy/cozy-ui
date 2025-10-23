import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { locales } from "cozy-ui/transpiled/react/Contacts/AddModal/CustomLabelDialog/locales";
import Button from "cozy-ui/transpiled/react/Buttons";
import { ConfirmDialog } from "cozy-ui/transpiled/react/CozyDialogs";
import FormControlLabel from "cozy-ui/transpiled/react/FormControlLabel";
import RadioGroup from "cozy-ui/transpiled/react/RadioGroup";
import Radio from "cozy-ui/transpiled/react/Radios";
import TextField from "cozy-ui/transpiled/react/TextField";
import { useBreakpoints } from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var CustomLabelDialog = function CustomLabelDialog(_ref) {
  var customValue = _ref.customValue,
      setCustomValue = _ref.setCustomValue,
      customLabelOptions = _ref.customLabelOptions,
      onSubmit = _ref.onSubmit,
      onClose = _ref.onClose;
  var customValueObj = JSON.parse(customValue || '{}');
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var _useState = useState(customValueObj.type || customLabelOptions.defaultType),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = useState(customValueObj.label || customLabelOptions.defaultLabel),
      _useState4 = _slicedToArray(_useState3, 2),
      label = _useState4[0],
      setLabel = _useState4[1];

  var handleSubmit = function handleSubmit() {
    setCustomValue(JSON.stringify({
      type: type,
      label: label
    }));
    onSubmit({
      target: {
        value: JSON.stringify({
          type: type,
          label: label
        })
      }
    });
    onClose();
  };

  return /*#__PURE__*/React.createElement(ConfirmDialog, {
    open: true,
    title: t('Contacts.AddModal.CustomLabelDialog.label.custom'),
    content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextField, {
      className: "u-mt-half",
      variant: "outlined",
      fullWidth: true,
      autoFocus: true,
      value: type,
      onChange: function onChange(ev) {
        return setType(ev.target.value);
      }
    }), !customLabelOptions.hide && /*#__PURE__*/React.createElement(RadioGroup, {
      style: {
        flexDirection: 'row'
      },
      className: "u-mt-half u-ml-half",
      "aria-label": "radio",
      name: "label",
      value: label,
      onChange: function onChange(ev) {
        return setLabel(ev.target.value);
      }
    }, /*#__PURE__*/React.createElement(FormControlLabel, {
      value: "home",
      label: t('Contacts.AddModal.CustomLabelDialog.label.home'),
      control: /*#__PURE__*/React.createElement(Radio, null)
    }), /*#__PURE__*/React.createElement(FormControlLabel, {
      value: "work",
      label: t('Contacts.AddModal.CustomLabelDialog.label.work'),
      control: /*#__PURE__*/React.createElement(Radio, null)
    }))),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: isMobile,
      label: t('Contacts.AddModal.CustomLabelDialog.cancel'),
      onClick: onClose
    }), /*#__PURE__*/React.createElement(Button, {
      label: t('Contacts.AddModal.CustomLabelDialog.ok'),
      fullWidth: isMobile,
      disabled: !type,
      onClick: handleSubmit
    })),
    onClose: onClose
  });
};

CustomLabelDialog.propTypes = {
  customValue: PropTypes.string,
  setCustomValue: PropTypes.func,
  customLabelOptions: PropTypes.shape({
    hide: PropTypes.bool,
    defaultType: PropTypes.string,
    defaultLabel: PropTypes.string
  }),
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
};
export default CustomLabelDialog;