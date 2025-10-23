import React from 'react';
import Badge from "cozy-ui/transpiled/react/Badge";
import Paper from "cozy-ui/transpiled/react/Paper";
import Typography from "cozy-ui/transpiled/react/Typography";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  root: {
    width: 'fit-content'
  }
});

var DragPreview = function DragPreview(_ref) {
  var fileName = _ref.fileName,
      selectedCount = _ref.selectedCount;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(React.Fragment, null, selectedCount > 1 ? /*#__PURE__*/React.createElement(Badge, {
    badgeContent: selectedCount,
    size: "large",
    color: "primary",
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    overlap: "rectangular"
  }, /*#__PURE__*/React.createElement(Paper, {
    classes: classes,
    className: "u-p-half u-maw-5"
  }, /*#__PURE__*/React.createElement(Typography, null, fileName))) : /*#__PURE__*/React.createElement(Paper, {
    classes: classes,
    className: "u-p-half u-maw-5"
  }, /*#__PURE__*/React.createElement(Typography, null, fileName)));
};

export default /*#__PURE__*/React.memo(DragPreview);