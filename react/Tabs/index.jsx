import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import MuiTabs from '@material-ui/core/Tabs'
import cx from 'classnames'

import useBreakpoints from '../providers/Breakpoints'

const Tabs = forwardRef(
  ({ className, variant, narrowed, segmented, children, ...props }, ref) => {
    const { isMobile } = useBreakpoints()

    return (
      <MuiTabs
        ref={ref}
        className={cx(className, { segmented })}
        variant={isMobile && variant === 'standard' ? 'fullWidth' : variant}
        {...props}
      >
        {React.Children.map(children, child => {
          if (child) {
            return React.cloneElement(child, {
              className: cx(child.props.className, { narrowed, segmented })
            })
          }
        })}
      </MuiTabs>
    )
  }
)

Tabs.displayName = 'Tabs'

Tabs.defaultProps = {
  variant: 'standard',
  narrowed: false,
  segmented: false
}

Tabs.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'fullWidth', 'scrollable']),
  narrowed: PropTypes.bool,
  segmented: PropTypes.bool
}

export default Tabs
