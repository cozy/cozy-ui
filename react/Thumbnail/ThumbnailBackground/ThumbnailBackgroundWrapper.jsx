import React from 'react'
import cx from 'classnames'

import styles from '../Thumbnail.styl'

const ThumbnailBackgroundWrapper = ({ children }) => {
  return (
    <div
      className={cx(
        styles['image__wrapper'],
        styles['image__wrapper__background'],
        styles['image__wrapper__multiple']
      )}
      data-testid="ThumbnailBackgroundWrapper"
    >
      {children}
    </div>
  )
}

export default ThumbnailBackgroundWrapper
