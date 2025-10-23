import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["component"],
    _excluded2 = ["input", "attributes", "variant", "fullWidth"];
import React from 'react';
import TextFieldCustomLabelSelect from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/TextFieldCustomLabelSelect";
import TextFieldSelect from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/TextFieldSelect";
import TextField from "cozy-ui/transpiled/react/TextField";
import { FieldInputWrapperPropTypes } from "cozy-ui/transpiled/react/Contacts/AddModal/types"; // component used to flatten props to ensure compatibility
// between Field from react-final-form and TextField from Mui

var FieldInputWrapper = function FieldInputWrapper(_ref) {
  var input = _ref.input,
      _ref$attributes = _ref.attributes,
      component = _ref$attributes.component,
      restAttributes = _objectWithoutProperties(_ref$attributes, _excluded),
      variant = _ref.variant,
      fullWidth = _ref.fullWidth,
      props = _objectWithoutProperties(_ref, _excluded2);

  var Component = component || (restAttributes.customLabelOptions ? TextFieldCustomLabelSelect : restAttributes !== null && restAttributes !== void 0 && restAttributes.select ? TextFieldSelect : TextField);
  return /*#__PURE__*/React.createElement(Component, _extends({}, restAttributes, input, props, {
    variant: variant,
    fullWidth: fullWidth,
    minRows: "2"
  }));
};

FieldInputWrapper.propTypes = FieldInputWrapperPropTypes;
FieldInputWrapper.defaultProps = {
  variant: 'outlined',
  fullWidth: true
};
export default FieldInputWrapper;