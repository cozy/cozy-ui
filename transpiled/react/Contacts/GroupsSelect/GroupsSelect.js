import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useClient } from 'cozy-client';
import CustomMenu from "cozy-ui/transpiled/react/Contacts/GroupsSelect/SelectBox/Menu";
import CustomOption from "cozy-ui/transpiled/react/Contacts/GroupsSelect/SelectBox/Option";
import CustomSelectContainer from "cozy-ui/transpiled/react/Contacts/GroupsSelect/SelectBox/SelectContainer";
import useGroupsSelect from "cozy-ui/transpiled/react/Contacts/GroupsSelect/useGroupSelect";
import ClickAwayListener from "cozy-ui/transpiled/react/ClickAwayListener";
import SelectBox from "cozy-ui/transpiled/react/SelectBox";
import { useBreakpoints } from "cozy-ui/transpiled/react/providers/Breakpoints";

var captureEscapeEvent = function captureEscapeEvent(e) {
  if (e.key === 'Escape') {
    e.stopPropagation();
    e.target.blur();
  }
};

export var GroupsSelect = function GroupsSelect(_ref) {
  var allGroups = _ref.allGroups,
      closeMenuOnSelect = _ref.closeMenuOnSelect,
      value = _ref.value,
      styles = _ref.styles,
      isMulti = _ref.isMulti,
      noOptionsMessage = _ref.noOptionsMessage,
      withCheckbox = _ref.withCheckbox,
      components = _ref.components,
      onGroupCreated = _ref.onGroupCreated,
      onChange = _ref.onChange,
      onGroupCreate = _ref.onGroupCreate,
      onGroupUpdate = _ref.onGroupUpdate,
      onGroupDelete = _ref.onGroupDelete,
      menuPosition = _ref.menuPosition;
  var client = useClient();

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var _useState = useState({
    menuIsOpen: false,
    editedGroupId: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      menuIsOpen = _useState2$.menuIsOpen,
      editedGroupId = _useState2$.editedGroupId,
      setState = _useState2[1];

  var _useGroupsSelect = useGroupsSelect({
    allGroups: allGroups,
    onGroupCreated: onGroupCreated,
    client: client,
    onGroupCreate: onGroupCreate,
    onGroupUpdate: onGroupUpdate
  }),
      createGroup = _useGroupsSelect.createGroup,
      renameGroup = _useGroupsSelect.renameGroup;

  var toggleMenu = function toggleMenu() {
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        menuIsOpen: !prev.menuIsOpen
      });
    });
  };

  var closeMenu = function closeMenu() {
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        menuIsOpen: false
      });
    });
  };

  var setEditedGroupId = function setEditedGroupId(id) {
    setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        editedGroupId: id
      });
    });
  };

  var handleChange = function handleChange(props) {
    if (closeMenuOnSelect) {
      closeMenu();
    }

    onChange(props);
  };

  var handleDelete = function handleDelete(group) {
    closeMenu();
    onGroupDelete(group);
  };

  var defaultComponents = {
    Menu: CustomMenu,
    Option: CustomOption,
    SelectContainer: CustomSelectContainer
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: menuIsOpen ? closeMenu : function () {}
  }, /*#__PURE__*/React.createElement(SelectBox, {
    className: isMobile ? 'u-mb-half' : 'u-mr-half',
    classNamePrefix: "react-select",
    isMulti: isMulti,
    withCheckbox: withCheckbox,
    menuIsOpen: menuIsOpen,
    blurInputOnSelect: true,
    hideSelectedOptions: false,
    isSearchable: false,
    isClearable: false,
    closeMenuOnSelect: closeMenuOnSelect,
    tabSelectsValue: false,
    onKeyDown: captureEscapeEvent,
    noOptionsMessage: noOptionsMessage,
    options: allGroups,
    value: value,
    onChange: handleChange,
    getOptionLabel: function getOptionLabel(group) {
      return group.name;
    },
    getOptionValue: function getOptionValue(group) {
      return group._id;
    },
    components: _objectSpread(_objectSpread({}, defaultComponents), components),
    createGroup: createGroup,
    deleteGroup: handleDelete,
    renameGroup: renameGroup,
    styles: styles,
    onControlClicked: toggleMenu,
    setEditedGroupId: setEditedGroupId,
    editedGroupId: editedGroupId,
    menuPosition: menuPosition,
    fullwidth: true
  })));
};
GroupsSelect.propTypes = {
  allGroups: PropTypes.array.isRequired,
  styles: PropTypes.object,
  // for multiple selections, value can be an array
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  // to customize react-select elements
  components: PropTypes.object,
  // to define if it is possible to select more than one option
  isMulti: PropTypes.bool,
  // noOptionsMessage is used to show a message when there is no options in the menu list
  noOptionsMessage: PropTypes.func,
  // hide/show checkbox besides menu list options
  withCheckbox: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  // function to be triggered after creating a group
  onGroupCreated: PropTypes.func,
  // function to be triggered when creating a group
  onGroupCreate: PropTypes.func,
  // function to be triggered when updating a group
  onGroupUpdate: PropTypes.func,
  // function to be triggered when deleting a group
  onGroupDelete: PropTypes.func,
  closeMenuOnSelect: PropTypes.bool,
  menuPosition: PropTypes.oneOf(['fixed', 'absolute'])
};
GroupsSelect.defaultProps = {
  isMulti: false,
  components: {},
  closeMenuOnSelect: false
};
GroupsSelect.propTypes = {
  allGroups: PropTypes.array.isRequired,
  onGroupCreate: PropTypes.func.isRequired,
  onGroupUpdate: PropTypes.func.isRequired,
  onGroupDelete: PropTypes.func.isRequired
};
export default GroupsSelect;