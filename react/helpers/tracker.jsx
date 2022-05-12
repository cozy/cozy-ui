/* global __PIWIK_TRACKER_URL__ __PIWIK_SITEID__ __PIWIK_DIMENSION_ID_APP__ */
/* global Piwik */
import memoize from 'lodash/memoize'
import { readCozyDataFromDOM } from './appDataset'

// Think of these functions as a singleton class with only static methods.
let trackerInstance = null

/**
 * Returns whether tracking should be enabled
 *
 * @returns {boolean|unefined} True if tracking should be enabled
 */
export const shouldEnableTracking = memoize(() =>
  readCozyDataFromDOM('tracking')
)

/**
 * @private
 *
 * Returns the instance of the piwik tracker, creating it on thee fly if required. All parameters are optionnal.
 * You should not use this method directly but rather `trackEvent`
 * @param   {string}  trackerUrl             The URL of the piwik instance, without the php file name
 * @param   {number}  siteId                 The siteId to use for piwik
 * @param   {boolean} automaticallyConfigure = true Pass false to skip the automatic configuration
 * @param   {boolean} injectScript = false Whether or not the Piwik tracking script should be injected
 * @returns {object | null }  An instance of `PiwikReactRouter` on success,
 *                            `null` if the creation fails (usually because of adblockers)
 *                            `null` if the user doesn't accept the tracking
 */
export const getTracker = (
  trackerUrl,
  siteId,
  automaticallyConfigure = true,
  injectScript = false
) => {
  if (!shouldEnableTracking()) return null
  if (trackerInstance !== null) return trackerInstance

  try {
    // If `injectScript` is falsy, we rely on having the Piwik tracking script already on the page, otherwise the tracking will fail.
    // the next line is just there to throw in case the script is missing
    if (injectScript === false) Piwik.getTracker()

    var PiwikReactRouter = require('piwik-react-router')

    trackerInstance = PiwikReactRouter({
      url: trackerUrl || __PIWIK_TRACKER_URL__,
      siteId: siteId || __PIWIK_SITEID__, // site id is required here
      injectScript: injectScript
    })

    // apply the default configuration
    if (automaticallyConfigure) configureTracker()

    return trackerInstance
  } catch (err) {
    // this usually happens when there's an ad blocker
    console.warn(err)
    trackerInstance = null
    return null
  }
}

export const setTracker = tracker => (trackerInstance = tracker)

/**
 * Configures the base options for the tracker which will persist during the session.
 *
 * @param {object} options A map of options that can be configured.
 * @param {string} options.userId
 * @param {number} options.appDimensionId
 * @param {string} options.app
 * @param {number} options.heartbeat
 */
export const configureTracker = (options = {}) => {
  // early out in case the tracker is not available
  if (trackerInstance === null) {
    // maybe we should throw an error here?
    return
  }

  let appName

  const root = document.querySelector('[role=application]')

  if (root && root.dataset) {
    appName = readCozyDataFromDOM('appName') || readCozyDataFromDOM('app').name
  }
  // merge default options with what has been provided
  const { app, appDimensionId } = Object.assign(
    {
      appDimensionId: __PIWIK_DIMENSION_ID_APP__,
      app: appName
    },
    options
  )

  trackerInstance.push(['setCustomDimension', appDimensionId, app])
  trackerInstance.push([
    'setCustomUrl',
    window.location.pathname.substr(1) + location.search
  ])
}

/**
 * Returns a redux middleware which tracks events if the action
 * has a `trackEvent` field containing at least `category` and `action`
 * fields.
 *
 * @returns {function}
 */
export const createTrackerMiddleware = () => {
  return () => next => action => {
    if (
      trackerInstance &&
      action.trackEvent &&
      action.trackEvent.category &&
      action.trackEvent.action
    ) {
      trackerInstance.push([
        'trackEvent',
        action.trackEvent.category,
        action.trackEvent.action,
        action.trackEvent.name,
        action.trackEvent.value
      ])
    }

    return next(action)
  }
}

/**
 * Resets the tracker; disconnecting it from history and the middleware, if
 * it was attached.
 *
 * *Please be aware*: if the tracker instance had been used outside of this
 * library (in another middleware for example), further calls to the tracking
 * server may still work.
 */
export const resetTracker = () => {
  if (trackerInstance) {
    // stop tracking the history, if we were doing that
    trackerInstance.disconnectFromHistory()
    // we can't remove middlewares on the fly, but resetting the instance object will actually achieve that
    trackerInstance = null
  }
}

/**
 * Sends an event to matomo
 *
 * @param {array} event Event to track ['Drive', 'action', 'label']
 * @param {object} trackerForTest Mocked Tracker for test purpose
 */
export const trackEvent = (event, trackerForTest) => {
  const tracker = trackerForTest || getTracker()
  if (tracker) {
    let trackEventArray = []
    if (event && event[0]) {
      // Like that, we can do trackEvent(['Drive', 'option1']) without thinking of adding this `trackEvent` attr
      if (event[0] !== 'trackEvent') {
        trackEventArray = event.unshift('trackEvent')
      }

      trackEventArray = event
    }

    tracker.push(trackEventArray)
  }
}
