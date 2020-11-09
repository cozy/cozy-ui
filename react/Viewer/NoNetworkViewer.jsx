import React from 'react'
import Icon from '../Icon'
import Button from '../Button'
import { translate } from '../I18n'

import styles from './styles.styl'

import CloudBrokenIcon from 'cozy-ui/transpiled/react/Icons/CloudBroken'

const NoNetworkViewer = ({ t, onReload }) => (
  <div className={styles['viewer-canceled']}>
    <Icon icon={CloudBrokenIcon} width={160} height={140} />
    <h2>{t('Viewer.error')}</h2>
    <Button onClick={onReload} label={t('Viewer.retry')} />
  </div>
)

export default translate()(NoNetworkViewer)
