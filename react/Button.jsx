import React from 'react'
import cx from 'classnames'

export default function (props) {
  const { theme, busy, className, children, onClick } = props
  return <button
    aria-busy={busy}
    role='button'
    className={cx('coz-btn', theme ? `coz-btn--${theme}` : null, className)}
    onClick={onClick}>
    { children }
  </button>
}
