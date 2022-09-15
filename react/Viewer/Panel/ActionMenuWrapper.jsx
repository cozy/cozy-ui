import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { useAppLinkWithStoreFallback, useClient } from 'cozy-client'

import List from '../../MuiCozyTheme/List'
import ListItem from '../../MuiCozyTheme/ListItem'
import ListItemIcon from '../../MuiCozyTheme/ListItemIcon'
import ListItemText from '../../ListItemText'
import Icon from '../../Icon'
import Copy from '../../Icons/Copy'
import Edit from '../../Icons/Rename'
import BottomSheet, { BottomSheetItem } from '../../BottomSheet'
import ActionMenu, { ActionMenuItem } from '../../ActionMenu'
import Typography from '../../Typography'
import useBreakpoints from '../../hooks/useBreakpoints'
import { useI18n } from '../../I18n'
import useViewerSnackbar from '../snackbar/ViewerSnackbarProvider'
import AppLinker from '../../AppLinker'
import { getCurrentModel } from '../helpers'
import { makeStyles } from '../../styles'

const useStyles = makeStyles(theme => ({
  disabledItem: {
    cursor: 'default',
    '&:hover': {
      backgroundColor: 'initial'
    }
  },
  disabledIcon: {
    fill: theme.palette.text.disabled
  },
  disabledTypography: {
    color: theme.palette.text.disabled
  }
}))

const mespapiersAppSlug = 'mespapiers'
const isNotEditableAttributes = ['datetime', 'qualification', 'contact']

const ActionMenuWrapper = forwardRef(({ onClose, file, optionFile }, ref) => {
  const { name, value } = optionFile
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()
  const { showViewerSnackbar } = useViewerSnackbar()
  const client = useClient()
  const styles = useStyles()

  const currentAppSlug = client.getInstanceOptions().app.slug
  const currentModel = getCurrentModel(name)

  const currentURL = `/paper/${window.location.href.split('/paper/')[1]}`
  const path = `#/paper/edit/${currentModel}/${file._id}?${
    currentModel === 'information' ? `metadata=${name}&` : ''
  }backgroundPath=${currentURL}`

  const { fetchStatus, url } = useAppLinkWithStoreFallback(
    mespapiersAppSlug,
    client,
    path
  )
  const isAppLinkLoaded = fetchStatus === 'loaded'

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(value)
      showViewerSnackbar(
        'secondary',
        t(`Viewer.snackbar.copiedToClipboard.success`)
      )
    } else {
      showViewerSnackbar('error', t(`Viewer.snackbar.copiedToClipboard.error`))
    }
    onClose()
  }

  const handleEdit = cb => {
    if (isAppLinkLoaded) {
      onClose()
      cb && cb()
    }
  }

  // Currently, the editing option should not be present on the "drive" or "photos" applications.
  const isInDriveOrPhotosApp = ['drive', 'photos'].includes(currentAppSlug)

  if (isMobile) {
    return (
      <BottomSheet backdrop onClose={onClose}>
        <BottomSheetItem disableGutters>
          <List>
            {!isInDriveOrPhotosApp && !isNotEditableAttributes.includes(name) && (
              <AppLinker app={{ slug: mespapiersAppSlug }} href={url}>
                {({ onClick, href }) => {
                  return (
                    <ListItem
                      button
                      component="a"
                      href={href}
                      onClick={() => handleEdit(onClick)}
                      disabled={!isAppLinkLoaded}
                    >
                      <ListItemIcon>
                        <Icon icon={Edit} />
                      </ListItemIcon>
                      <ListItemText
                        primary={t(`Viewer.panel.qualification.actions.edit`)}
                      />
                    </ListItem>
                  )
                }}
              </AppLinker>
            )}
            <ListItem button onClick={handleCopy}>
              <ListItemIcon>
                <Icon icon={Copy} />
              </ListItemIcon>
              <ListItemText
                primary={t(`Viewer.panel.qualification.actions.copyClipboard`)}
              />
            </ListItem>
          </List>
        </BottomSheetItem>
      </BottomSheet>
    )
  }

  return (
    <ActionMenu onClose={onClose} anchorElRef={ref}>
      {!isInDriveOrPhotosApp && !isNotEditableAttributes.includes(name) && (
        <AppLinker app={{ slug: mespapiersAppSlug }} href={url}>
          {({ onClick, href }) => {
            return (
              <a
                href={href}
                onClick={() => handleEdit(onClick)}
                className="u-p-0"
              >
                <ActionMenuItem
                  className={cx({
                    [styles.disabledItem]: !isAppLinkLoaded
                  })}
                  left={
                    <Icon
                      icon={Edit}
                      className={cx({
                        [styles.disabledIcon]: !isAppLinkLoaded
                      })}
                    />
                  }
                >
                  <Typography
                    className={cx({
                      [styles.disabledTypography]: !isAppLinkLoaded
                    })}
                  >
                    {t(`Viewer.panel.qualification.actions.edit`)}
                  </Typography>
                </ActionMenuItem>
              </a>
            )
          }}
        </AppLinker>
      )}
      <ActionMenuItem onClick={handleCopy} left={<Icon icon={Copy} />}>
        <Typography>{t(`Viewer.panel.qualification.actions.copy`)}</Typography>
      </ActionMenuItem>
    </ActionMenu>
  )
})
ActionMenuWrapper.displayName = 'ActionMenuWrapper'

ActionMenuWrapper.propTypes = {
  onClose: PropTypes.func,
  fileId: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
}

export default ActionMenuWrapper
