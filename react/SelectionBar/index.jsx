import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core'

import { useWebviewIntent } from 'cozy-intent'

import { useI18n } from '../providers/I18n'
import Icon from '../Icon'
import IconButton from '../IconButton'
import CrossIcon from '../Icons/Cross'
import useBreakpoints from '../providers/Breakpoints'

import styles from './styles.styl'
import SelectionBarAction from './SelectionBarAction'
import SelectionBarMore from './SelectionBarMore'
import useMaxActions from './useMaxActions'

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

/**
 * @deprecated This component is depreacated, please use [ActionsBar](#/ActionsBar) instead.
 */
const SelectionBar = ({
  actions,
  selected,
  hideSelectionBar,
  maxAction = {
    isHuge: 6,
    isLarge: 5,
    isMedium: 8,
    isSmall: 8,
    isTiny: 3
  }
}) => {
  console.warn(
    '<SelectionBar /> is deprecated, please use <ActionsBar /> instead'
  )

  const { t } = useI18n()
  const webviewIntent = useWebviewIntent()
  const theme = useTheme()
  const breakpoints = useBreakpoints()

  const selectedCount = selected.length

  const actionList = Object.keys(actions)
    .filter(actionName => {
      const action = actions[actionName]
      return (
        action.displayCondition === undefined ||
        action.displayCondition(selected)
      )
    })
    .map(actionName => ({
      name: actionName,
      ...actions[actionName]
    }))

  const maxActionDisplayed = useMaxActions(maxAction)

  // This component is always rendered but hidden with CSS if there is no selection
  // That is why we do not use useSetFlagship API here because that hook can not accept changing values
  useEffect(() => {
    if (!webviewIntent || !theme) return

    selectedCount === 0 &&
      webviewIntent &&
      webviewIntent.call('setFlagshipUI', {
        bottomBackground: theme.palette.background.default,
        bottomTheme: 'dark'
      })

    selectedCount > 0 &&
      webviewIntent &&
      webviewIntent.call('setFlagshipUI', {
        bottomBackground: theme.palette.grey[700],
        bottomTheme: 'light'
      })

    return () =>
      webviewIntent &&
      theme &&
      webviewIntent.call(
        'setFlagshipUI',
        {
          bottomBackground: theme.palette.background.default,
          bottomTheme: 'dark'
        },
        'cozy-ui/SelectionBar'
      )
    // TODO: validate the deps are correct
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCount, webviewIntent])

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
        {!breakpoints.isMobile && (
          <span>
            {' '}
            {t('SelectionBar.selected_count', { smart_count: selectedCount })}
          </span>
        )}
      </span>
      <div>
        {actionList.slice(0, maxActionDisplayed).map((action, idx) => (
          <SelectionBarAction
            key={idx}
            selectedCount={selectedCount}
            selected={selected}
            action={action}
          />
        ))}
        {actionList.length > maxActionDisplayed && (
          <SelectionBarMore
            actions={actionList.slice(maxActionDisplayed)}
            selectedCount={selectedCount}
            selected={selected}
          />
        )}
      </div>
      <IconButton
        data-testid="selectionBar-action-close"
        className={styles['SelectionBar-action']}
        label={t('SelectionBar.close')}
        size="medium"
        onClick={hideSelectionBar}
      >
        <Icon icon={CrossIcon} />
      </IconButton>
    </div>
  )
}

SelectionBar.propTypes = {
  /**
   * An object with actions
   */
  actions: PropTypes.object.isRequired,
  /**
   * List of ids of the selected items
   */
  selected: PropTypes.array.isRequired,
  /**
   * function to close SelectionBar.
   */
  hideSelectionBar: PropTypes.func.isRequired,
  /**
   * A number corresponding to the display of the maximum number of items.
   * The other actions will be displayed in an additional menu.
   * With an object, they can be detailed according to the breakpoints
   */
  maxAction: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
}

export default SelectionBar
