import createDepreciationLogger from './createDepreciationLogger'

describe('createDepreciationLogger', () => {
  global.console = { warn: jest.fn() }

  it('should not warn more than once per logger', () => {
    const loggerOne = createDepreciationLogger()
    const loggerTwo = createDepreciationLogger()

    loggerOne()
    expect(console.warn).toHaveBeenCalledTimes(1)
    loggerOne()
    expect(console.warn).toHaveBeenCalledTimes(1)

    loggerTwo()
    expect(console.warn).toHaveBeenCalledTimes(2)
    loggerOne()
    loggerTwo()
    expect(console.warn).toHaveBeenCalledTimes(2)
  })
})
