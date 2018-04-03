import React from 'react'
import { translate } from '../I18n'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

export const Empty = ({ t, icon, title, text, children, className }) => {
  return (
    <div
      className={classNames(
        styles['c-empty'],
        className
      )}
    >
      <img className={styles['c-empty-img']} src={icon} alt="" />
      <h2 className={styles['c-empty-title']}>{title}</h2>
      <p className={styles['c-empty-text']}>{text}</p>
      <div className={styles['c-empty-text']}>{children}</div>
    </div>
  )
}

Empty.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node,
  className: PropTypes.string
}

export default translate()(Empty)
