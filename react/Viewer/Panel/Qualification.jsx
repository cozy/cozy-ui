import React, { useRef, useState, createRef, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

import { models } from 'cozy-client'

import List from '../../MuiCozyTheme/List'
import { withViewerLocales } from '../hoc/withViewerLocales'
import {
  formatMetadataQualification,
  knownDateMetadataNames,
  knownInformationMetadataNames,
  knownOtherMetadataNames
} from '../helpers'
import ExpirationAlert from '../components/ExpirationAlert'
import QualificationListItemContact from './QualificationListItemContact'
import ActionMenuWrapper from './ActionMenuWrapper'
import QualificationListItemDate from './QualificationListItemDate'
import QualificationListItemInformation from './QualificationListItemInformation'
import QualificationListItemOther from './QualificationListItemOther'

const { isExpiringSoon } = models.paper

const makeQualificationListItemComp = metadataName => {
  if (knownDateMetadataNames.includes(metadataName)) {
    return QualificationListItemDate
  }

  if (knownInformationMetadataNames.includes(metadataName)) {
    return QualificationListItemInformation
  }

  if (knownOtherMetadataNames.includes(metadataName)) {
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
    <div className="u-flex u-flex-column" style={{ rowGap: '1rem' }}>
      {isExpiringSoon(file) && !isExpirationAlertHidden(file) && (
        <ExpirationAlert file={file} />
      )}
      <List className="u-pv-0">
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
    </div>
  )
}

Qualification.propTypes = {
  file: PropTypes.object.isRequired
}

export default withViewerLocales(Qualification)
