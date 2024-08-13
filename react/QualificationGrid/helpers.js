import { themesList } from 'cozy-client/dist/models/document/documentTypeData'
import flag from 'cozy-flags'

export const getThemesList = () =>
  flag('hide.healthTheme.enabled')
    ? themesList.filter(theme => theme.label !== 'health')
    : themesList
