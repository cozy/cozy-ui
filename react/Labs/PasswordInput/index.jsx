import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { getStrength } from './helpers'
import styles from './styles.styl'
import Icon from '../../Icon'
import EyeIcon from '../../Icons/Eye'
import EyeClosedIcon from '../../Icons/EyeClosed'
import Input from '../../Input'
import InputGroup from '../../InputGroup'

const HideShowButton = props => {
  const { hidden, className, ...rest } = props

  return (
    <button
      type="button"
      className={cx(styles['PasswordInput__visibilityButton'], className)}
      {...rest}
    >
      <Icon
        icon={hidden ? EyeIcon : EyeClosedIcon}
        size={16}
        color="var(--coolGrey)"
      />
    </button>
  )
}

const Strength = props => {
  const { password, className, ...rest } = props
  const strength = getStrength(password)

  return (
    <progress
      step="1"
      min="0"
      max="100"
      value={strength.percentage}
      className={cx(
        styles['PasswordInput__strength'],
        styles[`PasswordInput__strength--${strength.label}`],
        className
      )}
      {...rest}
    />
  )
}

const PasswordInput = props => {
  const { className, showStrength, error, ...rest } = props
  const [hidden, setHidden] = useState(true)

  return (
    <div className={cx(styles.PasswordInput, className)}>
      <InputGroup
        append={
          <HideShowButton hidden={hidden} onClick={() => setHidden(!hidden)} />
        }
        className={cx(showStrength && styles['PasswordInput--withStrength'])}
        error={error}
      >
        <Input {...rest} type={hidden ? 'password' : 'text'} />
      </InputGroup>
      {showStrength ? <Strength password={props.value} /> : null}
    </div>
  )
}

PasswordInput.propTypes = {
  showStrength: PropTypes.bool,
  error: PropTypes.bool
}

PasswordInput.defaultProps = {
  showStrength: false,
  error: false
}

export default PasswordInput
