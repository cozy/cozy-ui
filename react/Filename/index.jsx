import React from 'react'
import PropTypes from 'prop-types'
import { Media, Bd, Img } from '../Media'
import Icon from '../Icon'
import { Bold } from '../Text'
import styles from './styles.styl'

const Filename = ({ icon, filename, extension }) => {
  return (
    <Media>
      {icon && (
        <Img>
          <Icon className={'u-mr-1'} icon={icon} width={30} height={30} />
        </Img>
      )}
      <Bd className={styles['c-filename-wrapper']}>
        <Bold tag="span" ellipsis className={styles['c-filename-name']}>
          {filename}
        </Bold>
        {extension && (
          <Bold tag="span" className="u-coolGrey">
            {extension}
          </Bold>
        )}
      </Bd>
    </Media>
  )
}

Filename.propTypes = {
  /** Filename icon */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** folder or file name */
  filename: PropTypes.string.isRequired,
  /** If a file name, you can specify the extension */
  extension: PropTypes.string
}

export default Filename
