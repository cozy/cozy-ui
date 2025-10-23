import React, { useState, useRef } from 'react'

import ActionsMenu from '.'
import { locales } from './Actions/locales/withActionsLocales'
import Icon from '../Icon'
import IconButton from '../IconButton'
import DotsIcon from '../Icons/Dots'
import ListItemIcon from '../ListItemIcon'
import { useI18n, useExtendI18n } from '../providers/I18n'

const ActionsMenuButton = ({ docs, actions }) => {
  const [showActions, setShowActions] = useState(false)
  const actionsRef = useRef()
  useExtendI18n(locales)
  const { t } = useI18n()

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
          docs={docs}
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

export default ActionsMenuButton
