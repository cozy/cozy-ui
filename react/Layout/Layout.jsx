import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import cx from 'classnames'

export const Layout = ({ children, className, monoColumn, ...rest }) => {
  return (
    <div
      className={cx(
        monoColumn ? styles['o-layout'] : styles['o-layout-2panes'],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export const Main = ({ children, className, ...rest }) => {
  return (
    <main className={className} {...rest}>
      {children}
    </main>
  )
}

export const Content = ({ children, className, ...rest }) => {
  return (
    <div role="main" className={className} {...rest}>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  monoColumn: PropTypes.bool
}

Layout.defaultProps = {
  monoColumn: false
}
