import { renderHook, act } from '@testing-library/react-hooks'
import { shallow } from 'enzyme'
import React from 'react'

import { CozyProvider } from 'cozy-client'
import { FetchError } from 'cozy-stack-client'

import useClientErrors from './useClientErrors'

function createCozyClient() {
  return {
    on: jest.fn(),
    removeListener: jest.fn()
  }
}

function createWrapper(client = createCozyClient()) {
  function Wrapper({ children }) {
    return <CozyProvider client={client}>{children}</CozyProvider>
  }
  return Wrapper
}

function renderWrappedHook(client) {
  const wrapper = createWrapper(client)
  return renderHook(() => useClientErrors(), { wrapper })
}

function wrappedShallow(tree, client) {
  return shallow(tree, { wrappingComponent: createWrapper(client) })
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
      const node = wrappedShallow(<ClientErrors />)
      expect(node).toHaveLength(0)
    })

    describe('for quota errors', () => {
      const findQuotaAlert = node => {
        return node.at(0).dive()
      }
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
        const { node } = await setup()
        expect(node).toHaveLength(1)
        expect(findQuotaAlert(node).type().name).toEqual('QuotaAlert')
      })

      it('can be dismissed', async () => {
        const { node, result, client } = await setup()
        const quotaAlert = findQuotaAlert(node)
        const onClose = quotaAlert.props().onClose
        act(() => onClose())

        // re-render ClientErrors returned by the hook
        const { ClientErrors } = result.current
        const updatedNode = wrappedShallow(<ClientErrors />, client)
        expect(updatedNode.at(0).length).toBe(0)
      })
    })
  })
})
