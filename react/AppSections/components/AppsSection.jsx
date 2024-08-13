import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useI18n } from '../../providers/I18n'
import useBreakpoints from '../../providers/Breakpoints'
import { getTranslatedManifestProperty } from '../helpers'
import sortBy from 'lodash/sortBy'
import AppTile from '../../AppTile'
import styles from './AppsSection.styl'

const makeNameGetter = t => app => getTranslatedManifestProperty(app, 'name', t)

const makeAppsListNameLowerCased = appsList => {
  return appsList.map(app => ({
    ...app,
    name: app.name.toLowerCase()
  }))
}

export const AppsSection = ({
  appsList,
  subtitle,
  onAppClick,
  IconComponent,
  displaySpecificMaintenanceStyle,
  disableClick
}) => {
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()
  const apps = useMemo(() => makeAppsListNameLowerCased(appsList), [appsList])
  const sortedApps = useMemo(() => {
    return sortBy(apps, makeNameGetter(t))
  }, [apps, t])
  const getAppBySlug = useMemo(
    () => slug => appsList.find(app => app.slug === slug),
    [appsList]
  )

  return (
    <div className={styles.AppsSection}>
      {subtitle}
      {apps && !!apps.length && (
        <div className={styles.AppsSection__list}>
          {sortedApps.map(app => {
            const realApp = getAppBySlug(app.slug)
            const isDisableClick = disableClick?.(realApp)
            return (
              <AppTile
                app={realApp}
                namePrefix={getTranslatedManifestProperty(
                  realApp,
                  'name_prefix',
                  t
                )}
                name={getTranslatedManifestProperty(realApp, 'name', t)}
                onClick={() => !isDisableClick && onAppClick(realApp.slug)}
                key={realApp.slug}
                showDeveloper={!isMobile}
                displaySpecificMaintenanceStyle={
                  displaySpecificMaintenanceStyle
                }
                IconComponent={IconComponent}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

AppsSection.propTypes = {
  appsList: PropTypes.array,
  subtitle: PropTypes.element,
  onAppClick: PropTypes.func,
  IconComponent: PropTypes.element,
  displaySpecificMaintenanceStyle: PropTypes.bool,
  disableClick: PropTypes.func
}

export default AppsSection
