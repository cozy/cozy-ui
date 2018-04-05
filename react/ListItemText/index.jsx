import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const ListItemText = props => {
  const { primaryText, secondaryText, className } = props
  return (
    <div className={cx(
      styles['c-list-text'],
      className)}
    >
      <div className={styles['c-list-text--primary']}>{primaryText}</div>
      <div className={styles['c-list-text--secondary']}>{secondaryText}</div>
    </div>
  )
}

ListItemText.propTypes = {
  children: PropTypes.node,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  className: PropTypes.string
}

export default ListItemText
