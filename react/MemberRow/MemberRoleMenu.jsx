import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'

import MemberRoleMenuHeader from './MemberRoleMenuHeader'
import { memberPropType, rolesPropType } from './propTypes'
import ActionsMenuItem from '../ActionsMenu/ActionsMenuItem'
import ActionsMenuWrapper from '../ActionsMenu/ActionsMenuWrapper'
import DropdownButton from '../DropdownButton'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'
import Radios from '../Radios'
import useBreakpoints from '../providers/Breakpoints'

const MemberRoleMenu = ({
  member,
  value,
  roles,
  size,
  disabled = false,
  onChange,
  onOpen,
  onClose
}) => {
  const { isMobile } = useBreakpoints()
  const buttonRef = useRef()
  const [isMenuDisplayed, setMenuDisplayed] = useState(false)

  const label = roles.find(role => role.value === value)?.label
  const isHeaderShown = isMobile && member !== undefined

  const openMenu = () => {
    setMenuDisplayed(true)
    onOpen?.()
  }

  const closeMenu = () => {
    setMenuDisplayed(false)
    onClose?.()
  }

  const handleRoleClick = role => {
    if (role.value !== value) onChange(role.value)
  }

  return (
    <>
      <DropdownButton
        ref={buttonRef}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={openMenu}
        textVariant="body2"
        size={size}
        disabled={disabled}
      >
        {label}
      </DropdownButton>
      <ActionsMenuWrapper
        open={isMenuDisplayed}
        anchorEl={buttonRef.current}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        keepMounted
        autoClose
        onClose={closeMenu}
      >
        {/* The header renders nothing on desktop but would still take the initial focus of the menu */}
        {isHeaderShown && <MemberRoleMenuHeader member={member} />}
        {roles.map(role => (
          <ActionsMenuItem
            key={role.value}
            onClick={() => handleRoleClick(role)}
          >
            <ListItemIcon>
              <Radios checked={role.value === value} />
            </ListItemIcon>
            <ListItemText primary={role.label} />
          </ActionsMenuItem>
        ))}
      </ActionsMenuWrapper>
    </>
  )
}

MemberRoleMenu.propTypes = {
  /** Member shown in the header of the menu on mobile */
  member: memberPropType,
  value: PropTypes.string.isRequired,
  roles: rolesPropType.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
}

export default MemberRoleMenu
