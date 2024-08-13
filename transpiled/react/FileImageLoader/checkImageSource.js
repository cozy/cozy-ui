import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

/**
 * @param {string} src - Image source
 * @returns {Promise<void>}
 */
export var checkImageSource = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(src) {
    var TTL, timeout, img, cleanImageLoader;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            TTL = 10000;
            timeout = null;
            img = null;

            cleanImageLoader = function cleanImageLoader() {
              clearTimeout(timeout);
              img.onload = img.onerror = null;
              img.src = '';
              img = null;
            };

            return _context.abrupt("return", new Promise(function (resolve, reject) {
              img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = src;
              timeout = setTimeout(function () {
                return reject(new Error('Loading image took too long'));
              }, TTL);
            }).then(function () {
              return cleanImageLoader();
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkImageSource(_x) {
    return _ref.apply(this, arguments);
  };
}();