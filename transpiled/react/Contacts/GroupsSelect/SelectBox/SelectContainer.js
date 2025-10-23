import _extends from "@babel/runtime/helpers/extends";
import classNames from 'classnames';
import React from 'react';
import { components } from "cozy-ui/transpiled/react/SelectBox";

var SelectContainer = function SelectContainer(props) {
  return /*#__PURE__*/React.createElement(components.SelectContainer, _extends({}, props, {
    className: classNames(props.className, 'react-select__custom__container')
  }));
};

export default SelectContainer;