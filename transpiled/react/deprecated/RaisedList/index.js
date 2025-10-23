import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logRaisedListDepecrated = createDepreciationLogger();
/**
 * @deprecated Please use a combination of List & Paper : <Paper elevation={4}><List /></Paper>
 */

export default (function (props) {
  logRaisedListDepecrated('RaisedList is deprecated, please use a combination of List & Paper : <Paper elevation={4}><List /></Paper>');
  return /*#__PURE__*/React.createElement(Paper, {
    elevation: 2
  }, /*#__PURE__*/React.createElement(List, props));
});