import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import DemoProvider from '../ContactsListModal/DemoProvider'
import { BreakpointsProvider } from '../hooks/useBreakpoints'
import contacts from '../ContactsList/_mockContacts.json'

import ContactPicker from '.'

const Wrapper = ({ children }) => {
  return (
    <DemoProvider>
      <BreakpointsProvider>{children}</BreakpointsProvider>
    </DemoProvider>
  )
}

it('should show a contacts list modal when clicking the control', () => {
  const root = render(
    <Wrapper>
      <ContactPicker placeholder="Select a contact" />
    </Wrapper>
  )

  const btn = root.getByText('Select a contact')
  fireEvent.click(btn)
  expect(root.getByRole('dialog')).toBeTruthy()
})

it('should call the onChange function when a contact is being selected', async () => {
  const onChange = jest.fn()
  const root = render(
    <Wrapper>
      <ContactPicker placeholder="Select a contact" onChange={onChange} />
    </Wrapper>
  )

  const btn = root.getByText('Select a contact')
  fireEvent.click(btn)

  const row = await root.findByText('Alexis Bickers')
  fireEvent.click(row)

  expect(onChange).toHaveBeenCalledWith(
    expect.objectContaining({
      fullname: 'Alexis Bickers'
    })
  )
})

it('should show the given contact name in the select', () => {
  const root = render(
    <Wrapper>
      <ContactPicker placeholder="Select a contact" value={contacts[0]} />
    </Wrapper>
  )

  expect(root.getByText('isabelle.durand@cozycloud.cc')).toBeTruthy()
})
