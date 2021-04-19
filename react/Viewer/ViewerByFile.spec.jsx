import { isMobile as isMobileDevice } from 'cozy-device-helper'

import { getViewerComponentName } from './ViewerByFile'

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
