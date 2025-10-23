import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["slug", "tag", "className", "children"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "c-apptitle": "styles__c-apptitle___eqV9l",
  "c-apptitle-light": "styles__c-apptitle-light___49VIZ",
  "c-apptitle-dark": "styles__c-apptitle-dark___13RM5",
  "c-apptitle-app-icon": "styles__c-apptitle-app-icon___oQp8q",
  "c-apptitle-home-icon": "styles__c-apptitle-home-icon___1xJsd"
};
import Icon from "cozy-ui/transpiled/react/Icon";
import ChatIcon from "cozy-ui/transpiled/react/Icons/Chat";
import ChatTextIcon from "cozy-ui/transpiled/react/Icons/ChatText";
import ContactsIcon from "cozy-ui/transpiled/react/Icons/Contacts";
import ContactsTextIcon from "cozy-ui/transpiled/react/Icons/ContactsText";
import DriveIcon from "cozy-ui/transpiled/react/Icons/Drive";
import DriveTextIcon from "cozy-ui/transpiled/react/Icons/DriveText";
import MailIcon from "cozy-ui/transpiled/react/Icons/Mail";
import MailTextIcon from "cozy-ui/transpiled/react/Icons/MailText";
import NotesIcon from "cozy-ui/transpiled/react/Icons/Notes";
import NotesTextIcon from "cozy-ui/transpiled/react/Icons/NotesText";
import PassIcon from "cozy-ui/transpiled/react/Icons/Pass";
import PassTextIcon from "cozy-ui/transpiled/react/Icons/PassText";
import PhotosIcon from "cozy-ui/transpiled/react/Icons/Photos";
import PhotosTextIcon from "cozy-ui/transpiled/react/Icons/PhotosText";
import StoreIcon from "cozy-ui/transpiled/react/Icons/Store";
import StoreTextIcon from "cozy-ui/transpiled/react/Icons/StoreText";
import TwakeTextIcon from "cozy-ui/transpiled/react/Icons/TwakeText";
import TwakeWorkplaceIcon from "cozy-ui/transpiled/react/Icons/TwakeWorkplace";
import WorkplaceTextIcon from "cozy-ui/transpiled/react/Icons/WorkplaceText";
import Typography from "cozy-ui/transpiled/react/Typography";
import { useCozyTheme } from "cozy-ui/transpiled/react/providers/CozyTheme";
var SLUG_TO_ICONS = {
  chat: {
    icon: ChatIcon,
    text: ChatTextIcon
  },
  contacts: {
    icon: ContactsIcon,
    text: ContactsTextIcon
  },
  drive: {
    icon: DriveIcon,
    text: DriveTextIcon
  },
  mail: {
    icon: MailIcon,
    text: MailTextIcon
  },
  notes: {
    icon: NotesIcon,
    text: NotesTextIcon
  },
  passwords: {
    icon: PassIcon,
    text: PassTextIcon
  },
  store: {
    icon: StoreIcon,
    text: StoreTextIcon
  },
  photos: {
    icon: PhotosIcon,
    text: PhotosTextIcon
  },
  home: {
    icon: TwakeWorkplaceIcon,
    text: WorkplaceTextIcon
  }
};

var AppTitle = function AppTitle(_ref) {
  var slug = _ref.slug,
      tag = _ref.tag,
      className = _ref.className,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var _useCozyTheme = useCozyTheme(),
      isLight = _useCozyTheme.isLight;

  var titleData = SLUG_TO_ICONS[slug];
  if (!titleData) return /*#__PURE__*/React.createElement(Typography, _extends({
    component: tag,
    variant: "h4",
    className: cx(styles['c-apptitle'], className)
  }, otherProps), children);
  return /*#__PURE__*/React.createElement("div", {
    className: "u-flex u-flex-items-center"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: titleData.icon,
    size: "32",
    className: styles['c-apptitle-app-icon']
  }), /*#__PURE__*/React.createElement(Icon, {
    icon: TwakeTextIcon,
    width: "auto",
    height: "22",
    className: cx('u-mr-half', 'u-w-auto', isLight ? styles['c-apptitle-light'] : styles['c-apptitle-dark'])
  }), /*#__PURE__*/React.createElement(Icon, {
    icon: titleData.text,
    width: "auto",
    height: "22",
    className: cx('u-w-auto', slug === 'home' ? styles['c-apptitle-home-icon'] : undefined)
  }));
};

AppTitle.propTypes = {
  slug: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string
};
AppTitle.defaultProps = {
  tag: 'h1'
};
export default AppTitle;