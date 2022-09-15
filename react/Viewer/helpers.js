import has from 'lodash/has'
import { models } from 'cozy-client'
const { isEncrypted } = models.file

export const knownDateMetadataNames = [
  'AObtentionDate',
  'BObtentionDate',
  'CObtentionDate',
  'DObtentionDate',
  'expirationDate',
  'referencedDate',
  'issueDate',
  'shootingDate',
  'date',
  'datetime'
]
export const knowNumberMetadataNames = [
  'number',
  'cardNumber',
  'vinNumber',
  'ibanNumber'
]
export const knowOtherMetadataNames = ['contact', 'page', 'qualification']

export const getCurrentModel = metadataName => {
  if (
    knownDateMetadataNames.includes(metadataName) ||
    knowNumberMetadataNames.includes(metadataName)
  ) {
    return 'information'
  }
  if (metadataName === 'contact') return 'contact'
  if (metadataName === 'page') return 'page'
}

/**
 * @typedef {object} Reference
 * @property {string} id - id of the document
 * @property {string} type - doctype of the document
 */

// TODO : should be in file model of cozy-client
export const isPlainText = (mimeType = '', fileName = '') => {
  return mimeType ? /^text\//.test(mimeType) : /\.(txt|md)$/.test(fileName)
}

export const hasQualifications = ({ file }) => {
  return has(file, 'metadata.qualification')
}

export const hasCertifications = ({ file }) => {
  return (
    has(file, 'metadata.carbonCopy') || has(file, 'metadata.electronicSafe')
  )
}

export const isFromKonnector = ({ file }) => {
  return has(file, 'cozyMetadata.sourceAccount')
}

/**
 * Checks if the file matches one of the following conditions:
 * - Is certified
 * - Is Qualified
 * - From a Connector
 *
 * @param {object} param
 * @param {IOCozyFile} param.file
 * @returns {boolean}
 */
export const isValidForPanel = ({ file }) => {
  return (
    hasCertifications({ file }) ||
    hasQualifications({ file }) ||
    isFromKonnector({ file })
  )
}

export const downloadFile = async ({ client, file, url }) => {
  if (isEncrypted(file)) {
    return client.collection('io.cozy.files').forceFileDownload(url, file.name)
  }
  return client.collection('io.cozy.files').download(file)
}

export const isFileEncrypted = file => isEncrypted(file)

/**
 * @param {Object} metadata
 * @returns {{ name: string, value: string }[]} Array of formated metadata
 */
export const formatMetadataQualification = metadata => {
  const dates = knownDateMetadataNames
    .map(dateName => {
      if (metadata[dateName]) {
        return { name: dateName, value: metadata[dateName] }
      }
    })
    .filter(Boolean)
    .filter((data, _, arr) => {
      if (arr.length > 1) return data.name !== 'datetime'
      return data
    })

  const numbers = knowNumberMetadataNames
    .map(numberName => {
      if (metadata[numberName]) {
        return { name: numberName, value: metadata[numberName] }
      }
    })
    .filter(Boolean)

  const others = knowOtherMetadataNames
    .map(otherName => {
      if (otherName === 'qualification') {
        return { name: otherName, value: metadata[otherName]?.label }
      }
      return { name: otherName, value: metadata[otherName] }
    })
    .filter(Boolean)

  return [...dates, ...numbers, ...others]
}

export const formatDate = ({ f, lang, date }) => {
  if (lang === 'en') {
    return f(date, 'MM/DD/YYYY')
  }
  return f(date, 'DD/MM/YYYY')
}

/**
 * @param {{ information: string, page: string }} editPathByModelProps
 * @param {string} currentModel
 * @param {string} name
 * @returns {string}
 */
export const buildEditAttributePath = (
  editPathByModelProps,
  currentModel,
  name
) => {
  const currentPath = editPathByModelProps[currentModel]
  return currentPath?.replace(/__NAME__/, name) ?? ''
}
