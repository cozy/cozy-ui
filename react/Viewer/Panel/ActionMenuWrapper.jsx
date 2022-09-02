import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import List from '../../MuiCozyTheme/List'
import ListItem from '../../MuiCozyTheme/ListItem'
import ListItemIcon from '../../MuiCozyTheme/ListItemIcon'
import ListItemText from '../../ListItemText'
import Icon from '../../Icon'
import Copy from '../../Icons/Copy'
import BottomSheet, { BottomSheetItem } from '../../BottomSheet'
import ActionMenu, { ActionMenuItem } from '../../ActionMenu'
import Typography from '../../Typography'
import useBreakpoints from '../../hooks/useBreakpoints'
import { useI18n } from '../../I18n'

const ActionMenuWrapper = forwardRef(({ onClose, value }, ref) => {
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()

  const handleCopy = () => {
    navigator?.clipboard?.writeText(value)
    onClose()
  }

  if (isMobile) {
    return (
      <BottomSheet backdrop onClose={onClose}>
        <BottomSheetItem disableGutters>
          <List>
            <ListItem button onClick={handleCopy}>
              <ListItemIcon>
                <Icon icon={Copy} />
              </ListItemIcon>
              <ListItemText
                primary={t(`Viewer.panel.qualification.actions.copyClipboard`)}
              />
            </ListItem>
          </List>
        </BottomSheetItem>
      </BottomSheet>
    )
  }

  return (
    <ActionMenu onClose={onClose} anchorElRef={ref}>
      <ActionMenuItem onClick={handleCopy} left={<Icon icon={Copy} />}>
        <Typography>{t(`Viewer.panel.qualification.actions.copy`)}</Typography>
      </ActionMenuItem>
    </ActionMenu>
  )
})
ActionMenuWrapper.displayName = 'ActionMenuWrapper'

ActionMenuWrapper.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string
}

export default ActionMenuWrapper
