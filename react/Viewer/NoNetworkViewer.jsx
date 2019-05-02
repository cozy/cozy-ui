import React from 'react'
import Icon from '../Icon'
import Button from '../Button'
import { translate } from '../I18n'

import styles from './styles.styl'

const NoNetworkViewer = ({ t, onReload }) => (
  <div className={styles['viewer-canceled']}>
    <Icon icon="cloud-broken" width={160} height={140} />
    <h2>{t('Viewer.loading.error')}</h2>
    <Button onClick={onReload} label={t('Viewer.loading.retry')} />
  </div>
)

export default translate()(NoNetworkViewer)
