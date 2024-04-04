import get from 'lodash/get'

import { formatDate } from '../../Viewer/helpers'

export const normalizeExpandedAttribute = attr =>
  attr
    .replaceAll(':', '.')
    .replace('flexsearchProps.', '')
    .replace('translated.', '')

// attributes not considered as specific expanded attributes
// and then fallback to default expanded attributes
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
    'flexsearchProps:translated:paySheet',
    'flexsearchProps:translated:passport',
    'flexsearchProps:translated:residencePermit'
  ]
}

// attributes that we want to display if no attribute of the document is related to the search
export const defaultExpandedAttributes = {
  'io.cozy.contacts': ['email', 'phone', 'address', 'birthday'],
  'io.cozy.files': [
    'metadata.number',
    'metadata.vehicle.licenseNumber',
    'metadata.vehicle.confidentialNumber',
    'metadata.bicNumber',
    'metadata.netSocialAmount',
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

export const copyToClipboard = ({ value, setAlertProps, t }) => async () => {
  try {
    await navigator.clipboard.writeText(value)
    setAlertProps({
      open: true,
      severity: 'success',
      message: t(`ListItem.snackbar.copyToClipboard.success`)
    })
  } catch (error) {
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

export const getAttrValue = (doc, attribute) => {
  const attrValue = get(doc, attribute)
  if (!attrValue || attrValue.length === 0) return undefined

  switch (true) {
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

export const makeAttrsKeyAndValue = (doc, expandedAttributes) => {
  const attrsKeyAndValue = expandedAttributes
    .map(expandedAttribute => {
      const attrValue = getAttrValue(doc, expandedAttribute)

      if (!attrValue) return undefined

      const attrKey = makeAttrKey(doc, expandedAttribute)

      return {
        attrKey,
        attrValue
      }
    })
    .filter(x => x)
    .slice(0, 3)

  return attrsKeyAndValue
}

export const hasExpandedAttributesDisplayed = ({ doc, expandedAttributes }) => {
  const defaultExpandedAttributes = makeDefaultExpandedAttributes(
    doc,
    expandedAttributes
  )

  const attrsKeyAndValue = makeAttrsKeyAndValue(doc, defaultExpandedAttributes)

  return attrsKeyAndValue?.length > 0 || false
}

export const getFormatedValue = ({ attrKey, value, t, f, lang }) => {
  if (isDate(value)) {
    return formatDate({ f, lang, date: value })
  }

  if (attrKey === 'metadata.noticePeriod') {
    if (!isNaN(parseInt(value))) {
      return t('common.day', { smart_count: parseInt(value) })
    }
  }

  if (
    attrKey === 'metadata.refTaxIncome' ||
    attrKey === 'metadata.netSocialAmount' ||
    attrKey === 'metadata.number.pay_sheet'
  ) {
    if (!isNaN(parseInt(value))) {
      return `${value} €`
    }
  }

  return value
}

export const makeAttrsLabelAndFormatedValue = ({
  doc,
  expandedAttributes,
  t,
  f,
  lang
}) => {
  const attrsKeyAndFormatedValue = makeAttrsKeyAndValue(doc, expandedAttributes)

  return attrsKeyAndFormatedValue.map(({ attrKey, attrValue }) => {
    const label = t(`ListItem.attributes.${attrKey}`)
    const value = getFormatedValue({
      attrKey,
      value: attrValue,
      t,
      f,
      lang
    })

    return { label, value }
  })
}
