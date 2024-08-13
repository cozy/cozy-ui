import { useState } from 'react'
import cx from 'classnames'

import useBreakpoints from '../providers/Breakpoints'
import { makeStyles } from '../styles'

import DialogTransition from './DialogTransition'

let globalId = 0
const modalSizes = ['small', 'medium', 'large']

const useStyles = makeStyles({
  paper: {
    background: ({ background }) => background ?? 'var(--paperBackgroundColor)'
  }
})

const useCozyDialog = props => {
  const {
    size,
    actions, // eslint-disable-line no-unused-vars
    actionsLayout, // eslint-disable-line no-unused-vars
    title, // eslint-disable-line no-unused-vars
    content, // eslint-disable-line no-unused-vars
    open,
    opened,
    onBack,
    onClose,
    align,
    disableTitleAutoPadding,
    isFluidTitle,
    disableGutters,
    titleRef,
    background,
    componentsProps,
    ...otherProps
  } = props
  const { isMobile } = useBreakpoints()
  const [id] = useState(globalId++)
  const paperClassName = modalSizes.includes(size) ? `${size}` : 'medium'
  const scrollPaperClassName = align == 'top' ? `alignTop` : ''
  const fullScreen = size !== 'small' && isMobile
  const TransitionComponent = DialogTransition
  const styles = useStyles({ background })

  const dialogProps = {
    'aria-labelledby': `modal-title-${id}`,
    fullScreen,
    open: open !== undefined ? open : opened,
    onClose,
    TransitionComponent,
    ...otherProps,
    classes: {
      ...otherProps.classes,
      paper: `${paperClassName} ${styles.paper} ${
        otherProps.classes ? otherProps.classes.paper : ''
      }`,
      scrollPaper: scrollPaperClassName
    },
    TransitionProps: {
      fullScreen,
      ...otherProps.TransitionProps
    }
  }

  const showCloseButton = !fullScreen && onClose
  const showBackButton = onBack || (fullScreen && onClose) // back and close buttons are merged in fullScreen

  const dialogTitleProps = {
    ...componentsProps?.dialogTitle,
    id: `modal-title-${id}`,
    ref: titleRef,
    disableTypography: true,
    className:
      'cozyDialogTitle ' +
      cx(
        {
          'u-ellipsis': !isFluidTitle,
          dialogTitleFluid: isFluidTitle,
          dialogTitleWithClose: showCloseButton && !disableTitleAutoPadding,
          dialogTitleWithBack: showBackButton && !disableTitleAutoPadding
        },
        componentsProps?.dialogTitle?.className
      )
  }

  const listItemClassName = 'listItem--dialog'
  const listItemProps = {
    classes: {
      root: listItemClassName
    }
  }

  const dividerClassName = 'divider--dialog'
  const dividerProps = {
    classes: {
      root: dividerClassName
    }
  }

  const dialogActionsClassName = 'cozyDialogActions'
  const dialogActionsProps = {
    classes: {
      root: dialogActionsClassName
    }
  }

  const dialogContentProps = {
    classes: {
      root: cx({
        disableGutters
      })
    },
    className: 'cozyDialogContent'
  }

  return {
    dialogProps,
    dialogTitleProps,
    listItemProps,
    id,
    fullScreen,
    dividerProps,
    dialogActionsProps,
    dialogContentProps
  }
}

export default useCozyDialog
