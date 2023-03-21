import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../Icon'
import ContactsIcon from '../../../Icons/Contacts'
import ListItemBase from '../ListItemBase'

import { makeDefaultExpandedAttributes } from '../ExpandedAttributes/helpers'

const ListItemContact = ({
  contact,
  primary,
  secondary,
  icon,
  actions,
  selectProps,
  expandedAttributesProps: { isExpandedAttributesActive, expandedAttributes },
  onClick
}) => {
  const primaryText = primary || contact.displayName
  const secondaryText = secondary || contact.email[0].address
  const itemIcon = icon || <Icon icon={ContactsIcon} width="32" height="32" />

  const itemExpandedAttributes = makeDefaultExpandedAttributes(
    contact,
    expandedAttributes
  )

  return (
    <ListItemBase
      doc={contact}
      primary={primaryText}
      secondary={secondaryText}
      icon={itemIcon}
      actions={actions}
      selectProps={selectProps}
      expandedAttributesProps={{
        isExpandedAttributesActive,
        expandedAttributes: itemExpandedAttributes
      }}
      onClick={onClick}
    />
  )
}

ListItemContact.defaultProps = {
  expandedAttributesProps: {
    isExpandedAttributesActive: false
  }
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
