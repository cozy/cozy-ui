import React, { useRef, useState, createRef, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  isExpiringSoon,
  formatMetadataQualification,
  KNOWN_DATE_METADATA_NAMES,
  KNOWN_INFORMATION_METADATA_NAMES,
  KNOWN_OTHER_METADATA_NAMES
} from 'cozy-client/dist/models/paper'

import List from '../../List'
import { withViewerLocales } from '../hoc/withViewerLocales'
import ExpirationAlert from '../components/ExpirationAlert'
import QualificationListItemContact from './QualificationListItemContact'
import ActionMenuWrapper from './ActionMenuWrapper'
import QualificationListItemDate from './QualificationListItemDate'
import QualificationListItemInformation from './QualificationListItemInformation'
import QualificationListItemOther from './QualificationListItemOther'

const makeQualificationListItemComp = metadataName => {
  if (KNOWN_DATE_METADATA_NAMES.includes(metadataName)) {
    return QualificationListItemDate
  }

  if (KNOWN_INFORMATION_METADATA_NAMES.includes(metadataName)) {
    return QualificationListItemInformation
  }

  if (KNOWN_OTHER_METADATA_NAMES.includes(metadataName)) {
    if (metadataName === 'contact') {
      return QualificationListItemContact
    }
    return QualificationListItemOther
  }
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

  const formatedMetadataQualification = useMemo(() => {
    return formatMetadataQualification(metadata)
  }, [metadata])

  useEffect(() => {
    actionBtnRef.current = formatedMetadataQualification.map(
      (_, idx) => actionBtnRef.current[idx] ?? createRef()
    )
  }, [formatedMetadataQualification])

  return (
    <>
      {isExpiringSoon(file) && !isExpirationAlertHidden(file) && (
        <ExpirationAlert file={file} />
      )}
      <List className={'u-pv-1'}>
        {formatedMetadataQualification.map((meta, idx) => {
          const { name } = meta
          const QualificationListItemComp = makeQualificationListItemComp(name)

          return (
            <QualificationListItemComp
              key={idx}
              file={file}
              ref={actionBtnRef.current[idx]}
              formatedMetadataQualification={meta}
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
