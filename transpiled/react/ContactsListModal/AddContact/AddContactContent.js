import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from "cozy-ui/transpiled/react/Icon";
import PeopleIcon from "cozy-ui/transpiled/react/Icons/People";
import { Media, Img, Bd } from "cozy-ui/transpiled/react/deprecated/Media";
import TextField from "cozy-ui/transpiled/react/TextField";
import Typography from "cozy-ui/transpiled/react/Typography";
import { withContactsListLocales } from "cozy-ui/transpiled/react/ContactsListModal/withContactsListLocales";
var styles = {
  "icon": "styles__icon___gvQ89"
};

var AddContactContent = function AddContactContent(_ref) {
  var t = _ref.t,
      setContactValues = _ref.setContactValues;

  var handleChange = function handleChange(ev) {
    var _ev$target = ev.target,
        name = _ev$target.name,
        value = _ev$target.value;
    setContactValues(function (v) {
      return _objectSpread(_objectSpread({}, v), {}, _defineProperty({}, name, value));
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h5"
  }, t('coordinates')), /*#__PURE__*/React.createElement(Media, null, /*#__PURE__*/React.createElement(Img, {
    className: styles.icon
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: PeopleIcon
  })), /*#__PURE__*/React.createElement(Bd, {
    className: "u-mr-1"
  }, /*#__PURE__*/React.createElement(TextField, {
    className: "u-mt-1",
    variant: "outlined",
    fullWidth: true,
    id: 'givenName',
    name: "givenName",
    label: t('givenName'),
    onChange: handleChange
  }))), /*#__PURE__*/React.createElement(Media, null, /*#__PURE__*/React.createElement(Bd, {
    className: "u-ml-3 u-mr-1"
  }, /*#__PURE__*/React.createElement(TextField, {
    className: "u-mt-1",
    variant: "outlined",
    fullWidth: true,
    id: 'familyName',
    name: "familyName",
    label: t('familyName'),
    onChange: handleChange
  }))));
};

AddContactContent.propTypes = {
  t: PropTypes.func,
  setContactValues: PropTypes.func
};
export default withContactsListLocales(AddContactContent);