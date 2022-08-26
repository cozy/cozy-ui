import React, { forwardRef } from 'react'
import Icon from '../Icon'
import styles from './styles.styl'
import cx from 'classnames'

export const NavItem = ({ children, secondary, ...restProps }) => (
  <li
    className={cx(
      styles['c-nav-item'],
      secondary ? styles['c-nav-item-secondary'] : null
    )}
    {...restProps}
  >
    {children}
  </li>
)

export const NavText = ({ children }) => (
  <span className={styles['c-nav-text']}>{children}</span>
)

export const NavLink = {
  className: styles['c-nav-link'],
  activeClassName: styles['is-active']
}

// Generates a styled NavLink for react-routeur v5 and older
export const genNavLink = RRNavLink => ({ to, children, ...rest }) => (
  <RRNavLink
    to={to}
    className={NavLink.className}
    activeClassName={NavLink.activeClassName}
    {...rest}
  >
    {children}
  </RRNavLink>
)

// Generates a styled NavLink for react-routeur v6
export const genNavLinkForV6 = RRNavLink =>
  forwardRef((props, ref) => (
    <RRNavLink
      ref={ref}
      className={({ isActive }) =>
        styles['c-nav-link'] + (isActive ? ` ${styles['is-active']}` : '')
      }
      {...props}
    />
  ))

export const NavIcon = ({ icon }) => (
  <span className={cx(styles['c-nav-icon'])}>
    <Icon icon={icon} aria-hidden="true" focusable="false" />
  </span>
)

const Nav = ({ children }) => {
  return (
    <nav role="navigation">
      <ul className={styles['c-nav']}>{children}</ul>
    </nav>
  )
}

export default Nav
Nav.NavItem = NavItem
