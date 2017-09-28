/**
 * preact plugin that provides an I18n helper using a Higher Order Component.
 */

'use strict'

import React, { Component } from 'react'

import { initTranslation } from './translation.jsx'
import { initFormat } from './format.jsx'

export const DEFAULT_LANG = 'en'

// Provider root component
export class I18n extends Component {
  constructor (props) {
    super(props)
    this.init(this.props)
  }

  init (props) {
    const { lang, dictRequire, context, defaultLang } = props

    this.translation = initTranslation(lang, dictRequire, context, defaultLang)
    this.format = initFormat(lang, defaultLang)
  }

  getChildContext () {
    return {
      t: this.translation.t.bind(this.translation),
      f: this.format,
      lang: this.props.lang
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.locale !== this.props.locale) {
      this.init(newProps)
    }
  }

  render () {
    return (this.props.children && this.props.children[0]) || null
  }
}

I18n.propTypes = {
  lang: React.PropTypes.string.isRequired,      // current language.
  dictRequire: React.PropTypes.func.isRequired, // A callback to load locales.
  context: React.PropTypes.string,              // current context.
  defaultLang: React.PropTypes.string           // default language. By default is 'en'
}

I18n.childContextTypes = {
  t: React.PropTypes.func,
  f: React.PropTypes.func,
  lang: React.PropTypes.string
}

// higher order decorator for components that need `t` and/or `f`
export const translate = () => {
  return (WrappedComponent) => {
    const _translate = (props, context) => (
      <WrappedComponent {...props} t={context.t} f={context.f} lang={context.lang} />
    )
    return _translate
  }
}
