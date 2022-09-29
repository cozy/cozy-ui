import { models } from 'cozy-client'
const {
  isEncrypted,
  isFromKonnector,
  hasQualifications,
  hasCertifications
} = models.file

export const knownDateMetadataNames = [
  'AObtentionDate',
  'BObtentionDate',
  'CObtentionDate',
  'DObtentionDate',
  'obtentionDate',
  'expirationDate',
  'referencedDate',
  'issueDate',
  'shootingDate',
  'date',
  'datetime'
]
export const knownInformationMetadataNames = [
  'number',
  'cardNumber',
  'vinNumber',
  'ibanNumber',
  'country'
]
export const knownOtherMetadataNames = ['contact', 'page', 'qualification']

export const getCurrentModel = metadataName => {
  if (
    knownDateMetadataNames.includes(metadataName) ||
    knownInformationMetadataNames.includes(metadataName)
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
    hasCertifications(file) || hasQualifications(file) || isFromKonnector(file)
  )
}

export const downloadFile = async ({ client, file, url }) => {
  if (isEncrypted(file)) {
    return client.collection('io.cozy.files').forceFileDownload(url, file.name)
  }
  return client.collection('io.cozy.files').download(file)
}

export const isFileEncrypted = file => isEncrypted(file)

const makeMetadataQualification = ({ metadata, knownMetadataName, value }) => {
  const shouldReturnThisMetadata = Object.keys(metadata).includes(
    knownMetadataName
  )

  if (shouldReturnThisMetadata || knownMetadataName === 'contact') {
    return { name: knownMetadataName, value: value || null }
  }
}

/**
 * @param {Object} metadata
 * @returns {{ name: string, value: string }[]} Array of formated metadata
 */
export const formatMetadataQualification = metadata => {
  const dates = knownDateMetadataNames
    .map(dateName =>
      makeMetadataQualification({
        metadata,
        knownMetadataName: dateName,
        value: metadata[dateName]
      })
    )
    .filter(Boolean)
    .filter((data, _, arr) => {
      if (arr.length > 1) return data.name !== 'datetime'
      return data
    })

  const informations = knownInformationMetadataNames
    .map(numberName =>
      makeMetadataQualification({
        metadata,
        knownMetadataName: numberName,
        value: metadata[numberName]
      })
    )
    .filter(Boolean)

  const others = knownOtherMetadataNames
    .map(otherName => {
      const value =
        otherName === 'qualification'
          ? metadata[otherName]?.label
          : metadata[otherName]

      return makeMetadataQualification({
        metadata,
        knownMetadataName: otherName,
        value
      })
    })
    .filter(Boolean)

  return [...dates, ...informations, ...others]
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

export const isEditableAttribute = (name, file) => {
  const isNotEditableAttributes = ['datetime', 'qualification']

  return (
    !isNotEditableAttributes.includes(name) &&
    ((name === 'issueDate' && !isFromKonnector(file)) || name !== 'issueDate')
  )
}
