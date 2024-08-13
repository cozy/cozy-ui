import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useClient } from 'cozy-client';
import withBreakpoints from "cozy-ui/transpiled/react/helpers/withBreakpoints";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import Typography from "cozy-ui/transpiled/react/Typography";
import PreviousIcon from "cozy-ui/transpiled/react/Icons/Previous";
import DownloadIcon from "cozy-ui/transpiled/react/Icons/Download";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import MidEllipsis from "cozy-ui/transpiled/react/MidEllipsis";
import { downloadFile } from "cozy-ui/transpiled/react/Viewer/helpers";
import { useEncrypted } from "cozy-ui/transpiled/react/Viewer/providers/EncryptedProvider";
import { extractChildrenCompByName } from "cozy-ui/transpiled/react/Viewer/Footer/helpers";
import { ToolbarFilePath } from "cozy-ui/transpiled/react/Viewer/components/ToolbarFilePath";
import PrintButton from "cozy-ui/transpiled/react/Viewer/components/PrintButton";
var styles = {
  "viewer-nav": "styles__viewer-nav___1MSd7",
  "viewer-nav--visible": "styles__viewer-nav--visible___h_KJD",
  "viewer-nav--previous": "styles__viewer-nav--previous___WOwzv",
  "viewer-nav-arrow": "styles__viewer-nav-arrow___3_d1_",
  "viewer-nav--next": "styles__viewer-nav--next___1ah-4",
  "viewer-controls": "styles__viewer-controls___1BYEX",
  "--expanded": "styles__--expanded___2NoA-",
  "viewer-controls--display-content-top": "styles__viewer-controls--display-content-top___3I1xq",
  "viewer-toolbar": "styles__viewer-toolbar___2zPR7",
  "viewer-toolbar--hidden": "styles__viewer-toolbar--hidden___3r3Sj",
  "viewer-footer": "styles__viewer-footer___2ieQS"
};
var useClasses = makeStyles(function (theme) {
  return {
    iconButton: _defineProperty({}, theme.breakpoints.down('md'), {
      marginLeft: '0.25rem'
    })
  };
});

var Toolbar = function Toolbar(_ref) {
  var hidden = _ref.hidden,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      file = _ref.file,
      onClose = _ref.onClose,
      toolbarRef = _ref.toolbarRef,
      isDesktop = _ref.breakpoints.isDesktop,
      children = _ref.children,
      showFilePath = _ref.showFilePath;
  var client = useClient();
  var classes = useClasses();

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _useEncrypted = useEncrypted(),
      url = _useEncrypted.url;

  var ToolbarButtons = extractChildrenCompByName({
    children: children,
    file: file,
    name: 'ToolbarButtons'
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: toolbarRef,
    "data-testid": "viewer-toolbar",
    className: cx(styles['viewer-toolbar'], _defineProperty({}, styles['viewer-toolbar--hidden'], hidden)),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, onClose && /*#__PURE__*/React.createElement(IconButton, {
    className: cx(classes.iconButton, {
      'u-white': isDesktop
    }),
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: PreviousIcon
  })), /*#__PURE__*/React.createElement("div", {
    className: "u-pl-half u-ov-auto u-w-100"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    color: isDesktop ? 'inherit' : 'textPrimary',
    noWrap: true
  }, /*#__PURE__*/React.createElement(MidEllipsis, {
    text: file.name
  })), showFilePath ? /*#__PURE__*/React.createElement(ToolbarFilePath, {
    file: file
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "u-flex"
  }, isDesktop && /*#__PURE__*/React.createElement(React.Fragment, null, ToolbarButtons, /*#__PURE__*/React.createElement(PrintButton, {
    file: file
  }), /*#__PURE__*/React.createElement(IconButton, {
    className: "u-white",
    "aria-label": t('Viewer.download'),
    onClick: function onClick() {
      return downloadFile({
        client: client,
        file: file,
        url: url
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: DownloadIcon
  })))));
};

Toolbar.propTypes = {
  hidden: PropTypes.bool,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  showFilePath: PropTypes.bool
};
export default withBreakpoints()(Toolbar);