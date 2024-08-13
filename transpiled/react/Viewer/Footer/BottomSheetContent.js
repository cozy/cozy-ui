import React from 'react';
import PropTypes from 'prop-types';
import { BottomSheetItem } from "cozy-ui/transpiled/react/BottomSheet";
import getPanelBlocks, { getPanelBlocksSpecs } from "cozy-ui/transpiled/react/Viewer/Panel/getPanelBlocks";

var BottomSheetContent = function BottomSheetContent(_ref) {
  var file = _ref.file,
      isPublic = _ref.isPublic;
  var panelBlocks = getPanelBlocks({
    panelBlocksSpecs: getPanelBlocksSpecs(isPublic),
    file: file
  });
  return panelBlocks.map(function (PanelBlock, index) {
    return /*#__PURE__*/React.createElement(BottomSheetItem, {
      key: index,
      disableGutters: true,
      disableElevation: index === panelBlocks.length - 1
    }, /*#__PURE__*/React.createElement(PanelBlock, {
      file: file
    }));
  });
};

BottomSheetContent.propTypes = {
  file: PropTypes.object.isRequired,
  isPublic: PropTypes.bool
};
export default BottomSheetContent;