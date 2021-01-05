import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon'

import styles from './styles.styl'

const Navigation = ({
  className,
  hidden,
  icon,
  onMouseEnter,
  onMouseLeave,
  onClick
}) => {
  return (
    <div
      role="button"
      className={cx(className, styles['viewer-nav'], {
        [styles['viewer-nav--visible']]: !hidden
      })}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Icon icon={icon} size="24" className={styles['viewer-nav-arrow']} />
    </div>
  )
}

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
  icon: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Navigation
