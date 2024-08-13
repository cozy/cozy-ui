import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["name", "options", "disabled", "value", "children", "onClick", "onChange"];
import React, { forwardRef, useEffect, useState } from 'react';
import merge from 'lodash/merge';
import MuiTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Icon from "cozy-ui/transpiled/react/Icon";
import BottomIcon from "cozy-ui/transpiled/react/Icons/Bottom";
import InputAdornment from "cozy-ui/transpiled/react/InputAdornment";
import ListItemText from "cozy-ui/transpiled/react/ListItemText";
import ListItemIcon from "cozy-ui/transpiled/react/ListItemIcon";
import Radio from "cozy-ui/transpiled/react/Radios";
import ActionsMenuWrapper from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuWrapper";
import ActionsMenuItem from "cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem";
var MobileSelect = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _options$find;

  var name = _ref.name,
      options = _ref.options,
      disabled = _ref.disabled,
      value = _ref.value,
      children = _ref.children,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  // As they are controlled input, we have to set empty string as default
  // because values can't be undefined and then defined
  var _useState = useState({
    label: '',
    value: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showDrawer = _useState4[0],
      setShowDrawer = _useState4[1];

  var initialLabel = (_options$find = options.find(function (option) {
    return option.value === value;
  })) === null || _options$find === void 0 ? void 0 : _options$find.label;

  var handleClick = function handleClick() {
    setShowDrawer(true);
    onClick === null || onClick === void 0 ? void 0 : onClick();
  };

  var handleItemClick = function handleItemClick(_ref2) {
    var value = _ref2.value,
        children = _ref2.children,
        onClick = _ref2.onClick;
    return function (ev) {
      onClick === null || onClick === void 0 ? void 0 : onClick(merge({}, ev, {
        target: {
          value: value
        }
      }));
      setState({
        label: children,
        value: value
      });
      onChange === null || onChange === void 0 ? void 0 : onChange({
        target: {
          value: value
        }
      });
    };
  };

  var handleClose = function handleClose() {
    setShowDrawer(false);
  };

  useEffect(function () {
    setState({
      label: initialLabel || '',
      value: value || ''
    });
  }, [initialLabel, value]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MuiTextField, {
    style: {
      display: 'none'
    },
    type: "hidden",
    name: name,
    value: state.value
  }), /*#__PURE__*/React.createElement(MuiTextField, _extends({}, props, {
    ref: ref,
    type: "button",
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    name: "dummy",
    value: state.label,
    disabled: disabled,
    inputProps: {
      className: 'u-ta-left'
    },
    InputProps: {
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: BottomIcon,
        color: disabled ? 'var(--disabledTextColor)' : 'var(--iconTextColor)'
      }))
    },
    onClick: handleClick
  })), showDrawer && /*#__PURE__*/React.createElement(ActionsMenuWrapper, {
    open: true,
    autoClose: true,
    onClose: handleClose
  }, React.Children.map(children, function (child) {
    return /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.createElement(ActionsMenuItem, _extends({}, child.props, {
      size: "small",
      autoFocus: child.props.value === value,
      onClick: handleItemClick(child.props)
    }), /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Radio, {
      "aria-hidden": "true",
      tabIndex: "-1",
      checked: child.props.value === state.value
    })), /*#__PURE__*/React.createElement(ListItemText, {
      primary: child.props.children
    })) : null;
  })));
});
MobileSelect.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
export default MobileSelect;