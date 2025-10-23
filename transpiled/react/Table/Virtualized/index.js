import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["rows", "columns", "groups", "defaultOrder", "secondarySort", "selectedItems", "onSelect", "onSelectAll", "isSelectedItem", "componentsProps", "context", "components", "onSortChange", "isNewItem"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import PropTypes from 'prop-types';
import React, { useState, forwardRef } from 'react';
import { TableVirtuoso, GroupedTableVirtuoso } from 'react-virtuoso';
import FixedHeaderContent from "cozy-ui/transpiled/react/Table/Virtualized/FixedHeaderContent";
import RowContent from "cozy-ui/transpiled/react/Table/Virtualized/RowContent";
import { stableSort, getComparator } from "cozy-ui/transpiled/react/Table/Virtualized/helpers";
import virtuosoComponents from "cozy-ui/transpiled/react/Table/Virtualized/virtuosoComponents";
import TableCell from "cozy-ui/transpiled/react/TableCell";
var VirtualizedTable = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _defaultOrder$directi, _defaultOrder$by;

  var rows = _ref.rows,
      columns = _ref.columns,
      groups = _ref.groups,
      defaultOrder = _ref.defaultOrder,
      secondarySort = _ref.secondarySort,
      selectedItems = _ref.selectedItems,
      onSelect = _ref.onSelect,
      onSelectAll = _ref.onSelectAll,
      isSelectedItem = _ref.isSelectedItem,
      componentsProps = _ref.componentsProps,
      context = _ref.context,
      components = _ref.components,
      onSortChange = _ref.onSortChange,
      isNewItem = _ref.isNewItem,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState((_defaultOrder$directi = defaultOrder === null || defaultOrder === void 0 ? void 0 : defaultOrder.direction) !== null && _defaultOrder$directi !== void 0 ? _defaultOrder$directi : 'asc'),
      _useState2 = _slicedToArray(_useState, 2),
      orderDirection = _useState2[0],
      setOrderDirection = _useState2[1];

  var _useState3 = useState((_defaultOrder$by = defaultOrder === null || defaultOrder === void 0 ? void 0 : defaultOrder.by) !== null && _defaultOrder$by !== void 0 ? _defaultOrder$by : undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      orderBy = _useState4[0],
      setOrderBy = _useState4[1];

  var sortedData = orderBy ? stableSort(rows, getComparator(orderDirection, orderBy)) : rows;
  var data = secondarySort ? secondarySort(sortedData) : sortedData;

  var _ref2 = (groups === null || groups === void 0 ? void 0 : groups(data)) || {},
      groupLabels = _ref2.groupLabels,
      groupCounts = _ref2.groupCounts;

  var isGroupedTable = !!groupCounts;

  var _context = _objectSpread(_objectSpread(_objectSpread({}, context), isGroupedTable && {
    data: data
  }), {}, {
    // we use directly `data` prop if no groupCounts
    isSelectedItem: isSelectedItem,
    selectedItems: selectedItems,
    isNewItem: isNewItem
  });

  var handleSort = function handleSort(property) {
    var isAsc = orderBy === property && orderDirection === 'asc';
    var newOrder = isAsc ? 'desc' : 'asc';
    setOrderDirection(newOrder);
    setOrderBy(property);
    onSortChange === null || onSortChange === void 0 ? void 0 : onSortChange({
      order: newOrder,
      orderBy: property
    });
  };

  var handleSelectAll = function handleSelectAll(event) {
    var _event$target;

    if (event !== null && event !== void 0 && (_event$target = event.target) !== null && _event$target !== void 0 && _event$target.checked) {
      onSelectAll(rows);
      return;
    }

    onSelectAll([]);
  };

  var Component = isGroupedTable ? GroupedTableVirtuoso : TableVirtuoso;
  return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
    ref: ref,
    data: !isGroupedTable ? data : undefined,
    groupCounts: isGroupedTable ? groupCounts : [],
    context: _context,
    components: components || virtuosoComponents,
    fixedHeaderContent: function fixedHeaderContent() {
      return /*#__PURE__*/React.createElement(FixedHeaderContent, _extends({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.fixedHeaderContent, {
        columns: columns,
        rowCount: rows.length,
        context: _context,
        orderDirection: orderDirection,
        orderBy: orderBy,
        onClick: handleSort,
        onSelectAllClick: handleSelectAll
      }));
    }
  }, isGroupedTable && {
    groupContent: function groupContent(index) {
      return /*#__PURE__*/React.createElement(TableCell, {
        colSpan: columns.length + 1,
        size: "small"
      }, groupLabels[index]);
    }
  }, {
    itemContent: function itemContent(index) {
      var _componentsProps$rowC;

      return /*#__PURE__*/React.createElement(RowContent, _extends({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.rowContent, {
        index: index,
        row: data[index],
        columns: columns,
        context: _context,
        onSelectClick: onSelect
      }), componentsProps === null || componentsProps === void 0 ? void 0 : (_componentsProps$rowC = componentsProps.rowContent) === null || _componentsProps$rowC === void 0 ? void 0 : _componentsProps$rowC.children);
    },
    rowSpan: 2
  }));
});
VirtualizedTable.displayName = 'VirtualizedTable';
VirtualizedTable.defaultProps = {
  selectedItems: [],
  isSelectedItem: function isSelectedItem() {},
  onSelect: function onSelect() {},
  onSelectAll: function onSelectAll() {}
};
VirtualizedTable.propTypes = {
  /** Rows to display in the table */
  rows: PropTypes.array,

  /** Column configuration */
  columns: PropTypes.array,

  /** Returned object is: PropTypes.shape({ groupLabels: PropTypes.array, groupCounts: PropTypes.array }) */
  groups: PropTypes.func,

  /** Default sorting configuration */
  defaultOrder: PropTypes.shape({
    direction: PropTypes.oneOf(['asc', 'desc']),
    by: PropTypes.string
  }),

  /** Sort files by type to put directory and trash before files */
  secondarySort: PropTypes.func,

  /** Array of selected items */
  selectedItems: PropTypes.array,

  /** Callback function when a row is selected */
  onSelect: PropTypes.func,

  /** Callback function when all rows are selected/deselected */
  onSelectAll: PropTypes.func,

  /** Function to determine if a row is selected */
  isSelectedItem: PropTypes.func,

  /** Callback called after the sort */
  onSortChange: PropTypes.func,

  /** Function to determine if a row is new */
  isNewItem: PropTypes.func
};
export default VirtualizedTable;