import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { locales } from "cozy-ui/transpiled/react/Contacts/Header/locales";
import { ControlDefault } from "cozy-ui/transpiled/react/SelectBox";
import { useBreakpoints } from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
import GroupsSelect from "cozy-ui/transpiled/react/Contacts/GroupsSelect/GroupsSelect";
import { useSelectedGroup } from "cozy-ui/transpiled/react/Contacts/GroupsSelect/GroupsSelectProvider";
import { translatedDefaultSelectedGroup } from "cozy-ui/transpiled/react/Contacts/GroupsSelect/helpers";

var setGroupsSelectOptions = function setGroupsSelectOptions(allGroups, defaultSelectedGroup) {
  return allGroups.length > 0 ? [defaultSelectedGroup].concat(allGroups) : allGroups;
};

var useGroupsSelectCustomStyles = function useGroupsSelectCustomStyles() {
  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  return {
    container: function container(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        width: isMobile ? '100%' : '50%'
      });
    },
    noOptionsMessage: function noOptionsMessage(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        textAlign: 'left'
      });
    }
  };
};

var ControlDefaultWithTestId = function ControlDefaultWithTestId(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(ControlDefault, _extends({}, props, {
    innerProps: _objectSpread(_objectSpread({}, props.innerProps), {}, {
      'data-testid': 'selectBox-controlDefault',
      className: 'u-bdrs-4'
    })
  }));
};

var GroupsSelection = function GroupsSelection(_ref2) {
  var allGroups = _ref2.allGroups,
      onGroupCreate = _ref2.onGroupCreate,
      onGroupUpdate = _ref2.onGroupUpdate,
      onGroupDelete = _ref2.onGroupDelete;
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useSelectedGroup = useSelectedGroup(),
      selectedGroup = _useSelectedGroup.selectedGroup,
      setSelectedGroup = _useSelectedGroup.setSelectedGroup;

  var groupsSelectOptions = setGroupsSelectOptions(allGroups, translatedDefaultSelectedGroup(t));
  var groupsSelectCustomStyles = useGroupsSelectCustomStyles();
  return /*#__PURE__*/React.createElement(GroupsSelect, {
    allGroups: groupsSelectOptions,
    value: selectedGroup,
    noOptionsMessage: function noOptionsMessage() {
      return t('Contacts.Header.filter.no-group');
    },
    styles: groupsSelectCustomStyles,
    closeMenuOnSelect: true,
    components: {
      Control: ControlDefaultWithTestId
    },
    onChange: setSelectedGroup,
    onGroupCreate: onGroupCreate,
    onGroupUpdate: onGroupUpdate,
    onGroupDelete: onGroupDelete
  });
};

export default GroupsSelection;