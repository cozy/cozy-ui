import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
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
import Backdrop from "cozy-ui/transpiled/react/Backdrop";
import Button from "cozy-ui/transpiled/react/Buttons";
import Empty from "cozy-ui/transpiled/react/Empty";
import IntentDialogOpener from "cozy-ui/transpiled/react/IntentDialogOpener";
import IlluGenericNewPage from "cozy-ui/transpiled/react/Viewer/assets/IlluGenericNewPage.svg";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";

var BlankPaperViewer = function BlankPaperViewer(_ref) {
  var _file$metadata, _file$metadata$qualif;

  var file = _ref.file,
      t = _ref.t;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  return /*#__PURE__*/React.createElement("div", {
    className: styles['viewer-noviewer']
  }, /*#__PURE__*/React.createElement(Empty, {
    icon: /*#__PURE__*/React.createElement("img", {
      src: IlluGenericNewPage
    }),
    text: t('Viewer.noImage'),
    componentsProps: {
      text: {
        color: 'inherit'
      }
    }
  }, /*#__PURE__*/React.createElement(IntentDialogOpener, {
    action: "OPEN",
    doctype: "io.cozy.files.paper",
    Component: Backdrop,
    invisible: !isLoading,
    isOver: true,
    options: {
      fileId: file._id,
      qualificationLabel: (_file$metadata = file.metadata) === null || _file$metadata === void 0 ? void 0 : (_file$metadata$qualif = _file$metadata.qualification) === null || _file$metadata$qualif === void 0 ? void 0 : _file$metadata$qualif.label
    },
    showCloseButton: false,
    iframeProps: {
      spinnerProps: {
        className: 'u-m-0',
        middle: true,
        color: 'white'
      },
      setIsLoading: setIsLoading
    }
  }, /*#__PURE__*/React.createElement(Button, {
    className: "u-mt-1",
    label: t('Viewer.complete')
  }))));
};

export default withViewerLocales(BlankPaperViewer);