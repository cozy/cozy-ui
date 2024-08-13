import React from 'react'
import PropTypes from 'prop-types'

import List from '../../List'
import ListItem from '../../ListItem'
import ListItemIcon from '../../ListItemIcon'
import ListItemText from '../../ListItemText'
import Icon from '../../Icon'
import Copy from '../../Icons/Copy'
import Edit from '../../Icons/Rename'
import BottomSheet, { BottomSheetItem } from '../../BottomSheet'
import { useI18n } from '../../providers/I18n'
import AppLinker from '../../AppLinker'

const ActionMenuMobile = ({
  onClose,
  isEditable,
  actions,
  appLink,
  appSlug
}) => {
  const { t } = useI18n()
  const { handleCopy, handleEdit } = actions

  return (
    <BottomSheet backdrop onClose={onClose}>
      <BottomSheetItem disableGutters>
        <List>
          {isEditable && (
            <AppLinker app={{ slug: appSlug }} href={appLink}>
              {({ onClick, href }) => {
                return (
                  <ListItem
                    button
                    component="a"
                    href={href}
                    onClick={() => handleEdit(onClick)}
                  >
                    <ListItemIcon>
                      <Icon icon={Edit} />
                    </ListItemIcon>
                    <ListItemText
                      primary={t(`Viewer.panel.qualification.actions.edit`)}
                    />
                  </ListItem>
                )
              }}
            </AppLinker>
          )}
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

ActionMenuMobile.propTypes = {
  onClose: PropTypes.func,
  isEditable: PropTypes.bool,
  actions: PropTypes.shape({
    handleCopy: PropTypes.func,
    handleEdit: PropTypes.func
  }),
  appLink: PropTypes.string
}

export default ActionMenuMobile
