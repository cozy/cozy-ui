import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["nativePath"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { generateWebLink as generateWebLinkClient, ensureFirstSlash } from 'cozy-client';
import { UNIVERSAL_LINK_URL } from "cozy-ui/transpiled/react/AppLinker/native.config";
export var getUniversalLinkDomain = function getUniversalLinkDomain() {
  return UNIVERSAL_LINK_URL;
};
export var generateWebLink = function generateWebLink(_ref) {
  var nativePath = _ref.nativePath,
      props = _objectWithoutProperties(_ref, _excluded);

  console.warn('Deprecated: you should use generateWebLink from cozy-client instead');
  return generateWebLinkClient(_objectSpread({
    pathname: '/',
    hash: nativePath
  }, props));
};
/**
 * Returns a universal link for an app + native path
 *
 * @param  {string} options.slug          - eg: drive
 * @param  {string} options.nativePath    - /path/to/view
 * @param  {string} options.fallbackUrl   - https://...mycozy.cloud, optional if cozyUrl is passed
 * @param  {string} options.cozyUrl       - https://name.mycozy.cloud, optional if fallbackUrl is passed
 * @param  {string} options.subDomainType - flat/nested, optionally the type of subdomains that is used.
 * @return {string}                       - https://links.cozy.cloud/drive/?fallback...
 */

export var generateUniversalLink = function generateUniversalLink(options) {
  var slug = options.slug,
      cozyUrl = options.cozyUrl,
      subDomainType = options.subDomainType;
  var fallbackUrl = options.fallbackUrl,
      nativePath = options.nativePath;
  nativePath = ensureFirstSlash(nativePath);

  if (!cozyUrl && !fallbackUrl) {
    throw new Error('Must have either cozyUrl or fallbackUrl to generate universal link.');
  }

  if (cozyUrl && !fallbackUrl) {
    fallbackUrl = generateWebLinkClient({
      cozyUrl: cozyUrl,
      pathname: '/',
      hash: nativePath,
      slug: slug,
      subDomainType: subDomainType
    });
  }

  var url = getUniversalLinkDomain(cozyUrl) + '/' + slug + nativePath;
  var urlObj = new URL(url);
  urlObj.searchParams.append('fallback', fallbackUrl);
  return urlObj.toString();
};