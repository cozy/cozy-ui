import React from 'react'

import { CozyProvider } from 'cozy-client'

import { BreakpointsProvider } from './Breakpoints'
import CozyTheme from './CozyTheme'
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
        <I18n lang={lang} dictRequire={_dictRequire}>
          <CozyTheme variant={variant}>{children}</CozyTheme>
        </I18n>
      </BreakpointsProvider>
    </CozyProvider>
  )
}

export default DemoProvider
