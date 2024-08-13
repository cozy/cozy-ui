import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["data"];
import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import uniqBy from 'lodash/uniqBy';
import get from 'lodash/get';
import { useQuery, hasQueryBeenLoaded } from 'cozy-client';
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import Icon from "cozy-ui/transpiled/react/Icon";
import Previous from "cozy-ui/transpiled/react/Icons/Previous";
import FilePickerBreadcrumb from "cozy-ui/transpiled/react/FilePicker/FilePickerBreadcrumb";
import { buildCurrentFolderQuery } from "cozy-ui/transpiled/react/FilePicker/queries";
import { ROOT_DIR_ID } from "cozy-ui/transpiled/react/FilePicker";
/**
 * @param {IOCozyFolder} displayedFolder - An io.cozy.files folder
 * @returns {{id: string, name: string}[]}
 */

var getBreadcrumbPath = function getBreadcrumbPath(displayedFolder) {
  return uniqBy([{
    id: ROOT_DIR_ID
  }, {
    id: get(displayedFolder, 'dir_id')
  }, {
    id: displayedFolder.id,
    name: displayedFolder.name
  }], 'id').filter(function (_ref) {
    var id = _ref.id;
    return Boolean(id);
  }).map(function (breadcrumb) {
    return {
      id: breadcrumb.id,
      name: breadcrumb.name || (breadcrumb.id === ROOT_DIR_ID ? 'Drive' : '…')
    };
  });
};

var FilePickerHeader = function FilePickerHeader(_ref2) {
  var navigateTo = _ref2.navigateTo,
      folderId = _ref2.folderId,
      onClose = _ref2.onClose;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var currentFolderQuery = buildCurrentFolderQuery(folderId);

  var _useQuery = useQuery(currentFolderQuery.definition, currentFolderQuery.options),
      currentFolder = _useQuery.data,
      restCurrentFolder = _objectWithoutProperties(_useQuery, _excluded); // eslint-disable-next-line react-hooks/exhaustive-deps


  var path = hasQueryBeenLoaded(restCurrentFolder) ? getBreadcrumbPath(currentFolder[0]) : [];
  var onBack = useCallback(function (path) {
    return navigateTo(path);
  }, [navigateTo]);
  var handleClick = useCallback(function () {
    path.length > 1 && isMobile ? onBack(path[path.length - 2]) : onClose();
  }, [isMobile, path, onBack, onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: "u-flex u-flex-items-center"
  }, isMobile && /*#__PURE__*/React.createElement(IconButton, {
    onClick: handleClick,
    className: "u-p-0 u-pr-1",
    size: "medium"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: Previous
  })), /*#__PURE__*/React.createElement(FilePickerBreadcrumb, {
    path: path,
    onBreadcrumbClick: navigateTo,
    opening: false,
    inlined: true
  }));
};

FilePickerHeader.propTypes = {
  folderId: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired
};
export default /*#__PURE__*/memo(FilePickerHeader);