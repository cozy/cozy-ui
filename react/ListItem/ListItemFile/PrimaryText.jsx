import React from 'react'
import PropTypes from 'prop-types'

import { splitFilename } from 'cozy-client/dist/models/file'

import Filename from '../../Filename'
import useBreakpoints from '../../providers/Breakpoints'

const PrimaryText = ({ primary, file }) => {
  const { isMobile } = useBreakpoints()

  if (primary) return primary

  return (
    <Filename
      variant="body1"
      midEllipsis={isMobile}
      filename={
        splitFilename({
          name: file.name,
          type: 'file'
        }).filename
      }
      extension={
        splitFilename({
          name: file.name,
          type: 'file'
        }).extension
      }
    />
  )
}

PrimaryText.propTypes = {
  primary: PropTypes.node,
  file: PropTypes.object
}

export default PrimaryText
