import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["options", "action", "doctype", "children", "closable", "showCloseButton", "create", "tag", "onComplete", "onDismiss", "iframeProps", "Component"];
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { DialogCloseButton } from "cozy-ui/transpiled/react/CozyDialogs";
import Dialog from "cozy-ui/transpiled/react/Dialog";
import IntentIframe, { iframeProps } from "cozy-ui/transpiled/react/IntentIframe";
/**
 * Wrapper that adds an `onClick` handler to its children that opens a dialog
 * for the specified intent.
 */

var IntentDialogOpener = function IntentDialogOpener(props) {
  var options = props.options,
      action = props.action,
      doctype = props.doctype,
      children = props.children,
      closable = props.closable,
      showCloseButton = props.showCloseButton,
      create = props.create,
      tag = props.tag,
      onComplete = props.onComplete,
      onDismiss = props.onDismiss,
      iframeProps = props.iframeProps,
      Component = props.Component,
      componentProps = _objectWithoutProperties(props, _excluded);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpened = _useState2[0],
      setModalOpened = _useState2[1];

  var openModal = function openModal(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    setModalOpened(true);
  };

  var closeModal = function closeModal() {
    return setModalOpened(false);
  };

  var handleComplete = function handleComplete(result) {
    closeModal();
    onComplete && onComplete(result);
  };

  var handleDismiss = function handleDismiss() {
    closeModal();
    onDismiss && onDismiss();
  };

  var Tag = tag; // React needs uppercase element names

  var elements = [/*#__PURE__*/React.cloneElement(children, {
    key: 'opener',
    onClick: openModal
  })];

  if (modalOpened) {
    elements.push( /*#__PURE__*/React.createElement(Component, _extends({
      key: "intent-modal",
      open: modalOpened,
      onClose: closable && handleDismiss
    }, componentProps), closable && showCloseButton && /*#__PURE__*/React.createElement(DialogCloseButton, {
      onClick: handleDismiss
    }), /*#__PURE__*/React.createElement(IntentIframe, {
      action: action,
      type: doctype,
      data: options,
      create: create,
      onCancel: handleDismiss,
      onTerminate: handleComplete,
      iframeProps: iframeProps
    })));
  }

  return /*#__PURE__*/React.createElement(Tag, null, elements);
};

IntentDialogOpener.propTypes = {
  /** Element on which the onClick handler will be added */
  children: PropTypes.element.isRequired,

  /** What should happen when the intent has completed */
  onComplete: PropTypes.func,

  /** What should happen when the intent has dismissed */
  onDismiss: PropTypes.func,

  /** Action you want to execute */
  action: PropTypes.string.isRequired,

  /** Doctype on which you want to execute the action */
  doctype: PropTypes.string.isRequired,

  /** Whether the dialog is closable by itself (not by the Intent) with a button or by clicking outside of it */
  closable: PropTypes.bool.isRequired,

  /** Whether the dialog close button is shown */
  showCloseButton: PropTypes.bool.isRequired,

  /** Tag used to wrap children */
  tag: PropTypes.string.isRequired,

  /** Component to be used instead of the dialog */
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /** Props to be passed to the iframe */
  iframeProps: iframeProps
};
IntentDialogOpener.defaultProps = {
  tag: 'span',
  closable: true,
  Component: Dialog,
  showCloseButton: true
};
export default IntentDialogOpener;