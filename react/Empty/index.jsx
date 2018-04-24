import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Text, MainTitle } from '../Text'
import styles from './styles.styl'

export const Empty = ({ icon, title, text, children, className }) => {
  return (
    <div
      className={classNames(
        styles['c-empty'],
        className
      )}
    >
      <img className={styles['c-empty-img']} src={icon} alt="" />
      {title && <MainTitle tag="h2" className={styles['c-empty-title']}>{title}</MainTitle>}
      {text && <Text tag="p" className={styles['c-empty-text']}>{text}</Text>}
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

export default Empty
