import React from 'react'
import { I18n, translate } from './'
import omit from 'lodash/omit'

const withLocales = locales => Component => {
  // The inner components needs to receive t
  const Translated = translate()(Component)

  class Wrapped extends React.Component {
    render() {
      // Do not pass t downwards
      const { lang, ...rest } = omit(this.props, 't')
      return (
        <I18n dictRequire={localeCode => locales[localeCode]} lang={lang}>
          <Translated {...rest} />
        </I18n>
      )
    }
  }

  // The outer component needs to receive lang
  return translate()(Wrapped)
}

export default withLocales
