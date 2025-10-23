import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import GroupsSelection from "cozy-ui/transpiled/react/Contacts/Header/GroupsSelection";
import ImportDropdown from "cozy-ui/transpiled/react/Contacts/Header/ImportDropdown";
import SearchInput from "cozy-ui/transpiled/react/Contacts/Header/SearchInput";
import { locales } from "cozy-ui/transpiled/react/Contacts/Header/locales";
import Button from "cozy-ui/transpiled/react/Buttons";
import Icon from "cozy-ui/transpiled/react/Icon";
import PersonAddIcon from "cozy-ui/transpiled/react/Icons/PersonAdd";
import { useBreakpoints } from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var Header = function Header(_ref) {
  var allGroups = _ref.allGroups,
      onContactCreate = _ref.onContactCreate,
      onContactImport = _ref.onContactImport,
      onSearch = _ref.onSearch,
      onGroupCreate = _ref.onGroupCreate,
      onGroupDelete = _ref.onGroupDelete,
      onGroupUpdate = _ref.onGroupUpdate;
  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  return /*#__PURE__*/React.createElement("div", {
    className: !isMobile ? 'u-flex u-flex-justify-between' : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: cx('u-flex u-flex-items-center u-w-auto-s u-w-5 u-maw-6', {
      'u-mb-1': isMobile,
      'u-mr-1': !isMobile
    })
  }, /*#__PURE__*/React.createElement(Button, {
    className: "u-mr-half",
    variant: "ghost",
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      icon: PersonAddIcon
    }),
    label: t('Contacts.Header.create'),
    fullWidth: true,
    onClick: onContactCreate
  }), /*#__PURE__*/React.createElement(ImportDropdown, {
    onContactImport: onContactImport
  })), /*#__PURE__*/React.createElement("div", {
    className: !isMobile ? 'u-flex u-flex-items-center u-flex-justify-end u-flex-grow-1 u-maw-7' : undefined
  }, /*#__PURE__*/React.createElement(GroupsSelection, {
    allGroups: allGroups,
    onGroupCreate: onGroupCreate,
    onGroupUpdate: onGroupUpdate,
    onGroupDelete: onGroupDelete
  }), /*#__PURE__*/React.createElement(SearchInput, {
    setSearchValue: onSearch
  })));
};

Header.propTypes = {
  allGroups: PropTypes.array,
  onContactCreate: PropTypes.func,
  onContactImport: PropTypes.func,
  onSearch: PropTypes.func,
  onGroupCreate: PropTypes.func,
  onGroupUpdate: PropTypes.func,
  onGroupDelete: PropTypes.func
};
Header.defaultProps = {
  allGroups: []
};
export default Header;