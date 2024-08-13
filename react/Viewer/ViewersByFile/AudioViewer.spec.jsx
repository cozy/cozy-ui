import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { BreakpointsProvider } from '../../providers/Breakpoints'

import DemoProvider from '../docs/DemoProvider'

import AudioViewer from './AudioViewer'

const file = {
  _id: 'audio',
  class: 'audio',
  mime: 'audio/mp3',
  name: 'sample.mp3'
}

const setup = () => {
  const root = render(
    <DemoProvider>
      <BreakpointsProvider>
        <AudioViewer file={file} />
      </BreakpointsProvider>
    </DemoProvider>
  )

  return { root }
}

describe('AudioViewer', () => {
  it('should render a spinner then the audio viewer', async () => {
    const { root } = setup()
    const { container, queryByRole } = root

    expect(queryByRole('progressbar')).toBeTruthy()

    await waitFor(() => {
      expect(queryByRole('progressbar')).toBeFalsy()
      expect(container).toMatchSnapshot()
    })
  })
})
