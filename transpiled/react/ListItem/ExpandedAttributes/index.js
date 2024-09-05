import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ExpandedAttribute from "cozy-ui/transpiled/react/ListItem/ExpandedAttributes/ExpandedAttribute";
import { makeAttrsLabelAndFormattedValue } from "cozy-ui/transpiled/react/ListItem/ExpandedAttributes/helpers";
import Alert from "cozy-ui/transpiled/react/Alert";
import Snackbar from "cozy-ui/transpiled/react/Snackbar";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import withListItemLocales from "cozy-ui/transpiled/react/ListItem/hoc/withListItemLocales";

var ExpandedAttributes = function ExpandedAttributes(_ref) {
  var doc = _ref.doc,
      expandedAttributes = _ref.expandedAttributes;

  var _useI18n = useI18n(),
      t = _useI18n.t,
      f = _useI18n.f,
      lang = _useI18n.lang;

  var _useState = useState({
    open: false,
    severity: 'primary',
    message: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertProps = _useState2[0],
      setAlertProps = _useState2[1];

  var attrsLabelAndFormattedValue = makeAttrsLabelAndFormattedValue({
    doc: doc,
    expandedAttributes: expandedAttributes,
    t: t,
    f: f,
    lang: lang
  });

  var handleClose = function handleClose() {
    return setAlertProps({
      open: false
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, attrsLabelAndFormattedValue.map(function (_ref2, index) {
    var label = _ref2.label,
        value = _ref2.value;
    return /*#__PURE__*/React.createElement(ExpandedAttribute, {
      key: index,
      label: label,
      value: value,
      setAlertProps: setAlertProps
    });
  }), alertProps.open && /*#__PURE__*/React.createElement(Snackbar, {
    open: true,
    onClose: handleClose
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "filled",
    severity: alertProps.severity,
    onClose: handleClose
  }, alertProps.message)));
};

ExpandedAttributes.propTypes = {
  doc: PropTypes.object,
  expandedAttributes: PropTypes.array
};
export default withListItemLocales(ExpandedAttributes);