import React from 'react'
import { Provider } from 'react-redux'

import { CozyProvider } from 'cozy-client'
import { WebviewIntentProvider } from 'cozy-intent'

import { BreakpointsProvider } from '../providers/Breakpoints'
import { I18nContext } from '../providers/I18n'

const BarContextProvider = ({
  children,
  store,
  client,
  f,
  t,
  lang,
  webviewService
}) => {
  if (!children) return null

  return (
    <Provider store={store}>
      <CozyProvider client={client}>
        <I18nContext.Provider value={{ f, t, lang }}>
          <BreakpointsProvider>
            {webviewService ? (
              <WebviewIntentProvider webviewService={webviewService}>
                {children}
              </WebviewIntentProvider>
            ) : (
              children
            )}
          </BreakpointsProvider>
        </I18nContext.Provider>
      </CozyProvider>
    </Provider>
  )
}

export default BarContextProvider
