import React from 'react';
import PropTypes from 'prop-types';
import { splitFilename } from 'cozy-client/dist/models/file';
import Filename from "cozy-ui/transpiled/react/Filename";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";

var PrimaryText = function PrimaryText(_ref) {
  var primary = _ref.primary,
      file = _ref.file;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  if (primary) return primary;
  return /*#__PURE__*/React.createElement(Filename, {
    variant: "body1",
    midEllipsis: isMobile,
    filename: splitFilename({
      name: file.name,
      type: 'file'
    }).filename,
    extension: splitFilename({
      name: file.name,
      type: 'file'
    }).extension
  });
};

PrimaryText.propTypes = {
  primary: PropTypes.node,
  file: PropTypes.object
};
export default PrimaryText;