import { isMobile as isMobileDevice } from 'cozy-device-helper'

import { isPlainText, getViewerComponentName } from './helpers'

jest.mock('cozy-device-helper', () => ({
  ...jest.requireActual('cozy-device-helper'),
  isMobile: jest.fn()
}))
jest.mock('./ShortcutViewer', () => 'ShortcutViewer')
jest.mock('./ImageViewer', () => 'ImageViewer')
jest.mock('./AudioViewer', () => 'AudioViewer')
jest.mock('./AudioViewer', () => 'AudioViewer')
jest.mock('./VideoViewer', () => 'VideoViewer')
jest.mock('./PdfJsViewer', () => 'PdfJsViewer')
jest.mock('./PdfMobileViewer', () => 'PdfMobileViewer')
jest.mock('./TextViewer', () => 'TextViewer')
jest.mock('./OnlyOfficeViewer', () => 'OnlyOfficeViewer')
jest.mock('./NoViewer', () => 'NoViewer')

describe('getViewerComponentName', () => {
  beforeEach(() => {
    isMobileDevice.mockReturnValue(false)
  })

  it('should return the correct component', () => {
    expect(getViewerComponentName({ file: { class: 'shortcut' } })).toBe(
      'ShortcutViewer'
    )
    expect(getViewerComponentName({ file: { class: 'image' } })).toBe(
      'ImageViewer'
    )
    expect(getViewerComponentName({ file: { class: 'audio' } })).toBe(
      'AudioViewer'
    )
    expect(getViewerComponentName({ file: { class: 'video' } })).toBe(
      'VideoViewer'
    )
    isMobileDevice.mockReturnValue(true)
    expect(getViewerComponentName({ file: { class: 'video' } })).toBe(
      'NoViewer'
    )
    isMobileDevice.mockReturnValue(false)
    expect(
      getViewerComponentName({ file: { class: 'pdf' }, isDesktop: false })
    ).toBe('PdfMobileViewer')
    expect(
      getViewerComponentName({ file: { class: 'pdf' }, isDesktop: true })
    ).toBe('PdfJsViewer')
    expect(
      getViewerComponentName({
        file: {
          class: 'text',
          mime: 'text/plain',
          name: 'test.txt'
        }
      })
    ).toBe('TextViewer')
    expect(
      getViewerComponentName({
        file: { class: 'text', name: 'test.docx' },
        isOnlyOfficeEnabled: true
      })
    ).toBe('OnlyOfficeViewer')
    expect(
      getViewerComponentName({
        file: { class: 'text', name: 'test.docx' },
        isOnlyOfficeEnabled: false
      })
    ).toBe('NoViewer')
    expect(
      getViewerComponentName({
        file: { class: 'slide' },
        isOnlyOfficeEnabled: true
      })
    ).toBe('OnlyOfficeViewer')
    expect(
      getViewerComponentName({
        file: { class: 'slide' },
        isOnlyOfficeEnabled: false
      })
    ).toBe('NoViewer')
    expect(
      getViewerComponentName({
        file: { class: 'spreadsheet' },
        isOnlyOfficeEnabled: true
      })
    ).toBe('OnlyOfficeViewer')
    expect(
      getViewerComponentName({
        file: { class: 'spreadsheet' },
        isOnlyOfficeEnabled: false
      })
    ).toBe('NoViewer')
    expect(
      getViewerComponentName({
        file: { class: 'notSupportedClass' }
      })
    ).toBe('NoViewer')
  })
})

describe('isPlainText', () => {
  describe('using mime types', () => {
    it('should match mime types starting with "text/"', () => {
      expect(isPlainText('text/plain')).toBe(true)
      expect(isPlainText('text/markdown')).toBe(true)
      expect(isPlainText('application/text')).toBe(false)
      expect(isPlainText('something/text/else')).toBe(false)
      expect(isPlainText('text/vnd.cozy.note+markdown')).toBe(true)
    })

    it('should not match complex text formats', () => {
      expect(isPlainText('application/msword')).toBe(false)
      expect(isPlainText('application/vnd.oasis.opendocument.text')).toBe(false)
      expect(isPlainText('application/x-iwork-pages-sffpages')).toBe(false)
    })

    it('should not use the filename if a mime type is present', () => {
      expect(isPlainText('application/msword', 'iswearitstext.txt')).toBe(false)
    })
  })

  describe('using file names', () => {
    it('should match txt files', () => {
      expect(isPlainText(undefined, 'iswearitstext.txt')).toBe(true)
    })

    it('should match md files', () => {
      expect(isPlainText(undefined, 'markdown.md')).toBe(true)
    })

    it('should not match anything else', () => {
      expect(isPlainText(undefined, 'file.doc')).toBe(false)
      expect(isPlainText(undefined, 'file.docx')).toBe(false)
      expect(isPlainText(undefined, 'file.pages')).toBe(false)
      expect(isPlainText(undefined, 'file.odt')).toBe(false)
      expect(isPlainText(undefined, 'file.csv')).toBe(false)
      expect(isPlainText(undefined, 'file.vcf')).toBe(false)
    })
  })
})
