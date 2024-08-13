import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import _regeneratorRuntime from "@babel/runtime/regenerator";
import { PDFDocument } from 'pdf-lib';
import { fetchBlobFileById } from 'cozy-client/dist/models/file'; // Should guarantee good resolution for different uses (printing, downloading, etc.)

var MAX_RESIZE_IMAGE_SIZE = 3840;
var MAX_IMAGE_SIDE_SIZE = 1920;
/**
 * Make array of actions and hydrate actions with options
 *
 * @param {Function[]} actions - Array of actions with associated actions and conditions
 * @param {object} actionOptions - Options that need to be passed on actions
 * @returns {object[]} Array of actions
 */

export var makeActions = function makeActions() {
  var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return actions.filter(Boolean).map(function (actionFn) {
    var action = actionFn(options);
    var name = action.name || actionFn.name;
    return _defineProperty({}, name, action);
  });
};
export var getActionName = function getActionName(actionObject) {
  return Object.keys(actionObject)[0];
}; // We need to clean Actions since action has a displayable
// conditions and we can't know from the begining what the
// behavior will be. For instance, we can't know that
// hr will be the latest action in the sharing views for a
// folder.
// Or we can't know that we'll have two following hr if the
// display condition for the actions between are true or false

export var getOnlyNeededActions = function getOnlyNeededActions(actions, docs) {
  var previousAction = '';
  var displayableActions = actions.filter(function (actionObject) {
    var actionDefinition = Object.values(actionObject)[0];
    return !actionDefinition.displayCondition || actionDefinition.displayCondition(docs);
  });
  return displayableActions // We do not want to display the same 2 actions in a row
  .map(function (actionObject) {
    var actionName = getActionName(actionObject);

    if (previousAction === actionName) {
      previousAction = actionName;
      return null;
    } else {
      previousAction = actionName;
    }

    return actionObject;
  }).filter(Boolean) // We don't want to have an hr/divider as the latest actions available
  .filter(function (cleanedAction, idx, cleanedActions) {
    return !((getActionName(cleanedAction) === 'hr' || getActionName(cleanedAction) === 'divider') && idx === cleanedActions.length - 1);
  });
};
/**
 * Make a base64 string from a File object
 * @param {File} file - File object
 * @returns {Promise<string | null>} base64 string
 */

export var makeBase64FromFile = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file) {
    var reader;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reader = new FileReader();
            reader.readAsDataURL(file);
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              reader.onload = function () {
                var base64 = reader.result;
                resolve(base64);
              };

              reader.onerror = function (err) {
                reject(err);
              };
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function makeBase64FromFile(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * @param {HTMLImageElement} image
 * @returns {number}
 */

var getImageScaleRatio = function getImageScaleRatio(image) {
  var longerSideSizeInPixel = Math.max(image.height, image.width);
  var scaleRatio = 1;

  if (MAX_RESIZE_IMAGE_SIZE < longerSideSizeInPixel) {
    scaleRatio = MAX_RESIZE_IMAGE_SIZE / longerSideSizeInPixel;
  }

  return scaleRatio;
};
/**
 * @param {object} opts
 * @param {string} opts.base64 - Base64 of image
 * @returns {Promise<string>}
 */


var resizeImage = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref3) {
    var fileDataUri;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fileDataUri = _ref3.base64;
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              var newImage = new Image();
              newImage.src = fileDataUri;
              newImage.onerror = reject;

              newImage.onload = function () {
                var canvas = document.createElement('canvas');
                var scaleRatio = getImageScaleRatio(newImage);
                var scaledWidth = scaleRatio * newImage.width;
                var scaledHeight = scaleRatio * newImage.height;
                var quality = scaledWidth >= MAX_IMAGE_SIDE_SIZE || scaledHeight >= MAX_IMAGE_SIDE_SIZE ? 0.35 : 0.75;
                canvas.width = scaledWidth;
                canvas.height = scaledHeight;
                canvas.getContext('2d').drawImage(newImage, 0, 0, scaledWidth, scaledHeight);
                resolve(canvas.toDataURL('image/jpeg', quality));
              };
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function resizeImage(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * @param {File} file
 * @returns {Promise<string>}
 */


var fileToDataUri = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(file) {
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function (e) {
                return resolve(e.target.result);
              };

              reader.readAsDataURL(file);
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function fileToDataUri(_x3) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Compress image and add it to pdf
 * @param {PDFDocument} pdfDoc
 * @param {File} file
 * @returns {Promise<void>}
 */


var addImageToPdf = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(pdfDoc, file) {
    var fileDataUri, resizedImage, img, page, _page$getSize, pageWidth, pageHeight;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fileToDataUri(file);

          case 2:
            fileDataUri = _context4.sent;
            _context4.next = 5;
            return resizeImage({
              base64: fileDataUri
            });

          case 5:
            resizedImage = _context4.sent;
            _context4.next = 8;
            return pdfDoc.embedJpg(resizedImage);

          case 8:
            img = _context4.sent;
            page = pdfDoc.addPage([img.width, img.height]);
            _page$getSize = page.getSize(), pageWidth = _page$getSize.width, pageHeight = _page$getSize.height;
            page.drawImage(img, {
              x: pageWidth / 2 - img.width / 2,
              y: pageHeight / 2 - img.height / 2,
              width: img.width,
              height: img.height
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function addImageToPdf(_x4, _x5) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * @param {File} file
 * @returns {Promise<ArrayBuffer>}
 */


var fileToArrayBuffer = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(file) {
    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!('arrayBuffer' in file)) {
              _context5.next = 4;
              break;
            }

            _context5.next = 3;
            return file.arrayBuffer();

          case 3:
            return _context5.abrupt("return", _context5.sent);

          case 4:
            return _context5.abrupt("return", new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function (e) {
                return resolve(new Uint8Array(e.target.result));
              };

              reader.readAsArrayBuffer(file);
            }));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function fileToArrayBuffer(_x6) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * @param {PDFDocument} pdfDoc
 * @param {File} file
 * @returns {Promise<void>}
 */


var addPdfToPdf = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(pdfDoc, file) {
    var pdfToAdd, document, copiedPages;
    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fileToArrayBuffer(file);

          case 2:
            pdfToAdd = _context6.sent;
            _context6.next = 5;
            return PDFDocument.load(pdfToAdd);

          case 5:
            document = _context6.sent;
            _context6.next = 8;
            return pdfDoc.copyPages(document, document.getPageIndices());

          case 8:
            copiedPages = _context6.sent;
            copiedPages.forEach(function (page) {
              return pdfDoc.addPage(page);
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function addPdfToPdf(_x7, _x8) {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * @param {PDFDocument} pdfDoc - Instance of PDFDocument
 * @param {File} file - File to add in pdf
 * @returns {Promise<ArrayBuffer>} - Data of pdf generated
 */


export var addFileToPdf = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(pdfDoc, file) {
    var pdfDocBytes;
    return _regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (!(file.type === 'application/pdf')) {
              _context7.next = 5;
              break;
            }

            _context7.next = 3;
            return addPdfToPdf(pdfDoc, file);

          case 3:
            _context7.next = 7;
            break;

          case 5:
            _context7.next = 7;
            return addImageToPdf(pdfDoc, file);

          case 7:
            _context7.next = 9;
            return pdfDoc.save();

          case 9:
            pdfDocBytes = _context7.sent;
            return _context7.abrupt("return", pdfDocBytes);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function addFileToPdf(_x9, _x10) {
    return _ref9.apply(this, arguments);
  };
}();
/**
 * Fetches file from docs list and return a blob of pdf
 * @param {import('cozy-client/types/CozyClient').default} client - Instance of CozyClient
 * @param {array} docs - Docs from an io.cozy.xxx doctypes
 * @returns {Promise<object>} Blob of generated Pdf
 */

export var makePdfBlob = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(client, docs) {
    var pdfDoc, _iterator, _step, doc, _blob, pdfBytes, bytes, blob;

    return _regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return PDFDocument.create();

          case 2:
            pdfDoc = _context8.sent;
            _iterator = _createForOfIteratorHelper(docs);
            _context8.prev = 4;

            _iterator.s();

          case 6:
            if ((_step = _iterator.n()).done) {
              _context8.next = 15;
              break;
            }

            doc = _step.value;
            _context8.next = 10;
            return fetchBlobFileById(client, doc._id);

          case 10:
            _blob = _context8.sent;
            _context8.next = 13;
            return addFileToPdf(pdfDoc, _blob);

          case 13:
            _context8.next = 6;
            break;

          case 15:
            _context8.next = 20;
            break;

          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](4);

            _iterator.e(_context8.t0);

          case 20:
            _context8.prev = 20;

            _iterator.f();

            return _context8.finish(20);

          case 23:
            _context8.next = 25;
            return pdfDoc.save();

          case 25:
            pdfBytes = _context8.sent;
            bytes = new Uint8Array(pdfBytes);
            blob = new Blob([bytes], {
              type: 'application/pdf'
            });
            return _context8.abrupt("return", blob);

          case 29:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[4, 17, 20, 23]]);
  }));

  return function makePdfBlob(_x11, _x12) {
    return _ref10.apply(this, arguments);
  };
}();