import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import MuiListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  gutters: {
    paddingLeft: function paddingLeft(_ref) {
      var guttersValue = _ref.guttersValue;
      return guttersValue;
    },
    paddingRight: function paddingRight(_ref2) {
      var guttersValue = _ref2.guttersValue;
      return guttersValue;
    }
  }
}); // Return gutters size

var useGutters = function useGutters(_ref3) {
  var gutters = _ref3.gutters;
  return gutters === 'double' ? 32 : 16;
};

var ListSubheader = /*#__PURE__*/forwardRef(function (props, ref) {
  var guttersValue = useGutters(props);
  var styles = useStyles({
    guttersValue: guttersValue
  });
  return /*#__PURE__*/React.createElement(MuiListSubheader, _extends({}, props, {
    ref: ref,
    classes: merge(props.classes, styles),
    disableGutters: props.disableGutters || props.gutters === 'disabled'
  }));
});
ListSubheader.displayName = 'ListSubheader';
ListSubheader.defaultProps = {
  gutters: 'default'
};
ListSubheader.propTypes = {
  gutters: PropTypes.oneOf(['disabled', 'double', 'default'])
};
export default ListSubheader;