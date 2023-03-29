import React from 'react'
import PropTypes from 'prop-types'

import ListItemFile from '../ListItemFile'
import ListItemContact from '../ListItemContact'
import { makeDefaultExpandedAttributes } from '../ExpandedAttributes/helpers'

const ListItemByDoc = ({
  doc,
  primary,
  secondary,
  icon,
  actions,
  selectProps,
  expandedAttributesProps: { isExpandedAttributesActive, expandedAttributes },

  onClick
}) => {
  const itemExpandedAttributes = makeDefaultExpandedAttributes(
    doc,
    expandedAttributes
  )

  switch (doc._type) {
    case 'io.cozy.contacts':
      return (
        <ListItemContact
          contact={doc}
          primary={primary}
          secondary={secondary}
          icon={icon}
          actions={actions}
          selectProps={selectProps}
          expandedAttributesProps={{
            isExpandedAttributesActive,
            expandedAttributes: itemExpandedAttributes
          }}
          onClick={onClick}
        />
      )

    case 'io.cozy.files':
      return (
        <ListItemFile
          file={doc}
          primary={primary}
          secondary={secondary}
          icon={icon}
          actions={actions}
          selectProps={selectProps}
          expandedAttributesProps={{
            isExpandedAttributesActive,
            expandedAttributes: itemExpandedAttributes
          }}
          onClick={onClick}
        />
      )

    default:
      return (
        <ListItemFile
          file={doc}
          primary={primary}
          secondary={secondary}
          icon={icon}
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
}

ListItemByDoc.defaultProps = {
  selectProps: { isSelectActive: false, isSelected: false, isChecked: false },
  expandedAttributesProps: {
    isExpandedAttributesActive: false
  }
}

ListItemByDoc.propTypes = {
  doc: PropTypes.object,
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

export default ListItemByDoc
