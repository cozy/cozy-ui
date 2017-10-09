/**
 * preact plugin that provides an I18n helper using a Higher Order Component.
 */

'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
  lang: PropTypes.string.isRequired,      // current language.
  dictRequire: PropTypes.func.isRequired, // A callback to load locales.
  context: PropTypes.string,              // current context.
  defaultLang: PropTypes.string           // default language. By default is 'en'
}

I18n.childContextTypes = {
  t: PropTypes.func,
  f: PropTypes.func,
  lang: PropTypes.string
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
