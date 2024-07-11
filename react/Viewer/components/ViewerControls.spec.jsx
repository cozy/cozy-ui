import React from 'react'
import { render, screen } from '@testing-library/react'

import ViewerControls from './ViewerControls'
import ViewerByFile from './ViewerByFile'

jest.mock('../ViewersByFile/AudioViewer', () => () => <div>AudioViewer</div>)
jest.mock('../providers/EncryptedProvider', () => ({
  useEncrypted: () => ({ url: 'random' })
}))

describe('ViewerControls', () => {
  const file = {
    _id: 'audio',
    class: 'audio',
    mime: 'audio/mp3',
    name: 'sample.mp3'
  }

  const setup = ({ children } = {}) => {
    render(
      <ViewerControls
        file={file}
        onClose={() => {}}
        hasPrevious={false}
        hasNext={false}
        onPrevious={() => {}}
        onNext={() => {}}
        expanded={false}
        toolbarProps={{
          showToolbar: false,
          showClose: false,
          showFilePath: false,
          toolbarRef: undefined
        }}
        showNavigation={false}
      >
        {children}
      </ViewerControls>
    )
  }

  it('should only render children if they are ViewerByFile', () => {
    setup({
      children: [
        undefined,
        <div key="notViewer">not ViewerByFile</div>,
        <ViewerByFile key="viewer" file={file} onClose={() => {}} />
      ]
    })
    expect(screen.queryByText('not ViewerByFile')).not.toBeInTheDocument()
    expect(screen.getByText('AudioViewer')).toBeInTheDocument()
  })
})
