import cx from 'classnames';
import React from 'react';
import Cell from "cozy-ui/transpiled/react/Table/Virtualized/Cell";
import Checkbox from "cozy-ui/transpiled/react/Checkbox";
import TableCell from "cozy-ui/transpiled/react/TableCell";

var RowContent = function RowContent(_ref) {
  var index = _ref.index,
      row = _ref.row,
      columns = _ref.columns,
      context = _ref.context,
      children = _ref.children,
      onSelectClick = _ref.onSelectClick,
      onLongPress = _ref.onLongPress,
      onClick = _ref.onClick;
  var selectedCount = context.selectedItems.length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableCell, {
    align: "center",
    padding: "checkbox"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    className: cx('virtualizedCheckbox', {
      visible: selectedCount > 0,
      checked: context.isSelectedItem(row)
    }),
    checked: context.isSelectedItem(row),
    inputProps: {
      'aria-labelledby': "enhanced-table-checkbox-".concat(index)
    },
    size: "small",
    onClick: function onClick(event) {
      return onSelectClick(row, event, index);
    }
  })), columns.map(function (column) {
    return /*#__PURE__*/React.createElement(Cell, {
      key: column.id,
      row: row,
      columns: columns,
      column: column,
      onClick: onClick,
      onLongPress: onLongPress
    }, children);
  }));
};

export default /*#__PURE__*/React.memo(RowContent);