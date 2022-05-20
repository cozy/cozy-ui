import React from 'react'
import { render } from '@testing-library/react'

import FooterActionButtons from './FooterActionButtons'

describe('FooterActionButtons', () => {
  it('should not return children', () => {
    const { container } = render(<FooterActionButtons />)

    expect(container).toMatchInlineSnapshot('<div />')
  })

  it('should render all childrens', () => {
    const { getByText } = render(
      <FooterActionButtons>
        <div>
          <p>First child</p>
          <div>
            <p>Sub first children</p>
          </div>
        </div>
        <div>Second child</div>
      </FooterActionButtons>
    )

    expect(getByText('First child'))
    expect(getByText('Sub first children'))
    expect(getByText('Second child'))
  })
})
