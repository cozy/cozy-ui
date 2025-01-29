import PropTypes from 'prop-types'
import React, { useMemo } from 'react'

import { useClient } from 'cozy-client'
import { isSupportedQualification } from 'cozy-client/dist/models/document/qualification'

import { makeOptions } from './helpers'
import { locales } from './locales'
import NestedSelectResponsive from '../NestedSelect/NestedSelectResponsive'
import { useI18n, useExtendI18n } from '../providers/I18n'

const QualificationModal = ({ file, title, onClose }) => {
  useExtendI18n(locales)
  const client = useClient()
  const { t, lang } = useI18n()

  const qualificationLabel = file.metadata?.qualification?.label
  const options = useMemo(() => makeOptions(lang), [lang])

  const isSelected = ({ id, item }) => {
    return isSupportedQualification(qualificationLabel)
      ? qualificationLabel === item?.label
      : id === 'none'
  }

  const handleClick = async ({ id, item }) => {
    const fileCollection = client.collection('io.cozy.files')
    const removeQualification = qualificationLabel && id === 'none'

    /*
      In the case where we remove the qualification it's necessary to define the attribute to `null` and not `undefined`, with `undefined` the stack does not return the attribute and today the Redux store is not updated for a missing attribute.
      As a result, the UI is not updated and continues to display the qualification on the document, even though it has been deleted in CouchDB.
    */
    await fileCollection.updateMetadataAttribute(file._id, {
      qualification: removeQualification ? null : item
    })

    onClose()
  }

  return (
    <NestedSelectResponsive
      title={title || t('QualificationModal.title')}
      options={options}
      noDivider
      document={file}
      isSelected={isSelected}
      onSelect={handleClick}
      onClose={onClose}
    />
  )
}

QualificationModal.propTypes = {
  file: PropTypes.object,
  title: PropTypes.string,
  onClose: PropTypes.func
}

export default QualificationModal
