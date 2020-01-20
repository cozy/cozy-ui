import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import styles from './styles.styl'
import { Media, Bd, Img } from '../Media'
import BottomDrawer from '../BottomDrawer'
import withBreakpoints from '../helpers/withBreakpoints'
import Popper from '@material-ui/core/Popper'

const ActionMenuWrapper = ({
  inline,
  onClose,
  anchorElRef,
  placement,
  preventOverflow,
  children
}) => {
  const getAnchorElement = useCallback(() => {
    return anchorElRef.current
  }, [anchorElRef])
  const normalOverflowModifiers = {
    preventOverflow: { enabled: false },
    hide: { enabled: false }
  }

  return inline ? (
    <Popper
      anchorEl={getAnchorElement}
      modifiers={preventOverflow ? null : normalOverflowModifiers}
      open
      placement={placement}
    >
      <ClickAwayListener onClickAway={onClose}>{children}</ClickAwayListener>
    </Popper>
  ) : (
    <BottomDrawer onClose={onClose}>{children}</BottomDrawer>
  )
}

const ActionMenu = ({
  children,
  className,
  onClose,
  placement,
  preventOverflow,
  anchorElRef,
  breakpoints: { isDesktop }
}) => {
  const shouldDisplayInline = isDesktop
  const containerRef = React.createRef()
  return (
    <div className={className} ref={containerRef}>
      <ActionMenuWrapper
        onClose={onClose}
        inline={shouldDisplayInline}
        anchorElRef={anchorElRef || containerRef}
        placement={placement}
        preventOverflow={preventOverflow}
      >
        <div
          className={cx(styles['c-actionmenu'], {
            [styles['c-actionmenu--inline']]: shouldDisplayInline
          })}
        >
          {React.Children.map(children, child =>
            child.type === ActionMenuHeader && isDesktop ? null : child
          )}
        </div>
      </ActionMenuWrapper>
    </div>
  )
}

ActionMenu.propTypes = {
  /** Extra class */
  className: PropTypes.string,
  /** What to do on close */
  onClose: PropTypes.func,
  /** Controls the placement of the menu on desktop */
  placement: PropTypes.oneOf([
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top'
  ]),
  /** Will keep the menu visible when scrolling */
  preventOverflow: PropTypes.bool,
  /** The reference element for the menu placement and overflow prevention. */
  anchorElRef: PropTypes.object
}

ActionMenu.defaultProps = {
  placement: 'bottom-start',
  preventOverflow: false
}

const ActionMenuHeader = ({ children }) => {
  return <div className={styles['c-actionmenu-header']}>{children}</div>
}

const ActionMenuItem = ({ left, children, right, onClick }) => {
  const onClickEnhanced = e => {
    if (onClick) {
      // we need to stop propagation here so that the menu doesn't close itself
      e.stopPropagation()
      onClick()
    }
  }

  return (
    <Media className={styles['c-actionmenu-item']} onClick={onClickEnhanced}>
      {left && <Img className="u-mh-1">{left}</Img>}
      <Bd className={left ? 'u-mr-1' : 'u-mh-1'}>{children}</Bd>
      {right && <Img className="u-mr-1">{right}</Img>}
    </Media>
  )
}

ActionMenuItem.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func
}
export default withBreakpoints()(ActionMenu)
export { ActionMenuHeader, ActionMenuItem }
