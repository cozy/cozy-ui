import React from 'react';
import { render } from '@testing-library/react';
import { Stepper, Step, StepLabel, StepButton } from "cozy-ui/transpiled/react/Stepper";

var renderSVGWarningIcon = function renderSVGWarningIcon() {
  var _render = render( /*#__PURE__*/React.createElement(Stepper, null, /*#__PURE__*/React.createElement(Step, null, /*#__PURE__*/React.createElement(StepButton, null, /*#__PURE__*/React.createElement(StepLabel, {
    error: true
  }, "error"))))),
      getByRole = _render.getByRole;

  var button = getByRole('button');
  var svg = button.querySelector('svg');
  return svg;
};

var warningSvg;

var findStepButtonFromLabelNode = function findStepButtonFromLabelNode(node) {
  return node.parentNode.parentNode.parentNode;
};

var haveSameClassList = function haveSameClassList(node1, node2) {
  var cs1 = node1.classList.toString();
  var cs2 = node2.classList.toString();
  return cs1 === cs2;
};

var isWarningStep = function isWarningStep(stepLabelNode) {
  var stepButtonNode = findStepButtonFromLabelNode(stepLabelNode);
  var icon = stepButtonNode.querySelector('svg');
  return haveSameClassList(warningSvg, icon);
};

beforeEach(function () {
  warningSvg = renderSVGWarningIcon();
});
export { isWarningStep };