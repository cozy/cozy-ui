import React from 'react'
import { default as MUIDialog } from '@material-ui/core/Dialog'
import { RemoveScroll } from 'react-remove-scroll'
import useBreakpoints from '../hooks/useBreakpoints'
import { useCozyTheme } from '../CozyTheme'
import themesStyles from '../../stylus/settings/palette.styl'
import { useSetFlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI'

const Dialog = props => {
  const { isMobile, isTablet } = useBreakpoints()

  // Here is a crude fix until we upgrade to material-ui to version > 3.9.4.
  // This is to block the scroll on the html node element otherwise mui only puts
  // overflow: hidden on the body and html is still scrollable for screen widths < 1024px.
  // Improvement seems to have been done in mui ModalManager, we should be able
  // to remove this RemoveScroll after update to mui 4.9.11
  // https://github.com/mui-org/material-ui/pull/17972
  // See also this related issue https://github.com/cozy/cozy-ui/pull/1597 on UI's side
  // to have more information about RemoveScroll
  const shouldBlockScroll = isMobile || isTablet
  const Wrapper =
    (props.open || props.opened) && shouldBlockScroll
      ? RemoveScroll
      : React.Fragment

  const theme = useCozyTheme()

  useSetFlagshipUI(
    props.fullScreen
      ? {
          bottomBackground: 'background.paper',
          bottomTheme: 'dark',
          topBackground: 'background.paper',
          topTheme: 'dark'
        }
      : {
          bottomBackground: 'background.default',
          bottomTheme: 'light',
          bottomOverlay: 'rgba(0, 0, 0, 0.5)',
          topOverlay: 'rgba(0, 0, 0, 0.5)',
          topBackground: 'background.paper',
          topTheme: 'light'
        },
    {
      bottomBackground: 'background.default',
      bottomTheme: 'dark',
      bottomOverlay: 'transparent',
      topOverlay: 'transparent',
      topBackground: 'background.paper',
      topTheme: 'dark'
    }
  )

  return (
    <Wrapper>
      <MUIDialog className={themesStyles[`CozyTheme--${theme}`]} {...props} />
    </Wrapper>
  )
}
export default Dialog

export { default as DialogActions } from './DialogActions'
export { default as DialogContent } from './DialogContent'
export { default as DialogContentText } from './DialogContentText'
export { default as DialogTitle } from './DialogTitle'
