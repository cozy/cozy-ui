import React from 'react'
import Icon from '../Icon'
import Button from '../Button'
import { translate } from '../I18n'

import styles from './styles.styl'
import IconCloud from './icons/icon-cloud-wrong.svg'

const NoNetworkViewer = ({ t, onReload }) => (
  <div className={styles['pho-viewer-canceled']}>
    <Icon icon={IconCloud} width={160} height={140} />
    <h2>{t('Viewer.loading.error')}</h2>
    <Button onClick={onReload} label={t('Viewer.loading.retry')} />
  </div>
)

export default translate()(NoNetworkViewer)
