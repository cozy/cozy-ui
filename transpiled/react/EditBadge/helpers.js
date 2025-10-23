import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
var MAX_FILE_SIZE = 5 * 1024 * 1024;
var ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
export var handleUpload = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var event, t, fileInputRef, status, onUpload, setStatus, setTimestamp, setShowMenu, showAlert, file, controller, timeoutId, previouStatus, newTimestamp;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event = _ref.event, t = _ref.t, fileInputRef = _ref.fileInputRef, status = _ref.status, onUpload = _ref.onUpload, setStatus = _ref.setStatus, setTimestamp = _ref.setTimestamp, setShowMenu = _ref.setShowMenu, showAlert = _ref.showAlert;
            file = event.target.files[0];

            if (file) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            if (!(file.size > MAX_FILE_SIZE)) {
              _context.next = 7;
              break;
            }

            showAlert({
              message: t('EditBadge.upload.file-size'),
              severity: 'error'
            });
            return _context.abrupt("return");

          case 7:
            if (ALLOWED_TYPES.includes(file.type)) {
              _context.next = 10;
              break;
            }

            showAlert({
              message: t('EditBadge.upload.file-type'),
              severity: 'error'
            });
            return _context.abrupt("return");

          case 10:
            controller = new AbortController();
            timeoutId = setTimeout(function () {
              return controller.abort();
            }, 30000);
            previouStatus = status;
            setStatus('LOADING');
            _context.prev = 14;
            _context.next = 17;
            return onUpload(file);

          case 17:
            clearTimeout(timeoutId);
            newTimestamp = Date.now();
            setStatus('PRESENT');
            setTimestamp(newTimestamp);
            showAlert({
              message: t('EditBadge.upload.success'),
              severity: 'success'
            });
            _context.next = 29;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](14);
            clearTimeout(timeoutId);
            setStatus(previouStatus);
            showAlert({
              message: t('EditBadge.upload.error'),
              severity: 'error'
            });

          case 29:
            _context.prev = 29;
            setShowMenu(false);

            if (fileInputRef.current) {
              fileInputRef.current.value = '';
            }

            return _context.finish(29);

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[14, 24, 29, 33]]);
  }));

  return function handleUpload(_x) {
    return _ref2.apply(this, arguments);
  };
}();
export var handleDelete = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref3) {
    var t, status, onDelete, setShowMenu, setStatus, setTimestamp, showAlert, controller, timeoutId, previousStatus, checkTimestamp;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            t = _ref3.t, status = _ref3.status, onDelete = _ref3.onDelete, setShowMenu = _ref3.setShowMenu, setStatus = _ref3.setStatus, setTimestamp = _ref3.setTimestamp, showAlert = _ref3.showAlert;
            setShowMenu(false);
            controller = new AbortController();
            timeoutId = setTimeout(function () {
              return controller.abort();
            }, 30000);
            previousStatus = status;
            setStatus('LOADING');
            _context2.prev = 6;
            _context2.next = 9;
            return onDelete();

          case 9:
            clearTimeout(timeoutId);
            checkTimestamp = Date.now();
            setStatus('ABSENT');
            setTimestamp(checkTimestamp);
            showAlert({
              message: t('EditBadge.delete.success'),
              severity: 'success'
            });
            _context2.next = 21;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](6);
            clearTimeout(timeoutId);
            setStatus(previousStatus);
            showAlert({
              message: t('EditBadge.delete.error'),
              severity: 'error'
            });

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 16]]);
  }));

  return function handleDelete(_x2) {
    return _ref4.apply(this, arguments);
  };
}();