import React, { useRef, useState } from 'react'

import ContactIdentity from './Contacts/ContactIdentity'
import { locales } from './locales/withContactsListLocales'
import ActionsMenu from '../ActionsMenu'
import Icon from '../Icon'
import IconButton from '../IconButton'
import DotsIcon from '../Icons/Dots'
import ListItemIcon from '../ListItemIcon'
import { useI18n, useExtendI18n } from '../providers/I18n'

const Cell = ({ row, column, cell, actions }) => {
  const [showActions, setShowActions] = useState(false)
  useExtendI18n(locales)
  const { t } = useI18n()
  const actionsRef = useRef()

  if (column.id === 'fullname') {
    return <ContactIdentity contact={row} noWrapper />
  }

  if (column.id === 'actions') {
    if (!actions) {
      return null
    }

    return (
      <>
        <ListItemIcon>
          <IconButton
            ref={actionsRef}
            arial-label={t('menu')}
            onClick={() => setShowActions(true)}
          >
            <Icon icon={DotsIcon} />
          </IconButton>
        </ListItemIcon>
        {showActions && (
          <ActionsMenu
            open
            ref={actionsRef}
            docs={[row]}
            actions={actions}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            onClose={() => setShowActions(false)}
          />
        )}
      </>
    )
  }

  return cell
}

export default React.memo(Cell)
