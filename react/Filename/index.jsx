import React from 'react'
import PropTypes from 'prop-types'

import Icon, { iconPropType } from '../Icon'
import Typography from '../Typography'
import MidEllipsis from '../MidEllipsis'

const Filename = ({ icon, filename, extension, midEllipsis, variant }) => {
  return (
    <div className="u-flex u-flex-items-center">
      {icon && (
        <div className="u-mr-1">
          <Icon icon={icon} width={30} height={30} />
        </div>
      )}
      {filename && (
        <Typography variant={variant} component="span" noWrap>
          {midEllipsis ? <MidEllipsis text={filename} /> : filename}
        </Typography>
      )}
      {extension && (
        <Typography variant={variant} component="span" color="textSecondary">
          {extension}
        </Typography>
      )}
    </div>
  )
}

Filename.propTypes = {
  /** Filename icon */
  icon: iconPropType,
  /** folder or file name */
  filename: PropTypes.string,
  /** If a file name, you can specify the extension */
  extension: PropTypes.string,
  /** To replace the end ellipsis by a middle on in the filename */
  midEllipsis: PropTypes.bool,
  variant: PropTypes.string
}

Filename.defaultProps = {
  variant: 'h6',
  midEllipsis: false
}

export default Filename
