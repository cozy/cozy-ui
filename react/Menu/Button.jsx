import React from 'react'
import styles from './styles.styl'
import cx from 'classnames'
const Button = ({ buttonClassName, onClick, disabled, text }) => {
  return (
    <button
      role="button"
      className={cx('c-btn', styles['c-menu__btn'], buttonClassName)}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
