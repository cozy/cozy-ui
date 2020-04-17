import React from 'react'

import CozyClient, {
  createMockClient,
  CozyProvider,
  useClient
} from 'cozy-client'
import configureStore from 'redux-mock-store'
import { Provider, useStore } from 'react-redux'

import BarContextProvider from '.'
import I18n, { useI18n, translate } from '../I18n'

const locales = { helloworld: 'Hello World !' }
const localesBar = { a: 'b' }

const DumbHelloWorld = translate()(({ t, f, lang }) => (
  <div>
    {t('helloworld')}
    <br />
    {f('2020-01-06', 'DDD MMM')}
    <br />
    {lang}
  </div>
))

const MockedBar = props => {
  const client = new CozyClient({})
  return (
    <CozyProvider client={client}>
      <I18n lang="fr" dictRequire={() => localesBar}>
        {props.children}
      </I18n>
    </CozyProvider>
  )
}

const App = () => {
  const { t, f, lang } = useI18n()
  const client = useClient()
  const store = useStore()
  return (
    <MockedBar>
      <BarContextProvider t={t} f={f} lang={lang} client={client} store={store}>
        <DumbHelloWorld />
      </BarContextProvider>
    </MockedBar>
  )
}

describe('BarContextProvider', () => {
  it('should provide the right (aka app not the one from the bar) t/f/store/client to the DumbHelloWorld', () => {
    const client = createMockClient({})
    const mockStore = configureStore()
    const store = mockStore(x => x)
    const root = mount(
      <Provider store={store}>
        <CozyProvider client={client}>
          <I18n lang="en" dictRequire={() => locales}>
            <App />
          </I18n>
        </CozyProvider>
      </Provider>
    )
    expect(root.html()).toBe('<div>Hello World !<br>6 Jan<br>en</div>')
  })
})
