import React from 'react'
import { render } from '@testing-library/react'
import Banner from '.'

describe('Grid', () => {
  it('should render correctly justify content', () => {
    // Given
    console.error = jest.fn()

    // When
    const { container } = render(<Banner buttonOne={<button />} />)

    // Then
    expect(console.error).not.toHaveBeenCalled()
    expect(
      container.querySelector('.MuiGrid-justify-content-xs-space-between')
    ).toBeInTheDocument()
  })
})
