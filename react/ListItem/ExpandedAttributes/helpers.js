import get from 'lodash/get'

import {
  getTranslatedNameForInformationMetadata,
  KNOWN_INFORMATION_METADATA_NAMES,
  KNOWN_DATE_METADATA_NAMES,
  formatInformationMetadataValue,
  formatDateMetadataValue
} from 'cozy-client/dist/models/paper'

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
    ...KNOWN_DATE_METADATA_NAMES.map(x => `metadata.${x}`),
    'metadata.noticePeriod',
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
    ...KNOWN_INFORMATION_METADATA_NAMES.map(x => `metadata.${x}`),
    ...KNOWN_DATE_METADATA_NAMES.map(x => `metadata.${x}`)
  ].filter(x => !notExpandedAttributes['io.cozy.files'].includes(x))
}

export const hasAllElement = (arr1, arr2) => arr1?.every(x => arr2.includes(x))

export const makeDefaultExpandedAttributes = (doc, expandedAttributes) => {
  const doctype = doc?._type

  if (!doc || !doctype) return undefined

  // checks if there are any expanded attributes.
  // If there are none, the default expanded attributes are returned
  if (
    !expandedAttributes ||
    hasAllElement(expandedAttributes, notExpandedAttributes[doctype])
  ) {
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

export const getAttrValue = (doc, attrName) => {
  const attrValue = get(doc, attrName)
  if (!attrValue || attrValue.length === 0) return undefined

  switch (true) {
    case attrName === 'email':
      return attrValue.find(x => x.primary === true)?.address

    case attrName === 'address':
      return attrValue.find(x => x.primary === true)?.formattedAddress

    case attrName === 'phone':
      return attrValue.find(x => x.primary === true)?.number

    default:
      return attrValue
  }
}

export const makeAttrsValues = (doc, expandedAttributes) => {
  const attrsValues = expandedAttributes
    .map(attrName => {
      const attrValue = getAttrValue(doc, attrName)

      if (!attrValue) return undefined

      return {
        attrName,
        attrValue
      }
    })
    .filter(x => x)
    .slice(0, 3)

  return attrsValues
}

// could be use in apps
export const hasExpandedAttributesDisplayed = ({ doc, expandedAttributes }) => {
  const defaultExpandedAttributes = makeDefaultExpandedAttributes(
    doc,
    expandedAttributes
  )

  const attrsValues = makeAttrsValues(doc, defaultExpandedAttributes)

  return attrsValues?.length > 0 || false
}

export const getFormattedValue = ({
  attrName,
  attrValue,
  qualificationLabel,
  f,
  lang
}) => {
  if (isDate(attrValue)) {
    return formatDateMetadataValue(attrValue, { f, lang })
  }

  if (qualificationLabel) {
    return formatInformationMetadataValue(attrValue, {
      lang,
      name: attrName.split('metadata.')[1],
      qualificationLabel
    })
  }

  return attrValue
}

export const makeLabel = ({ attrName, qualificationLabel, t, lang }) => {
  if (qualificationLabel) {
    const name = attrName.split('metadata.')[1]
    const label = getTranslatedNameForInformationMetadata(name, {
      lang,
      qualificationLabel
    })
    return label
  }

  return t(`ListItem.attributes.${attrName}`)
}

export const makeAttrsLabelAndFormattedValue = ({
  doc,
  expandedAttributes,
  t,
  f,
  lang
}) => {
  const attrsKeyAndFormattedValue = makeAttrsValues(doc, expandedAttributes)

  return attrsKeyAndFormattedValue.map(({ attrName, attrValue }) => {
    const _attrName =
      attrName.match(/\[.+\]/g) !== null ? attrName.split('[')[0] : attrName
    const qualificationLabel = doc.metadata?.qualification?.label

    const label = makeLabel({
      attrName: _attrName,
      qualificationLabel,
      t,
      lang
    })

    const value = getFormattedValue({
      attrName: _attrName,
      attrValue,
      qualificationLabel,
      f,
      lang
    })

    return { label, value }
  })
}
