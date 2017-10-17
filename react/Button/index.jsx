import React from 'react'
import cx from 'classnames'
import styles from './styles'

export default (props) => {
  const { theme, busy, className, children, onClick } = props
  return <button
    aria-busy={busy}
    role='button'
    className={cx(styles['coz-btn'], theme ? styles[`coz-btn--${theme}`] : null, className)}
    onClick={onClick}>
    { children }
  </button>
}
