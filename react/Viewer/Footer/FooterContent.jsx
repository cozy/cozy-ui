import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import { isMobileApp } from 'cozy-device-helper'
import { getReferencedBy, useQuery, models } from 'cozy-client'

import BottomSheet, { BottomSheetHeader } from '../../BottomSheet'

import { buildContactByIdsQuery } from '../queries'
import { isValidForPanel } from '../helpers'
import Sharing from './Sharing'
import ForwardButton from './ForwardButton'
import DownloadButton from './DownloadButton'
import BottomSheetContent from './BottomSheetContent'

const {
  contact: { getDisplayName }
} = models

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100% - 2rem)',
    height: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTop: `1px solid ${theme.palette.divider}`
  }
}))

const FooterContent = ({ file, toolbarRef, disableSharing }) => {
  const styles = useStyles()
  const FileActionButton = isMobileApp() ? ForwardButton : DownloadButton
  const toolbarProps = useMemo(() => ({ ref: toolbarRef }), [toolbarRef])

  const contactIds = getReferencedBy(file, 'io.cozy.contacts').map(
    ref => ref.id
  )
  const contactByIdsQuery = buildContactByIdsQuery(contactIds)
  const { data: contactList } = useQuery(contactByIdsQuery.definition, {
    ...contactByIdsQuery.options,
    enabled: contactIds.length > 0
  })

  const contactsFullname = Array.isArray(contactList)
    ? contactList.map(contact => `${getDisplayName(contact)}`).join(', ')
    : ''

  if (
    isValidForPanel({ file }) &&
    (contactsFullname || contactIds.length === 0)
  ) {
    return (
      <BottomSheet toolbarProps={toolbarProps}>
        <BottomSheetHeader className="u-ph-1 u-pb-1">
          {!disableSharing && <Sharing file={file} />}
          <FileActionButton file={file} />
        </BottomSheetHeader>
        <BottomSheetContent file={file} contactsFullname={contactsFullname} />
      </BottomSheet>
    )
  }

  return (
    <div className={styles.footer}>
      {!disableSharing && <Sharing file={file} />}
      <FileActionButton file={file} />
    </div>
  )
}

FooterContent.propTypes = {
  file: PropTypes.object.isRequired,
  toolbarRef: PropTypes.object,
  disableSharing: PropTypes.bool
}

export default FooterContent
