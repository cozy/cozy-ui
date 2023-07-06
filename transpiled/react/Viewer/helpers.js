import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { models } from 'cozy-client';
import flag from 'cozy-flags';
var _models$file = models.file,
    isEncrypted = _models$file.isEncrypted,
    isFromKonnector = _models$file.isFromKonnector,
    hasQualifications = _models$file.hasQualifications,
    hasCertifications = _models$file.hasCertifications;
export var knownDateMetadataNames = ['AObtentionDate', 'BObtentionDate', 'CObtentionDate', 'DObtentionDate', 'obtentionDate', 'expirationDate', 'referencedDate', 'issueDate', 'shootingDate', 'date', 'datetime'];
export var knownInformationMetadataNames = flag('mespapiers.migrated.metadata') ? ['number', 'country', 'refTaxIncome', 'contractType', 'noticePeriod'] : ['number', 'cafFileNumber', 'cardNumber', 'vinNumber', 'ibanNumber', 'country', 'passportNumber', 'refTaxIncome', 'contractType', 'noticePeriod'];
export var knownOtherMetadataNames = ['contact', 'page', 'qualification'];
export var getCurrentModel = function getCurrentModel(metadataName) {
  if (knownDateMetadataNames.includes(metadataName) || knownInformationMetadataNames.includes(metadataName)) {
    return 'information';
  }

  if (metadataName === 'contact') return 'contact';
  if (metadataName === 'page') return 'page';
};
/**
 * @typedef {object} Reference
 * @property {string} id - id of the document
 * @property {string} type - doctype of the document
 */

/**
 * Checks if the file matches one of the following conditions:
 * - Is certified
 * - Is Qualified
 * - From a Connector
 *
 * @param {object} param
 * @param {IOCozyFile} param.file
 * @returns {boolean}
 */

export var isValidForPanel = function isValidForPanel(_ref) {
  var file = _ref.file;
  return hasCertifications(file) || hasQualifications(file) || isFromKonnector(file);
};
export var downloadFile = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref2) {
    var client, file, url;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = _ref2.client, file = _ref2.file, url = _ref2.url;

            if (!isEncrypted(file)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", client.collection('io.cozy.files').forceFileDownload(url, file.name));

          case 3:
            return _context.abrupt("return", client.collection('io.cozy.files').download(file));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function downloadFile(_x) {
    return _ref3.apply(this, arguments);
  };
}();
export var isFileEncrypted = function isFileEncrypted(file) {
  return isEncrypted(file);
};

var makeMetadataQualification = function makeMetadataQualification(_ref4) {
  var metadata = _ref4.metadata,
      knownMetadataName = _ref4.knownMetadataName,
      value = _ref4.value;
  var shouldReturnThisMetadata = Object.keys(metadata).includes(knownMetadataName);

  if (shouldReturnThisMetadata || knownMetadataName === 'contact') {
    return {
      name: knownMetadataName,
      value: value || null
    };
  }
};
/**
 * @param {Object} metadata
 * @returns {{ name: string, value: string }[]} Array of formated metadata
 */


export var formatMetadataQualification = function formatMetadataQualification(metadata) {
  var dates = knownDateMetadataNames.map(function (dateName) {
    return makeMetadataQualification({
      metadata: metadata,
      knownMetadataName: dateName,
      value: metadata[dateName]
    });
  }).filter(Boolean).filter(function (data, _, arr) {
    if (arr.length > 1) return data.name !== 'datetime';
    return data;
  });
  var informations = knownInformationMetadataNames.map(function (numberName) {
    return makeMetadataQualification({
      metadata: metadata,
      knownMetadataName: numberName,
      value: metadata[numberName]
    });
  }).filter(Boolean);
  var others = knownOtherMetadataNames.map(function (otherName) {
    var _metadata$otherName;

    var value = otherName === 'qualification' ? (_metadata$otherName = metadata[otherName]) === null || _metadata$otherName === void 0 ? void 0 : _metadata$otherName.label : metadata[otherName];
    return makeMetadataQualification({
      metadata: metadata,
      knownMetadataName: otherName,
      value: value
    });
  }).filter(Boolean);
  return [].concat(_toConsumableArray(dates), _toConsumableArray(informations), _toConsumableArray(others));
};
export var formatDate = function formatDate(_ref5) {
  var f = _ref5.f,
      lang = _ref5.lang,
      date = _ref5.date;

  if (lang === 'en') {
    return f(date, 'MM/DD/YYYY');
  }

  return f(date, 'DD/MM/YYYY');
};
/**
 * @param {{ information: string, page: string }} editPathByModelProps
 * @param {string} currentModel
 * @param {string} name
 * @returns {string}
 */

export var buildEditAttributePath = function buildEditAttributePath(editPathByModelProps, currentModel, name) {
  var _currentPath$replace;

  var currentPath = editPathByModelProps[currentModel];
  return (_currentPath$replace = currentPath === null || currentPath === void 0 ? void 0 : currentPath.replace(/__NAME__/, name)) !== null && _currentPath$replace !== void 0 ? _currentPath$replace : '';
};
export var isEditableAttribute = function isEditableAttribute(name, file) {
  var isNotEditableAttributes = ['datetime', 'qualification'];
  return !isNotEditableAttributes.includes(name) && (name === 'issueDate' && !isFromKonnector(file) || name !== 'issueDate');
};