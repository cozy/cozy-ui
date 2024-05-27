import { generateWebLink } from 'cozy-client'

import {
  isEncrypted,
  isFromKonnector,
  hasQualifications,
  hasCertifications,
  normalize
} from 'cozy-client/dist/models/file'

import {
  KNOWN_DATE_METADATA_NAMES,
  KNOWN_INFORMATION_METADATA_NAMES,
  KNOWN_BILLS_ATTRIBUTES_NAMES
} from 'cozy-client/dist/models/paper'

export const getCurrentModel = metadataName => {
  if (
    KNOWN_DATE_METADATA_NAMES.includes(metadataName) ||
    KNOWN_INFORMATION_METADATA_NAMES.includes(metadataName) ||
    KNOWN_BILLS_ATTRIBUTES_NAMES.includes(metadataName)
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

export const normalizeAndSpreadAttributes = rawFile => {
  const normalizedFile = normalize(rawFile)

  return {
    ...normalizedFile,
    ...normalizedFile?.attributes
  }
}

/**
 * Return a web link to an application in the Cozy environment with the specified path
 * @param {object} param
 * @param {CozyClient} param.client - Instance of CozyClient
 * @param {string} param.slug - Slug of the application
 * @param {string} param.path - Path into the application
 * @returns {string} web link
 */
export const makeWebLink = ({ client, slug, path }) => {
  try {
    const cozyURL = new URL(client.getStackClient().uri)
    const { subdomain: subDomainType } = client.getInstanceOptions()

    return generateWebLink({
      pathname: '/',
      cozyUrl: cozyURL.origin,
      slug,
      hash: path,
      subDomainType
    })
  } catch (e) {
    return null
  }
}

/**
 * Remove the file name at the end of a path
 * @param {string} path
 * @returns {string} new path
 */
export const removeFilenameFromPath = path => {
  const newPath = path.substring(0, path.lastIndexOf('/'))
  return newPath === '' ? '/' : newPath
}
