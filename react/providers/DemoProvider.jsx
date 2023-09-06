import React from 'react'

import { CozyProvider } from 'cozy-client'

import { BreakpointsProvider } from '../hooks/useBreakpoints'
import CozyTheme from '../CozyTheme'
import { I18nContext } from '../I18n'

const defaultClient = {
  plugins: {
    realtime: {
      subscribe: () => {},
      unsubscribe: () => {},
      unsubscribeAll: () => {}
    }
  },
  getStackClient: () => ({
    uri: 'https://cozy.io/'
  }),
  getInstanceOptions: () => ({
    subdomain: ''
  })
}

const DemoProvider = ({ client, theme, children }) => {
  const lang = localStorage.getItem('lang') || 'en'

  return (
    <CozyProvider client={client || defaultClient}>
      <BreakpointsProvider>
        <I18nContext.Provider
          value={{
            t: x => x,
            f: () => '01 Jan. 2022',
            lang
          }}
        >
          <CozyTheme variant={theme}>{children}</CozyTheme>
        </I18nContext.Provider>
      </BreakpointsProvider>
    </CozyProvider>
  )
}

export default DemoProvider
