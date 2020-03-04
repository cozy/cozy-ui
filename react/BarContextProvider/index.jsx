import React from 'react'
import { I18nContext } from '../I18n'
import { CozyProvider } from 'cozy-client'
import { Provider } from 'react-redux'

class BarContextProvider extends React.Component {
  render() {
    if (!this.props.children) return null
    return (
      <Provider store={this.props.store}>
        <CozyProvider client={this.props.client}>
          <I18nContext.Provider
            value={{ f: this.props.f, t: this.props.t, lang: this.props.lang }}
          >
            {this.props.children}
          </I18nContext.Provider>
        </CozyProvider>
      </Provider>
    )
  }
}

export default BarContextProvider
