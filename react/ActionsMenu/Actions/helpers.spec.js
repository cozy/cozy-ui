import { makeActions } from './helpers'

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
