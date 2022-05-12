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

  it('should read the correct values from DOM (with old data-cozy-* mechanism)', () => {
    const tracker = trackerFile.getTracker()
    trackerFile.setTracker(tracker)
    document.body.innerHTML = `<div role="application" data-cozy-domain='cozy.tools:8080' data-cozy-app-name='banks' />`

    trackerFile.configureTracker()
    expect(tracker.push).toHaveBeenCalledWith(['enableHeartBeatTimer', 15])
    expect(tracker.push).toHaveBeenCalledWith(['setUserId', 'cozy.tools'])
    expect(tracker.push).toHaveBeenCalledWith([
      'setCustomDimension',
      1234,
      'banks'
    ])
  })

  it('should read the correct values from DOM (with old data-cozy-* mechanism) and override tracker options', () => {
    const tracker = trackerFile.getTracker()
    trackerFile.setTracker(tracker)
    document.body.innerHTML = `<div role="application" data-cozy-domain='cozy.tools:8080' data-cozy-app-name='banks' />`

    trackerFile.configureTracker({ app: 'banks2' })
    expect(tracker.push).toHaveBeenCalledWith(['enableHeartBeatTimer', 15])
    expect(tracker.push).toHaveBeenCalledWith(['setUserId', 'cozy.tools'])
    expect(tracker.push).toHaveBeenCalledWith([
      'setCustomDimension',
      1234,
      'banks2'
    ])
  })

  it('should read the correct values from DOM (with new data-cozy mechanism)', () => {
    const tracker = trackerFile.getTracker()
    trackerFile.setTracker(tracker)
    const data = { domain: 'cozy.tools:8080', app: { name: 'banks' } }
    document.body.innerHTML = `<div role="application" data-cozy='${JSON.stringify(
      data
    )}' />`

    trackerFile.configureTracker({ app: 'banks2' })
    expect(tracker.push).toHaveBeenCalledWith(['enableHeartBeatTimer', 15])
    expect(tracker.push).toHaveBeenCalledWith(['setUserId', 'cozy.tools'])
    expect(tracker.push).toHaveBeenCalledWith([
      'setCustomDimension',
      1234,
      'banks2'
    ])
  })
})
