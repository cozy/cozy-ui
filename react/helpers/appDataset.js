import memoize from 'lodash/memoize'

export const readApplicationDataset = memoize(() => {
  const root = document.querySelector('[role=application]')
  return root && root.dataset
})

export const readCozyData = memoize(() => {
  const dataset = readApplicationDataset()
  if (dataset && dataset.cozy) {
    return JSON.parse(dataset.cozy)
  }
  return null
})

/**
 * Reads an attribute set by the stack from the DOM
 *
 * A cozy app must receives on data from the stack, typically on the
 * [role=application] node. Here, we try first to read from data-cozy
 * and we fallback on data-[attrName].
 */
export const readCozyDataFromDOM = memoize(attrName => {
  const data = readCozyData()

  if (data && data[attrName] !== undefined) {
    return data[attrName] === 'true' || data[attrName] === 'false'
      ? JSON.parse(data[attrName])
      : data[attrName]
  }

  const appDataset = readApplicationDataset()
  if (!appDataset) {
    return
  }

  const attrName2 = `cozy${attrName[0].toUpperCase()}${attrName.substring(1)}`
  const value = appDataset[attrName2]
  return value === undefined ? undefined : value === '' || JSON.parse(value)
})

export const resetCache = () => {
  readCozyDataFromDOM.cache = new memoize.Cache()
  readCozyData.cache = new memoize.Cache()
  readApplicationDataset.cache = new memoize.Cache()
}
