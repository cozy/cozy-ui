import React, { useRef, useState, createRef, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  isExpiringSoon,
  formatMetadataQualification,
  KNOWN_BILLS_ATTRIBUTES_NAMES,
  getMetadataQualificationType
} from 'cozy-client/dist/models/paper'

import List from '../../List'
import { withViewerLocales } from '../hoc/withViewerLocales'
import ExpirationAlert from '../components/ExpirationAlert'
import ActionMenuWrapper from './ActionMenuWrapper'
import QualificationListItemContact from './QualificationListItemContact'
import QualificationListItemDate from './QualificationListItemDate'
import QualificationListItemInformation from './QualificationListItemInformation'
import QualificationListItemOther from './QualificationListItemOther'

const ComponentFromMetadataQualificationType = {
  contact: QualificationListItemContact,
  date: QualificationListItemDate,
  information: QualificationListItemInformation,
  other: QualificationListItemOther,
  bills: QualificationListItemInformation
}

const isExpirationAlertHidden = file => {
  return file?.metadata?.hideExpirationAlert ?? false
}

const Qualification = ({ file }) => {
  const { metadata = {} } = file
  const actionBtnRef = useRef([])
  const [optionFile, setOptionFile] = useState({
    id: '',
    name: '',
    value: ''
  })

  const hideActionsMenu = () => {
    setOptionFile({ id: '', name: '', value: '' })
  }

  const toggleActionsMenu = (id, name, value) => {
    setOptionFile(prev => {
      if (prev.value) return { id: '', name: '', value: '' }
      return { id, name, value }
    })
  }

  const formattedMetadataQualification = useMemo(() => {
    const relatedBills = file.bills?.data?.[0]

    if (relatedBills) {
      const formattedBillsMetadata = KNOWN_BILLS_ATTRIBUTES_NAMES.map(
        attrName => ({ name: attrName, value: relatedBills[attrName] })
      )

      return formatMetadataQualification(metadata).concat(
        formattedBillsMetadata
      )
    }

    return formatMetadataQualification(metadata)
  }, [metadata, file.bills?.data])

  useEffect(() => {
    actionBtnRef.current = formattedMetadataQualification.map(
      (_, idx) => actionBtnRef.current[idx] ?? createRef()
    )
  }, [formattedMetadataQualification])

  return (
    <>
      {isExpiringSoon(file) && !isExpirationAlertHidden(file) && (
        <ExpirationAlert file={file} />
      )}
      <List className={'u-pv-1'}>
        {formattedMetadataQualification.map((meta, idx) => {
          const { name } = meta
          const metadataQualificationType = getMetadataQualificationType(name)
          const QualificationListItemComp =
            ComponentFromMetadataQualificationType[metadataQualificationType]

          return (
            <QualificationListItemComp
              key={idx}
              file={file}
              ref={actionBtnRef.current[idx]}
              formattedMetadataQualification={meta}
              toggleActionsMenu={val => toggleActionsMenu(idx, name, val)}
            />
          )
        })}

        {optionFile.name && (
          <ActionMenuWrapper
            onClose={hideActionsMenu}
            file={file}
            optionFile={optionFile}
            ref={actionBtnRef.current[optionFile.id]}
          />
        )}
      </List>
    </>
  )
}

Qualification.propTypes = {
  file: PropTypes.object.isRequired
}

export default withViewerLocales(Qualification)
