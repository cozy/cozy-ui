import React from 'react'

import { CozyProvider } from 'cozy-client'

import { BreakpointsProvider } from './Breakpoints'
import CozyTheme from './CozyTheme'
import AlertProvider from '../providers/Alert'
import I18n from '../providers/I18n'

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

const DemoProvider = ({ client, variant, dictRequire, children }) => {
  const lang = localStorage.getItem('lang') || 'en'
  const _dictRequire = dictRequire ? dictRequire : () => ({})

  return (
    <CozyProvider client={client || defaultClient}>
      <BreakpointsProvider>
        <AlertProvider>
          <I18n lang={lang} dictRequire={_dictRequire}>
            <CozyTheme variant={variant}>{children}</CozyTheme>
          </I18n>
        </AlertProvider>
      </BreakpointsProvider>
    </CozyProvider>
  )
}

export default DemoProvider
