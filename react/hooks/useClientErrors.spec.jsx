import { screen, render, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'

import { FetchError } from 'cozy-stack-client'

import useClientErrors from './useClientErrors'
import DemoProvider from '../providers/DemoProvider'

function createCozyClient() {
  return {
    on: jest.fn(),
    removeListener: jest.fn()
  }
}

jest.mock('../deprecated/QuotaAlert', () => ({ onClose }) => (
  <>
    QuotaAlert <button onClick={onClose}>Dismiss</button>
  </>
))

function createWrapper(client = createCozyClient()) {
  function Wrapper({ children }) {
    return <DemoProvider client={client}>{children}</DemoProvider>
  }
  return Wrapper
}

function renderWrappedHook(client) {
  const wrapper = createWrapper(client)
  return renderHook(() => useClientErrors(), { wrapper })
}

function wrappedShallow(tree, client) {
  return render(tree, { wrapper: createWrapper(client) })
}

describe('useClientErrors', () => {
  it('registers an `error` handler in client', done => {
    const client = createCozyClient()
    client.on.mockImplementation(name => name === 'error' && done())
    renderWrappedHook(client)
  })

  describe('renderErrors', () => {
    it('returns a function', () => {
      const { result } = renderWrappedHook()
      const { ClientErrors } = result.current
      expect(ClientErrors).toBeInstanceOf(Function)
    })

    it('displays nothing by default', () => {
      const { result } = renderWrappedHook()
      const { ClientErrors } = result.current
      wrappedShallow(<ClientErrors />)

      expect(screen.queryByText('QuotaAlert')).not.toBeInTheDocument()
    })

    describe('for quota errors', () => {
      const setup = async () => {
        const client = createCozyClient()
        const response = new Response(null, {
          status: 413,
          statusText: 'Quota exceeded'
        })
        const error = new FetchError(
          response,
          `${response.status} ${response.statusText}`
        )

        const { result, waitForNextUpdate } = renderWrappedHook(client)
        const nextUpdate = waitForNextUpdate()

        act(() => {
          const handler = client.on.mock.calls[0][1]
          handler(error)
        })

        await nextUpdate
        const { ClientErrors } = result.current
        const node = wrappedShallow(<ClientErrors />, client)
        return { node, result, client }
      }

      it('displays a a QuotaAlert', async () => {
        await setup()

        expect(screen.queryByText('QuotaAlert')).toBeInTheDocument()
      })
    })
  })
})
