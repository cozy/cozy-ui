import cx from 'classnames';
import React from 'react';
import TableHeadCell from "cozy-ui/transpiled/react/Table/Virtualized/HeadCell";
import Checkbox from "cozy-ui/transpiled/react/Checkbox";
import TableCell from "cozy-ui/transpiled/react/TableCell";
import TableRow from "cozy-ui/transpiled/react/TableRow";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
});

var FixedHeaderContent = function FixedHeaderContent(_ref) {
  var columns = _ref.columns,
      orderDirection = _ref.orderDirection,
      orderBy = _ref.orderBy,
      rowCount = _ref.rowCount,
      context = _ref.context,
      _onClick = _ref.onClick,
      onSelectAllClick = _ref.onSelectAllClick;
  var classes = useStyles();
  var selectedCount = context.selectedItems.length;
  return /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, {
    align: "center",
    padding: "checkbox"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    className: cx('virtualizedCheckbox', {
      checked: selectedCount > 0
    }),
    indeterminate: selectedCount > 0 && selectedCount < rowCount,
    checked: rowCount > 0 && selectedCount === rowCount,
    inputProps: {
      'aria-label': 'select all'
    },
    size: "small",
    onChange: onSelectAllClick
  })), columns.map(function (column) {
    return /*#__PURE__*/React.createElement(TableHeadCell, {
      key: column.id,
      className: classes.visuallyHidden,
      column: column,
      orderDirection: orderDirection,
      orderBy: orderBy,
      onClick: function onClick() {
        return _onClick(column.id);
      }
    });
  }));
};

export default FixedHeaderContent;