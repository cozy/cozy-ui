import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import flow from 'lodash/flow'

import { useClient } from 'cozy-client'

import withBreakpoints from '../../helpers/withBreakpoints'
import { makeStyles } from '../../styles'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Typography from '../../Typography'
import PreviousIcon from '../../Icons/Previous'
import DownloadIcon from '../../Icons/Download'

import { withViewerLocales } from '../hoc/withViewerLocales'
import { downloadFile } from '../helpers'
import { useEncrypted } from '../providers/EncryptedProvider'
import { ToolbarFilePath } from './ToolbarFilePath'

import styles from './styles.styl'
import MidEllipsis from '../../MidEllipsis'

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
  t,
  toolbarRef,
  breakpoints: { isDesktop },
  showFilePath
}) => {
  const client = useClient()
  const classes = useClasses()

  const { url } = useEncrypted()

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
          size="medium"
          onClick={onClose}
          className={cx(classes.iconButton, { 'u-white': isDesktop })}
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

      <div className="u-ml-auto u-ph-1">
        {isDesktop && (
          <IconButton
            className="u-white"
            aria-label={t('Viewer.download')}
            onClick={() => downloadFile({ client, file, url })}
          >
            <Icon icon={DownloadIcon} />
          </IconButton>
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

export default flow(
  withBreakpoints(),
  withViewerLocales
)(Toolbar)
