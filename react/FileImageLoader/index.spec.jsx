import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { createMockClient } from 'cozy-client'
import logger from 'cozy-logger'

import { FileImageLoader } from '.'
import { checkImageSource } from './checkImageSource'
import EncryptedProvider from '../Viewer/providers/EncryptedProvider'

jest.mock('./checkImageSource', () => ({
  ...jest.requireActual('./checkImageSource'),
  checkImageSource: jest.fn()
}))

logger.error = logger.warn = jest.fn()

const client = createMockClient({})
const getMock = jest.fn()
const getDownloadLinkByIdMock = jest.fn()
client.collection = jest.fn(() => ({
  getDownloadLinkById: getDownloadLinkByIdMock,
  get: getMock
}))
client.plugins.realtime = {
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  unsubscribeAll: jest.fn()
}

const file = {
  _id: 'image',
  class: 'image',
  name: 'Demo.img',
  mime: 'application/jpeg',
  links: {
    large: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG'
  }
}

const setup = ({ file, url }) => {
  const root = render(
    <EncryptedProvider url={url}>
      <FileImageLoader
        file={file}
        linkType="large"
        key={file.id}
        render={src => (
          <img alt={file.name} src={src} data-testid="img_image" />
        )}
        renderFallback={() => (
          <img
            alt="render fallback"
            src="http://url.img_image_render_fallback/"
            data-testid="img_image_renderFallback"
          />
        )}
        client={client}
      />
    </EncryptedProvider>
  )

  return { root }
}

describe('FileImageLoader', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should set the source of image to links.large if no error', async () => {
    const { root } = setup({ file })
    const { getByTestId } = root

    checkImageSource.mockResolvedValue('ok')
    await waitFor(() => getByTestId('img_image'))

    const img = getByTestId('img_image')
    expect(img.src).toEqual(file.links.large)
  })

  it('should use URL when set', async () => {
    const url = 'blob:http://theimageblob'
    const { root } = setup({ file, url })
    const { getByTestId } = root
    checkImageSource.mockResolvedValue('ok')
    await waitFor(() => getByTestId('img_image'))

    const img = getByTestId('img_image')
    expect(img.src).toEqual(url)
    expect(getMock).not.toHaveBeenCalled()
  })

  it('should makes a request to fetch links if the links is not right anymore', async () => {
    const file = {
      _id: 'image',
      class: 'image',
      name: 'Demo.img',
      mime: 'application/jpeg',
      links: {
        large: 'https://url.not.valid.anymore'
      }
    }

    checkImageSource.mockRejectedValueOnce('KO')
    const { root } = setup({ file })
    const { getByTestId } = root
    getMock.mockResolvedValue({
      data: {
        links: {
          large: 'http://urlvalid'
        }
      }
    })
    checkImageSource.mockResolvedValueOnce('OK')
    await waitFor(() => getByTestId('img_image'))

    const img = getByTestId('img_image')
    expect(img.src).toEqual('http://urlvalid/')
    expect(getMock).toHaveBeenCalled()
  })

  it('should fallback to fallback if other request failed ', async () => {
    const file = {
      _id: 'image',
      class: 'image',
      name: 'Demo.img',
      mime: 'application/jpeg',
      links: {
        large: 'https://url.not.valid.anymore'
      }
    }
    checkImageSource.mockRejectedValueOnce('KO')
    const { root } = setup({ file })
    const { getByTestId } = root
    getMock.mockResolvedValue({
      data: {
        links: {
          large: 'http://urlnotvalidneither'
        }
      }
    })
    checkImageSource.mockRejectedValueOnce('KO')
    getDownloadLinkByIdMock.mockResolvedValue('http://valid/')
    await waitFor(() => getByTestId('img_image'))

    const img = getByTestId('img_image')
    expect(img.src).toEqual('http://valid/')
  })

  it('should render fallback component if other request failed & file is a PDF', async () => {
    const file = {
      _id: 'pdf',
      class: 'pdf',
      name: 'Demo.pdf',
      mime: 'application/pdf',
      links: {
        icon: 'https://url.not.valid.anymore'
      }
    }
    checkImageSource.mockRejectedValueOnce('KO')
    const { root } = setup({ file })
    const { getByTestId } = root
    getMock.mockResolvedValue({
      data: {
        links: {
          icon: 'http://urlnotvalidneither'
        }
      }
    })
    await waitFor(() => getByTestId('img_image_renderFallback'))

    const img = getByTestId('img_image_renderFallback')
    expect(img.src).toEqual('http://url.img_image_render_fallback/')
  })
})
