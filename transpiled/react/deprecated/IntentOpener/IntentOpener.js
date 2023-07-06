import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["options", "action", "doctype", "children", "closable", "create", "tag", "into", "onComplete", "onDismiss"];
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IntentModal from "cozy-ui/transpiled/react/deprecated/IntentModal";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logIntentOpenerDepecrated = createDepreciationLogger();
/**
 * Wrapper that adds an `onClick` handler to its children that opens a modal
 * for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 *
 * @deprecated Please use IntentDialogOpener instead
 */

var IntentOpener = function IntentOpener(props) {
  logIntentOpenerDepecrated('The IntentOpener component has been deprecated and should be replaced by IntentDialogOpener.');

  var options = props.options,
      action = props.action,
      doctype = props.doctype,
      children = props.children,
      closable = props.closable,
      create = props.create,
      tag = props.tag,
      into = props.into,
      onComplete = props.onComplete,
      onDismiss = props.onDismiss,
      modalProps = _objectWithoutProperties(props, _excluded);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpened = _useState2[0],
      setModalOpened = _useState2[1];

  var openModal = function openModal() {
    return setModalOpened(true);
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
    elements.push( /*#__PURE__*/React.createElement(IntentModal, _extends({
      key: "intent-modal",
      closable: closable,
      overflowHidden: true,
      dismissAction: handleDismiss,
      action: action,
      doctype: doctype,
      options: options,
      onComplete: handleComplete,
      create: create,
      into: into
    }, modalProps)));
  }

  return /*#__PURE__*/React.createElement(Tag, null, elements);
};

IntentOpener.propTypes = {
  /** Element on which the onClick handler will be added */
  children: PropTypes.element.isRequired,

  /** What should happen when the intent has completed */
  onComplete: PropTypes.func,

  /** What should happen when the modal is dimissed */
  onDismiss: PropTypes.func,

  /** Action you want to execute */
  action: PropTypes.string.isRequired,

  /** Doctype on which you want to execute the action */
  doctype: PropTypes.string.isRequired,

  /** Where the modal should be rendered in the DOM */
  into: PropTypes.string
};
IntentOpener.defaultProps = {
  tag: 'span',
  closable: true
};
export default IntentOpener;