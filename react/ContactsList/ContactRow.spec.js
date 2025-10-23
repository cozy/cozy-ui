import { render, screen } from '@testing-library/react'
import React from 'react'

import logger from 'cozy-logger'

import ContactRow from './ContactRow'
import { BreakpointsProvider } from '../providers/Breakpoints'

logger.setLevel('error')

const makeContact = attrs => ({
  _id: 'contactid',
  _type: 'io.cozy.contacts',
  ...attrs
})

const setup = ({ contact }) => {
  render(
    <BreakpointsProvider>
      <ContactRow contact={contact} />
    </BreakpointsProvider>
  )
}

describe('ContactRow', () => {
  it('should accept the strict minimum', () => {
    const contact = makeContact({ email: [{ address: 'johndoe@localhost' }] })
    setup({ contact })

    // With a minimal contact, email is displayed twice
    // - one as display name
    // - one as email
    expect(screen.getAllByText('johndoe@localhost').length).toBe(2)
  })

  it('should display data', () => {
    const contact = makeContact({
      name: { familyName: 'Doe', givenName: 'John' },
      phone: [{ number: '0123456789' }],
      email: [{ address: 'johndoe@localhost' }],
      cozy: [{ url: 'http://johndoe.mycozy.cloud' }]
    })
    setup({ contact })

    // We need to check first and last name separatly because they are in two different span
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('Doe')).toBeInTheDocument()
    expect(screen.getByText('0123456789')).toBeInTheDocument()
    expect(screen.getByText('johndoe@localhost')).toBeInTheDocument()
    expect(screen.getByText('http://johndoe.mycozy.cloud')).toBeInTheDocument()
  })

  it('should display email for missing information', () => {
    const contact = makeContact({
      email: [{ address: 'johndoe@localhost' }]
    })
    setup({ contact })

    const emailColumn = screen.getByTestId('ContactEmail')
    expect(emailColumn.textContent).toBe('johndoe@localhost')

    const phoneColumn = screen.getByTestId('ContactPhone')
    expect(phoneColumn.textContent).toBe('—')

    const cozyColumn = screen.getByTestId('ContactCozy')
    expect(cozyColumn.textContent).toBe('—')
  })

  it('should accept empty array', () => {
    const contact = makeContact({ email: [] })
    setup({ contact })
    const emailColumn = screen.getByTestId('ContactEmail')
    expect(emailColumn.textContent).toBe('—')
  })
})
