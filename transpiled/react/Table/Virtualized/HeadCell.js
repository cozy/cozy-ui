import React from 'react';
import TableCell from "cozy-ui/transpiled/react/TableCell";
import TableSortLabel from "cozy-ui/transpiled/react/TableSortLabel";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  root: {
    width: function width(_ref) {
      var column = _ref.column;
      return column.width;
    },
    maxWidth: function maxWidth(_ref2) {
      var column = _ref2.column;
      return column.maxWidth;
    }
  }
});

var TableHeadCell = function TableHeadCell(_ref3) {
  var _column$textAlign;

  var className = _ref3.className,
      column = _ref3.column,
      orderBy = _ref3.orderBy,
      orderDirection = _ref3.orderDirection,
      onClick = _ref3.onClick;
  var classes = useStyles({
    column: column
  });
  return /*#__PURE__*/React.createElement(TableCell, {
    key: column.id,
    classes: classes,
    align: (_column$textAlign = column.textAlign) !== null && _column$textAlign !== void 0 ? _column$textAlign : 'left',
    padding: column.disablePadding ? 'none' : 'normal',
    sortDirection: orderBy === column.id ? orderDirection : false
  }, column.sortable !== false ? /*#__PURE__*/React.createElement(TableSortLabel, {
    active: orderBy === column.id,
    direction: orderBy === column.id ? orderDirection : 'asc',
    onClick: onClick
  }, column.label, orderBy === column.id && /*#__PURE__*/React.createElement("span", {
    className: className
  }, orderDirection === 'desc' ? 'sorted descending' : 'sorted ascending')) : column.label);
};

export default TableHeadCell;