import { render, screen, fireEvent, act } from '@testing-library/react'
import React from 'react'

import ContactForm, { isSameContactProp } from './index'
import DemoProvider from '../../../providers/DemoProvider'
import { johnDoeContact as contact } from '../mocks'

const dictRequire = lang => require(`../ContactAddressDialog/locales/${lang}`)

const setup = ({ contact }) => {
  return {
    contact,
    onSubmit: () => jest.fn(),
    onCancel: () => jest.fn()
  }
}

const labels = [
  'Firstname',
  'Lastname',
  'Phone',
  'Email',
  'Address',
  'Matrix ID',
  'Twake URL',
  'Company',
  'Job title',
  'Birthday',
  'Notes'
]

describe('ContactForm', () => {
  it(`should contains ${labels.length} fields and labels`, () => {
    const props = setup({ contact: {} })
    const jsx = (
      <DemoProvider>
        <ContactForm {...props} />
      </DemoProvider>
    )
    render(jsx)
    for (const label of labels) {
      expect(screen.queryByLabelText(label)).not.toBeNull()
    }
  })

  it('should fill form with contact data', () => {
    const props = setup({ contact })
    const jsx = (
      <DemoProvider>
        <ContactForm {...props} />
      </DemoProvider>
    )
    render(jsx)
    expect(screen.queryByDisplayValue(contact.name.givenName)).not.toBeNull()
    expect(screen.queryByDisplayValue(contact.name.familyName)).not.toBeNull()
    expect(screen.queryByDisplayValue(contact.phone[0].number)).not.toBeNull()
    expect(screen.queryByDisplayValue(contact.email[0].address)).not.toBeNull()
    expect(screen.queryByDisplayValue(contact.impp[2].uri)).not.toBeNull()
    expect(
      screen.queryByDisplayValue(contact.address[0].formattedAddress)
    ).not.toBeNull()
    expect(screen.queryByDisplayValue(contact.cozy[0].url)).not.toBeNull()
    expect(screen.queryByDisplayValue(contact.company)).not.toBeNull()
    expect(screen.queryByDisplayValue(contact.jobTitle)).not.toBeNull()
    expect(screen.queryByDisplayValue(contact.note)).not.toBeNull()
  })

  it('should submit a well formatted contact', () => {
    const expected = {
      address: [
        {
          city: undefined,
          code: undefined,
          country: undefined,
          region: undefined,
          formattedAddress: '18 rue des fleurs, Pecado',
          number: undefined,
          primary: true,
          street: '18 rue des fleurs, Pecado',
          type: undefined
        }
      ],
      impp: [
        {
          uri: '123-matrixID-456',
          protocol: 'matrix',
          label: 'work',
          primary: true
        }
      ],
      birthday: '2015-12-31',
      birthplace: 'somewhere',
      gender: 'male',
      company: 'Cozy CLoud',
      cozy: [
        { label: undefined, primary: true, url: 'https://jcvd.cozy.cloud' }
      ],
      displayName: 'Jean-Claude Van Cozy',
      email: [{ address: 'jcvc@cozy.cloud', primary: true, type: undefined }],
      fullname: 'Jean-Claude Van Cozy',
      indexes: {
        byFamilyNameGivenNameEmailCozyUrl:
          'van cozyjean-claudejcvc@cozy.cloudjcvd.cozy.cloud'
      },
      jobTitle: 'Dreamer',
      metadata: { cozy: true, version: 1 },
      name: {
        familyName: 'Van Cozy',
        givenName: 'Jean-Claude',
        additionalName: undefined,
        surname: undefined
      },
      note: 'Whatever.',
      phone: [{ number: '+33678987654', primary: true, type: undefined }],
      relationships: { groups: { data: [] }, related: { data: [] } }
    }

    let received = null
    const onSubmit = contact => {
      received = contact
    }

    render(
      <DemoProvider dictRequire={dictRequire}>
        <ContactForm onSubmit={onSubmit} onCancel={() => {}} />
      </DemoProvider>
    )

    const fields = {
      gender: 'male',
      givenName: 'Jean-Claude',
      familyName: 'Van Cozy',
      surname: '',
      additionalName: '',
      'phone[0].phone': '+33678987654',
      'email[0].email': 'jcvc@cozy.cloud',
      matrix: '123-matrixID-456',
      cozy: 'https://jcvd.cozy.cloud',
      company: 'Cozy CLoud',
      jobTitle: 'Dreamer',
      birthday: '2015-12-31',
      birthplace: 'somewhere',
      note: 'Whatever.'
    }

    const form = screen.getByRole('form')
    for (const fieldName of Object.keys(fields)) {
      act(() => {
        const field = form.querySelector(`[name='${fieldName}']`)
        expect(field).not.toBeNull()
        fireEvent.change(field, { target: { value: fields[fieldName] } })
      })
    }

    const addressBtn = form.querySelector('[name="address[0].address"]')
    fireEvent.click(addressBtn)

    const addressStreet = screen
      .getAllByRole('textbox')
      .find(t => t.name == 'address[0].addressstreet')

    act(() => {
      fireEvent.change(addressStreet, {
        target: { value: '18 rue des fleurs, Pecado' }
      })
    })

    act(() => {
      fireEvent.click(screen.getByText('Ok'))
    })

    act(() => {
      fireEvent.submit(screen.getByRole('form'))
    })

    expect(received).toEqual(expected)
  })

  it('should change inputs value', () => {
    const testFields = {
      Firstname: 'Jean-Claude',
      Lastname: 'Van Cozy',
      Phone: '+33678987654',
      Email: 'jcvc@cozy.cloud',
      Matrix: '123-matrixID-456',
      Address: '18 rue des fleurs, Pecado',
      'Twake URL': 'https://jcvd.cozy.cloud',
      Company: 'Cozy CLoud',
      jobTitle: 'Dreamer',
      Birthday: '31/12/2015',
      Notes: 'Whatever.'
    }

    const props = setup({ contact: {} })
    const jsx = (
      <DemoProvider>
        <ContactForm {...props} />
      </DemoProvider>
    )
    render(jsx)

    for (const label of labels) {
      act(() => {
        fireEvent.change(screen.getByLabelText(label), {
          target: { value: testFields[label] }
        })
      })
    }

    expect(screen.queryByDisplayValue(testFields['Firstname'])).not.toBeNull()
    expect(screen.queryByDisplayValue(testFields['Notes'])).not.toBeNull()
  })

  it('should not submit empty fields', () => {
    const onSubmit = jest.fn()

    render(
      <DemoProvider>
        <ContactForm onSubmit={onSubmit} onCancel={() => {}} />
      </DemoProvider>
    )

    act(() => {
      fireEvent.submit(screen.getByRole('form'))
    })

    expect(onSubmit).not.toBeCalled()
  })

  describe('isSameContactProp', () => {
    it('should return true if contacts have the same "related" relationships', () => {
      const prevProps = {
        contact: {
          relationships: {
            related: {
              data: [{ _id: '1' }, { _id: '2' }]
            }
          }
        }
      }
      const nextProps = {
        contact: {
          relationships: {
            related: {
              data: [{ _id: '2' }, { _id: '1' }]
            }
          }
        }
      }
      expect(isSameContactProp(prevProps, nextProps)).toBe(true)
    })

    it('should return false if contacts have different "related" relationships', () => {
      const prevProps = {
        contact: {
          relationships: {
            related: {
              data: [{ _id: '1' }, { _id: '2' }]
            }
          }
        }
      }
      const nextProps = {
        contact: {
          relationships: {
            related: {
              data: [{ _id: '1' }, { _id: '3' }]
            }
          }
        }
      }
      expect(isSameContactProp(prevProps, nextProps)).toBe(false)
    })

    it('should return false if one of the contacts has no "related" relationships', () => {
      const prevProps = {
        contact: {
          relationships: {
            related: {
              data: [{ _id: '1' }, { _id: '2' }]
            }
          }
        }
      }
      const nextProps = {
        contact: {}
      }
      expect(isSameContactProp(prevProps, nextProps)).toBe(false)
    })

    it('should return false if both contacts have no "related" relationships', () => {
      const prevProps = {
        contact: {}
      }
      const nextProps = {
        contact: {}
      }
      expect(isSameContactProp(prevProps, nextProps)).toBe(false)
    })
  })
})
