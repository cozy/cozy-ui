import { render, screen } from '@testing-library/react'
import React from 'react'

import Alert from '.'

const setup = block =>
  render(
    <Alert block={block} action={<button>Show</button>}>
      Remote images hidden
    </Alert>
  ).container.firstChild

describe('Alert', () => {
  it.each([
    [true, ['block'], ['blockStart', 'blockCenter']],
    ['end', ['block'], ['blockStart', 'blockCenter']],
    ['start', ['block', 'blockStart'], ['blockCenter']],
    ['center', ['block', 'blockCenter'], ['blockStart']],
    [false, [], ['block', 'blockStart', 'blockCenter']]
  ])('block=%p puts its action on the side it asks', (block, has, hasNot) => {
    const root = setup(block)

    has.forEach(name => expect(root).toHaveClass(name))
    hasNot.forEach(name => expect(root).not.toHaveClass(name))
    expect(screen.getByRole('button', { name: 'Show' })).toBeTruthy()
  })
})
