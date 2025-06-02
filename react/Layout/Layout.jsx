import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import styles from './styles.styl'

export const Layout = ({
  children,
  className,
  monoColumn,
  withTopBar,
  ...rest
}) => {
  return (
    <div
      className={cx(
        monoColumn ? styles['o-layout'] : styles['o-layout-2panes'],
        className,
        {
          [styles[`o-layout${monoColumn ? '' : '-2panes'}--withTopBar`]]:
            withTopBar
        }
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export const Main = ({ children, ...rest }) => <main {...rest}>{children}</main>

export class Content extends Component {
  render() {
    const { children, ...rest } = this.props
    return (
      <div role="main" {...rest}>
        {children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Used to add/remove top spacing when using with or without a topbar */
  withTopBar: PropTypes.bool,
  /** Should be true if no sidebar in the app */
  monoColumn: PropTypes.bool
}

Layout.defaultProps = {
  withTopBar: true,
  monoColumn: false
}
