import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { createContext, forwardRef, useContext, useMemo } from 'react'

import styles from './styles.styl'

export const LayoutContext = createContext()

export const useLayout = () => {
  const context = useContext(LayoutContext)

  if (!context) {
    throw new Error('useLayout must be used within a LayoutContext')
  }
  return context
}

const LayoutProvider = React.memo(({ monoColumn, withTopBar, children }) => {
  const value = useMemo(
    () => ({
      monoColumn,
      withTopBar
    }),
    [monoColumn, withTopBar]
  )

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  )
})

LayoutProvider.displayName = 'LayoutProvider'

export const Layout = forwardRef(
  ({ children, className, monoColumn, withTopBar, ...props }, ref) => {
    const variant = monoColumn ? 'monocolumn' : '2panes'

    return (
      <LayoutProvider monoColumn={monoColumn} withTopBar={withTopBar}>
        <div
          ref={ref}
          className={cx(
            className,
            styles['o-layout'],
            styles[`o-layout-${variant}`],
            {
              [styles[`o-layout-topbar`]]: withTopBar
            }
          )}
          {...props}
        >
          {children}
        </div>
      </LayoutProvider>
    )
  }
)

Layout.displayName = 'Layout'

export const Main = forwardRef(({ className, children, ...props }, ref) => {
  const { monoColumn, withTopBar } = useLayout()
  const variant = monoColumn ? 'monocolumn' : '2panes'

  return (
    <main
      ref={ref}
      className={cx(
        className,
        styles['o-layout-main'],
        styles[`o-layout-main-${variant}`],
        {
          [styles[`o-layout-main-${variant}--topbar`]]: withTopBar
        }
      )}
      {...props}
    >
      {children}
    </main>
  )
})

Main.displayName = 'Main'

export const Content = forwardRef(({ className, children, ...props }, ref) => {
  const { monoColumn } = useLayout()
  const variant = monoColumn ? 'monocolumn' : '2panes'

  return (
    <div
      role="main"
      ref={ref}
      className={cx(
        className,
        styles['o-layout-content'],
        styles[`o-layout-content-${variant}`]
      )}
      {...props}
    >
      {children}
    </div>
  )
})

Content.displayName = 'Content'

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
