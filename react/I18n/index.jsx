/**
 * Provides an I18n helper using a Higher Order Component.
 */

'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { initTranslation } from './translation'
import { initFormat } from './format'

export const DEFAULT_LANG = 'en'

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
  }

  getChildContext() {
    return {
      t: this.translator.t.bind(this.translator),
      f: this.format,
      lang: this.props.lang
    }
  }

  // for preact
  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    this.UNSAFE_componentWillReceiveProps(nextProps)
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps.lang !== this.props.lang) {
      this.init(nextProps)
    }
  }

  render() {
    return React.Children.only(this.props.children)
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

const i18nContextTypes = {
  t: PropTypes.func,
  f: PropTypes.func,
  lang: PropTypes.string
}

I18n.childContextTypes = i18nContextTypes

// higher order decorator for components that need `t` and/or `f`
export const translate = () => WrappedComponent => {
  const Wrapper = (props, context) => {
    return (
      <WrappedComponent
        {...props}
        t={context.t}
        f={context.f}
        lang={context.lang}
      />
    )
  }
  Wrapper.propTypes = {
    //!TODO Remove this check after fixing https://github.com/cozy/cozy-drive/issues/1848
    ...(WrappedComponent ? WrappedComponent.propTypes : undefined),
    ...i18nContextTypes
  }
  Wrapper.contextTypes = i18nContextTypes
  return Wrapper
}

export { initTranslation, extend } from './translation'

export default I18n
