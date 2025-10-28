import React from 'react'

import { BreakpointsProvider } from './Breakpoints'
import CozyTheme from './CozyTheme'
import AlertProvider from '../providers/Alert'
import I18n from '../providers/I18n'

const DemoProvider = ({ variant, dictRequire, children }) => {
  const lang = localStorage.getItem('lang') || 'en'
  const _dictRequire = dictRequire ? dictRequire : () => ({})

  return (
    <BreakpointsProvider>
      <AlertProvider>
        <I18n lang={lang} dictRequire={_dictRequire}>
          <CozyTheme variant={variant}>{children}</CozyTheme>
        </I18n>
      </AlertProvider>
    </BreakpointsProvider>
  )
}

export default DemoProvider
