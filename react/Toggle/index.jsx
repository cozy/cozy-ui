import styles from './styles.styl'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toggle extends Component {
  onChange() {
    if (this.props.onToggle) {
      this.props.onToggle(!this.props.checked)
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
