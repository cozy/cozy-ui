import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { useState } from 'react';

var sleep = function sleep(duration) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, duration);
  });
};

var useStack = function useStack(initialState) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      arr = _useState2[0],
      setArray = _useState2[1];

  var _useState3 = useState(initialState.length - 1),
      _useState4 = _slicedToArray(_useState3, 2),
      curIndex = _useState4[0],
      setCurIndex = _useState4[1];

  var push = function push(item, itemOptions) {
    var newArr = [].concat(_toConsumableArray(arr), [itemOptions ? [item, itemOptions] : item]);
    setArray(newArr);
    setCurIndex(curIndex + 1);
  };

  var pop = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var newArr;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(arr.length <= 1)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              newArr = arr.slice(0, -1);
              setCurIndex(curIndex - 1);

              if (!options.popDelay) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return sleep(options.popDelay);

            case 7:
              setArray(newArr);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function pop() {
      return _ref.apply(this, arguments);
    };
  }();

  return [arr, curIndex, push, pop];
};

export { useStack };