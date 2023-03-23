import React from 'react'

import { useI18n } from '../../I18n'
import TelephoneIcon from '../../Icons/Telephone'
import withListItemLocales from '../../MuiCozyTheme/ListItem/hoc/withListItemLocales'
import ActionMenuItemWrapper from '../ActionMenuItemWrapper'

export const call = () => {
  return {
    name: 'call',
    action: docs => {
      const phoneNumber = docs?.[0]?.phone?.[0]?.number
      !!phoneNumber && window.open(`tel:${phoneNumber}`, '_self')
    },
    Component: withListItemLocales(({ className, onClick }) => {
      const { t } = useI18n()

      return (
        <ActionMenuItemWrapper
          className={className}
          icon={TelephoneIcon}
          onClick={onClick}
        >
          {t('ListItem.actions.call')}
        </ActionMenuItemWrapper>
      )
    })
  }
}
