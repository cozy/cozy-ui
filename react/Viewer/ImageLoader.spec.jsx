import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { createMockClient } from 'cozy-client'
import logger from 'cozy-logger'

import { ImageLoader } from './ImageLoader'
import { checkImageSource } from './checkImageSource'

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

const file = {
  _id: 'image',
  class: 'image',
  name: 'Demo.img',
  mime: 'application/jpeg',
  links: {
    large: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG'
  }
}

const setup = ({ file }) => {
  const root = render(
    <ImageLoader
      file={file}
      linkType="large"
      key={file.id}
      render={src => <img alt={file.name} src={src} data-testid="img_image" />}
      client={client}
    />
  )

  return { root }
}

describe('ImageLoader', () => {
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
})
