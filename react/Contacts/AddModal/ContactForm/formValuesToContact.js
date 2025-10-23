import { updateIndexFullNameAndDisplayName } from 'cozy-client/dist/models/contact'

import {
  removeAsscociatedData,
  removeRelatedContactRelationships,
  createAddress,
  getRelatedContactRelationships,
  makeImppValues,
  makeTypeAndLabel
} from './helpers'

const formValuesToContact = ({
  formValues,
  oldContact,
  makeCustomFieldsFormValues,
  t
}) => {
  const {
    gender,
    givenName,
    additionalName,
    surname,
    familyName,
    phone,
    email,
    address,
    matrix,
    cozy,
    company,
    jobTitle,
    birthday,
    birthplace,
    note,
    relatedContact
  } = formValues

  const relatedContactRelationships =
    getRelatedContactRelationships(relatedContact)

  const oldContactCleaned = removeRelatedContactRelationships(
    removeAsscociatedData(oldContact)
  )

  const relationshipsFormValues = {
    ...oldContactCleaned?.relationships,
    ...relatedContactRelationships,
    // If we don't create the relationships field manually, cozy-client doesn't create it automatically when needed (eg. b56ea9dd308c31555aa1433514fa3481adb92f31)
    groups: {
      data: []
    }
  }

  const customFieldsFormValues = makeCustomFieldsFormValues?.(formValues) || {}

  const contactWithFormValues = {
    ...oldContactCleaned,
    ...customFieldsFormValues,
    gender: gender || '',
    name: {
      ...oldContactCleaned?.name,
      givenName: givenName || '',
      additionalName: additionalName,
      surname: surname,
      familyName: familyName || ''
    },
    email: email
      ? email
          .filter(val => val && val.email)
          .map(({ email, emailLabel }, index) => ({
            address: email,
            ...makeTypeAndLabel(emailLabel),
            primary: index === 0
          }))
      : [],
    impp: makeImppValues(oldContactCleaned, matrix),
    address: createAddress({ address, oldContact: oldContactCleaned, t }),
    phone: phone
      ? phone
          .filter(val => val && val.phone)
          .map(({ phone, phoneLabel }, index) => ({
            number: phone,
            ...makeTypeAndLabel(phoneLabel),
            primary: index === 0
          }))
      : [],
    cozy: cozy
      ? [
          {
            url: cozy,
            ...makeTypeAndLabel(formValues['cozyLabel']),
            primary: true
          }
        ]
      : [],
    company: company || '',
    jobTitle: jobTitle || '',
    birthday: birthday || '',
    birthplace: birthplace || '',
    note: note || '',
    relationships: relationshipsFormValues,
    metadata: {
      ...oldContactCleaned?.metadata,
      version: 1,
      cozy: true
    }
  }

  return updateIndexFullNameAndDisplayName(contactWithFormValues)
}

export default formValuesToContact
