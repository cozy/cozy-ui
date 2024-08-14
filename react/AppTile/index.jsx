import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { APP_STATUS, getCurrentStatusLabel } from './helpers'
import en from './locales/en.json'
import fr from './locales/fr.json'
import styles from './styles.styl'
import AppIcon from '../AppIcon'
import { isShortcutFile } from '../AppSections/helpers.js'
import Icon from '../Icon'
import WrenchCircleIcon from '../Icons/WrenchCircle'
import { ShortcutTile } from '../ShortcutTile'
import Tile, {
  TileTitle,
  TileSubtitle,
  TileFooter,
  TileIcon,
  TileDescription
} from '../Tile'
import palette from '../palette'
import { AppDoctype } from '../proptypes'
import useBreakpoints from '../providers/Breakpoints'
import { createUseI18n } from '../providers/I18n'

const locales = { en, fr }

let dataset
const getDataset = () => {
  if (dataset) return dataset
  const root = document.querySelector('[role=application]')
  dataset = root && root.dataset
  return dataset
}

const getAppIconProps = () => ({
  domain: getDataset() && getDataset().cozyDomain,
  secure: window.location.protocol === 'https:'
})

const useI18n = createUseI18n(locales)

export const AppTile = ({
  app,
  name: nameProp,
  namePrefix,
  onClick,
  showDeveloper,
  showStatus,
  IconComponent: IconComponentProp,
  displaySpecificMaintenanceStyle
}) => {
  const { t } = useI18n()
  const { developer = {} } = app
  const { isMobile } = useBreakpoints()

  const name = nameProp || app.name

  const statusLabel = getCurrentStatusLabel(app)

  const isStatusArray = Array.isArray(showStatus)

  const statusToDisplay =
    isShortcutFile(app) && statusLabel === APP_STATUS.installed && isMobile
      ? 'favorite'
      : isStatusArray
      ? showStatus.indexOf(statusLabel) > -1 && statusLabel
      : showStatus && statusLabel

  const IconComponent = IconComponentProp || AppIcon

  const isInMaintenanceWithSpecificDisplay =
    displaySpecificMaintenanceStyle && statusLabel === APP_STATUS.maintenance
  const tileSubtitle = isShortcutFile(app)
    ? app.metadata?.source
    : developer.name

  return (
    <Tile
      tag="button"
      type="button"
      onClick={onClick}
      className={cx({
        [styles['AppTile-container-maintenance']]:
          isInMaintenanceWithSpecificDisplay
      })}
      isSecondary={statusLabel === APP_STATUS.installed}
    >
      <TileIcon>
        {isShortcutFile(app) ? (
          <ShortcutTile file={app} />
        ) : (
          <IconComponent
            app={app}
            className={styles['AppTile-icon']}
            {...getAppIconProps()}
          />
        )}
        {isInMaintenanceWithSpecificDisplay && (
          <Icon
            data-testid="icon-maintenance"
            icon={WrenchCircleIcon}
            color={palette['coolGrey']}
            className={styles['AppTile-icon-maintenance']}
          />
        )}
      </TileIcon>
      <TileDescription className={styles[`AppTile-description`]}>
        <TileTitle isMultiline={!statusLabel}>
          {namePrefix ? `${namePrefix} ${name}` : name}
        </TileTitle>
        {showDeveloper && (
          <TileSubtitle>{`${t('app_item.by')} ${tileSubtitle}`}</TileSubtitle>
        )}
        {statusToDisplay && (
          <TileFooter isAccent={statusLabel === APP_STATUS.update}>
            {t(`app_item.${statusToDisplay}`)}
          </TileFooter>
        )}
      </TileDescription>
    </Tile>
  )
}

AppTile.propTypes = {
  app: AppDoctype,
  name: PropTypes.string,
  namePrefix: PropTypes.string,
  onClick: PropTypes.func,
  IconComponent: PropTypes.element,
  showDeveloper: PropTypes.bool,
  showStatus: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  displaySpecificMaintenanceStyle: PropTypes.bool
}

AppTile.defaultProps = {
  showDeveloper: true,
  showStatus: true,
  displaySpecificMaintenanceStyle: false
}

export default AppTile
