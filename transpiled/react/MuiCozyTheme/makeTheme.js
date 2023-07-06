import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { createTheme } from "cozy-ui/transpiled/react/styles";
import { getCssVariableValue } from "cozy-ui/transpiled/react/utils/color";
import isTesting from "cozy-ui/transpiled/react/helpers/isTesting";
import { makePalette } from "cozy-ui/transpiled/react/MuiCozyTheme/makePalette";
import { makeTypography } from "cozy-ui/transpiled/react/MuiCozyTheme/makeTypography";
import { makeShadows } from "cozy-ui/transpiled/react/MuiCozyTheme/makeShadows";
import { makeOverrides } from "cozy-ui/transpiled/react/MuiCozyTheme/makeOverrides";
import { makeInvertedOverrides } from "cozy-ui/transpiled/react/MuiCozyTheme/makeInvertedOverrides";

var themesCommonConfig = _objectSpread({
  shape: {
    borderRadius: 6
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1023,
      xl: 1200
    }
  },
  zIndex: {
    modal: getCssVariableValue('zIndex-modal')
  },
  textShadows: ['none', '0px 2px 8px rgba(29, 33, 42, 0.16), 0px 0px 1px rgba(29, 33, 42, 0.48)'],
  shadows: makeShadows()
}, isTesting() && {
  transitions: {
    create: function create() {
      return 'none';
    }
  }
});

export var makeTheme = function makeTheme(type) {
  var palette = makePalette(type);
  var theme = createTheme(_objectSpread(_objectSpread({}, themesCommonConfig), {}, {
    typography: makeTypography(palette),
    palette: palette
  }));
  var overrides = theme.palette.type === 'dark' ? makeInvertedOverrides(theme) : makeOverrides(theme);
  return _objectSpread(_objectSpread({}, theme), {}, {
    overrides: overrides
  });
};