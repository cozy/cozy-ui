import React from 'react'
import PropTypes from 'prop-types'

import AppIcon from '../../AppIcon'
import { translate } from '../../I18n'
import { getCurrentStatusLabel } from '../status'
import { AppDoctype } from '../../proptypes'

import styles from './SmallAppItem.styl'

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

export const SmallAppItem = ({
  t,
  app,
  name,
  namePrefix,
  onClick,
  IconComponent
}) => {
  const { developer = {} } = app
  const statusToDisplay = getCurrentStatusLabel(app)
  IconComponent = IconComponent || AppIcon
  return (
    <button type="button" className={styles['SmallAppItem']} onClick={onClick}>
      <div className={styles['SmallAppItem-icon-wrapper']}>
        <IconComponent
          app={app}
          className={styles['SmallAppItem-icon']}
          {...getAppIconProps()}
        />
      </div>
      <div className={styles['SmallAppItem-desc']}>
        <h4 className={styles['SmallAppItem-title']}>
          {namePrefix ? `${namePrefix} ${name}` : name}
        </h4>
        {developer.name && (
          <p className={styles['SmallAppItem-developer']}>
            {`${t('app_item.by')} ${developer.name}`}
          </p>
        )}
        {statusToDisplay && (
          <p className={styles['SmallAppItem-status']}>
            {t(`app_item.${statusToDisplay}`)}
          </p>
        )}
      </div>
    </button>
  )
}

SmallAppItem.propTypes = {
  t: PropTypes.func.isRequired,
  app: AppDoctype,
  name: PropTypes.string.isRequired,
  namePrefix: PropTypes.string,
  onClick: PropTypes.func
}

export default translate()(SmallAppItem)
