import PropTypes from 'prop-types'
import React from 'react'

import EditGroupName from './EditGroupName'
import { ActionsOption, Option as DefaultOption } from '../../../SelectBox'

const Option = props => {
  const { name: groupName, id: groupId, withNoAction } = props.data
  const {
    editedGroupId,
    setEditedGroupId,
    deleteGroup,
    renameGroup,
    withCheckbox
  } = props.selectProps

  if (editedGroupId === groupId) {
    return (
      <EditGroupName
        groupId={groupId}
        groupName={groupName}
        setEditedGroupId={setEditedGroupId}
        renameGroup={renameGroup}
      />
    )
  }

  if (withNoAction) {
    return <DefaultOption {...props} />
  }

  return (
    <ActionsOption
      {...props}
      withCheckbox={withCheckbox}
      actions={[
        {
          icon: 'pen',
          onClick: ({ data }) => setEditedGroupId(data.id),
          iconProps: {
            'data-testid': `ActionsOption_${props.children}-icon_pen`
          }
        },
        {
          icon: 'trash',
          onClick: ({ data }) => deleteGroup(data)
        }
      ]}
    />
  )
}

Option.propTypes = {
  selectProps: PropTypes.shape({
    editedGroupId: PropTypes.string.isRequired,
    deleteGroup: PropTypes.func.isRequired,
    setEditedGroupId: PropTypes.func.isRequired,
    withCheckbox: PropTypes.bool
  }),
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    withNoAction: PropTypes.bool
  })
}

export default Option
