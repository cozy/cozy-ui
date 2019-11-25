import * as trackerFile from './tracker'

jest.mock('./tracker', () => ({
  ...require.requireActual('./tracker'),
  getTracker: jest.fn()
}))
describe('tracker / piwik action', () => {
  beforeEach(() => {
    trackerFile.getTracker.mockImplementation(() => ({ push: jest.fn() }))
  })

  afterEach(() => {
    jest.resetAllMocks()
    jest.restoreAllMocks()
  })

  it('should track event', () => {
    const tracker = trackerFile.getTracker()
    trackerFile.trackEvent(['trackEvent', 'toto'], tracker)
    expect(tracker.push).toHaveBeenCalledWith(['trackEvent', 'toto'])
  })
  it('should add or not the trackEvent item in the array', () => {
    const tracker = trackerFile.getTracker()
    trackerFile.trackEvent(['toto'], tracker)
    expect(tracker.push).toHaveBeenCalledWith(['trackEvent', 'toto'])
    trackerFile.trackEvent(['trackEvent', 'foo'], tracker)
    expect(tracker.push).toHaveBeenCalledWith(['trackEvent', 'foo'])
  })
})
