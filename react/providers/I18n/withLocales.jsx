import React from 'react'
import { I18n, translate } from '.'
import omit from 'lodash/omit'

/**
 *
 * @param  {Function|Object} localesOrRequire - Either a function returning the locale for a lang,
 *                                              or an object containing all the locales
 * @return {Component}
 */
const withLocales = localesOrRequire => Component => {
  // The inner components needs to receive t
  const Translated = translate()(Component)

  const requireLocale =
    typeof localesOrRequire === 'function'
      ? localesOrRequire
      : localeCode => localesOrRequire[localeCode]

  class Wrapped extends React.Component {
    render() {
      const { lang } = this.props
      // Do not pass translate props downwards
      // since the component is already augmented with translate()
      const wrappedProps = omit(this.props, Object.keys(I18n.childContextTypes))
      return (
        <I18n dictRequire={requireLocale} lang={lang}>
          <Translated {...wrappedProps} />
        </I18n>
      )
    }
  }
  Wrapped.propTypes = {
    ...(Component.propTypes || {}),
    ...I18n.childContextTypes
  }

  Wrapped.displayName = `withLocales(${Component.displayName ||
    Component.name})`

  // The outer component needs to receive lang
  return translate()(Wrapped)
}

export default withLocales
