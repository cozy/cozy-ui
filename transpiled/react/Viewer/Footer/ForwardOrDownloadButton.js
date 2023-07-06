import React from 'react';
import PropTypes from 'prop-types';
import { useClient } from 'cozy-client';
import ForwardButton from "cozy-ui/transpiled/react/Viewer/Footer/ForwardButton";
import DownloadButton from "cozy-ui/transpiled/react/Viewer/Footer/DownloadButton";
import { shouldBeForwardButton } from "cozy-ui/transpiled/react/Viewer/Footer/helpers";

var ForwardOrDownloadButton = function ForwardOrDownloadButton(_ref) {
  var file = _ref.file;
  var client = useClient();
  var FileActionButton = shouldBeForwardButton(client) ? ForwardButton : DownloadButton;
  return /*#__PURE__*/React.createElement(FileActionButton, {
    file: file
  });
};

ForwardOrDownloadButton.propTypes = {
  file: PropTypes.object
};
export default ForwardOrDownloadButton;