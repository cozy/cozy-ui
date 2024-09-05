import React from 'react';
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
import withFileUrl from "cozy-ui/transpiled/react/Viewer/hoc/withFileUrl";

var VideoViewer = function VideoViewer(_ref) {
  var file = _ref.file,
      url = _ref.url;
  return /*#__PURE__*/React.createElement("div", {
    className: styles['viewer-videoviewer']
  }, /*#__PURE__*/React.createElement("video", {
    src: url,
    controls: "controls"
  }), /*#__PURE__*/React.createElement("p", {
    className: styles['viewer-filename']
  }, file.name));
};

export default withFileUrl(VideoViewer);