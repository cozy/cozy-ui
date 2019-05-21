import React from 'react'

import AppIcon from 'cozy-ui/react/AppIcon'
import { translate } from 'cozy-ui/react/I18n'
import styles from './SmallAppItem.styl'

import { getCurrentStatusLabel } from '../status'

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

export const SmallAppItem = ({ t, app, name, namePrefix, onClick }) => {
  const { developer = {} } = app
  const statusToDisplay = getCurrentStatusLabel(app)
  return (
    <button type="button" className={styles['SmallAppItem']} onClick={onClick}>
      <div className={styles['SmallAppItem-icon-wrapper']}>
        <AppIcon
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

export default translate()(SmallAppItem)
