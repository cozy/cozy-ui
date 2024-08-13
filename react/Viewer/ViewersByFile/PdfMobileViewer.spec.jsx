import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { CozyProvider, createMockClient } from 'cozy-client'
import logger from 'cozy-logger'

import { I18n } from '../../providers/I18n'

import EncryptedProvider from '../providers/EncryptedProvider'
import { PdfMobileViewer } from './PdfMobileViewer'

logger.error = logger.warn = jest.fn()

const client = createMockClient({})
client.collection = jest.fn(() => ({
  getDownloadLinkById: jest.fn()
}))
client.plugins.realtime = {
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  unsubscribeAll: jest.fn()
}
jest.mock('../../providers/Alert', () => ({
  useAlert: jest.fn().mockReturnValue({ showAlert: jest.fn() })
}))

const file = {
  _id: 'pdf',
  class: 'pdf',
  name: 'Demo.pdf',
  mime: 'application/pdf',
  links: {
    medium: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG'
  }
}

const setup = ({ file }) => {
  const root = render(
    <CozyProvider client={client}>
      <I18n lang="en" dictRequire={() => ''}>
        <EncryptedProvider>
          <PdfMobileViewer file={file} t={x => x} />
        </EncryptedProvider>
      </I18n>
    </CozyProvider>
  )

  return { root }
}

describe('PdfMobileViewer', () => {
  it('should show a spinner if image is not loaded', () => {
    const { root } = setup({ file })
    const { getByRole } = root

    expect(getByRole('progressbar'))
  })

  describe('errors if file as no medium or failed to download', () => {
    let fileWithoutLinks = file

    beforeAll(() => {
      fileWithoutLinks.links = undefined
    })

    it('should show "download" button on browser', async () => {
      const { root } = setup({ file: fileWithoutLinks })
      const { getByText, queryByRole } = root

      await waitFor(() => {
        expect(queryByRole('progressbar')).toBeFalsy()
        expect(getByText('Viewer.download'))
        expect(getByText(file.name))
      })
    })
  })
})
