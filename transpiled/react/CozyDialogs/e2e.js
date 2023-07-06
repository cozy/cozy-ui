import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

module.exports = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(page, screenshot) {
    var _i, _arr, dialogType, openBtnSel, closeBtnSel;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _i = 0, _arr = ['Dialog', 'ConfirmDialog', 'IllustrationDialog', 'FixedDialog', 'FixedActionsDialog'];

          case 1:
            if (!(_i < _arr.length)) {
              _context.next = 21;
              break;
            }

            dialogType = _arr[_i];
            console.log("Screenshotting dialog type ".concat(dialogType));
            openBtnSel = "[data-testid=open-btn-".concat(dialogType, "]");
            closeBtnSel = '[data-testid*=modal-close-button]';
            _context.next = 8;
            return page.waitForSelector(openBtnSel);

          case 8:
            _context.next = 10;
            return page.click(openBtnSel);

          case 10:
            _context.next = 12;
            return page.waitForSelector(closeBtnSel);

          case 12:
            _context.next = 14;
            return screenshot(dialogType);

          case 14:
            _context.next = 16;
            return page.click(closeBtnSel);

          case 16:
            _context.next = 18;
            return page.waitForSelector(closeBtnSel, {
              hidden: true
            });

          case 18:
            _i++;
            _context.next = 1;
            break;

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();