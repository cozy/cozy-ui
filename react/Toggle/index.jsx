import styles from './styles.styl'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toggle extends Component {
  componentDidMount() {
    console.warn(`The Toggle component is deprecated, please use the Switch component:

    const handleToggle = toggled => {}

    - import Toggle from 'cozy-ui/transpiled/react/Toggle'
    + import Switch from 'cozy-ui/transpiled/react/Switch'

    - <Toggle onToggle={handleToggle} />
    + <Switch onClick={ ev => handleToggle(ev.target.checked) } />`)
  }

  onChange(e) {
    if (this.props.onToggle) {
      this.props.onToggle(e.target.checked)
    }
  }

  render() {
    const { id, checked = false, disabled = false } = this.props
    return (
      <span className={styles['toggle']}>
        <input
          type="checkbox"
          id={id}
          className={styles['checkbox']}
          checked={checked}
          disabled={disabled}
          onChange={this.onChange.bind(this)}
        />
        <label htmlFor={id} className={styles['label']} />
      </span>
    )
  }
}

Toggle.propTypes = {
  id: PropTypes.string.isRequired, // A unique id for the toggle, used internally.
  checked: PropTypes.bool, // The state of the toggle
  disabled: PropTypes.bool, // Guess what...
  onToggle: PropTypes.func // A callback when the state of the toggle changes. Called with the new state as argument.
}

export default Toggle
