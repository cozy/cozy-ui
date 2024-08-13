import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Button from '../Button'
import useBreakpoints from '../providers/Breakpoints'
import Icon from '../Icon'
import IconButton from '../IconButton'
import { useI18n } from '../providers/I18n'

import styles from './styles.styl'

const SelectionBarAction = ({ selectedCount, selected, action }) => {
  const { isDesktop } = useBreakpoints()
  const { t } = useI18n()

  if (isDesktop) {
    return (
      <Button
        data-testid={`selectionBar-action-${action.name}`}
        className={cx(
          styles['SelectionBar-action'],
          styles['SelectionBar-action--withLabel']
        )}
        variant="text"
        disabled={
          action.disabled === undefined
            ? selectedCount < 1 // to avoid breaking change
            : action.disabled(selected)
        }
        onClick={() => action.action(selected)}
        startIcon={<Icon icon={action.icon || action.name.toLowerCase()} />}
      >
        {t('SelectionBar.' + action.name)}
      </Button>
    )
  }

  return (
    <IconButton
      data-testid={`selectionBar-action-${action.name}`}
      className={styles['SelectionBar-action']}
      label={t('SelectionBar.' + action.name)}
      disabled={
        action.disabled === undefined
          ? selectedCount < 1 // to avoid breaking change
          : action.disabled(selected)
      }
      size="medium"
      onClick={() => action.action(selected)}
    >
      <Icon icon={action.icon || action.name.toLowerCase()} />
    </IconButton>
  )
}

SelectionBarAction.propTypes = {
  /**
   * Number of item selected
   */
  selectedCount: PropTypes.number.isRequired,
  /**
   * List of ids of the selected items
   */
  selected: PropTypes.array.isRequired,
  /**
   * List of object with the property of action and a name
   */
  action: PropTypes.object.isRequired
}

export default SelectionBarAction
