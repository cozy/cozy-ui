import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import Alerter from 'cozy-ui/transpiled/react/deprecated/Alerter';
export var renameFile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(client, file, name) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return client.save(_objectSpread(_objectSpread({}, file), {}, {
              name: name
            }));

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);

            if (_context.t0.message.includes('Missing name argument')) {
              Alerter.error('RenameInput.filenameMissing');
            } else if (_context.t0.message.includes('Invalid filename:')) {
              Alerter.error('RenameInput.filenameIllegalName', {
                name: name
              });
            } else if (_context.t0.message.includes('Invalid filename containing illegal character(s):')) {
              Alerter.error('RenameInput.filenameIllegalCharacters', {
                name: name,
                characters: _context.t0.message.split('Invalid filename containing illegal character(s): ')[1]
              }, {
                duration: 2000
              });
            } else {
              Alerter.error('RenameInput.fileExisting', {
                name: name
              });
            }

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function renameFile(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();