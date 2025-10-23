import memoize from 'lodash/memoize';
export var readApplicationDataset = memoize(function () {
  var root = document.querySelector('[role=application]');
  return root && root.dataset;
});
export var readCozyData = memoize(function () {
  var dataset = readApplicationDataset();

  if (dataset && dataset.cozy) {
    return JSON.parse(dataset.cozy);
  }

  return null;
});
/**
 * Reads an attribute set by the stack from the DOM
 *
 * A cozy app must receives on data from the stack, typically on the
 * [role=application] node. Here, we try first to read from data-cozy
 * and we fallback on data-[attrName].
 */

export var readCozyDataFromDOM = memoize(function (attrName) {
  var data = readCozyData();

  if (data && data[attrName] !== undefined) {
    return data[attrName] === 'true' || data[attrName] === 'false' ? JSON.parse(data[attrName]) : data[attrName];
  }

  var appDataset = readApplicationDataset();

  if (!appDataset) {
    return;
  }

  var attrName2 = "cozy".concat(attrName[0].toUpperCase()).concat(attrName.substring(1));
  var value = appDataset[attrName2];
  return value === undefined ? undefined : value === '' || JSON.parse(value);
});
export var resetCache = function resetCache() {
  readCozyDataFromDOM.cache = new memoize.Cache();
  readCozyData.cache = new memoize.Cache();
  readApplicationDataset.cache = new memoize.Cache();
};