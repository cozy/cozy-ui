import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ThumbnailByType from './ThumbnailByType'

import styles from './Thumbnail.styl'

/**
 * Thumbnail component
 * The `icon` property takes precedence over the `image` property
 * @param {Object} props
 * @param {string} props.image - Image source
 * @param {React.ElementType} props.icon - Icon component
 * @param {boolean} props.isStacked - Is the image stacked
 */
const Thumbnail = ({ className, image, icon, isStacked }) => {
  return (
    <div className={cx(className, styles['container'])} aria-hidden="true">
      <ThumbnailByType image={image} icon={icon} isStacked={isStacked} />
    </div>
  )
}

Thumbnail.propTypes = {
  image: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]),
  isStacked: PropTypes.bool
}

export default Thumbnail
