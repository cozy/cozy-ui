import React from 'react'

import ContactIdentity from './Contacts/ContactIdentity'
import ActionsMenuButton from '../ActionsMenu/ActionsMenuButton'

const Cell = ({ row, column, cell, actions }) => {
  if (column.id === 'fullname') {
    return <ContactIdentity contact={row} noWrapper />
  }

  if (column.id === 'actions') {
    if (!actions) {
      return null
    }

    return <ActionsMenuButton docs={[row]} actions={actions} />
  }

  return cell
}

export default React.memo(Cell)
