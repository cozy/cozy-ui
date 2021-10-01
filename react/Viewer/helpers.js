import has from 'lodash/has'

// TODO : should be in file model of cozy-client
export const isPlainText = (mimeType = '', fileName = '') => {
  return mimeType ? /^text\//.test(mimeType) : /\.(txt|md)$/.test(fileName)
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
  return hasCertifications({ file }) || isFromKonnector({ file })
}
