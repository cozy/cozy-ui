import React from 'react'

import AppIcon from '../AppIcon'
import PropTypes from 'prop-types'
import Tile, {
  TileTitle,
  TileSubtitle,
  TileFooter,
  TileIcon,
  TileDescription
} from '../Tile'

import { useI18n } from '../I18n'
import withLocales from '../I18n/withLocales'
import { AppDoctype } from '../proptypes'

import { getCurrentStatusLabel } from './helpers'
import styles from './styles.styl'
import en from './locales/en.json'
import fr from './locales/fr.json'

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
      <TileIcon>
        <IconComponent
          app={app}
          className={styles['AppTile-icon']}
          {...getAppIconProps()}
        />
      </TileIcon>
      <TileDescription>
        <TileTitle>{namePrefix ? `${namePrefix} ${name}` : name}</TileTitle>
        {developer.name && showDeveloper && (
          <TileSubtitle>{`${t('app_item.by')} ${developer.name}`}</TileSubtitle>
        )}
        {statusToDisplay && (
          <TileFooter>{t(`app_item.${statusToDisplay}`)}</TileFooter>
        )}
      </TileDescription>
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

export default withLocales(locales)(AppTile)
