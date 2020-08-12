import React from 'react'
import PropTypes from 'prop-types'

import AppIcon from '../../AppIcon'
import Tile from '../../Tile'
import { useI18n } from '../../I18n'

import { getCurrentStatusLabel } from '../status'
import { AppDoctype } from '../../proptypes'
import styles from './AppTile.styl'

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

export const AppTile = ({
  app,
  name,
  namePrefix,
  onClick,
  showDeveloper,
  IconComponent
}) => {
  const { t } = useI18n()
  const { developer = {} } = app
  const statusToDisplay = getCurrentStatusLabel(app)
  IconComponent = IconComponent || AppIcon
  return (
    <Tile tag="button" type="button" onClick={onClick}>
      <div className={styles['AppTile-icon-wrapper']}>
        <IconComponent
          app={app}
          className={styles['AppTile-icon']}
          {...getAppIconProps()}
        />
      </div>
      <div className={styles['AppTile-desc']}>
        <h4 className={styles['AppTile-title']}>
          {namePrefix ? `${namePrefix} ${name}` : name}
        </h4>
        {developer.name && showDeveloper && (
          <p className={styles['AppTile-developer']}>
            {`${t('app_item.by')} ${developer.name}`}
          </p>
        )}
        {statusToDisplay && (
          <p className={styles['AppTile-status']}>
            {t(`app_item.${statusToDisplay}`)}
          </p>
        )}
      </div>
    </Tile>
  )
}

AppTile.propTypes = {
  app: AppDoctype,
  name: PropTypes.string.isRequired,
  namePrefix: PropTypes.string,
  onClick: PropTypes.func,
  showDeveloper: PropTypes.bool
}

AppTile.defaultProps = {
  showDeveloper: true
}

export default AppTile
