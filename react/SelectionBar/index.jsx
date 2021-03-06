import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { useI18n } from '../I18n'
import Icon from '../Icon'
import Button from '../MuiCozyTheme/Buttons'
import IconButton from '../IconButton'
import useBreakpoints from '../hooks/useBreakpoints'

import styles from './styles.styl'

import CrossIcon from 'cozy-ui/transpiled/react/Icons/Cross'

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
  const { isDesktop } = useBreakpoints()
  const selectedCount = selected.length
  const actionNames = Object.keys(actions).filter(actionName => {
    const action = actions[actionName]
    return (
      action.displayCondition === undefined || action.displayCondition(selected)
    )
  })
  return (
    <div
      data-testid="selectionBar"
      className={styles['SelectionBar']}
      role="toolbar"
    >
      <span
        data-testid="selectionBar-count"
        className={styles['SelectionBar-count']}
      >
        {selectedCount}
        <span>
          {' '}
          {t('SelectionBar.selected_count', { smart_count: selectedCount })}
        </span>
      </span>
      <span className={styles['SelectionBar-separator']} />
      {actionNames.map((actionName, index) =>
        isDesktop ? (
          <Button
            data-testid={`selectionBar-action-${actionName}`}
            className={cx(
              styles['SelectionBar-action'],
              styles['SelectionBar-action--withLabel']
            )}
            variant="text"
            key={index}
            disabled={
              actions[actionName].disabled === undefined
                ? selectedCount < 1 // to avoid breaking change
                : actions[actionName].disabled(selected)
            }
            onClick={() => actions[actionName].action(selected)}
            startIcon={
              <Icon
                icon={actions[actionName].icon || actionName.toLowerCase()}
              />
            }
          >
            {t('SelectionBar.' + actionName)}
          </Button>
        ) : (
          <IconButton
            data-testid={`selectionBar-action-${actionName}`}
            className={styles['SelectionBar-action']}
            label={t('SelectionBar.' + actionName)}
            key={index}
            disabled={
              actions[actionName].disabled === undefined
                ? selectedCount < 1 // to avoid breaking change
                : actions[actionName].disabled(selected)
            }
            onClick={() => actions[actionName].action(selected)}
          >
            <Icon icon={actions[actionName].icon || actionName.toLowerCase()} />
          </IconButton>
        )
      )}
      <IconButton
        data-testid="selectionBar-action-close"
        className={cx(
          styles['SelectionBar-action'],
          styles['SelectionBar-action--close']
        )}
        label={t('SelectionBar.close')}
        onClick={hideSelectionBar}
      >
        <Icon icon={CrossIcon} />
      </IconButton>
    </div>
  )
}

SelectionBar.propTypes = {
  actions: PropTypes.object.isRequired, // An object with actions
  selected: PropTypes.array.isRequired, // selected items id.
  hideSelectionBar: PropTypes.func.isRequired // function to close SelectionBar.
}

export default SelectionBar
