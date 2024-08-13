import { useEffect } from 'react'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'
import isEmpty from 'lodash/isEmpty'
import isObject from 'lodash/isObject'

import { useWebviewIntent } from 'cozy-intent'
import { FlagshipUI as IntentInterface } from 'cozy-intent/dist/api/models/applications'
import { WebviewService } from 'cozy-intent/dist/api/services/WebviewService'

import { setRsgFlagshipElements } from './helpers'

export enum ThemeColor {
  Dark = 'dark',
  Light = 'light'
}
export interface FlagshipUI
  extends Omit<IntentInterface, 'topTheme' | 'bottomTheme'> {
  topTheme: ThemeColor
  bottomTheme: ThemeColor
}

export const parseArg = (
  webviewIntent?: WebviewService | void,
  arg?: FlagshipUI,
  caller?: string
): void => {
  const sanitized = isObject(arg) ? pickBy(arg, identity) : undefined
  const validUI = !isEmpty(sanitized) && sanitized

  setRsgFlagshipElements(sanitized)

  if (!webviewIntent) return

  validUI && webviewIntent.call('setFlagshipUI', validUI, caller)
}

export const useSetFlagshipUI = (
  onMount: FlagshipUI,
  onUnmount?: FlagshipUI,
  caller?: string
): void => {
  const webviewIntent = useWebviewIntent()

  useEffect(() => {
    parseArg(webviewIntent, onMount, `${caller || 'unknown'} (onMount)`)

    return () =>
      parseArg(webviewIntent, onUnmount, `${caller || 'unknown'} (onUnmount)`)

    /**
     * We don't want to listen to onMount/onUnmount arguments
     * It will create far too many unwanted calls
     * We only care about webviewIntent presence,
     * which should be undefined on first call (not guaranteed)
     */
  }, [webviewIntent]) // eslint-disable-line react-hooks/exhaustive-deps
}
