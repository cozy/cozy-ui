import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import ColorList from '.'
import { BreakpointsProvider } from '../providers/Breakpoints'

const setup = props =>
  render(
    <BreakpointsProvider>
      <ColorList {...props} />
    </BreakpointsProvider>
  )

describe('ColorList', () => {
  it('lets a keyboard reach and pick a color', () => {
    const onClick = jest.fn()
    setup({ onClick })

    const color = screen.getByRole('button', { name: '#273891' })
    expect(color.tabIndex).toBe(0)
    fireEvent.keyDown(color, { key: 'Enter' })
    expect(onClick).toHaveBeenCalledWith('#273891')
  })

  it('names its colors and tells the selected one, whatever its case', () => {
    setup({
      selectedColor: '#7e57e3',
      getColorLabel: color => (color === '#7E57E3' ? 'Purple' : color)
    })

    expect(screen.getByRole('button', { name: 'Purple' })).toHaveAttribute(
      'aria-pressed',
      'true'
    )
    expect(screen.getByRole('button', { name: '#273891' })).toHaveAttribute(
      'aria-pressed',
      'false'
    )
  })

  it('passes its props to the custom color button', () => {
    const onClick = jest.fn()
    setup({
      customColorProps: {
        enabled: true,
        onClick,
        'aria-label': 'Custom color',
        'data-testid': 'custom'
      }
    })

    fireEvent.click(screen.getByRole('button', { name: 'Custom color' }))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('custom')).toBeInTheDocument()
  })
})
