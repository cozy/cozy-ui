import React from 'react';
import PropTypes from 'prop-types';
import FileIcon from "cozy-ui/transpiled/react/Viewer/NoViewer/FileIcon";
import DownloadButton from "cozy-ui/transpiled/react/Viewer/NoViewer/DownloadButton";
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
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";

var NoViewer = function NoViewer(_ref) {
  var file = _ref.file,
      url = _ref.url,
      renderFallbackExtraContent = _ref.renderFallbackExtraContent;
  return /*#__PURE__*/React.createElement("div", {
    className: styles['viewer-noviewer']
  }, /*#__PURE__*/React.createElement(FileIcon, {
    type: file.class
  }), /*#__PURE__*/React.createElement("p", {
    className: styles['viewer-filename']
  }, file.name), renderFallbackExtraContent(file, url));
};

NoViewer.propTypes = {
  file: FileDoctype.isRequired,
  renderFallbackExtraContent: PropTypes.func,
  url: PropTypes.string
};
NoViewer.defaultProps = {
  renderFallbackExtraContent: function renderFallbackExtraContent(file, url) {
    return /*#__PURE__*/React.createElement(DownloadButton, {
      file: file,
      url: url
    });
  }
};
export default NoViewer;