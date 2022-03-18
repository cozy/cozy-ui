import { useEffect } from 'react'
import { useWebviewIntent } from 'cozy-intent'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'
import isEmpty from 'lodash/isEmpty'
import isObject from 'lodash/isObject'

export const useSetFlagshipUI = (onMount, onUnmount) => {
  const webviewIntent = useWebviewIntent()

  useEffect(() => {
    const parsedOnMount = isObject(onMount) && pickBy(onMount, identity)
    const parsedOnUnmount = isObject(onUnmount) && pickBy(onUnmount, identity)

    webviewIntent &&
      !isEmpty(parsedOnMount) &&
      webviewIntent.call('setFlagshipUI', parsedOnMount)

    return () => {
      webviewIntent &&
        !isEmpty(parsedOnUnmount) &&
        webviewIntent.call('setFlagshipUI', parsedOnUnmount)
    }
  }, [webviewIntent])
}
