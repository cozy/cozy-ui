import React from 'react';
import cx from 'classnames';
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import CozyTheme from "cozy-ui/transpiled/react/providers/CozyTheme";
import ConfirmDialog from "cozy-ui/transpiled/react/CozyDialogs/ConfirmDialog";
import PropTypes from 'prop-types';
import Icon from "cozy-ui/transpiled/react/Icon";
import Paper from "cozy-ui/transpiled/react/Paper";
var useStyles = makeStyles({
  floatingIcon: {
    top: '-2.25rem',
    width: '4.5rem',
    height: '4.5rem'
  }
});
/**
 * Dialog for confirmation actions linked to the Cozy system (permissions, authentication, etc.)
 */

var PermissionDialog = function PermissionDialog(_ref) {
  var open = _ref.open,
      icon = _ref.icon,
      title = _ref.title,
      content = _ref.content,
      actions = _ref.actions,
      actionsLayout = _ref.actionsLayout,
      onClose = _ref.onClose;
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(CozyTheme, {
    variant: "inverted"
  }, /*#__PURE__*/React.createElement(ConfirmDialog, {
    open: open,
    size: "small",
    disableTitleAutoPadding: true,
    classes: {
      // remove overflow in makeOverride and replace it by u-ov-visible when https://github.com/cozy/cozy-ui/issues/2284 is solved
      paper: 'overflow'
    },
    componentsProps: {
      dialogTitle: {
        className: 'u-ta-center u-pt-2 u-pb-half'
      }
    },
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CozyTheme, {
      variant: "normal",
      className: "u-flex u-flex-justify-center"
    }, /*#__PURE__*/React.createElement(Paper, {
      square: true,
      elevation: 2,
      className: cx(styles.floatingIcon, 'u-pos-absolute u-bdrs-circle u-flex u-bg-white')
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "u-m-auto",
      icon: icon,
      size: 48
    }))), title),
    content: content,
    actions: actions,
    actionsLayout: actionsLayout,
    onClose: onClose
  }));
};

PermissionDialog.propTypes = {
  /** To open/close the modal */
  open: PropTypes.bool.isRequired,

  /** Icon to describe the action to be taken */
  icon: PropTypes.func.isRequired,

  /** Title of the modal */
  title: PropTypes.string.isRequired,

  /** Content of the modal */
  content: PropTypes.node,

  /** Actions of the modal */
  actions: PropTypes.node,

  /** Actions can be displayed as "rows" or "columns" */
  actionsLayout: PropTypes.oneOf(['row', 'column']),

  /** Triggered function on modal close action */
  onClose: PropTypes.func
};
export default PermissionDialog;