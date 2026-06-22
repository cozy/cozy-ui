import { Dots } from '@linagora/twake-icons'

import { getActionsI18n } from './locales/withActionsLocales'

export const others = () => {
  const { t } = getActionsI18n()

  return {
    name: 'others',
    label: t('others'),
    icon: Dots
  }
}
