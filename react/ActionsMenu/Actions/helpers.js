import { PDFDocument } from 'pdf-lib'
import { fetchBlobFileById } from 'cozy-client/dist/models/file'

// Should guarantee good resolution for different uses (printing, downloading, etc.)
const MAX_RESIZE_IMAGE_SIZE = 3840
const MAX_IMAGE_SIDE_SIZE = 1920

/**
 * Make array of actions and hydrate actions with options
 *
 * @param {Function[]} actions - Array of actions with associated actions and conditions
 * @param {object} actionOptions - Options that need to be passed on actions
 * @returns {object[]} Array of actions
 */
export const makeActions = (actions = [], options = {}) => {
  return actions.filter(Boolean).map(actionFn => {
    const action = actionFn(options)
    const name = action.name || actionFn.name

    return { [name]: action }
  })
}

export const getActionName = actionObject => {
  return Object.keys(actionObject)[0]
}

// We need to clean Actions since action has a displayable
// conditions and we can't know from the begining what the
// behavior will be. For instance, we can't know that
// hr will be the latest action in the sharing views for a
// folder.
// Or we can't know that we'll have two following hr if the
// display condition for the actions between are true or false
export const getOnlyNeededActions = (actions, docs) => {
  let previousAction = ''
  const displayableActions = actions.filter(actionObject => {
    const actionDefinition = Object.values(actionObject)[0]

    return (
      !actionDefinition.displayCondition ||
      actionDefinition.displayCondition(docs)
    )
  })

  return (
    displayableActions
      // We do not want to display the same 2 actions in a row
      .map(actionObject => {
        const actionName = getActionName(actionObject)

        if (previousAction === actionName) {
          previousAction = actionName
          return null
        } else {
          previousAction = actionName
        }

        return actionObject
      })
      .filter(Boolean)
      // We don't want to have an hr/divider as the latest actions available
      .filter((cleanedAction, idx, cleanedActions) => {
        return !(
          (getActionName(cleanedAction) === 'hr' ||
            getActionName(cleanedAction) === 'divider') &&
          idx === cleanedActions.length - 1
        )
      })
  )
}

/**
 * Make a base64 string from a File object
 * @param {File} file - File object
 * @returns {Promise<string | null>} base64 string
 */
export const makeBase64FromFile = async file => {
  const reader = new FileReader()
  reader.readAsDataURL(file)

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const base64 = reader.result
      resolve(base64)
    }
    reader.onerror = err => {
      reject(err)
    }
  })
}

/**
 * @param {HTMLImageElement} image
 * @returns {number}
 */
const getImageScaleRatio = image => {
  const longerSideSizeInPixel = Math.max(image.height, image.width)
  let scaleRatio = 1
  if (MAX_RESIZE_IMAGE_SIZE < longerSideSizeInPixel) {
    scaleRatio = MAX_RESIZE_IMAGE_SIZE / longerSideSizeInPixel
  }

  return scaleRatio
}

/**
 * @param {object} opts
 * @param {string} opts.base64 - Base64 of image
 * @returns {Promise<string>}
 */
const resizeImage = async ({ base64: fileDataUri }) => {
  return new Promise((resolve, reject) => {
    const newImage = new Image()
    newImage.src = fileDataUri
    newImage.onerror = reject
    newImage.onload = () => {
      const canvas = document.createElement('canvas')
      const scaleRatio = getImageScaleRatio(newImage)
      const scaledWidth = scaleRatio * newImage.width
      const scaledHeight = scaleRatio * newImage.height
      const quality =
        scaledWidth >= MAX_IMAGE_SIDE_SIZE ||
        scaledHeight >= MAX_IMAGE_SIDE_SIZE
          ? 0.35
          : 0.75

      canvas.width = scaledWidth
      canvas.height = scaledHeight
      canvas
        .getContext('2d')
        .drawImage(newImage, 0, 0, scaledWidth, scaledHeight)

      resolve(canvas.toDataURL('image/jpeg', quality))
    }
  })
}

/**
 * @param {File} file
 * @returns {Promise<string>}
 */
const fileToDataUri = async file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.onerror = reject
    reader.onload = e => resolve(e.target.result)
    reader.readAsDataURL(file)
  })
}

/**
 * Compress image and add it to pdf
 * @param {PDFDocument} pdfDoc
 * @param {File} file
 * @returns {Promise<void>}
 */
const addImageToPdf = async (pdfDoc, file) => {
  const fileDataUri = await fileToDataUri(file)
  const resizedImage = await resizeImage({
    base64: fileDataUri
  })
  const img = await pdfDoc.embedJpg(resizedImage)

  const page = pdfDoc.addPage([img.width, img.height])
  const { width: pageWidth, height: pageHeight } = page.getSize()
  page.drawImage(img, {
    x: pageWidth / 2 - img.width / 2,
    y: pageHeight / 2 - img.height / 2,
    width: img.width,
    height: img.height
  })
}

/**
 * @param {File} file
 * @returns {Promise<ArrayBuffer>}
 */
const fileToArrayBuffer = async file => {
  if ('arrayBuffer' in file) return await file.arrayBuffer()

  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.onerror = reject
    reader.onload = e => resolve(new Uint8Array(e.target.result))
    reader.readAsArrayBuffer(file)
  })
}

/**
 * @param {PDFDocument} pdfDoc
 * @param {File} file
 * @returns {Promise<void>}
 */
const addPdfToPdf = async (pdfDoc, file) => {
  const pdfToAdd = await fileToArrayBuffer(file)
  const document = await PDFDocument.load(pdfToAdd)
  const copiedPages = await pdfDoc.copyPages(
    document,
    document.getPageIndices()
  )
  copiedPages.forEach(page => pdfDoc.addPage(page))
}

/**
 * @param {PDFDocument} pdfDoc - Instance of PDFDocument
 * @param {File} file - File to add in pdf
 * @returns {Promise<ArrayBuffer>} - Data of pdf generated
 */
export const addFileToPdf = async (pdfDoc, file) => {
  if (file.type === 'application/pdf') {
    await addPdfToPdf(pdfDoc, file)
  } else {
    await addImageToPdf(pdfDoc, file)
  }
  const pdfDocBytes = await pdfDoc.save()

  return pdfDocBytes
}

/**
 * Fetches file from docs list and return a blob of pdf
 * @param {import('cozy-client/types/CozyClient').default} client - Instance of CozyClient
 * @param {array} docs - Docs from an io.cozy.xxx doctypes
 * @returns {Promise<object>} Blob of generated Pdf
 */
export const makePdfBlob = async (client, docs) => {
  const pdfDoc = await PDFDocument.create()

  for (const doc of docs) {
    const blob = await fetchBlobFileById(client, doc._id)
    await addFileToPdf(pdfDoc, blob)
  }

  const pdfBytes = await pdfDoc.save()

  const bytes = new Uint8Array(pdfBytes)
  const blob = new Blob([bytes], { type: 'application/pdf' })

  return blob
}
