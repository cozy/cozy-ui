/**
 * Provides an I18n helper using a Higher Order Component.
 */

'use strict'

import React, { Component, useContext } from 'react'
import PropTypes from 'prop-types'

import { initTranslation } from './translation'
import { initFormat } from './format'

export const DEFAULT_LANG = 'en'

export const I18nContext = React.createContext()

// Provider root component
export class I18n extends Component {
  constructor(props) {
    super(props)
    this.init()
    this.state = {
      contextValue: this.getContextValue()
    }
  }

  init() {
    const { polyglot, lang, dictRequire, context, defaultLang } = this.props
    this.translator =
      polyglot || initTranslation(lang, dictRequire, context, defaultLang)
    this.format = initFormat(lang, defaultLang)
    this.t = this.translator.t.bind(this.translator)
  }

  getContextValue() {
    return {
      t: this.t,
      f: this.format,
      lang: this.props.lang
    }
  }

  getChildContext() {
    return this.state.contextValue
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lang !== this.props.lang) {
      this.init()
      this.setState({ contextValue: this.getContextValue() })
    }
  }

  render() {
    return (
      <I18nContext.Provider value={this.state.contextValue}>
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

export const useI18n = () => useContext(I18nContext)

export { initTranslation, extend } from './translation'

export default I18n
