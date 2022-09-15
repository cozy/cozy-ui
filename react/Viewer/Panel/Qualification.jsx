import React, { useRef, useState, createRef, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

import List from '../../MuiCozyTheme/List'
import { withViewerLocales } from '../withViewerLocales'
import {
  formatMetadataQualification,
  knownDateMetadataNames,
  knowNumberMetadataNames,
  knowOtherMetadataNames
} from '../helpers'
import QualificationListItemContact from './QualificationListItemContact'
import ActionMenuWrapper from './ActionMenuWrapper'
import QualificationListItemDate from './QualificationListItemDate'
import QualificationListItemNumber from './QualificationListItemNumber'
import QualificationListItemOther from './QualificationListItemOther'

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

  const metadataComputed = useMemo(() => {
    return formatMetadataQualification(metadata)
  }, [metadata])

  useEffect(() => {
    actionBtnRef.current = metadataComputed.map(
      (_, idx) => actionBtnRef.current[idx] ?? createRef()
    )
  }, [metadataComputed])

  return (
    <List className={'u-pv-1'}>
      {metadataComputed.map((meta, idx) => {
        const { name } = meta

        if (knownDateMetadataNames.includes(name)) {
          return (
            <QualificationListItemDate
              key={idx}
              ref={actionBtnRef.current[idx]}
              metadataComputed={meta}
              toggleActionsMenu={val => toggleActionsMenu(idx, name, val)}
            />
          )
        }

        if (knowNumberMetadataNames.includes(name)) {
          return (
            <QualificationListItemNumber
              key={idx}
              ref={actionBtnRef.current[idx]}
              metadataComputed={meta}
              toggleActionsMenu={val => toggleActionsMenu(idx, name, val)}
            />
          )
        }

        if (knowOtherMetadataNames.includes(name)) {
          if (name === 'contact') {
            return <QualificationListItemContact key={idx} file={file} />
          }

          return (
            <QualificationListItemOther
              key={idx}
              ref={actionBtnRef.current[idx]}
              metadataComputed={meta}
              toggleActionsMenu={val => toggleActionsMenu(idx, name, val)}
            />
          )
        }
      })}

      {optionFile.value && (
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

export default withViewerLocales(React.memo(Qualification))
