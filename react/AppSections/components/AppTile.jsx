import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AppIcon from '../../AppIcon'
import Tile from '../../Tile'
import { useI18n } from '../../I18n'
import { Caption } from '../../Text'

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

export const AppTitle = ({ children }) => (
  <h4 className={styles['AppTile-title']}>{children}</h4>
)

export const AppDeveloper = ({ children }) => (
  <Caption className={cx(styles['AppTile-developer'], 'u-slateGrey')}>
    {children}
  </Caption>
)

export const AppStatus = ({ children }) => (
  <Caption className={styles['AppTile-status']}>{children}</Caption>
)

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
        <AppTitle>{namePrefix ? `${namePrefix} ${name}` : name}</AppTitle>
        {developer.name && showDeveloper && (
          <AppDeveloper>{`${t('app_item.by')} ${developer.name}`}</AppDeveloper>
        )}
        {statusToDisplay && (
          <AppStatus>{t(`app_item.${statusToDisplay}`)}</AppStatus>
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
