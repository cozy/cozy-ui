import React from 'react'
import { mount } from 'enzyme'

import { BreakpointsProvider } from '../hooks/useBreakpoints'
import ContactRow from './ContactRow'
import renderer from 'react-test-renderer'
import logger from 'cozy-logger'

logger.setLevel('error')

const makeContact = attrs => ({
  _id: 'contactid',
  _type: 'io.cozy.contacts',
  ...attrs
})

const setup = ({ contact }) => {
  const root = mount(
    <BreakpointsProvider>
      <ContactRow contact={contact} />
    </BreakpointsProvider>
  )
  return { root }
}

describe('ContactRow', () => {
  test('should accept the strict minimum', () => {
    const contact = makeContact({ email: [{ address: 'johndoe@localhost' }] })
    const { root } = setup({ contact })
    const contactrowemail = root.find('ContactEmail')
    expect(contactrowemail.text()).toBe(contact.email[0].address)
  })

  test('should display data', () => {
    const contact = makeContact({
      name: { familyName: 'Doe', givenName: 'John' },
      phone: [{ number: '0123456789' }],
      email: [{ address: 'johndoe@localhost' }],
      cozy: [{ url: 'http://johndoe.mycozy.cloud' }]
    })
    const { root } = setup({ contact })
    const contactrowname = root.find('ContactName')
    expect(contactrowname).toBeDefined()
    expect(contactrowname.text()).toEqual(
      expect.stringContaining(contact.name.givenName)
    )
    expect(contactrowname.text()).toEqual(
      expect.stringContaining(contact.name.familyName)
    )
    const contactrowphone = root.find('ContactPhone')
    expect(contactrowphone).toBeDefined()
    expect(contactrowphone.text()).toBe(contact.phone[0].number)

    const contactrowcozyurl = root.find('ContactCozy')
    expect(contactrowcozyurl).toBeDefined()
    expect(contactrowcozyurl.text()).toBe(contact.cozy[0].url)
  })

  test('should display empty string for missing information', () => {
    const contact = makeContact({
      email: [{ address: 'johndoe@localhost' }]
    })
    const { root } = setup({ contact })
    const contactrowname = root.find('ContactName')
    expect(contactrowname).toBeDefined()
    expect(contactrowname.text().trim()).toBe('')
    const contactrowphone = root.find('ContactPhone')
    expect(contactrowphone).toBeDefined()
    expect(contactrowphone.text().trim()).toBe('—')
    const contactrowcozyurl = root.find('ContactCozy')
    expect(contactrowcozyurl).toBeDefined()
    expect(contactrowcozyurl.text().trim()).toBe('—')
  })

  test('should accept empty array', () => {
    const contact = makeContact({ email: [] })
    const { root } = setup({ contact })
    const contactrowemail = root.find('ContactEmail')
    expect(contactrowemail).toBeDefined()
    expect(contactrowemail.text()).toBe('—')
  })

  test('should match the contact snapshot', () => {
    const contact = makeContact({
      name: { familyName: 'Doe', givenName: 'John' },
      phone: [{ number: '0123456789' }],
      email: [{ address: 'johndoe@localhost' }],
      cozy: [{ url: 'http://johndoe.mycozy.cloud' }]
    })
    const tree = renderer
      .create(
        <BreakpointsProvider>
          <ContactRow contact={contact} />
        </BreakpointsProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
