import React from 'react'
import cx from 'classnames'

import Button from '../MuiCozyTheme/Buttons'
import useBreakpoints from '../hooks/useBreakpoints'
import Icon from '../Icon'
import IconButton from '../IconButton'
import { useI18n } from '../I18n'

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

export default SelectionBarAction
