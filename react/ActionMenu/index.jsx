import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import styles from './styles.styl'
import { Media, Bd, Img } from '../Media'
import BottomDrawer from '../BottomDrawer'
import useBreakpoints from '../hooks/useBreakpoints'
import { getCssVariableValue } from '../utils/color'
import Radio from '../Radio'
import { spacingProp } from '../Stack'
import { usePopper } from 'react-popper'
import createDepreciationLogger from '../helpers/createDepreciationLogger'
import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

const ActionMenuWrapper = ({
  inline,
  onClose,
  anchorElRef,
  popperOptions,
  placement,
  preventOverflow,
  children
}) => {
  if (!inline) return <BottomDrawer onClose={onClose}>{children}</BottomDrawer>
  return (
    <NotInlineWrapper
      anchorElRef={anchorElRef}
      popperOptions={popperOptions}
      placement={placement}
      preventOverflow={preventOverflow}
      onClose={onClose}
    >
      {children}
    </NotInlineWrapper>
  )
}

const NotInlineWrapper = ({
  anchorElRef,
  popperOptions,
  placement,
  preventOverflow,
  onClose,
  children
}) => {
  const [popperElement, setPopperElement] = React.useState(null)
  const referenceElement = anchorElRef ? anchorElRef.current : null

  const normalOverflowModifiers = [
    {
      name: 'preventOverflow',
      enabled: false
    },
    {
      name: 'hide',
      enabled: false
    }
  ]
  const options = popperOptions || {
    placement,
    modifiers: preventOverflow ? undefined : normalOverflowModifiers
  }

  const { styles, attributes } = usePopper(
    referenceElement,
    popperElement,
    options
  )

  const handleClose = e => {
    if (referenceElement.contains(e.target)) return
    onClose(e)
  }
  return (
    <div
      ref={setPopperElement}
      style={{
        ...styles.popper,
        zIndex: getCssVariableValue('zIndex-popover')
      }}
      {...attributes.popper}
    >
      <ClickAwayListener onClickAway={handleClose}>
        {children}
      </ClickAwayListener>
    </div>
  )
}
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
  useSetFlagshipUI(
    {
      bottomBackground: 'background.paper',
      bottomTheme: 'dark',
      topOverlay: getCssVariableValue('overlay'),
      topBackground: 'background.paper',
      topTheme: 'light'
    },
    {
      bottomBackground: 'background.default',
      bottomTheme: 'dark',
      topOverlay: 'transparent',
      topBackground: 'background.paper',
      topTheme: 'dark'
    }
  )

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

const ActionMenuHeader = ({ children, className }) => {
  return (
    <div className={cx(styles['c-actionmenu-header'], className)}>
      {children}
    </div>
  )
}

ActionMenuHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

const ActionMenuItem = ({
  left,
  children,
  right,
  onClick,
  className,
  contentSpacing
}) => {
  return (
    <Media
      className={cx(styles['c-actionmenu-item'], className)}
      onClick={onClick}
      align="top"
    >
      {left && <Img className="u-mh-1">{left}</Img>}
      <Bd
        className={cx(left ? 'u-mr-1' : 'u-mh-1', `u-stack-${contentSpacing}`)}
      >
        {children}
      </Bd>
      {right && <Img className="u-mr-1">{right}</Img>}
    </Media>
  )
}

const ActionMenuRadio = props => {
  return <Radio {...props} className={styles['c-actionmenu-radio']} />
}

ActionMenuItem.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  /** Controls spacing between between children of the ActionMenuItem */
  contentSpacing: spacingProp
}

ActionMenuItem.defaultProps = {
  contentSpacing: 'xs'
}

export default ActionMenu
export { ActionMenuHeader, ActionMenuItem, ActionMenuRadio }
