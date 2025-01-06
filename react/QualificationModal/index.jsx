import PropTypes from 'prop-types'
import React, { useMemo } from 'react'

import { useClient } from 'cozy-client'
import { themesList } from 'cozy-client/dist/models/document/documentTypeData'
import { isQualificationNote } from 'cozy-client/dist/models/document/documentTypeDataHelpers'
import { getBoundT } from 'cozy-client/dist/models/document/locales'
import { isSupportedQualification } from 'cozy-client/dist/models/document/qualification'

import { locales } from './locales'
import Icon from '../Icon'
import FileTypeNoteIcon from '../Icons/FileTypeNote'
import NestedSelectResponsive from '../NestedSelect/NestedSelectResponsive'
import QualificationIconStack from '../QualificationIconStack'
import { useI18n, useExtendI18n } from '../providers/I18n'

const makeOptions = lang => {
  const qualifT = getBoundT(lang)

  return {
    children: [
      {
        id: 'none',
        title: qualifT('Scan.themes.none'),
        icon: <QualificationIconStack />
      },
      ...themesList.map(theme => ({
        id: theme.id,
        title: qualifT(`Scan.themes.${theme.label}`),
        icon: <QualificationIconStack theme={theme.label} />,
        children: theme.items.map(item => ({
          id: item.label,
          item,
          title: qualifT(`Scan.items.${item.label}`),
          icon: isQualificationNote(item) ? (
            <Icon icon={FileTypeNoteIcon} size={64} />
          ) : (
            <QualificationIconStack qualification={item.label} />
          )
        }))
      }))
    ]
  }
}

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
