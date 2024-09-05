import MuiTextField from '@material-ui/core/TextField'
import merge from 'lodash/merge'
import PropTypes from 'prop-types'
import React, { forwardRef, useEffect, useState } from 'react'

import ActionsMenuItem from '../ActionsMenu/ActionsMenuItem'
import ActionsMenuWrapper from '../ActionsMenu/ActionsMenuWrapper'
import Icon from '../Icon'
import BottomIcon from '../Icons/Bottom'
import InputAdornment from '../InputAdornment'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'
import Radio from '../Radios'

const MobileSelect = forwardRef(
  (
    { name, options, disabled, value, children, onClick, onChange, ...props },
    ref
  ) => {
    // As they are controlled input, we have to set empty string as default
    // because values can't be undefined and then defined
    const [state, setState] = useState({ label: '', value: '' })
    const [showDrawer, setShowDrawer] = useState(false)

    const initialLabel = options.find(option => {
      return option.value === value
    })?.label

    const handleClick = () => {
      setShowDrawer(true)
      onClick?.()
    }

    const handleItemClick =
      ({ value, children, onClick }) =>
      ev => {
        onClick?.(merge({}, ev, { target: { value } }))
        setState({ label: children, value })
        onChange?.({ target: { value } })
      }

    const handleClose = () => {
      setShowDrawer(false)
    }

    useEffect(() => {
      setState({ label: initialLabel || '', value: value || '' })
    }, [initialLabel, value])

    return (
      <>
        <MuiTextField
          style={{ display: 'none' }}
          type="hidden"
          name={name}
          value={state.value}
        />
        <MuiTextField
          {...props}
          ref={ref}
          type="button"
          aria-controls="simple-menu"
          aria-haspopup="true"
          name="dummy"
          value={state.label}
          disabled={disabled}
          inputProps={{ className: 'u-ta-left' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon
                  icon={BottomIcon}
                  color={
                    disabled
                      ? 'var(--disabledTextColor)'
                      : 'var(--iconTextColor)'
                  }
                />
              </InputAdornment>
            )
          }}
          onClick={handleClick}
        />

        {showDrawer && (
          <ActionsMenuWrapper open autoClose onClose={handleClose}>
            {React.Children.map(children, child => {
              return React.isValidElement(child) ? (
                <ActionsMenuItem
                  {...child.props}
                  size="small"
                  autoFocus={child.props.value === value}
                  onClick={handleItemClick(child.props)}
                >
                  <ListItemIcon>
                    <Radio
                      aria-hidden="true"
                      tabIndex="-1"
                      checked={child.props.value === state.value}
                    />
                  </ListItemIcon>
                  <ListItemText primary={child.props.children} />
                </ActionsMenuItem>
              ) : null
            })}
          </ActionsMenuWrapper>
        )}
      </>
    )
  }
)

MobileSelect.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

export default MobileSelect
