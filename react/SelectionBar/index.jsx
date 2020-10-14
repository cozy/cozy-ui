import React from 'react'
import PropTypes from 'prop-types'
import { useI18n } from '../I18n'
import { Button, Icon } from '../index'
import useBreakpoints from '../hooks/useBreakpoints'

import styles from './styles.styl'

/*

If you want use SelectionBar component, you must have `actions` parameter, like :

actions = {
  trash: {
    action: selections => dispatch(trashFiles(selections))),
    icon: 'trash'
  },
  rename: {
    action: selections => dispatch(startRenamingAsync(selected[0])),
    displayCondition: selections => selections.length === 1
  }
}

*/

const SelectionBar = ({ actions, selected, hideSelectionBar }) => {
  const { t } = useI18n()
  const { isMobile, isTablet } = useBreakpoints()
  const selectedCount = selected.length
  const actionNames = Object.keys(actions).filter(actionName => {
    const action = actions[actionName]
    return (
      action.displayCondition === undefined || action.displayCondition(selected)
    )
  })
  return (
    <div className={styles['SelectionBar']} role="toolbar">
      <span className={styles['SelectionBar-count']}>
        {selectedCount}
        <span>
          {' '}
          {t('SelectionBar.selected_count', { smart_count: selectedCount })}
        </span>
      </span>
      <span className={styles['SelectionBar-separator']} />
      {actionNames.map((actionName, index) => (
        <Button
          type="button"
          key={index}
          disabled={selectedCount < 1}
          onClick={() => actions[actionName].action(selected)}
          icon={actions[actionName].icon || actionName.toLowerCase()}
          label={t('SelectionBar.' + actionName)}
          iconOnly={isMobile || isTablet ? true : false}
          subtle
        />
      ))}
      <Button
        iconOnly
        label={t('SelectionBar.close')}
        type="button"
        theme="close"
        className={styles['SelectionBar-action-close']}
        onClick={hideSelectionBar}
        extension="narrow"
      >
        <Icon icon="cross" />
      </Button>
    </div>
  )
}

SelectionBar.propTypes = {
  actions: PropTypes.object.isRequired, // An object with actions
  selected: PropTypes.array.isRequired, // selected items id.
  hideSelectionBar: PropTypes.func.isRequired // function to close SelectionBar.
}

export default SelectionBar
