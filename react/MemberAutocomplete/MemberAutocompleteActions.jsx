import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useLayoutEffect, useRef } from 'react'

import CircularProgress from '../CircularProgress'
import MemberRoleMenu from '../MemberRow/MemberRoleMenu'
import { rolesPropType } from '../MemberRow/propTypes'
import { makeStyles } from '../styles'

const useStyles = makeStyles({
  root: {
    top: '.375rem',
    height: '2.375rem'
  }
})

const MemberAutocompleteActions = ({
  roles,
  role,
  isLoading,
  disabled,
  onRoleChange,
  onRoleMenuOpen,
  onRoleMenuClose,
  onWidthChange
}) => {
  const classes = useStyles()
  const rootRef = useRef()
  const isRoleMenuShown = roles !== undefined && role !== undefined
  const hasActions = isLoading || isRoleMenuShown

  useLayoutEffect(() => {
    onWidthChange(rootRef.current ? rootRef.current.offsetWidth : 0)
  }, [roles, role, isLoading, onWidthChange])

  if (!hasActions) return null

  return (
    // Clicks and keys in the role menu, portaled or not, bubble to the Autocomplete root,
    // which would focus the input, remove the last member or pick a suggestion
    <div
      ref={rootRef}
      className={cx(
        'u-pos-absolute u-right-m u-flex u-flex-items-center u-g-half',
        classes.root
      )}
      onClick={event => event.stopPropagation()}
      onKeyDown={event => event.stopPropagation()}
    >
      {isLoading && <CircularProgress size={16} />}
      {isRoleMenuShown && (
        <MemberRoleMenu
          value={role}
          roles={roles}
          size="small"
          disabled={disabled}
          onChange={onRoleChange}
          onOpen={onRoleMenuOpen}
          onClose={onRoleMenuClose}
        />
      )}
    </div>
  )
}

MemberAutocompleteActions.propTypes = {
  roles: rolesPropType,
  role: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onRoleChange: PropTypes.func,
  onRoleMenuOpen: PropTypes.func.isRequired,
  onRoleMenuClose: PropTypes.func.isRequired,
  onWidthChange: PropTypes.func.isRequired
}

export default MemberAutocompleteActions
