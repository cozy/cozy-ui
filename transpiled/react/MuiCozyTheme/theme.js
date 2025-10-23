import { makeTheme } from "cozy-ui/transpiled/react/MuiCozyTheme/makeTheme";
export var lightNormalTheme = makeTheme('light', 'normal');
export var lightInvertedTheme = makeTheme('light', 'inverted');
export var darkNormalTheme = makeTheme('dark', 'normal');
export var darkInvertedTheme = makeTheme('dark', 'inverted');
var themes = {
  light: {
    normal: lightNormalTheme,
    inverted: lightInvertedTheme
  },
  dark: {
    normal: darkNormalTheme,
    inverted: darkInvertedTheme
  }
};
export var getTheme = function getTheme(type, variant) {
  var _themes$type;

  var theme = (_themes$type = themes[type]) === null || _themes$type === void 0 ? void 0 : _themes$type[variant];

  if (!theme) {
    var possibleThemes = Object.keys(themes).join(', ');
    throw new Error("[MuiCozyTheme] Unknown theme variant: ".concat(variant, ". Possible variants are ").concat(possibleThemes));
  }

  return theme;
};