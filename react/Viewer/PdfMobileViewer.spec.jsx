import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { CozyProvider, createMockClient } from 'cozy-client'
import { isMobileApp } from 'cozy-device-helper'
import logger from 'cozy-logger'

import { I18n } from '../I18n'

import { PdfMobileViewer } from './PdfMobileViewer'
import EncryptedProvider from './EncryptedProvider'

logger.error = logger.warn = jest.fn()

jest.mock('cozy-device-helper', () => ({
  ...jest.requireActual('cozy-device-helper'),
  isMobileApp: jest.fn()
}))

const client = createMockClient({})
client.collection = jest.fn(() => ({
  getDownloadLinkById: jest.fn()
}))
client.plugins.realtime = {
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  unsubscribeAll: jest.fn()
}

const file = {
  _id: 'pdf',
  class: 'pdf',
  name: 'Demo.pdf',
  mime: 'application/pdf',
  links: {
    preview: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG'
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

  describe('errors if file as no preview or failed to download', () => {
    let fileWithoutLinks = file

    beforeAll(() => {
      fileWithoutLinks.links = undefined
    })

    it('should show "download" button on browser', async () => {
      isMobileApp.mockReturnValue(false)

      const { root } = setup({ file: fileWithoutLinks })
      const { getByText, queryByRole } = root

      await waitFor(() => {
        expect(queryByRole('progressbar')).toBeFalsy()
        expect(getByText('Download'))
        expect(getByText(file.name))
      })
    })

    it('should show "open with" button on native app', async () => {
      isMobileApp.mockReturnValue(true)

      const { root } = setup({ file: fileWithoutLinks })
      const { getByText, queryByRole } = root

      await waitFor(() => {
        expect(queryByRole('progressbar')).toBeFalsy()
        expect(getByText('Viewer.openWith'))
        expect(getByText(file.name))
      })
    })
  })
})
