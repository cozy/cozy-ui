import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import ListItem from '..'
import ListItemText from '../../ListItemText'
import ListItemIcon from '../../ListItemIcon'
import ListItemSecondaryAction from '../../ListItemSecondaryAction'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import DotsIcon from '../../Icons/Dots'
import Checkbox from '../../Checkbox'
import ActionsMenu from '../../ActionsMenu'
import ActionsMenuMobileHeader from '../../ActionsMenu/ActionsMenuMobileHeader'

import withListItemLocales from '../hoc/withListItemLocales'
import ExpandedAttributes from '../ExpandedAttributes'
import RenameInput from './Renaming/RenameInput'

const ListItemBase = ({
  doc,
  primary,
  secondary,
  icon,
  actions,
  actionMenuComp,
  expandedAttributesProps: { isExpandedAttributesActive, expandedAttributes },
  selectProps: { isSelectActive, isSelected, isChecked },
  onClick
}) => {
  const [showActionMenu, setShowActionMenu] = useState(false)
  const [isRenaming, setIsRenaming] = useState(false)
  const anchorRef = useRef()

  const toggleMenu = () => setShowActionMenu(v => !v)

  const showActionMenuHeader = actionMenuComp?.Header
  const isButton = !isRenaming && !!onClick
  const handleClick =
    !isRenaming && !isSelected && onClick ? onClick : undefined

  return (
    <>
      <ListItem button={isButton} disabled={isSelected} onClick={handleClick}>
        {isSelectActive && (
          <Checkbox
            className="u-p-0"
            value={doc._id}
            checked={isChecked}
            disabled={isSelected}
          />
        )}
        <ListItemIcon>{icon}</ListItemIcon>
        {isRenaming ? (
          <RenameInput file={doc} onClose={() => setIsRenaming(false)} />
        ) : (
          <ListItemText primary={primary} secondary={secondary} />
        )}
        {actions && !isSelectActive && (
          <ListItemSecondaryAction>
            <IconButton ref={anchorRef} onClick={toggleMenu}>
              <Icon icon={DotsIcon} />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      {isExpandedAttributesActive && (
        <ExpandedAttributes doc={doc} expandedAttributes={expandedAttributes} />
      )}
      {showActionMenu && (
        <ActionsMenu
          open
          ref={anchorRef}
          docs={[doc]}
          actions={actions}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          componentsProps={{
            actionsItems: { actionOptions: { setIsRenaming } }
          }}
          onClose={() => setShowActionMenu(false)}
        >
          {showActionMenuHeader && (
            <ActionsMenuMobileHeader>
              {actionMenuComp.Header}
            </ActionsMenuMobileHeader>
          )}
        </ActionsMenu>
      )}
    </>
  )
}

ListItemBase.propTypes = {
  doc: PropTypes.object,
  primary: PropTypes.node,
  secondary: PropTypes.node,
  icon: PropTypes.node,
  actions: PropTypes.array,
  actionMenuComp: PropTypes.shape({
    Header: PropTypes.node
  }),
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

export default withListItemLocales(ListItemBase)
