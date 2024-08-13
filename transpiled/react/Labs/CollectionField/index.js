import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["values", "component", "placeholder", "label", "addButtonLabel", "removeButtonLabel", "onChange", "onAddField"];
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from "cozy-ui/transpiled/react/deprecated/Button";
import { FieldContainer } from "cozy-ui/transpiled/react/Field";
import Icon from "cozy-ui/transpiled/react/Icon";
import Label from "cozy-ui/transpiled/react/Label";
import CrossSmallIcon from "cozy-ui/transpiled/react/Icons/CrossSmall";
import PlusIcon from "cozy-ui/transpiled/react/Icons/Plus";
import Stack from "cozy-ui/transpiled/react/Stack";
var styles = {
  "CollectionField__addBtn": "styles__CollectionField__addBtn___Z0FO-",
  "CollectionField__addBtnIcon": "styles__CollectionField__addBtnIcon___1hA5b",
  "CollectionField__row": "styles__CollectionField__row___Z7bbf"
};
/**
 * Handles a collection of form fields.
 * This is a controlled component. You have to give it some values and handle
 * changes via the onChange prop. See examples in readme.
 *
 * When a field is added, the underlying component receives `null` as
 * its value.
 * When a field is being added, the "Add" button is not shown.
 */

var CollectionField = function CollectionField(props) {
  var values = props.values,
      Component = props.component,
      placeholder = props.placeholder,
      label = props.label,
      addButtonLabel = props.addButtonLabel,
      removeButtonLabel = props.removeButtonLabel,
      onChange = props.onChange,
      onAddField = props.onAddField,
      rest = _objectWithoutProperties(props, _excluded); // This ref is used to support the onAddField props.
  // It contains the index of the field that has been
  // added and is used when handling refs to pass the
  // instance of the component that was added to the
  // onAddField prop of the parent.


  var justAddedFieldIndex = useRef();

  var handleChange = function handleChange(index) {
    return function (contact) {
      var data = _toConsumableArray(values);

      data[index] = contact;
      onChange(data);
    };
  };

  var handleAdd = function handleAdd() {
    var data = [].concat(_toConsumableArray(values), [null]);
    onChange(data);
    justAddedFieldIndex.current = data.length - 1;
  };

  var handleRemove = function handleRemove(index) {
    var data = [].concat(_toConsumableArray(values.slice(0, index)), _toConsumableArray(values.slice(index + 1)));
    onChange(data);
  };

  var handleFieldRef = function handleFieldRef(index, componentInstance) {
    if (!onAddField) {
      return;
    }

    if (index === justAddedFieldIndex.current && componentInstance) {
      justAddedFieldIndex.current = null;
      onAddField(componentInstance);
    }
  };

  return /*#__PURE__*/React.createElement(FieldContainer, rest, /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement(Stack, null, values.length > 0 ? /*#__PURE__*/React.createElement(Stack, {
    spacing: "s"
  }, values.map(function (value, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: styles.CollectionField__row
    }, /*#__PURE__*/React.createElement(Component, {
      ref: function ref(value) {
        return handleFieldRef(index, value);
      },
      value: value,
      onChange: handleChange(index),
      placeholder: placeholder
    }), /*#__PURE__*/React.createElement(Button, {
      type: "button",
      theme: "secondary",
      label: removeButtonLabel,
      iconOnly: true,
      round: true,
      icon: /*#__PURE__*/React.createElement(Icon, {
        icon: CrossSmallIcon,
        color: "var(--slateGrey)"
      }),
      onClick: function onClick() {
        return handleRemove(index);
      }
    }));
  })) : null, values[values.length - 1] !== null ? /*#__PURE__*/React.createElement(Button, {
    label: addButtonLabel,
    type: "button",
    theme: "text",
    icon: /*#__PURE__*/React.createElement(Icon, {
      icon: PlusIcon,
      className: styles.CollectionField__addBtnIcon
    }),
    onClick: handleAdd,
    className: styles.CollectionField__addBtn
  }) : null));
};

CollectionField.propTypes = {
  /** @type {Array} Individual values will be passed through `value` to the underlying Component */
  values: PropTypes.array.isRequired,

  /** @type {ElementType} Component used to render a field */
  component: PropTypes.elementType.isRequired,

  /** @type {String} Label of the field */
  label: PropTypes.node.isRequired,

  /** @type {Function} Callback called when a value is added / updated / removed */
  onChange: PropTypes.func.isRequired,

  /** @type {String} Label of the "Add" button */
  addButtonLabel: PropTypes.node.isRequired,

  /** @type {String} Label of the "Remove" button */
  removeButtonLabel: PropTypes.node.isRequired,

  /** @type {String} Placeholder passed to the Component */
  placeholder: PropTypes.string,

  /** @type {String} Callback called with the instance of the Component when a field is being added */
  onAddField: PropTypes.func
};
export default CollectionField;