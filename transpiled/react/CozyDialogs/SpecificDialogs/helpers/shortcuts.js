import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
export var isValidURL = function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};
export var makeValidUrl = function makeValidUrl(str) {
  if (isValidURL(str)) return str;else if (isValidURL("https://".concat(str))) return "https://".concat(str);
  return false;
};
export var makeValidFileName = function makeValidFileName(fileName) {
  return fileName.endsWith('.url') ? fileName : fileName + '.url';
};
export var makeHumanReadableFileName = function makeHumanReadableFileName(fileName) {
  return fileName.endsWith('.url') ? fileName.slice(0, -4) : fileName;
};
export var checkAndSaveShortcut = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var fileName, url, isEditing, onSave, onClose, showAlert, t, validFileName, validURL;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileName = _ref.fileName, url = _ref.url, isEditing = _ref.isEditing, onSave = _ref.onSave, onClose = _ref.onClose, showAlert = _ref.showAlert, t = _ref.t;

            if (!(!fileName || !url)) {
              _context.next = 4;
              break;
            }

            showAlert({
              message: t('shortcut-dialog.needs-info'),
              severity: 'error'
            });
            return _context.abrupt("return");

          case 4:
            validFileName = makeValidFileName(fileName);
            validURL = makeValidUrl(url);

            if (validURL) {
              _context.next = 9;
              break;
            }

            showAlert({
              message: t('shortcut-dialog.url-bad-format'),
              severity: 'error'
            });
            return _context.abrupt("return");

          case 9:
            _context.prev = 9;
            _context.next = 12;
            return onSave(validFileName, validURL);

          case 12:
            showAlert({
              message: isEditing ? t('shortcut-dialog.edited') : t('shortcut-dialog.created'),
              severity: 'success'
            });
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](9);
            showAlert({
              message: t('shortcut-dialog.errored'),
              severity: 'error'
            });

          case 18:
            onClose();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 15]]);
  }));

  return function checkAndSaveShortcut(_x) {
    return _ref2.apply(this, arguments);
  };
}();