import React from 'react'
import PropTypes from 'prop-types'

import { BottomSheetItem } from '../../BottomSheet'

import getPanelBlocks, { getPanelBlocksSpecs } from '../Panel/getPanelBlocks'

const BottomSheetContent = ({ file, isPublic }) => {
  const panelBlocks = getPanelBlocks({
    panelBlocksSpecs: getPanelBlocksSpecs(isPublic),
    file
  })

  return panelBlocks.map((PanelBlock, index) => (
    <BottomSheetItem
      key={index}
      disableGutters
      disableElevation={index === panelBlocks.length - 1}
    >
      <PanelBlock file={file} />
    </BottomSheetItem>
  ))
}

BottomSheetContent.propTypes = {
  file: PropTypes.object.isRequired,
  isPublic: PropTypes.bool
}

export default BottomSheetContent
