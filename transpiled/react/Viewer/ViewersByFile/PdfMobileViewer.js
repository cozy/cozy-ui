import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useClient } from 'cozy-client';
var styles = {
  "viewer-imageviewer": "styles__viewer-imageviewer___26k0p",
  "viewer-noviewer": "styles__viewer-noviewer___auG-6",
  "viewer-audioviewer": "styles__viewer-audioviewer___1OQPB",
  "viewer-videoviewer": "styles__viewer-videoviewer___NhFoe",
  "viewer-pdfviewer": "styles__viewer-pdfviewer___1gTP9",
  "viewer-textviewer": "styles__viewer-textviewer___3u5Zw",
  "viewer-canceled": "styles__viewer-canceled___pOA_O",
  "viewer-textviewer-content": "styles__viewer-textviewer-content___PB-c3",
  "viewer-filename": "styles__viewer-filename___3jZCt",
  "viewer-pdfviewer-pdf": "styles__viewer-pdfviewer-pdf___16ID9",
  "viewer-pdfviewer-page": "styles__viewer-pdfviewer-page___2RPuw",
  "viewer-pdfviewer-toolbar": "styles__viewer-pdfviewer-toolbar___3NXOk",
  "viewer-pdfMobile": "styles__viewer-pdfMobile___25FPg",
  "viewer-pdfMobile--image": "styles__viewer-pdfMobile--image___3gpFL"
};
import FileImageLoader from "cozy-ui/transpiled/react/FileImageLoader";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import { useAlert } from "cozy-ui/transpiled/react/providers/Alert";
import NoViewer from "cozy-ui/transpiled/react/Viewer/NoViewer";
import DownloadButton from "cozy-ui/transpiled/react/Viewer/NoViewer/DownloadButton";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";
export var PdfMobileViewer = function PdfMobileViewer(_ref) {
  var file = _ref.file,
      url = _ref.url,
      t = _ref.t,
      gestures = _ref.gestures;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var imgRef = useRef(null);

  var _useAlert = useAlert(),
      showAlert = _useAlert.showAlert;

  var client = useClient();

  var onImageError = function onImageError() {
    setLoading(false);
    setError(true);
  };

  var onImageLoad = function onImageLoad() {
    setLoading(false);
  };

  var handleOnClick = useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(file) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return client.collection('io.cozy.files').download(file);

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              showAlert({
                message: t('Viewer.error.generic'),
                severity: 'error',
                variant: 'filled',
                icon: false
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [client, showAlert, t]);
  useEffect(function () {
    if (gestures) {
      gestures.get('pinch').set({
        enable: true
      });
      gestures.on('pinchend tap', function (evt) {
        if ((evt.type === 'pinchend' || evt.tapCount === 1) && evt.target === imgRef.current) {
          handleOnClick(file);
        }
      });
      return function () {
        gestures.off('pinchend tap');
      };
    }
  }, [client, gestures, file, handleOnClick]);

  if (error) {
    return /*#__PURE__*/React.createElement(NoViewer, {
      file: file,
      renderFallbackExtraContent: function renderFallbackExtraContent(file) {
        return /*#__PURE__*/React.createElement(DownloadButton, {
          file: file
        });
      }
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: styles['viewer-pdfMobile']
  }, loading && /*#__PURE__*/React.createElement(Spinner, {
    size: "xxlarge",
    middle: true,
    noMargin: true
  }), file && /*#__PURE__*/React.createElement(FileImageLoader, {
    file: file,
    url: url,
    linkType: "medium",
    onError: onImageError,
    key: file.id,
    render: function render(src) {
      return /*#__PURE__*/React.createElement("img", {
        ref: imgRef,
        className: styles['viewer-pdfMobile--image'],
        alt: file.name,
        src: src,
        onLoad: onImageLoad
      });
    }
  }));
};
PdfMobileViewer.prototype = {
  file: FileDoctype.isRequired,
  url: PropTypes.string,
  gestures: PropTypes.object
};
export default withViewerLocales(PdfMobileViewer);