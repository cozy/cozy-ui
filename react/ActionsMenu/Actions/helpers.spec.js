import { makeActions, makeBase64FromFile } from './helpers'

describe('makeActions', () => {
  it('should have empty actions array', () => {
    const actions = makeActions()

    expect(actions).toStrictEqual([])
  })

  it('should exclude `null` and `undefined` actions', () => {
    const mockFuncActionWithName = jest.fn(() => ({
      name: 'mockFuncActionWithName name'
    }))

    const actions = makeActions([
      undefined,
      mockFuncActionWithName,
      null,
      mockFuncActionWithName
    ])

    expect(actions).toStrictEqual([
      {
        'mockFuncActionWithName name': {
          name: 'mockFuncActionWithName name'
        }
      },
      {
        'mockFuncActionWithName name': {
          name: 'mockFuncActionWithName name'
        }
      }
    ])
  })

  it('should have object with key named with name property of the object returned by the function and value is the full object returned by the function', () => {
    const mockFuncActionWithName = jest.fn(() => ({
      name: 'mockFuncActionWithName name'
    }))

    const actions = makeActions([mockFuncActionWithName])

    expect(actions).toStrictEqual([
      {
        'mockFuncActionWithName name': {
          name: 'mockFuncActionWithName name'
        }
      }
    ])
  })

  it('should have object with key named with name of function passed and value is the full object returned by the function', () => {
    const mockFuncActionWithoutName = jest.fn(() => ({
      propA: 0,
      propB: 1
    }))

    const actions = makeActions([mockFuncActionWithoutName])

    expect(actions).toStrictEqual([{ mockConstructor: { propA: 0, propB: 1 } }])
  })
})

describe('makeBase64FromFile', () => {
  it('returns a base64 string for a given file', async () => {
    const file = new File(['test'], 'test.txt', { type: 'text/plain' })
    const base64String = await makeBase64FromFile(file)

    expect(base64String).toMatch(
      /^data:text\/plain;base64,[a-zA-Z0-9+/]+={0,2}$/
    )
  })

  it('rejects with an error if the file cannot be read', async () => {
    const file = new File(['test'], 'test.txt', { type: 'text/plain' })
    const invalidFile = { ...file, size: -1 }

    await expect(makeBase64FromFile(invalidFile)).rejects.toThrow()
  })
})
