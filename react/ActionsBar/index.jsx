import React, { useRef, useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '../styles'
import useBreakpoints from '../providers/Breakpoints'
import AppBar from '../AppBar'
import Toolbar from '../Toolbar'
import Box from '../Box'
import Icon from '../Icon'
import IconButton from '../IconButton'
import CrossIcon from '../Icons/Cross'
import CrossCircleIcon from '../Icons/CrossCircle'
import DotsIcon from '../Icons/Dots'
import ActionsMenu from '../ActionsMenu'
import ActionsItems from '../ActionsMenu/ActionsItems'
import { getOnlyNeededActions } from '../ActionsMenu/Actions/helpers'
import { useI18n } from '../providers/I18n'
import { makeActions, others } from '../ActionsMenu/Actions'

import ResponsiveAction from './ResponsiveAction'
import withActionsLocales from './locales/withActionsLocales'

const useStyles = makeStyles({
  appBar: ({ isMobile }) => ({
    height: isMobile ? '4rem' : '3rem',
    top: isMobile ? 'auto' : 0,
    bottom: isMobile ? 0 : undefined,
    zIndex: 'var(--zIndex-selection)',
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
  actionsContainer: {
    display: 'flex',
    height: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const ActionsBar = ({
  actions,
  docs,
  autoClose,
  maxDesktopActions,
  onClose
}) => {
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()
  const anchorRef = useRef()
  const [showMenu, setShowMenu] = useState(false)
  const styles = useStyles({ isMobile })

  const showMobileCloseButton = !!onClose && isMobile
  const showDesktopCloseButton = !!onClose && !isMobile
  const maxActionsDisplayed = isMobile ? 4 : maxDesktopActions

  const cleanedActions = useMemo(() => getOnlyNeededActions(actions, docs), [
    actions,
    docs
  ])

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
