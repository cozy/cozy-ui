import KonnectorBlock from 'cozy-harvest-lib/dist/components/KonnectorBlock';
import { models } from 'cozy-client';
import Certifications from "cozy-ui/transpiled/react/Viewer/Panel/Certifications";
import Qualification from "cozy-ui/transpiled/react/Viewer/Panel/Qualification";
var _models$file = models.file,
    isFromKonnector = _models$file.isFromKonnector,
    hasQualifications = _models$file.hasQualifications,
    hasCertifications = _models$file.hasCertifications;
export var panelBlocksSpecs = {
  qualifications: {
    condition: hasQualifications,
    component: Qualification
  },
  konnector: {
    condition: isFromKonnector,
    component: KonnectorBlock
  },
  certifications: {
    condition: hasCertifications,
    component: Certifications
  }
};

var getPanelBlocks = function getPanelBlocks(_ref) {
  var panelBlocksSpecs = _ref.panelBlocksSpecs,
      file = _ref.file;
  var panelBlocks = [];
  Object.values(panelBlocksSpecs).forEach(function (panelBlock) {
    panelBlock.condition(file) && panelBlocks.push(panelBlock.component);
  });
  return panelBlocks;
};

export default getPanelBlocks;