import React from 'react'
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

export const genNavLink =
  RRNavLink =>
  ({ to, children, ...rest }) =>
    (
      <RRNavLink
        to={to}
        className={NavLink.className}
        activeClassName={NavLink.activeClassName}
        {...rest}
      >
        {children}
      </RRNavLink>
    )

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
