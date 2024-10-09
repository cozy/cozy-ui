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
 *   - 'cozy' value should be near the beginning, right after 'all'
 *   - items of type 'file' should appear alphabetically between 'webapp' and 'konnector'
 *
 * @param  {CategoryOption} categoryA
 * @param  {CategoryOption} categoryB
 * @return {Number}
 */
export const sorter = (categoryA, categoryB) => {
  // Always keep 'all' at the beginning
  if (categoryA.value === 'all') return -1
  if (categoryB.value === 'all') return 1

  // Always keep 'others' at the end
  if (categoryA.value === 'others') return 1
  if (categoryB.value === 'others') return -1

  // Keep 'cozy' near the beginning, right after 'all'
  if (categoryA.value === 'cozy') return -1
  if (categoryB.value === 'cozy') return 1

  // Sort by type order: webapp < file < konnector
  const typeOrder = ['webapp', 'file', 'konnector']
  const typeAIndex = typeOrder.indexOf(categoryA.type)
  const typeBIndex = typeOrder.indexOf(categoryB.type)

  if (typeAIndex !== typeBIndex) {
    return typeAIndex - typeBIndex
  }

  // Alphabetical sort on label for the rest
  return categoryA.label.localeCompare(categoryB.label)
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

  for (const type of [APP_TYPE.WEBAPP, APP_TYPE.FILE, APP_TYPE.KONNECTOR]) {
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

    const categories = Object.keys(catApps)
    if (type === APP_TYPE.FILE && categories.length > 0) {
      allCategoryOptions.push(
        addLabel({
          value: 'shortcuts',
          secondary: false
        })
      )
    }

    const categoryOptions = categories.map(cat => {
      return addLabel({
        value: cat,
        type: type,
        secondary: type === APP_TYPE.KONNECTOR || type === APP_TYPE.FILE
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
