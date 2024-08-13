import { createMockClient } from 'cozy-client'
import {
  KNOWN_DATE_METADATA_NAMES,
  KNOWN_INFORMATION_METADATA_NAMES
} from 'cozy-client/dist/models/paper'

import {
  downloadFile,
  getCurrentModel,
  buildEditAttributePath,
  isEditableAttribute,
  removeFilenameFromPath
} from './helpers'

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
  describe('getCurrentModel', () => {
    const expected = 'information'
    it.each([
      ...KNOWN_DATE_METADATA_NAMES,
      ...KNOWN_INFORMATION_METADATA_NAMES
    ])(`getCurrentModel(%s) should return ${expected}`, input => {
      expect(getCurrentModel(input)).toBe(expected)
    })
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
  describe('removeFilenameFromPath', () => {
    it('should handle all types of path', () => {
      expect(removeFilenameFromPath('/folder/7IsD.gif', '7IsD.gif')).toBe(
        '/folder'
      )

      expect(removeFilenameFromPath('/7IsD.gif', '7IsD.gif')).toBe('/')

      expect(removeFilenameFromPath('//7IsD.gif', '7IsD.gif')).toBe('/')

      expect(removeFilenameFromPath('/7IsD.gif/7IsD.gif', '7IsD.gif')).toBe(
        '/7IsD.gif'
      )
    })
  })
})
