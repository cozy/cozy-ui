import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { useState, useEffect } from 'react';

var useInstance = function useInstance(client) {
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      instance = _useState2[0],
      setInstance = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      context = _useState4[0],
      setContext = _useState4[1];

  var _useState5 = useState('idle'),
      _useState6 = _slicedToArray(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];

  useEffect(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var instancePromise, contextPromise, promises, _yield$Promise$all, _yield$Promise$all2, instanceFetched, contextFetched;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                setState('loading');
                instancePromise = client.getStackClient().fetchJSON('GET', '/settings/instance');
                contextPromise = client.getStackClient().fetchJSON('GET', '/settings/context');
                promises = [instancePromise, contextPromise];
                _context.next = 7;
                return Promise.all(promises.map(function (p) {
                  return p.catch(function (e) {
                    return e;
                  });
                }));

              case 7:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                instanceFetched = _yield$Promise$all2[0];
                contextFetched = _yield$Promise$all2[1];

                if (!(instanceFetched instanceof Error)) {
                  setInstance(instanceFetched);
                }

                if (!(contextFetched instanceof Error)) {
                  setContext(contextFetched);
                }

                setState('loaded');
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                setState('failed');

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 16]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    state: state,
    instance: instance,
    context: context
  };
};

export default useInstance;