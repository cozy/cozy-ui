import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import get from 'lodash/get';
import React, { useState } from 'react';
import { useOnLongPress } from 'rooks';
import TableCell from "cozy-ui/transpiled/react/TableCell";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  root: {
    cursor: function cursor(_ref) {
      var isClickable = _ref.isClickable;
      return isClickable ? 'pointer' : undefined;
    },
    width: function width(_ref2) {
      var column = _ref2.column;
      return column.width;
    },
    maxWidth: function maxWidth(_ref3) {
      var column = _ref3.column;
      return column.maxWidth;
    }
  }
});

var Cell = function Cell(_ref4) {
  var _column$textAlign;

  var row = _ref4.row,
      columns = _ref4.columns,
      column = _ref4.column,
      onClick = _ref4.onClick,
      onLongPress = _ref4.onLongPress,
      children = _ref4.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLongPress = _useState2[0],
      setIsLongPress = _useState2[1]; // onClick is triggered after a long press anyway, so we need this bool to avoid this behavior


  var classes = useStyles({
    column: column,
    isClickable: !!onClick
  });
  var cellContent = get(row, column.id, '—');
  var longPressRef = useOnLongPress(function () {
    if (column.disableClick) {
      return;
    }

    setIsLongPress(true);
    onLongPress === null || onLongPress === void 0 ? void 0 : onLongPress(row, column);
  });

  var handleClick = function handleClick() {
    if (column.disableClick) {
      return;
    }

    if (!isLongPress) {
      onClick === null || onClick === void 0 ? void 0 : onClick(row, column);
    } else {
      setIsLongPress(false);
    }
  };

  return /*#__PURE__*/React.createElement(TableCell, {
    key: column.id,
    ref: longPressRef,
    classes: classes,
    align: (_column$textAlign = column.textAlign) !== null && _column$textAlign !== void 0 ? _column$textAlign : 'left',
    padding: column.disablePadding ? 'none' : 'normal',
    onClick: handleClick,
    onContextMenu: isLongPress ? function (ev) {
      return ev.preventDefault();
    } : undefined
  }, children ? React.Children.map(children, function (child) {
    return /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
      row: row,
      columns: columns,
      column: column,
      cell: cellContent
    }) : null;
  }) : cellContent);
};

export default /*#__PURE__*/React.memo(Cell);