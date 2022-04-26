import has from 'lodash/has'
import { models } from 'cozy-client'
const { isEncrypted } = models.file

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

export const isValidForPanel = ({ file }) => {
  return (
    hasCertifications({ file }) ||
    hasQualifications({ file }) ||
    isFromKonnector({ file })
  )
}

export const isFileEncrypted = file => isEncrypted(file)
