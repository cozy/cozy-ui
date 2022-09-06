import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import ListItem from '../../MuiCozyTheme/ListItem'
import ListItemSecondaryAction from '../../MuiCozyTheme/ListItemSecondaryAction'
import IconButton from '../../IconButton'
import Icon from '../../Icon'
import Dots from '../../Icons/Dots'
import QualificationListItemText from './QualificationListItemText'
import Spinner from '../../Spinner'
import useReferencedContactName from '../hooks/useReferencedContactName'
import { useI18n } from '../../I18n'
import ActionMenuWrapper from './ActionMenuWrapper'

const QualificationListItemContact = ({ file }) => {
  const { t } = useI18n()
  const actionBtnRef = useRef()
  const [optionFile, setOptionFile] = useState({
    isOpen: false,
    value: ''
  })

  const hideActionsMenu = () => setOptionFile({ isOpen: false, value: '' })
  const toggleActionsMenu = value =>
    setOptionFile(prev => {
      if (prev.isOpen) return { isOpen: false, value: '' }
      return { isOpen: true, value }
    })

  const { contactName, isLoadingContacts } = useReferencedContactName(file)

  if (isLoadingContacts) {
    return (
      <ListItem className={'u-pl-2 u-pr-3'}>
        <Spinner color="var(--secondaryTextColor)" />
      </ListItem>
    )
  }

  if (!isLoadingContacts && !contactName) {
    return null
  }

  return (
    <>
      <ListItem className={'u-ph-2'}>
        <QualificationListItemText
          primary={t('Viewer.panel.qualification.owner')}
          secondary={contactName}
        />
        <ListItemSecondaryAction>
          <IconButton
            ref={actionBtnRef}
            onClick={() => toggleActionsMenu(contactName)}
          >
            <Icon icon={Dots} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      {optionFile.isOpen && (
        <ActionMenuWrapper
          onClose={hideActionsMenu}
          value={optionFile.value}
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
