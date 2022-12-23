import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List'
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Icon, { iconPropType } from 'cozy-ui/react/Icon'
import { BottomSheetItem } from 'cozy-ui/transpiled/react/BottomSheet'

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
