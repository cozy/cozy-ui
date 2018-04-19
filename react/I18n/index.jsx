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
  constructor(props) {
    super(props)
    this.init(this.props)
  }

  init(props) {
    const { lang, dictRequire, context, defaultLang } = props

    this.translation = initTranslation(lang, dictRequire, context, defaultLang)
    this.format = initFormat(lang, defaultLang)
  }

  getChildContext() {
    return {
      t: this.translation.t.bind(this.translation),
      f: this.format,
      lang: this.props.lang
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.lang !== this.props.lang) {
      this.init(newProps)
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

I18n.propTypes = {
  lang: PropTypes.string.isRequired, // current language.
  dictRequire: PropTypes.func.isRequired, // A callback to load locales.
  context: PropTypes.string, // current context.
  defaultLang: PropTypes.string // default language. By default is 'en'
}

const i18nContextTypes = {
  t: PropTypes.func,
  f: PropTypes.func,
  lang: PropTypes.string
}

I18n.childContextTypes = i18nContextTypes

// higher order decorator for components that need `t` and/or `f`
export const translate = () => WrappedComponent => {
  const Wrapper = (props, context) => (
    <WrappedComponent
      {...props}
      t={context.t}
      f={context.f}
      lang={context.lang}
    />
  )
  Wrapper.contextTypes = i18nContextTypes
  return Wrapper
}

export default I18n
