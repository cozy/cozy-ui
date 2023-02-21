import React from 'react'
import { render } from '@testing-library/react'

import DemoProvider from '../docs/DemoProvider'

import NoViewer from './NoViewer'

const file = {
  _id: 'notSupported',
  class: 'notSupported',
  mime: 'notSupported',
  name: 'notSupported.xyz'
}

const setup = ({ renderFallbackExtraContent } = {}) => {
  const root = render(
    <DemoProvider>
      <NoViewer
        file={file}
        renderFallbackExtraContent={renderFallbackExtraContent}
      />
    </DemoProvider>
  )

  return { root }
}

describe('NoViewer', () => {
  it('should render the viewer', () => {
    const { root } = setup()
    const { container } = root

    expect(container).toMatchSnapshot()
  })

  it('should render the viewer with specific extra content', () => {
    const renderFallbackExtraContent = () => (
      <div>with specific extra content</div>
    )
    const { root } = setup({ renderFallbackExtraContent })
    const { container } = root

    expect(container).toMatchSnapshot()
  })
})
