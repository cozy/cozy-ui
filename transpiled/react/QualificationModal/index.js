import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useClient } from 'cozy-client';
import { isSupportedQualification } from 'cozy-client/dist/models/document/qualification';
import { makeOptions, makeSearchOptions } from "cozy-ui/transpiled/react/QualificationModal/helpers";
import { locales } from "cozy-ui/transpiled/react/QualificationModal/locales";
import NestedSelectResponsive from "cozy-ui/transpiled/react/NestedSelect/NestedSelectResponsive";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var QualificationModal = function QualificationModal(_ref) {
  var _file$metadata, _file$metadata$qualif;

  var file = _ref.file,
      title = _ref.title,
      noDataLabel = _ref.noDataLabel,
      onClose = _ref.onClose;
  useExtendI18n(locales);
  var client = useClient();

  var _useI18n = useI18n(),
      t = _useI18n.t,
      lang = _useI18n.lang;

  var qualificationLabel = (_file$metadata = file.metadata) === null || _file$metadata === void 0 ? void 0 : (_file$metadata$qualif = _file$metadata.qualification) === null || _file$metadata$qualif === void 0 ? void 0 : _file$metadata$qualif.label;
  var options = useMemo(function () {
    return makeOptions(lang);
  }, [lang]);
  var searchOptions = useMemo(function () {
    return makeSearchOptions({
      options: options,
      title: title,
      noDataLabel: noDataLabel,
      t: t
    });
  }, [options, title, noDataLabel, t]);

  var isSelected = function isSelected(_ref2) {
    var id = _ref2.id,
        item = _ref2.item;
    return isSupportedQualification(qualificationLabel) ? qualificationLabel === (item === null || item === void 0 ? void 0 : item.label) : id === 'none';
  };

  var handleClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref3) {
      var id, item, fileCollection, removeQualification;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = _ref3.id, item = _ref3.item;
              fileCollection = client.collection('io.cozy.files');
              removeQualification = qualificationLabel && id === 'none';
              /*
                In the case where we remove the qualification it's necessary to define the attribute to `null` and not `undefined`, with `undefined` the stack does not return the attribute and today the Redux store is not updated for a missing attribute.
                As a result, the UI is not updated and continues to display the qualification on the document, even though it has been deleted in CouchDB.
              */

              _context.next = 5;
              return fileCollection.updateMetadataAttribute(file._id, {
                qualification: removeQualification ? null : item
              });

            case 5:
              onClose();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(NestedSelectResponsive, {
    options: options,
    noDivider: true,
    document: file,
    isSelected: isSelected,
    searchOptions: searchOptions,
    onSelect: handleClick,
    onClose: onClose
  });
};

QualificationModal.propTypes = {
  file: PropTypes.object,
  title: PropTypes.string,
  noDataLabel: PropTypes.string,
  onClose: PropTypes.func
};
export default QualificationModal;