import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { useClient } from 'cozy-client'

import CustomMenu from './SelectBox/Menu'
import CustomOption from './SelectBox/Option'
import CustomSelectContainer from './SelectBox/SelectContainer'
import useGroupsSelect from './useGroupSelect'
import ClickAwayListener from '../../ClickAwayListener'
import SelectBox from '../../SelectBox'
import { useBreakpoints } from '../../providers/Breakpoints'

const captureEscapeEvent = e => {
  if (e.key === 'Escape') {
    e.stopPropagation()
    e.target.blur()
  }
}

export const GroupsSelect = ({
  allGroups,
  closeMenuOnSelect,
  value,
  styles,
  isMulti,
  noOptionsMessage,
  withCheckbox,
  components,
  onGroupCreated,
  onChange,
  onGroupCreate,
  onGroupUpdate,
  onGroupDelete,
  menuPosition
}) => {
  const client = useClient()
  const { isMobile } = useBreakpoints()
  const [{ menuIsOpen, editedGroupId }, setState] = useState({
    menuIsOpen: false,
    editedGroupId: ''
  })
  const { createGroup, renameGroup } = useGroupsSelect({
    allGroups,
    onGroupCreated,
    client,
    onGroupCreate,
    onGroupUpdate
  })

  const toggleMenu = () => {
    setState(prev => ({ ...prev, menuIsOpen: !prev.menuIsOpen }))
  }

  const closeMenu = () => {
    setState(prev => ({ ...prev, menuIsOpen: false }))
  }

  const setEditedGroupId = id => {
    setState(prev => ({ ...prev, editedGroupId: id }))
  }

  const handleChange = props => {
    if (closeMenuOnSelect) {
      closeMenu()
    }

    onChange(props)
  }

  const handleDelete = group => {
    closeMenu()
    onGroupDelete(group)
  }

  const defaultComponents = {
    Menu: CustomMenu,
    Option: CustomOption,
    SelectContainer: CustomSelectContainer
  }

  return (
    <>
      <ClickAwayListener onClickAway={menuIsOpen ? closeMenu : () => {}}>
        <SelectBox
          className={isMobile ? 'u-mb-half' : 'u-mr-half'}
          classNamePrefix="react-select"
          isMulti={isMulti}
          withCheckbox={withCheckbox}
          menuIsOpen={menuIsOpen}
          blurInputOnSelect={true}
          hideSelectedOptions={false}
          isSearchable={false}
          isClearable={false}
          closeMenuOnSelect={closeMenuOnSelect}
          tabSelectsValue={false}
          onKeyDown={captureEscapeEvent}
          noOptionsMessage={noOptionsMessage}
          options={allGroups}
          value={value}
          onChange={handleChange}
          getOptionLabel={group => group.name}
          getOptionValue={group => group._id}
          components={{ ...defaultComponents, ...components }}
          createGroup={createGroup}
          deleteGroup={handleDelete}
          renameGroup={renameGroup}
          styles={styles}
          onControlClicked={toggleMenu}
          setEditedGroupId={setEditedGroupId}
          editedGroupId={editedGroupId}
          menuPosition={menuPosition}
          fullwidth
        />
      </ClickAwayListener>
    </>
  )
}

GroupsSelect.propTypes = {
  allGroups: PropTypes.array.isRequired,
  styles: PropTypes.object,
  // for multiple selections, value can be an array
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  // to customize react-select elements
  components: PropTypes.object,
  // to define if it is possible to select more than one option
  isMulti: PropTypes.bool,
  // noOptionsMessage is used to show a message when there is no options in the menu list
  noOptionsMessage: PropTypes.func,
  // hide/show checkbox besides menu list options
  withCheckbox: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  // function to be triggered after creating a group
  onGroupCreated: PropTypes.func,
  // function to be triggered when creating a group
  onGroupCreate: PropTypes.func,
  // function to be triggered when updating a group
  onGroupUpdate: PropTypes.func,
  // function to be triggered when deleting a group
  onGroupDelete: PropTypes.func,
  closeMenuOnSelect: PropTypes.bool,
  menuPosition: PropTypes.oneOf(['fixed', 'absolute'])
}

GroupsSelect.defaultProps = {
  isMulti: false,
  components: {},
  closeMenuOnSelect: false
}

GroupsSelect.propTypes = {
  allGroups: PropTypes.array.isRequired,
  onGroupCreate: PropTypes.func.isRequired,
  onGroupUpdate: PropTypes.func.isRequired,
  onGroupDelete: PropTypes.func.isRequired
}

export default GroupsSelect
