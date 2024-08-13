import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["isOver"];
import React from 'react';
import PropTypes from 'prop-types';
import MuiBackdrop from '@material-ui/core/Backdrop';
import cx from 'classnames';
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  isOver: {
    zIndex: 'calc(var(--zIndex-modal-toolbar) + 1)' // to be over a modal if used inside it

  }
});

var Backdrop = function Backdrop(_ref) {
  var isOver = _ref.isOver,
      props = _objectWithoutProperties(_ref, _excluded);

  var styles = useStyles();
  return /*#__PURE__*/React.createElement(MuiBackdrop, _extends({}, props, {
    className: cx(_defineProperty({}, styles.isOver, isOver), props.className)
  }));
};

Backdrop.propTypes = {
  /** Whether the Backdrop is over modal */
  isOver: PropTypes.bool
};
export default Backdrop;