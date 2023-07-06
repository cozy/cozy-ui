import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from "cozy-ui/transpiled/react/Snackbar";
import Alert from "cozy-ui/transpiled/react/Alert";
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import withListItemLocales from "cozy-ui/transpiled/react/ListItem/hoc/withListItemLocales";
import ExpandedAttribute from "cozy-ui/transpiled/react/ListItem/ExpandedAttributes/ExpandedAttribute";
import { getValueExtended, makeAttrsKeyAndFormatedValue } from "cozy-ui/transpiled/react/ListItem/ExpandedAttributes/helpers";

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

  var attrsKeyAndFormatedValue = makeAttrsKeyAndFormatedValue({
    doc: doc,
    expandedAttributes: expandedAttributes,
    f: f,
    lang: lang
  });

  var handleClose = function handleClose() {
    return setAlertProps({
      open: false
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, attrsKeyAndFormatedValue.map(function (_ref2, index) {
    var attrKey = _ref2.attrKey,
        attrFormatedValue = _ref2.attrFormatedValue;
    var label = t("ListItem.attributes.".concat(attrKey));
    var valueExtended = getValueExtended({
      attrKey: attrKey,
      value: attrFormatedValue,
      t: t
    });
    return /*#__PURE__*/React.createElement(ExpandedAttribute, {
      key: index,
      label: label,
      value: valueExtended,
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