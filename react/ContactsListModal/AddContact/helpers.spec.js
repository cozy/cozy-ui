import { createMockClient } from 'cozy-client'

import { handleSubmit } from './helpers'

const client = createMockClient({})
client.save = jest.fn(x => ({ data: x }))
const onCreate = jest.fn()
const onListClose = jest.fn()

describe('handleSubmit', () => {
  it('should not create the contact if no givenName of familyName', async () => {
    await handleSubmit({ contactValues: {}, client, onCreate, onListClose })

    expect(onCreate).not.toHaveBeenCalled()
    expect(onListClose).not.toHaveBeenCalled()
  })

  it('should create the contact if there is only the givenName', async () => {
    await handleSubmit({
      contactValues: { givenName: 'John' },
      client,
      onCreate,
      onListClose
    })

    expect(client.save).toHaveBeenCalled()
    expect(onCreate).toHaveBeenCalledWith({
      _type: 'io.cozy.contacts',
      name: {
        familyName: undefined,
        givenName: 'John'
      }
    })
    expect(onListClose).toHaveBeenCalled()
  })

  it('should create the contact if there is only the familyName', async () => {
    await handleSubmit({
      contactValues: { familyName: 'Connor' },
      client,
      onCreate,
      onListClose
    })

    expect(client.save).toHaveBeenCalled()
    expect(onCreate).toHaveBeenCalledWith({
      _type: 'io.cozy.contacts',
      name: {
        familyName: 'Connor',
        givenName: undefined
      }
    })
    expect(onListClose).toHaveBeenCalled()
  })

  it('should create the contact if there is the givenName and familyName', async () => {
    await handleSubmit({
      contactValues: { givenName: 'John', familyName: 'Connor' },
      client,
      onCreate,
      onListClose
    })

    expect(client.save).toHaveBeenCalled()
    expect(onCreate).toHaveBeenCalledWith({
      _type: 'io.cozy.contacts',
      name: {
        familyName: 'Connor',
        givenName: 'John'
      }
    })
    expect(onListClose).toHaveBeenCalled()
  })
})
