import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import createDepreciationLogger from '../helpers/createDepreciationLogger'
import useBreakpoints from '../hooks/useBreakpoints'
import ActionMenuWrapper from './ActionMenuWrapper'
import { ActionMenuHeader } from './ActionMenuHeader'
import { ActionMenuItem } from './ActionMenuItem'
import { ActionMenuRadio } from './ActionMenuRadio'
import { useActionMenuEffects } from './ActionMenuEffects'

import styles from './styles.styl'

const logDepecratedPlacement = createDepreciationLogger()
const logDepecratedOverflow = createDepreciationLogger()
const logDepecratedContainer = createDepreciationLogger()

const ActionMenu = ({
  children,
  autoclose,
  className,
  onClose,
  placement,
  preventOverflow,
  popperOptions,
  anchorElRef,
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

  const { isMobile } = useBreakpoints()
  const shouldDisplayInline = !isMobile
  const containerRef = React.createRef()

  useActionMenuEffects()

  return (
    <div
      className={className}
      ref={containerRef}
      onClick={autoclose ? onClose : null}
    >
      <ActionMenuWrapper
        onClose={onClose}
        inline={shouldDisplayInline}
        anchorElRef={anchorElRef || containerRef}
        placement={placement}
        preventOverflow={preventOverflow}
        popperOptions={popperOptions}
      >
        <div
          className={cx(styles['c-actionmenu'], {
            [styles['c-actionmenu--inline']]: shouldDisplayInline
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
  /** What to do on close */
  onClose: PropTypes.func,
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
  /** The reference element for the menu placement and overflow prevention. */
  anchorElRef: PropTypes.object
}

ActionMenu.defaultProps = {
  popperOptions: { placement: 'bottom-start' },
  autoclose: false
}

export default ActionMenu
export { ActionMenuHeader, ActionMenuItem, ActionMenuRadio }
