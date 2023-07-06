/* global __PIWIK_TRACKER_URL__ __PIWIK_SITEID__ __PIWIK_DIMENSION_ID_APP__ */

/* global Piwik */
import memoize from 'lodash/memoize';
import { readCozyDataFromDOM } from "cozy-ui/transpiled/react/helpers/appDataset"; // Think of these functions as a singleton class with only static methods.

var trackerInstance = null;
/**
 * Returns whether tracking should be enabled
 *
 * @returns {boolean|unefined} True if tracking should be enabled
 */

export var shouldEnableTracking = memoize(function () {
  return readCozyDataFromDOM('tracking');
});
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

export var getTracker = function getTracker(trackerUrl, siteId) {
  var automaticallyConfigure = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var injectScript = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!shouldEnableTracking()) return null;
  if (trackerInstance !== null) return trackerInstance;

  try {
    // If `injectScript` is falsy, we rely on having the Piwik tracking script already on the page, otherwise the tracking will fail.
    // the next line is just there to throw in case the script is missing
    if (injectScript === false) Piwik.getTracker();

    var PiwikReactRouter = require('piwik-react-router');

    trackerInstance = PiwikReactRouter({
      url: trackerUrl || __PIWIK_TRACKER_URL__,
      siteId: siteId || __PIWIK_SITEID__,
      // site id is required here
      injectScript: injectScript
    }); // apply the default configuration

    if (automaticallyConfigure) configureTracker();
    return trackerInstance;
  } catch (err) {
    // this usually happens when there's an ad blocker
    console.warn(err);
    trackerInstance = null;
    return null;
  }
};
export var setTracker = function setTracker(tracker) {
  return trackerInstance = tracker;
};
/**
 * Configures the base options for the tracker which will persist during the session.
 *
 * @param {object} options A map of options that can be configured.
 * @param {string} options.userId
 * @param {number} options.appDimensionId
 * @param {string} options.app
 * @param {number} options.heartbeat
 */

export var configureTracker = function configureTracker() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // early out in case the tracker is not available
  if (trackerInstance === null) {
    // maybe we should throw an error here?
    return;
  }

  var appName;
  var root = document.querySelector('[role=application]');

  if (root && root.dataset) {
    appName = readCozyDataFromDOM('appName') || readCozyDataFromDOM('app').name;
  } // merge default options with what has been provided


  var _Object$assign = Object.assign({
    appDimensionId: __PIWIK_DIMENSION_ID_APP__,
    app: appName
  }, options),
      app = _Object$assign.app,
      appDimensionId = _Object$assign.appDimensionId;

  trackerInstance.push(['setCustomDimension', appDimensionId, app]);
  trackerInstance.push(['setCustomUrl', window.location.pathname.substr(1) + location.search]);
};
/**
 * Returns a redux middleware which tracks events if the action
 * has a `trackEvent` field containing at least `category` and `action`
 * fields.
 *
 * @returns {function}
 */

export var createTrackerMiddleware = function createTrackerMiddleware() {
  return function () {
    return function (next) {
      return function (action) {
        if (trackerInstance && action.trackEvent && action.trackEvent.category && action.trackEvent.action) {
          trackerInstance.push(['trackEvent', action.trackEvent.category, action.trackEvent.action, action.trackEvent.name, action.trackEvent.value]);
        }

        return next(action);
      };
    };
  };
};
/**
 * Resets the tracker; disconnecting it from history and the middleware, if
 * it was attached.
 *
 * *Please be aware*: if the tracker instance had been used outside of this
 * library (in another middleware for example), further calls to the tracking
 * server may still work.
 */

export var resetTracker = function resetTracker() {
  if (trackerInstance) {
    // stop tracking the history, if we were doing that
    trackerInstance.disconnectFromHistory(); // we can't remove middlewares on the fly, but resetting the instance object will actually achieve that

    trackerInstance = null;
  }
};
/**
 * Sends an event to matomo
 *
 * @param {array} event Event to track ['Drive', 'action', 'label']
 * @param {object} trackerForTest Mocked Tracker for test purpose
 */

export var trackEvent = function trackEvent(event, trackerForTest) {
  var tracker = trackerForTest || getTracker();

  if (tracker) {
    var trackEventArray = [];

    if (event && event[0]) {
      // Like that, we can do trackEvent(['Drive', 'option1']) without thinking of adding this `trackEvent` attr
      if (event[0] !== 'trackEvent') {
        trackEventArray = event.unshift('trackEvent');
      }

      trackEventArray = event;
    }

    tracker.push(trackEventArray);
  }
};