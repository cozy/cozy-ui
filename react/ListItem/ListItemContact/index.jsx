import React from 'react'
import PropTypes from 'prop-types'

import { getDisplayName } from 'cozy-client/dist/models/contact'

import Filename from '../../Filename'
import Icon from '../../Icon'
import ContactsIcon from '../../Icons/Contacts'

import ListItemBase from '../ListItemBase'
import useActions from './useActions'

const ListItemContact = ({
  contact,
  primary,
  secondary,
  icon,
  actions,
  selectProps,
  expandedAttributesProps,
  onClick
}) => {
  const defaultActions = useActions(contact)
  const primaryText = primary || getDisplayName(contact)
  const secondaryText = secondary || contact.email?.[0]?.address
  const itemIcon = icon || <Icon icon={ContactsIcon} width="32" height="32" />

  const itemActions = defaultActions.concat(actions)

  return (
    <ListItemBase
      doc={contact}
      primary={primaryText}
      secondary={secondaryText}
      icon={itemIcon}
      actions={itemActions}
      actionMenuComp={{
        Header: <Filename icon={ContactsIcon} filename={primaryText} />
      }}
      selectProps={selectProps}
      expandedAttributesProps={expandedAttributesProps}
      onClick={onClick}
    />
  )
}

ListItemContact.defaultProps = {
  actions: []
}

ListItemContact.propTypes = {
  contact: PropTypes.object,
  primary: PropTypes.node,
  secondary: PropTypes.node,
  icon: PropTypes.node,
  actions: PropTypes.array,
  selectProps: PropTypes.shape({
    isSelectActive: PropTypes.bool,
    isSelected: PropTypes.bool,
    isChecked: PropTypes.bool
  }),
  expandedAttributesProps: PropTypes.shape({
    isExpandedAttributesActive: PropTypes.bool,
    expandedAttributes: PropTypes.array
  }),
  onClick: PropTypes.func
}

export default ListItemContact
