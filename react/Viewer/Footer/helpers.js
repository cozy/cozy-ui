import { isValidElement, Children, cloneElement } from 'react'
import { saveFileWithCordova } from 'cozy-client/dist/models/fsnative'
import { isIOS, isMobileApp } from 'cozy-device-helper'

import Alerter from '../../deprecated/Alerter'

export const shouldBeForwardButton = client => {
  const isDrive = client?.appMetadata?.slug === 'drive'
  if (isMobileApp() || (navigator.share && !isDrive)) return true
  return false
}

const isMissingFileError = error => error.status === 404
const downloadFileError = error => {
  return isMissingFileError(error)
    ? 'Viewer.error.downloadFile.missing'
    : 'Viewer.error.missing'
}

/**
 * exportFilesNative - Triggers a prompt to download a file on mobile devices
 *
 * @param {CozyClient} client
 * @param {array} files    One or more files to download
 * @param {string} filename The name of the file that will be saved
 */
export const exportFilesNative = async (client, files, filename) => {
  const downloadAllFiles = files.map(async file => {
    const response = await client
      .collection('io.cozy.files')
      .fetchFileContentById(file.id)

    const blob = await response.blob()
    const filenameToUse = filename ? filename : file.name
    const localFile = await saveFileWithCordova(blob, filenameToUse)
    return localFile.nativeURL
  })

  try {
    Alerter.info('Viewer.alert.preparing', {
      duration: Math.min(downloadAllFiles.length * 2000, 6000)
    })

    const urls = await Promise.all(downloadAllFiles)
    if (urls.length === 1 && isIOS()) {
      // TODO
      // It seems that files: is not well supported on iOS. url seems to work well
      // at with one file. Need to check when severals
      window.plugins.socialsharing.shareWithOptions(
        {
          url: urls[0]
        },
        result => {
          if (result.completed === true) {
            Alerter.success('Viewer.share.success')
          }
        },
        error => {
          throw error
        }
      )
    } else {
      window.plugins.socialsharing.shareWithOptions(
        {
          files: urls
        },
        null,
        error => {
          throw error
        }
      )
    }
  } catch (error) {
    Alerter.error(downloadFileError(error))
  }
}

export const mapToAllChildren = (children, cb) => {
  return Children.map(children, child => {
    if (!isValidElement(child)) return child

    const grandchildren = child.props.children
    if (grandchildren) {
      return cloneElement(child, {
        children: mapToAllChildren(grandchildren, cb)
      })
    }

    return cb(child)
  })
}

export const extractChildrenCompByName = ({ children, file, name }) => {
  const ChildrenComp =
    Children.toArray(children).find(child => {
      return child.type.name === name || child.type.displayName === name
    }) || null

  const ChildrenCompWithFile = isValidElement(ChildrenComp)
    ? cloneElement(ChildrenComp, {
        file
      })
    : null

  return ChildrenCompWithFile
}
