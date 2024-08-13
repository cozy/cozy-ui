import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { BreakpointsProvider } from '../../providers/Breakpoints'
import { checkImageSource } from '../../FileImageLoader/checkImageSource'

import DemoProvider from '../docs/DemoProvider'
import EncryptedProvider from '../providers/EncryptedProvider'

import ImageViewer from './ImageViewer'

jest.mock('../../FileImageLoader/checkImageSource', () => ({
  ...jest.requireActual('../../FileImageLoader/checkImageSource'),
  checkImageSource: jest.fn()
}))

const file = {
  _id: 'image',
  class: 'image',
  mime: 'image/jpg',
  name: 'sample.jpg',
  links: {
    large: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG'
  }
}

const gestures = {
  on: jest.fn(),
  off: jest.fn(),
  get: jest.fn()
}

const setup = () => {
  const root = render(
    <DemoProvider>
      <BreakpointsProvider>
        <EncryptedProvider>
          <ImageViewer
            file={file}
            gestures={gestures}
            gesturesRef={{}}
            onSwipe={jest.fn()}
          />
        </EncryptedProvider>
      </BreakpointsProvider>
    </DemoProvider>
  )

  return { root }
}

describe('ImageViewer', () => {
  afterEach(() => {
    jest.restoreAllMocks
  })

  it('should render a spinner then the image viewer', async () => {
    const { root } = setup()
    const { container, queryByRole } = root

    expect(queryByRole('progressbar')).toBeTruthy()

    // simulate a successfull image loading
    checkImageSource.mockResolvedValue('ok')

    await waitFor(() => container.querySelector('img'))

    const img = container.querySelector('img')
    expect(img.getAttribute('alt')).toBe(file.name)
    expect(img.getAttribute('src')).toBe(file.links.large)
  })
})
