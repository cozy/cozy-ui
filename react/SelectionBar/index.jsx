import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { translate } from '../I18n'
import { Button, Icon } from '../index'
import classNames from 'classnames'

import styles from './styles.styl'

/*

If you want use SelectionBar component, you must have `actions` parameter, like :

actions = {
  trash: {
    action: selections => dispatch(trashFiles(selections)))
  },
  rename: {
    action: selections => dispatch(startRenamingAsync(selected[0])),
    displayCondition: selections => selections.length === 1
  }
}

*/

const SelectionBar = ({ t, actions, selected, hideSelectionBar }) => {
  const selectedCount = selected.length
  const actionNames = Object.keys(actions).filter(actionName => {
    const action = actions[actionName]
    return action.displayCondition === undefined || action.displayCondition(selected)
  })
  return (
    <div className={styles['coz-selectionbar']} role='toolbar'>
      <span className={styles['coz-selectionbar-count']}>
        {selectedCount}
        <span> {t('SelectionBar.selected_count', { smart_count: selectedCount })}</span>
      </span>
      <span className={styles['coz-selectionbar-separator']} />
      {actionNames.map(actionName => (
        <button
          disabled={selectedCount < 1}
          onClick={() => actions[actionName].action(selected)}
        >
          <Icon icon={actionName.toLowerCase()} />
          <span>{t('SelectionBar.' + actionName)}</span>
        </button>
      ))}
      <Button
        theme='close'
        className={styles['coz-action-close']}
        onClick={hideSelectionBar}
        extension="narrow"
      >
        <Icon icon='cross' />
      </Button>
    </div>
  )
}

SelectionBar.propTypes = {
  t: PropTypes.func.isRequired,               // translate action name.
  actions: PropTypes.object.isRequired,       // An object with actions
  selected: PropTypes.array.isRequired,       // selected items id.
  hideSelectionBar: PropTypes.func.isRequired // function to close SelectionBar.
}

export default translate()(SelectionBar)
