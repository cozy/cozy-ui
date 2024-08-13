import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { BreakpointsProvider } from '../../providers/Breakpoints'
import DemoProvider from '../docs/DemoProvider'

import VideoViewer from './VideoViewer'

const file = {
  _id: 'video',
  class: 'video',
  mime: 'video/mp4',
  name: 'sample.mp4'
}

const setup = () => {
  const root = render(
    <DemoProvider>
      <BreakpointsProvider>
        <VideoViewer file={file} />
      </BreakpointsProvider>
    </DemoProvider>
  )

  return { root }
}

describe('VideoViewer', () => {
  it('should render a spinner then the video viewer', async () => {
    const { root } = setup()
    const { container, queryByRole } = root

    expect(queryByRole('progressbar')).toBeTruthy()

    await waitFor(() => {
      expect(queryByRole('progressbar')).toBeFalsy()
      expect(container).toMatchSnapshot()
    })
  })
})
