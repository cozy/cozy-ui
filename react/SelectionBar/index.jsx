import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useTheme } from '@material-ui/core'

import { useWebviewIntent } from 'cozy-intent'

import { useI18n } from '../I18n'
import Icon from '../Icon'
import IconButton from '../IconButton'
import CrossIcon from '../Icons/Cross'

import styles from './styles.styl'
import SelectionBarAction from './SelectionBarAction'

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
  const webviewIntent = useWebviewIntent()
  const theme = useTheme()

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
        <span>
          {' '}
          {t('SelectionBar.selected_count', { smart_count: selectedCount })}
        </span>
      </span>
      <span className={styles['SelectionBar-separator']} />
      {actionList.map((action, idx) => (
        <SelectionBarAction
          key={idx}
          selectedCount={selectedCount}
          selected={selected}
          action={action}
        />
      ))}
      <IconButton
        data-testid="selectionBar-action-close"
        className={cx(
          styles['SelectionBar-action'],
          styles['SelectionBar-action--close']
        )}
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
  actions: PropTypes.object.isRequired, // An object with actions
  selected: PropTypes.array.isRequired, // selected items id.
  hideSelectionBar: PropTypes.func.isRequired // function to close SelectionBar.
}

export default SelectionBar
