import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'cozy-ui/transpiled/react/Icon'

const FileIcon = ({ fileClass }) => {
  return <Icon className="u-ml-half" icon={'icon'} size={32} />
}

FileIcon.propTypes = {
  fileClass: PropTypes.string.isRequired
}

export default FileIcon
