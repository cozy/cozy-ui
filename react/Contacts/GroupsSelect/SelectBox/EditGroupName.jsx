import PropTypes from 'prop-types'
import React, { useRef } from 'react'

import Input from '../../../Input'

const EditGroupName = ({
  groupId,
  groupName,
  setEditedGroupId,
  renameGroup
}) => {
  const inputRef = useRef()

  const stopPropagation = e => {
    e.stopPropagation()
  }

  const exitEditMode = () => setEditedGroupId('')

  const handleKeyDown = async e => {
    const ENTER_KEY_CODE = 13
    if (e.keyCode == ENTER_KEY_CODE) {
      exitEditMode()
      renameGroup(groupId, inputRef.current.value)
    }
    stopPropagation(e)
  }

  return (
    <Input
      id="editGroupInput"
      ref={inputRef}
      type="text"
      defaultValue={groupName}
      size="tiny"
      autoComplete="off"
      autoFocus={true}
      onKeyDown={handleKeyDown}
      onClick={stopPropagation}
      onFocus={stopPropagation}
      onMouseDown={stopPropagation}
      onBlur={exitEditMode}
    />
  )
}

Option.propTypes = {
  groupName: PropTypes.string.isRequired,
  setEditedGroupId: PropTypes.string.isRequired
}

export default EditGroupName
