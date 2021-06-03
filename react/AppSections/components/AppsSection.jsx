import React from 'react'
import PropTypes from 'prop-types'
import { useI18n } from '../../I18n'
import useBreakpoints from '../../hooks/useBreakpoints'
import { getTranslatedManifestProperty } from '../helpers'
import sortBy from 'lodash/sortBy'
import AppTile from '../../AppTile'
import styles from './AppsSection.styl'

const makeNameGetter = t => app => getTranslatedManifestProperty(app, 'name', t)

export const AppsSection = ({
  appsList,
  subtitle,
  onAppClick,
  IconComponent,
  displaySpecificMaintenanceStyle
}) => {
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()
  return (
    <div className={styles.AppsSection}>
      {subtitle}
      {appsList && !!appsList.length && (
        <div className={styles.AppsSection__list}>
          {sortBy(appsList, makeNameGetter(t)).map(app => (
            <AppTile
              app={app}
              namePrefix={getTranslatedManifestProperty(app, 'name_prefix', t)}
              name={getTranslatedManifestProperty(app, 'name', t)}
              onClick={() => onAppClick(app.slug)}
              key={app.slug}
              showDeveloper={!isMobile}
              displaySpecificMaintenanceStyle={displaySpecificMaintenanceStyle}
              IconComponent={IconComponent}
            />
          ))}
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
  displaySpecificMaintenanceStyle: PropTypes.bool
}

export default AppsSection
