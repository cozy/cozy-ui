import React from 'react'
import PropTypes from 'prop-types'

import { BottomSheetItem } from '../../BottomSheet'

import getPanelBlocks, { panelBlocksSpecs } from '../Panel/getPanelBlocks'

const BottomSheetContent = ({ file, contactsFullname }) => {
  const panelBlocks = getPanelBlocks({ panelBlocksSpecs, file })

  return panelBlocks.map((PanelBlock, index) => (
    <BottomSheetItem
      key={index}
      disableElevation={index === panelBlocks.length - 1}
    >
      <PanelBlock file={file} contactsFullname={contactsFullname} />
    </BottomSheetItem>
  ))
}

BottomSheetContent.propTypes = {
  file: PropTypes.object.isRequired,
  contactsFullname: PropTypes.string
}

export default BottomSheetContent
