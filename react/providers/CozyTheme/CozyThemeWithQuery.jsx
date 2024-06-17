import React from 'react'

import { useQuery, isQueryLoading, hasQueryBeenLoaded } from 'cozy-client'

import { buildSettingsInstanceQuery } from './queries'
import { DumbCozyTheme } from './index'

const CozyThemeWithQuery = props => {
  const instanceQuery = buildSettingsInstanceQuery()
  const { data: instance, ...instanceQueryLeft } = useQuery(
    instanceQuery.definition,
    instanceQuery.options
  )

  if (
    isQueryLoading(instanceQueryLeft) &&
    !hasQueryBeenLoaded(instanceQueryLeft)
  ) {
    return null
  }

  return <DumbCozyTheme {...props} settingsThemeType={instance?.colorScheme} />
}

export default CozyThemeWithQuery
