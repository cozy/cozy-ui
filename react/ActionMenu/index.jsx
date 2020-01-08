import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import { Media, Bd, Img } from '../Media'
import BottomDrawer from '../BottomDrawer'

/**
 * Use an ActionMenu to show the user possible actions to the user
 * at the bottom of the screen in a modal way.
 */
const ActionMenu = ({ children, className, onClose }) => (
  <div className={className}>
    <BottomDrawer onClose={onClose}>
      <div className={styles['c-actionmenu']}>{children}</div>
    </BottomDrawer>
  </div>
)

ActionMenu.propTypes = {
  /** Extra class */
  className: PropTypes.string,
  /** What to do on close */
  onClose: PropTypes.func
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
