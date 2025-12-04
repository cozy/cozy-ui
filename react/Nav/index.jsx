import cx from 'classnames'
import React, { Children, isValidElement, useState, forwardRef } from 'react'
import { useI18n } from 'twake-i18n'

import withNavLocales from './locales/withNavLocales'
import styles from './styles.styl'
import DropdownText from '../DropdownText'
import Icon from '../Icon'
import BottomIcon from '../Icons/Bottom'
import TopIcon from '../Icons/Top'
import ListItem from '../ListItem'
import useBreakpoints from '../providers/Breakpoints'

export const NavItem = ({ className, children, secondary, ...restProps }) => (
  <li
    className={cx(
      styles['c-nav-item'],
      className,
      secondary ? styles['c-nav-item-secondary'] : null
    )}
    {...restProps}
  >
    {children}
  </li>
)

export const NavText = ({ className, children }) => (
  <span className={cx(styles['c-nav-text'], className)}>{children}</span>
)

export const NavLink = {
  className: styles['c-nav-link'],
  activeClassName: styles['is-active']
}

// Generates a styled NavLink for react-routeur v5 and older
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

export const NavIcon = ({ className, icon }) => (
  <span className={cx(styles['c-nav-icon'], className)}>
    <Icon icon={icon} aria-hidden="true" focusable="false" />
  </span>
)

const Nav = ({ className, children }) => {
  return (
    <nav role="navigation">
      <ul className={cx(styles['c-nav'], className)}>{children}</ul>
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

export const NavDesktopDropdown = ({
  label,
  children,
  defaultOpen = true,
  limit = 5
}) => {
  const { isDesktop } = useBreakpoints()
  const [open, setOpen] = useState(defaultOpen)
  const isActivated =
    Children.toArray(children).filter(isValidElement).length > limit

  const innerIconProps = {
    rotate: open ? 0 : -90,
    ...(!isActivated && { className: 'u-dn' })
  }

  if (!isDesktop) return null

  return (
    <>
      <ListItem size="small" className={isActivated ? 'u-c-pointer' : ''}>
        <DropdownText
          variant="subtitle2"
          color="textSecondary"
          innerIconProps={innerIconProps}
          onClick={() => {
            if (!isActivated) {
              return
            }
            setOpen(!open)
          }}
        >
          {label}
        </DropdownText>
      </ListItem>

      {open && <>{children}</>}
    </>
  )
}

export default Nav
Nav.NavItem = NavItem
