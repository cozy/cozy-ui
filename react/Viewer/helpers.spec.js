import { createMockClient } from 'cozy-client'

import {
  downloadFile,
  isPlainText,
  formatMetadataQualification,
  getCurrentModel,
  buildEditAttributePath,
  knownDateMetadataNames,
  knowInformationMetadataNames
} from './helpers'

const fakeMetadata = {
  number: '111111',
  cardNumber: '222222',
  vinNumber: '333333',
  ibanNumber: '444444',
  AObtentionDate: '2029-12-01T23:00:00.000Z',
  BObtentionDate: '2029-12-02T23:00:00.000Z',
  CObtentionDate: '2029-12-03T23:00:00.000Z',
  DObtentionDate: '2029-12-04T23:00:00.000Z',
  expirationDate: '2029-12-05T23:00:00.000Z',
  referencedDate: '2029-12-06T23:00:00.000Z',
  issueDate: '2029-12-07T23:00:00.000Z',
  shootingDate: '2029-12-08T23:00:00.000Z',
  date: '2029-12-09T23:00:00.000Z',
  datetime: '2029-12-10T23:00:00.000Z',
  qualification: { label: 'fake_label' },
  page: 'front',
  contact: 'Alice Durand'
}

const computedMetadata = [
  { name: 'AObtentionDate', value: '2029-12-01T23:00:00.000Z' },
  { name: 'BObtentionDate', value: '2029-12-02T23:00:00.000Z' },
  { name: 'CObtentionDate', value: '2029-12-03T23:00:00.000Z' },
  { name: 'DObtentionDate', value: '2029-12-04T23:00:00.000Z' },
  { name: 'expirationDate', value: '2029-12-05T23:00:00.000Z' },
  { name: 'referencedDate', value: '2029-12-06T23:00:00.000Z' },
  { name: 'issueDate', value: '2029-12-07T23:00:00.000Z' },
  { name: 'shootingDate', value: '2029-12-08T23:00:00.000Z' },
  { name: 'date', value: '2029-12-09T23:00:00.000Z' },
  { name: 'number', value: '111111' },
  { name: 'cardNumber', value: '222222' },
  { name: 'vinNumber', value: '333333' },
  { name: 'ibanNumber', value: '444444' },
  { name: 'contact', value: 'Alice Durand' },
  { name: 'page', value: 'front' },
  { name: 'qualification', value: 'fake_label' }
]

describe('helpers', () => {
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
        expect(isPlainText('application/vnd.oasis.opendocument.text')).toBe(
          false
        )
        expect(isPlainText('application/x-iwork-pages-sffpages')).toBe(false)
      })

      it('should not use the filename if a mime type is present', () => {
        expect(isPlainText('application/msword', 'iswearitstext.txt')).toBe(
          false
        )
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
  describe('download', () => {
    const client = new createMockClient({})
    const mockDownload = jest.fn()
    const mockForceFileDownload = jest.fn()
    client.collection = jest.fn(() => ({
      download: mockDownload,
      forceFileDownload: mockForceFileDownload
    }))

    it('should call download when file is not encrypted', async () => {
      const file = { name: 'toto.txt' }

      await downloadFile({ client, file })
      expect(mockDownload).toHaveBeenCalledWith(file)
    })

    it('should call forceFileDownload when file is encrypted', async () => {
      const file = { name: 'encrypted-toto.txt', encrypted: true }
      const url = 'blob:http://thedecryptedtoto'
      await downloadFile({ client, file, url })
      expect(mockForceFileDownload).toHaveBeenCalledWith(url, file.name)
    })
  })
  describe('computeMetadataQualification', () => {
    it('should return correctly formatted metadata', () => {
      const res = formatMetadataQualification(fakeMetadata)
      expect(res).toEqual(computedMetadata)
    })
  })
  describe('getCurrentModel', () => {
    const expected = 'information'
    it.each([...knownDateMetadataNames, ...knowInformationMetadataNames])(
      `getCurrentModel(%s) should return ${expected}`,
      input => {
        expect(getCurrentModel(input)).toBe(expected)
      }
    )
  })
  describe('buildEditAttributePath', () => {
    it('should build correct path', () => {
      const editPathByModelProps = {
        information: `#/paper/edit/information/01?metadata=__NAME__&backgroundPath=$/path`,
        page: `#/paper/edit/page/01?backgroundPath=/path`
      }

      const buildInformationPath = buildEditAttributePath(
        editPathByModelProps,
        'information',
        'cardNumber'
      )
      const buildPagePath = buildEditAttributePath(
        editPathByModelProps,
        'page',
        'cardNumber'
      )

      expect(buildInformationPath).toBe(
        '#/paper/edit/information/01?metadata=cardNumber&backgroundPath=$/path'
      )
      expect(buildPagePath).toBe('#/paper/edit/page/01?backgroundPath=/path')
    })
  })
})
