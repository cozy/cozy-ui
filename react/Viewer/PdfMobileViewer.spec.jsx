import React from 'react'
import { render, wait } from '@testing-library/react'

import { CozyProvider, createMockClient } from 'cozy-client'
import { isMobileApp } from 'cozy-device-helper'

import { I18n } from '../I18n'

import { PdfMobileViewer } from './PdfMobileViewer'
import { ImageLoader } from './ImageLoader'

jest.mock('cozy-device-helper', () => ({
  ...jest.requireActual('cozy-device-helper'),
  isMobileApp: jest.fn()
}))

const client = createMockClient({})
client.collection = jest.fn(() => ({
  getDownloadLinkById: jest.fn()
}))

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
        <PdfMobileViewer file={file} t={x => x} />
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

  describe('error when downloading file', () => {
    it('should show network error message on native app and browser', async () => {
      ImageLoader.prototype.checkImageSource = jest.fn().mockRejectedValue() // fail to load image

      const { root } = setup({ file })
      const { queryByRole, getByText } = root

      const isMobileAppValues = [true, false]

      for (const isMobileAppValue of isMobileAppValues) {
        isMobileApp.mockReturnValue(isMobileAppValue)

        await wait()

        expect(queryByRole('progressbar')).toBeFalsy()
        expect(
          getByText(
            'This file could not be loaded. Do you have a working internet connection right now?'
          )
        )
      }
    })
  })

  describe('error if file as no preview', () => {
    let fileWithoutLinks = file

    beforeAll(() => {
      fileWithoutLinks.links = {}
    })

    it('should show "download" button on browser', () => {
      isMobileApp.mockReturnValue(false)

      const { root } = setup({ file: fileWithoutLinks })
      const { getByText, queryByRole } = root

      expect(queryByRole('progressbar')).toBeFalsy()
      expect(getByText('Download'))
      expect(getByText(file.name))
    })

    it('should show "open with" button on native app', () => {
      isMobileApp.mockReturnValue(true)

      const { root } = setup({ file: fileWithoutLinks })
      const { getByText, queryByRole } = root

      expect(queryByRole('progressbar')).toBeFalsy()
      expect(getByText('Viewer.openWith'))
      expect(getByText(file.name))
    })
  })
})
