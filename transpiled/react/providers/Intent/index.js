import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { useEffect, useMemo, useState, createContext, useContext } from 'react';
import { useClient } from 'cozy-client';
import Backdrop from 'cozy-ui/transpiled/react/Backdrop';
import Spinner from 'cozy-ui/transpiled/react/Spinner';
export var IntentContext = /*#__PURE__*/createContext();
export var useIntent = function useIntent() {
  var context = useContext(IntentContext);

  if (!context) {
    throw new Error('useIntent must be used within a IntentProvider');
  }

  return context;
};

var IntentProvider = function IntentProvider(_ref) {
  var intentId = _ref.intentId,
      componentsProps = _ref.componentsProps,
      children = _ref.children;
  var client = useClient();

  var _useState = useState({
    service: null,
    intent: null,
    data: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var value = useMemo(function () {
    return {
      service: state.service,
      intent: state.intent,
      data: state.data
    };
  }, [state]);
  useEffect(function () {
    var startService = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var service, intent, data;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return client.intents.createService(intentId, window);

              case 3:
                service = _context.sent;
                intent = service.getIntent();
                data = service.getData();
                setState({
                  service: service,
                  intent: intent,
                  data: data
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                service.throw(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function startService() {
        return _ref2.apply(this, arguments);
      };
    }();

    if (!state.service) {
      startService();
    }
  }, [client, intentId, state.service]);

  if (!state.service) {
    return /*#__PURE__*/React.createElement(Backdrop, _extends({
      open: true
    }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.backdrop), /*#__PURE__*/React.createElement(Spinner, _extends({
      className: "u-m-0",
      size: "xxlarge",
      middle: true
    }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.spinner)));
  }

  return /*#__PURE__*/React.createElement(IntentContext.Provider, {
    value: value
  }, children);
};

export default IntentProvider;