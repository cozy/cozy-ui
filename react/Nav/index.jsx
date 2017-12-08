import React from 'react'
import Icon from '../Icon'
import styles from './styles'
import cx from 'classnames'

export const NavItem = ({ children }) => (
  <li className={styles['c-nav-item']}>
    { children }
  </li>
)

export const NavText = ({ children }) => (
  <span className={styles['c-nav-item__text']}>
    { children }
  </span>
)

export const NavLink = ({ children }) => (
  <div className={styles['c-nav-link']}>{ children }</div>
)

Object.assign(NavLink, {
  className: styles['c-nav-link'],
  activeClassName: styles['is-active']
})

export const NavIcon = ({ icon }) => (
  <span className={cx(styles['c-nav-item__icon'], styles['nav-link__icon'])}>
    <Icon icon={icon} />
  </span>
)

const Nav = ({ children }) => {
  return (
    <nav>
      <ul className={styles['c-nav']}>
        { children }
      </ul>
    </nav>
  )
}

export default Nav
Nav.NavItem = NavItem
