import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
export var generateI18nConfig = function generateI18nConfig(categories) {
  if (!categories) return {
    en: {},
    fr: {}
  };
  var i18nConfig = {};

  for (var _i = 0, _Object$entries = Object.entries(categories); _i < _Object$entries.length; _i++) {
    var _value$split$pop;

    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        _key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    // Extract the final part of the path as the display name
    var displayName = (_value$split$pop = value === null || value === void 0 ? void 0 : value.split('/').pop()) !== null && _value$split$pop !== void 0 ? _value$split$pop : ''.replace(/([A-Z])/g, ' $1').trim();
    i18nConfig["app_categories.".concat(_key)] = displayName;
  }

  return {
    en: i18nConfig,
    fr: i18nConfig
  };
};