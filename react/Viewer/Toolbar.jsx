import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { useClient } from 'cozy-client'

import { useI18n } from '../I18n'
import Button from '../Button'
import IconButton from '../IconButton'
import Icon from '../Icon'
import Typography from '../Typography'
import PreviousIcon from '../Icons/Previous'
import DownloadIcon from '../Icons/Download'

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
      {onClose && (
        <IconButton onClick={onClose} className="u-white">
          <Icon icon={PreviousIcon} />
        </IconButton>
      )}
      <Typography className="u-pl-half" variant="h3" color="inherit" noWrap>
        {currentFile.name}
      </Typography>
      <div className="u-ml-auto u-ph-1">
        {!isMobile && (
          <Button
            className="u-white"
            icon={DownloadIcon}
            label={t('Viewer.download')}
            subtle
            onClick={() => {
              client.collection('io.cozy.files').download(currentFile)
            }}
          />
        )}
      </div>
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
