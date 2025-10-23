import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["style", "primaryText", "secondaryText", "tag", "downloadLink"];
import PropTypes from 'prop-types';
import React from 'react';
var styles = {
  "HistoryRowCircleWrapper": "styles__HistoryRowCircleWrapper___3r8Uo",
  "HistoryRowCircle": "styles__HistoryRowCircle___4FWWa",
  "HistoryRowRevisionLoader": "styles__HistoryRowRevisionLoader___a5y5b",
  "HistoryRowCaption": "styles__HistoryRowCaption___2fe_H",
  "HistoryRowMedia": "styles__HistoryRowMedia___2jgYN",
  "HistoryRowMediaImg": "styles__HistoryRowMediaImg___1J9OI"
};
import Circle from "cozy-ui/transpiled/react/Circle";
import Icon from "cozy-ui/transpiled/react/Icon";
import DownloadIcon from "cozy-ui/transpiled/react/Icons/Download";
import FileIcon from "cozy-ui/transpiled/react/Icons/File";
import Typography from "cozy-ui/transpiled/react/Typography";
import { Media, Bd, Img } from "cozy-ui/transpiled/react/deprecated/Media";
/**
 *
 * This component display a timeline of file's version
 */

var HistoryRow = function HistoryRow(_ref) {
  var style = _ref.style,
      primaryText = _ref.primaryText,
      secondaryText = _ref.secondaryText,
      tag = _ref.tag,
      downloadLink = _ref.downloadLink,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Media, _extends({
    className: styles.HistoryRowMedia,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "u-media u-media-grow u-row-m"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.HistoryRowCircleWrapper
  }, /*#__PURE__*/React.createElement(Img, {
    className: styles.HistoryRowMediaImg
  }, /*#__PURE__*/React.createElement(Circle, {
    size: tag ? 'small' : 'xsmall',
    className: styles.HistoryRowCircle
  }, tag && /*#__PURE__*/React.createElement(Icon, {
    icon: FileIcon,
    color: "var(--primaryTextColor)"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "u-media u-media-grow u-stack-xs u-row-m"
  }, /*#__PURE__*/React.createElement(Bd, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h6"
  }, primaryText), /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true,
    variant: "h6"
  }, tag), secondaryText ? /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true,
    variant: "caption",
    color: "textSecondary"
  }, secondaryText) : null), /*#__PURE__*/React.createElement(Img, null, /*#__PURE__*/React.createElement(Icon, {
    className: "u-c-pointer",
    color: "var(--secondaryTextColor)",
    icon: DownloadIcon,
    onClick: function onClick() {
      return downloadLink();
    }
  })))));
};

HistoryRow.propTypes = {
  /** Custom CSS */
  style: PropTypes.object,

  /** title  */
  title: PropTypes.string,

  /** First line */
  primaryText: PropTypes.string,

  /** Second line */
  secondaryText: PropTypes.string,

  /** tag of file */
  tag: PropTypes.string,

  /** Action when icon is clicked */
  downloadLink: PropTypes.func
};
export default HistoryRow;