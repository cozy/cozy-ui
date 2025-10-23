import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { getDisplayName } from 'cozy-client/dist/models/contact';
import Typography from "cozy-ui/transpiled/react/Typography";

var ContactName = function ContactName(_ref) {
  var _contact$name;

  var contact = _ref.contact;
  var familyName = (_contact$name = contact.name) === null || _contact$name === void 0 ? void 0 : _contact$name.familyName;
  var displayName = getDisplayName(contact);
  var namesToDisplay = displayName === null || displayName === void 0 ? void 0 : displayName.split(' ');
  return /*#__PURE__*/React.createElement(Typography, {
    "data-testid": "ContactName" // used by a test in cozy-contacts
    ,
    className: "u-ml-1",
    noWrap: true,
    display: "inline"
  }, namesToDisplay === null || namesToDisplay === void 0 ? void 0 : namesToDisplay.map(function (name, index) {
    var isLastItem = index === namesToDisplay.length - 1;
    return /*#__PURE__*/React.createElement("span", {
      key: "display-".concat(index),
      className: cx({
        'u-fw-bold': name === familyName
      })
    }, name, !isLastItem && /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0"));
  }));
};

ContactName.propTypes = {
  contact: PropTypes.object.isRequired
};
export default ContactName;