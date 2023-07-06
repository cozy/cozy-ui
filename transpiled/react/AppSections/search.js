import overEvery from 'lodash/overEvery';
import mapValues from 'lodash/mapValues';
import matches from 'lodash/matches';
import { APP_TYPE } from "cozy-ui/transpiled/react/AppSections/constants";

var getDoctypesList = function getDoctypesList(permsObj) {
  var doctypes = [];

  for (var p in permsObj) {
    if (permsObj[p].type) doctypes.push(permsObj[p].type);
  }

  return doctypes;
};

var typeMatcher = function typeMatcher(type) {
  return function (app) {
    return app.type === type;
  };
};

var categoryMatcher = function categoryMatcher(category) {
  return function (app) {
    if (!Array.isArray(app.categories)) return false;
    return app.categories.includes(category);
  };
};

var tagMatcher = function tagMatcher(tag) {
  return function (app) {
    if (!Array.isArray(app.tags)) return false;
    return app.tags.includes(tag);
  };
};

var doctypeMatcher = function doctypeMatcher(doctype) {
  return function (app) {
    if (!app.permissions) return false;
    return getDoctypesList(app.permissions).includes(doctype);
  };
};

var pendingUpdateMatcher = function pendingUpdateMatcher() {
  return function (app) {
    return !!app.availableVersion;
  };
};

var showMaintenanceMatcher = function showMaintenanceMatcher(isShowMaintenance) {
  return function (app) {
    if (isShowMaintenance) return true;
    return app.maintenance === undefined;
  };
};

var qualificationLabelsMatcher = function qualificationLabelsMatcher(label) {
  return function (app) {
    if (!Array.isArray(app.qualification_labels)) return false;
    return app.qualification_labels.includes(label);
  };
};

var searchAttrToMatcher = {
  type: typeMatcher,
  category: categoryMatcher,
  tag: tagMatcher,
  doctype: doctypeMatcher,
  pendingUpdate: pendingUpdateMatcher,
  showMaintenance: showMaintenanceMatcher,
  qualificationLabels: qualificationLabelsMatcher
};
/**
 * Returns a predicate function to match an app based on
 * a search specification.
 *
 * @param  {Search} search - What to search, ex: { type: 'webapp', category: 'banking'}
 * @return {Function<App>}
 */

export var makeMatcherFromSearch = function makeMatcherFromSearch() {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Create all predicates from the search object
  var predicates = Object.values(mapValues(search, function (value, name) {
    var _searchAttrToMatcher$;

    return (_searchAttrToMatcher$ = searchAttrToMatcher[name]) === null || _searchAttrToMatcher$ === void 0 ? void 0 : _searchAttrToMatcher$.call(searchAttrToMatcher, value);
  })); // Return a function returning true if all predicates pass

  return overEvery(predicates);
};
/**
 * Returns a predicate to find the corresponding category option for
 * a search
 *
 * @param  {Search}
 * @return {Function<CategoryOption>}
 */

export var makeOptionMatcherFromSearch = function makeOptionMatcherFromSearch() {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var typeParam = search.type;
  var categoryParam = search.category;

  if (typeParam === APP_TYPE.KONNECTOR && !categoryParam) {
    return matches({
      value: 'konnectors'
    });
  } else if (!typeParam && !categoryParam) {
    return matches({
      value: 'all'
    });
  }

  return matches({
    value: categoryParam,
    type: typeParam
  });
};
/**
 * Returns a Search from a category option
 *
 * @param  {CategoryOption}
 * @return {Search}
 */

export var makeSearchFromOption = function makeSearchFromOption(option) {
  if (option.value === 'all') {
    return {};
  }

  var search = {};

  if (option.value === 'konnectors') {
    search.type = APP_TYPE.KONNECTOR;
  } else {
    search.type = option.type;
    search.category = option.value;
  }

  return search;
};