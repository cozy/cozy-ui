/**
 * Provides an I18n helper using a Higher Order Component.
 */

'use strict'

import React, { Component, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import Polyglot from 'node-polyglot'

import { initTranslation } from './translation'
import { initFormat } from './format'

export const DEFAULT_LANG = 'en'

export const I18nContext = React.createContext()

// Provider root component
export class I18n extends Component {
  constructor(props) {
    super(props)
    this.init(this.props)
  }

  init(props) {
    const { polyglot, lang, dictRequire, context, defaultLang } = props
    this.translator =
      polyglot || initTranslation(lang, dictRequire, context, defaultLang)
    this.format = initFormat(lang, defaultLang)
    this.t = this.translator.t.bind(this.translator)
    this.contextValue = this.getContextValue(props)
  }

  getContextValue(props) {
    return {
      t: this.t,
      f: this.format,
      lang: (props || this.props).lang
    }
  }

  getChildContext() {
    return this.contextValue
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps.lang !== this.props.lang) {
      this.init(nextProps)
    }
  }

  render() {
    return (
      <I18nContext.Provider value={this.contextValue}>
        {this.props.children}
      </I18nContext.Provider>
    )
  }
}

I18n.propTypes = {
  lang: PropTypes.string.isRequired, // current language.
  polyglot: PropTypes.object, // A polyglot instance.
  dictRequire: PropTypes.func, // A callback to load locales.
  context: PropTypes.string, // current context.
  defaultLang: PropTypes.string // default language. By default is 'en'
}

I18n.defaultProps = {
  defaultLang: DEFAULT_LANG
}

I18n.childContextTypes = {
  t: PropTypes.func,
  f: PropTypes.func,
  lang: PropTypes.string
}

// higher order decorator for components that need `t` and/or `f`
export const translate = () => WrappedComponent => {
  const Wrapper = props => {
    const i18nContext = useContext(I18nContext)
    return (
      <WrappedComponent
        {...props}
        t={i18nContext && i18nContext.t}
        f={i18nContext && i18nContext.f}
        lang={i18nContext && i18nContext.lang}
      />
    )
  }
  Wrapper.displayName = `withI18n(${WrappedComponent.displayName ||
    WrappedComponent.name})`
  return Wrapper
}

export const useI18n = () => {
  return useContext(I18nContext)
}

export const createUseI18n = locales => () => {
  const { lang } = useI18n() || { lang: DEFAULT_LANG }
  return useMemo(() => {
    const polyglot = new Polyglot({
      locale: DEFAULT_LANG,
      phrases: locales[DEFAULT_LANG]
    })
    if (lang && lang !== DEFAULT_LANG) {
      try {
        polyglot.locale(lang)
        polyglot.extend(locales[lang])
      } catch (e) {
        console.warn(`The dict phrases for "${lang}" can't be loaded`)
      }
    }
    const f = initFormat(lang)
    const t = polyglot.t.bind(polyglot)
    return { t, f, lang }
  }, [lang])
}

export { initTranslation, extend } from './translation'

export default I18n
