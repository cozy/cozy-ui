/**
 * preact plugin that provides an I18n helper using a Higher Order Component.
 */

'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Provider root component
export class I18nProvider extends Component {
  getChildContext () {
    return {
      t: this.props.i18n.t.bind(this.props.i18n),
      f: this.props.i18nDate.bind(this.props.i18nDate)
    }
  }

  render () {
    return this.props.children && this.props.children[0] || null
  }
}

I18nProvider.childContextTypes = {
  t: PropTypes.func,
  f: PropTypes.func
}

// higher order decorator for components that need `t` and/or `f`
export const translate = () => {
  return (WrappedComponent) => {
    const _translate = (props, context) => (
      <WrappedComponent {...props} t={context.t} f={context.f} />
    )
    return _translate
  }
}
