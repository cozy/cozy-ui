import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import React from 'react';
import { themesList } from 'cozy-client/dist/models/document/documentTypeData';
import { isQualificationNote } from 'cozy-client/dist/models/document/documentTypeDataHelpers';
import { getBoundT } from 'cozy-client/dist/models/document/locales';
import Icon from "cozy-ui/transpiled/react/Icon";
import NoteIcon from "cozy-ui/transpiled/react/Icons/Note";
import QualificationIcon from "cozy-ui/transpiled/react/QualificationIcon";
export var makeOptions = function makeOptions(lang) {
  var qualifT = getBoundT(lang);
  return {
    children: [{
      id: 'none',
      title: qualifT('Scan.themes.none'),
      icon: /*#__PURE__*/React.createElement(QualificationIcon, null)
    }].concat(_toConsumableArray(themesList.map(function (theme) {
      return {
        id: theme.id,
        title: qualifT("Scan.themes.".concat(theme.label)),
        icon: /*#__PURE__*/React.createElement(QualificationIcon, {
          theme: theme.label
        }),
        children: theme.items.map(function (item) {
          return {
            id: item.label,
            item: item,
            title: qualifT("Scan.items.".concat(item.label)),
            icon: isQualificationNote(item) ? /*#__PURE__*/React.createElement(Icon, {
              icon: NoteIcon,
              color: "#E049BF",
              size: 16
            }) : /*#__PURE__*/React.createElement(QualificationIcon, {
              qualification: item.label
            })
          };
        })
      };
    })))
  };
};
export var searchOptionsFn = function searchOptionsFn(options, value) {
  if (!value) return options.children;
  var deepOptions = options.children.flatMap(function (child) {
    return child.children;
  }).reduce(function (acc, curr) {
    if (!!curr && !acc.some(function (el) {
      return el.id === curr.id;
    })) {
      acc.push(curr);
    }

    return acc;
  }, []);
  return deepOptions.filter(function (deepOption) {
    return deepOption.title.toLowerCase().includes(value.toLowerCase());
  });
};
export var makeSearchOptions = function makeSearchOptions(_ref) {
  var options = _ref.options,
      title = _ref.title,
      noDataLabel = _ref.noDataLabel,
      t = _ref.t;
  return {
    placeholderSearch: title || t('QualificationModal.title'),
    noDataLabel: noDataLabel || t('QualificationModal.noDataLabel'),
    onSearch: function onSearch(value) {
      return searchOptionsFn(options, value);
    }
  };
};