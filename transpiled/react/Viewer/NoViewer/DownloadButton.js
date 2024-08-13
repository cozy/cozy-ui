import React from 'react';
import PropTypes from 'prop-types';
import { withClient } from 'cozy-client';
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import Button from "cozy-ui/transpiled/react/deprecated/Button";
import { downloadFile } from "cozy-ui/transpiled/react/Viewer/helpers";

var DownloadButton = function DownloadButton(_ref) {
  var client = _ref.client,
      file = _ref.file,
      url = _ref.url;

  var _useI18n = useI18n(),
      t = _useI18n.t;

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
  client: PropTypes.object.isRequired,
  file: FileDoctype,
  url: PropTypes.string
};
export default withClient(DownloadButton);