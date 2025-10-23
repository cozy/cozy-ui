import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import isEqual from 'lodash/isEqual';
import React, { createContext, useContext, useState } from 'react';
var SelectionContext = /*#__PURE__*/createContext();
export var useSelection = function useSelection() {
  var context = useContext(SelectionContext);

  if (!context) {
    throw new Error('useSelection must be used within a SelectionProvider');
  }

  return context;
};
/**
 * This provider allows you to manage item selection
 */

var SelectionProvider = function SelectionProvider(_ref) {
  var children = _ref.children;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedItemsId = _useState2[0],
      setSelectedItemsId = _useState2[1];

  var isSelectedItem = function isSelectedItem(itemId) {
    return selectedItemsId.some(function (selectedItemId) {
      return selectedItemId === itemId;
    });
  };

  var isSelectionEnabled = selectedItemsId.length > 0;

  var addSelectedItem = function addSelectedItem(itemId) {
    setSelectedItemsId(function (prev) {
      return [].concat(_toConsumableArray(prev), [itemId]);
    });
  };

  var removeSelectedItem = function removeSelectedItem(itemId) {
    setSelectedItemsId(function (prev) {
      return prev.filter(function (el) {
        return el !== itemId;
      });
    });
  };

  var toggleSelectedItem = function toggleSelectedItem(itemId) {
    if (isSelectedItem(itemId)) {
      removeSelectedItem(itemId);
    } else {
      addSelectedItem(itemId);
    }
  };

  var selectAll = function selectAll(itemsId) {
    setSelectedItemsId(itemsId);
  };

  var unselectAll = function unselectAll() {
    setSelectedItemsId([]);
  };

  var isSelectedAllItems = function isSelectedAllItems(itemsId) {
    var a = selectedItemsId.sort();
    var b = itemsId.sort();
    return isEqual(a, b);
  };

  var toggleSelectAllItems = function toggleSelectAllItems(itemsId) {
    if (isSelectedAllItems(itemsId)) {
      unselectAll();
    } else {
      selectAll(itemsId);
    }
  };

  return /*#__PURE__*/React.createElement(SelectionContext.Provider, {
    value: {
      selectedItemsId: selectedItemsId,
      addSelectedItem: addSelectedItem,
      removeSelectedItem: removeSelectedItem,
      toggleSelectedItem: toggleSelectedItem,
      selectAll: selectAll,
      toggleSelectAllItems: toggleSelectAllItems,
      isSelectedItem: isSelectedItem,
      isSelectionEnabled: isSelectionEnabled,
      isSelectedAllItems: isSelectedAllItems
    }
  }, children);
};

export default /*#__PURE__*/React.memo(SelectionProvider);