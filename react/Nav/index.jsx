import React, { Children, isValidElement, useState, forwardRef } from 'react'
import Icon from '../Icon'
import styles from './styles.styl'
import cx from 'classnames'
import BottomIcon from '../Icons/Bottom'
import TopIcon from '../Icons/Top'
import { useI18n } from '../providers/I18n'
import withNavLocales from './locales/withNavLocales'
import useBreakpoints from '../providers/Breakpoints'

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

/**
 * Component that limits the number of displayed children in a list
 * and provides a dropdown button to toggle between displaying all children or a limited number of children.
 * Provided children should be of type `<ListItem />` or similar.
 */
const _NavDesktopLimiter = ({ children, max = 5 }) => {
  const [viewingAll, setViewingAll] = useState(false)
  const childrenArray = Children.toArray(children).filter(isValidElement)
  const amountHidden = Math.max(0, childrenArray.length - max)
  const { t } = useI18n()
  const displayedChildren = viewingAll
    ? childrenArray
    : childrenArray.slice(0, max)
  const onToggle = () => setViewingAll(current => !current)
  const { isMobile } = useBreakpoints()

  if (isMobile) return null

  return (
    <>
      {displayedChildren}

      {amountHidden > 0 && (
        <NavItem secondary>
          <button
            type="button"
            className={cx(styles['c-nav-link'], styles['c-nav-limiter'])}
            onClick={onToggle}
          >
            <NavIcon icon={viewingAll ? TopIcon : BottomIcon} />
            <NavText>
              {viewingAll
                ? t('navLimiter.showLess')
                : `${t('navLimiter.showMore')} (${amountHidden})`}
            </NavText>
          </button>
        </NavItem>
      )}
    </>
  )
}

export const NavDesktopLimiter = withNavLocales(_NavDesktopLimiter)

export default Nav
Nav.NavItem = NavItem
