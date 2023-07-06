import memoize from 'lodash/memoize';

var mockedGetCssVariableValue = function mockedGetCssVariableValue() {
  return '#fff';
};

var realGetCssVariableValue = memoize(function (variableName) {
  return window.getComputedStyle(document.body).getPropertyValue("--".concat(variableName)).trim();
});

var realGetInvertedCssVariableValue = function realGetInvertedCssVariableValue(variableName) {
  var className = 'CozyTheme--inverted';
  var node = document.getElementsByClassName(className)[0];

  if (!node) {
    node = document.createElement('div');
    node.className = className;
    node.style.display = 'none';
    document.body.appendChild(node);
  }

  return window.getComputedStyle(node).getPropertyValue("--".concat(variableName)).trim();
};

export var getCssVariableValue = process.env.NODE_ENV === 'test' ? mockedGetCssVariableValue : realGetCssVariableValue;
export var getInvertedCssVariableValue = process.env.NODE_ENV === 'test' ? mockedGetCssVariableValue : realGetInvertedCssVariableValue;