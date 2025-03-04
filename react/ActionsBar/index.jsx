import PropTypes from 'prop-types'
import React, { useRef, useState, useMemo } from 'react'

import ResponsiveAction from './ResponsiveAction'
import withActionsLocales from './locales/withActionsLocales'
import ActionsMenu from '../ActionsMenu'
import { makeActions, others } from '../ActionsMenu/Actions'
import { getOnlyNeededActions } from '../ActionsMenu/Actions/helpers'
import ActionsItems from '../ActionsMenu/ActionsItems'
import AppBar from '../AppBar'
import Box from '../Box'
import Icon from '../Icon'
import IconButton from '../IconButton'
import CheckCircleIcon from '../Icons/CheckCircle'
import CrossIcon from '../Icons/Cross'
import CrossCircleIcon from '../Icons/CrossCircle'
import DotsIcon from '../Icons/Dots'
import Toolbar from '../Toolbar'
import Typography from '../Typography'
import { isTwakeTheme } from '../helpers/isTwakeTheme'
import useBreakpoints from '../providers/Breakpoints'
import CozyTheme from '../providers/CozyTheme'
import { useI18n } from '../providers/I18n'
import { makeStyles } from '../styles'

const useStyles = makeStyles({
  appBar: ({ isMobile }) => ({
    width: isTwakeTheme() && !isMobile ? 'calc(100% - 44px)' : '100%',
    right: isTwakeTheme() && !isMobile ? '22px' : '0',
    height: isMobile ? '4rem' : '3rem',
    top: isMobile ? 'auto' : 0,
    bottom: isMobile ? 0 : undefined,
    zIndex: 'var(--zIndex-selection)',
    borderRadius: isTwakeTheme()
      ? isMobile
        ? '16px 16px 0 0'
        : '0 0 16px 16px'
      : 'initial',
    boxShadow: isMobile ? 'var(--shadow8)' : 'var(--shadow1)'
  }),
  toolbar: {
    height: 'inherit'
  },
  selectedCount: ({ isMobile }) => ({
    display: 'flex',
    flexShrink: 0,
    position: 'relative',
    height: 'inherit',
    minWidth: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.5rem',
    gap: !isMobile ? '1rem' : undefined,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      right: '-0.5rem',
      borderTop: '0.5rem solid transparent',
      borderBottom: '0.5rem solid transparent',
      borderLeft: '0.5rem solid var(--primaryColor)'
    }
  }),
  desktopCloseButton: {
    position: 'absolute',
    right: 0
  },
  actionsContainer: ({ isMobile }) => ({
    display: 'flex',
    height: '100%',
    flexGrow: 1,
    paddingRight: isTwakeTheme() && !isMobile ? 48 : 0,
    alignItems: 'center',
    justifyContent: isTwakeTheme() && !isMobile ? 'end' : 'center'
  })
})

const SelectedCount = ({ styles, docs, onClose }) => {
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()

  const showMobileCloseButton = !!onClose && isMobile

  if (isTwakeTheme()) {
    if (isMobile)
      return (
        <Box
          className="u-flex u-flex-items-center u-h-100 u-pr-1"
          borderRadius="15px 0 0 0"
          bgcolor="primary.main"
          color="primary.contrastText"
        >
          <IconButton color="inherit" onClick={onClose}>
            <Icon icon={CrossCircleIcon} />
          </IconButton>
          {docs.length}
        </Box>
      )

    return (
      <div className="u-flex u-flex-items-center u-h-100 u-ph-1">
        <Icon
          className="u-mr-1"
          icon={CheckCircleIcon}
          color="var(--iconTextColor)"
        />
        <Typography variant="body1" component="span">
          {t('selected_light', docs.length)}
        </Typography>
      </div>
    )
  }

  return (
    <Box
      className={styles.selectedCount}
      padding={showMobileCloseButton ? '0 1rem 0 0' : '0 1rem'}
      color="primary.contrastText"
      bgcolor="primary.main"
    >
      {showMobileCloseButton && (
        <IconButton color="inherit" onClick={onClose}>
          <Icon icon={CrossCircleIcon} />
        </IconButton>
      )}
      <div>{isMobile ? docs.length : t('selected', docs.length)}</div>
    </Box>
  )
}

const ActionsBar = ({
  actions,
  docs,
  autoClose,
  maxDesktopActions,
  onClose
}) => {
  const { isMobile } = useBreakpoints()
  const anchorRef = useRef()
  const [showMenu, setShowMenu] = useState(false)
  const styles = useStyles({ isMobile })

  const showDesktopCloseButton = !!onClose && !isMobile
  const maxActionsDisplayed = isMobile ? 4 : maxDesktopActions

  const cleanedActions = useMemo(
    () => getOnlyNeededActions(actions, docs),
    [actions, docs]
  )

  const countActionsToDisplay =
    cleanedActions.length > maxActionsDisplayed
      ? maxActionsDisplayed - 1
      : maxActionsDisplayed
  const SLICE_INDEX = Math.max(1, countActionsToDisplay)
  const barActions = cleanedActions.slice(0, SLICE_INDEX)
  const menuActions = cleanedActions.slice(SLICE_INDEX)
  const otherAction = makeActions([others])

  const handleClick = () => {
    autoClose && onClose?.()
  }

  return (
    <CozyTheme variant={isTwakeTheme() ? 'inverted' : 'normal'}>
      <AppBar className={styles.appBar} position="fixed" color="inherit">
        <Toolbar
          className={styles.toolbar}
          variant={isMobile ? 'regular' : 'dense'}
          disableGutters
        >
          {showDesktopCloseButton && (
            <IconButton className={styles.desktopCloseButton} onClick={onClose}>
              <Icon icon={CrossIcon} />
            </IconButton>
          )}
          <SelectedCount styles={styles} docs={docs} onClose={onClose} />
          <div className={styles.actionsContainer}>
            {/* actions displayed in the bar itself */}
            <ActionsItems
              docs={docs}
              component={ResponsiveAction}
              actions={barActions}
              onClick={handleClick}
            />

            {/* actions displayed in ActionsMenu */}
            {menuActions.length > 0 && (
              <>
                {isMobile ? (
                  <ActionsItems
                    docs={docs}
                    component={ResponsiveAction}
                    actions={otherAction}
                    onClick={() => setShowMenu(true)}
                  />
                ) : (
                  <IconButton ref={anchorRef} onClick={() => setShowMenu(true)}>
                    <Icon icon={DotsIcon} />
                  </IconButton>
                )}
                <ActionsMenu
                  ref={anchorRef}
                  open={showMenu}
                  docs={docs}
                  actions={menuActions}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  componentsProps={{
                    actionsItems: {
                      onClick: handleClick
                    }
                  }}
                  onClose={() => setShowMenu(false)}
                />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </CozyTheme>
  )
}

ActionsBar.propTypes = {
  /**
   * A number corresponding to the display of the maximum number of items.
   * The other actions will be displayed in an additional menu.
   * Only works on desktop since maximum number is forced in mobile
   */
  maxDesktopActions: PropTypes.number,
  autoClose: PropTypes.bool
}

ActionsBar.defaultProps = {
  maxDesktopActions: 5,
  autoClose: true
}

export default withActionsLocales(ActionsBar)
