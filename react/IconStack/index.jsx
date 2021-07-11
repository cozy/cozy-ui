import React from 'react'
import classNames from 'classnames'

import migrateProps from '../helpers/migrateProps'
import styles from './styles.styl'

const IconStack = ({
  backgroundClassName,
  foregroundClassName,
  backgroundIcon,
  foregroundIcon
}) => {
  return (
    <div
      className={classNames(styles['IconStack-wrapper'], backgroundClassName)}
    >
      {backgroundIcon}
      <div
        className={classNames(
          styles['IconStack-foregroundIcon'],
          foregroundClassName
        )}
      >
        {foregroundIcon}
      </div>
    </div>
  )
}

export default migrateProps([
  { src: 'className', dest: 'backgroundClassName' },
  { src: 'background', dest: 'backgroundIcon' },
  { src: 'foreground', dest: 'foregroundIcon' }
])(IconStack)
