import React from 'react'
import cx from 'classnames'
import styles from './styles'

export default (props) => {
  const { theme = 'regular', busy, className, children, onClick } = props
  return <button
    aria-busy={busy}
    role='button'
    className={cx(styles['coz-btn'], styles[`coz-btn--${theme}`], className)}
    onClick={onClick}>
    {children}
  </button>
}
