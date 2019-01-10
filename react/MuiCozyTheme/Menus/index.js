import React, { Component } from 'react'

import MenuButton from '../../Button'
import PropTypes from 'prop-types'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'
import MenuList from '@material-ui/core/MenuList'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    position: 'relative'
  },
  paper: {
    '& hr': {
      margin: '8px 0',
      border: 0,
      borderTop: '1px solid var(--silver)'
    }
  }
}

class Menu extends Component {
  state = { open: false, anchorEl: null }

  toggle = event => {
    const { currentTarget } = event
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open
    }))
  }

  close = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const {
      label,
      disabled,
      buttonClassName,
      component,
      children,
      placement,
      classes
    } = this.props
    const { open, anchorEl } = this.state
    const offset = {
      offset: {
        offset: '0, 4'
      }
    }

    return (
      <ClickAwayListener onClickAway={this.close}>
        <div className={classes.root}>
          {!component ? (
            <MenuButton
              disabled={disabled}
              onClick={this.toggle}
              label={label}
              buttonClassName={buttonClassName}
            />
          ) : (
            React.cloneElement(component, {
              disabled,
              onClick: this.toggle
            })
          )}
          <Popper
            open={open}
            anchorEl={anchorEl}
            transition
            disablePortal
            placement={placement}
            modifiers={offset}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-end' ? 'center top' : 'center bottom'
                }}
              >
                <Paper className={classes.paper}>
                  <MenuList>{children}</MenuList>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </ClickAwayListener>
    )
  }
}

Menu.defaultProps = {
  disabled: false,
  component: null,
  placement: 'bottom-end'
}

Menu.propTypes = {
  /** Disables the menu */
  disabled: PropTypes.bool,
  /** Specifies a custom component for the opener */
  component: PropTypes.element,
  /** placement for the popover */
  placement: PropTypes.oneOf(['bottom-start', 'bottom-end'])
}

Menu.MenuButton = MenuButton
export default withStyles(styles, { name: 'MuiMenu' })(Menu)

export { MenuButton }
