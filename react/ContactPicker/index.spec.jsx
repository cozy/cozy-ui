import ContactPicker from '.'
import { mount } from 'enzyme'
import React from 'react'
import DemoProvider from '../ContactsListModal/DemoProvider'
import ContactsListModal from '../ContactsListModal'
import ContactsList from '../ContactsList'
import { BreakpointsProvider } from '../hooks/useBreakpoints'
import ContactRow from '../ContactsList/ContactRow'
import contacts from '../ContactsList/data.json'
import { createWaitForElement } from '@oskarer/enzyme-wait'

const Wrapper = ({ children }) => {
  return (
    <DemoProvider>
      <BreakpointsProvider>{children}</BreakpointsProvider>
    </DemoProvider>
  )
}

it('should show a contacts list modal when clicking the control', () => {
  const wrapper = mount(
    <Wrapper>
      <ContactPicker placeholder="Select a contact" />
    </Wrapper>
  )

  const control = wrapper.find('button')
  control.simulate('click')
  const modal = wrapper.find(ContactsListModal)

  expect(modal.length).toBe(1)
})

it('should call the onChange function when a contact is being selected', async () => {
  const onChange = jest.fn()
  const wrapper = mount(
    <Wrapper>
      <ContactPicker placeholder="Select a contact" onChange={onChange} />
    </Wrapper>
  )

  const waitForContactsList = createWaitForElement(ContactsList)

  const control = wrapper.find('button')
  control.simulate('click')

  const list = await waitForContactsList(wrapper)
  const row = list.find(ContactRow).first()
  row.simulate('click')

  expect(onChange).toHaveBeenCalled()
})

it('should show the given contact name in the select', () => {
  const wrapper = mount(
    <Wrapper>
      <ContactPicker placeholder="Select a contact" value={contacts[0]} />
    </Wrapper>
  )

  const control = wrapper.find('button')
  expect(control.text()).toBe('isabelle.durand@cozycloud.cc')
})
