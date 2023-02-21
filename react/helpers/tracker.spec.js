import * as trackerFile from './tracker'
import { resetCache } from './appDataset'

window.__PIWIK_DIMENSION_ID_APP__ = 1234

jest.mock('./tracker', () => ({
  ...jest.requireActual('./tracker'),
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

  it('should memoize shouldEnableTracking', () => {
    const querySelectorSpy = jest.fn()
    jest
      .spyOn(global.document, 'querySelector')
      .mockImplementation(querySelectorSpy)
    trackerFile.shouldEnableTracking()
    trackerFile.shouldEnableTracking()
    expect(querySelectorSpy).toHaveBeenCalledTimes(1)
  })
})

describe('configureTracker', () => {
  beforeEach(() => {
    resetCache()
    trackerFile.getTracker.mockImplementation(() => ({ push: jest.fn() }))
  })

  it('should read the correct values from DOM', () => {
    const tracker = trackerFile.getTracker()
    trackerFile.setTracker(tracker)
    const data = { cozyDomain: 'cozy.tools:8080', appName: 'banks' }
    document.body.innerHTML = `<div role="application" data-cozy='${JSON.stringify(
      data
    )}' />`

    trackerFile.configureTracker({ app: 'banks2' })
    expect(tracker.push).toHaveBeenCalledWith([
      'setCustomDimension',
      1234,
      'banks2'
    ])
  })
})
