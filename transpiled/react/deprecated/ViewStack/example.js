import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { useViewStack } from "cozy-ui/transpiled/react/deprecated/ViewStack";
import Button from "cozy-ui/transpiled/react/deprecated/Button";

var PaddedParagraph = function PaddedParagraph(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("p", {
    className: "u-m-0 u-pv-half"
  }, children);
};

var Slide = function Slide(_ref2) {
  var number = _ref2.number;

  var _useViewStack = useViewStack(),
      stackPush = _useViewStack.stackPush,
      stackPop = _useViewStack.stackPop;

  var handleClickStack = function handleClickStack() {
    stackPush( /*#__PURE__*/React.createElement(Slide, {
      number: number + 1
    }));
  };

  var handleClickPop = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return stackPop();

            case 2:
              // No alerts during enzyme tests
              if (number === 2 && !global.mount) {
                alert('You went back to the first slide');
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClickPop() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PaddedParagraph, null, "Level: ", number), number === 3 ? 'Going deep are you ?' : null, number === 4 ? 'Will you stop ?' : null, number === 5 ? 'How dare you...' : null, number === 6 ? 'I am out' : null, /*#__PURE__*/React.createElement(PaddedParagraph, null, /*#__PURE__*/React.createElement(Button, {
    label: "stack",
    theme: "secondary",
    onClick: handleClickStack
  }), /*#__PURE__*/React.createElement(Button, {
    label: "pop",
    theme: "secondary",
    onClick: handleClickPop
  })));
};

export { Slide };