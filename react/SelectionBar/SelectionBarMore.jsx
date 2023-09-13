import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import IconButton from '../IconButton'
import DotsIcon from '../Icons/Dots'
import { ActionMenuWithClose, ActionMenuItem } from '../deprecated/ActionMenu'
import { useI18n } from '../providers/I18n'

import styles from './styles.styl'

const SelectionBarMore = ({ actions, selectedCount, selected }) => {
  const { t } = useI18n()
  const [isMenuDisplayed, setMenuDisplayed] = useState(false)
  const anchorRef = useRef(null)

  const toggleMenu = () => setMenuDisplayed(!isMenuDisplayed)
  const hideMenu = () => setMenuDisplayed(false)

  return (
    <>
      <IconButton
        className={styles['SelectionBar-action']}
        label={t('SelectionBar.more')}
        size="medium"
        onClick={toggleMenu}
        ref={anchorRef}
        aria-haspopup="true"
        aria-controls="selection-bar--more"
      >
        <Icon icon={DotsIcon} />
      </IconButton>
      {isMenuDisplayed && (
        <ActionMenuWithClose
          id="selection-bar--more"
          ref={anchorRef}
          onClose={hideMenu}
        >
          {actions.map((action, index) => {
            return (
              <ActionMenuItem
                key={index}
                left={<Icon icon={action.icon || action.name.toLowerCase()} />}
                disabled={
                  action.disabled === undefined
                    ? selectedCount < 1 // to avoid breaking change
                    : action.disabled(selected)
                }
                onClick={() => action.action(selected)}
              >
                {t('SelectionBar.' + action.name)}
              </ActionMenuItem>
            )
          })}
        </ActionMenuWithClose>
      )}
    </>
  )
}

SelectionBarMore.propTypes = {
  /**
   * List of object with the property of action and a name
   */
  actions: PropTypes.array.isRequired,
  /**
   * Number of item selected
   */
  selectedCount: PropTypes.number.isRequired,
  /**
   * List of ids of the selected items
   */
  selected: PropTypes.array.isRequired
}

export default SelectionBarMore
