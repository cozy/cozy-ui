import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.styl'
import { Media, Bd, Img } from '../Media'
import BottomDrawer from '../BottomDrawer'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const ActionMenuWrapper = ({ inline, onClose, children }) =>
  inline ? (
    <ClickAwayListener onClickAway={onClose}>{children}</ClickAwayListener>
  ) : (
    <BottomDrawer onClose={onClose}>{children}</BottomDrawer>
  )

const ActionMenu = ({ children, className, onClose, inline }) => {
  return (
    <div
      className={cx({ [styles['c-actionmenu-container']]: inline }, className)}
    >
      <ActionMenuWrapper onClose={onClose} inline={inline}>
        <div
          className={cx(styles['c-actionmenu'], {
            [styles['c-actionmenu--inline']]: inline
          })}
        >
          {children}
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
  /** The menu will be displayed where it is rendered instead of the botom of the page  */
  inline: PropTypes.bool
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
export default ActionMenu
export { ActionMenuHeader, ActionMenuItem }
