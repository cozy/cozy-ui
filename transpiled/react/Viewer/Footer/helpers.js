import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { isValidElement, Children, cloneElement } from 'react';
import { saveFileWithCordova } from 'cozy-client/dist/models/fsnative';
import { isIOS, isMobileApp } from 'cozy-device-helper';
import Alerter from "cozy-ui/transpiled/react/deprecated/Alerter";
export var shouldBeForwardButton = function shouldBeForwardButton(client) {
  var _client$appMetadata;

  var isDrive = (client === null || client === void 0 ? void 0 : (_client$appMetadata = client.appMetadata) === null || _client$appMetadata === void 0 ? void 0 : _client$appMetadata.slug) === 'drive';
  if (isMobileApp() || navigator.share && !isDrive) return true;
  return false;
};

var isMissingFileError = function isMissingFileError(error) {
  return error.status === 404;
};

var downloadFileError = function downloadFileError(error) {
  return isMissingFileError(error) ? 'Viewer.error.downloadFile.missing' : 'Viewer.error.missing';
};
/**
 * exportFilesNative - Triggers a prompt to download a file on mobile devices
 *
 * @param {CozyClient} client
 * @param {array} files    One or more files to download
 * @param {string} filename The name of the file that will be saved
 */


export var exportFilesNative = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(client, files, filename) {
    var downloadAllFiles, urls;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            downloadAllFiles = files.map( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file) {
                var response, blob, filenameToUse, localFile;
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return client.collection('io.cozy.files').fetchFileContentById(file.id);

                      case 2:
                        response = _context.sent;
                        _context.next = 5;
                        return response.blob();

                      case 5:
                        blob = _context.sent;
                        filenameToUse = filename ? filename : file.name;
                        _context.next = 9;
                        return saveFileWithCordova(blob, filenameToUse);

                      case 9:
                        localFile = _context.sent;
                        return _context.abrupt("return", localFile.nativeURL);

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context2.prev = 1;
            Alerter.info('Viewer.alert.preparing', {
              duration: Math.min(downloadAllFiles.length * 2000, 6000)
            });
            _context2.next = 5;
            return Promise.all(downloadAllFiles);

          case 5:
            urls = _context2.sent;

            if (urls.length === 1 && isIOS()) {
              // TODO
              // It seems that files: is not well supported on iOS. url seems to work well
              // at with one file. Need to check when severals
              window.plugins.socialsharing.shareWithOptions({
                url: urls[0]
              }, function (result) {
                if (result.completed === true) {
                  Alerter.success('Viewer.share.success');
                }
              }, function (error) {
                throw error;
              });
            } else {
              window.plugins.socialsharing.shareWithOptions({
                files: urls
              }, null, function (error) {
                throw error;
              });
            }

            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            Alerter.error(downloadFileError(_context2.t0));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function exportFilesNative(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
export var mapToAllChildren = function mapToAllChildren(children, cb) {
  return Children.map(children, function (child) {
    if (! /*#__PURE__*/isValidElement(child)) return child;
    var grandchildren = child.props.children;

    if (grandchildren) {
      return /*#__PURE__*/cloneElement(child, {
        children: mapToAllChildren(grandchildren, cb)
      });
    }

    return cb(child);
  });
};