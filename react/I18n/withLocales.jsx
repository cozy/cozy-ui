import React from 'react'
import { I18n, translate } from './index.jsx'

const withLocales = locales => Component =>
  translate()(props => {
    return (
      <I18n dictRequire={localeCode => locales[localeCode]} lang={props.lang}>
        <Component {...props} />
      </I18n>
    )
  })

export default withLocales
