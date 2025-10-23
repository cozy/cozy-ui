import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { cleanFormattedAddress } from 'cozy-client/dist/models/contact';
/**
 * Make formatted address
 * @param {{ name: string, value: string }[]} subFieldsState - State of address sub fields
 * @returns {string} - Formatted address
 */

export var makeFormattedAddressWithSubFields = function makeFormattedAddressWithSubFields(subFieldsState, t) {
  var normalizedAddress = subFieldsState.reduce(function (acc, curr) {
    var key = curr.name.split('.').pop().replace(/address/, '');
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, curr.value || ''));
  }, {});
  return cleanFormattedAddress(t('formatted.address', normalizedAddress));
};