import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import { getThemesList } from "cozy-ui/transpiled/react/QualificationGrid/helpers";
import withLocales from "cozy-ui/transpiled/react/QualificationGrid/locales/withLocales";
import Grid from "cozy-ui/transpiled/react/Grid";
import BankIcon from "cozy-ui/transpiled/react/Icons/Bank";
import BillIcon from "cozy-ui/transpiled/react/Icons/Bill";
import CarIcon from "cozy-ui/transpiled/react/Icons/Car";
import ChessIcon from "cozy-ui/transpiled/react/Icons/Chess";
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots";
import HeartIcon from "cozy-ui/transpiled/react/Icons/Heart";
import PeopleIcon from "cozy-ui/transpiled/react/Icons/People";
import TeamIcon from "cozy-ui/transpiled/react/Icons/Team";
import WorkIcon from "cozy-ui/transpiled/react/Icons/Work";
import HomeIcon from "cozy-ui/transpiled/react/Icons/Home";
import QualificationItem from "cozy-ui/transpiled/react/QualificationItem";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
var IconByName = {
  people: PeopleIcon,
  team: TeamIcon,
  work: WorkIcon,
  heart: HeartIcon,
  home: HomeIcon,
  car: CarIcon,
  chess: ChessIcon,
  bank: BankIcon,
  bill: BillIcon,
  dots: DotsIcon
};

var QualificationGrid = function QualificationGrid(_ref) {
  var noUndefined = _ref.noUndefined,
      noOthers = _ref.noOthers,
      onClick = _ref.onClick;
  var themesList = getThemesList();

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      selectedQualification = _useState2[0],
      setSelectedQualification = _useState2[1];

  var handleClick = function handleClick(theme) {
    onClick(theme === null || theme === void 0 ? void 0 : theme.label);
    setSelectedQualification(theme === null || theme === void 0 ? void 0 : theme.label);
  };

  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 1
  }, !noUndefined && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 3,
    sm: 2
  }, /*#__PURE__*/React.createElement(QualificationItem, {
    label: t('themes.undefined'),
    isSelected: selectedQualification === undefined,
    onClick: function onClick() {
      return handleClick();
    }
  })), themesList.map(function (theme, index) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: index
    }, (!noOthers || theme.label !== 'others') && /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 3,
      sm: 2
    }, /*#__PURE__*/React.createElement(QualificationItem, {
      label: t("themes.".concat(theme.label)),
      icon: IconByName[theme.icon],
      isSelected: theme.label === selectedQualification,
      onClick: function onClick() {
        return handleClick(theme);
      }
    })));
  }));
};

QualificationGrid.defaultProps = {
  noUndefined: false,
  noOthers: false,
  onClick: function onClick() {}
};
QualificationGrid.propTypes = {
  /** Remove `undefined` theme */
  noUndefined: PropTypes.bool,

  /** Remove `others` theme */
  noOthers: PropTypes.bool,

  /** Triggered when an item is clicked */
  onClick: PropTypes.func
};
export default withLocales(QualificationGrid);