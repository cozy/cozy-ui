import React from 'react'
import { Provider, useStore } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'

import { useWebviewIntent } from 'cozy-intent'
import CozyClient, {
  createMockClient,
  CozyProvider,
  useClient
} from 'cozy-client'

import BarContextProvider from '.'
import I18n, { useI18n, translate } from '../providers/I18n'

const mockWebviewService = { foo: 'bar' }
const mockVoidWebviewService = 'No context'
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

const IntentComponent = () => {
  let webviewIntent
  let render

  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    webviewIntent = useWebviewIntent()
    render = webviewIntent.foo
  } catch {
    render = mockVoidWebviewService
  }

  return <main>{render}</main>
}

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

const App = ({ children, webviewService }) => {
  const { t, f, lang } = useI18n()
  const client = useClient()
  const store = useStore()

  return (
    <MockedBar>
      <BarContextProvider
        t={t}
        f={f}
        lang={lang}
        client={client}
        store={store}
        webviewService={webviewService}
      >
        {children}
      </BarContextProvider>
    </MockedBar>
  )
}

describe('BarContextProvider', () => {
  afterAll(() => {
    window.cozy = undefined
  })

  it('should provide the right (aka app not the one from the bar) t/f/store/client to the DumbHelloWorld', () => {
    const client = createMockClient({})
    const mockStore = configureStore()
    const store = mockStore(x => x)

    const { queryByText } = render(
      <Provider store={store}>
        <CozyProvider client={client}>
          <I18n lang="en" dictRequire={() => locales}>
            <App>
              <DumbHelloWorld />
            </App>
          </I18n>
        </CozyProvider>
      </Provider>
    )

    expect(queryByText('<div>Hello World !<br>6 Jan<br>en</div>')).toBeDefined()
  })

  it('should render nothing when no children is provided', () => {
    const { container } = render(<BarContextProvider />)
    expect(container.firstChild).toBeNull()
  })

  it('should work without a cozy-intent context', () => {
    // Set App Amirale context
    window.cozy.isFlagshipApp = true

    const client = createMockClient({})
    const mockStore = configureStore()
    const store = mockStore(x => x)

    const { queryByText } = render(
      <Provider store={store}>
        <CozyProvider client={client}>
          <I18n lang="en" dictRequire={() => locales}>
            <App>
              <IntentComponent />
            </App>
          </I18n>
        </CozyProvider>
      </Provider>
    )

    expect(queryByText(mockVoidWebviewService)).toBeInTheDocument()
  })

  it('should not try to provide a cozy-intent context if one is provided', () => {
    // Set App Amirale context
    window.cozy.isFlagshipApp = true

    const client = createMockClient({})
    const mockStore = configureStore()
    const store = mockStore(x => x)

    const { queryByText } = render(
      <Provider store={store}>
        <CozyProvider client={client}>
          <I18n lang="en" dictRequire={() => locales}>
            <App webviewService={mockWebviewService}>
              <IntentComponent />
            </App>
          </I18n>
        </CozyProvider>
      </Provider>
    )

    expect(queryByText(mockWebviewService.foo)).toBeInTheDocument()
  })

  it('should work without a cozy-intent context', () => {
    // Set Web context
    window.cozy.isFlagshipApp = false

    const client = createMockClient({})
    const mockStore = configureStore()
    const store = mockStore(x => x)

    const { queryByText } = render(
      <Provider store={store}>
        <CozyProvider client={client}>
          <I18n lang="en" dictRequire={() => locales}>
            <App>
              <IntentComponent />
            </App>
          </I18n>
        </CozyProvider>
      </Provider>
    )

    expect(queryByText(mockVoidWebviewService)).toBeInTheDocument()
  })
})
