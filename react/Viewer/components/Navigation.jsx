import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'
import Icon from '../../Icon'
import { default as ArrowIcon } from '../../Icons/DropdownClose'

const Navigation = ({
  className,
  hidden,
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
      <Icon icon={ArrowIcon} size="32" className={styles['viewer-nav-arrow']} />
    </div>
  )
}

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Navigation
