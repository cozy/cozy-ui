import React from 'react'
import DeprecatedI18n, { useI18n as deprecatedUseI18n } from '../providers/I18n'
import createDepreciationLogger from '../helpers/createDepreciationLogger'

const logDeprecatedFunc = createDepreciationLogger()
const logDeprecatedComp = createDepreciationLogger()

export const useI18n = props => {
  logDeprecatedFunc(
    `"useI18n" is now exported elsewhere. Please change the import path to "cozy-ui/transpiled/react/providers/I18n"`
  )

  return deprecatedUseI18n(props)
}

const I18n = props => {
  logDeprecatedComp(
    `"I18n" is now exported elsewhere. Please change the import path to "cozy-ui/transpiled/react/providers/I18n"`
  )

  return <DeprecatedI18n {...props} />
}

export default I18n
