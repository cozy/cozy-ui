import { makeTheme } from "cozy-ui/transpiled/react/MuiCozyTheme/makeTheme";
export var normalTheme = makeTheme('light');
export var invertedTheme = makeTheme('dark');
var themes = {
  normal: normalTheme,
  inverted: invertedTheme
};
export var getTheme = function getTheme(variant) {
  var theme = themes[variant];

  if (!theme) {
    var possibleThemes = Object.keys(themes).join(', ');
    throw new Error("[MuiCozyTheme] Unknown theme variant: ".concat(variant, ". Possible variants are ").concat(possibleThemes));
  }

  return theme;
};