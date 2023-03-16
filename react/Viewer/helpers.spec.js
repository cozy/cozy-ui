import { createMockClient } from 'cozy-client'

import {
  downloadFile,
  formatMetadataQualification,
  getCurrentModel,
  buildEditAttributePath,
  knownDateMetadataNames,
  knownInformationMetadataNames,
  isEditableAttribute
} from './helpers'

const fakeMetadata = {
  number: '111111',
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
  { name: 'contact', value: 'Alice Durand' },
  { name: 'page', value: 'front' },
  { name: 'qualification', value: 'fake_label' }
]

describe('helpers', () => {
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
    it.each([...knownDateMetadataNames, ...knownInformationMetadataNames])(
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
        'number'
      )
      const buildPagePath = buildEditAttributePath(
        editPathByModelProps,
        'page',
        'number'
      )

      expect(buildInformationPath).toBe(
        '#/paper/edit/information/01?metadata=number&backgroundPath=$/path'
      )
      expect(buildPagePath).toBe('#/paper/edit/page/01?backgroundPath=/path')
    })
  })
  describe('isEditableAttribute', () => {
    const makeFile = ({ fromConnector } = {}) => ({
      _id: '00',
      name: 'file',
      cozyMetadata: fromConnector ? { sourceAccount: '123' } : {}
    })
    describe('file provided by a Connector', () => {
      it('"issueDate" should not be a editable attribute', () => {
        const issueDate = isEditableAttribute(
          'issueDate',
          makeFile({ fromConnector: true })
        )
        expect(issueDate).toBe(false)
      })
      it('"number" should be an editable attribute', () => {
        const number = isEditableAttribute(
          'number',
          makeFile({ fromConnector: true })
        )
        expect(number).toBe(true)
      })
      it('"datetime" should not be an editable attribute', () => {
        const datetime = isEditableAttribute('datetime', makeFile())
        expect(datetime).toBe(false)
      })
      it('"qualification" should not be an editable attribute', () => {
        const qualification = isEditableAttribute('qualification', makeFile())
        expect(qualification).toBe(false)
      })
    })
    describe('file NOT provided by a Connector', () => {
      it('"issueDate" should not be a editable attribute', () => {
        const issueDate = isEditableAttribute('issueDate', makeFile())
        expect(issueDate).toBe(true)
      })
      it('"number" should be a editable attribute', () => {
        const number = isEditableAttribute('number', makeFile())
        expect(number).toBe(true)
      })
      it('"datetime" should not be an editable attribute', () => {
        const datetime = isEditableAttribute('datetime', makeFile())
        expect(datetime).toBe(false)
      })
      it('"qualification" should not be an editable attribute', () => {
        const qualification = isEditableAttribute('qualification', makeFile())
        expect(qualification).toBe(false)
      })
    })
  })
})
