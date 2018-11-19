export const preload = jest.fn().mockImplementation(async () => {
  return 'http://cozy.tools/apps/test/icon'
})

export const getPreloaded = jest
  .fn()
  .mockReturnValue('http://cozy.tools/apps/test/icon')

export default {
  getPreloaded,
  preload
}
