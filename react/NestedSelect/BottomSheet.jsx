import React from 'react'
import cx from 'classnames'

import Icon from '../Icon'
import IconButton from '../IconButton'
import ArrowUpIcon from '../Icons/ArrowUp'
import BottomSheet, { BottomSheetHeader, BottomSheetItem } from '../BottomSheet'
import Typography from '../Typography'
import Divider from '../Divider'

import NestedSelect from './NestedSelect'

const HeaderComponent = ({ title, showBack, onClickBack }) => {
  if (!title) return null

  return (
    <>
      <BottomSheetHeader
        className={cx('u-h-3', { 'u-pl-half u-pr-3': showBack })}
      >
        {showBack && (
          <IconButton onClick={onClickBack}>
            <Icon icon={ArrowUpIcon} rotate={-90} />
          </IconButton>
        )}
        <Typography className="u-w-100" variant="h6" align="center">
          {title}
        </Typography>
      </BottomSheetHeader>
      <Divider />
    </>
  )
}

const SelfBottomSheet = props => {
  return (
    <BottomSheet
      {...props?.componentsProps?.bottomsheet}
      backdrop
      onClose={props.onClose}
    >
      <BottomSheetItem disableGutters>
        <NestedSelect HeaderComponent={HeaderComponent} {...props} />
      </BottomSheetItem>
    </BottomSheet>
  )
}

export default SelfBottomSheet
