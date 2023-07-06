import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "disabled", "hidden", "multiple", "onChange"];
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
var styles = {
  "c-file-input": "styles__c-file-input___YNZSh"
};

var FileInput = function FileInput(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      hidden = _ref.hidden,
      multiple = _ref.multiple,
      _onChange = _ref.onChange,
      inputProps = _objectWithoutProperties(_ref, _excluded);

  var fileinputId = uniqueId('file-input');
  var fileinputRef = /*#__PURE__*/React.createRef();
  return /*#__PURE__*/React.createElement("label", {
    disabled: disabled,
    className: cx(styles['c-file-input'], className)
  }, React.Children.map(children, function (child) {
    return /*#__PURE__*/React.cloneElement(child, {
      'aria-controls': fileinputId,
      role: 'button',
      tabIndex: 0,
      onKeyPress: function onKeyPress(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          fileinputRef.current.click();
        }
      }
    });
  }), /*#__PURE__*/React.createElement("input", _extends({
    ref: fileinputRef,
    id: fileinputId,
    hidden: hidden,
    type: "file",
    multiple: multiple,
    onChange: function onChange(e) {
      if (multiple) {
        _onChange(Array.from(e.target.files));
      } else {
        _onChange(Array.from(e.target.files)[0]);
      }
    }
  }, inputProps)));
};

FileInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};
FileInput.defaultProps = {
  disabled: false,
  hidden: true,
  multiple: false
};
export default FileInput;