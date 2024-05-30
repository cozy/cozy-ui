import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import BottomSheet, { BottomSheetHeader } from '../../BottomSheet'
import { makeStyles } from '../../styles'
import { isValidForPanel } from '../helpers'
import PrintButton from '../components/PrintButton'
import { extractChildrenCompByName } from './helpers'
import BottomSheetContent from './BottomSheetContent'

const FooterButtons = ({
  file,
  FooterActionButtonsWithFile = { FooterActionButtonsWithFile }
}) => {
  return (
    <>
      {FooterActionButtonsWithFile}
      <PrintButton file={file} variant="button" />
    </>
  )
}

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

const FooterContent = ({ file, toolbarRef, children, isPublic }) => {
  const styles = useStyles()

  const toolbarProps = useMemo(() => ({ ref: toolbarRef }), [toolbarRef])

  const FooterActionButtonsWithFile = extractChildrenCompByName({
    children,
    file,
    name: 'FooterActionButtons'
  })

  const bottomSheetSettings = {
    isOpenMin: isPublic ? true : false,
    mediumHeightRatio: isPublic ? undefined : 0.5
  }

  if (isValidForPanel({ file })) {
    return (
      <BottomSheet
        toolbarProps={toolbarProps}
        portalProps={{ disablePortal: true }}
        settings={bottomSheetSettings}
      >
        <BottomSheetHeader
          className={cx('u-ph-1 u-pb-1', styles.bottomSheetHeader)}
        >
          <FooterButtons
            file={file}
            FooterActionButtonsWithFile={FooterActionButtonsWithFile}
          />
        </BottomSheetHeader>
        <BottomSheetContent file={file} isPublic={isPublic} />
      </BottomSheet>
    )
  }

  // If `FooterActionButtons` hasn't children
  if (!FooterActionButtonsWithFile) return null

  return (
    <div className={styles.footer}>
      <FooterButtons
        file={file}
        FooterActionButtonsWithFile={FooterActionButtonsWithFile}
      />
    </div>
  )
}

FooterContent.propTypes = {
  file: PropTypes.object.isRequired,
  toolbarRef: PropTypes.object,
  isPublic: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default FooterContent
