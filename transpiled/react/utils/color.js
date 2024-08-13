var getThemeNodeClassName = function getThemeNodeClassName(type, variant) {
  return "CozyTheme--".concat(type, "-").concat(variant);
};

var getNodeWithThemeCssVars = function getNodeWithThemeCssVars(type, variant) {
  var className = getThemeNodeClassName(type, variant);
  return document.getElementsByClassName(className)[0];
};

export var createNodeWithThemeCssVars = function createNodeWithThemeCssVars(type, variant) {
  if (process.env.NODE_ENV === 'test') return null;

  if (!getNodeWithThemeCssVars(type, variant)) {
    var node = document.createElement('div');
    node.className = getThemeNodeClassName(type, variant);
    node.style.display = 'none';
    document.body.prepend(node);
  }
};

var realGetCssVariableValue = function realGetCssVariableValue(varName, type, variant) {
  var node = getNodeWithThemeCssVars(type, variant);
  return window.getComputedStyle(node).getPropertyValue("--".concat(varName)).trim();
};

export var getCssVariableValue = function getCssVariableValue(varName, type, variant) {
  return process.env.NODE_ENV === 'test' ? '#fff' : realGetCssVariableValue(varName, type, variant);
};