import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useContext, useState } from 'react';
import { translatedDefaultSelectedGroup } from "cozy-ui/transpiled/react/Contacts/GroupsSelect/helpers";
import { locales } from "cozy-ui/transpiled/react/Contacts/GroupsSelect/locales";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
var SelectedGroupContext = /*#__PURE__*/React.createContext();
export var useSelectedGroup = function useSelectedGroup() {
  var context = useContext(SelectedGroupContext);

  if (!context) {
    throw new Error('useSelectedGroup must be used within a SelectedGroupProvider');
  }

  return context;
};

var SelectedGroupProvider = function SelectedGroupProvider(_ref) {
  var children = _ref.children;
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useState = useState(translatedDefaultSelectedGroup(t)),
      _useState2 = _slicedToArray(_useState, 2),
      selectedGroup = _useState2[0],
      setSelectedGroup = _useState2[1];

  var contextValue = {
    selectedGroup: selectedGroup,
    setSelectedGroup: setSelectedGroup
  };
  return /*#__PURE__*/React.createElement(SelectedGroupContext.Provider, {
    value: contextValue
  }, children);
};

export default SelectedGroupProvider;