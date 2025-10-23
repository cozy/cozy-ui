import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ConfirmDialog from "cozy-ui/transpiled/react/CozyDialogs/ConfirmDialog";
import Icon from "cozy-ui/transpiled/react/Icon";
import Paper from "cozy-ui/transpiled/react/Paper";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
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
  return /*#__PURE__*/React.createElement(ConfirmDialog, {
    open: open,
    size: "small",
    disableTitleAutoPadding: true,
    classes: {
      paper: 'u-ov-visible'
    },
    componentsProps: {
      dialogTitle: {
        className: 'u-flex u-flex-justify-center u-ta-center u-pt-2 u-pb-half'
      },
      dialogContent: {
        className: 'u-ov-visible'
      }
    },
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Paper, {
      elevation: 2,
      className: cx(styles.floatingIcon, 'u-pos-absolute u-bdrs-circle u-flex')
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "u-m-auto",
      icon: icon,
      size: 48
    })), title),
    content: content,
    actions: actions,
    actionsLayout: actionsLayout,
    onClose: onClose
  });
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