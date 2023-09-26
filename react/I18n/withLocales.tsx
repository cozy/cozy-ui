import React from 'react'
import omit from 'lodash/omit'
import { InferProps } from 'prop-types'

import { I18n, translate } from '.'

type requireLocale = (localeCode: string) => object

/**
 *
 * @param  {Function|Object} localesOrRequire - Either a function returning the locale for a lang,
 *                                              or an object containing all the locales
 * @return {Component}
 */
function withLocales<T>(
  localesOrRequire: requireLocale | Record<string, object>
) {
  return (Component: React.ComponentType<T>): React.ComponentType<T> => {
    // The inner components needs to receive t
    const Translated = translate()(Component)

    const requireLocale =
      typeof localesOrRequire === 'function'
        ? localesOrRequire
        : (localeCode: string): object => localesOrRequire[localeCode]

    const WrappedPropTypes = {
      ...(Component.propTypes || {}),
      ...I18n.childContextTypes
    }

    const Wrapped: React.FC<InferProps<typeof WrappedPropTypes>> = props => {
      const { lang } = props
      // Do not pass translate props downwards
      // since the component is already augmented with translate()
      const wrappedProps = omit(props, Object.keys(I18n.childContextTypes))

      return (
        <I18n dictRequire={requireLocale} lang={lang}>
          <Translated {...wrappedProps} />
        </I18n>
      )
    }

    Wrapped.propTypes = WrappedPropTypes

    Wrapped.displayName = `withLocales(${Component.displayName ||
      Component.name})`

    // The outer component needs to receive lang
    return translate()(Wrapped)
  }
}

export default withLocales
