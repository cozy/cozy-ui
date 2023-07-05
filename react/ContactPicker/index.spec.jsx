import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { I18nContext } from '../I18n'
import DemoProvider from '../ContactsListModal/DemoProvider'
import { BreakpointsProvider } from '../hooks/useBreakpoints'
import contacts from '../ContactsList/_mockContacts.json'

import ContactPicker from '.'

const Wrapper = ({ children }) => {
  const lang = localStorage.getItem('lang') || 'en'

  return (
    <DemoProvider>
      <BreakpointsProvider>
        <I18nContext.Provider
          value={{
            t: x => x,
            f: () => '01 Jan. 2022',
            lang
          }}
        >
          {children}
        </I18nContext.Provider>
      </BreakpointsProvider>
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

  const row = await root.findByText('Mitch')
  fireEvent.click(row)

  expect(onChange).toHaveBeenCalledWith(
    expect.objectContaining({
      name: {
        familyName: 'Woodrum',
        givenName: 'Mitch'
      }
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
