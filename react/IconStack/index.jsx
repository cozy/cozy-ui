import React from 'react'
import classNames from 'classnames'
import styles from './styles.styl'

const IconStack = ({ className, background, foreground }) => {
  return (
    <div className={classNames(styles['IconStack-wrapper'], className)}>
      {background}
      <div className={classNames(styles['IconStack-foregroundIcon'])}>
        {foreground}
      </div>
    </div>
  )
}

export default IconStack
