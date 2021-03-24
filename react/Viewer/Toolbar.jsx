import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import { useClient } from 'cozy-client'

import useBreakpoints from '../hooks/useBreakpoints'
import Button from '../Button'
import IconButton from '../IconButton'
import Icon from '../Icon'
import Typography from '../Typography'
import PreviousIcon from '../Icons/Previous'
import DownloadIcon from '../Icons/Download'

import { withViewerLocales } from './withViewerLocales'

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
  t,
  toolbarRef
}) => {
  const client = useClient()
  const { isMobile } = useBreakpoints()
  const classes = useClasses()

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
          onClick={onClose}
          className={cx(classes.iconButton, { 'u-white': !isMobile })}
        >
          <Icon icon={PreviousIcon} />
        </IconButton>
      )}
      <Typography className="u-pl-half" variant="h3" color="inherit" noWrap>
        {file.name}
      </Typography>
      <div className="u-ml-auto u-ph-1">
        {!isMobile && (
          <Button
            className="u-white"
            icon={DownloadIcon}
            label={t('Viewer.download')}
            subtle
            onClick={() => {
              client.collection('io.cozy.files').download(file)
            }}
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

export default withViewerLocales(Toolbar)
