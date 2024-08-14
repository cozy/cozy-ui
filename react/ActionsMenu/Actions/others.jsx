import { getActionsI18n } from './locales/withActionsLocales'
import DotsIcon from '../../Icons/Dots'

export const others = () => {
  const { t } = getActionsI18n()

  return {
    name: 'others',
    label: t('others'),
    icon: DotsIcon
  }
}
