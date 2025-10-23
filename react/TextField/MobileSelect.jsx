import MuiTextField from '@material-ui/core/TextField'
import merge from 'lodash/merge'
import PropTypes from 'prop-types'
import React, { forwardRef, useEffect, useState } from 'react'

import { getLabelByValue, toggleInArray } from './helpers'
import ActionsMenuItem from '../ActionsMenu/ActionsMenuItem'
import ActionsMenuWrapper from '../ActionsMenu/ActionsMenuWrapper'
import Checkbox from '../Checkbox'
import Icon from '../Icon'
import BottomIcon from '../Icons/Bottom'
import InputAdornment from '../InputAdornment'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'
import Radio from '../Radios'

const MobileSelect = forwardRef(
  (
    {
      id,
      name,
      options,
      disabled,
      value,
      children,
      onClick,
      onChange,
      ...props
    },
    ref
  ) => {
    const isMultiple = Array.isArray(value)

    // As they are controlled input, we have to set empty string as default
    // because values can't be undefined and then defined
    const [state, setState] = useState({
      label: '',
      value: isMultiple ? [] : ''
    })
    const [showDrawer, setShowDrawer] = useState(false)

    const initialLabel = isMultiple
      ? value.map(v => getLabelByValue(options, v)).join(', ')
      : getLabelByValue(options, value)

    const handleClick = () => {
      setShowDrawer(true)
      onClick?.()
    }

    const handleItemClick =
      ({ value, children, onClick }) =>
      ev => {
        const _value = isMultiple ? toggleInArray(state.value, value) : value

        onClick?.(merge({}, ev, { target: { value: _value } }))
        setState({ label: children, value: _value })
        onChange?.({ target: { value: _value } })
      }

    const handleClose = () => {
      setShowDrawer(false)
    }

    useEffect(() => {
      setState({
        label: initialLabel || '',
        value: value || (isMultiple ? [] : '')
      })
    }, [initialLabel, value, isMultiple])

    return (
      <>
        <MuiTextField
          id={id}
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
                  rotate={showDrawer ? 180 : 0}
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
          <ActionsMenuWrapper
            open
            autoClose={!isMultiple}
            onClose={handleClose}
          >
            {React.Children.map(children, child => {
              return React.isValidElement(child) ? (
                <ActionsMenuItem
                  {...child.props}
                  size="small"
                  autoFocus={
                    isMultiple
                      ? child.props.value === value[0]
                      : child.props.value === value
                  }
                  onClick={handleItemClick(child.props)}
                >
                  <ListItemIcon>
                    {isMultiple ? (
                      <Checkbox
                        aria-hidden="true"
                        tabIndex="-1"
                        checked={state.value.includes(child.props.value)}
                      />
                    ) : (
                      <Radio
                        aria-hidden="true"
                        tabIndex="-1"
                        checked={child.props.value === state.value}
                      />
                    )}
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

MobileSelect.displayName = 'MobileSelect'

MobileSelect.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

export default MobileSelect
