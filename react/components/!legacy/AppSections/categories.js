/**
 * Deal with app category options.
 *
 * Category options have the following attributes
 *
 * - value: Slug of the category
 * - label: Translated name of the category
 * - secondary: Whether to be displayed as a smaller category
 *   in the sidebar
 */

import { APP_TYPE } from './constants'

/**
 * Like groupBy except that grouper must return an array values.
 * Thus, an object can be in several groups.
 * If the grouper returns a falsy value, an empty list is assumed.
 */
const multiGroupBy = (iter, grouper) => {
  const groups = {}
  for (const obj of iter) {
    const values = grouper(obj) || []
    values.forEach(v => {
      // eslint-disable-next-line no-prototype-builtins
      if (!groups.hasOwnProperty(v)) groups[v] = []
      groups[v].push(obj)
    })
  }
  return groups
}

const getAppCategory = app => app.categories
export const groupApps = apps => multiGroupBy(apps, getAppCategory)

/**
 * Function to sort category options
 *
 * Alphabetical sort on label except for
 *   - 'all' value always at the beginning
 *   - 'others' value always at the end
 *
 * @param  {CategoryOption} categoryA
 * @param  {CategoryOption} categoryB
 * @return {Number}
 */
export const sorter = (categoryA, categoryB) => {
  return (
    (categoryA.value === 'all' && -1) ||
    (categoryB.value === 'all' && 1) ||
    (categoryA.value === 'others' && 1) ||
    (categoryB.value === 'others' && -1) ||
    (categoryA.value === 'cozy' && -1) ||
    (categoryB.value === 'cozy' && 1) ||
    categoryA.label.localeCompare(categoryB.label)
  )
}

export const addLabel = (cat, t) => ({
  ...cat,
  label: t(`app_categories.${cat.value}`)
})

/**
 * Returns category options from a list of apps
 * @param  {Array<App>}  apps
 * @param  {Object}  options
 * @param  {Boolean} options.includeAll - Whether to add an "All" option
 * @param  {Boolean} options.addLabel - Function to add a label to generated categories.
 *                                      If passed, generated categories will be sorted.
 * @return {Array<CategoryOption>}
 */
export const generateOptionsFromApps = (apps, options = {}) => {
  const includeAll = options.includeAll || false
  const addLabel = x => (options.addLabel ? options.addLabel(x) : x)
  if (!apps || !apps.length) return []
  let allCategoryOptions = includeAll
    ? [
        {
          value: 'all',
          secondary: false
        }
      ]
    : []

  for (const type of [APP_TYPE.WEBAPP, APP_TYPE.KONNECTOR]) {
    const catApps = groupApps(apps.filter(a => a.type === type))
    // Add an entry to filter by all konnectors
    if (type === APP_TYPE.KONNECTOR) {
      allCategoryOptions.push(
        addLabel({
          value: 'konnectors',
          secondary: false
        })
      )
    }
    const categoryOptions = Object.keys(catApps).map(cat => {
      return addLabel({
        value: cat,
        type: type,
        secondary: type === APP_TYPE.KONNECTOR
      })
    })

    // Since options have been labelled, it's possible to sort them
    if (options.addLabel) {
      categoryOptions.sort(sorter)
    }
    allCategoryOptions = allCategoryOptions.concat(categoryOptions)
  }
  return allCategoryOptions
}
