import { makeHistory } from './helpers'

describe('makeHistory', () => {
  it('should return an empty array if no options are provided', () => {
    expect(makeHistory()).toEqual([])
  })

  it('should return an array with the options object if no focusedId is provided', () => {
    const options = { id: '1', children: [] }
    expect(makeHistory(options)).toEqual([options])
  })

  it('should return an array with the options object if the focusedId is not found', () => {
    const options = { id: '1', focusedId: '2', children: [] }
    expect(makeHistory(options)).toEqual([options])
  })

  it('should return an array with the parent and child objects if the focusedId is found', () => {
    const subChild = { id: '3' }
    const child = { id: '2', children: [subChild] }
    const options = { id: '1', focusedId: '3', children: [child] }
    expect(makeHistory(options)).toEqual([child, options])
  })

  it('should return an array with the parent and child objects if the focusedId is found and canSelectParent is true', () => {
    const child = { id: '2', children: [] }
    const options = { id: '1', focusedId: '2', children: [child] }
    expect(makeHistory(options, true)).toEqual([child, options])
  })

  it('should return an array with only the parent object if the focusedId is found and canSelectParent is false', () => {
    const child = { id: '2', children: [] }
    const options = { id: '1', focusedId: '2', children: [child] }
    expect(makeHistory(options, false)).toEqual([options])
  })
})
