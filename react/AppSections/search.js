import overEvery from 'lodash/overEvery'
import mapValues from 'lodash/mapValues'
import matches from 'lodash/matches'

import { APP_TYPE } from './constants'

const getDoctypesList = permsObj => {
  const doctypes = []
  for (let p in permsObj) {
    if (permsObj[p].type) doctypes.push(permsObj[p].type)
  }
  return doctypes
}

const typeMatcher = type => app => app.type === type
const categoryMatcher = category => app => {
  if (!Array.isArray(app.categories)) return false
  return app.categories.includes(category)
}
const tagMatcher = tag => app => {
  if (!Array.isArray(app.tags)) return false
  return app.tags.includes(tag)
}
const doctypeMatcher = doctype => app => {
  if (!app.permissions) return false
  return getDoctypesList(app.permissions).includes(doctype)
}
const pendingUpdateMatcher = () => app => !!app.availableVersion

const showMaintenanceMatcher = isShowMaintenance => app => {
  if (isShowMaintenance) return true
  return app.maintenance === undefined
}

const qualificationLabelsMatcher = label => app => {
  if (!Array.isArray(app.qualification_labels)) return false
  return app.qualification_labels.includes(label)
}

const searchAttrToMatcher = {
  type: typeMatcher,
  category: categoryMatcher,
  tag: tagMatcher,
  doctype: doctypeMatcher,
  pendingUpdate: pendingUpdateMatcher,
  showMaintenance: showMaintenanceMatcher,
  qualificationLabels: qualificationLabelsMatcher
}

/**
 * Returns a predicate function to match an app based on
 * a search specification.
 *
 * @param  {Search} search - What to search, ex: { type: 'webapp', category: 'banking'}
 * @return {Function<App>}
 */
export const makeMatcherFromSearch = (search = {}) => {
  // Create all predicates from the search object
  const predicates = Object.values(
    mapValues(search, (value, name) => {
      return searchAttrToMatcher[name]?.(value)
    })
  )
  // Return a function returning true if all predicates pass
  return overEvery(predicates)
}

/**
 * Returns a predicate to find the corresponding category option for
 * a search
 *
 * @param  {Search}
 * @return {Function<CategoryOption>}
 */
export const makeOptionMatcherFromSearch = (search = {}) => {
  const typeParam = search.type
  const categoryParam = search.category
  if (typeParam === APP_TYPE.KONNECTOR && !categoryParam) {
    return matches({ value: 'konnectors' })
  } else if (!typeParam && !categoryParam) {
    return matches({ value: 'all' })
  }
  return matches({ value: categoryParam, type: typeParam })
}

/**
 * Returns a Search from a category option
 *
 * @param  {CategoryOption}
 * @return {Search}
 */
export const makeSearchFromOption = option => {
  if (option.value === 'all') {
    return {}
  }
  const search = {}
  if (option.value === 'konnectors') {
    search.type = APP_TYPE.KONNECTOR
  } else {
    search.type = option.type
    search.category = option.value
  }
  return search
}
