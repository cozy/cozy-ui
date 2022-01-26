import React from 'react'
import { I18nContext } from '../I18n'
import { BreakpointsProvider } from '../hooks/useBreakpoints'

import { CozyProvider } from 'cozy-client'
import { Provider } from 'react-redux'
import { WebviewIntentProvider } from 'cozy-intent'

const BarContextProvider = props => {
  if (!props.children) return null
  return (
    <Provider store={props.store}>
      <CozyProvider client={props.client}>
        <I18nContext.Provider
          value={{ f: props.f, t: props.t, lang: props.lang }}
        >
          <BreakpointsProvider>
            <WebviewIntentProvider>{props.children}</WebviewIntentProvider>
          </BreakpointsProvider>
        </I18nContext.Provider>
      </CozyProvider>
    </Provider>
  )
}

export default BarContextProvider
