import { useEffect } from 'react'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'
import isEmpty from 'lodash/isEmpty'
import isObject from 'lodash/isObject'

import { useWebviewIntent } from 'cozy-intent'
import { FlagshipUI } from 'cozy-intent/dist/api/models/applications'
import { WebviewService } from 'cozy-intent/dist/api/services/WebviewService'

const parseArg = (
  webviewIntent?: WebviewService | void,
  arg?: FlagshipUI
): void => {
  if (!webviewIntent) return

  const sanitized = isObject(arg) && pickBy(arg, identity)
  const validUI = !isEmpty(sanitized) && sanitized

  validUI && webviewIntent.call('setFlagshipUI', validUI)
}

export const useSetFlagshipUI = (
  onMount: FlagshipUI,
  onUnmount?: FlagshipUI
): void => {
  const webviewIntent = useWebviewIntent()

  useEffect(() => {
    parseArg(webviewIntent, onMount)

    return () => parseArg(webviewIntent, onUnmount)

    /**
     * We don't want to listen to onMount/onUnmount arguments
     * It will create far too many unwanted calls
     * We only care about webviewIntent presence,
     * which should be undefined on first call (not guaranteed)
     */
  }, [webviewIntent]) // eslint-disable-line react-hooks/exhaustive-deps
}
