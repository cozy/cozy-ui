import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { models, useQuery } from 'cozy-client';
import FilePickerBodyItem from "cozy-ui/transpiled/react/FilePicker/FilePickerBodyItem";
import { buildContentFolderQuery } from "cozy-ui/transpiled/react/FilePicker/queries";
import List from "cozy-ui/transpiled/react/List";
import LoadMore from "cozy-ui/transpiled/react/LoadMore";
import { isValidFile } from "cozy-ui/transpiled/react/helpers/acceptedTypes";
var isDirectory = models.file.isDirectory;

var FilePickerBody = function FilePickerBody(_ref) {
  var navigateTo = _ref.navigateTo,
      folderId = _ref.folderId,
      onSelectItemId = _ref.onSelectItemId,
      itemsIdsSelected = _ref.itemsIdsSelected,
      itemTypesAccepted = _ref.itemTypesAccepted,
      multiple = _ref.multiple;
  var contentFolderQuery = buildContentFolderQuery(folderId);

  var _useQuery = useQuery(contentFolderQuery.definition, contentFolderQuery.options),
      contentFolder = _useQuery.data,
      hasMore = _useQuery.hasMore,
      fetchMore = _useQuery.fetchMore;

  var onCheck = useCallback(function (itemId) {
    var isChecked = itemsIdsSelected.some(function (fileIdSelected) {
      return fileIdSelected === itemId;
    });

    if (isChecked) {
      onSelectItemId(itemsIdsSelected.filter(function (fileIdSelected) {
        return fileIdSelected !== itemId;
      }));
    } else onSelectItemId(function (prev) {
      return [].concat(_toConsumableArray(prev), [itemId]);
    });
  }, [itemsIdsSelected, onSelectItemId]); // When click on checkbox/radio area...

  var handleChoiceClick = useCallback(function (item) {
    return function () {
      if (multiple) onCheck(item._id);else onSelectItemId(item._id);
    };
  }, [multiple, onCheck, onSelectItemId]); // ...when click anywhere on the rest of the line

  var handleListItemClick = useCallback(function (item) {
    return function () {
      if (isDirectory(item)) {
        navigateTo(contentFolder.find(function (it) {
          return it._id === item._id;
        }));
      }

      if (isValidFile(item, itemTypesAccepted)) {
        if (multiple) onCheck(item._id);else onSelectItemId(item._id);
      }
    };
  }, [contentFolder, itemTypesAccepted, multiple, navigateTo, onCheck, onSelectItemId]);
  return /*#__PURE__*/React.createElement(List, null, contentFolder && contentFolder.map(function (item, idx) {
    var hasDivider = contentFolder ? idx !== contentFolder.length - 1 : false;
    return /*#__PURE__*/React.createElement(FilePickerBodyItem, {
      key: item._id,
      item: item,
      itemTypesAccepted: itemTypesAccepted,
      multiple: multiple,
      handleChoiceClick: handleChoiceClick,
      handleListItemClick: handleListItemClick,
      onCheck: onCheck,
      itemsIdsSelected: itemsIdsSelected,
      hasDivider: hasDivider
    });
  }), hasMore && /*#__PURE__*/React.createElement(LoadMore, {
    label: "loadMore",
    fetchMore: fetchMore
  }));
};

FilePickerBody.propTypes = {
  onSelectItemId: PropTypes.func.isRequired,
  itemsIdsSelected: PropTypes.arrayOf(PropTypes.string).isRequired,
  folderId: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
  itemTypesAccepted: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default FilePickerBody;