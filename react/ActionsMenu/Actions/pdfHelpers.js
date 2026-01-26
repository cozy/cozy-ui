import { PDFDocument, StandardFonts } from 'pdf-lib'

/**
 * Wrap a string into multiple lines based on available width.
 *
 * @param {object} opts
 * @param {import('pdf-lib').PDFFont} opts.font - Embedded pdf-lib font
 * @param {number} opts.fontSize - Font size
 * @param {number} opts.maxLineWidth - Max line width in PDF units
 * @param {string} opts.line - Text to wrap
 * @returns {string[]} Wrapped lines
 */
export const wrapTextToLines = ({ font, fontSize, maxLineWidth, line }) => {
  if (!line) return []
  if (fontSize <= 0 || maxLineWidth <= 0) return [line]

  const words = line.split(' ')

  return words.reduce((lines, word) => {
    const currentLine = lines[lines.length - 1]

    if (!currentLine) {
      return [word]
    }

    const testLine = `${currentLine} ${word}`
    const testWidth = font.widthOfTextAtSize(testLine, fontSize)

    if (testWidth <= maxLineWidth) {
      lines[lines.length - 1] = testLine
    } else {
      lines.push(word)
    }

    return lines
  }, [])
}

/**
 * Add a new page if there is not enough space to draw a new line.
 *
 * @param {object} opts
 * @param {PDFDocument} opts.pdfDoc - pdf-lib document
 * @param {import('pdf-lib').PDFPage} opts.page - Current page
 * @param {number} opts.y - Current y cursor position
 * @param {number} opts.requiredHeight - Height required before adding a new page
 * @param {number} opts.marginTop - Top margin
 * @param {number} opts.marginBottom - Bottom margin
 * @returns {{ page: import('pdf-lib').PDFPage, y: number }} Updated page and y
 */
export const pushNewPageIfNeeded = ({
  pdfDoc,
  page,
  y,
  requiredHeight,
  marginTop,
  marginBottom
}) => {
  if (!pdfDoc || !page) {
    throw new Error('pdfDoc and page are required')
  }

  const { width, height } = page.getSize()

  if (y - requiredHeight < marginBottom) {
    const newPage = pdfDoc.addPage([width, height])
    return {
      page: newPage,
      y: height - marginTop
    }
  }

  return { page, y }
}

/**
 * Draws a plain text string onto a PDF, wrapping lines to max width and handling page breaks.
 *
 * @param {object} opts
 * @param {PDFDocument} opts.pdfDoc - pdf-lib document
 * @param {import('pdf-lib').PDFPage} opts.page - Current page
 * @param {number} opts.y - Current y cursor position
 * @param {string} opts.text - Text to draw
 * @param {import('pdf-lib').PDFFont} opts.font - Embedded pdf-lib font
 * @param {number} opts.fontSize - Font size
 * @param {number} opts.lineHeight - Line height
 * @param {number} opts.marginX - Left margin
 * @param {number} opts.marginY - Top/bottom margin
 * @param {number} opts.maxLineWidth - Max line width in PDF units
 * @returns {{ page: import('pdf-lib').PDFPage, y: number }} Updated page and y
 */
export const drawWrappedText = ({
  pdfDoc,
  page,
  y,
  text,
  font,
  fontSize,
  lineHeight,
  marginX,
  marginY,
  maxLineWidth
}) => {
  let currentPage = page
  let currentY = y

  const paragraphs = String(text ?? '').split(/\r?\n/)

  const renderItems = paragraphs.flatMap(paragraph => {
    const wrappedLines = wrapTextToLines({
      font,
      fontSize,
      maxLineWidth,
      line: paragraph
    })

    return [...wrappedLines, { type: 'paragraphGap' }]
  })

  for (const item of renderItems) {
    if (typeof item === 'object' && item.type === 'paragraphGap') {
      currentY -= lineHeight / 2
      continue
    }

    const nextState = pushNewPageIfNeeded({
      pdfDoc,
      page: currentPage,
      y: currentY,
      requiredHeight: lineHeight,
      marginTop: marginY,
      marginBottom: marginY
    })

    currentPage = nextState.page
    currentY = nextState.y

    currentPage.drawText(item, {
      x: marginX,
      y: currentY - fontSize,
      size: fontSize,
      font
    })

    currentY -= lineHeight
  }

  return { page: currentPage, y: currentY }
}

/**
 * Creates a PDF Blob from a plain text string.
 *
 * @param {string} text - Text content to put into the PDF
 * @returns {Promise<Blob>} PDF file as a Blob
 */
export const makePdfBlobFromText = async text => {
  const pdfDoc = await PDFDocument.create()
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const CONFIG = {
    fontSize: 12,
    lineHeight: 16,
    marginX: 40,
    marginY: 40,
    pageSize: [595.28, 841.89] // A4
  }

  const maxLineWidth = CONFIG.pageSize[0] - CONFIG.marginX * 2
  const initialPage = pdfDoc.addPage(CONFIG.pageSize)

  drawWrappedText({
    pdfDoc,
    page: initialPage,
    y: CONFIG.pageSize[1] - CONFIG.marginY,
    text,
    font,
    fontSize: CONFIG.fontSize,
    lineHeight: CONFIG.lineHeight,
    marginX: CONFIG.marginX,
    marginY: CONFIG.marginY,
    maxLineWidth
  })

  const pdfBytes = await pdfDoc.save()
  return new Blob([pdfBytes], { type: 'application/pdf' })
}
