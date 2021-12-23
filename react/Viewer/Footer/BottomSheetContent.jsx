import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import { isMobileApp } from 'cozy-device-helper'

import Paper from '../../Paper'
import Typography from '../../Typography'
import Stack from '../../Stack'

import Sharing from './Sharing'
import ForwardButton from './ForwardButton'
import DownloadButton from './DownloadButton'
import getPanelBlocks, { panelBlocksSpecs } from '../Panel/getPanelBlocks'

const useStyles = makeStyles(theme => ({
  stack: {
    backgroundColor: theme.palette.background.default
  }
}))

const BottomSheetContent = forwardRef(
  ({ file, disableSharing, contactsFullname }, ref) => {
    const panelBlocks = getPanelBlocks({ panelBlocksSpecs, file })
    const FileActionButton = isMobileApp() ? ForwardButton : DownloadButton
    const styles = useStyles()

    return (
      <Stack
        spacing="s"
        className={cx('u-flex u-flex-column u-ov-hidden', styles.stack)}
      >
        <Paper
          className={'u-flex u-ph-1 u-pb-1'}
          elevation={2}
          square
          ref={ref}
        >
          {!disableSharing && <Sharing file={file} />}
          <FileActionButton file={file} />
        </Paper>
        {panelBlocks.map((PanelBlock, index) => (
          <Paper
            key={index}
            elevation={index === panelBlocks.length - 1 ? 0 : 2}
            square
          >
            <Typography variant="h4" className={'u-pv-1 u-ph-1'}>
              <PanelBlock file={file} contactsFullname={contactsFullname} />
            </Typography>
          </Paper>
        ))}
      </Stack>
    )
  }
)

BottomSheetContent.propTypes = {
  file: PropTypes.object.isRequired,
  disableSharing: PropTypes.bool
}

export default BottomSheetContent
