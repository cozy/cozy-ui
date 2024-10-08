import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'

import {
  getTranslatedNameForContact,
  formatContactValue
} from 'cozy-client/dist/models/paper'

import ActionMenuWrapper from './ActionMenuWrapper'
import QualificationListItemText from './QualificationListItemText'
import Icon from '../../Icon'
import IconButton from '../../IconButton'
import Dots from '../../Icons/Dots'
import ListItem from '../../ListItem'
import ListItemSecondaryAction from '../../ListItemSecondaryAction'
import Spinner from '../../Spinner'
import { useI18n } from '../../providers/I18n'
import useReferencedContactName from '../hooks/useReferencedContactName'

const QualificationListItemContact = ({ file }) => {
  const { lang } = useI18n()
  const actionBtnRef = useRef()
  const [optionFile, setOptionFile] = useState({
    name: '',
    value: ''
  })

  const hideActionsMenu = () => setOptionFile({ name: '', value: '' })
  const toggleActionsMenu = (name, value) =>
    setOptionFile(prev => {
      if (prev.value) return { name: '', value: '' }
      return { name, value }
    })

  const { contacts, isLoadingContacts } = useReferencedContactName(file)

  if (isLoadingContacts) {
    return (
      <ListItem className="u-pl-2 u-pr-3">
        <Spinner color="var(--secondaryTextColor)" />
      </ListItem>
    )
  }

  const formattedTitle = getTranslatedNameForContact({ lang })
  const formattedValue = formatContactValue(contacts)

  if (!isLoadingContacts && !formattedValue) {
    return null
  }

  return (
    <>
      <ListItem className="u-ph-2">
        <QualificationListItemText
          primary={formattedTitle}
          secondary={formattedValue}
        />
        <ListItemSecondaryAction>
          <IconButton
            ref={actionBtnRef}
            onClick={() => toggleActionsMenu('contact', formattedValue)}
          >
            <Icon icon={Dots} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      {optionFile.value && (
        <ActionMenuWrapper
          onClose={hideActionsMenu}
          file={file}
          optionFile={optionFile}
          ref={actionBtnRef}
        />
      )}
    </>
  )
}

QualificationListItemContact.propTypes = {
  file: PropTypes.object.isRequired
}

export default QualificationListItemContact
