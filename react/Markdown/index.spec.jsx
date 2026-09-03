import { render, screen } from '@testing-library/react'
import React from 'react'

import Markdown from '.'

describe('Markdown', () => {
  it('renders headings and paragraphs', () => {
    render(<Markdown content={'# Title\n\nSome text.'} />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Title')
    expect(screen.getByText('Some text.')).toBeInTheDocument()
  })

  it('renders links that open in a new tab', () => {
    render(<Markdown content="[cozy](https://cozy.io)" />)

    const link = screen.getByRole('link', { name: 'cozy' })

    expect(link).toHaveAttribute('href', 'https://cozy.io')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders strikethrough', () => {
    render(<Markdown content="~~gone~~" />)

    expect(screen.getByText('gone')).toBeInTheDocument()
    expect(document.querySelector('del')).toBeInTheDocument()
  })
})
