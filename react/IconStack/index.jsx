import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.styl'

const IconStack = ({ className, background, foreground, align = 'center' }) => {
  return (
    <div className={classNames(styles['IconStack-wrapper'], className)}>
      {background}
      <div className={classNames(styles[`IconStack-foregroundIcon-${align}`])}>
        {foreground}
      </div>
    </div>
  )
}

IconStack.propTypes = {
  className: PropTypes.string,
  background: PropTypes.node,
  foreground: PropTypes.node,
  align: PropTypes.oneOf(['center', 'bottom-right'])
}
export default IconStack
