import React, { useMemo, Children, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import cx from 'classnames'

import BottomSheet, { BottomSheetHeader } from '../../BottomSheet'

import { isValidForPanel } from '../helpers'
import BottomSheetContent from './BottomSheetContent'
import useReferencedContactName from '../hooks/useReferencedContactName'

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100% - 2rem)',
    height: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTop: `1px solid ${theme.palette.divider}`,
    columnGap: '0.5rem'
  },
  bottomSheetHeader: {
    columnGap: '0.5rem'
  }
}))

const FooterContent = ({ file, toolbarRef, children }) => {
  const styles = useStyles()

  const toolbarProps = useMemo(() => ({ ref: toolbarRef }), [toolbarRef])

  const { contactName, isLoadingContacts } = useReferencedContactName(file)

  const FooterActionButtons =
    Children.toArray(children).find(child => {
      return (
        child.type.name === 'FooterActionButtons' ||
        child.type.displayName === 'FooterActionButtons'
      )
    }) || null

  const FooterActionButtonsWithFile = isValidElement(FooterActionButtons)
    ? cloneElement(FooterActionButtons, {
        file
      })
    : null

  // We have to wait for the Contact request to finish before rendering `BottomSheet`, because it doesn't handle async well.
  if (isValidForPanel({ file }) && !isLoadingContacts) {
    return (
      <BottomSheet toolbarProps={toolbarProps}>
        <BottomSheetHeader
          className={cx('u-ph-1 u-pb-1', styles.bottomSheetHeader)}
        >
          {FooterActionButtonsWithFile}
        </BottomSheetHeader>
        <BottomSheetContent file={file} contactsFullname={contactName} />
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
