import React from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/has';
import Typography from "cozy-ui/transpiled/react/Typography";
import { Media, Img, Bd } from "cozy-ui/transpiled/react/deprecated/Media";
import Icon, { iconPropType } from "cozy-ui/transpiled/react/Icon";
import CarbonCopyIcon from "cozy-ui/transpiled/react/Icons/CarbonCopy";
import SafeIcon from "cozy-ui/transpiled/react/Icons/Safe";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";

var Certification = function Certification(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      caption = _ref.caption;
  return /*#__PURE__*/React.createElement("div", {
    className: 'u-ph-2 u-pv-1'
  }, /*#__PURE__*/React.createElement(Media, {
    className: "u-mb-half",
    align: "top"
  }, /*#__PURE__*/React.createElement(Img, {
    className: "u-mr-half"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon
  })), /*#__PURE__*/React.createElement(Bd, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "body1"
  }, title))), /*#__PURE__*/React.createElement(Typography, {
    variant: "caption"
  }, caption));
};

Certification.propTypes = {
  icon: iconPropType.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

var Certifications = function Certifications(_ref2) {
  var file = _ref2.file,
      t = _ref2.t;
  var hasCarbonCopy = has(file, 'metadata.carbonCopy');
  var hasElectronicSafe = has(file, 'metadata.electronicSafe');
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasCarbonCopy && /*#__PURE__*/React.createElement(Certification, {
    icon: CarbonCopyIcon,
    title: t('Viewer.panel.certifications.carbonCopy.title'),
    caption: t('Viewer.panel.certifications.carbonCopy.caption')
  }), hasElectronicSafe && /*#__PURE__*/React.createElement(Certification, {
    icon: SafeIcon,
    title: t('Viewer.panel.certifications.electronicSafe.title'),
    caption: t('Viewer.panel.certifications.electronicSafe.caption')
  }));
};

Certifications.propTypes = {
  file: PropTypes.object.isRequired
};
export default withViewerLocales(Certifications);