import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
export var handleSubmit = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var client, contactValues, onCreate, onListClose, givenName, familyName, _yield$client$save, contact;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = _ref.client, contactValues = _ref.contactValues, onCreate = _ref.onCreate, onListClose = _ref.onListClose;
            givenName = contactValues.givenName, familyName = contactValues.familyName;

            if (!(!givenName && !familyName)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return client.save({
              _type: 'io.cozy.contacts',
              name: {
                familyName: familyName,
                givenName: givenName
              }
            });

          case 6:
            _yield$client$save = _context.sent;
            contact = _yield$client$save.data;
            onCreate(contact);
            onListClose();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleSubmit(_x) {
    return _ref2.apply(this, arguments);
  };
}();