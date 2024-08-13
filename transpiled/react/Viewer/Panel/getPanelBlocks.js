import KonnectorBlock from 'cozy-harvest-lib/dist/components/KonnectorBlock';
import { models } from 'cozy-client';
import Certifications from "cozy-ui/transpiled/react/Viewer/Panel/Certifications";
import Qualification from "cozy-ui/transpiled/react/Viewer/Panel/Qualification";
var _models$file = models.file,
    isFromKonnector = _models$file.isFromKonnector,
    hasQualifications = _models$file.hasQualifications,
    hasCertifications = _models$file.hasCertifications;
/**
 * @typedef {Object} PanelBlockSpec
 * @property {Function} condition - Function that returns true if the block should be displayed
 * @property {React.Component} component - Component to display
 */

/**
 * @typedef {Object.<string, PanelBlockSpec>} PanelBlocksSpecs
 */

/**
 * Returns the specs of the blocks to display in the panel
 * @param {boolean} isPublic - Whether the panel is displayed in public view
 * @returns {PanelBlocksSpecs}
 */

export var getPanelBlocksSpecs = function getPanelBlocksSpecs() {
  var isPublic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    qualifications: {
      condition: hasQualifications,
      component: Qualification
    },
    konnector: {
      condition: function condition(file) {
        return isFromKonnector(file) && !isPublic;
      },
      component: KonnectorBlock
    },
    certifications: {
      condition: hasCertifications,
      component: Certifications
    }
  };
};
/**
 * Returns the blocks to display in the panel
 * @param {Object} options
 * @param {PanelBlocksSpecs} options.panelBlocksSpecs - Specs of the blocks to display in the panel
 * @param {import('cozy-client/types/types').FileDocument} options.file - File object
 * @returns {Array.<React.Component>}
 */

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