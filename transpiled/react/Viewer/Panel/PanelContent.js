import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Stack from "cozy-ui/transpiled/react/Stack";
import Paper from "cozy-ui/transpiled/react/Paper";
import Typography from "cozy-ui/transpiled/react/Typography";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";
import getPanelBlocks, { panelBlocksSpecs } from "cozy-ui/transpiled/react/Viewer/Panel/getPanelBlocks";

var PanelContent = function PanelContent(_ref) {
  var file = _ref.file,
      t = _ref.t;
  var panelBlocks = getPanelBlocks({
    panelBlocksSpecs: panelBlocksSpecs,
    file: file
  });
  return /*#__PURE__*/React.createElement(Stack, {
    spacing: "s",
    className: cx('u-flex u-flex-column u-h-100')
  }, /*#__PURE__*/React.createElement(Paper, {
    className: 'u-ph-2 u-flex u-flex-items-center u-h-3',
    elevation: 2,
    square: true
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h4"
  }, t('Viewer.panel.title'))), panelBlocks.map(function (PanelBlock, index) {
    return /*#__PURE__*/React.createElement(Paper, {
      key: index,
      className: cx({
        'u-flex-grow-1': index === panelBlocks.length - 1
      }),
      elevation: 2,
      square: true
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "h4",
      className: 'u-pv-1'
    }, /*#__PURE__*/React.createElement(PanelBlock, {
      file: file
    })));
  }));
};

PanelContent.propTypes = {
  file: PropTypes.object.isRequired
};
export default withViewerLocales(PanelContent);