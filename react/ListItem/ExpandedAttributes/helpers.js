import get from 'lodash/get'
import copy from 'copy-text-to-clipboard'

import { formatDate } from '../../Viewer/helpers'

export const normalizeExpandedAttribute = attr =>
  attr
    .replaceAll(':', '.')
    .replace('flexsearchProps.', '')
    .replace('translated.', '')

// attributes not considered as expanded attributes
export const notExpandedAttributes = {
  'io.cozy.contacts': ['fullname', 'civility', 'note'],
  'io.cozy.files': [
    'name',
    'flexsearchProps:translated:qualificationLabel',
    'flexsearchProps:translated:driverLicense',
    'flexsearchProps:translated:paymentProofFamilyAllowance',
    'flexsearchProps:translated:caf',
    'flexsearchProps:translated:vehicleRegistration',
    'flexsearchProps:translated:nationalIdCard',
    'flexsearchProps:translated:bankDetails',
    'flexsearchProps:translated:passport',
    'flexsearchProps:translated:residencePermit'
  ]
}

// attributes that we want to display if no attribute of the document is related to the search
export const defaultExpandedAttributes = {
  'io.cozy.contacts': ['email', 'phone', 'address', 'birthday'],
  'io.cozy.files': [
    'metadata.number',
    'metadata.cafFileNumber',
    'metadata.cardNumber',
    'metadata.vinNumber',
    'metadata.ibanNumber',
    'metadata.bicNumber',
    'metadata.passportNumber',
    'metadata.noticePeriod',
    'metadata.obtentionDate',
    'metadata.expirationDate',
    'metadata.country',
    'metadata.refTaxIncome',
    'metadata.contractType'
  ]
}

export const hasAllElement = (arr1, arr2) => arr1?.every(x => arr2.includes(x))

export const makeDefaultExpandedAttributes = (doc, expandedAttributes) => {
  const doctype = doc?._type

  if (!expandedAttributes || !doc || !doctype) return undefined

  // checks if there are any expanded attributes.
  // If there are none, the default expanded attributes are returned
  if (hasAllElement(expandedAttributes, notExpandedAttributes[doctype])) {
    return defaultExpandedAttributes[doctype]
  }

  return expandedAttributes
    .map(expandedAttribute =>
      notExpandedAttributes[doctype].includes(expandedAttribute)
        ? undefined
        : normalizeExpandedAttribute(expandedAttribute)
    )
    .filter(x => x)
}

export const copyToClipboard = ({ value, setAlertProps, t }) => () => {
  const hasCopied = copy(value)
  if (hasCopied) {
    setAlertProps({
      open: true,
      severity: 'success',
      message: t(`ListItem.snackbar.copyToClipboard.success`)
    })
  } else {
    setAlertProps({
      open: true,
      severity: 'error',
      message: t(`ListItem.snackbar.copyToClipboard.error`)
    })
  }
}

export const isDate = value => {
  if (!isNaN(value)) return false
  const dateTime = new Date(value).getTime()
  const dateParsedValue = Date.parse(value)

  return dateTime === dateParsedValue
}

export const formatAttrValue = ({ attribute, attrValue, f, lang }) => {
  if (!attrValue || attrValue.length === 0) return undefined

  switch (true) {
    case isDate(attrValue):
      return formatDate({ f, lang, date: attrValue })

    case attribute === 'email':
      return attrValue.find(x => x.primary === true)?.address

    case attribute === 'address':
      return attrValue.find(x => x.primary === true)?.formattedAddress

    case attribute === 'phone':
      return attrValue.find(x => x.primary === true)?.number

    default:
      return attrValue
  }
}

export const makeAttrKey = (doc, expandedAttribute) => {
  switch (true) {
    case expandedAttribute === 'metadata.number':
      return `${expandedAttribute}.${doc.metadata.qualification.label}`

    case expandedAttribute.match(/\[.+\]/g) !== null:
      return expandedAttribute.split('[')[0]

    default:
      return expandedAttribute
  }
}

export const makeAttrsKeyAndFormatedValue = ({
  doc,
  expandedAttributes,
  f,
  lang
}) => {
  const attrsKeyAndFormatedValue = expandedAttributes
    .map(expandedAttribute => {
      const attrValue = get(doc, expandedAttribute)

      const attrFormatedValue = formatAttrValue({
        attribute: expandedAttribute,
        attrValue,
        f,
        lang
      })

      if (!attrFormatedValue) return undefined

      const attrKey = makeAttrKey(doc, expandedAttribute)

      return { attrKey, attrFormatedValue }
    })
    .filter(x => x)
    .slice(0, 3)

  return attrsKeyAndFormatedValue
}

export const hasExpandedAttributesDisplayed = ({
  doc,
  expandedAttributes,
  f,
  lang
}) => {
  const defaultExpandedAttributes = makeDefaultExpandedAttributes(
    doc,
    expandedAttributes
  )

  const attrsKeyAndFormatedValue = makeAttrsKeyAndFormatedValue({
    doc,
    expandedAttributes: defaultExpandedAttributes,
    f,
    lang
  })

  return attrsKeyAndFormatedValue?.length > 0 || false
}

export const getValueExtended = ({ attrKey, value, t }) => {
  if (attrKey === 'metadata.noticePeriod') {
    if (!isNaN(parseInt(value))) {
      return t('common.day', { smart_count: parseInt(value) })
    }
  }
  if (attrKey === 'metadata.refTaxIncome') {
    if (!isNaN(parseInt(value))) {
      return `${value} €`
    }
  }
  return value
}
