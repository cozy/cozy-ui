import PropTypes from 'prop-types';
import React from 'react';
import Button from "cozy-ui/transpiled/react/deprecated/Button";
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import NoViewer from "cozy-ui/transpiled/react/Viewer/NoViewer";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";

var OnlyOfficeViewer = function OnlyOfficeViewer(_ref) {
  var file = _ref.file,
      onlyOfficeOpener = _ref.onlyOfficeOpener,
      t = _ref.t;
  return /*#__PURE__*/React.createElement(NoViewer, {
    file: file,
    renderFallbackExtraContent: function renderFallbackExtraContent() {
      return /*#__PURE__*/React.createElement(Button, {
        label: t('Viewer.openInOnlyOffice'),
        onClick: function onClick() {
          return onlyOfficeOpener(file);
        }
      });
    }
  });
};

OnlyOfficeViewer.propTypes = {
  file: FileDoctype,
  onlyOfficeOpener: PropTypes.func.isRequired
};
export default withViewerLocales(OnlyOfficeViewer);