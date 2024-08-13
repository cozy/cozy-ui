import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import _regeneratorRuntime from "@babel/runtime/regenerator";
import { generateWebLink } from 'cozy-client';
import { isEncrypted, isFromKonnector, hasQualifications, hasCertifications, normalize } from 'cozy-client/dist/models/file';
import { KNOWN_DATE_METADATA_NAMES, KNOWN_INFORMATION_METADATA_NAMES, KNOWN_BILLS_ATTRIBUTES_NAMES } from 'cozy-client/dist/models/paper';
export var getCurrentModel = function getCurrentModel(metadataName) {
  if (KNOWN_DATE_METADATA_NAMES.includes(metadataName) || KNOWN_INFORMATION_METADATA_NAMES.includes(metadataName) || KNOWN_BILLS_ATTRIBUTES_NAMES.includes(metadataName)) {
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
export var formatDate = function formatDate(_ref4) {
  var f = _ref4.f,
      lang = _ref4.lang,
      date = _ref4.date;

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
export var normalizeAndSpreadAttributes = function normalizeAndSpreadAttributes(rawFile) {
  var normalizedFile = normalize(rawFile);
  return _objectSpread(_objectSpread({}, normalizedFile), normalizedFile === null || normalizedFile === void 0 ? void 0 : normalizedFile.attributes);
};
/**
 * Return a web link to an application in the Cozy environment with the specified path
 * @param {object} param
 * @param {CozyClient} param.client - Instance of CozyClient
 * @param {string} param.slug - Slug of the application
 * @param {string} param.path - Path into the application
 * @returns {string} web link
 */

export var makeWebLink = function makeWebLink(_ref5) {
  var client = _ref5.client,
      slug = _ref5.slug,
      path = _ref5.path;

  try {
    var cozyURL = new URL(client.getStackClient().uri);

    var _client$getInstanceOp = client.getInstanceOptions(),
        subDomainType = _client$getInstanceOp.subdomain;

    return generateWebLink({
      pathname: '/',
      cozyUrl: cozyURL.origin,
      slug: slug,
      hash: path,
      subDomainType: subDomainType
    });
  } catch (e) {
    return null;
  }
};
/**
 * Remove the file name at the end of a path
 * @param {string} path
 * @returns {string} new path
 */

export var removeFilenameFromPath = function removeFilenameFromPath(path) {
  var newPath = path.substring(0, path.lastIndexOf('/'));
  return newPath === '' ? '/' : newPath;
};