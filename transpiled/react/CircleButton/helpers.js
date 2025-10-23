export var makeTypoColor = function makeTypoColor(_ref) {
  var theme = _ref.theme,
      active = _ref.active,
      disabled = _ref.disabled;

  if (disabled) {
    return theme.palette.text.disabled;
  }

  if (active) {
    return theme.palette.primary.main;
  }

  return theme.palette.text.primary;
};
export var makeButtonShadow = function makeButtonShadow(_ref2) {
  var theme = _ref2.theme,
      active = _ref2.active,
      disabled = _ref2.disabled;

  if (disabled || !active) {
    return "inset 0 0 0 1px ".concat(theme.palette.border.main);
  }

  return "none";
};