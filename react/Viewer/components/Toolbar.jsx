import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { useClient } from 'cozy-client'

import PrintButton from './PrintButton'
import { ToolbarFilePath } from './ToolbarFilePath'
import styles from './styles.styl'
import Icon from '../../Icon'
import IconButton from '../../IconButton'
import DownloadIcon from '../../Icons/Download'
import PreviousIcon from '../../Icons/Previous'
import MidEllipsis from '../../MidEllipsis'
import Typography from '../../Typography'
import withBreakpoints from '../../helpers/withBreakpoints'
import { useI18n } from '../../providers/I18n'
import { makeStyles } from '../../styles'
import { extractChildrenCompByName } from '../Footer/helpers'
import { downloadFile } from '../helpers'
import { useEncrypted } from '../providers/EncryptedProvider'

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
