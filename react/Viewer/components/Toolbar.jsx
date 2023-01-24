import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import flow from 'lodash/flow'

import { useClient } from 'cozy-client'

import withBreakpoints from '../../helpers/withBreakpoints'
import { makeStyles } from '../../styles'
import Button from '../../Button'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Typography from '../../Typography'
import PreviousIcon from '../../Icons/Previous'
import DownloadIcon from '../../Icons/Download'

import { withViewerLocales } from '../hoc/withViewerLocales'
import { downloadFile } from '../helpers'
import { useEncrypted } from '../providers/EncryptedProvider'

import styles from './styles.styl'

const useClasses = makeStyles(theme => ({
  iconButton: {
    [theme.breakpoints.down('lg')]: {
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
  breakpoints: { isDesktop }
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
      <Typography
        className="u-pl-half"
        variant="h3"
        color={isDesktop ? 'inherit' : 'textPrimary'}
        noWrap
      >
        {file.name}
      </Typography>
      <div className="u-ml-auto u-ph-1">
        {isDesktop && (
          <Button
            className="u-white"
            icon={DownloadIcon}
            label={t('Viewer.download')}
            subtle
            onClick={() => downloadFile({ client, file, url })}
          />
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
  onClose: PropTypes.func
}

export default flow(
  withBreakpoints(),
  withViewerLocales
)(Toolbar)
