import React from 'react';
import PropTypes from 'prop-types';
import { BottomSheetItem } from "cozy-ui/transpiled/react/BottomSheet";
import getPanelBlocks, { panelBlocksSpecs } from "cozy-ui/transpiled/react/Viewer/Panel/getPanelBlocks";

var BottomSheetContent = function BottomSheetContent(_ref) {
  var file = _ref.file;
  var panelBlocks = getPanelBlocks({
    panelBlocksSpecs: panelBlocksSpecs,
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
  contactsFullname: PropTypes.string
};
export default BottomSheetContent;