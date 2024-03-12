import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { useClient } from 'cozy-client'

import withBreakpoints from '../../helpers/withBreakpoints'
import { makeStyles } from '../../styles'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Typography from '../../Typography'
import PreviousIcon from '../../Icons/Previous'
import DownloadIcon from '../../Icons/Download'
import { useI18n } from '../../providers/I18n'
import MidEllipsis from '../../MidEllipsis'

import { downloadFile } from '../helpers'
import { useEncrypted } from '../providers/EncryptedProvider'
import { extractChildrenCompByName } from '../Footer/helpers'
import { ToolbarFilePath } from './ToolbarFilePath'
import PrintButton from './PrintButton'

import styles from './styles.styl'

const useClasses = makeStyles(theme => ({
  iconButton: {
    [theme.breakpoints.down('md')]: {
      marginLeft: '0.25rem'
    }
  }
}))

const Toolbar = ({
  hidden,
  onMouseEnter,
  onMouseLeave,
  file,
  onClose,
  toolbarRef,
  breakpoints: { isDesktop },
  children,
  showFilePath
}) => {
  const client = useClient()
  const classes = useClasses()
  const { t } = useI18n()

  const { url } = useEncrypted()

  const ToolbarButtons = extractChildrenCompByName({
    children,
    file,
    name: 'ToolbarButtons'
  })

  return (
    <div
      ref={toolbarRef}
      data-testid="viewer-toolbar"
      className={cx(styles['viewer-toolbar'], {
        [styles['viewer-toolbar--hidden']]: hidden
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {onClose && (
        <IconButton
          className={cx(classes.iconButton, { 'u-white': isDesktop })}
          onClick={onClose}
        >
          <Icon icon={PreviousIcon} />
        </IconButton>
      )}
      <div className="u-pl-half u-ov-auto u-w-100">
        <Typography
          variant="h3"
          color={isDesktop ? 'inherit' : 'textPrimary'}
          noWrap
        >
          <MidEllipsis text={file.name} />
        </Typography>
        {showFilePath ? <ToolbarFilePath file={file} /> : null}
      </div>

      <div className="u-flex">
        {isDesktop && (
          <>
            {ToolbarButtons}
            <PrintButton file={file} />
            <IconButton
              className="u-white"
              aria-label={t('Viewer.download')}
              onClick={() => downloadFile({ client, file, url })}
            >
              <Icon icon={DownloadIcon} />
            </IconButton>
          </>
        )}
      </div>
    </div>
  )
}

Toolbar.propTypes = {
  hidden: PropTypes.bool,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  showFilePath: PropTypes.bool
}

export default withBreakpoints()(Toolbar)
