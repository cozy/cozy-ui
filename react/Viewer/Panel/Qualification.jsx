import React, { useRef, useState, createRef, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

import List from '../../MuiCozyTheme/List'
import { withViewerLocales } from '../hoc/withViewerLocales'
import {
  formatMetadataQualification,
  knownDateMetadataNames,
  knowInformationMetadataNames,
  knowOtherMetadataNames
} from '../helpers'
import QualificationListItemContact from './QualificationListItemContact'
import ActionMenuWrapper from './ActionMenuWrapper'
import QualificationListItemDate from './QualificationListItemDate'
import QualificationListItemInformation from './QualificationListItemInformation'
import QualificationListItemOther from './QualificationListItemOther'

const makeQualificationListItemComp = metadataName => {
  if (knownDateMetadataNames.includes(metadataName)) {
    return QualificationListItemDate
  }

  if (knowInformationMetadataNames.includes(metadataName)) {
    return QualificationListItemInformation
  }

  if (knowOtherMetadataNames.includes(metadataName)) {
    return QualificationListItemOther
  }
}

const Qualification = ({ file = {} }) => {
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
    <List className={'u-pv-1'}>
      {formatedMetadataQualification.map((meta, idx) => {
        const { name } = meta

        if (name === 'contact') {
          return <QualificationListItemContact key={idx} file={file} />
        }

        const QualificationListItemComp = makeQualificationListItemComp(name)

        return (
          <QualificationListItemComp
            key={idx}
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
  )
}

Qualification.propTypes = {
  file: PropTypes.object
}

export default withViewerLocales(Qualification)
