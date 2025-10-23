import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

import { BottomSheetItem } from '../BottomSheet'
import Icon, { iconPropType } from '../Icon'
import List from '../List'
import ListItem from '../ListItem'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'
import Typography from '../Typography'

const BottomSheetTitle = forwardRef(({ className, label, icon }, ref) => {
  if (icon) {
    return (
      <BottomSheetItem disableGutters disableElevation>
        <List ref={ref}>
          <ListItem>
            <ListItemIcon>
              <Icon icon={icon} size={32} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography className="u-ellipsis" variant="h6">
                  {label}
                </Typography>
              }
            />
          </ListItem>
        </List>
      </BottomSheetItem>
    )
  }

  return (
    <BottomSheetItem disableElevation>
      <Typography
        ref={ref}
        className={cx('u-flex u-flex-justify-center', className)}
        variant="h6"
      >
        {label}
      </Typography>
    </BottomSheetItem>
  )
})

BottomSheetTitle.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  icon: iconPropType
}

export default BottomSheetTitle
