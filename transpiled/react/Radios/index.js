import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import MuiRadio from '@material-ui/core/Radio';
import Icon from "cozy-ui/transpiled/react/Icon";
import RadioCheckedIcon from "cozy-ui/transpiled/react/Icons/RadioChecked";
import RadioUncheckedIcon from "cozy-ui/transpiled/react/Icons/RadioUnchecked";

var Radios = function Radios(props) {
  return /*#__PURE__*/React.createElement(MuiRadio, _extends({}, props, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: RadioUncheckedIcon
    }),
    checkedIcon: /*#__PURE__*/React.createElement(Icon, {
      icon: RadioCheckedIcon
    })
  }));
};

Radios.defaultProps = {
  color: 'primary'
};
export default Radios;