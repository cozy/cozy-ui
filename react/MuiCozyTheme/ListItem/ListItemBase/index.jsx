import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import ListItem from '..'
import ListItemText from '../../../ListItemText'
import ListItemIcon from '../../ListItemIcon'
import ListItemSecondaryAction from '../../ListItemSecondaryAction'
import IconButton from '../../../IconButton'
import Icon from '../../../Icon'
import DotsIcon from '../../../Icons/Dots'
import ExpandedAttributes from '../ExpandedAttributes'
import ActionMenuWithClose from './ActionsMenu/ActionMenuWithClose'
import { ActionMenuHeader } from '../../../ActionMenu'
import ActionsItems from './ActionsMenu/ActionsItems'
import useBreakpoints from '../../../hooks/useBreakpoints'
import RenameInput from './Renaming/RenameInput'
import withListItemLocales from '../hoc/withListItemLocales'
import Checkbox from '../../../Checkbox'

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
  const { isMobile } = useBreakpoints()

  const toggleMenu = () => setShowActionMenu(v => !v)

  const showActionMenuHeader = isMobile && actionMenuComp?.Header
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
        <ActionMenuWithClose
          ref={anchorRef}
          onClose={() => setShowActionMenu(false)}
        >
          {showActionMenuHeader && (
            <ActionMenuHeader>{actionMenuComp.Header}</ActionMenuHeader>
          )}
          <ActionsItems
            doc={doc}
            actions={actions}
            setIsRenaming={setIsRenaming}
          />
        </ActionMenuWithClose>
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
