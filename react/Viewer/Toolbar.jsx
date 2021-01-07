import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { useClient } from 'cozy-client'

import { useI18n } from '../I18n'
import Button from '../Button'

import styles from './styles.styl'

const Toolbar = ({
  hidden,
  isMobile,
  isMobileApp,
  onMouseEnter,
  onMouseLeave,
  currentFile,
  onClose
}) => {
  const { t } = useI18n()
  const client = useClient()

  return (
    <div
      className={cx(styles['viewer-toolbar'], {
        [styles['viewer-toolbar--hidden']]: hidden,
        [styles['viewer-toolbar--mobilebrowser']]: !isMobileApp && isMobile
      })}
      role="viewer-toolbar"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={cx(styles['viewer-toolbar-actions'])}>
        {!isMobile && (
          <Button
            onClick={() => {
              client.collection('io.cozy.files').download(currentFile)
            }}
            icon="download"
            label={t('Viewer.download')}
            subtle
          />
        )}
      </div>
      {onClose && (
        <div
          className={styles['viewer-toolbar-close']}
          onClick={onClose}
          title={t('Viewer.close')}
        >
          <Button
            theme="secondary"
            icon="cross"
            color="white"
            label={t('Viewer.close')}
            iconOnly
            extension="narrow"
          />
        </div>
      )}
    </div>
  )
}

Toolbar.propTypes = {
  hidden: PropTypes.bool,
  isMobile: PropTypes.bool.isRequired,
  isMobileApp: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  currentFile: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Toolbar
