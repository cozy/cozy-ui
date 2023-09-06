import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import createDepreciationLogger from '../../helpers/createDepreciationLogger'
import useBreakpoints from '../../providers/Breakpoints'

import ActionMenuWrapper from './ActionMenuWrapper'
import { ActionMenuHeader } from './ActionMenuHeader'
import { ActionMenuItem } from './ActionMenuItem'
import { ActionMenuRadio } from './ActionMenuRadio'
import { useActionMenuEffects } from './ActionMenuEffects'
import ActionMenuItemWrapper from './ActionMenuItemWrapper'
import ActionMenuWithClose from './ActionMenuWithClose'
import ActionsItems from './Actions/ActionsItems'

import styles from './styles.styl'

const logDepecratedMenu = createDepreciationLogger()
const logDepecratedPlacement = createDepreciationLogger()
const logDepecratedOverflow = createDepreciationLogger()
const logDepecratedContainer = createDepreciationLogger()

/**
 * @deprecated This component is depreacated, please use [ActionsMenu](#/ActionsMenu) instead.
 */
const ActionMenu = ({
  className,
  anchorElRef,
  autoclose,
  popperOptions,
  children,
  onClose,
  placement,
  preventOverflow,
  containerElRef
}) => {
  if (placement)
    logDepecratedPlacement(
      '<ActionMenu placement /> is deprecated, use <ActionMenu popperOptions={{ placement }} /> instead'
    )
  if (preventOverflow)
    logDepecratedOverflow(
      '<ActionMenu preventOverflow /> is deprecated, use <ActionMenu popperOptions={{ modifiers }} /> instead'
    )
  if (containerElRef)
    logDepecratedContainer(
      '<ActionMenu containerElRef /> is not needed anymore, it can be removed.'
    )
  logDepecratedMenu(
    'The ActionMenu component has been deprecated and should be replaced by ActionsMenu. More infos: https://docs.cozy.io/cozy-ui/react/#!/ActionsMenu'
  )

  const { isMobile } = useBreakpoints()
  const containerRef = React.createRef()

  useActionMenuEffects()

  return (
    <div
      className={className}
      ref={containerRef}
      onClick={autoclose ? onClose : null}
    >
      <ActionMenuWrapper
        anchorElRef={anchorElRef || containerRef}
        popperOptions={popperOptions}
        onClose={onClose}
        placement={placement}
        preventOverflow={preventOverflow}
      >
        <div
          className={cx(styles['c-actionmenu'], {
            [styles['c-actionmenu--inline']]: !isMobile
          })}
        >
          {React.Children.map(children, child =>
            child && child.type === ActionMenuHeader && !isMobile ? null : child
          )}
        </div>
      </ActionMenuWrapper>
    </div>
  )
}

ActionMenu.propTypes = {
  /** Extra class */
  className: PropTypes.string,
  /** The reference element for the menu placement and overflow prevention. */
  anchorElRef: PropTypes.object,
  /** Whether the menu should automatically close itself when an item is clicked */
  autoclose: PropTypes.bool,
  /** Options passed to popper.js to control menu behaviour on desktop */
  popperOptions: PropTypes.shape({
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
    ])
  }),
  /** Elements of the menu */
  children: PropTypes.node,
  /** What to do on close */
  onClose: PropTypes.func,
  /** Deprecated */
  placement: PropTypes.string,
  /** Deprecated */
  preventOverflow: PropTypes.bool,
  /** Deprecated */
  containerElRef: PropTypes.object
}

ActionMenu.defaultProps = {
  popperOptions: { placement: 'bottom-start' },
  autoclose: false
}

export default ActionMenu
export {
  ActionMenuHeader,
  ActionMenuItem,
  ActionMenuRadio,
  ActionMenuItemWrapper,
  ActionMenuWithClose,
  ActionMenuWrapper,
  ActionsItems
}
