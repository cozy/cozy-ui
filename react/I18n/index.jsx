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

export const useI18n = () => {
  return useContext(I18nContext)
}

export { initTranslation, extend } from './translation'
export { default as translate } from './translate'
export { default as createUseI18n } from './createUseI18n'

export default I18n
