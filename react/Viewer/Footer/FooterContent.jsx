import React, { useMemo, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import { getReferencedBy, useQuery, models } from 'cozy-client'

import BottomSheet, { BottomSheetHeader } from '../../BottomSheet'

import { buildContactByIdsQuery } from '../queries'
import { isValidForPanel } from '../helpers'
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

const FooterContent = ({ file, toolbarRef, children }) => {
  const styles = useStyles()

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

  const FooterActionButtons = Children.toArray(children).find(child => {
    return (
      child.type.name === 'FooterActionButtons' ||
      child.type.displayName === 'FooterActionButtons'
    )
  })

  const FooterActionButtonsWithFile = cloneElement(FooterActionButtons, {
    file
  })

  if (
    isValidForPanel({ file }) &&
    (contactsFullname || contactIds.length === 0)
  ) {
    return (
      <BottomSheet toolbarProps={toolbarProps}>
        <BottomSheetHeader className="u-ph-1 u-pb-1">
          {FooterActionButtonsWithFile}
        </BottomSheetHeader>
        <BottomSheetContent file={file} contactsFullname={contactsFullname} />
      </BottomSheet>
    )
  }

  // If `FooterActionButtons` hasn't children
  if (!FooterActionButtons) return null

  return <div className={styles.footer}>{FooterActionButtonsWithFile}</div>
}

FooterContent.propTypes = {
  file: PropTypes.object.isRequired,
  toolbarRef: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default FooterContent
