import DotsIcon from '../../Icons/Dots'

import { getActionsI18n } from './locales/withActionsLocales'

export const others = () => {
  const { t } = getActionsI18n()

  return {
    name: 'others',
    label: t('others'),
    icon: DotsIcon
  }
}
