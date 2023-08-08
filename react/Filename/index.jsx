import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { Media, Bd, Img } from '../deprecated/Media'
import Icon from '../Icon'
import Typography from '../Typography'
import MidEllipsis from '../MidEllipsis'

import styles from './styles.styl'

const Filename = ({ icon, filename, extension, midEllipsis, variant }) => {
  return (
    <Media>
      {icon && (
        <Img>
          <Icon className={'u-mr-1'} icon={icon} width={30} height={30} />
        </Img>
      )}
      {(filename || extension) && (
        <Bd className={styles['c-filename-wrapper']}>
          {filename && (
            <Typography
              variant={variant}
              component="span"
              className={cx(styles['c-filename-name'], {
                'u-ellipsis': !midEllipsis,
                'u-ov-hidden': midEllipsis
              })}
            >
              {midEllipsis ? <MidEllipsis text={filename} /> : filename}
            </Typography>
          )}
          {extension && (
            <Typography
              variant={variant}
              component="span"
              color="textSecondary"
            >
              {extension}
            </Typography>
          )}
        </Bd>
      )}
    </Media>
  )
}

Filename.propTypes = {
  /** Filename icon */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
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
