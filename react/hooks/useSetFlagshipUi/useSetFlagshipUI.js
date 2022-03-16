import { useEffect } from 'react'
import { useTheme } from '@material-ui/core'
import { get } from 'lodash'

import { useWebviewIntent } from 'cozy-intent'

const formatArg = (obj, theme) =>
  Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      k,
      k.includes('Background') ? get(theme.palette, v) : v
    ])
  )

export const useSetFlagshipUI = (onMount, onUnmount) => {
  const webviewIntent = useWebviewIntent()
  const theme = useTheme()

  useEffect(() => {
    if (theme && webviewIntent)
      webviewIntent.call('setFlagshipUI', formatArg(onMount, theme))

    return () => {
      if (theme && webviewIntent)
        webviewIntent.call('setFlagshipUI', formatArg(onUnmount, theme))
    }
  }, [theme, webviewIntent])
}
