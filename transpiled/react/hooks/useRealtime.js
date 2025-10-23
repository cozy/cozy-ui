import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { useEffect } from 'react';

var useRealtime = function useRealtime(client, specs, deps) {
  if (!client.plugins || !client.plugins.realtime) {
    console.error('[useRealtime] The provided CozyClient instance does not have a RealtimePlugin registered');
    return;
  }

  var subscribeRealtime = function subscribeRealtime() {
    Object.entries(specs).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          doctype = _ref2[0],
          events = _ref2[1];

      Object.entries(events).forEach( /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref3) {
          var _ref5, event, callback;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _ref5 = _slicedToArray(_ref3, 2), event = _ref5[0], callback = _ref5[1];
                  _context.prev = 1;
                  _context.next = 4;
                  return client.plugins.realtime.subscribe(event, doctype, callback);

                case 4:
                  _context.next = 10;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](1);
                  console.error(_context.t0);
                  console.error("[useRealtime] Impossible to subscribe to ".concat(event, " event on ").concat(doctype, ". Does your app have the required permissions on this doctype?"));

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 6]]);
        }));

        return function (_x) {
          return _ref4.apply(this, arguments);
        };
      }());
    });
  };

  var unsubscribeRealtime = function unsubscribeRealtime() {
    Object.entries(specs).forEach(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
          doctype = _ref7[0],
          events = _ref7[1];

      Object.entries(events).forEach( /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref8) {
          var _ref10, event, callback;

          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _ref10 = _slicedToArray(_ref8, 2), event = _ref10[0], callback = _ref10[1];
                  _context2.prev = 1;
                  _context2.next = 4;
                  return client.plugins.realtime.unsubscribe(event, doctype, callback);

                case 4:
                  _context2.next = 10;
                  break;

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](1);
                  console.error(_context2.t0);
                  console.error("[useRealtime] Impossible to unsubscribe from ".concat(event, " event on ").concat(doctype, ". Does your app have the required permissions on this doctype?"));

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[1, 6]]);
        }));

        return function (_x2) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
  }; // TODO: why is there a conditional hook here?
  // eslint-disable-next-line react-hooks/rules-of-hooks


  useEffect(function () {
    subscribeRealtime();
    return unsubscribeRealtime; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useRealtime;