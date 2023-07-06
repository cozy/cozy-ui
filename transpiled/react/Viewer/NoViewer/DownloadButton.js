import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import { withClient } from 'cozy-client';
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import Button from "cozy-ui/transpiled/react/deprecated/Button";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";
import { downloadFile } from "cozy-ui/transpiled/react/Viewer/helpers";

var DownloadButton = function DownloadButton(_ref) {
  var t = _ref.t,
      client = _ref.client,
      file = _ref.file,
      url = _ref.url;
  return /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return downloadFile({
        client: client,
        file: file,
        url: url
      });
    },
    label: t('Viewer.download')
  });
};

DownloadButton.propTypes = {
  t: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
  file: FileDoctype,
  url: PropTypes.string
};
export default flow(withClient, withViewerLocales)(DownloadButton);