import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["file"];
import React from 'react';
import PropTypes from 'prop-types';
import { useClient } from 'cozy-client';
import ForwardButton from "cozy-ui/transpiled/react/Viewer/Footer/ForwardButton";
import DownloadButton from "cozy-ui/transpiled/react/Viewer/Footer/DownloadButton";
import { shouldBeForwardButton } from "cozy-ui/transpiled/react/Viewer/Footer/helpers";

var ForwardOrDownloadButton = function ForwardOrDownloadButton(_ref) {
  var file = _ref.file,
      props = _objectWithoutProperties(_ref, _excluded);

  var client = useClient();
  var FileActionButton = shouldBeForwardButton(client) ? ForwardButton : DownloadButton;
  return /*#__PURE__*/React.createElement(FileActionButton, _extends({
    file: file
  }, props));
};

ForwardOrDownloadButton.propTypes = {
  file: PropTypes.object
};
export default ForwardOrDownloadButton;