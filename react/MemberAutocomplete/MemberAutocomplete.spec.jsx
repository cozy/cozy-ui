import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import MemberAutocomplete from '.'
import DemoProvider from '../providers/DemoProvider'

const getMembersFromText = text =>
  (text.match(/[^\s,;]+@[^\s,;]+/g) || []).map(email => ({
    id: email,
    name: email
  }))

describe('MemberAutocomplete', () => {
  const setup = () => {
    const onChange = jest.fn()
    render(
      <DemoProvider>
        <MemberAutocomplete
          value={[]}
          getMembersFromText={getMembersFromText}
          placeholder="Add people"
          onChange={onChange}
        />
      </DemoProvider>
    )
    return { onChange, input: screen.getByPlaceholderText('Add people') }
  }

  it('adds a member per pasted email', () => {
    const { onChange, input } = setup()

    fireEvent.paste(input, {
      clipboardData: { getData: () => 'alice@cozy.cc, bob@cozy.cc' }
    })

    expect(onChange).toHaveBeenCalledWith([
      { id: 'alice@cozy.cc', name: 'alice@cozy.cc' },
      { id: 'bob@cozy.cc', name: 'bob@cozy.cc' }
    ])
  })

  it('adds the typed email on Space', () => {
    const { onChange, input } = setup()

    fireEvent.change(input, { target: { value: 'alice@cozy.cc' } })
    fireEvent.keyDown(input, { key: ' ' })

    expect(onChange).toHaveBeenCalledWith([
      { id: 'alice@cozy.cc', name: 'alice@cozy.cc' }
    ])
  })

  it('adds the typed email when leaving the field', () => {
    const { onChange, input } = setup()

    fireEvent.change(input, { target: { value: 'alice@cozy.cc' } })
    fireEvent.blur(input)

    expect(onChange).toHaveBeenCalledWith([
      { id: 'alice@cozy.cc', name: 'alice@cozy.cc' }
    ])
  })

  it('keeps the typed text when the picked members come in a new array', () => {
    const alice = { id: 'alice', name: 'Alice' }
    const renderField = value => (
      <DemoProvider>
        <MemberAutocomplete
          value={value}
          placeholder="Add people"
          onChange={() => {}}
        />
      </DemoProvider>
    )
    const { rerender } = render(renderField([alice]))
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'bo' } })
    rerender(renderField([alice]))

    expect(input.value).toBe('bo')
  })
})
