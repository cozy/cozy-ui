import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { Media, Bd, Img } from '../deprecated/Media'
import Icon from '../Icon'
import Typography from '../Typography'
import styles from './styles.styl'

const Filename = ({ icon, filename, extension, variant }) => {
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
              className={cx(styles['c-filename-name'], 'u-ellipsis')}
            >
              {filename}
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
  variant: PropTypes.string
}

Filename.defaultProps = {
  variant: 'h6'
}

export default Filename
