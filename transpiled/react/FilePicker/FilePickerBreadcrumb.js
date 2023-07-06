import React, { Fragment, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import Typography from "cozy-ui/transpiled/react/Typography";
import Icon from "cozy-ui/transpiled/react/Icon";
import RightIcon from "cozy-ui/transpiled/react/Icons/Right";
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";
var styles = {
  "filePickerBreadcrumb-previousPath": "styles__filePickerBreadcrumb-previousPath___3LKJH",
  "filePickerBreadcrumb-icon": "styles__filePickerBreadcrumb-icon___3aFyd",
  "filePickerBreadcrumb-wrapper": "styles__filePickerBreadcrumb-wrapper___3pu1w"
};

var FilePickerBreadcrumb = function FilePickerBreadcrumb(_ref) {
  var path = _ref.path,
      onBreadcrumbClick = _ref.onBreadcrumbClick;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var hasPath = path && path.length > 0;
  var navigateTo = useCallback(function (folder) {
    return function () {
      return onBreadcrumbClick(folder);
    };
  }, [onBreadcrumbClick]);
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    className: "u-flex u-flex-items-center"
  }, hasPath ? isMobile ? path[path.length - 1].name : path.map(function (folder, idx) {
    if (idx < path.length - 1) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: idx
      }, /*#__PURE__*/React.createElement("span", {
        className: styles['filePickerBreadcrumb-previousPath'],
        onClick: navigateTo(folder)
      }, folder.name), /*#__PURE__*/React.createElement(Icon, {
        icon: RightIcon,
        className: styles['filePickerBreadcrumb-icon']
      }));
    } else {
      return /*#__PURE__*/React.createElement("span", {
        key: idx
      }, folder.name);
    }
  }) : null);
};

FilePickerBreadcrumb.propTypes = {
  path: PropTypes.array,
  onBreadcrumbClick: PropTypes.func
};
export default /*#__PURE__*/memo(FilePickerBreadcrumb);