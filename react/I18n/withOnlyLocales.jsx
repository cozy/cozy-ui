import React, { forwardRef } from 'react'
import { I18n, useI18n } from '.'

/**
 *
 * @param  {Function|Object} localesOrRequire - Either a function returning the locale,
 *                                              or an object containing all the locales
 * @return {Component}
 */
const withOnlyLocales = localesOrRequire => Component => {
  const requireLocale =
    typeof localesOrRequire === 'function'
      ? localesOrRequire
      : localeCode => localesOrRequire[localeCode]

  const Wrapped = forwardRef((props, ref) => {
    const { lang } = useI18n()

    return (
      <I18n dictRequire={requireLocale} lang={lang}>
        <Component {...props} ref={ref} />
      </I18n>
    )
  })

  Wrapped.propTypes = {
    ...(Component.propTypes || {})
  }

  Wrapped.displayName = `withOnlyLocales(${Component.displayName ||
    Component.name})`

  return Wrapped
}

export default withOnlyLocales
