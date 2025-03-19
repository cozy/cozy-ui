import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import styles from './styles.styl'
import { isTwakeTheme } from '../helpers/isTwakeTheme'

export const Layout = ({ children, className, monoColumn, ...rest }) => {
  return (
    <div
      className={cx(
        monoColumn ? styles['o-layout'] : styles['o-layout-2panes'],
        className,
        { [styles['o-layout--rounded']]: isTwakeTheme() }
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
  monoColumn: PropTypes.bool
}

Layout.defaultProps = {
  monoColumn: false
}
