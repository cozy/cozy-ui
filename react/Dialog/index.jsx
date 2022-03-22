import React from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import { default as MUIDialog } from '@material-ui/core/Dialog'
import { useTheme } from '@material-ui/core'

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
  const cozyTheme = useCozyTheme()
  const theme = useTheme()
  const cozBar = document.querySelector('.coz-bar-wrapper')
  const sidebar = document.getElementById('sidebar')

  useSetFlagshipUI(
    props.fullScreen
      ? {
          bottomBackground: theme.palette.background.paper,
          bottomTheme: 'dark',
          topBackground: theme.palette.background.paper,
          topTheme: 'dark'
        }
      : {
          bottomBackground: theme.palette.background.default,
          bottomTheme: 'light',
          bottomOverlay: 'rgba(0, 0, 0, 0.5)',
          topOverlay: 'rgba(0, 0, 0, 0.5)',
          topBackground: theme.palette.background.paper,
          topTheme: 'light'
        },
    {
      bottomBackground: theme.palette.background[sidebar ? 'default' : 'paper'],
      bottomTheme: 'dark',
      bottomOverlay: 'transparent',
      topOverlay: 'transparent',
      topBackground:
        cozBar && getComputedStyle(cozBar).getPropertyValue('background-color'),
      topTheme:
        cozBar && cozBar.classList.contains('coz-theme-primary')
          ? 'light'
          : 'dark'
    }
  )

  return (
    <Wrapper>
      <MUIDialog
        className={themesStyles[`CozyTheme--${cozyTheme}`]}
        {...props}
      />
    </Wrapper>
  )
}
export default Dialog

export { default as DialogActions } from './DialogActions'
export { default as DialogContent } from './DialogContent'
export { default as DialogContentText } from './DialogContentText'
export { default as DialogTitle } from './DialogTitle'
