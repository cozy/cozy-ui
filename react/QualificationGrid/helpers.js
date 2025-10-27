import { themesList } from 'cozy-client/dist/models/document/documentTypeData'

export const getThemesList = noHealth =>
  noHealth ? themesList.filter(theme => theme.label !== 'health') : themesList
