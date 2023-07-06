import mimeTypes from 'mime-types';
import { models } from 'cozy-client';
var _models$file = models.file,
    isDirectory = _models$file.isDirectory,
    isFile = _models$file.isFile;
/**
 * @param {string} types - Types we wish to accept ("folder" and/or "extensions/mime" of file), separated by commas
 * @returns {string[]} All the valid types, if the parameter is undefined or if no type is valid, return an empty array
 */

export var getCompliantTypes = function getCompliantTypes(types) {
  if (types) {
    return types.replaceAll(' ', '').split(',').filter(function (type) {
      return type !== 'folder' ? !!mimeTypes.contentType(type) : true;
    });
  }

  return [];
};
/**
 * Check if Item is a file with accepted extension/mime
 *
 * @param {object} item - file or folder
 * @param {string[]} validTypes - List of accepted types
 * @returns {boolean}
 */

export var isValidFile = function isValidFile(item, validTypes) {
  var fileTypesAccepted = validTypes.includes(".".concat(item.name.split('.').pop())) || validTypes.includes(item.mime);
  return isFile(item) && (fileTypesAccepted || validTypes.length === 0);
};
/**
 * Check if Item is a folder with accepted type
 *
 * @param {object} item - file or folder
 * @param {string[]} validTypes - List of accepted types
 * @returns {boolean}
 */

export var isValidFolder = function isValidFolder(item, validTypes) {
  return isDirectory(item) && validTypes.includes("folder");
};