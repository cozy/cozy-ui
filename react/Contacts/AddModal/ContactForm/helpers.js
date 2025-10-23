import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import merge from 'lodash/merge'
import uniqueId from 'lodash/uniqueId'

import { Association } from 'cozy-client'
import { makeDisplayName } from 'cozy-client/dist/models/contact'
import { CONTACTS_DOCTYPE } from 'cozy-client/dist/models/contact'

import contactToFormValues from './contactToFormValues'

export const fieldsRequired = [
  'givenName',
  'familyName',
  'email[0].email',
  'cozy'
]

/**
 * Returns errors if all required fields are empty
 * @param {object} values - Fields values
 * @param {func} t - Translation function
 * @returns {object} Errors
 */
export const validateFields = (values, t) => {
  const errors = {}
  if (fieldsRequired.every(field => !get(values, field))) {
    fieldsRequired.forEach(field => {
      errors[field] = t('Contacts.AddModal.ContactForm.fields.required')
    })
  }
  return errors
}

/**
 * @param {object} [item] - Contact attribute
 * @returns {string} Stringified object
 */
export const makeItemLabel = item => {
  if (!item) return undefined

  const res =
    item.label || item.type
      ? JSON.stringify({ type: item.type, label: item.label })
      : undefined

  return res
}

/**
 *
 * @param {string} [itemLabel] - Value of the label for a contact attribute
 * @returns {{ type?: string, label?: string }}
 */
export const makeTypeAndLabel = itemLabel => {
  if (!itemLabel) {
    return { type: undefined, label: undefined }
  }

  const itemLabelObj = JSON.parse(itemLabel)

  const res = { type: itemLabelObj.type, label: itemLabelObj.label }

  return res
}

/**
 * @param {object} addressField
 * @returns {boolean} True if addressField has extended address
 */
export const hasExtendedAddress = addressField => {
  if (!addressField) return false
  const extendedAddressKeys = [
    'addresslocality',
    'addressbuilding',
    'addressstairs',
    'addressfloor',
    'addressapartment',
    'addressentrycode'
  ]
  return Object.keys(addressField).some(ext =>
    extendedAddressKeys.includes(ext)
  )
}

export const moveToHead = shouldBeHead => items =>
  items.reduce((arr, v) => (shouldBeHead(v) ? [v, ...arr] : [...arr, v]), [])

export const movePrimaryToHead = moveToHead(v => v?.primary)

export const createAddress = ({ address, oldContact, t }) => {
  return address
    ? address
        .filter(val => val && val.address)
        .map((addressField, index) => {
          const oldContactAddress = oldContact?.address?.[index]
          const oldContactFormValues = contactToFormValues({
            contact: oldContact,
            t
          })?.address?.[index]

          const addressHasBeenModified = !isEqual(
            addressField,
            oldContactFormValues
          )

          if (addressHasBeenModified) {
            // Use "code" instead "postcode", to be vcard 4.0 rfc 6350 compliant
            // eslint-disable-next-line no-unused-vars
            const { postcode, ...oldContactAddressCleaned } =
              oldContactAddress || {}
            return {
              // For keep other properties form connectors
              ...oldContactAddressCleaned,
              formattedAddress: addressField.address,
              number: addressField.addressnumber,
              street: addressField.addressstreet,
              code: addressField.addresscode,
              city: addressField.addresscity,
              region: addressField.addressregion,
              country: addressField.addresscountry,
              ...(hasExtendedAddress(addressField) && {
                extendedAddress: {
                  ...oldContactAddressCleaned.extendedAddress,
                  locality: addressField.addresslocality,
                  building: addressField.addressbuilding,
                  stairs: addressField.addressstairs,
                  floor: addressField.addressfloor,
                  apartment: addressField.addressapartment,
                  entrycode: addressField.addressentrycode
                }
              }),
              ...makeTypeAndLabel(addressField.addressLabel),
              primary: index === 0
            }
          }
          return oldContactAddress
        })
    : []
}

/**
 * @param {(import('../types').RelatedContact|undefined)[]} relatedContact - The related contacts array
 * @returns {Record<string, { data: { _id: string, _type: string }[] }>} - The related contacts relationships
 */
export const getRelatedContactRelationships = relatedContact => {
  // Tips filter Boolean to remove undefined value from array when relatedContact is empty (see contactToFormValues)
  const data = relatedContact.filter(Boolean).reduce((acc, curr) => {
    const relationType = curr.relatedContactLabel
      ? JSON.parse(curr.relatedContactLabel).type
      : 'related'

    const existingIndex = acc.findIndex(
      item => item._id === curr.relatedContactId
    )

    if (existingIndex !== -1) {
      acc[existingIndex].metadata.relationTypes = Array.from(
        new Set([...acc[existingIndex].metadata.relationTypes, relationType])
      )
    } else {
      acc.push({
        _id: curr.relatedContactId,
        _type: CONTACTS_DOCTYPE,
        metadata: {
          relationTypes: [relationType]
        }
      })
    }
    return acc
  }, [])

  // `data` can be empty, you still have to return an object to override the behavior of the cozy-client store, otherwise it will keep the old value, and without refreshing the page, the data will not be up to date in the store and therefore on the interface
  return { related: { data } }
}

/**
 * When changing the type of relationship, it must be ensured that no empty relationship remains.
 * The old and new ones are merged into `formValuesToContact`.
 *
 * @param {import('cozy-client/types/types').IOCozyContact} contact - The contact object with all relationships
 * @returns {import('cozy-client/types/types').IOCozyContact} - The contact object without the related contacts relationships
 */
export const removeRelatedContactRelationships = contact => {
  if (!contact?.relationships) return contact
  const updatedContact = merge({}, contact)

  const relationshipsWithoutRelatedContact = Object.entries(
    updatedContact.relationships
  ).reduce((acc, [relName, relValue]) => {
    if ('related' === relName) {
      acc[relName] = relValue
    }
    return acc
  }, {})

  updatedContact.relationships = relationshipsWithoutRelatedContact

  return updatedContact
}

// TODO : Update dehydrate function to HasMany class in cozy-client
/**
 * This function is used to clean the contact object from the associated data
 * cozy-client dehydrates the document before saving it (via the `HasMany` method), but by doing it manually, we ensure that all hydrated relationships in the document (and without data of course) are not saved in the `relationships` of the document, which adds unnecessary data.
 *
 * @param {import('cozy-client/types/types').IOCozyContact} contact - The contact object with associated data
 * @returns {import('cozy-client/types/types').IOCozyContact} - The contact object without associated data
 */
export const removeAsscociatedData = contact => {
  if (!contact) return {}
  return Object.entries(contact).reduce((cleanedContact, [key, value]) => {
    // Add `groups` condition to keep the old implementation functional, see below
    if (!(value instanceof Association) || key === 'groups') {
      cleanedContact[key] = value
    }
    return cleanedContact
  }, {})
}

/**
 * @param {import('cozy-client/types/types').IOCozyContact} contact
 * @returns {import('../types').RelatedContact[]}
 */
export const makeRelatedContact = contact => {
  if (
    !(contact.related instanceof Association) ||
    !contact.relationships?.related
  ) {
    return [undefined]
  }

  const relatedData = contact.related.data.reduce((acc, curr) => {
    // Use `makeDisplayName` because if the contact is newly created, it has no `displayName` attribute. (Creation of a contact when selecting a linked contact)
    acc[curr._id] = curr.displayName || makeDisplayName(curr)
    return acc
  }, {})

  const res = contact.relationships.related.data.flatMap(item => {
    return item.metadata.relationTypes.map(type => {
      return {
        relatedContactId: item._id,
        relatedContact: relatedData[item._id],
        relatedContactLabel: makeItemLabel({
          type: type === 'related' ? '' : type
        })
      }
    })
  })

  // Useful because a contact always has at least the `related` relationships (see `getRelatedContactRelationships`)
  return res.length > 0 ? res : [undefined]
}

export const addField = fields => fields.push({ fieldId: uniqueId('fieldId_') })

export const removeField = (fields, index) => {
  const isLastRemainingField = fields.length === 1

  if (isLastRemainingField) {
    fields.update(index, undefined)
  } else {
    fields.remove(index)
  }
}

/**
 *
 * @param {string} value
 * @param {func} t
 * @returns {string}
 */
export const makeCustomLabel = (value, t) => {
  const { type, label } = JSON.parse(value)

  const isSupportedLabel = ['home', 'work'].includes(label)

  const firstString = type || ''
  const secondString =
    label && isSupportedLabel
      ? type
        ? ` (${t(
            `Contacts.AddModal.ContactForm.label.${label}`
          )})`.toLowerCase()
        : `label.${label}`
      : ''

  return firstString + secondString || null
}

/**
 *
 * @param {import('cozy-client/types/types').IOCozyContact} oldContact - Contact to be modified
 * @param {string?} value - New URI value to add to the Contact
 * @returns {{ uri: string, protocol: string, label: string, primary?: boolean }[]}
 */
export const makeImppValues = (oldContact, value) => {
  const _value = value?.trim() || ''
  const oldImppValues = oldContact?.impp

  if (_value) {
    if (!oldImppValues || oldImppValues.length === 0) {
      return [
        {
          uri: _value,
          protocol: 'matrix',
          label: 'work',
          primary: true
        }
      ]
    }

    return oldImppValues.map(el => {
      if (el.protocol === 'matrix' && el.label === 'work') {
        return { ...el, uri: _value }
      }
      return el
    })
  }

  return (
    oldImppValues
      ?.map(el => {
        if (el.protocol !== 'matrix' || el.label !== 'work') {
          return el
        }
      })
      .filter(Boolean) || []
  )
}

/**
 *
 * @param {string} name
 * @param {string} value
 * @returns {string}
 */
export const makeInitialCustomValue = (name, value) => {
  // gender input doesn't support custom label
  if (!name || !value || name === 'gender') return undefined

  const valueObj = JSON.parse(value)

  // Voluntarily before the "backwards compatibility" condition
  if (name.includes('relatedContactLabel')) {
    if (!'related' === valueObj.type) {
      return JSON.stringify({ type: valueObj.type })
    }
    return undefined
  }

  // for backwards compatiblity - historically there is only type and no label
  if (valueObj.type && !valueObj.label) {
    return JSON.stringify({ type: valueObj.type })
  }

  // for phone label
  if (name.includes('phoneLabel')) {
    // but unsupported one
    if (!['cell', 'voice', 'fax'].includes(valueObj.type)) {
      return JSON.stringify({ type: valueObj.type, label: valueObj.label })
    }

    // we don't want to create a custom label if supported
    return undefined
  }

  // at this point if label and type are both present, it's a custom label
  if (valueObj.type && valueObj.label) {
    return JSON.stringify({ type: valueObj.type, label: valueObj.label })
  }
}

/**
 * @param {(import('../types').Field)[]|undefined} customFields
 * @param {(import('../types').Field)[]} defaultFields
 * @returns {(import('../types').Field)[]}
 */
export const makeFields = (customFields, defaultFields) => {
  if (!customFields) {
    return defaultFields
  }

  const fields = [...defaultFields]

  customFields.map(customField => {
    if (customField.position) {
      fields.splice(customField.position, 0, customField)
    }
  })

  return fields
}
